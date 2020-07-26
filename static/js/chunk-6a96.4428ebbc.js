(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-6a96"],{

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

/***/ "9IqD":
/*!******************************!*\
  !*** ./src/api/flowchart.js ***!
  \******************************/
/*! exports provided: getExpressionMap, save, list, deleteOpe, processExpressionList, processTypeList, processTypeSave, placeModuleList, placeModuleSave, deleteProcessType, deletePlaceModule, getExpressionList, getprocessTemplateList, getProcessTemplate, getOrgDutyTreeData, getTaskNodeList, getUserOrgDuty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpressionMap", function() { return getExpressionMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOpe", function() { return deleteOpe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processExpressionList", function() { return processExpressionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processTypeList", function() { return processTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processTypeSave", function() { return processTypeSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeModuleList", function() { return placeModuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeModuleSave", function() { return placeModuleSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProcessType", function() { return deleteProcessType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePlaceModule", function() { return deletePlaceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpressionList", function() { return getExpressionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getprocessTemplateList", function() { return getprocessTemplateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessTemplate", function() { return getProcessTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrgDutyTreeData", function() { return getOrgDutyTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskNodeList", function() { return getTaskNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserOrgDuty", function() { return getUserOrgDuty; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getExpressionMap(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/getExpressionMap',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processTemplate/save',
    method: 'post',
    data: param
  });
}

// 列表
function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/process/list',
    method: 'post',
    data: param
  });
}

// 删除
function deleteOpe(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/process/delete',
    method: 'post',
    data: param
  });
}

// 处理人表达式列表
function processExpressionList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/process/delete',
    method: 'post',
    data: param
  });
}

// 流程类型列表
function processTypeList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/list',
    method: 'post',
    data: param
  });
}
// 流程类型保存
function processTypeSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/save',
    method: 'post',
    data: param
  });
}

// 流程模块列表
function placeModuleList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/placeModuleList',
    method: 'post',
    data: param
  });
}

// 流程模块保存
function placeModuleSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/placeModuleSave',
    method: 'post',
    data: param
  });
}

// 流程类型删除
function deleteProcessType(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/delete',
    method: 'post',
    data: param
  });
}

// 流程模块删除
function deletePlaceModule(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/deletePlaceModule',
    method: 'post',
    data: param
  });
}

// 表达式列表
function getExpressionList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/list',
    method: 'post',
    data: param
  });
}

function getprocessTemplateList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processTemplate/list',
    method: 'post',
    data: param
  });
}

// 根据流程类型获取流程图

function getProcessTemplate(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/getProcessTemplate',
    method: 'post',
    data: param
  });
}

// 组织职责树
function getOrgDutyTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/orgDutyTreeData',
    method: 'post',
    data: param
  });
}

// 获取节点
function getTaskNodeList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processTemplate/taskNodeList',
    method: 'post',
    data: param
  });
}

// 系统组织职责列表
function getUserOrgDuty(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/userOrgDuty',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "9fqm":
/*!****************************************************!*\
  !*** ./src/components/customerForm/FormConfig.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormConfig_vue_vue_type_template_id_203a9b74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormConfig.vue?vue&type=template&id=203a9b74& */ "KhHJ");
/* harmony import */ var _FormConfig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormConfig.vue?vue&type=script&lang=js& */ "c+UG");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormConfig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormConfig_vue_vue_type_template_id_203a9b74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormConfig_vue_vue_type_template_id_203a9b74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "FormConfig.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "FYHI":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/FormConfig.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
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
    data: {
      type: Object,
      default: function _default() {}
    }
  }
});

/***/ }),

