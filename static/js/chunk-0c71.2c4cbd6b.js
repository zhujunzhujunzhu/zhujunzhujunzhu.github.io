(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-0c71"],{

/***/ "1gA+":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/home/notice.vue?vue&type=template&id=349b26de& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"homeInfoDiv"},[_c('div',{staticClass:"header flex flex-space-between flex-middle"},[_c('div',{staticClass:"menuTab flex flex-middle pointer"},[_c('i',{staticClass:"iconfont iconxinwen"}),_vm._v(" "),_vm._l((_vm.menus),function(item,index){return _c('div',{key:index,class:_vm.classFun(index),on:{"click":function($event){return _vm.clickFun(index)}}},[_vm._v("\n        "+_vm._s(item.name)+"\n        "),( (index !== _vm.menus.length-1))?_c('span',[_vm._v("/")]):_vm._e()])})],2),_vm._v(" "),(false)?undefined:_vm._e()]),_vm._v(" "),_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"content"},[(_vm.list.length!==0)?_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"card-content-item flex-space-between"},[_c('div',{staticClass:"flex flex-1 flex-space-between"},[_c('div',{staticClass:"text-overflow flex-1 nameDiv",on:{"click":function($event){return _vm.goDetial(item)}}},[_vm._v(_vm._s(item.name))]),_vm._v(" "),(item.urls && item.urls.length>0)?_c('div',_vm._l((item.urls.slice(0,3)),function(inner,innerIndex){return _c('span',{key:innerIndex+'_'+index,class:_vm.dealIconClass(inner),attrs:{"title":inner.originalFileName},on:{"click":function($event){return _vm.openFile(inner,item)}}})}),0):_vm._e()]),_vm._v(" "),(_vm.activeIndex !==2)?_c('div',{staticClass:"time fs-14 color-999"},[_vm._v(_vm._s(item.time))]):_vm._e()])}):_c('div',{staticClass:"no-data"},[_vm._v("暂无数据")])],2),_vm._v(" "),_c('dispatchingNoticeDetialDialog',{attrs:{"detial-show":_vm.detialShow,"info":_vm.info},on:{"update:detialShow":function($event){_vm.detialShow=$event},"update:detial-show":function($event){_vm.detialShow=$event}}}),_vm._v(" "),_c('meetingNoticeDetialDialog',{attrs:{"detial-show":_vm.mettingDetialShow,"info":_vm.info},on:{"update:detialShow":function($event){_vm.mettingDetialShow=$event},"update:detial-show":function($event){_vm.mettingDetialShow=$event}}}),_vm._v(" "),(_vm.isShow)?_c('receivingAndIssuingDialog',{attrs:{"is-show":_vm.isShow,"dailog-status":_vm.dailogStatus,"form":_vm.form,"record-list":_vm.recordList,"list-bool":_vm.listBool},on:{"update:isShow":function($event){_vm.isShow=$event},"update:is-show":function($event){_vm.isShow=$event}}}):_vm._e(),_vm._v(" "),(_vm.pdfShow)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"pdf-notice-dialog-container",attrs:{"title":_vm.pdfTitle,"visible":_vm.pdfShow,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.pdfShow=$event}}},[_c('pdf',{attrs:{"src":_vm.pdfSrc},on:{"update:src":function($event){_vm.pdfSrc=$event}}})],1):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "2lTu":
/*!**************************************************************!*\
  !*** ./src/views/drawingPlatform/components/home/notice.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notice_vue_vue_type_template_id_349b26de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice.vue?vue&type=template&id=349b26de& */ "kboT");
/* harmony import */ var _notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice.vue?vue&type=script&lang=js& */ "SJ4q");
/* empty/unused harmony star reexport *//* harmony import */ var _notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice.vue?vue&type=style&index=0&lang=scss& */ "HTEb");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notice_vue_vue_type_template_id_349b26de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notice_vue_vue_type_template_id_349b26de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "notice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3Zin":
/*!*********************************!*\
  !*** ./src/api/project/news.js ***!
  \*********************************/
