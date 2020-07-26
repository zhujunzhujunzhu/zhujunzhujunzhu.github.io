(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-03ab"],{

/***/ "1aSM":
/*!*******************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/dailyReportDailog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dailyReportDailog.vue?vue&type=script&lang=js& */ "q5Do");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "4Y9A":
/*!*************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/dailyReportDailog.vue?vue&type=template&id=38615b6c& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_template_id_38615b6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dailyReportDailog.vue?vue&type=template&id=38615b6c& */ "f0cY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_template_id_38615b6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_template_id_38615b6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "5HWN":
/*!************************!*\
  !*** ./src/api/doc.js ***!
  \************************/
/*! exports provided: uploadDoc, getPicture, uploadImg, attachList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadDoc", function() { return uploadDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPicture", function() { return getPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImg", function() { return uploadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachList", function() { return attachList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function uploadDoc(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/uploadDoc',
    method: 'post',
    data: param
  });
}

// 根据docId获取图片
function getPicture(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/attachList',
    method: 'post',
    data: param
  });
}

function uploadImg(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/uploadImg',
    method: 'post',
    data: param
  });
}

// 根据docId获取图片
function attachList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/attachList',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "Igig":
/*!********************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/imageList.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./imageList.vue?vue&type=style&index=0&lang=scss& */ "ZdkR");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "KkZX":
/*!***********************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/imageList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./imageList.vue?vue&type=script&lang=js& */ "wndw");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "PREu":
/*!***********************************************!*\
  !*** ./src/api/project/pmReportsSituation.js ***!
  \***********************************************/
/*! exports provided: deleteFun, get, list, save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFun", function() { return deleteFun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


// 删除单条记录
function deleteFun(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/pmReportsSituation/delete',
    method: 'post',
    data: param
  });
}

// 详情
function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/pmReportsSituation/get',
    method: 'post',
    data: param
  });
}
// 列表
function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/pmReportsSituation/list',
    method: 'post',
    data: param
  });
}

// 保存
function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/pmReportsSituation/save',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "V9ez":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/imageList.vue?vue&type=template&id=c128a3c4& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"imageListWrapper flex-wrap"},_vm._l((_vm.fileList),function(item,index){return _c('div',{key:index,staticClass:"imgWapper"},[_c('el-image',{ref:"elImageRef",refInFor:true,attrs:{"src":item.url,"preview-src-list":[item.url]},nativeOn:{"dblclick":function($event){return _vm.closeViewer($event)}}}),_vm._v(" "),_c('div',{staticClass:"imgTitle text-overflow text-center",attrs:{"title":item.name}},[_c('br'),_vm._v("\n      "+_vm._s(item.name)+"\n    ")])],1)}),0)}
var staticRenderFns = []



/***/ }),

