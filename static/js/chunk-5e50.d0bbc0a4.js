(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-5e50"],{

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

/***/ "7oyS":
/*!***************************************************************************!*\
  !*** ./src/components/customerForm/skipForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./skipForm.vue?vue&type=script&lang=js& */ "lRRH");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "VfxW":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/skipForm.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "WslS":
/*!*********************************************************************************!*\
  !*** ./src/components/customerForm/skipForm.vue?vue&type=template&id=255b7b70& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_template_id_255b7b70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./skipForm.vue?vue&type=template&id=255b7b70& */ "if3o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_template_id_255b7b70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_template_id_255b7b70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "if3o":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/skipForm.vue?vue&type=template&id=255b7b70& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[(_vm.showForm)?_c('generate-form',{ref:"generateForm",attrs:{"data":_vm.jsonData,"value":_vm.editData,"extra-data":_vm.extraData,"is-edit":_vm.isEdit,"outside-data":_vm.outsideData},scopedSlots:_vm._u([_vm._l((_vm.slotList),function(item){return {key:item,fn:function(scope){return [_vm._t(item)]}}})],null,true)}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"text-center",staticStyle:{"width":"100%"}},[_c('el-button',{on:{"click":function($event){return _vm.goBack()}}},[_vm._v("取消")]),_vm._v(" "),_vm._t("dialogBtnSlot",[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.isEdit),expression:"isEdit"},{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.saveRecord}},[_vm._v("提交\n      ")])])],2)],1)}
var staticRenderFns = []



/***/ }),

/***/ "lRRH":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/skipForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "gDS+");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_customerForm_GenerateForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/customerForm/GenerateForm */ "QqhD");
/* harmony import */ var _api_custom_custom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/custom/custom */ "qxEe");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "L2JU");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // 以后外部资源调用




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SkipForm',
  components: {
    GenerateForm: _components_customerForm_GenerateForm__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    outsideData: {
      type: Object,
      default: function _default() {}
    },
    extraData: {
      type: Object,
      default: function _default() {}
    },
    useDealDataFun: {
      type: Boolean,
      default: false
    },
    dealDataFun: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    dealSendDataFun: {
      type: Function,
      default: function _default(val) {
        return val;
      }
    }
  },
  data: function data() {
    return {
      slotList: [],
      loading: false, // 按钮重复提交判断
      editData: {},
      jsonData: {
        list: [],
        config: {
          labelWidth: 100, labelPosition: 'right', size: 'small'
        }
      },
      searchForm: {},
      tableApiName: '',
      isEdit: true,
      showForm: false
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(['parentRoute'])),
  // watch: {
  //   outsideData: {
  //     deep: true,
  //     handler(val) {
  //       debugger
  //       // this.recurrence(val)
  //     }
  //   }
  // },
  mounted: function mounted() {
    this.getJson();
    this.tableApiName = this.$storage.getStorage('tableApiName');
    if (this.$storage.getStorage('customizeIsEdit') && this.$storage.getStorage('customizeIsEdit') === 'false') {
      this.isEdit = false;
      this.$emit('updateOrLook', false);
    } else {
      this.$emit('updateOrLook', true);
    }
  },

  methods: {
    goBack: function goBack() {
      // this.$router.back(-1)
      this.$router.push({ path: this.parentRoute });
    },
    saveRecord: function saveRecord() {
      var _this = this;

      this.$refs.generateForm.getData().then(function (data) {
        data = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, data, _this.outsideData, _this.extraData);
        data.id = _this.editData.id;
        _this.editData = _this.dealSendDataFun(data);
        _this.loading = true;
        Object(_api_custom_custom__WEBPACK_IMPORTED_MODULE_6__["customTable"])('rest/' + _this.tableApiName + '/save', _this.editData).then(function (response) {
          if (response.success) {
            _this.$message.success(response.message);
            for (var item in _this.editData) {
              _this.editData[item] = null;
            }
            _this.$router.push({ path: _this.parentRoute });
          }
          _this.loading = false;
        });
      });
    },
    getRecord: function getRecord(id) {
      var _this2 = this;

      Object(_api_custom_custom__WEBPACK_IMPORTED_MODULE_6__["customTable"])('rest/' + this.tableApiName + '/get', { id: id }).then(function (response) {
        if (response.success) {
          var temp = response.result;
          if (_this2.useDealDataFun) {
            temp = _this2.dealDataFun(temp);
          }
          _this2.editData = temp;
          _this2.showForm = true;
        }
      });
    },

    // 匹配form
    mateForm: function mateForm(modelId, formObj) {
      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
        if (formObj.list) {
          formObj.list.forEach(function (item) {
            if (item.type === 'grid') {
              item.columns.forEach(function (col) {
                if (col.list) {
                  if (col.list.find(function (t) {
                    return t.model === modelId;
                  })) {
                    resolve(col.list.find(function (t) {
                      return t.model === modelId;
                    }));
                  }
                }
              });
            }
            if (item.model === modelId) {
              resolve(item);
            }
          });
        }
      });
    },
    getJson: function getJson() {
      var _this3 = this;

      var jsonName = this.$storage.getStorage('jsonName');
      var configPath = './static/customer/' + jsonName + '.json';
      if (false) {}
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(configPath).then(function (response) {
        if (response.data) {
          if (response.data.table) {
            var temp = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(response.data.table);
            response.data.table.list.forEach(function (item) {
              if (item.type === 'blank') {
                _this3.slotList.push(item.model);
              } else if (item.type === 'grid') {
                if (item.columns) {
                  item.columns.forEach(function (column) {
                    if (column.list) {
                      column.list.forEach(function (l) {
                        if (l.type === 'blank') {
                          _this3.slotList.push(l.model);
                        }
                      });
                    }
                  });
                }
              }
            });
            _this3.jsonData = JSON.parse(temp);
            if (_this3.$storage.getStorage('customizeId')) {
              _this3.getRecord(_this3.$storage.getStorage('customizeId'));
            } else {
              _this3.showForm = true;
            }
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "qZPp":
/*!**************************************************!*\
  !*** ./src/components/customerForm/skipForm.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skipForm_vue_vue_type_template_id_255b7b70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skipForm.vue?vue&type=template&id=255b7b70& */ "WslS");
/* harmony import */ var _skipForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skipForm.vue?vue&type=script&lang=js& */ "7oyS");
/* empty/unused harmony star reexport *//* harmony import */ var _skipForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skipForm.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "tPT6");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _skipForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _skipForm_vue_vue_type_template_id_255b7b70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _skipForm_vue_vue_type_template_id_255b7b70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "skipForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ "tPT6":
/*!**********************************************************************************************************!*\
  !*** ./src/components/customerForm/skipForm.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./skipForm.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "VfxW");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_skipForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);