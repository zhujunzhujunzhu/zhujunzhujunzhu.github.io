  // 工具方法集合
  var utilIns = {};
  // 防抖
  utilIns.debounce = function(fn, time) {
    if (utilIns.timer) {
      clearTimeout(utilIns.timer);
    }
    utilIns.timer = setTimeout(function() {
      fn();
      clearTimeout(utilIns.timer);
    }, time || 1000);
  };