/***/ "ZOCp":
/*!****************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/dailyReportDailog.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dailyReportDailog.vue?vue&type=style&index=0&lang=scss& */ "oqGI");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyReportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ZdkR":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/imageList.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aEv4":
/*!******************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/dailyReportDailog.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dailyReportDailog_vue_vue_type_template_id_38615b6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyReportDailog.vue?vue&type=template&id=38615b6c& */ "4Y9A");
/* harmony import */ var _dailyReportDailog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyReportDailog.vue?vue&type=script&lang=js& */ "1aSM");
/* empty/unused harmony star reexport *//* harmony import */ var _dailyReportDailog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dailyReportDailog.vue?vue&type=style&index=0&lang=scss& */ "ZOCp");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dailyReportDailog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dailyReportDailog_vue_vue_type_template_id_38615b6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dailyReportDailog_vue_vue_type_template_id_38615b6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "dailyReportDailog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f0cY":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/dailyReportDailog.vue?vue&type=template&id=38615b6c& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isShow)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"dailyReportDailog",attrs:{"title":_vm.title,"visible":_vm.isShow,"before-close":_vm.closeFun,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.isShow=$event}}},[_c('div',[_c('div',{staticClass:"headTitle flex-middle flex-center"},[_vm._v(_vm._s(_vm.projectInfo.name))]),_vm._v(" "),_c('div',{staticClass:"subTitle flex-middle flex-center"},[(_vm.isEdit)?[_c('div',{staticClass:"flex-middle flex-center selectWrapper"},[_c('el-select',{attrs:{"placeholder":"请选择标段","clearable":false},on:{"change":_vm.changeTender},model:{value:(_vm.baseInfo.tendersId),callback:function ($$v) {_vm.$set(_vm.baseInfo, "tendersId", $$v)},expression:"baseInfo.tendersId"}},_vm._l((_vm.bidOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v("\n          "+_vm._s(_vm.baseInfo.title)+"\n        ")]:_c('div',[_vm._v(_vm._s(_vm.baseInfo.name))])],2),_vm._v(" "),(!_vm.isEdit)?_c('div',{staticClass:"codeDiv flex-middle flex-center"},[_c('label',[_vm._v("编号：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.baseInfo.code))])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"baseInfoDiv flex flex-middle flex-space-between"},[_c('div',{staticClass:"flex flex flex-middle"},[_c('span',[_vm._v("值班调度：")]),_vm._v(" "),(_vm.isEdit)?_c('div',{staticClass:"inputWrapper flex flex-middle"},[_c('el-input',{attrs:{"placeholder":"请输入值班调度"},model:{value:(_vm.baseInfo.routineDispatching),callback:function ($$v) {_vm.$set(_vm.baseInfo, "routineDispatching", $$v)},expression:"baseInfo.routineDispatching"}})],1):_c('div',{staticClass:"flex flex-middle"},[_vm._v(_vm._s(_vm.baseInfo.routineDispatching))])]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.baseInfo.deployDate))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.baseInfo.day))]),_vm._v(" "),_c('div',[_vm._v("天气:"+_vm._s(_vm.baseInfo.weather))]),_vm._v(" "),_c('div',[_vm._v("温度："+_vm._s(_vm.baseInfo.temperature)+"°C")]),_vm._v(" "),_c('div',{staticClass:"flex workDays flex-middle"},[_c('div',[_vm._v("安全生产")]),_vm._v(" "),(_vm.isEdit)?_c('el-input',{attrs:{"placeholder":"请输入天数","type":"number"},model:{value:(_vm.baseInfo.workDays),callback:function ($$v) {_vm.$set(_vm.baseInfo, "workDays", $$v)},expression:"baseInfo.workDays"}}):_c('span',[_vm._v(_vm._s(_vm.baseInfo.workDays))]),_vm._v(" "),_c('div',[_vm._v("天")])],1)]),_vm._v(" "),_c('div',{staticClass:"imageTypeCard card"},[_c('div',{staticClass:"cardTitle"},[_vm._v("一、形象进度情况")]),_vm._v(" "),_c('div',{staticClass:"cardBody"},[_c('div',{staticClass:"flex flex-space-between flex-middle"},[_c('div',{staticClass:"cardSubTitle"},[_vm._v("1、工程量完成情况")]),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"刷新","placement":"top","effect":"dark"}},[(_vm.isEdit)?_c('span',{staticClass:"iconfont iconshuaxin1 color-blue pointer",on:{"click":_vm.queryFigureScheduleData}}):_vm._e()])],1),_vm._v(" "),_c('figureTypeList',{ref:"figureTypeListRef",attrs:{"report-type":_vm.info.reportType}}),_vm._v(" "),_c('div',{staticClass:"remarkWrapper"},[_c('div',{staticClass:"cardSubTitle"},[_vm._v("未完成原因及拟采取措施")]),_vm._v(" "),(_vm.isEdit)?_c('div',[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入内容"},model:{value:(_vm.baseInfo.remark),callback:function ($$v) {_vm.$set(_vm.baseInfo, "remark", $$v)},expression:"baseInfo.remark"}})],1):[_c('div',{staticClass:"textarea"},[_vm._v(_vm._s(_vm.baseInfo.remark? _vm.baseInfo.remark:"无"))])]],2)],1),_vm._v(" "),(_vm.investmentCompletionShow)?_c('div',{staticClass:"cardBody"},[_c('div',{staticClass:"flex flex-space-between flex-middle"},[_c('div',{staticClass:"cardSubTitle"},[_vm._v("2、投资完成情况")]),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"刷新","placement":"top","effect":"dark"}},[(_vm.isEdit)?_c('span',{staticClass:"iconfont iconshuaxin1 color-blue pointer",on:{"click":_vm.queryInvestmentCompletion}}):_vm._e()])],1),_vm._v(" "),_c('div',[_c('investmentCompletion',{ref:"investmentCompletionRef",attrs:{"report-type":_vm.info.reportType}})],1)]):_vm._e()]),_vm._v(" "),_vm._l((_vm.reportList),function(item,index){return _c('div',{key:index,staticClass:"card"},[(!item.leaf)?_c('div',{staticClass:"cardTitle"},[_vm._v(_vm._s(item.name))]):_vm._e(),_vm._v(" "),(item.leaf && item.list && item.list[0])?_c('div',_vm._l((item.list),function(listItem,listItemIndex){return _c('div',{key:(index + "_" + listItemIndex)},[_c('div',{staticClass:"cardItemHead relative flex-middle"},[(listItemIndex === 0)?_c('div',{staticClass:"cardTitle"},[_vm._v(_vm._s(item.name))]):_vm._e(),_vm._v(" "),(_vm.isEdit)?_c('div',{staticClass:"btns flex-middle flex-end"},[_c('div',[_c('span',{staticClass:"el-icon-plus",attrs:{"type":"primary"},on:{"click":function($event){return _vm.addImgAndContent(item.list,listItemIndex)}}}),_vm._v(" "),( item.list && (item.list.length > 1))?_c('span',{staticClass:"el-icon-delete",attrs:{"type":"danger"},on:{"click":function($event){return _vm.deleteImgAndContent(item.list,listItemIndex)}}}):_vm._e()])]):_vm._e(),_vm._v(" "),(_vm.isEdit)?_c('div',{staticClass:"uploadWrapper",on:{"click":function($event){return _vm.uploadFun((index + "_" + listItemIndex + "Ref"))}}},[_c('el-tooltip',{attrs:{"effect":"dark","content":"图片上传","placement":"top"}},[_c('span',{staticClass:"el-icon-upload2"})]),_vm._v(" "),_c('upload',{ref:(index + "_" + listItemIndex + "Ref"),refInFor:true,staticClass:"upload",on:{"input":_vm.refreshImgList},model:{value:(listItem.docId),callback:function ($$v) {_vm.$set(listItem, "docId", $$v)},expression:"listItem.docId"}})],1):_vm._e()]),_vm._v(" "),_c('div',[(_vm.isEdit)?_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入内容"},model:{value:(listItem.content),callback:function ($$v) {_vm.$set(listItem, "content", $$v)},expression:"listItem.content"}}):[_c('div',{staticClass:"textarea"},[_vm._v(_vm._s(listItem.content? listItem.content:"无"))])],_vm._v(" "),(listItem.docId && _vm.showImageList)?_c('imageList',{attrs:{"doc-id":listItem.docId}}):_vm._e()],2)])}),0):_vm._e(),_vm._v(" "),_vm._l((item.children),function(innerItemList,innerListIndex){return _c('div',{key:index+'_'+innerListIndex,staticClass:"cardBody"},_vm._l((innerItemList.list),function(innerItem,innerIndex){return _c('div',{key:(index + "_" + innerListIndex + "_" + innerIndex)},[[_c('div',{staticClass:"cardItemHead flex-middle relative"},[(innerIndex === 0)?_c('div',{staticClass:"cardSubTitle"},[_vm._v(_vm._s(innerItemList.name))]):_vm._e(),_vm._v(" "),(_vm.isEdit)?_c('div',{staticClass:"btns flex-middle flex-end"},[_c('div',[_c('span',{staticClass:"el-icon-plus",attrs:{"type":"primary"},on:{"click":function($event){return _vm.addImgAndContent(innerItemList.list,innerIndex)}}}),_vm._v(" "),(innerItemList.list.length > 1)?_c('span',{staticClass:"el-icon-delete",attrs:{"type":"danger"},on:{"click":function($event){return _vm.deleteImgAndContent(innerItemList.list,innerIndex)}}}):_vm._e()])]):_vm._e(),_vm._v(" "),(_vm.isEdit)?_c('div',{staticClass:"uploadWrapper",on:{"click":function($event){return _vm.uploadFun((index + "_" + innerListIndex + "_" + innerIndex + "Ref"))}}},[_c('el-tooltip',{attrs:{"effect":"dark","content":"图片上传","placement":"top"}},[_c('span',{staticClass:"el-icon-upload2"})]),_vm._v(" "),_c('upload',{ref:(index + "_" + innerListIndex + "_" + innerIndex + "Ref"),refInFor:true,staticClass:"upload",on:{"input":_vm.refreshImgList},model:{value:(innerItem.docId),callback:function ($$v) {_vm.$set(innerItem, "docId", $$v)},expression:"innerItem.docId"}})],1):_vm._e()])],_vm._v(" "),_c('div',[(_vm.isEdit)?_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入内容"},model:{value:(innerItem.content),callback:function ($$v) {_vm.$set(innerItem, "content", $$v)},expression:"innerItem.content"}}):[_c('div',{staticClass:"textarea"},[_vm._v(_vm._s(innerItem.content? innerItem.content: "无"))])],_vm._v(" "),(innerItem.docId && _vm.showImageList)?_c('imageList',{attrs:{"doc-id":innerItem.docId}}):_vm._e()],2)],2)}),0)})],2)})],2),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.closeFun}},[_vm._v("取消")]),_vm._v(" "),(_vm.showApprovalBtns())?[_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:(_vm.privilege.noPass),expression:"privilege.noPass"},{name:"waves",rawName:"v-waves"}],attrs:{"type":"danger"},on:{"click":_vm.noPassFun}},[_vm._v("驳回")]),_vm._v(" "),_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:(_vm.privilege.pass),expression:"privilege.pass"},{name:"waves",rawName:"v-waves"}],attrs:{"type":"success"},on:{"click":_vm.passFun}},[_vm._v("通过")])]:_vm._e(),_vm._v(" "),(_vm.isEdit)?[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.saveLoading},on:{"click":function($event){return _vm.judgeScheduleReport(3)}}},[_vm._v("保存")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"success","loading":_vm.submitLoading},on:{"click":function($event){return _vm.judgeScheduleReport(0)}}},[_vm._v("提交")])]:_vm._e()],2)]):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "mdXi":
/*!**********************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/imageList.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imageList_vue_vue_type_template_id_c128a3c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageList.vue?vue&type=template&id=c128a3c4& */ "mjBL");
/* harmony import */ var _imageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageList.vue?vue&type=script&lang=js& */ "KkZX");
/* empty/unused harmony star reexport *//* harmony import */ var _imageList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageList.vue?vue&type=style&index=0&lang=scss& */ "Igig");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _imageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _imageList_vue_vue_type_template_id_c128a3c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _imageList_vue_vue_type_template_id_c128a3c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "imageList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "mjBL":
/*!*****************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/imageList.vue?vue&type=template&id=c128a3c4& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_template_id_c128a3c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./imageList.vue?vue&type=template&id=c128a3c4& */ "V9ez");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_template_id_c128a3c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageList_vue_vue_type_template_id_c128a3c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "oqGI":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/dailyReportDailog.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "q5Do":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/dailyReportDailog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "JO7F");
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/set */ "jWXv");
/* harmony import */ var babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/array/from */ "rfXi");
/* harmony import */ var babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _api_project_project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/project/project.js */ "T+6t");
/* harmony import */ var _api_project_disReports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/project/disReports */ "4hX1");
/* harmony import */ var _api_project_pmReportsSituation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/project/pmReportsSituation */ "PREu");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _imageList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imageList */ "mdXi");
/* harmony import */ var _figureTypeList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./figureTypeList */ "P70z");
/* harmony import */ var _components_customerForm_Upload_index_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/customerForm/Upload/index.vue */ "xvje");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");
/* harmony import */ var _investmentCompletion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./investmentCompletion */ "GRGe");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _decorator_loading_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/decorator/loading.js */ "DdcY");





