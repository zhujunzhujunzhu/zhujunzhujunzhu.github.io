(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-524a"],{

/***/ "0nwB":
/*!********************************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/attachCom.vue?vue&type=style&index=0&id=34f8f07e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_style_index_0_id_34f8f07e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./attachCom.vue?vue&type=style&index=0&id=34f8f07e&lang=scss&scoped=true& */ "lsMx");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_style_index_0_id_34f8f07e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_style_index_0_id_34f8f07e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_style_index_0_id_34f8f07e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_style_index_0_id_34f8f07e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_style_index_0_id_34f8f07e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "9CGS":
/*!*********************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/newsCenter.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsCenter.vue?vue&type=style&index=0&lang=scss& */ "m/kF");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "HWJh":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/attachCom.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    urls: {
      type: Array | String,
      default: function _default() {
        return [];
      }
    },
    info: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    iconValue: {
      type: String,
      default: 'iconfont iconfujian'
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    dealIconClass: function dealIconClass(urlInfo) {
      if (!urlInfo) {
        return 'iconfont iconfujian';
      } else {
        // 2020-2-11 现在不做图标的区分
        // const regExp = /(.+?)\.pdf$/
        // if (regExp.test(urlInfo.url)) {
        //   return 'iconfont iconfujian'
        // } else {
        // return 'iconfont iconxiazai2'
        // }
        return 'iconfont iconxiazai2';
      }
    },
    openFile: function openFile(inner) {
      window.open(inner.url);
      this.$emit('openFile', { info: this.info, attach: inner });
    }
  }

});

/***/ }),

/***/ "NPHp":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/newsCenter.vue?vue&type=template&id=fe0a38c4& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"newsCenter card"},[_c('div',{staticClass:"card-head flex-space-between"},[_c('div',{staticClass:"card-title fs-24"},[_vm._v("新闻中心")]),_vm._v(" "),_c('div',{staticClass:"maright"},[_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_gcdd_xwgg_xwbc'),expression:"'P_gcdd_xwgg_xwbc'"}],staticClass:"addButtonColor",attrs:{"icon":"el-icon-circle-plus-outline"},on:{"click":_vm.showEditForm}},[_vm._v("添加")]),_vm._v(" "),_c('el-button',{staticClass:"widthButton",attrs:{"type":"primary"},on:{"click":_vm.skipPage}},[_vm._v("\n        更多\n        "),_c('i',{staticClass:"el-icon-arrow-right el-icon--right"})])],1)]),_vm._v(" "),_c('div',{staticClass:"striping"}),_vm._v(" "),_c('div',{staticClass:"card-content"},[(_vm.list.length>0)?_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"card-content-item flex-space-between fs-14 pointer"},[_c('div',{staticClass:"text-overflow color-888 flex-1",on:{"click":function($event){return _vm.goDetial(item)}}},[_c('i',{staticClass:"iclass"}),_vm._v("\n          "+_vm._s(item.title)+"\n          ")]),_vm._v(" "),_c('attachCom',{attrs:{"urls":item.urls}}),_vm._v(" "),_c('div',{staticClass:"time color-999"},[_vm._v(_vm._s(item.time))])],1)}):_c('div',{staticClass:"no-data"},[_vm._v("暂无数据")])],2),_vm._v(" "),_c('editFormNewDialog',{attrs:{"edit-show":_vm.editShow,"width":"80%","form":_vm.form,"is-new":_vm.isNew},on:{"update:editShow":function($event){_vm.editShow=$event},"update:edit-show":function($event){_vm.editShow=$event},"closeFun":_vm.closeFun}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "O/4f":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/attachCom.vue?vue&type=template&id=34f8f07e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.urls && _vm.urls.length>0)?_c('div',_vm._l((_vm.urls.slice(0,3)),function(inner,innerIndex){return _c('span',{key:innerIndex+'_'+new Date().getTime(),class:_vm.dealIconClass(inner),attrs:{"title":inner.originalFileName},on:{"click":function($event){$event.stopPropagation();return _vm.openFile(inner)}}})}),0):_vm._e()])}
var staticRenderFns = []



/***/ }),

/***/ "QTjW":
/*!***********************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/newsCenter.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newsCenter_vue_vue_type_template_id_fe0a38c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsCenter.vue?vue&type=template&id=fe0a38c4& */ "i80t");
/* harmony import */ var _newsCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsCenter.vue?vue&type=script&lang=js& */ "Tbsz");
/* empty/unused harmony star reexport *//* harmony import */ var _newsCenter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsCenter.vue?vue&type=style&index=0&lang=scss& */ "9CGS");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _newsCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newsCenter_vue_vue_type_template_id_fe0a38c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newsCenter_vue_vue_type_template_id_fe0a38c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "newsCenter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Tbsz":
/*!************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/newsCenter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsCenter.vue?vue&type=script&lang=js& */ "dE3I");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "YZol":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/attachCom.vue?vue&type=template&id=34f8f07e&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_template_id_34f8f07e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./attachCom.vue?vue&type=template&id=34f8f07e&scoped=true& */ "O/4f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_template_id_34f8f07e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_template_id_34f8f07e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "amSa":
/*!**********************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/attachCom.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attachCom_vue_vue_type_template_id_34f8f07e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachCom.vue?vue&type=template&id=34f8f07e&scoped=true& */ "YZol");
/* harmony import */ var _attachCom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attachCom.vue?vue&type=script&lang=js& */ "mdAE");
/* empty/unused harmony star reexport *//* harmony import */ var _attachCom_vue_vue_type_style_index_0_id_34f8f07e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachCom.vue?vue&type=style&index=0&id=34f8f07e&lang=scss&scoped=true& */ "0nwB");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _attachCom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attachCom_vue_vue_type_template_id_34f8f07e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attachCom_vue_vue_type_template_id_34f8f07e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34f8f07e",
  null
  
)

