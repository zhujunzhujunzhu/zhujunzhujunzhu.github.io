(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-a763"],{

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

/***/ "Fbjl":
/*!**************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/dispatching/dispatchingDialog.vue?vue&type=template&id=264296b8& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_template_id_264296b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dispatchingDialog.vue?vue&type=template&id=264296b8& */ "irvE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_template_id_264296b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_template_id_264296b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "FvoM":
/*!*******************************************************************************!*\
  !*** ./src/views/project/projectScheduling/dispatching/dispatchingDialog.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatchingDialog_vue_vue_type_template_id_264296b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchingDialog.vue?vue&type=template&id=264296b8& */ "Fbjl");
/* harmony import */ var _dispatchingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispatchingDialog.vue?vue&type=script&lang=js& */ "XkNn");
/* empty/unused harmony star reexport *//* harmony import */ var _dispatchingDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispatchingDialog.vue?vue&type=style&index=0&lang=scss& */ "Yd6U");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dispatchingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dispatchingDialog_vue_vue_type_template_id_264296b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dispatchingDialog_vue_vue_type_template_id_264296b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "dispatchingDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "XkNn":
/*!********************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/dispatching/dispatchingDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dispatchingDialog.vue?vue&type=script&lang=js& */ "pFfD");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "Yd6U":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/dispatching/dispatchingDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dispatchingDialog.vue?vue&type=style&index=0&lang=scss& */ "rBy6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dispatchingDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "irvE":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/dispatching/dispatchingDialog.vue?vue&type=template&id=264296b8& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isShow)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"dispatchingDialogDiv",attrs:{"title":_vm.title,"visible":_vm.isShow,"before-close":_vm.closeFun,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.isShow=$event}}},[_c('el-form',{ref:"ruleForm",staticClass:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"200px"}},[_c('el-row',[_c('el-col',{staticClass:"my-form-item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"标题","prop":"name"}},[(_vm.dailogStatus!=='view')?_c('el-input',{attrs:{"placeholder":"请输入标题"},model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}}):_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm.ruleForm.name))])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"类型","prop":"type"}},[(_vm.dailogStatus!=='view')?_c('el-select',{attrs:{"clearable":"","placeholder":"类型"},model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},_vm._l((_vm.dictMap['dispatch_type']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1):_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm.ruleForm.typeName))])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item1",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"主送单位","prop":"sendOrgIds"}},[(_vm.dailogStatus!=='view')?_c('selectOrg',{ref:"selectOrgRef",attrs:{"org-id":_vm.ruleForm.sendOrgIds,"placeholder":"请选择主送单位","is-multiple":true},on:{"update:orgId":function($event){return _vm.$set(_vm.ruleForm, "sendOrgIds", $event)},"update:org-id":function($event){return _vm.$set(_vm.ruleForm, "sendOrgIds", $event)},"select":_vm.dealSendOrgIds}}):_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm.ruleForm.sendOrgs))])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item1",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"抄送单位","prop":"copyOrgIds"}},[(_vm.dailogStatus!=='view')?_c('selectOrg',{ref:"selectCopyOrgRef",attrs:{"org-id":_vm.ruleForm.copyOrgIds,"placeholder":"请选择发送单位","is-multiple":true},on:{"update:orgId":function($event){return _vm.$set(_vm.ruleForm, "copyOrgIds", $event)},"update:org-id":function($event){return _vm.$set(_vm.ruleForm, "copyOrgIds", $event)},"select":_vm.dealCopyOrgIds}}):_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm.ruleForm.copyOrgs))])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item1",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"附件"}},[(_vm.dailogStatus!=='view')?_c('el-upload',{staticClass:"upload-demo",attrs:{"action":"","http-request":_vm.upload,"before-remove":_vm.beforeRemove,"on-change":_vm.handleChange,"file-list":_vm.attachmentList}},[_c('el-button',{attrs:{"size":"small","type":"primary"}},[_vm._v("点击上传")])],1):_c('div',[_c('DocumentUl',{attrs:{"file-list":_vm.attachmentList}})],1)],1)],1),_vm._v(" "),(_vm.listBool)?_c('div',[_c('el-col',{staticClass:"my-form-item1",attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"日志记录"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('table-list',{attrs:{"data":_vm.sendOrgList,"columns":_vm.incomingColumns}}),_vm._v(" "),_c('table-list',{staticClass:"bottomTable",attrs:{"data":_vm.copyOrgList,"columns":_vm.copyToColumns}})],1)],1):_vm._e()],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer flex-center",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.closeFun}},[_vm._v("取消")]),_vm._v(" "),(_vm.dailogStatus!=='view')?[_c('el-button',{attrs:{"type":"primary","loading":_vm.saveLoading},on:{"click":_vm.saveFun}},[_vm._v("保存")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success","loading":_vm.deployLoading},on:{"click":_vm.deployFun}},[_vm._v("发布")])]:_vm._e()],2)],1):_vm._e(),_vm._v(" "),_c('attach-list-dialog',{ref:"attachListDialog",attrs:{"org-id":_vm.orgAttach.id,"file-name":"orgAttach","multiple":"","is-file":""},on:{"input":_vm.submitAttachList}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "pFfD":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/dispatching/dispatchingDialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "JO7F");
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _api_project_dispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/project/dispatch */ "EEB7");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _components_selectOrg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/selectOrg */ "SmXB");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/doc */ "5HWN");
/* harmony import */ var _decorator_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/decorator/loading */ "DdcY");
/* harmony import */ var _components_documentUl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/documentUl */ "w3ar");
/* harmony import */ var _components_attachListDialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/attachListDialog */ "sRXy");





