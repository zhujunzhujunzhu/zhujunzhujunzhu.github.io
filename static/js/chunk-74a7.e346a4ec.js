(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-74a7"],{

/***/ "1u4A":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/landAcquire/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _components_customerForm_customize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/customerForm/customize */ "Od4T");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "7Qib");
//
//
//
//
//
//
//
//
//
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
  name: 'LicenseList',
  components: {
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_1__["default"], customize: _components_customerForm_customize__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  data: function data() {
    return {
      mutiColunmList: [{
        text: '证照名称',
        value: 'licenseLibraryName'
      }, {
        text: '审批部门',
        value: 'handleGov'
      }, {
        text: '办证联系人',
        value: 'contactPerson'
      }, {
        text: '报送',
        value: 'date',
        children: [{
          text: '计划',
          value: 'planUploadDate',
          filter: _utils__WEBPACK_IMPORTED_MODULE_3__["parseTime"],
          filterParams: ['{y}-{m}-{d}']
        }, {
          text: '实际',
          value: 'uploadDate',
          filter: _utils__WEBPACK_IMPORTED_MODULE_3__["parseTime"],
          filterParams: ['{y}-{m}-{d}']
        }]
      }, {
        text: '批复',
        value: 'date',
        children: [{
          text: '计划',
          value: 'planReplyDate',
          filter: _utils__WEBPACK_IMPORTED_MODULE_3__["parseTime"],
          filterParams: ['{y}-{m}-{d}']
        }, {
          text: '实际',
          value: 'replyDate',
          filter: _utils__WEBPACK_IMPORTED_MODULE_3__["parseTime"],
          filterParams: ['{y}-{m}-{d}']
        }]
      }, {
        text: '有效期限',
        value: 'expireDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_3__["parseTime"],
        filterParams: ['{y}-{m}-{d}']
      }, {
        text: '流程状态',
        value: 'processStatus'
      }, {
        text: '证照状态',
        value: 'status'
      }, {
        text: '过期预警（天）',
        value: 'overdue',
        formatter: function formatter(row) {
          var currentDate = new Date();
          var timestamp = currentDate.getTime();
          var gap = row.expireDate - timestamp;
          var overdue = gap / (1000 * 60 * 60 * 24);
          if (isNaN(overdue)) {
            return null;
          }
          if (overdue >= 0) {
            return Math.ceil(overdue);
          } else {
            return Math.floor(overdue);
          }
        }
      }, {
        text: '备注',
        value: 'remark'
      }],
      addPrivilege: 'P_zgxx_zgbc',
      useCustomizeButtonFun: true,
      customizeButtonFun: function customizeButtonFun(obj, val) {
        return [{ class: 'iconyanjing', value: '查看', click: obj.lookRecord, privilege: 'P_zgxx_zgck' }, { class: 'iconxiugai', value: '修改', click: obj.updateRecord, privilege: 'P_zgxx_zgbc' }, { class: 'iconshanchu1', value: '删除', click: obj.deleteRecord, privilege: 'P_zgxx_zgsc' }];
      },
      myCellStyle: function myCellStyle(_ref) {
        var row = _ref.row,
            column = _ref.column,
            rowIndex = _ref.rowIndex,
            columnIndex = _ref.columnIndex;

        if (columnIndex === 10) {
          var currentDate = new Date();
          var timestamp = currentDate.getTime();
          var gap = row.expireDate - timestamp;
          var overdue = gap / (1000 * 60 * 60 * 24);
          if (overdue >= 0) {
            overdue = Math.ceil(overdue);
          } else {
            overdue = Math.floor(overdue);
          }
          if (overdue < 0) {
            return 'background-color: #e60c14;color: white';
          }
        }
      }
    };
  },
  mounted: function mounted() {},

  methods: {
    updateOrLook: function updateOrLook(val) {
      this.isEdit = val;
    }
  }
});

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

/***/ "AmOH":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/landAcquire/index.vue?vue&type=template&id=191c648a& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container licenseListDiv"},[_c('my-card',{attrs:{"title":"征地拆迁"}},[_c('customize',{attrs:{"json-name":"licenseList","table-name":"license","muti-colunm-list":_vm.mutiColunmList,"my-cell-style":_vm.myCellStyle,"use-customize-button-fun":_vm.useCustomizeButtonFun,"customize-button-fun":_vm.customizeButtonFun,"add-privilege":_vm.addPrivilege,"path-url":"/licenseManage/newLicense"},on:{"updateOrLook":_vm.updateOrLook}})],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "SdNS":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/landAcquire/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "X1Xt":
/*!********************************************************************************!*\
  !*** ./src/views/project/landAcquire/index.vue?vue&type=template&id=191c648a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_191c648a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=191c648a& */ "AmOH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_191c648a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_191c648a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "YEIV":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "SEkw");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "gWiy":
/*!**************************************************************************!*\
  !*** ./src/views/project/landAcquire/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "1u4A");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "qxEe":
/*!**********************************!*\
  !*** ./src/api/custom/custom.js ***!
  \**********************************/
/*! exports provided: customTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customTable", function() { return customTable; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function customTable(url, param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: url,
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "vDQP":
/*!*********************************************************************************************************!*\
  !*** ./src/views/project/landAcquire/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "SdNS");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "wHhR":
/*!*************************************************!*\
  !*** ./src/views/project/landAcquire/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_191c648a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=191c648a& */ "X1Xt");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "gWiy");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "vDQP");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_191c648a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_191c648a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);