/***/ "H12S":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/FormConfig.vue?vue&type=template&id=203a9b74& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-config-container"},[_c('el-form',{attrs:{"label-position":"top"}},[_c('el-form-item',{attrs:{"label":"标签对齐方式"}},[_c('el-radio-group',{model:{value:(_vm.data.labelPosition),callback:function ($$v) {_vm.$set(_vm.data, "labelPosition", $$v)},expression:"data.labelPosition"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左对齐")]),_vm._v(" "),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右对齐")]),_vm._v(" "),_c('el-radio-button',{attrs:{"label":"top"}},[_vm._v("顶部对齐")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"表单字段宽度"}},[_c('el-input-number',{attrs:{"min":0,"max":200,"step":10},model:{value:(_vm.data.labelWidth),callback:function ($$v) {_vm.$set(_vm.data, "labelWidth", $$v)},expression:"data.labelWidth"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组件尺寸"}},[_c('el-radio-group',{model:{value:(_vm.data.size),callback:function ($$v) {_vm.$set(_vm.data, "size", $$v)},expression:"data.size"}},[_c('el-radio-button',{attrs:{"label":"medium"}},[_vm._v("大")]),_vm._v(" "),_c('el-radio-button',{attrs:{"label":"small"}},[_vm._v("中")]),_vm._v(" "),_c('el-radio-button',{attrs:{"label":"mini"}},[_vm._v("小")])],1)],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "KhHJ":
/*!***********************************************************************************!*\
  !*** ./src/components/customerForm/FormConfig.vue?vue&type=template&id=203a9b74& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormConfig_vue_vue_type_template_id_203a9b74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormConfig.vue?vue&type=template&id=203a9b74& */ "H12S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormConfig_vue_vue_type_template_id_203a9b74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormConfig_vue_vue_type_template_id_203a9b74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "O6k2":
/*!****************************************************************************!*\
  !*** ./src/components/customerForm/CusDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./CusDialog.vue?vue&type=script&lang=js& */ "tjbC");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "StKV":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/CusDialog.vue?vue&type=template&id=4cc64a35& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],ref:"elDialog",staticClass:"cus-dialog-container",attrs:{"title":_vm.title,"visible":_vm.dialogVisible,"close-on-click-modal":false,"append-to-body":"","width":_vm.width,"id":_vm.id},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[(_vm.show)?_c('span',[_vm._t("default")],2):_vm._e(),_vm._v(" "),(_vm.action)?_c('span',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"dialog-footer",attrs:{"slot":"footer","element-loading-text":_vm.loadingText},slot:"footer"},[_vm._t("action",[_c('el-button',{on:{"click":_vm.close}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("确 定")])])],2):_vm._e()])}
var staticRenderFns = []



/***/ }),

/***/ "UdmY":
/*!*************************************************************************************!*\
  !*** ./src/components/customerForm/CusDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./CusDialog.vue?vue&type=style&index=0&lang=scss& */ "fPi1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a7Fm":
/*!***************************************************!*\
  !*** ./src/components/customerForm/CusDialog.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CusDialog_vue_vue_type_template_id_4cc64a35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CusDialog.vue?vue&type=template&id=4cc64a35& */ "y93o");
/* harmony import */ var _CusDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CusDialog.vue?vue&type=script&lang=js& */ "O6k2");
/* empty/unused harmony star reexport *//* harmony import */ var _CusDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CusDialog.vue?vue&type=style&index=0&lang=scss& */ "UdmY");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CusDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CusDialog_vue_vue_type_template_id_4cc64a35___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CusDialog_vue_vue_type_template_id_4cc64a35___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "CusDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c+UG":
/*!*****************************************************************************!*\
  !*** ./src/components/customerForm/FormConfig.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_FormConfig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./FormConfig.vue?vue&type=script&lang=js& */ "FYHI");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_FormConfig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "fPi1":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/CusDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "kC2G":
/*!*********************************!*\
  !*** ./src/api/formTemplate.js ***!
  \*********************************/
