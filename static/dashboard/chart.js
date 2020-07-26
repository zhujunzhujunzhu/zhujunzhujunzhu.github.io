var chartIns = {};

chartIns.renderRadar = async function(landAcquireType) {
  if (!chartIns.radarChart) {
    chartIns.radarChart = echarts.init(document.getElementById("radar"));
  }
  var res = await api.landAcquireStatusTotal({ landAcquireType });
  res.result = res.result.map(d => {
    var data = {
      percent: 0,
      label:api.dicMapRes.result.land_status.find(dd => dd.code === d.code).name
    };
    if (d.complete > 0 && d.total > 0) {
      data.percent = Number(Number((d.complete / d.total) * 100).toFixed(0));
    }


    

    return {
      ...d,
      ...data
    };
  });

  app.radarData = {
    completed: res.result
      .filter(d => d.status === "completed")
      .reduce((sum, d) => {
        return sum + d.percent;
      }, 0),
    underWay: res.result
      .filter(d => d.status === "underway")
      .reduce((sum, d) => {
        return sum + d.percent;
      }, 0),
    alreadyCutOver: res.result
      .filter(d => d.status === "already_cut_over")
      .reduce((sum, d) => {
        return sum + d.percent;
      }, 0),
    noStart: res.result
      .filter(d => d.status === "not_started")
      .reduce((sum, d) => {
        return sum + d.percent;
      }, 0)
  };
  


  // res.result = res.result.concat(res.result).slice(0,4)

  var dataIndex = 0

  var option = {
    grid: {
      // top: 100,
      // left: 100,
      // bottom: 100,
      // right:100
      // containLabel:true
    },
    radar: {
      radius: '60%',
      axisLine: {
        lineStyle: {
          color: ["white"],
          opacity: 0.4
        }
      },
      splitLine: {
        lineStyle: {
          color: ["white"],
          type: "dashed",
          opacity: 0.4
        }
      },

      splitArea: {
        areaStyle: {
          color: [
            "rgba(58, 195, 213, 0.141)",
            "rgba(58, 195, 213, 0.141)",
            "rgba(58, 195, 213, 0.141)",
            "rgba(48, 161, 176, 0.388)",
            "rgba(51, 187, 206, 0.251)"
          ],
          opacity: 0.4
        }
      },
      indicator: [
        // { text: "", max: 100 },
        // { text: "", max: 100 },
        // { text: "", max: 100 },
        // { text: "", max: 100 }
        ...res.result.map(d => {
          return { text: "", max: 100 };
        })
      ]
    },
    series: [
      {
        type: "radar",
        areaStyle: {
          color: "#339cc9"
        },
        lineStyle: {
          width: 0
        },
        itemStyle: {
          color: "#2fb9c4"
        },
        data: [
          {
            value: [
              // app.radarData.completed,
              // app.radarData.underWay,
              // app.radarData.alreadyCutOver,
              // app.radarData.noStart
              ...res.result.map(d => {
                return d.percent;
              })
            ],
            name: "某软件",
            itemStyle: {
              borderWidth: Math.round(remIns.rem2px(0.05)),
              color: "white"
            }
          },
          {
            label: {
              position: "inside",
              show: true,
              formatter: function(item){
                var data = res.result[dataIndex]
 
                dataIndex += 1
                return ["{a|"+data.label+"}", "{b|"+data.percent+"%}"].join("")
              },
              rich: {
                a: {
                  borderRadius: [
                    Math.round(remIns.rem2px(0.03)),
                    0,
                    0,
                    Math.round(remIns.rem2px(0.03))
                  ],
                  backgroundColor: "#003673",
                  color: "#00c1ff",
                  textBorderColor:'rgba(0,0,0,0)',
                  lineHeight: Math.round(remIns.rem2px(0.22)),
                  height: Math.round(remIns.rem2px(0.22)),
                  width: Math.round(remIns.rem2px(0.54)),
                  fontSize: Math.round(remIns.rem2px(0.12)),
                  align: "center"
                },
                b: {
                  borderRadius: [
                    0,
                    Math.round(remIns.rem2px(0.03)),
                    Math.round(remIns.rem2px(0.03)),
                    0
                  ],
                  backgroundColor: "#0094c2",
                  color: "#fff",
                  textBorderColor:'rgba(0,0,0,0)',
                  lineHeight: Math.round(remIns.rem2px(0.22)),
                  height: Math.round(remIns.rem2px(0.22)),
                  width: Math.round(remIns.rem2px(0.54)),
                  fontSize: Math.round(remIns.rem2px(0.12)),
                  align: "center"
                }
              }
            },
            value: [
              ...res.result.map(d => {
                return 100;
              })
            ],
            name: "某软件",
            itemStyle: {
              borderWidth: Math.round(remIns.rem2px(0.05))
            },
            areaStyle: {
              opacity: 0
            }
          }
        ]
      }
    ]
  };

  chartIns.radarChart.setOption(option);
};

