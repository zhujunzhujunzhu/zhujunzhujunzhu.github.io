// 生成 独一无二 的 id
function guid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

// 线路
function Line(opts = {}) {
  return {
    label: "1号线",
    code: guid(),
    ...opts
  };
}

// 上海地铁的基础数据 ， 从 高德 地图上 弄下来的
function mapLineListData() {
  return {
    "地铁1号线(莘庄--富锦路)": {
      color: "#CC0000",
      label: "1号线"
    },
    "地铁2号线(夜班)(虹桥火车站--龙阳路)": {
      color: "#009900",
      label: "2号线"
    },
    "地铁3号线(上海南站--江杨北路)": {
      color: "#F9E103",
      label: "3号线"
    },
    "地铁4号线外圈(宜山路--宜山路)": {
      color: "#660066",
      label: "4号线"
    },
    "地铁5号线(奉贤新城--莘庄)": {
      color: "#CC00CC",
      label: "5号线"
    },
    "地铁5号线(闵行开发区--东川路)": {
      color: "#FF3265",
      label: "5号线"
    },
    "地铁6号线(港城路--东方体育中心)": {
      color: "#FF3265",
      label: "6号线"
    },
    "地铁7号线(美兰湖--花木路)": {
      color: "#FF7F00",
      label: "7号线"
    },
    "地铁8号线(沈杜公路--市光路)": {
      color: "#0066CC",
      label: "8号线"
    },
    "地铁9号线(曹路--松江南站)": {
      color: "#95d3db",
      label: "9号线"
    },
    "地铁10号线(夜班)(虹桥火车站--五角场)": {
      color: "#C9A7D5",
      label: "10号线"
    },
    "地铁10号线(新江湾城--航中路)": {
      color: "#C9A7D5",
      label: "10号线"
    },
    "地铁11号线(迪士尼--花桥)": {
      color: "#800000",
      label: "11号线"
    },
    "地铁11号线(迪士尼--嘉定北)": {
      color: "#800000",
      label: "11号线"
    },
    "地铁12号线(七莘路--金海路)": {
      color: "#0C785E",
      label: "12号线"
    },
    "地铁13号线(金运路--张江路)": {
      color: "#E796C1",
      label: "13号线"
    },
    "地铁16号线大站车(滴水湖--龙阳路)": {
      color: "#77C8C7",
      label: "16号线"
    },
    "地铁17号线(虹桥火车站--东方绿舟)": {
      color: "#c07774",
      label: "17号线"
    },
    "磁悬浮(浦东国际机场--龙阳路)": {
      color: "#9ba0ad",
      label: "磁悬浮"
    },
    "轨道交通浦江线(沈杜公路--汇臻路)": {
      color: "#9ba0ad",
      label: "浦江线"
    }
  };
}

// 线路列表 上海地铁的基础数据 ， 从 高德 地图上 弄下来的
function LineList() {
  return [
    Line({ label: "1号线", name: "地铁1号线(莘庄--富锦路)" }),
    Line({ label: "2号线", name: "地铁2号线(夜班)(虹桥火车站--龙阳路)" }),
    Line({ label: "3号线", name: "地铁3号线(上海南站--江杨北路)" }),
    Line({ label: "4号线", name: "地铁4号线外圈(宜山路--宜山路)" }),
    Line({ label: "5号线", name: "地铁5号线(奉贤新城--莘庄)" }),
    Line({
      label: "5号线",
      name: "地铁5号线(闵行开发区--东川路)"
    }),
    Line({ label: "6号线", name: "地铁6号线(港城路--东方体育中心)" }),
    Line({ label: "7号线", name: "地铁7号线(美兰湖--花木路)" }),
    Line({ label: "8号线", name: "地铁8号线(沈杜公路--市光路)" }),
    Line({ label: "9号线", name: "地铁9号线(曹路--松江南站)" }),
    Line({
      label: "10号线",
      name: "地铁10号线(夜班)(虹桥火车站--五角场)"
    }),
    Line({
      label: "10号线",
      name: "地铁10号线(新江湾城--航中路)"
    }),
    Line({ label: "11号线", name: "地铁11号线(迪士尼--花桥)" }),
    Line({ label: "11号线", name: "地铁11号线(迪士尼--嘉定北)" }),
    Line({ label: "12号线", name: "地铁12号线(七莘路--金海路)" }),
    Line({ label: "13号线", name: "地铁13号线(金运路--张江路)" }),
    Line({ label: "16号线", name: "地铁16号线大站车(滴水湖--龙阳路)" }),
    Line({ label: "17号线", name: "地铁17号线(虹桥火车站--东方绿舟)" }),
    Line({ label: "磁悬浮", name: "磁悬浮(浦东国际机场--龙阳路)" }),
    Line({ label: "浦江线", name: "轨道交通浦江线(沈杜公路--汇臻路)" })
  ];
}

// 获取 url query 用的
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

