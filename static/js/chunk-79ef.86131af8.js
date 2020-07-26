(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-79ef"],{

/***/ "4J4B":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--7-0!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/technicalManage/designChange.vue?vue&type=style&index=0&id=d468dbd8&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "HDIn":
/*!*******************************************************************************************************!*\
  !*** ./src/views/project/technicalManage/designChange.vue?vue&type=template&id=d468dbd8&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_template_id_d468dbd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./designChange.vue?vue&type=template&id=d468dbd8&scoped=true& */ "U8mK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_template_id_d468dbd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_template_id_d468dbd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "U8mK":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/technicalManage/designChange.vue?vue&type=template&id=d468dbd8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container designChangeDiv"},[_c('my-card',{attrs:{"title":"设计变更"}},[_c('customize',{ref:"customize",attrs:{"json-name":"technicalManage/designChange","table-name":"designChange","extra-data":_vm.extraData,"outside-data":_vm.outside,"use-deal-data-fun":true,"deal-data-fun":_vm.dealDataFun,"use-customize-button-fun":true,"customize-button-fun":_vm.customizeButtonFun},on:{"updateOrLook":_vm.updateOrLook},scopedSlots:_vm._u([{key:"sysOrgId",fn:function(scope){return [(_vm.isEdit)?_c('select-org',{attrs:{"org-id":_vm.outside.sysOrgId},on:{"update:orgId":function($event){return _vm.$set(_vm.outside, "sysOrgId", $event)},"update:org-id":function($event){return _vm.$set(_vm.outside, "sysOrgId", $event)}}}):_c('span',[_vm._v(_vm._s(_vm.outside.sysOrgName))])]}},{key:"tendersId",fn:function(scope){return [(_vm.isEdit)?_c('tenders-select',{attrs:{"tenders-id":_vm.outside.tendersId},on:{"update:tendersId":function($event){return _vm.$set(_vm.outside, "tendersId", $event)},"update:tenders-id":function($event){return _vm.$set(_vm.outside, "tendersId", $event)}}}):_c('span',[_vm._v(_vm._s(_vm.outside.tendersName))])]}},{key:"changeCause",fn:function(scope){return [(_vm.isEdit)?_c('el-input',{attrs:{"type":"textarea","rows":"4","maxlength":"20","show-word-limit":"","placeholder":"请输入变更原因"},model:{value:(_vm.outside.changeCause),callback:function ($$v) {_vm.$set(_vm.outside, "changeCause", $$v)},expression:"outside.changeCause"}}):_c('span',[_vm._v(_vm._s(_vm.outside.changeCause))])]}}])},[_vm._v(" "),_vm._v(" "),_vm._v(" "),(_vm.isEdit)?_c('template',{slot:"dialogBtnSlot"},[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary"},on:{"click":_vm.saveFun}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"success"},on:{"click":_vm.submitFun}},[_vm._v("发布")])],1):_vm._e()],2)],1),_vm._v(" "),_c('design-change-dialog',{attrs:{"dialog-visible":_vm.dialogVisible,"dialog-status":_vm.dialogStatus,"form":_vm.form},on:{"update:dialogVisible":function($event){_vm.dialogVisible=$event},"update:dialog-visible":function($event){_vm.dialogVisible=$event},"update:form":function($event){_vm.form=$event},"getList":_vm.getList}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "VokN":
/*!************************************************************!*\
  !*** ./src/views/project/technicalManage/designChange.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _designChange_vue_vue_type_template_id_d468dbd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designChange.vue?vue&type=template&id=d468dbd8&scoped=true& */ "HDIn");
/* harmony import */ var _designChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designChange.vue?vue&type=script&lang=js& */ "YxgE");
/* empty/unused harmony star reexport *//* harmony import */ var _designChange_vue_vue_type_style_index_0_id_d468dbd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designChange.vue?vue&type=style&index=0&id=d468dbd8&scoped=true&lang=css& */ "jALG");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _designChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _designChange_vue_vue_type_template_id_d468dbd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _designChange_vue_vue_type_template_id_d468dbd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d468dbd8",
  null
  
)

component.options.__file = "designChange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ "YxgE":
/*!*************************************************************************************!*\
  !*** ./src/views/project/technicalManage/designChange.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./designChange.vue?vue&type=script&lang=js& */ "lFQB");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "jALG":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/project/technicalManage/designChange.vue?vue&type=style&index=0&id=d468dbd8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_style_index_0_id_d468dbd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--7-0!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./designChange.vue?vue&type=style&index=0&id=d468dbd8&scoped=true&lang=css& */ "4J4B");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_style_index_0_id_d468dbd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_style_index_0_id_d468dbd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_style_index_0_id_d468dbd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_style_index_0_id_d468dbd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_designChange_vue_vue_type_style_index_0_id_d468dbd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "lFQB":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/technicalManage/designChange.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyCard_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MyCard/index */ "zY4l");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _components_customerForm_customize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/customerForm/customize */ "Od4T");