var _dec, _desc, _value, _obj;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

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
  directives: {
    buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_12__["default"],
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  components: {
    tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    upload: _components_customerForm_Upload_index_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    imageList: _imageList__WEBPACK_IMPORTED_MODULE_9__["default"],
    figureTypeList: _figureTypeList__WEBPACK_IMPORTED_MODULE_10__["default"],
    investmentCompletion: _investmentCompletion__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  props: {
    title: {
      type: String,
      default: '日报编辑'
    },
    dateProp: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    status: {
      type: String,
      default: 'ADD'
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
      list: [],
      originalList: [], // 保存从接口拿到的数据
      reportList: [],
      listLoading: false,
      loading: false,
      projectInfo: {},
      baseInfo: {},
      bidOptions: [],
      scheduleDataList: [],
      situationDataMap: {},
      situationDataList: [],
      showImageList: true, // 处理imageList 更新列表的处理
      privilege: {
        pass: 'P_xmgcxx_gcrb_sp',
        noPass: 'P_xmgcxx_gcrb_sp'
      },
      // 显示投资统计表
      investmentCompletionShow: false,
      saveLoading: false,
      submitLoading: false
    };
  },

  computed: {
    isEdit: function isEdit() {
      var noEditArr = ['VIEW', 'CHECK'];
      return !noEditArr.includes(this.status);
    }
  },
  watch: {
    dateProp: function dateProp(val) {
      this.date = this.dateProp;
    }
  },
  created: function created() {
    this.date = this.dateProp;
    this.baseInfo.title = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getNameByCode"])(this.info.reportType, 'report_type');
    // 如果当前为新增状态的处理
    this.addInitFun();
  },
  mounted: function mounted() {
    // 如果当前为修改状态的处理
    // 如果当前为查看状态的处理
    this.editOrViewFun();
    // 设置投资统计
    this.setInvestmentCompletionShow();
  },

  methods: (_dec = Object(_decorator_loading_js__WEBPACK_IMPORTED_MODULE_15__["loading"])(function (context, status) {
    if (status === 0) {
      //  当为0提交
      return 'submitLoading';
    } else if (status === 3) {
      //  当为3保存
      return 'saveLoading';
    }
  }), (_obj = {
    setInvestmentCompletionShow: function setInvestmentCompletionShow() {
      var codes = ['day_report'];
      if (codes.includes(this.info.reportType)) {
        // 日报时
        this.investmentCompletionShow = false;
      } else {
        this.investmentCompletionShow = true;
      }
    },

    // 判断是否显示审批图标
    showApprovalBtns: function showApprovalBtns() {
      // 当为审核页面 并且 该条记录的状态为 待审批
      return this.status === 'CHECK' && (this.info.status === undefined || this.info.status === '0');
    },
    addInitFun: function addInitFun() {
      var _this = this;

      if (this.status !== 'ADD') return;
      this.getProjectInfo(this.date);
      this.pmReportsList();
      this.getBidOptions().then(function (res) {
        if (_this.bidOptions[0]) {
          if (_this.info.tendersId) {
            // 存在传入的标段时
            _this.baseInfo.tendersId = _this.info.tendersId;
          } else {
            _this.baseInfo.tendersId = _this.bidOptions[0].id;
          }

          // 形象进度类型
          _this.$refs['figureTypeListRef'] && _this.$refs['figureTypeListRef'].queryFigureScheduleData({
            recordDate: _this.date,
            reportType: _this.info.reportType,
            tendersId: _this.baseInfo.tendersId
          });
          // 查询投资列表
          _this.$refs['investmentCompletionRef'] && _this.$refs['investmentCompletionRef'].getList({
            recordDate: _this.date,
            reportType: _this.info.reportType,
            tendersId: _this.baseInfo.tendersId
          });

          // 查询天气
          _this.queryDayWeather();
        }
      });
    },

    // 查询形象进度类型
    queryFigureScheduleData: function queryFigureScheduleData() {
      var _this2 = this;

      this.$refs['figureTypeListRef'].queryFigureScheduleData({
        recordDate: this.date,
        reportType: this.info.reportType,
        tendersId: this.baseInfo.tendersId
      }).then(function (res) {
        _this2.$message({
          type: 'success',
          message: '列表刷新成功'
        });
      });
    },

    // 查询投资列表
    queryInvestmentCompletion: function queryInvestmentCompletion() {
      var _this3 = this;

      this.$refs['investmentCompletionRef'].getList({
        recordDate: this.date,
        tendersId: this.baseInfo.tendersId,
        reportType: this.info.reportType
      }).then(function (res) {
        _this3.$message({
          type: 'success',
          message: '列表刷新成功'
        });
      });
    },
    editOrViewFun: function editOrViewFun() {
      var _this4 = this;

      if (this.status === 'ADD') return;
      // 处理基本信息相关
      this.getProjectInfo(this.info.deployDate);
      this.getBidOptions().then(function (res) {
        _this4.baseInfo = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, _this4.info, _this4.baseInfo);
      });

      this.$nextTick(function () {
        // 处理形象进度列表
        if (_this4.$refs['figureTypeListRef']) {
          _this4.list = _this4.$refs['figureTypeListRef'].setList(_this4.info.scheduleDataList);
        }

        // 处理投资计划列表
        if (_this4.$refs['investmentCompletionRef']) {
          _this4.$refs['investmentCompletionRef'].setList(_this4.info.disInvestDataList);
        }
      });

      // 处理相关问题列表
      var tpList = this.composeList(this.info.disSituationDataList);
      this.reportList = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["treeListUtil"])(tpList);
    },
    getProjectInfo: function getProjectInfo(date) {
      this.projectInfo = JSON.parse(this.$storage.getStorage('project'));
      this.date = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(new Date(date), '{y}-{m}-{d}');
      this.baseInfo.deployDate = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(new Date(date), '{y}年{m}月{d}日');
      this.baseInfo.day = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(new Date(date), '星期{a}'); // 拿到星期
    },
    getBidOptions: function getBidOptions() {
      var _this5 = this;

      return Object(_api_project_project_js__WEBPACK_IMPORTED_MODULE_5__["projectUserTenders"])({}).then(function (res) {
        if (res.success) {
          _this5.bidOptions = res.result;
        }
      });
    },

    // 将树中相关填写的内容取出  通过递归
    dealSituationDataList: function dealSituationDataList(treeList) {
      var list = [];

      // 将树扁平化
      var traversal = function traversal(node) {
        list.push(node);
        if (node.children && node.children.length > 0) {
          for (var i = 0; i < node.children.length; i++) {
            traversal(node.children[i]);
          }
        }
      };

      // 将每条记录的list 属性再次展开成一条单独的记录
      var expendList = function expendList(list) {
        var result = [];
        list.forEach(function (item) {
          if (item.list && item.list[0]) {
            item.list.forEach(function (innerItem) {
              // 删除item.list
              delete item.list;
              result.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, item, innerItem));
            });
          }
        });

        return result;
      };

      traversal({
        children: treeList
      });
      // 删除所有的节点的children并返回
      list = list.filter(function (item) {
        if (item.children) delete item.children;
        return item.id;
      });
      list = expendList(list);
      return list;
    },
    getTendersName: function getTendersName(id) {
      var find = this.bidOptions.find(function (item) {
        return item.id === id;
      });
      return find.name;
    },
    uploadFun: function uploadFun(prefix) {},
    refreshImgList: function refreshImgList() {
      var _this6 = this;

      this.showImageList = false;
      this.$nextTick(function () {
        _this6.showImageList = true;
      });
    },
    judgeScheduleReport: function judgeScheduleReport(status) {
      var _this7 = this;

      Object(_api_project_disReports__WEBPACK_IMPORTED_MODULE_6__["judgeScheduleReport"])({
        tendersId: this.baseInfo.tendersId,
        recordDate: this.baseInfo.deployDate,
        reportType: this.baseInfo.reportType
      }).then(function (res) {
        if (res.success) {
          if (!res.result) {
            _this7.$confirm('当日进度为空，是否确认生成当日日报？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(function () {
              _this7.saveFun(status);
            }).catch(function () {
              _this7.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          } else {
            _this7.saveFun(status);
          }
        }
      });
    },
    saveFun: function saveFun(status) {
      var _this8 = this;

      this.baseInfo.reportType = this.info.reportType;
      this.baseInfo.tendersName = this.getTendersName(this.baseInfo.tendersId);
      this.baseInfo.name = this.baseInfo.tendersName + this.baseInfo.title; // 处理名称
      this.situationDataList = this.dealSituationDataList(this.reportList);
      return Object(_api_project_disReports__WEBPACK_IMPORTED_MODULE_6__["save"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, this.baseInfo, {
        situationDataList: this.situationDataList,
        scheduleDataList: this.$refs['figureTypeListRef'] ? this.$refs['figureTypeListRef'].list : [],
        status: status,
        disInvestDataList: this.$refs['investmentCompletionRef'] ? this.$refs['investmentCompletionRef'].list : []
      })).then(function (res) {
        if (res.success) {
          _this8.$message({
            type: 'success',
            message: '保存成功'
          });
          _this8.closeFun({ fresh: true, tendersId: _this8.baseInfo.tendersId });
        }
      });
    },
    changeTender: function changeTender() {
      var _this9 = this;

      // 更改标段选项时触发形象进度列表查询
      this.$nextTick(function () {
        _this9.$refs['figureTypeListRef'] && _this9.$refs['figureTypeListRef'].queryFigureScheduleData({
          recordDate: _this9.date,
          tendersId: _this9.baseInfo.tendersId
        });
        // 查询投资列表
        _this9.$refs['investmentCompletionRef'] && _this9.$refs['investmentCompletionRef'].getList({
          recordDate: _this9.date,
          tendersId: _this9.baseInfo.tendersId
        });
      });
    },

    // 查询天气
    queryDayWeather: function queryDayWeather() {
      var _this10 = this;

      Object(_api_project_disReports__WEBPACK_IMPORTED_MODULE_6__["queryDayWeather"])({
        recordDate: this.date,
        reportType: this.info.reportType,
        tendersId: this.baseInfo.tendersId
      }).then(function (res) {
        if (res.success) {
          _this10.baseInfo = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, _this10.baseInfo, res.result);
        }
      });
    },


    // 为每一项目添加一个list属性 类型为数组 数据结构为 [{content,docId}]
    composeList: function composeList(list) {
      list = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["deepCloneArray"])(list);
      // 拿到列表中的所有的id集合  此处需要注意为新增时没有pmReportsSituationId 此时 可以使用id代替  因为id是唯一的 没有pmReportsSituationId说明没有保存项
      var ids = babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(new babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a(list.map(function (item) {
        return item.pmReportsSituationId ? item.pmReportsSituationId : item.id;
      })));
      // 构建基本的映射的关系
      var result = [];
      ids.forEach(function (id) {
        var filters = list.filter(function (item) {
          if (item.pmReportsSituationId) {
            return item.pmReportsSituationId === id;
          } else {
            return item.id === id;
          }
        });
        var tpList = filters.map(function (item) {
          return { content: item.content, docId: item.docId ? item.docId : '' };
        });
        var body = filters[0];
        delete body.content;
        delete body.docId;
        result.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, body, {
          list: tpList
        }));
      });
      return result;
    },

    // 获取填写目录
    pmReportsList: function pmReportsList() {
      var _this11 = this;

      Object(_api_project_pmReportsSituation__WEBPACK_IMPORTED_MODULE_7__["list"])({ reportType: this.info.reportType }).then(function (res) {
        if (res.success) {
          // 将结果处理为树
          _this11.originalList = res.result.map(function (item) {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({ content: '', docId: '' }, item);
          }); // 没有一个content属性的话  上面的双向绑定将不会起到效果的
          // 为每一项目添加一个list属性 类型为数组 数据结构为 [{content,docId}]
          var tpList = _this11.composeList(_this11.originalList);
          _this11.reportList = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["treeListUtil"])(tpList); // 渲染问题列表需要树状结构
        }
      });
    },
    passFun: function passFun() {
      var _this12 = this;

      // 通过
      var id = this.baseInfo.id;
      Object(_api_project_disReports__WEBPACK_IMPORTED_MODULE_6__["approveReport"])({ id: id, status: 1 }).then(function (res) {
        if (res.success) {
          _this12.$message({
            type: 'success',
            message: '审核通过成功'
          });
          _this12.closeFun({ fresh: true, tendersId: _this12.baseInfo.tendersId });
        }
      });
    },
    noPassFun: function noPassFun(val) {
      var _this13 = this;

      // 驳回
      var id = this.baseInfo.id;
      Object(_api_project_disReports__WEBPACK_IMPORTED_MODULE_6__["approveReport"])({ id: id, status: '2' }).then(function (res) {
        if (res.success) {
          _this13.$message({
            type: 'success',
            message: '驳回成功'
          });
          _this13.closeFun({ fresh: true, tendersId: _this13.baseInfo.tendersId });
        }
      });
    },
    closeFun: function closeFun(info) {
      this.$emit('update:isShow', false);
      this.$emit('closeFun', info);
    },


    // 添加图文列表
    addImgAndContent: function addImgAndContent(list, index) {
      list.splice(index + 1, 0, { content: '', docId: '' });
    },


    // 删除图文列表项
    deleteImgAndContent: function deleteImgAndContent(list, index) {
      this.$confirm('是否确定删除该记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        list.splice(index, 1);
      });
    }
  }, (_applyDecoratedDescriptor(_obj, 'saveFun', [_dec], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_obj, 'saveFun'), _obj)), _obj))
});

