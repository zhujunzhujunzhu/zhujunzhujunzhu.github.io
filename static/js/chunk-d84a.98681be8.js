(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-d84a"],{

/***/ "9Elv":
/*!****************************************************!*\
  !*** ./src/views/formProcess/completedProcess.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _completedProcess_vue_vue_type_template_id_4cdad732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completedProcess.vue?vue&type=template&id=4cdad732& */ "ORUM");
/* harmony import */ var _completedProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completedProcess.vue?vue&type=script&lang=js& */ "DLpI");
/* empty/unused harmony star reexport *//* harmony import */ var _completedProcess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completedProcess.vue?vue&type=style&index=0&lang=scss& */ "yccu");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _completedProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _completedProcess_vue_vue_type_template_id_4cdad732___WEBPACK_IMPORTED_MODULE_0__["render"],
  _completedProcess_vue_vue_type_template_id_4cdad732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "completedProcess.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9uTl":
/*!*****************************!*\
  !*** ./src/api/formdata.js ***!
  \*****************************/
/*! exports provided: deleteApi, get, list, save, processBodyList, getFormData, getProcessExit, processList, dealTask, alreadyMatterList, approveCommentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteApi", function() { return deleteApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processBodyList", function() { return processBodyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormData", function() { return getFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessExit", function() { return getProcessExit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processList", function() { return processList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealTask", function() { return dealTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alreadyMatterList", function() { return alreadyMatterList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveCommentList", function() { return approveCommentList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function deleteApi(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/delete',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/get',
    method: 'post',
    data: param
  });
}

function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/list',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/save',
    method: 'post',
    data: param
  });
}

// 获取待办事项列表
function processBodyList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/processBodyList',
    method: 'post',
    data: param
  });
}

// 获取待办事项详情
function getFormData(param) {
  // url 映射处理
  var url = '/rest/formdata/getFormData';
  switch (param.urlType) {
    case 'KGBG':
      url = '/rest/processApproveTaskRest/getApproveForm';
      break;
    case 'SGZZSJ':
      // 施工组织设计流程
      url = '/rest/processApproveTaskRest/getApproveForm';
      break;
    case 'SJBG':
      url = 'rest/designChange/getFormData';
      break;
    case 'XW':
      // 新闻流程
      url = '/rest/news/getApproveForm';
      break;
    case 'JTJH':
      // 静态计划
      url = '/rest/wbsStagePlan/getApproveForm';
      break;
    default:
      // 自定义表单流程
      url = '/rest/formdata/getFormData';
  }
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: url,
    method: 'post',
    data: param
  });
}

// 获取流程路径
function getProcessExit(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/getProcessExit',
    method: 'post',
    data: param
  });
}
// 我的流程
function processList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/processList',
    method: 'post',
    data: param
  });
}

// 任务办理
function dealTask(param) {
  // url 映射处理
  var url = '/rest/formData/getStartReport';
  switch (param.urlType) {
    case 'KGBG':
      url = 'rest/startReport/dealTask';
      break;
    case 'SGZZSJ':
      url = '/rest/constructionOrganization/dealTask';
      break;
    case 'SJBG':
      url = '/rest/designChange/dealTask';
      break;
    case 'XW':
      url = '/rest/news/dealTask';
      break;
    default:
      url = '/rest/formData/dealTask';
  }
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: url,
    method: 'post',
    data: param
  });
}

// 已办事项
function alreadyMatterList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/alreadyMatterList',
    method: 'post',
    data: param
  });
}

// 获取审批记录信息
function approveCommentList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/approveCommentList',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "B6yi":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/completedProcess.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _api_formdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/formdata */ "9uTl");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ "7Qib");

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
  components: {
    tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_1__["default"], MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      list: [],
      columns: [{
        text: '请求标题',
        value: 'processBodyName'
      }, {
        text: '工作流',
        value: 'processTemplateName'
      }, {
        text: '创建人',
        value: 'applyUserName'
      },
      // {
      //   text: '处理进度',
      //   value: 'status'
      // },
      {
        text: '办理时间',
        value: 'createDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_5__["parseTime"]
        // {
        //   text: '操作',
        //   type: 'iconButton',
        //   width: 300,
        //   list: this.operButton
        // }
      }],
      listLoading: false,
      total: '',
      listQuery: {}
    };
  },
  mounted: function mounted() {
    this.getList();
  },

  methods: {
    dealStatus: function dealStatus(nodeNum, nodeName) {
      var back = nodeNum;
      if (nodeNum === 0) {
        back = '（0）完成';
      } else {
        back = nodeNum + '  ' + nodeName;
      }
      return back;
    },
    getList: function getList() {
      var _this = this;

      this.listLoading = true;
      Object(_api_formdata__WEBPACK_IMPORTED_MODULE_2__["alreadyMatterList"])({}).then(function (res) {
        if (res.success) {
          if (res.result) {
            _this.list = res.result.list.map(function (item) {
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { status: _this.dealStatus(item.nodeNum, item.nodeName) });
            });
            _this.listLoading = false;
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "DLpI":
/*!*****************************************************************************!*\
  !*** ./src/views/formProcess/completedProcess.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./completedProcess.vue?vue&type=script&lang=js& */ "B6yi");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "DOIf":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/completedProcess.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ORUM":
/*!***********************************************************************************!*\
  !*** ./src/views/formProcess/completedProcess.vue?vue&type=template&id=4cdad732& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_template_id_4cdad732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./completedProcess.vue?vue&type=template&id=4cdad732& */ "sunX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_template_id_4cdad732___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_template_id_4cdad732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "sunX":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/completedProcess.vue?vue&type=template&id=4cdad732& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"completedProcess"},[_c('my-card',{staticClass:"completedProcessContainer",staticStyle:{"height":"80vh"},attrs:{"title":"已办事项"}},[_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.list,"columns":_vm.columns,"list-loading":_vm.listLoading}})],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "yccu":
/*!**************************************************************************************!*\
  !*** ./src/views/formProcess/completedProcess.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./completedProcess.vue?vue&type=style&index=0&lang=scss& */ "DOIf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_completedProcess_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);