/*! exports provided: getNewsList, getNoticeList, deleteNews, saveNews, releaseNews, getNews, uploadFiles, saveNotice, dealTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsList", function() { return getNewsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNoticeList", function() { return getNoticeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNews", function() { return deleteNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveNews", function() { return saveNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseNews", function() { return releaseNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFiles", function() { return uploadFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveNotice", function() { return saveNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealTask", function() { return dealTask; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getNewsList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/list',
    method: 'post',
    data: param
  });
}

function getNoticeList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/noticeList',
    method: 'post',
    data: param
  });
}

function deleteNews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/delete',
    method: 'post',
    data: param
  });
}

function saveNews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/save',
    method: 'post',
    data: param
  });
}

// 新闻公告发布
function releaseNews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/release',
    method: 'post',
    data: param
  });
}

function getNews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/get',
    method: 'post',
    data: param
  });
}

// 上传文件
function uploadFiles(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/uploadFiles',
    method: 'post',
    data: param
  });
}

// 保存公告的查看信息  记录统计阅读次数
function saveNotice(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/saveNotice',
    method: 'post',
    data: param
  });
}

// 新闻流程审批
function dealTask(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/dealTask',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "5DQw":
/*!******************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/dispatchingNoticeDetialDialog.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatchingNoticeDetialDialog_vue_vue_type_template_id_43bfc43c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchingNoticeDetialDialog.vue?vue&type=template&id=43bfc43c& */ "8vP2");
/* harmony import */ var _dispatchingNoticeDetialDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispatchingNoticeDetialDialog.vue?vue&type=script&lang=js& */ "s0nC");
/* empty/unused harmony star reexport *//* harmony import */ var _dispatchingNoticeDetialDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispatchingNoticeDetialDialog.vue?vue&type=style&index=0&lang=scss& */ "Cbt5");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dispatchingNoticeDetialDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dispatchingNoticeDetialDialog_vue_vue_type_template_id_43bfc43c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dispatchingNoticeDetialDialog_vue_vue_type_template_id_43bfc43c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "dispatchingNoticeDetialDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "7Mcg":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/home/notice.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7OxQ":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/dispatchingNoticeDetialDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detialDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detialDialog */ "ospF");
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
  components: { detialDialog: _detialDialog__WEBPACK_IMPORTED_MODULE_0__["default"] },
  props: {
    info: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    detialShow: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      configArr: [{ label: '名称', code: 'name' }, { label: '类型', code: 'typeName' }, { label: '发令人', code: 'sendUser' }, { label: '受令人', code: 'receiveUsers' }, { label: '发令时间', code: 'time' }, { label: '要求处理时间', code: 'terminalDate' }, { label: '内容', code: 'content' }]
    };
  },
  mounted: function mounted() {},

  methods: {
    beforeClose: function beforeClose() {
      this.$emit('update:detialShow', false);
    }
  }
});

/***/ }),

/***/ 80:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 81:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 82:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "8vP2":
/*!*************************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/dispatchingNoticeDetialDialog.vue?vue&type=template&id=43bfc43c& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_template_id_43bfc43c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dispatchingNoticeDetialDialog.vue?vue&type=template&id=43bfc43c& */ "ZJFa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_template_id_43bfc43c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_template_id_43bfc43c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "Cbt5":
/*!****************************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/dispatchingNoticeDetialDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dispatchingNoticeDetialDialog.vue?vue&type=style&index=0&lang=scss& */ "NOFB");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "EEB7":
/*!*************************************!*\
  !*** ./src/api/project/dispatch.js ***!
  \*************************************/
