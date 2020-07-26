(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-7700"],{

/***/ "8Jff":
/*!****************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/investmentCompletion.vue?vue&type=template&id=48c790a0& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_template_id_48c790a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./investmentCompletion.vue?vue&type=template&id=48c790a0& */ "JNh7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_template_id_48c790a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_template_id_48c790a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "9ONj":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/investmentCompletion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _api_project_disReports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/project/disReports */ "4hX1");
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

// import { deepCloneArray } from '@/utils'


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InvestmentCinoketion',
  components: {
    tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    reportType: {
      type: String,
      default: 'week'
    }
  },
  data: function data() {
    return {
      list: [],
      listLoading: false,
      columnsWeek: [{
        text: '工点',
        value: 'workPointName'
      }, {
        text: '周进度',
        children: [{
          text: '周计划（万）',
          value: 'weekPlanQuantities',
          formatter: this.changeStyle('weekPlanQuantities')
        }, {
          text: '周累（万）',
          value: 'weekTotalQuantities',
          formatter: this.changeStyle('weekTotalQuantities')
        }, {
          text: '完成周计划%',
          value: 'weekPercent',
          formatter: this.changeStyle('weekPercent')
        }]
      }, {
        text: '年进度',
        children: [{
          text: '年计划（万）',
          value: 'yearPlanQuantities',
          formatter: this.changeStyle('yearPlanQuantities')
        }, {
          text: '年累（万）',
          value: 'yearTotalQuantities',
          formatter: this.changeStyle('yearTotalQuantities')
        }, {
          text: '完成年计划%',
          value: 'yearPercent',
          formatter: this.changeStyle('yearPercent')
        }]
      }, {
        text: '开累完成',
        children: [{
          text: '开累（万）',
          value: 'startAccumulateQuantities',
          formatter: this.changeStyle('startAccumulateQuantities')
        }, {
          text: '开累完成%',
          value: 'startAccumulatePercent',
          formatter: this.changeStyle('startAccumulatePercent')
        }]
      }],
      columnsMonth: [{
        text: '工点',
        value: 'workPointName'
      }, {
        text: '月进度',
        children: [{
          text: '月计划（万）',
          value: 'monthPlanQuantities',
          formatter: this.changeStyle('monthPlanQuantities')
        }, {
          text: '月累（万）',
          value: 'monthTotalQuantities',
          formatter: this.changeStyle('monthTotalQuantities')
        }, {
          text: '完成月计划%',
          value: 'monthPercent',
          formatter: this.changeStyle('monthPercent')
        }]
      }, {
        text: '年进度',
        children: [{
          text: '年计划（万）',
          value: 'yearPlanQuantities',
          formatter: this.changeStyle('yearPlanQuantities')
        }, {
          text: '年累（万）',
          value: 'yearTotalQuantities',
          formatter: this.changeStyle('yearTotalQuantities')
        }, {
          text: '完成年计划%',
          value: 'yearPercent',
          formatter: this.changeStyle('yearPercent')
        }]
      }, {
        text: '开累完成',
        children: [{
          text: '开累（万）',
          value: 'startAccumulateQuantities',
          formatter: this.changeStyle('startAccumulateQuantities')
        }, {
          text: '开累完成%',
          value: 'startAccumulatePercent',
          formatter: this.changeStyle('startAccumulatePercent')
        }]
      }]
    };
  },

  computed: {
    columns: function columns() {
      if (this.reportType === 'week_report') {
        return this.columnsWeek;
      } else {
        return this.columnsMonth;
      }
    }
  },
  methods: {
    // 处理合计
    dealTotal: function dealTotal(list) {
      // // 此处需要进行数组的深拷贝
      // list = deepCloneArray(list)
      // let totalObj = {
      //   monthPlanQuantities: 0, // 月计划
      //   monthTotalQuantities: 0, // 月累
      //   yearPlanQuantities: 0, // 年计划
      //   yearTotalQuantities: 0, // 年累
      //   startAccumulateQuantities: 0 // 开累
      // }
      // if (this.reportType === 'week_report') {
      //   totalObj = {
      //     weekPlanQuantities: 0, // 周计划
      //     weekTotalQuantities: 0, // 周累
      //     yearPlanQuantities: 0, // 年计划
      //     yearTotalQuantities: 0, // 年累
      //     startAccumulateQuantities: 0 // 开累
      //   }
      // }
      // list.forEach(item => {
      //   Object.keys(totalObj).forEach(prop => {
      //     totalObj[prop] += item[prop]
      //   })
      // })

      // // 处理合计标题
      // totalObj.workPointName = `<div class="font-bold flex-center">合计</div>`
      // // 完成年计划百分比
      // if (totalObj.yearPlanQuantities !== 0) {
      //   // 被除数不为0
      //   totalObj.yearPercent =
      //     (totalObj.yearTotalQuantities / totalObj.yearPlanQuantities) * 100
      // }

      // if (
      //   this.reportType === 'week_report' &&
      //   totalObj.weekPlanQuantities !== 0
      // ) {
      //   // 完成周计划百分比
      //   totalObj.weekPercent =
      //     (totalObj.weekTotalQuantities / totalObj.weekPlanQuantities) * 100
      // } else if (totalObj.monthPlanQuantities !== 0) {
      //   // 完成月计划百分比
      //   totalObj.monthPercent =
      //     (totalObj.monthTotalQuantities / totalObj.monthPlanQuantities) * 100
      // }

      // if (list.length > 0) {
      //   list.push({
      //     ...totalObj
      //   })
      // }

      return list;
    },
    setList: function setList(list) {
      this.list = this.dealTotal(list);
    },
    getList: function getList(params) {
      var _this = this;

      this.listLoading = true;
      return Object(_api_project_disReports__WEBPACK_IMPORTED_MODULE_1__["queryInvestData"])(params).then(function (res) {
        if (res.success) {
          _this.list = _this.dealTotal(res.result);
          _this.listLoading = false;
        }
      });
    },

    /** 改变列的小数保留及其样式
     * @function changeStyle
     * @param att {String} 所在columns下绑定的值，参数
     */
    changeStyle: function changeStyle(att) {
      return function (val) {
        // if (
        //   (att === 'monthPercent' || att === 'startAccumulatePercent') &&
        //   typeof val[att] === 'number'
        // ) {
        //   return `<span class="flex-end">${val[att].toFixed(2) + '%'}</span>`
        // } else if (att === 'weekPercent' && typeof val[att] === 'number') {
        //   return `<span class="flex-end">${val[att].toFixed(0) + '%'}</span>`
        // } else if (att === 'yearPercent' && typeof val[att] === 'number') {
        //   return `<span class="flex-end">${val[att].toFixed(2) + '%'}</span>`
        // } else if (typeof val[att] === 'number') {
        //   if (val[att] === 0) {
        //     return val[att]
        //   } else {
        //     return `<span class="flex-end">${val[att].toFixed(2)}</span>`
        //   }
        // } else {
        //   return val[att]
        // }

        // 2020-4-5 更改逻辑 数值取整 那么百分比怎么处理
        // 百分比的处理
        if ((att === 'monthPercent' || att === 'startAccumulatePercent' || att === 'yearPercent') && typeof val[att] === 'number') {
          // 月百分比 开累百分比
          return '<span class="flex-end">' + (val[att].toFixed(2) + '%') + '</span>';
        } else if (att === 'weekPercent' && typeof val[att] === 'number') {
          // 周计划百分比处理 取整
          return '<span class="flex-end">' + (Math.round(val[att]) + '%') + '</span>';
        } else if (typeof val[att] === 'number') {
          return '<span class="flex-end">' + (val[att] / 10000).toFixed(2) + '</span>';
        }
      };
    }
  }
});