var _dec, _dec2, _desc, _value, _obj;

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











/* harmony default export */ __webpack_exports__["default"] = ({
  components: { selectOrg: _components_selectOrg__WEBPACK_IMPORTED_MODULE_8__["default"], DocumentUl: _components_documentUl__WEBPACK_IMPORTED_MODULE_12__["default"], tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_5__["default"], attachListDialog: _components_attachListDialog__WEBPACK_IMPORTED_MODULE_13__["default"] },
  directives: { buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_9__["default"] },
  props: {
    form: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    recordList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    listBool: {
      type: Boolean,
      default: false
    },
    isShow: {
      type: Boolean,
      default: true
    },
    dailogStatus: {
      type: String,
      default: 'add' // view edit
    }
  },
  data: function data() {
    return {
      rules: {
        code: [{ required: true, message: '请输入编号', trigger: 'change' }],
        title: [{ required: true, message: '请输入标题', trigger: 'change' }],
        type: [{ required: false, message: '请输入类型', trigger: 'change' }],
        sendOrgIds: [{ required: true, message: '请选择发送单位', trigger: 'trigger' }]
      },
      ruleForm: {
        name: '',
        type: '',
        code: '',
        sendOrgIds: [],
        copyOrgIds: [],
        delIds: [],
        status: ''
      },
      sendOrgList: [],
      copyOrgList: [],
      listLoading: false,
      incomingColumns: [{ text: '收文单位', value: 'receiveOrg' }, {
        text: '状态',
        value: 'showReceiptStatus'
      }, {
        text: '首次阅读时间',
        value: 'receiptDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"],
        filterParams: ['{y}-{m}-{d} {h}:{i}']
      }, {
        text: '回函附件',
        render: this.docRender
      }],
      copyToColumns: [{ text: '抄送单位', value: 'receiveOrg' }, {
        text: '状态',
        value: 'showReceiptStatus'
      }, {
        text: '首次阅读时间',
        value: 'receiptDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"],
        filterParams: ['{y}-{m}-{d} {h}:{i}']
      }, {
        text: '附件',
        render: this.docRender
      }],
      title: '新增',
      // 附件
      attachmentList: [],
      formData: new FormData(),
      saveLoading: false,
      deployLoading: false,
      orgAttach: {
        id: '',
        orgAttachList: [],
        docId: ''
      }
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(['dictMap', 'fileUrl'])),
  watch: {
    recordList: function recordList() {
      this.sendOrgList = this.recordList.sendOrgList.map(function (item) {
        if (item.readStatus) {
          item.showReceiptStatus = '已查收';
        } else {
          item.showReceiptStatus = '未查收';
        }
        return item;
      });
      this.copyOrgList = this.recordList.copyOrgList.map(function (item) {
        if (item.readStatus) {
          item.showReceiptStatus = '已查收';
        } else {
          item.showReceiptStatus = '未查收';
        }
        return item;
      });
    },

    form: {
      handler: function handler() {
        this.initData();
      },

      immediate: true
    }
  },
  mounted: function mounted() {
    if (this.dailogStatus === 'view') {
      this.initRecordList();
    }
  },

  methods: (_dec = Object(_decorator_loading__WEBPACK_IMPORTED_MODULE_11__["validLoading"])('ruleForm', 'saveLoading'), _dec2 = Object(_decorator_loading__WEBPACK_IMPORTED_MODULE_11__["validLoading"])('ruleForm', 'deployLoading'), (_obj = {
    parseTime: _utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"],
    /** 数据初始化
     * @function initData
     */
    initData: function initData() {
      this.formData = new FormData();
      this.dealTitle(); // 处理弹框标题
      this.dealForm(); // 处理数据
    },

    /** 根据弹框的状态不同处理标题
     * @function dealTitle
     */
    dealTitle: function dealTitle() {
      var map = {
        add: '新增',
        view: '查看',
        edit: '编辑'
      };
      this.title = map[this.dailogStatus];
    },

    /** 表单数据处理
     * @function dealForm
     */
    dealForm: function dealForm() {
      // 当为新增状态不处理
      if (this.dailogStatus === 'add') return;
      // 处理字典表转换
      this.form.typeName = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getNameByCode"])(this.form.type, 'dispatch_type');

      // 处理收抄送单位
      this.form.sendOrgList ? this.form.sendOrgIds = this.form.sendOrgList.map(function (item) {
        return item.receiveOrgId;
      }) : [];
      this.form.copyOrgList ? this.form.copyOrgIds = this.form.copyOrgList.map(function (item) {
        return item.receiveOrgId;
      }) : [];
      this.form.sendOrgList ? this.form.sendOrgs = this.form.sendOrgList.map(function (item) {
        return item.receiveOrg;
      }).join(',') : [];
      this.form.copyOrgList ? this.form.copyOrgs = this.form.copyOrgList.map(function (item) {
        return item.receiveOrg;
      }).join(',') : [];
      this.ruleForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, this.ruleForm, this.form);
      // 处理附件
      this.dealAttach();
    },

    /** 附件处理
     * @function dealAttach
     */
    dealAttach: function dealAttach() {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var back;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.attachmentList = [];

                if (_this.form.docId) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt('return');

              case 3:
                _context.next = 5;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_10__["attachList"])({
                  docId: _this.form.docId
                });

              case 5:
                back = _context.sent;

                if (!back.success) {
                  _context.next = 10;
                  break;
                }

                if (!(!back.result || back.result.length === 0)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('return');

              case 9:
                _this.attachmentList = back.result.map(function (item) {
                  var url = _this.fileUrl + 'img/' + item.fileName;
                  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, item, { name: item.originalFileName, url: url });
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    /** 添加上附件项中
     * @function upload
     */
    upload: function upload(item) {
      this.formData.append('file', item.file);
    },

    /**
     * 手动触发表单验证
     * @function validFun
     */
    validFun: function validFun(e) {
      this.$refs['ruleForm'].validateField('sendOrgIds', function () {});
    },

    /**
     * 发送单位输入处理
     * @function dealSendOrgIds
     */
    dealSendOrgIds: function dealSendOrgIds(e) {
      this.judgeInOtherOrgs('sendOrgIds', 'copyOrgIds', '抄送单位中已经存在');
      this.validFun(e);
    },

    /**
     * 发送单位输入处理
     * @function dealSendOrgIds
     */
    dealCopyOrgIds: function dealCopyOrgIds(e) {
      this.judgeInOtherOrgs('copyOrgIds', 'sendOrgIds', '发送单位中已经存在');
    },

    /** 判断两个组织数据中是否存在交叉的组织
     * @function judgeInOtherOrgs
     */
    judgeInOtherOrgs: function judgeInOtherOrgs(source, target, message) {
      var _this2 = this;

      // 比较输入的在抄送组织中是否存在 如果已经存在提示出来 不选中
      if (this.ruleForm[source] && this.ruleForm[source].length > 0) {
        // 比较两个数组是否存在相同元素
        var flag = this.ruleForm[source].some(function (orgId) {
          return _this2.ruleForm[target].indexOf(orgId) !== -1;
        });
        if (flag) {
          this.$message.warning(message);
          setTimeout(function () {
            _this2.ruleForm[source].pop();
          });
        }
      }
    },
    saveFun: function saveFun() {
      var _this3 = this;

      this.ruleForm.isDeploy = 0;
      // 将json转换为formdata类型
      this.formData = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["json2Formdata"])(this.ruleForm, this.formData);
      return Object(_api_project_dispatch__WEBPACK_IMPORTED_MODULE_6__["saveDispatch"])(this.formData).then(function (res) {
        if (res.success) {
          _this3.$message({
            type: 'success',
            message: '保存成功'
          });
          _this3.closeFun(true);
        }
      });
    },
    deployFun: function deployFun() {
      var _this4 = this;

      this.ruleForm.isDeploy = 1;
      // 将json转换为formdata类型
      this.formData = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["json2Formdata"])(this.ruleForm, this.formData);
      return Object(_api_project_dispatch__WEBPACK_IMPORTED_MODULE_6__["saveDispatch"])(this.formData).then(function (res) {
        if (res.success) {
          _this4.$message({
            type: 'success',
            message: '发布成功'
          });
          _this4.closeFun(true);
        }
      });
    },

    /** 关闭弹框操作
     * @function closeFun
     */
    closeFun: function closeFun(refresh) {
      this.$emit('update:isShow', false);
      this.$emit('closeFun', refresh);
    },

    /** 附件移除前操作
     * @function beforeRemove
     */
    beforeRemove: function beforeRemove(file) {
      var _this5 = this;

      if (file.id) {
        this.ruleForm.delIds.push(file.id);
      } else {
        var files = this.formData.getAll('file');
        var index = files.findIndex(function (item) {
          return item.uid === file.uid;
        });
        files.splice(index, 1);
        // 此时需要有一个file的初始化 删除之前的file
        this.formData.delete('file');
        files.forEach(function (inner) {
          _this5.formData.append('file', inner);
        });
      }
      return true;
    },
    handleChange: function handleChange() {},
    docRender: function docRender(h, val) {
      var _this6 = this;

      if (val.row.currentOrg && val.row.currentUserDuty) {
        return h(
          'div',
          { 'class': 'attach-list-container' },
          [h(
            'div',
            { 'class': 'attach-list-column' },
            [h('div', {
              domProps: {
                'innerHTML': val.row.attach
              }
            }), h(
              'div',
              { 'class': 'attach-list-time' },
              [val.row.latestTime]
            )]
          ), h(
            'el-tooltip',
            {
              attrs: { content: '上传', placement: 'top' }
            },
            [h('i', {
              'class': 'icon iconfont iconyunshangchuan',
              on: {
                'click': function click() {
                  _this6.upLoadOrgAttachList(val);
                }
              }
            })]
          )]
        );
      } else {
        return h(
          'div',
          { 'class': 'attach-list-container' },
          [h(
            'div',
            { 'class': 'attach-list-column' },
            [h('div', {
              domProps: {
                'innerHTML': val.row.attach
              }
            }), h(
              'div',
              { 'class': 'attach-list-time' },
              [val.row.latestTime]
            )]
          )]
        );
      }
    },
    upLoadOrgAttachList: function upLoadOrgAttachList(val) {
      this.orgAttach.id = val.row.id;
      this.$refs['attachListDialog'].changeFile(val.row.docId);
    },
    submitAttachList: function submitAttachList(docId) {
      var _this7 = this;

      Object(_api_project_dispatch__WEBPACK_IMPORTED_MODULE_6__["dispatchReceiptUploadFile"])({ docId: docId, id: this.orgAttach.id }).then(function (response) {
        if (response.success) {
          _this7.$message.success('上传成功');
          _this7.docId = response.result.id;
          _this7.getDialogRecord(_this7.form.id);
        }
      });
    },
    getDialogRecord: function getDialogRecord(id) {
      this.$emit('getDialogRecord', id);
    },
    initRecordList: function initRecordList() {
      this.sendOrgList = this.recordList.sendOrgList ? this.recordList.sendOrgList.map(function (item) {
        if (item.readStatus) {
          item.showReceiptStatus = '已查收';
        } else {
          item.showReceiptStatus = '未查收';
        }
        return item;
      }) : [];
      this.copyOrgList = this.recordList.copyOrgList ? this.recordList.copyOrgList.map(function (item) {
        if (item.readStatus) {
          item.showReceiptStatus = '已查收';
        } else {
          item.showReceiptStatus = '未查收';
        }
        return item;
      }) : [];
    }
  }, (_applyDecoratedDescriptor(_obj, 'saveFun', [_dec], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_obj, 'saveFun'), _obj), _applyDecoratedDescriptor(_obj, 'deployFun', [_dec2], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_obj, 'deployFun'), _obj)), _obj))
});

/***/ }),

/***/ "rBy6":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/dispatching/dispatchingDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);