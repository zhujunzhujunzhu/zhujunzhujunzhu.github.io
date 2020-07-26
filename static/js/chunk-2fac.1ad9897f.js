(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-2fac"],{

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

/***/ "AYic":
/*!*****************************************************************************************************************************!*\
  !*** ./src/views/customerForm/testForm.vue?vue&type=style&index=0&id=78347d85&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_style_index_0_id_78347d85_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./testForm.vue?vue&type=style&index=0&id=78347d85&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "XSZD");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_style_index_0_id_78347d85_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_style_index_0_id_78347d85_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_style_index_0_id_78347d85_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_style_index_0_id_78347d85_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_style_index_0_id_78347d85_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Co+R":
/*!**********************************************************************!*\
  !*** ./src/views/customerForm/testForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./testForm.vue?vue&type=script&lang=js& */ "GCt0");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "DLAm":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customerForm/testForm.vue?vue&type=template&id=78347d85&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('generate-form',{ref:"generateForm",attrs:{"data":_vm.jsonData,"remote":_vm.remoteFuncs,"value":_vm.editData},scopedSlots:_vm._u([{key:"list",fn:function(scope){return _vm._l((_vm.list),function(item,index){return _c('el-input',{key:index,model:{value:(item.name),callback:function ($$v) {_vm.$set(item, "name", $$v)},expression:"item.name"}})})}}])}),_vm._v(" "),_c('el-button',{on:{"click":_vm.test}},[_vm._v("测试")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.test2}},[_vm._v("测试自定义")])],1)}
var staticRenderFns = []



/***/ }),

/***/ "FvPS":
/*!*********************************************!*\
  !*** ./src/views/customerForm/testForm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testForm_vue_vue_type_template_id_78347d85_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testForm.vue?vue&type=template&id=78347d85&scoped=true& */ "y84t");
/* harmony import */ var _testForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testForm.vue?vue&type=script&lang=js& */ "Co+R");
/* empty/unused harmony star reexport *//* harmony import */ var _testForm_vue_vue_type_style_index_0_id_78347d85_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testForm.vue?vue&type=style&index=0&id=78347d85&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "AYic");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _testForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _testForm_vue_vue_type_template_id_78347d85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _testForm_vue_vue_type_template_id_78347d85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78347d85",
  null
  
)

component.options.__file = "testForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "GCt0":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customerForm/testForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_customerForm_GenerateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/customerForm/GenerateForm */ "QqhD");
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Test',
  components: {
    GenerateForm: _components_customerForm_GenerateForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      list: [{ id: 1, name: '111' }, { id: 2, name: '222' }],
      editData: {},
      jsonData: {
        'list': [{
          'type': 'input',
          'name': '姓名',
          'options': {
            'width': '100%',
            'defaultValue': '',
            'required': false,
            'dataType': 'string',
            'pattern': '',
            'placeholder': '',
            'remoteFunc': 'func_1557026349000_44869'
          },
          'key': '1557026349000_44869',
          'model': 'name',
          'rules': [{
            'type': 'string',
            'message': '姓名格式不正确'
          }]
        }, {
          'type': 'blank',
          'name': '自定义',
          'options': {
            'defaultType': 'String',
            'remoteFunc': 'func_1557026351000_17395'
          },
          'key': '1557026351000_17395',
          'model': 'list',
          'rules': []
        }],
        'config': {
          'labelWidth': 100,
          'labelPosition': 'right',
          'size': 'small'
        }
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  methods: {
    test: function test() {
      var _this = this;

      this.$refs.generateForm.getData().then(function (data) {
        data.list = _this.list;
      });
    },
    test2: function test2() {
      this.$refs.generateForm.models.list.push({ name: '' });
      this.$forceUpdate();
    }
  }
});

/***/ }),

/***/ "XSZD":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customerForm/testForm.vue?vue&type=style&index=0&id=78347d85&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "y84t":
/*!****************************************************************************************!*\
  !*** ./src/views/customerForm/testForm.vue?vue&type=template&id=78347d85&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_template_id_78347d85_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./testForm.vue?vue&type=template&id=78347d85&scoped=true& */ "DLAm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_template_id_78347d85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testForm_vue_vue_type_template_id_78347d85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);