/* harmony import */ var _components_designChangeDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/designChangeDialog */ "Lswa");
/* harmony import */ var _components_tendersSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tendersSelect */ "n8N2");
/* harmony import */ var _api_project_technicalManage_designChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/project/technicalManage/designChange */ "xqNk");
/* harmony import */ var _qualityManage_components_selectOrg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../qualityManage/components/selectOrg */ "rWpC");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DesignChange',
  components: { SelectOrg: _qualityManage_components_selectOrg__WEBPACK_IMPORTED_MODULE_9__["default"], TendersSelect: _components_tendersSelect__WEBPACK_IMPORTED_MODULE_7__["default"], DesignChangeDialog: _components_designChangeDialog__WEBPACK_IMPORTED_MODULE_6__["default"], Customize: _components_customerForm_customize__WEBPACK_IMPORTED_MODULE_5__["default"], MyCard: _components_MyCard_index__WEBPACK_IMPORTED_MODULE_3__["default"] },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      extraData: {
        deploy: 0
      },
      outside: {
        sysOrgId: '',
        sysOrgName: '',
        tendersId: null,
        tendersName: '',
        changeCause: ''
      },
      isEdit: false,
      tendersList: [],
      dialogVisible: false,
      dialogStatus: 'update',
      form: {},
      designChangeId: ''
    };
  },
  mounted: function mounted() {},

  methods: {
    updateOrLook: function updateOrLook(val) {
      this.isEdit = val;
    },
    dealDataFun: function dealDataFun(val) {
      this.outside = {
        sysOrgId: '',
        tendersId: null,
        tendersName: '',
        changeCause: ''
      };
      this.outside.changeCause = val.changeCause;
      if (this.isEdit) {
        this.outside.sysOrgId = '';
        if (val.tendersId) {
          this.outside.tendersId = val.tendersId;
        }
      } else {
        this.outside.sysOrgName = val.sysOrgName;
        this.outside.tendersId = val.tendersName;
      }
      this.outside.tendersId = null;
      this.outside.tendersName = '';
      return val;
    },
    saveFun: function saveFun() {
      this.extraData.deploy = 0;
      this.$refs.customize.saveRecord();
    },
    submitFun: function submitFun() {
      this.extraData.deploy = 1;
      this.$refs.customize.saveRecord();
    },
    customizeButtonFun: function customizeButtonFun(obj) {
      return [{ class: 'iconyanjing', value: '查看', click: this.lookRecord }, { class: 'iconxiugai', value: '修改', click: this.updateRecord }, { class: 'iconshanchu1', value: '删除', click: obj.deleteRecord }];
    },
    lookRecord: function lookRecord(val) {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.dialogStatus = 'view';
                _context.next = 3;
                return _this.getDesignChange(val.row.id);

              case 3:
                _this.dialogVisible = true;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    updateRecord: function updateRecord(val) {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.dialogStatus = 'update';
                _context2.next = 3;
                return _this2.getDesignChange(val.row.id);

              case 3:
                _this2.dialogVisible = true;

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    getDesignChange: function getDesignChange(id) {
      var _this3 = this;

      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
        Object(_api_project_technicalManage_designChange__WEBPACK_IMPORTED_MODULE_8__["getDesignChange"])({ id: id }).then(function (res) {
          if (res.success) {
            if (res.result.modify === undefined) {
              res.result.modify = false;
            }
            _this3.form = res.result;
            resolve();
          }
        });
      });
    },
    getList: function getList() {
      this.$refs.customize.getList();
    }
  }
});

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

/***/ })

}]);