/*! exports provided: list, deleteApi, get, save, formTemplateList, getFormTemplateMap, getFormTemplateChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteApi", function() { return deleteApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formTemplateList", function() { return formTemplateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormTemplateMap", function() { return getFormTemplateMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormTemplateChildren", function() { return getFormTemplateChildren; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/list',
    method: 'post',
    data: param
  });
}

function deleteApi(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/delete',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/get',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/save',
    method: 'post',
    data: param
  });
}

// 查询与流程挂钩的表单列表
function formTemplateList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/formTemplateList',
    method: 'post',
    data: param
  });
}

// 表单类型 流程名称
function getFormTemplateMap(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/getFormTemplateMap',
    method: 'post',
    data: param
  });
}

// 获取子表单
function getFormTemplateChildren(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/getFormTemplateChildren',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "mH49":
/*!*********************************************************!*\
  !*** ./src/components/customerForm/componentsConfig.js ***!
  \*********************************************************/
/*! exports provided: basicComponents, advanceComponents, layoutComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicComponents", function() { return basicComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advanceComponents", function() { return advanceComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutComponents", function() { return layoutComponents; });
var basicComponents = [{
  type: 'label',
  name: '标题',
  options: {
    class: 'customFormTitle'
  }
}, {
  type: 'input',
  name: '单行文本',
  options: {
    width: '100%',
    defaultValue: '',
    required: false,
    dataType: 'string',
    pattern: '',
    placeholder: ''
  }
}, {
  type: 'textarea',
  name: '多行文本',
  options: {
    width: '100%',
    defaultValue: '',
    required: false,
    disabled: false,
    pattern: '',
    placeholder: ''
  }
}, {
  type: 'number',
  name: '计数器',
  options: {
    width: '',
    required: false,
    defaultValue: 0,
    min: '',
    max: '',
    step: 1,
    disabled: false,
    controlsPosition: ''
  }
}, {
  type: 'radio',
  name: '单选框组',
  options: {
    inline: false,
    defaultValue: '',
    showLabel: false,
    options: [{
      value: '选项1',
      label: '选项1'
    }, {
      value: '选项2',
      label: '选项2'
    }, {
      value: '选项3',
      label: '选项3'
    }],
    required: false,
    width: '',
    remote: false,
    remoteOptions: [],
    props: {
      value: 'value',
      label: 'label'
    },
    remoteFunc: ''
  }
}, {
  type: 'checkbox',
  name: '多选框组',
  options: {
    inline: false,
    defaultValue: [],
    showLabel: false,
    options: [{
      value: '选项1',
      label: '选项1'
    }, {
      value: '选项2',
      label: '选项2'
    }, {
      value: '选项3',
      label: '选项3'
    }],
    required: false,
    width: '',
    remote: false,
    remoteOptions: [],
    props: {
      value: 'value',
      label: 'label'
    },
    remoteFunc: ''
  }
}, {
  type: 'time',
  name: '时间选择器',
  options: {
    defaultValue: '21:19:56',
    readonly: false,
    disabled: false,
    editable: true,
    clearable: true,
    placeholder: '',
    startPlaceholder: '',
    endPlaceholder: '',
    isRange: false,
    arrowControl: true,
    format: 'HH:mm:ss',
    required: false,
    width: '100%'
  }
}, {
  type: 'date',
  name: '日期选择器',
  options: {
    defaultValue: '',
    readonly: false,
    disabled: false,
    editable: true,
    clearable: true,
    placeholder: '',
    startPlaceholder: '',
    endPlaceholder: '',
    type: 'date',
    format: 'yyyy-MM-dd',
    timestamp: false,
    required: false,
    width: '100%'
  }
}, {
  type: 'rate',
  name: '评分',
  options: {
    defaultValue: null,
    max: 5,
    disabled: false,
    allowHalf: false,
    required: false
  }
}, {
  type: 'color',
  name: '颜色选择器',
  options: {
    defaultValue: '',
    disabled: false,
    showAlpha: false,
    required: false
  }
}, {
  type: 'select',
  name: '下拉选择框',
  options: {
    defaultValue: '',
    multiple: false,
    disabled: false,
    clearable: false,
    placeholder: '',
    isRelated: false,
    required: false,
    showLabel: false,
    childKey: '',
    width: '100%',
    options: [{
      value: '选项1',
      label: '选项1'
    }, {
      value: '选项2',
      label: '选项2'
    }, {
      value: '选项3',
      label: '选项3'
    }],
    remote: false,
    filterable: false,
    dictionaryCode: '',
    remoteOptions: [],
    props: {
      value: '',
      label: ''
    },
    remoteFunc: ''
  }
}, {
  type: 'switch',
  name: '开关',
  options: {
    defaultValue: false,
    required: false,
    disabled: false
  }
}, {
  type: 'slider',
  name: '滑块',
  options: {
    defaultValue: 0,
    disabled: false,
    required: false,
    min: 0,
    max: 100,
    step: 1,
    showInput: false,
    range: false,
    width: ''
  }
}];

var advanceComponents = [{
  type: 'blank',
  name: '自定义',
  options: {
    defaultType: 'String'
  }
}, {
  type: 'imgupload',
  name: '附件',
  options: {
    length: 8,
    fileName: '',
    isFile: false,
    defaultValue: ''
  }
}, {
  type: 'editor',
  name: '富文本',
  options: {
    defaultValue: '',
    width: ''
  }
}, {
  type: 'treeSelect',
  name: '下拉树',
  options: {
    defaultValue: null,
    remote: true,
    placeholder: '',
    list: [],
    multiple: false,
    props: {
      id: '',
      name: '',
      children: ''
    },
    remoteFunc: ''
  }
}, {
  type: 'selectUser',
  name: '选择人员',
  options: {
    defaultValue: [],
    multiple: false
  }
  // {
  //   type: 'cascader',
  //   name: '级联选择器',
  //   icon: 'icon-jilianxuanze',
  //   options: {
  //     defaultValue: [],
  //     width: '',
  //     placeholder: '',
  //     disabled: false,
  //     clearable: false,
  //     remote: true,
  //     remoteOptions: [],
  //     props: {
  //       value: 'value',
  //       label: 'label',
  //       children: 'children'
  //     },
  //     remoteFunc: ''
  //   }
  // }
}];

var layoutComponents = [{
  type: 'grid',
  name: '栅格布局',
  icon: 'icon-grid-',
  columns: [{
    span: 12,
    list: []
  }, {
    span: 12,
    list: []
  }],
  options: {
    gutter: 0,
    justify: 'start',
    align: 'top'
  }
}];

/***/ }),

