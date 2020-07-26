
      // 数字
      var numIns = {
        "0": {
          klass: "icon iconfont icon-shuzi9"
        },
        "1": {
          klass: "icon iconfont icon-shuzi"
        },
        "2": {
          klass: "icon iconfont icon-shuzi1"
        },
        "3": {
          klass: "icon iconfont icon-shuzi2"
        },
        "4": {
          klass: "icon iconfont icon-shuzi3"
        },
        "5": {
          klass: "icon iconfont icon-shuzi4"
        },
        "6": {
          klass: "icon iconfont icon-shuzi5"
        },
        "7": {
          klass: "icon iconfont icon-shuzi6"
        },
        "8": {
          klass: "icon iconfont icon-shuzi7"
        },
        "9": {
          klass: "icon iconfont icon-shuzi8"
        },
        "/": {
          klass: "icon iconfont icon-shuzi-copy"
        },
        getNum(child, parent) {
          var childHtml = `<i class="${numIns[child].klass}"></i>`;
          var splitHtml = `<i class="${numIns["/"].klass}"></i>`;
          var parentHtml = `<i class="${numIns[parent].klass}"></i>`;
          var html = `${childHtml}${splitHtml}${parentHtml}`;
          return html;
        }
      };
