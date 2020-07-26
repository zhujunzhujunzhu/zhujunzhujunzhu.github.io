 
      // 地图实例
      var mapIns = {
        pointLists: [],
        lineBarList: [],
        pathList: [],
        defaultColor: "#00b400",
        hightLightColor: "#fff"
      };

      mapIns.onSearchLineSuccess = function(data) {
        var lineArr = data.lineInfo;
        var pathArr = lineArr[0].path;
        mapIns.renderLine(pathArr);
      };

      mapIns.onLineBarClick = function(e) {
        // e.lnglat
        // 当前点击 的位置 距离 当前 线路 所有站点的最短距离

        var path = JSON.stringify(e.target.getPath());

        mapIns.pathList.forEach((d, index) => {
          // 对比 点击 路径 与 数组 中 路径 是否一直
          if (path === JSON.stringify(d)) {
            // 选中 线段 的 下标
            mapIns.onLineIndex = index;
          }
        });

        mapIns.highlightBetweenStation();
      };

      mapIns.highlightBetweenStation = function() {
        // 恢复 所有 线段 颜色
        mapIns.lineBarList.forEach(d => {
          var path = d.getPath();
          d.setOptions({
            strokeColor: path[0].defaultColor, // 线颜色
            outlineColor: path[0].defaultColor
          });
        });
        mapIns.pointLists.forEach(d => {
          var extData = d.getExtData();
          d.setOptions({
            strokeColor: extData.item.defaultColor, // 线颜色
            outlineColor: extData.item.defaultColor
          });
        });
        // 高亮指定线段颜色
        var lineBar = mapIns.lineBarList[mapIns.onLineIndex];
        // 获取 车站 段
        var path = lineBar.getPath();
        var mapPointExtData = {};
        mapIns.pointLists.forEach(d => {
          var extData = d.getExtData();
          var item = extData.item;
          var key = [
            item.location.Q,
            item.location.R,
            item.location.lat,
            item.location.lng
          ].join("");
          mapPointExtData[key] = d;
          // mapPointExtData[key] = JSON.parse(JSON.stringify(extData));
        });
        // 获取 车站段 开始车站
        var stationLists = path
          .filter(d => {
            return d.isStation;
          })
          .map(d => {
            // 利用 Q R lat lng 数据 筛选出 想要的 车站数据
            var key = [d.Q, d.R, d.lat, d.lng].join("");
            var point = mapPointExtData[key];
            // 设置 高亮色
            point.setOptions({
              strokeColor: mapIns.hightLightColor, // 线颜色
              fillColor: mapIns.hightLightColor
            });

            return point.getExtData().item;
          });

        app.onBetweenStation = {
          start: JSON.parse(JSON.stringify(stationLists[0])),
          end: JSON.parse(JSON.stringify(stationLists[1]))
        };

        app.onClickBetweenStation();

        // 高亮 station 段
        lineBar.setOptions({
          strokeColor: mapIns.hightLightColor, // 线颜色
          outlineColor: mapIns.hightLightColor
        });
      };

      mapIns.renderLine = function(pathArr) {
        // 重置
        mapIns.lineBarList.forEach(d => {
          d.off("click", mapIns.onLineBarClick);
        });
        mapIns.pathList = [];
        mapIns.lineBarList = [];

        var pathItem = [];

        pathArr.forEach(d => {
          if (d.isStation) {
            mapIns.pathList.push(pathItem.concat([d]));
            pathItem = [d];
          } else {
            pathItem.push(d);
          }
        });
        // 去掉第一个 脏数据
        mapIns.pathList.shift();

        mapIns.pathList.forEach((d, index) => {
          var lineBar = new AMap.Polyline({
            map: mapIns.map,
            path: d,
            strokeColor: d[0].defaultColor, // 线颜色
            outlineColor: d[0].defaultColor,
            strokeOpacity: 1, // 线透明度
            isOutline: true,
            strokeWeight: 3, // 线宽
            cursor: "pointer"
          });
          mapIns.lineBarList.push(lineBar);
        });

        mapIns.lineBarList.forEach(d => {
          d.on("click", mapIns.onLineBarClick);
        });
      };

      mapIns.renderStation = function(lists) {
        mapIns.pointLists = lists.map(d => {
          var item = d.location;
          // 构造矢量圆形
          return new AMap.Circle({
            center: new AMap.LngLat(item.lng, item.lat), // 圆心位置
            radius: 14, //半径
            strokeColor: d.defaultColor, //线颜色
            fillColor: d.defaultColor, //填充颜色

            strokeOpacity: 1, //线透明度
            strokeWeight: 3, //线粗细度
            fillOpacity: 1, //填充透明度
            zIndex: 82,
            extData: {
              item: JSON.parse(JSON.stringify(d))
            }
          });
        });

        mapIns.map.add(mapIns.pointLists);
      };

      var timerIns = {
        init() {
          setInterval(() => {
            app.date = moment().format("YYYY年MM月DD日");
            app.time = moment().format("HH:mm:ss");
          }, 1000);
        }
      };

      mapIns.init = function() {
        mapIns.map = new AMap.Map("mysubway", {
          resizeEnable: true,
          // zoom: 9,
          zoom: 10,
          // zoom: 14,
          center: [121.473658, 31.230378],
          mapStyle: "amap://styles/darkblue",
          extData: {}
        });

        // mapIns.map.on("click", mapIns.onClick);

        var lineSearch = new AMap.LineSearch({
          pageIndex: 1, // 第一页的线路
          city: "上海",
          pageSize: 5, // 每一页的线路条数
          extensions: "all" // 所有线路类型
        });

        var stationSearch = new AMap.StationSearch({
          pageIndex: 1, // 第一页的线路
          city: "上海",
          pageSize: 1 // 每一页的线路条数
          // extensions: "all", // 所有线路类型
        });

        mapIns.filterLine = function() {
          return true;
        };

        // 若不 传 name 视为 刷新
        mapIns.hightLightLine = function(name) {
          // 高亮 线路名
          if (name) {
            mapIns.onLineName = name;
          }
          mapIns.filterLine = function(d) {
            // 精准过滤
            return d.lineInfo[0].name === mapIns.onLineName;
            // return (
            //   d.lineInfo[0].name.indexOf(
            //     ["地铁", mapIns.onLineName].join("")
            //   ) !== -1
            // );
          };
          mapIns.refresh().then(res => {
            mapIns.renderStation(mapIns.stationList);
          });
        };

        mapIns.refresh = function() {
          mapIns.map.clearMap();
          mapIns.lineList = LineList().map(function(d) {
            return new Promise((resolve, reject) => {
              lineSearch.search(d.label, (status, result) => {
                if (status === "complete" && result.info === "OK") {
                  result.lineInfo = [
                    result.lineInfo.find(dd => {
                      return dd.name === d.name;
                    })
                  ];
                  resolve(result);
                } else {
                  reject();
                  console.log("查询出错");
                }
              });
            });
          });
          return Promise.all(mapIns.lineList).then(res => {
            app.loading = false;

            var mapData = mapLineListData();

            mapIns.lineList = JSON.parse(JSON.stringify(res))
              .filter(mapIns.filterLine)
              .map(d => {
                // Q R 作为 key
                var mapStation = {};
                d.lineInfo[0].via_stops.forEach(dd => {
                  mapStation[[dd.location.Q, dd.location.R].join("")] = true;
                });

                var defaultColor = mapData[d.lineInfo[0].name].color;

                d.lineInfo[0].path = d.lineInfo[0].path.map(dd => {
                  // 如果 线路 路径 匹配 到 station 说明 当前 path item  与 station 重合 作为 line 的 一个 station  存在
                  if (mapStation[[dd.Q, dd.R].join("")]) {
                    dd.isStation = true;
                  }

                  dd.defaultColor = defaultColor;

                  return dd;
                });

                d.lineInfo[0].via_stops = d.lineInfo[0].via_stops.map(dd => {
                  dd.defaultColor = defaultColor;
                  return dd;
                });

                return d;
              });

            // console.log(mapIns.lineList, "ssssss");

            mapIns.stationList = mapIns.lineList
              .reduce((ret, d) => {
                return ret.concat(d.lineInfo[0].via_stops);
              }, [])
              .map(d => {
                return {
                  ...d,
                  location: {
                    ...d.location,
                    children: [
                      {
                        ...d.location
                      },
                      {
                        ...d.location
                      }
                    ]
                  }
                };
              });

            mapIns.lineList.forEach(d => {
              mapIns.onSearchLineSuccess(d);
            });
          });
        };

        mapIns.refresh().then(() => {});
      };