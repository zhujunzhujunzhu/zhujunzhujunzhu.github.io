var app = new Vue({
  filters:{
    rmb2wan: function (value) {
      if (!value) return '0'
      value = Number(value);
      return Number(value / 10000).toFixed(2)
    }
  },
  data: function() {
    return {
      barScrollLeft:0,
      // 柱状图 点击 按钮 滚动 方向
      turn:"right",
      onRadarType:null,
      onSyncTreeData:'nothing',
      // onSyncTreeData:{
      //   id: null,
      //   name: ""
      // },
      projectLifeCycleRes:{},
      syncTreeData:[
      
      ],
      mapSyncTreeData:{
        nothing: {
          id: "",
          name: ""
        }
      },
      newsLists: [],
      mapPieWarningData: {},
      mapPieKeyData: {},
      mapPieProjectData: {},
      onLandAcquireType: {
        id: null,
        name: ""
      },
      land_acquire_type: [],
      mapLandAcquireType: {},
      mapScheduleProcessStatus: {},
      mapTendersType: {
        nothing: {
          id: "",
          name: "标段"
        }
      },
      onTendersType: {
        work: "nothing",
        project: "nothing",
        person: "nothing"
      },
      onScheduleProcessStatus: {},
      schedule_process_status: [],
      tenders_type: [],
      radarData: {
        completed: 0,
        underWay: 0,
        alreadyCutOver: 0,
        noStart: 0
      },
      showCurNews: true,
      curNews: "",
      newsLists: [],
      useLandAcquire: {
        complete: 0.0, //已完成
        total: 0.0 //总数
      },
      removeLand: {
        complete: 0, //已完成
        total: 0 //总量
      },
      queryPipelineTotal: {
        completed: 0, //已完成
        alreadyCutOver: 0, //（已完成+已割接）大屏中管线（）中的数据值
        total: 0 //总量
      },
      riskPointStatus: {
        actived: 0, //已激活的数量
        not_touched: 0, //未触发的数量
        sleep: 0 //休眠的数量
      },
      rectifyBill: 0,
      pieKeyData: {
        advance: 0, //提前
        delay: 0, //延迟
        noStart: 0, //未开始
        underWay: 0 //进行中
      },
      keyNodeDelayList: [],
      keyNodeDelayOfNearList: [],
      noRectifyData: [],

      // 近期节点数量
      keyNodeNumOfNear: 0,
      loading: true,
      onBetweenStation: {
        start: {},
        end: {}
      },
      onLine: {},
      date: "",
      time: "",
      lineList: [],
      showPanel: true,
      keyNodeDelayList: [],
      weatherLists: [],
      weather: {},
      jiantou: true,
      rightToggle: true
    };
  },
  async mounted() {
    app.tenders_type = api.tenders_type;

    app.land_acquire_type = api.dicMapRes.result.land_acquire_type;

    app.land_acquire_type.forEach(d => {
      app.mapLandAcquireType[d.code] = { ...d };
    });


    api.syncTreeData({}).then(res => {
      app.syncTreeData = res.result

      
      app.syncTreeData.forEach(d => {
        app.mapSyncTreeData[d.id] = d
      });
    });

    // 这个不是
    // app.schedule_process_status =
    //   api.dicMapRes.result.schedule_process_status;

    // app.schedule_process_status.forEach((d) => {
    //   app.mapScheduleProcessStatus[d.id] = { ...d };
    // });

    app.tenders_type.forEach(d => {
      app.mapTendersType[d.id] = { ...d };
    });

    api.queryNotice({}).then(res => {
      app.newsLists = res.result;
      nodeIns.add(res.result.map(d => d.title));

      if(app.timerSlideText){
        clearInterval(app.timerSlideText);
      }

      app.timerSlideText = setInterval(() => {
        // app.showCurNews = false;

        // app.curNews = nodeIns.next().label;

        if (app.$refs.textScroll) {
        }

        var w = app.$refs.textScroll.scrollWidth;

        app.$refs.textScroll.scrollLeft += 1;

        if (
          app.$refs.textScroll.scrollLeft + app.$refs.textScroll.offsetWidth >=
          w
        ) {
          app.$refs.textScroll.scrollLeft = 0;
        }

        // app.showCurNews = true;
      }, 60);

      // start();
    });

    var mapData = mapLineListData();
    app.lineList = Object.keys(mapData).map(key => {
      return {
        label: mapData[key].label,
        name: key
      };
    });

    timerIns.init();

    fetch(
      "https://tianqiapi.com/api?version=v1&appid=69394978&appsecret=1GerELHK"
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        var [today, tomorrow] = res.data;
        app.weather = {
          label: "今",
          w: today.wea,
          week: today.week,
          t: `${today.tem}℃-${today.tem1}℃`,
          klass: "panel-header-weather-today"
        };
        // this.weatherLists = [
        //   {
        //     label: "今",
        //     w: today.wea_day,
        //     week: today.day
        //       .match(/\（.*?\）/)[0]
        //       .replace(/\（/, "")
        //       .replace(/\）/, ""),
        //     t: `${today.tem}℃-${today.tem1}℃`,
        //     klass: "panel-header-weather-today"
        //   },
        //   {
        //     label: "明",
        //     w: tomorrow.wea_day,
        //     week: tomorrow.day
        //       .match(/\（.*?\）/)[0]
        //       .replace(/\（/, "")
        //       .replace(/\）/, ""),
        //     t: `${tomorrow.tem}℃-${tomorrow.tem1}℃`,
        //     klass: "panel-header-weather-tomorrow"
        //   }
        // ];
      });

    app.renderKeyNodeNumOfNear();

    app.rendeKeyNodeDelayList();
    app.renderKeyNodeDelayOfNearList();

    app.renderRiskPointStatus();

    app.renderUseLandAcquire();

    app.renderRemoveLand();

    app.renderQueryPipelineTotal();
  },
  methods: {
    onClickBarRightScroll(){
 

      var offsetW = 40
      

      if(app.turn === 'right'){


        app.barScrollLeft += offsetW
  
        // 到达 右侧 极限 
        if(app.barScrollLeft + offsetW >= 100){
          app.barScrollLeft = 100;
          app.turn = 'left'
        }
    
      }

      if(app.turn === 'left'){

        app.barScrollLeft -= offsetW
  
        // 到达 右侧 极限 
        if(app.barScrollLeft - offsetW <= 0){
          app.barScrollLeft = 0;
          app.turn = 'right'
        }
    
      }


      chartIns.lineChart.dispatchAction({
        type: 'dataZoom',
        // 开始位置的百分比，0 - 100
        start: app.barScrollLeft,
        // 结束位置的百分比，0 - 100
        end: app.barScrollLeft + 40,
    
    })
  

      
    },
    onChangeSyncTreeData(e){
      var value = e.target.value;
      // app.onSyncTreeData = app.mapSyncTreeData[value]
      if(value === 'nothing'){
        value = null
      }
      chartIns.renderBar()
    },
    renderUseLandAcquire() {
      api.useLandAcquire().then(res => {
        app.useLandAcquire = res.result;
      });
    },
    renderRemoveLand() {
      api.removeLand().then(res => {
        app.removeLand = res.result;
      });
    },
    renderQueryPipelineTotal() {
      api.queryPipelineTotal().then(res => {
        app.queryPipelineTotal = res.result;
      });
    },
    onChangeLandAcquireType(e) {
      var value = e.target.value;

      chartIns.renderRadar(value);

      if (app.mapLandAcquireType[value]) {
        app.onLandAcquireType = app.mapLandAcquireType[value];
      }
    },
    onChangeRadarType(e, type) {
      var value = e.target.value;

      app.onRadarType = value;

      if (type === "project") {
        chartIns.renderPieProject(value);

        api
          .noRectifyData({
            value
          })
          .then(res => {
            app.noRectifyData = res.result;
          });

        api.rectifyBill({ value }).then(res => {
          app.rectifyBill = res.result;
        });
      }

      if (Object.prototype.toString.call(value) === "[object Null]") {
        app.onTendersType[type] = "nothing";
      } else {
        app.onTendersType[type] = value;
      }
    },
    renderRiskPointStatus() {
      api.riskPointStatus().then(res => {
        app.riskPointStatus = res.result;
      });
    },

    renderKeyNodeNumOfNear() {
      api.keyNodeTotal().then(res => {
        app.keyNodeNumOfNear = res.result;
      });
    },
    manTopSelect() {
      this.ismanSelect = false;
    },
    manBottomSelect() {
      this.ismanSelect = true;
    },
    objectTopSelect() {
      this.isProjectSelect = false;
    },
    objectBottomSelect() {
      this.isProjectSelect = true;
    },
    rightTopSelect() {
      this.isRightJiantou = false;
    },
    rightBottomSelect() {
      this.isRightJiantou = true;
    },
    topSelect() {
      this.isTS = false;
    },
    bottomSelect() {
      this.isTS = true;
    },
    rightShow() {
      if (this.rightToggle == true) {
        this.rightToggle = false;
      } else {
        this.rightToggle = true;
      }
    },
    toggle() {
      if (this.jiantou == true) {
        this.jiantou = false;
      } else {
        this.jiantou = true;
      }
    },

    onClickLine(item) {
      this.onLine = item;

      mapIns.hightLightLine(this.onLine.name);
    },
    rendeKeyNodeDelayList() {
      api.keyNodeDelayList().then(res => {
        app.keyNodeDelayList = res.result;
      });
    },
    renderKeyNodeDelayOfNearList() {
      api.queryKeyNode().then(res => {
        app.keyNodeDelayOfNearList = res.result;
      });
    }
  }
});

function beforeAppInit() {
  return api.dicMap().then(() => {
    return api.projectUserTenders();
  });
}
function appInit() {
  return beforeAppInit().then(res => {
    app.$mount("#app");
  });
}