chartIns.renderPieKey = async function() {
  if (!chartIns.pieKeyChart) {
    chartIns.pieKeyChart = echarts.init(document.getElementById("node-pie"));
  }

  var res = await api.scheduleStatusTotal();

  app.pieKeyData = res.result;

  var data = [
    { value: res.result.noStart, name: "未开始" },
    { value: res.result.advance, name: "提前" },
    { value: res.result.underWay, name: "正常进行中" },
    { value: res.result.delay, name: "滞后" }
  ];

  data.forEach(d => {
    app.mapPieKeyData[d.name] = d;
  });

  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{c} ({d}%)"
    },
    color: ["#1798da", "#eaa02a", "#eb7c7f", "#07cb59"],
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    series: [
      {
        // name: "访问来源",
        type: "pie",
        hoverAnimation: false,
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: Math.round(remIns.rem2px(0.3)),
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "inner",
              formatter: "{c}",
              color: "#fff",
              fontSize: Math.round(remIns.rem2px(0.15)),
              fontFamily: "MicrosoftYaHei"
            }
          }
        },
        data: data.filter(d => {
          return Number(d.value) !== 0;
        })
      }
    ]
  };
  chartIns.pieKeyChart.setOption(option);
};

chartIns.renderPieProject = async function(tendersId) {
  if (!chartIns.pieProjectChart) {
    chartIns.pieProjectChart = echarts.init(
      document.getElementById("rightPie")
    );
  }
  var res = await api.qualityPieChart({
    tendersId: tendersId
  });

  var data = [
    { value: res.result.finish, name: "已整改" },
    { value: res.result.noRectify, name: "待整改" },
    { value: res.result.alreadyReview, name: "已复核" }
  ];

  data.forEach(d => {
    app.mapPieProjectData[d.name] = d;
  });

  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)"
    },
    color: ["#e7a52c", "#eb7c7f", "#1798da"],
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["50%", "70%"],
        // roseType: "radius",
        hoverAnimation: false,
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: false,
            fontSize: Math.round(remIns.rem2px(0.12)),
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "inner",
              formatter: "{c}",
              color: "#fff",
              fontSize: Math.round(remIns.rem2px(0.15)),
              fontFamily: "MicrosoftYaHei"
            }
          }
        },
        data: data.filter(d => {
          return Number(d.value) !== 0;
        })
      }
    ]
  };
  chartIns.pieProjectChart.setOption(option);
};

chartIns.renderPieWarning = function() {
  if (!chartIns.pieWarningChart) {
    chartIns.pieWarningChart = echarts.init(document.getElementById("leftPie"));
  }

  var data = [
    { value: 233, name: "红色风险" },
    { value: 310, name: "橙色风险" },
    { value: 135, name: "其他激活风险" }
  ];

  data.forEach(d => {
    app.mapPieWarningData[d.name] = d;
  });

  chartIns.pieWarningChart.setOption({
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ["#eb7c7f", "#eaa02a", "#07cb59"],
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
          show: false,
          position: "center"
        },
        // roseType: "radius",
        emphasis: {
          label: {
            show: true,
            fontSize: Math.round(remIns.rem2px(0.3)),
            fontWeight: "bold"
          }
        },
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "inside",
              formatter: "{c}",
              color: "#fff",
              fontSize: Math.round(remIns.rem2px(0.15)),
              fontFamily: "MicrosoftYaHei"
            }
          }
        },
        labelLine: {
          show: false
        },
        data: data.filter(d => {
          return Number(d.value) !== 0;
        })
      }
    ]
  });
};

chartIns.renderBar = function() {
  if (!chartIns.lineChart) {
    chartIns.lineChart = echarts.init(document.getElementById("line"));
  }

  var invPlanId = null;

  if(app.onSyncTreeData !== 'nothing'){
    invPlanId = app.onSyncTreeData
  }

  api.invPlanDataStatisticScreen({
    invPlanId:invPlanId
  }).then(res => {
    app.projectLifeCycleRes = res.result;

    var option = {
      grid: {
        left: Math.round(remIns.rem2px(0.45)),
        right: 0,
        top: Math.round(remIns.rem2px(0.1)),
        bottom: Math.round(remIns.rem2px(0.3))
      },
      dataset: {
        dimensions: ["product", "投资计划", "投资完成"],
        source:app.projectLifeCycleRes.tenderList.map(d => {
          return {
            product: d.tendersName, 投资计划: Number(Number(d.planData / 10000).toFixed(1)), 投资完成: Number(Number(d.statisticData / 10000).toFixed(1))
          }
        }),
     
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true
            }
        }
    },
      dataZoom: [
        {
            show: false,
            start: 0,
            end: 40
        },
        {
            type: 'inside',
            start: 0,
            end: 40
        },

    ],
      xAxis: {
        type: "category",
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "#91f3f2"
          }
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: "#93f9ff",
            fontSize: Math.round(remIns.rem2px(0.12))
          }
        }
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
     
          textStyle: {
            color: "#3d849b",
            fontSize: Math.round(remIns.rem2px(0.1)),
            fontWeight: "bold"
          }
        },
        splitLine: {
          // show: false
          lineStyle: {
            color: ["#3d849b"],
            type: "dashed"
          }
        }
      },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        {
          type: "bar",
          barWidth: Math.round(remIns.rem2px(0.12)),
          itemStyle: {
            normal: {
              color: "#1798da"
            }
          }
        },
        {
          type: "bar",
          barWidth: Math.round(remIns.rem2px(0.12)),
          itemStyle: {
            normal: {
              color: "#eaa02a"
            }
          }
        }
      ]
    };
  
    chartIns.lineChart.setOption(option);

  });


};