var api = {
  "x-auth-token": "",
  projectId: null
};

api.getProject = function() {
  var project = JSON.parse(sessionStorage.getItem("project"));
  if (project) {
    return project.id;
  }
  return null;
};

api.init = function() {
  // 写死 先
  // 这里主要 初始化 项目 id
  api.projectId = 1 || api.getProject();
  // 初始化 token
  api.token = getQueryString("token");
};

api.init();

// 从 项目中 获取 api 的 baseURl
api.baseUrl = getQueryString("baseUrl");

// 封装 基本的 post 方法
api.post = function(url, params) {
  var prefix = "rest/dataway/transfer";
  var path = url.split(prefix).slice(-1)[0];
  var data = "{}";

  if (params.normal) {
    delete params.normal;
    prefix = url;
    data = JSON.stringify(params);
  } else {
    data = JSON.stringify(
      Object.assign({
        method: "POST",
        path,
        params
      })
    );
  }

  if(params.array === 'false'){
    data = JSON.parse(data)
    data.array = false;
    data = JSON.stringify(data)
    delete params.array
    
  }

  return fetch(
    new Request(`${api.baseUrl}${prefix}`, {
      method: "POST",
      // credentials: 'include',
      headers: {
        "x-auth-token": api.token,
        "Content-Type": "application/json; charset=UTF-8"
      },
      // mode: "cors",
      body: data
    })
  ).then(res => {
    return res.json();
  });
};

// 获取字典数据
api.dicMap = function() {
  return api.post("rest/dic/getDicMap", { normal: true }).then(res => {
    if (!api.dicMapRes) {
      api.dicMapRes = JSON.parse(
        JSON.stringify({
          result: res.result
        })
      );
    }
    return api.dicMapRes;
  });
};

// yes 1
// 风险源管理
// 获取风险源状态的数据
// 获得风险源中未触法、已激活、休眠状态的数量
api.riskPointStatus = function() {
  return api
    .post("rest/dataway/transfer/riskPointStatus", {
      projectId: api.projectId
    })
    .then(res => {
      if (!res.result || JSON.stringify(res.result) === "{}") {
        return {
          result: {
            not_touched: 0, //未触发的数量
            actived: 0, //已激活的数量
            sleep: 0 //休眠的数量
          }
        };
      }

      return res;
    });
};
// yes 1
// 项目质量
// 项目质量模块整改单
// 项目id为必传，不传标段拿到所有数据，传标段拿到对应的数据，结果为一个值
api.rectifyBill = function(params) {
  return api
    .post("rest/dataway/transfer/rectifyBill", {
      projectId: api.projectId,
      tendersId: params.tendersId
    })
    .then(res => {
      if (!res.result) {
        return {
          result: 0
        };
      }
      return res;
    });
};

// yes 0

// 项目质量
//  项目质量管理待整改数据
// 项目id为必传，不传标段拿到所有数据，传标段拿到对应的数据，结果为一个值
api.noRectify = function(params) {
  return api
    .post("rest/dataway/transfer/noRectify", {
      projectId: api.projectId,
      tendersId: params.tendersId
    })
    .then(res => {
      return null;
    });
};
// yes 1
// 项目质量
//  待整改列表
//  项目id为必传，不传标段拿到所有数据，传标段拿到对应的数据，一条数据包
api.noRectifyData = function(params) {
  return api
    .post("rest/dataway/transfer/noRectifyData", {
      projectId: api.projectId,
      tendersId: params.tendersId
    })
    .then(res => {
      if (!res.result) {
        return {
          result: []
        };
      }
      return res;
    });
};
// yes 1
//  项目质量数据饼状图数据显示
// 项目id为必传，不传标段拿到所有汇总之后的数据，传标段拿到对应的数据
// noRectify代表未整改 alreadyReview代表复核数据
api.qualityPieChart = function(params) {
  return api
    .post("rest/dataway/transfer/qualityPieChart", {
      projectId: api.projectId,
      tendersId: params.tendersId
    })
    .then(res => {
      if (!res.result || JSON.stringify(res.result) === "{}") {
        return {
          result: {
            noRectify: 0,
            alreadyReview: 0,
            finish: 0
          }
        };
      }
      return res;
    });
};
// yes
// 进度接口
//  查询近期关键节点数据列表
api.queryKeyNode = function(params = {}) {
  params.array = 'false'
  return api
    .post("rest/dataway/transfer/schedule/queryKeyNode", {
      projectId: api.projectId
    })
    .then(res => {
      if (!res.result) {
        return {
          result: []
        };
      }
      return res;
    });
};
// yes
// 进度接口
//  近期关键节点统计
// 统计最近30天的关键节点
api.keyNodeTotal = function(params) {
  return api
    .post("rest/dataway/transfer/schedule/keyNodeTotal", {
      projectId: api.projectId
    })
    .then(res => {
      if (!res.result) {
        return {
          result: 0
        };
      }
      return res;
    });
};
// yes
// 进度接口
//   进度各种状态数据统计
// 关键节点未开始，进行中，提前，滞后数据统计
api.scheduleStatusTotal = function(params) {
  return api
    .post("rest/dataway/transfer/schedule/scheduleStatusTotal", {
      projectId: api.projectId
    })
    .then(res => {
      if (!res.result || JSON.stringify(res.result) === "{}") {
        return {
          result: {
            advance: 0, //提前
            delay: 0, //延迟
            noStart: 0, //未开始
            underWay: 0 //进行中
          }
        };
      }
      return res;
    });
};
// yes
// 进度接口
//   关键节点延期数据列表
api.keyNodeDelayList = function(params = {}) {
  params.array = 'false'
  return api
    .post("rest/dataway/transfer/schedule/keyNodeDelayList", {
      projectId: api.projectId
    })
    .then(res => {
      if (!res.result) {
        return {
          result: []
        };
      }
      return res;
    });
};