/***/ }),

/***/ "DgJd":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/investmentCompletion.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./investmentCompletion.vue?vue&type=style&index=0&lang=scss& */ "ROPh");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "GRGe":
/*!*********************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/investmentCompletion.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _investmentCompletion_vue_vue_type_template_id_48c790a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investmentCompletion.vue?vue&type=template&id=48c790a0& */ "8Jff");
/* harmony import */ var _investmentCompletion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investmentCompletion.vue?vue&type=script&lang=js& */ "P92l");
/* empty/unused harmony star reexport *//* harmony import */ var _investmentCompletion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investmentCompletion.vue?vue&type=style&index=0&lang=scss& */ "DgJd");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _investmentCompletion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _investmentCompletion_vue_vue_type_template_id_48c790a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _investmentCompletion_vue_vue_type_template_id_48c790a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "investmentCompletion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "JNh7":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/investmentCompletion.vue?vue&type=template&id=48c790a0& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"investmentCompletionDiv"},[_c('table-list',{staticClass:"dataTable issueTable",attrs:{"data":_vm.list,"list-loading":_vm.listLoading,"columns":_vm.columns}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "P92l":
/*!**********************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/investmentCompletion.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./investmentCompletion.vue?vue&type=script&lang=js& */ "9ONj");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_investmentCompletion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "ROPh":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/investmentCompletion.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);