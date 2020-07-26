(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-19f5"],{

/***/ "1l4f":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/project/BIM/BIMDispatching/BIMReport/components/reportDailog.vue?vue&type=template&id=3124e776& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_template_id_3124e776___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./reportDailog.vue?vue&type=template&id=3124e776& */ "W6iD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_template_id_3124e776___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_template_id_3124e776___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "BqxH":
/*!*****************************************************!*\
  !*** ./src/api/project/BIMDispatching/BIMReport.js ***!
  \*****************************************************/
/*! exports provided: list, deleteFun, get, save, queryOrgList, weekReportTemplateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFun", function() { return deleteFun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryOrgList", function() { return queryOrgList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekReportTemplateList", function() { return weekReportTemplateList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");
/*
 * @Description
 * @Autor 朱俊
 * @Date 2020-07-17 11:11:47
 * @LastEditors 朱俊
 * @LastEditTime 2020-07-17 11:17:54
 */


function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsWeekReport/list',
    method: 'post',
    data: param
  });
}

function deleteFun(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsWeekReport/delete',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsWeekReport/get',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsWeekReport/save',
    method: 'post',
    data: param
  });
}

// 查询用户单位
function queryOrgList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsWeekReport/queryOrgList',
    method: 'post',
    data: param
  });
}

// 模板表
function weekReportTemplateList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/weekReportTemplate/list',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "Ia33":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/project/BIM/BIMDispatching/BIMReport/components/reportDailog.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../../node_modules/css-loader??ref--11-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./reportDailog.vue?vue&type=style&index=0&lang=scss& */ "k8s8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Knq4":
/*!*************************************************************************************************************!*\
  !*** ./src/views/project/BIM/BIMDispatching/BIMReport/components/reportDailog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./reportDailog.vue?vue&type=script&lang=js& */ "nYsS");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_reportDailog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "O0H5":
/*!************************************************************************************!*\
  !*** ./src/views/project/BIM/BIMDispatching/BIMReport/components/reportDailog.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reportDailog_vue_vue_type_template_id_3124e776___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportDailog.vue?vue&type=template&id=3124e776& */ "1l4f");
/* harmony import */ var _reportDailog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportDailog.vue?vue&type=script&lang=js& */ "Knq4");
/* empty/unused harmony star reexport *//* harmony import */ var _reportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportDailog.vue?vue&type=style&index=0&lang=scss& */ "Ia33");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _reportDailog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reportDailog_vue_vue_type_template_id_3124e776___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reportDailog_vue_vue_type_template_id_3124e776___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "reportDailog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "W6iD":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/BIMDispatching/BIMReport/components/reportDailog.vue?vue&type=template&id=3124e776& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"reportDialogDiv"},[(_vm.isShow)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"reportDialog",attrs:{"title":_vm.title,"visible":_vm.isShow,"before-close":_vm.closeFun,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.isShow=$event}}},[_c('div',{staticClass:"headTitle flex flex-middle flex-center"},[_vm._v(_vm._s(_vm.projectInfo.name))]),_vm._v(" "),_c('div',{staticClass:"subTitle flex flex-middle flex-center"},[_vm._v(_vm._s(_vm.reportType))]),_vm._v(" "),_c('div',{staticClass:"baseInfoDiv flex flex-middle"},[_c('span',[_vm._v("时间：")]),_c('span',[_vm._v(_vm._s(_vm.info.date))]),_vm._v(" "),_c('span',[_vm._v("单位：")]),_c('span',[_vm._v(_vm._s(_vm.info.org))])]),_vm._v(" "),_c('div',{staticClass:"report-form-wrapper"},[_c('el-form',{ref:"reportForm",attrs:{"model":_vm.reportForm,"size":"small","label-width":"0"}},_vm._l((_vm.reportList),function(item,index){return _c('div',{key:index,staticClass:"report-form-item"},[_c('span',{staticClass:"report-form-item-title"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),(!item.style)?_c('div',[_c('el-form-item',{attrs:{"prop":("" + (item.name))}},[(_vm.isEdit)?_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入内容"},model:{value:(_vm.reportForm[("" + (item.name))]),callback:function ($$v) {_vm.$set(_vm.reportForm, ("" + (item.name)), $$v)},expression:"reportForm[`${item.name}`]"}}):_c('div',{staticClass:"textarea"},[_vm._v(_vm._s(_vm.reportForm[("" + (item.name))]? [("" + (item.name))]:"无"))])],1)],1):_c('div',[_c('span',[_vm._v("表格建设中")])])])}),0)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.closeFun}},[_vm._v("取消")]),_vm._v(" "),(_vm.dialogStatus === 'APPROVAL' && _vm.info.status === 'dsh')?[_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:(_vm.privilege.noPass),expression:"privilege.noPass"},{name:"waves",rawName:"v-waves"}],attrs:{"type":"danger"},on:{"click":_vm.noPassFun}},[_vm._v("驳回")]),_vm._v(" "),_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:(_vm.privilege.pass),expression:"privilege.pass"},{name:"waves",rawName:"v-waves"}],attrs:{"type":"success"},on:{"click":_vm.passFun}},[_vm._v("通过")])]:_vm._e(),_vm._v(" "),(_vm.isEdit)?[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.saveLoading},on:{"click":function($event){return _vm.judgeScheduleReport('dtj')}}},[_vm._v("保存")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"success","loading":_vm.submitLoading},on:{"click":function($event){return _vm.judgeScheduleReport('dsh')}}},[_vm._v("提交")])]:_vm._e()],2)]):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "k8s8":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/BIMDispatching/BIMReport/components/reportDailog.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "nYsS":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/BIMDispatching/BIMReport/components/reportDailog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _api_project_BIMDispatching_BIMReport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/BIMDispatching/BIMReport */ "BqxH");

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
//
//
//
//
//
//
//
//
//

