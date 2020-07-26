(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-7be4"],{

/***/ "9AuE":
/*!********************************!*\
  !*** ./src/api/sysOverview.js ***!
  \********************************/
/*! exports provided: overviewTotal, onlinePersonTotal, registeredPersonTotal, appUseNumberTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overviewTotal", function() { return overviewTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlinePersonTotal", function() { return onlinePersonTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registeredPersonTotal", function() { return registeredPersonTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appUseNumberTotal", function() { return appUseNumberTotal; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");
/*
 * @Description
 * @Autor 朱俊
 * @Date 2020-05-12 11:14:38
 * @LastEditors 朱俊
 * @LastEditTime 2020-05-12 11:17:52
 */


// 系统总览
function overviewTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/sysOverview/overviewTotal',
    method: 'post',
    data: param
  });
}

// 当前在线人数
function onlinePersonTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/sysOverview/onlinePersonTotal',
    method: 'post',
    data: param
  });
}

// 在册人数
function registeredPersonTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/sysOverview/registeredPersonTotal',
    method: 'post',
    data: param
  });
}

// App使用数
function appUseNumberTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/sysOverview/appUseNumberTotal',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "bGbw":
/*!********************************************************!*\
  !*** ./src/views/operationMonitor/chartStatistics.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chartStatistics_vue_vue_type_template_id_500ef08e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartStatistics.vue?vue&type=template&id=500ef08e& */ "sVQK");
/* harmony import */ var _chartStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartStatistics.vue?vue&type=script&lang=js& */ "mmGI");
/* empty/unused harmony star reexport *//* harmony import */ var _chartStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartStatistics.vue?vue&type=style&index=0&lang=scss& */ "ioKN");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chartStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chartStatistics_vue_vue_type_template_id_500ef08e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chartStatistics_vue_vue_type_template_id_500ef08e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "chartStatistics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ioKN":
/*!******************************************************************************************!*\
  !*** ./src/views/operationMonitor/chartStatistics.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./chartStatistics.vue?vue&type=style&index=0&lang=scss& */ "z1JZ");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "kj3Z":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/operationMonitor/chartStatistics.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_sysOverview_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/sysOverview.js */ "9AuE");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      type: '当前在线人数',
      projectName: null
    };
  },
  mounted: function mounted() {
    this.getInfo();
    // this.initPieChart({
    //   id: 'leftChart',
    //   data: [
    //     { value: 26, name: '位置与图纸不一致' },
    //     { value: 20, name: ' 尺寸与图纸不一致' },
    //     { value: 15, name: '构件碰撞' },
    //     { value: 13, name: '构件缺项' },
    //     { value: 10, name: ' 构件未扣减' },
    //     { value: 10, name: '族使用错误' },
    //     { value: 6, name: '构件命名错误' }
    //   ],
    //   clickFun: () => {}
    // })

    // this.initBarChart({
    //   id: 'rightChart',
    //   data: [180, 170, 184, 80]
    // })
  },

  methods: {
    /** 切换按钮的处理
     * @function changeFun
     */
    changeFun: function changeFun() {
      this.getInfo();
    },

    /** 根据类型来选择需要调用的接口
     * @function dealApi
     */
    dealApi: function dealApi() {
      var api = _api_sysOverview_js__WEBPACK_IMPORTED_MODULE_0__["onlinePersonTotal"];
      switch (this.type) {
        case '当前在线人数':
          api = _api_sysOverview_js__WEBPACK_IMPORTED_MODULE_0__["onlinePersonTotal"];
          break;
        case '在册人数':
          api = _api_sysOverview_js__WEBPACK_IMPORTED_MODULE_0__["registeredPersonTotal"];
          break;
        case 'App使用数':
          api = _api_sysOverview_js__WEBPACK_IMPORTED_MODULE_0__["appUseNumberTotal"];
          break;
      }
      return api;
    },

    /** 信息的获取
     * @function getInfo
     */
    getInfo: function getInfo() {
      var _this = this;

      var api = this.dealApi();
      api({}).then(function (res) {
        if (res.success) {
          console.log(res.result);
          var result = res.result.map(function (item) {
            item.value = item.personNum;
            return item;
          });
          _this.initPieChart({
            id: 'leftChart',
            data: result,
            clickFun: function clickFun(params) {
              var data = params.data.mapList;
              _this.projectName = params.data.name;
              _this.initBarChart({
                id: 'rightChart',
                data: data
              });
            }
          });
          if (result && result.length > 0) {
            _this.projectName = result[0].name;
            _this.initBarChart({
              id: 'rightChart',
              data: result[0].mapList
            });
          }
        }
      });
    },
    initPieChart: function initPieChart(_ref) {
      var id = _ref.id,
          data = _ref.data,
          clickFun = _ref.clickFun;

      var chart = this.$echarts.init(document.getElementById(id));
      chart.setOption({
        color: ['#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#87E7C2', '#479DB3'],
        // tooltip: {
        //   trigger: 'item',
        //   formatter: '{b}: <br/> {c}%'
        // },
        series: [{
          name: '完成情况：',
          type: 'pie',
          hoverAnimation: false,
          avoidLabelOverlap: false,
          label: {
            position: 'outside',
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '13',
                fontWeight: 'normal'
              }
            },
            formatter: function formatter(item, index) {
              return item.name + ' : ' + item.value;
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 5,
              shadowOffsetX: 0
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: data
        }]
      });

      if (clickFun) {
        chart.on('click', function (params) {
          clickFun(params);
        });
      }
      return chart;
    },
    initBarChart: function initBarChart(_ref2) {
      var id = _ref2.id,
          data = _ref2.data,
          clickFun = _ref2.clickFun;

      var chart = this.$echarts.init(document.getElementById(id));
      var yAxisData = data.map(function (item) {
        return item.name ? item.name : '';
      });
      var seriesData = data.map(function (item) {
        item.value = item.personNum;
        return item;
      });
      chart.setOption({
        // grid: {
        //   right: 100
        // },
        color: ['#336bad'],
        xAxis: {
          show: false
        },
        yAxis: {
          show: true,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            width: 50,
            color: '#4f81bd'
          },
          type: 'category',
          data: yAxisData
        },

        series: [{
          type: 'bar',
          label: {
            position: 'right',
            show: true,
            emphasis: {
              textStyle: {
                fontSize: '13',
                fontWeight: 'normal'
              }
            },
            formatter: function formatter(item, index) {
              return '' + item.value;
            }
          },
          data: seriesData
        }]
      });

      if (clickFun) {
        chart.on('click', function (params) {
          clickFun(params);
        });
      }
      return chart;
    }
  }
});

