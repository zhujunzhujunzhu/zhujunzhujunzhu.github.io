
      // rem 计算规则
      // 假设初始 html font-size 100px , screen width 320px ,则有 1rem = 100px
      // 此时放大到 screen width 为 640px , 则 font-size 为 何值 ?
      // 640 / 320 = 2 , 100 * 2 = 200 则有 1rem = 200px

      // 16:9  如果 width / height > 16 / 9 取 height 作为基准 否则 取 width 作为基准

      var remIns = {
        baseScale: 16 / 9,
        baseWidth: 1920,
        baseHeight: 1080,
        baseFontSize: 100
      };

      remIns.rem2px = function(rem) {
        return remIns.rem1Ofpx * rem;
      };

      remIns.onWindowResize = function() {
        var scale = document.body.clientWidth / document.body.clientHeight;

        if (scale > remIns.baseScale) {
          // 基于高度来计算
          utilIns.debounce(function() {
            var clientHeight = document.body.clientHeight;
            var dpr = clientHeight / remIns.baseHeight;
            var fontSize = remIns.baseFontSize * dpr;
            remIns.rem1Ofpx = fontSize;
            document.documentElement.style["font-size"] = [fontSize, "px"].join(
              ""
            );
          });
        } else {
          // 基于宽度来计算
          utilIns.debounce(function() {
            var clientWidth = document.body.clientWidth;
            var dpr = clientWidth / remIns.baseWidth;
            var fontSize = remIns.baseFontSize * dpr;
            remIns.rem1Ofpx = fontSize;
            document.documentElement.style["font-size"] = [fontSize, "px"].join(
              ""
            );
          });
        }
        var timer = setTimeout(() => {
          mapIns.init();

          appInit().then(() => {
            chartIns.renderPieKey();

            app.onChangeRadarType(
              {
                target: {
                  value: null
                }
              },
              "project"
            );

            app.onChangeLandAcquireType({
              target: {
                value: app.land_acquire_type[0].code
              }
            });

            app.onChangeSyncTreeData({
              target: {
                value: 'nothing'
              }
            });

            // chartIns.renderBar();
            chartIns.renderPieWarning();
          });

          clearTimeout(timer);
        }, 1100);
      };

      remIns.init = function() {
        window.addEventListener("resize", remIns.onWindowResize);
        remIns.onWindowResize();
      };

      window.onload = function() {
        remIns.init();
      };