// import { loading } from '@/decorator/loading.js'



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ReportDialog',
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  components: {},
  props: {
    title: {
      type: String,
      default: '周报编辑'
    },
    isShow: {
      type: Boolean,
      default: false
    },
    dialogStatus: {
      type: String,
      default: 'ADD'
    },
    baseInfo: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    info: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      reportType: 'BIM周报',
      projectInfo: {},
      reportForm: {},
      isEdit: false,
      privilege: {
        pass: 'P_bimdd_zb_sh',
        noPass: 'P_bimdd_zb_sh'
      },
      saveLoading: false,
      submitLoading: false,
      reportList: []
    };
  },
  mounted: function mounted() {
    this.getProjectInfo();
    this.getReportList();
    this.initReportInfo();
    this.reportForm = {
      org: 'say something',
      date: 'test it',
      statusName: 'good good'
    };
  },

  methods: {
    /**
     * 初始化表单信息
     * @function initReportInfo
     */
    initReportInfo: function initReportInfo() {
      this.info.date = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseTime"])(this.info.date, '{y}-{m}-{d}');
      if (this.dialogStatus !== 'ADD') {
        this.reportForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.info);
        if (this.dialogStatus === 'EDIT') {
          this.isEdit = true;
        }
      }
    },

    /**
     * 关闭弹框操作
     * @function closeFun
     */
    closeFun: function closeFun(info) {
      this.$emit('update:isShow', false);
      this.$emit('closeFun', info);
    },

    /**
     * 获取项目信息
     * @function getProjectInfo
     */
    getProjectInfo: function getProjectInfo() {
      this.projectInfo = JSON.parse(this.$storage.getStorage('project'));
    },

    /**
     * 获取表单的表头字段
     * @function getReportList
     */
    getReportList: function getReportList() {
      var _this = this;

      // this.reportList = [
      //   {
      //     text: '单位',
      //     value: 'org'
      //   },
      //   {
      //     text: '日期',
      //     value: 'date',
      //     flag: true
      //   },
      //   {
      //     text: '状态',
      //     value: 'statusName',
      //     flag: true
      //   }
      // ]
      Object(_api_project_BIMDispatching_BIMReport__WEBPACK_IMPORTED_MODULE_3__["weekReportTemplateList"])({}).then(function (res) {
        _this.reportList = res.result;
      });
    },

    /**
     * 表单审批通过
     * @function passFun
     */
    passFun: function passFun() {},

    /**
     * 表单审批被驳回
     * @function noPassFun
     */
    noPassFun: function noPassFun() {},

    /**
     * 表单保存或提交
     * @function judgeScheduleReport
     */
    judgeScheduleReport: function judgeScheduleReport(newStatus) {}
  }
});

/***/ })

}]);