/***/ }),

/***/ "wndw":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/imageList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/doc */ "5HWN");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "L2JU");

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
  props: {
    title: {
      type: String,
      default: '图片列表'
    },
    docId: {
      type: Number | String,
      default: ''
    },
    width: {
      type: Number | String,
      default: 150
    },
    height: {
      type: Number | String,
      default: 150
    }
  },

  data: function data() {
    return {
      fileList: []
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['fileUrl'])),
  watch: {
    docId: function docId() {
      this.getImageList();
    }
  },

  mounted: function mounted() {
    this.getImageList();
  },

  methods: {
    // 双击关闭弹框
    closeViewer: function closeViewer() {
      this.$refs.elImageRef.forEach(function (elImage) {
        elImage.closeViewer();
      });
    },
    getImageList: function getImageList() {
      var _this = this;

      Object(_api_doc__WEBPACK_IMPORTED_MODULE_1__["getPicture"])({ docId: this.docId }).then(function (response) {
        if (response.success) {
          for (var i = 0; i < response.result.length; i++) {
            var nameArr = response.result[i].originalFileName.split('.');
            nameArr.pop();
            var name = nameArr.join('.');
            _this.fileList.push({
              url: _this.isFile ? _this.fileUrl + 'doc/' + response.result[i].fileName : _this.fileUrl + 'img/' + response.result[i].fileName,
              // url: this.fileUrl + 'doc/' + response.result[i].fileName,
              id: response.result[i].id,
              name: name
            });
          }
        }
      });
    }
  }
});

/***/ })

}]);