// yes
// 前期工作接口
//   统计用地数据
api.useLandAcquire = function(params) {
  return api
    .post("rest/dataway/transfer/landAcquire/useLandAcquire", {
      projectId: api.projectId
    })
    .then(res => {
      if (!res.result || JSON.stringify(res.result) === "{}") {
        return {
          result: {
            complete: 0, //已完成
            total: 0 //总数
          }
        };
      }
      res.result.complete = Number(Number(res.result.complete).toFixed(0));
      res.result.total = Number(Number(res.result.total).toFixed(0));
      return res;
    });
};
// yes
// 前期工作接口
//   拆迁
api.removeLand = function(params) {
  return api
    .post("rest/dataway/transfer/landAcquire/removeLand", {
      projectId: api.projectId
    })
    .then(res => {
      if (!res.result || JSON.stringify(res.result) === "{}") {
        return {
          result: {
            complete: 0, //已完成
            total: 0 //总数
          }
        };
      }
      res.result.complete = Number(Number(res.result.complete).toFixed(0));
      res.result.total = Number(Number(res.result.total).toFixed(0));
      return res;
    });
};
// yes
// 前期工作接口
//   管线数据统计接口
// 统计管线数据，已完成，（已完成+已割接），总量，
api.queryPipelineTotal = function(params) {
  return api
    .post("rest/dataway/transfer/landAcquire/queryPipelineTotal", {
      projectId: api.projectId
    })
    .then(res => {
      if (!res.result || JSON.stringify(res.result) === "{}") {
        return {
          result: {
            completed: 0, //已完成
            alreadyCutOver: 0, //（已完成+已割接）大屏中管线（）中的数据值
            total: 0 //总量
          }
        };
      }
      return res;
    })
    .then(res => {
      res.result.completed = Number(Number(res.result.completed).toFixed(0));
      res.result.alreadyCutOver = Number(
        Number(res.result.alreadyCutOver).toFixed(0)
      );
      res.result.total = Number(Number(res.result.total).toFixed(0));

      return res;
    });
};
// yes
// 前期工作接口
//   征地状态饼图统计
api.landAcquireStatusTotal = function(params) {
  return api
    .post("rest/dataway/transfer/landAcquire/landAcquireStatusTotal", {
      projectId: api.projectId,
      landAcquireType: params.landAcquireType // "征地类型"
    })
    .then(res => {
      if (!res.result) {
        return {
          result: []
        };
      }
      return res;
    });
};

// yes
// 最新公告
api.queryNotice = function(params) {
  return api
    .post("rest/dataway/transfer/news/queryNotice", {
      projectId: api.projectId
    })
    .then(res => {
      if (!res.result) {
        return {
          result: []
        };
      }
      return res;
    });
};
// 获取 标段 数据
api.projectUserTenders = function(params) {
  return api
    .post("rest/projectAuth/projectUserTenders", {
      projectId: api.projectId,
      normal: true
    })
    .then(res => {
      if (!res.result) {
        return {
          result: []
        };
      }
      return res;
    })
    .then(res => {
      if (!api.tenders_type) {
        api.tenders_type = res.result;
      }
      return res;
    });
};




// 获取 大屏投资
api.invPlanDataStatisticScreen = function(params = {}) {
  return api
    .post('rest/invPlan/invPlanDataStatisticScreen', {
      invPlanId:params.invPlanId,
      normal: true
    })
    // .then(res => {
    //   if (!res.result) {
    //     return {
    //       result: []
    //     };
    //   }
    //   return res;
    // })
    // .then(res => {
    //   if (!api.tenders_type) {
    //     api.tenders_type = res.result;
    //   }
    //   return res;
    // });
};

// 获取 周期
api.syncTreeData = function(params = {}) {
  return api
    .post('rest/invPlan/syncTreeData', {
      projectId: api.projectId,
      normal: true
    })
  
};