component.options.__file = "attachCom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "dE3I":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/newsCenter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editFormNewDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editFormNewDialog */ "wWqR");
/* harmony import */ var _api_project_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/project/news */ "3Zin");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _utils_tableAttach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/tableAttach */ "2fVa");
/* harmony import */ var _attachCom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attachCom */ "amSa");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");

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







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NewsCenter',
  components: { editFormNewDialog: _editFormNewDialog__WEBPACK_IMPORTED_MODULE_1__["default"], attachCom: _attachCom__WEBPACK_IMPORTED_MODULE_5__["default"] },
  directives: { buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_6__["default"] },
  data: function data() {
    return {
      listQuery: {
        currPage: 1,
        pageSize: 6
      },
      editShow: false,
      editTitle: '新增',
      list: [],
      total: 0,
      form: {},
      isNew: true
    };
  },
  mounted: function mounted() {
    this.getNewsList();
  },

  methods: {
    getNewsList: function getNewsList() {
      var _this = this;

      Object(_api_project_news__WEBPACK_IMPORTED_MODULE_2__["getNewsList"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.listQuery, { status: 'yfb' })).then(function (res) {
        if (res.success) {
          if (!res.result) return;
          _this.total = res.result.total;
          _this.list = res.result.list.map(function (item) {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { time: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseTime"])(item.deployDate, '{y}-{m}-{d}') });
          });
          // 附件
          _utils_tableAttach__WEBPACK_IMPORTED_MODULE_4__["default"].getUrlList(_this.list, 'docId', true).then(function (urlList) {
            _this.list = _this.list.map(function (item, index) {
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { urls: urlList[index] });
            });
          });
        }
      });
    },
    goDetial: function goDetial(info) {
      if (info.content) {
        this.$storage.setStorage('toDetialPageNewsInfo', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          from: 'news'
        }, info));
        this.$router.push('/projectScheduling/detialPageNews');
      } else {
        this.openPdf(info);
      }
    },
    skipPage: function skipPage() {
      this.$router.push('SeeMoreNews');
    },
    showEditForm: function showEditForm() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.editShow = true;
      });
    },
    closeFun: function closeFun() {
      this.editShow = false;
      this.getNewsList();
    },
    download: function download(firstPdf) {
      var _this3 = this;

      this.$confirm('请点击下载预览', '提示', {
        confirmButtonText: '下载',
        cancelButtonText: '取消',
        type: 'info'
      }).then(function () {
        window.open(firstPdf);
        _this3.$message({
          type: 'success',
          message: '下载成功'
        });
      }).catch(function () {
        _this3.$message({
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
    }
  }
});

/***/ }),

/***/ "i80t":
/*!******************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/newsCenter.vue?vue&type=template&id=fe0a38c4& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_template_id_fe0a38c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsCenter.vue?vue&type=template&id=fe0a38c4& */ "NPHp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_template_id_fe0a38c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCenter_vue_vue_type_template_id_fe0a38c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "lsMx":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/attachCom.vue?vue&type=style&index=0&id=34f8f07e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "m/kF":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/newsCenter.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "mdAE":
/*!***********************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/attachCom.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./attachCom.vue?vue&type=script&lang=js& */ "HWJh");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_attachCom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);