/***/ }),

/***/ "mmGI":
/*!*********************************************************************************!*\
  !*** ./src/views/operationMonitor/chartStatistics.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./chartStatistics.vue?vue&type=script&lang=js& */ "kj3Z");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "sVQK":
/*!***************************************************************************************!*\
  !*** ./src/views/operationMonitor/chartStatistics.vue?vue&type=template&id=500ef08e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_template_id_500ef08e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./chartStatistics.vue?vue&type=template&id=500ef08e& */ "x+Oc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_template_id_500ef08e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chartStatistics_vue_vue_type_template_id_500ef08e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "x+Oc":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/operationMonitor/chartStatistics.vue?vue&type=template&id=500ef08e& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"monitorChartStatisticsDiv"},[_c('div',{staticClass:"banner flex-end flex-middle"},[_c('el-radio-group',{on:{"change":_vm.changeFun},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},[_c('el-radio-button',{attrs:{"label":"当前在线人数"}},[_vm._v("当前在线人数")]),_vm._v(" "),_c('el-radio-button',{attrs:{"label":"在册人数"}},[_vm._v("在册人数")]),_vm._v(" "),_c('el-radio-button',{attrs:{"label":"App使用数"}},[_vm._v("App使用数")])],1)],1),_vm._v(" "),_c('div',[_c('el-row',[_c('el-col',{staticClass:"leftCard",attrs:{"span":8}},[_c('div',{staticClass:"title"},[_vm._v("项目人数")]),_vm._v(" "),_c('div',{staticClass:"flex-center flex-middle"},[_c('div',{attrs:{"id":"leftChart"}})])]),_vm._v(" "),_c('el-col',{staticClass:"rightCard",attrs:{"span":16}},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.projectName))]),_vm._v(" "),_c('div',{staticClass:"flex-center flex-middle"},[_c('div',{attrs:{"id":"rightChart"}})])])],1)],1)])}
var staticRenderFns = []



/***/ }),

/***/ "z1JZ":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/operationMonitor/chartStatistics.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);