/***/ "qaDS":
/*!*****************************************************!*\
  !*** ./src/components/customerForm/generateCode.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function findRemoteFunc(list, funcList, tokenFuncList, blankList) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].type === 'grid') {
      list[i].columns.forEach(function (item) {
        findRemoteFunc(item.list, funcList, tokenFuncList, blankList);
      });
    } else {
      if (list[i].type === 'blank') {
        if (list[i].model) {
          blankList.push({
            name: list[i].model,
            label: list[i].name
          });
        }
      } else if (list[i].type === 'imgupload') {
        if (list[i].options.tokenFunc) {
          tokenFuncList.push({
            func: list[i].options.tokenFunc,
            label: list[i].name,
            model: list[i].model
          });
        }
      } else {
        if (list[i].options.remote && list[i].options.remoteFunc) {
          funcList.push({
            func: list[i].options.remoteFunc,
            label: list[i].name,
            model: list[i].model
          });
        }
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  var funcList = [];
  var tokenFuncList = [];
  var blankList = [];
  findRemoteFunc(JSON.parse(data).list, funcList, tokenFuncList, blankList);
  var funcTemplate = '';
  var blankTemplate = '';
  funcList.forEach(function (item) {
    funcTemplate += '\n            ' + item.func + ' (resolve) {\n              // ' + item.label + ' ' + item.model + '\n              // \u83B7\u53D6\u5230\u8FDC\u7AEF\u6570\u636E\u540E\u6267\u884C\u56DE\u8C03\u51FD\u6570\n              // resolve(data)\n            },';
  });
  tokenFuncList.forEach(function (item) {
    funcTemplate += '\n            ' + item.func + ' (resolve) {\n              // ' + item.label + ' ' + item.model + '\n              // \u83B7\u53D6\u5230token\u6570\u636E\u540E\u6267\u884C\u56DE\u8C03\u51FD\u6570\n              // resolve(token)\n            },\n    ';
  });
  blankList.forEach(function (item) {
    blankTemplate += '\n        <template slot="' + item.name + '" slot-scope="scope">\n          <!-- ' + item.label + ' -->\n          <!-- \u901A\u8FC7 v-model="scope.model.' + item.name + '" \u7ED1\u5B9A\u6570\u636E -->\n        </template>\n    ';
  });
  return '<!DOCTYPE html>\n  <html>\n  <head>\n    <meta charset="UTF-8">\n    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/static/">\n    <link rel="stylesheet" href="https://unpkg.com/form-making/dist/FormMaking.css">\n  </head>\n  <body>\n    <div id="app">\n      <fm-generate-form :data="jsonData" :remote="remoteFuncs" :value="editData" ref="generateForm">\n        ' + blankTemplate + '\n      </fm-generate-form>\n      <el-button type="primary" @click="handleSubmit">\u63D0\u4EA4</el-button>\n    </div>\n    <script src="https://unpkg.com/vue/dist/vue.js"></script>\n    <script src="https://unpkg.com/element-ui/lib/index.js"></script>\n    <script src="https://unpkg.com/form-making/dist/FormMaking.umd.js"></script>\n    <script>\n      new Vue({\n        el: \'#app\',\n        data: {\n          jsonData: ' + data + ',\n          editData: {},\n          remoteFuncs: {\n            ' + funcTemplate + '\n          }\n        },\n        methods: {\n          handleSubmit () {\n            this.$refs.generateForm.getData().then(data => {\n              // \u6570\u636E\u6821\u9A8C\u6210\u529F\n              // data \u4E3A\u83B7\u53D6\u7684\u8868\u5355\u6570\u636E\n            }).catch(e => {\n              // \u6570\u636E\u6821\u9A8C\u5931\u8D25\n            })\n          }\n        }\n      })\n    </script>\n  </body>\n  </html>';
});

/***/ }),