/*! exports provided: getDispatchList, list, save, get, release, saveDispatch, releaseDispatch, getDispatchReceiptList, dispatchReceipt, deleteDispatch, getDispatchReadRecord, saveDispatchReadMessage, dispatchReceiptUploadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDispatchList", function() { return getDispatchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "release", function() { return release; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDispatch", function() { return saveDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseDispatch", function() { return releaseDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDispatchReceiptList", function() { return getDispatchReceiptList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchReceipt", function() { return dispatchReceipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDispatch", function() { return deleteDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDispatchReadRecord", function() { return getDispatchReadRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDispatchReadMessage", function() { return saveDispatchReadMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchReceiptUploadFile", function() { return dispatchReceiptUploadFile; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getDispatchList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/dispatch/list',
    method: 'post',
    data: param
  });
}

function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dispatch/list',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dispatch/save',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dispatch/get',
    method: 'post',
    data: param
  });
}

function release() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dispatch/release',
    method: 'post',
    data: param
  });
}
function saveDispatch(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/dispatch/save',
    method: 'post',
    data: param
  });
}

function releaseDispatch(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dispatch/release',
    method: 'post',
    data: param
  });
}

// 调度回执列表
function getDispatchReceiptList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dispatch/dispatchReceiptList',
    method: 'post',
    data: param
  });
}
// 调度回执
function dispatchReceipt(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dispatch/dispatchReceipt',
    method: 'post',
    data: param
  });
}

function deleteDispatch(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dispatch/delete',
    method: 'post',
    data: param
  });
}

function getDispatchReadRecord(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dispatch/getReadRecord',
    method: 'post',
    data: param
  });
}

function saveDispatchReadMessage(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/dispatch/saveDispatchReadMessage',
    method: 'post',
    data: param
  });
}

function dispatchReceiptUploadFile(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/dispatch/dispatchReceiptUploadFile',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "HTEb":
/*!************************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/home/notice.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./notice.vue?vue&type=style&index=0&lang=scss& */ "7Mcg");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "NOFB":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/dispatchingNoticeDetialDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "SJ4q":
/*!***************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/home/notice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./notice.vue?vue&type=script&lang=js& */ "bb3M");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "ZJFa":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/dispatchingNoticeDetialDialog.vue?vue&type=template&id=43bfc43c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('detialDialog',{attrs:{"info":_vm.info,"config-arr":_vm.configArr,"detial-show":_vm.detialShow},on:{"beforeClose":_vm.beforeClose}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "bb3M":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/home/notice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_project_dispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/project/dispatch */ "EEB7");
/* harmony import */ var _api_project_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/project/news */ "3Zin");
/* harmony import */ var _api_project_disReceiveDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/disReceiveDocument */ "hlZ4");
/* harmony import */ var _api_project_meeting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/project/meeting */ "Y1W8");
/* harmony import */ var _api_project_rulesRegulations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/project/rulesRegulations */ "yiYg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _views_project_projectScheduling_receivingAndIssuing_receivingAndIssuingDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/project/projectScheduling/receivingAndIssuing/receivingAndIssuingDialog */ "1ItX");
/* harmony import */ var _views_project_projectScheduling_components_dispatchingNoticeDetialDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/project/projectScheduling/components/dispatchingNoticeDetialDialog */ "5DQw");
/* harmony import */ var _views_project_projectScheduling_components_meetingNoticeDetialDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/project/projectScheduling/components/meetingNoticeDetialDialog */ "m8xR");
/* harmony import */ var _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/tableAttach.js */ "2fVa");
/* harmony import */ var _components_PDF_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/PDF/index */ "QfQx");

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








// import {
//   getReadRecord,
//   saveReceiveReadMessage
// } from '@/api/project/disReceiveDocument'





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    dispatchingNoticeDetialDialog: _views_project_projectScheduling_components_dispatchingNoticeDetialDialog__WEBPACK_IMPORTED_MODULE_8__["default"],
    meetingNoticeDetialDialog: _views_project_projectScheduling_components_meetingNoticeDetialDialog__WEBPACK_IMPORTED_MODULE_9__["default"],
    pdf: _components_PDF_index__WEBPACK_IMPORTED_MODULE_11__["default"],
    receivingAndIssuingDialog: _views_project_projectScheduling_receivingAndIssuing_receivingAndIssuingDialog__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      menus: [{ name: '新闻中心' }, { name: '公告公示' }, { name: '调度信息' }, { name: '规章制度' }, { name: '收发文' }],
      activeIndex: 0,
      listAll: [],
      list: [],
      listQuery: {
        currPage: 1,
        pageSize: 8
      },
      isShow: false,
      listBool: false,
      recordList: {},
      dailogStatus: 'view',
      detialShow: false,
      info: {},
      loading: false,
      mettingDetialShow: false,
      pdfShow: false,
      pdfTitle: '',
      pdfSrc: '',
      iconClass: 'iconfont iconfujian'
    };
  },
  mounted: function mounted() {
    this.getNewsList();
  },

  methods: {
    clickFun: function clickFun(index) {
      // 处理两次点击相同的tab不处理
      if (index === this.activeIndex) return;
      if (this.loading) return; // 当正在加载数据时不能进行切换
      this.activeIndex = index;
      if (index === 0) {
        this.getNewsList();
      } else if (index === 1) {
        this.getNoticeList();
      } else if (index === 2) {
        this.getDispatchList();
      } else if (index === 3) {
        this.getRulesRegulations();
      } else if (index === 4) {
        this.getReceiveList();
      } else {
        this.getMeetingList();
      }
    },
    classFun: function classFun(index) {
      if (this.activeIndex === index) {
        return 'active';
      }
    },
    dealIconClass: function dealIconClass(urlInfo) {
      // if (!urlInfo) {
      //   return 'iconfont iconfujian'
      // } else {
      //   const regExp = /(.+?)\.pdf$/
      //   if (regExp.test(urlInfo.url)) {
      //     return 'iconfont iconfujian'
      //   } else {
      //     return 'iconfont iconxiazai2'
      //   }
      // }
      return 'iconfont iconxiazai2';
    },
    getNewsList: function getNewsList() {
      var _this = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_news__WEBPACK_IMPORTED_MODULE_2__["getNewsList"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.listQuery, { status: 'yfb' })).then(function (res) {
        if (res.success) {
          _this.loading = false;
          if (!res.result) return;
          _this.total = res.result.total;
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_10__["default"].getUrlList(res.result.list, 'docId', true).then(function (urlList) {
            _this.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(item.deployDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { name: item.title, urls: urlList[index] });
            });
          });
        }
      });
    },
    getNoticeList: function getNoticeList() {
      var _this2 = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_news__WEBPACK_IMPORTED_MODULE_2__["getNoticeList"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.listQuery, { status: 'yfb' })).then(function (res) {
        if (res.success) {
          _this2.loading = false;
          if (!res.result) return;
          _this2.total = res.result.total;
          // 处理docId 第三个参数 isDown 明确是进行下载的
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_10__["default"].getUrlList(res.result.list, 'fileDocId', true).then(function (urlList) {
            _this2.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(item.deployDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { name: item.title, urls: urlList[index] });
            });
          });
        }
      });
    },
    getDispatchList: function getDispatchList() {
      var _this3 = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_dispatch__WEBPACK_IMPORTED_MODULE_1__["list"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.listQuery, { deployStatus: 'yfb' })).then(function (res) {
        if (res.success) {
          _this3.loading = false;
          if (!res.result) return;
          _this3.total = res.result.total;
          // this.list = res.result.list.map(item => {
          //   return { ...item, time: parseTime(item.sponsorDate, '{y}-{m}-{d} {h}:{i}') }
          // })
          // 处理docId 第三个参数 isDown 明确是进行下载的
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_10__["default"].getUrlList(res.result.list, 'docId', true).then(function (urlList) {
            _this3.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(item.sponsorDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { urls: urlList[index] });
            });
          });
        }
      });
    },
    getRulesRegulations: function getRulesRegulations() {
      var _this4 = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_rulesRegulations__WEBPACK_IMPORTED_MODULE_5__["regulationsList"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.listQuery, { status: 'yfb' })).then(function (res) {
        if (res.success) {
          _this4.loading = false;
          if (!res.result) return;
          _this4.total = res.result.total;
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_10__["default"].getUrlList(res.result.list, 'fileDocId', true).then(function (urlList) {
            _this4.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(item.deployDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { name: item.title, urls: urlList[index] });
            });
          });
        }
      });
    },
    getReceiveList: function getReceiveList() {
      var _this5 = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_disReceiveDocument__WEBPACK_IMPORTED_MODULE_3__["list"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.listQuery, { deployStatus: 'yfb' })).then(function (res) {
        if (res.success) {
          _this5.loading = false;
          if (!res.result) return;
          _this5.total = res.result.total;
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_10__["default"].getUrlList(res.result.list, 'docId', true).then(function (urlList) {
            _this5.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(item.receiveDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { name: item.title, urls: urlList[index] });
            });
          });
        }
      });
    },
    getMeetingList: function getMeetingList() {
      var _this6 = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_meeting__WEBPACK_IMPORTED_MODULE_4__["list"])(this.listQuery).then(function (res) {
        if (res.success) {
          _this6.loading = false;
          if (!res.result) return;
          _this6.total = res.result.total;
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_10__["default"].getUrlList(res.result.list, 'docId', true).then(function (urlList) {
            _this6.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(item.sponsorDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { name: item.title, urls: urlList[index] });
            });
          });
        }
      });
    },
    goMorePage: function goMorePage() {
      // 点击不同的更多跳转到不同的列表页面 新闻中心 通知公告 调度信息 规章制度
      // const routers = [
      //   'SeeMoreNews',
      //   'seeMoreNotice',
      //   'seeMoreDispatching',
      //   'rulesRegulations',
      //   'receivingAndIssuing'
      // ]
      // this.$router.push('/projectScheduling/' + routers[this.activeIndex])
    },
    goDetial: function goDetial(info) {
      // 点击不同类型的条目跳转到不同的详情页面
      // if (this.activeIndex === 0) {
      //   // 新闻中心详情
      //   if (info.content) {
      //     this.$storage.setStorage('toDetialPageNewsInfo', {
      //       from: 'news',
      //       ...info
      //     })
      //     this.$router.push('/projectScheduling/detialPageNews')
      //   } else {
      //     this.openPdf(info)
      //   }
      // } else if (this.activeIndex === 1) {
      //   // 公告通知
      //   saveNotice({ newsId: info.id }).then(res => {
      //     if (info.content) {
      //       this.$storage.setStorage('toDetialPageNewsInfo', {
      //         from: 'notice',
      //         ...info
      //       })
      //       this.$router.push('/projectScheduling/detialPageNews')
      //     } else {
      //       this.openPdf(info)
      //     }
      //   })
      // } else if (this.activeIndex === 2) {
      //   // // 调度信息详情 弹框
      //   this.openPdf(info)
      // } else if (this.activeIndex === 3) {
      //   // 规章制度 弹框
      //   if (info.content) {
      //     this.$storage.setStorage('toDetialPageNewsInfo', {
      //       from: 'notice',
      //       ...info
      //     })
      //     this.$router.push('/projectScheduling/detialPageNews')
      //   } else {
      //     this.openPdf(info)
      //   }
      // } else if (this.activeIndex === 4) {
      //   this.form = { ...info }
      //   this.dailogStatus = 'view'
      //   this.isShow = true
      //   this.listBool = true
      //   saveReceiveReadMessage({ id: info.id }).then(res => {
      //     if (res.success) {
      //       getReadRecord({ id: info.id }).then(res => {
      //         this.recordList = res.result
      //       })
      //     }
      //   })
      // }
    },
    download: function download(firstPdf) {
      var _this7 = this;

      this.$confirm('请点击下载预览', '提示', {
        confirmButtonText: '下载',
        cancelButtonText: '取消',
        type: 'info'
      }).then(function () {
        window.open(firstPdf);
        _this7.$message({
          type: 'success',
          message: '下载成功'
        });
      }).catch(function () {
        _this7.$message({
          type: 'info',
          message: '取消下载'
        });
      });
    },
    openPdf: function openPdf(info) {
      var regExp = /(.+?)\.(pdf|jpg|gif|bmp|jpeg|png|bmp|tiff)$/;
      var url = '';
      // 首先判断有无附件
      if (info.urls.length === 0) {
        this.$message({
          type: 'warning',
          message: '无附件'
        });
        return;
      }
      // 尝试找到第一个可以直接用浏览器打开的pdf或者图片
      for (var index = 0; index < info.urls.length; index++) {
        if (regExp.test(info.urls[index].url)) {
          url = info.urls[index].url;
          break;
        }
      }
      if (url) {
        url = url.replace('/doc', '/img');
        // 将doc替换为img
        window.open(url);
      } else {
        url = info.urls[0].url;
        this.download(url);
      }
    },
    openFile: function openFile(inner, item) {
      window.open(inner.url);
      // 当为公告公示时的处理   调用后台saveNotice接口保存阅读量
      if (this.activeIndex === 1) {
        Object(_api_project_news__WEBPACK_IMPORTED_MODULE_2__["saveNotice"])({ newsId: item.id }).then(function (res) {});
      }
    }
  }
});

/***/ }),

/***/ "kboT":
/*!*********************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/home/notice.vue?vue&type=template&id=349b26de& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_template_id_349b26de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./notice.vue?vue&type=template&id=349b26de& */ "1gA+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_template_id_349b26de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_template_id_349b26de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "s0nC":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/dispatchingNoticeDetialDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dispatchingNoticeDetialDialog.vue?vue&type=script&lang=js& */ "7OxQ");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingNoticeDetialDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "yiYg":
/*!*********************************************!*\
  !*** ./src/api/project/rulesRegulations.js ***!
  \*********************************************/
/*! exports provided: regulationsList, save, regulationsDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regulationsList", function() { return regulationsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regulationsDelete", function() { return regulationsDelete; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function regulationsList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/regulationsList',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/save',
    method: 'post',
    data: param
  });
}
function regulationsDelete(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/delete',
    method: 'post',
    data: param
  });
}

/***/ })

}]);