/***/ "tjbC":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/CusDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
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
    visible: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '600px'
    },
    form: {
      type: Boolean,
      default: true
    },
    action: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      loading: false,
      dialogVisible: this.visible,
      id: 'dialog_' + new Date().getTime(),
      showForm: false
    };
  },

  computed: {
    show: function show() {
      if (this.form) {
        return this.showForm;
      } else {
        return true;
      }
    }
  },
  watch: {
    dialogVisible: function dialogVisible(val) {
      var _this = this;

      if (!val) {
        this.loading = false;
        this.$emit('on-close');
        setTimeout(function () {
          _this.showForm = false;
        }, 300);
      } else {
        this.showForm = true;
      }
    },
    visible: function visible(val) {
      this.dialogVisible = val;
    }
  },
  mounted: function mounted() {},

  methods: {
    close: function close() {
      this.dialogVisible = false;
    },
    submit: function submit() {
      this.loading = true;

      this.$emit('on-submit');
    },
    end: function end() {
      this.loading = false;
    }
  }
});

/***/ }),

/***/ "y93o":
/*!**********************************************************************************!*\
  !*** ./src/components/customerForm/CusDialog.vue?vue&type=template&id=4cc64a35& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_template_id_4cc64a35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CusDialog.vue?vue&type=template&id=4cc64a35& */ "StKV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_template_id_4cc64a35___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CusDialog_vue_vue_type_template_id_4cc64a35___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);