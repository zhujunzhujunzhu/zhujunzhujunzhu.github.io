(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-4c06"],{

/***/ "4AsY":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/detialProcess.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customizedApproval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customizedApproval */ "RVFo");
/* harmony import */ var _approvalProcess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approvalProcess */ "G2bz");
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    customizedApproval: _customizedApproval__WEBPACK_IMPORTED_MODULE_0__["default"],
    approvalProcess: _approvalProcess__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      noCustomized: false,
      isCustomized: false
    };
  },
  mounted: function mounted() {
    this.getInitInfo();
  },

  methods: {
    getInitInfo: function getInitInfo() {
      var back = this.$storage.getStorage('processInfo');
      if (!back) return;
      var info = JSON.parse(back);
      if (info.businessType) {
        this.isCustomized = true;
        this.noCustomized = false;
      } else {
        this.isCustomized = false;
        this.noCustomized = true;
      }
    }
  }

});

/***/ }),

/***/ "FFxX":
/*!**************************************************************************!*\
  !*** ./src/views/formProcess/detialProcess.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_detialProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./detialProcess.vue?vue&type=script&lang=js& */ "4AsY");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_detialProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "b3bt":
/*!********************************************************************************!*\
  !*** ./src/views/formProcess/detialProcess.vue?vue&type=template&id=a67a6fd2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detialProcess_vue_vue_type_template_id_a67a6fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./detialProcess.vue?vue&type=template&id=a67a6fd2& */ "kStM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detialProcess_vue_vue_type_template_id_a67a6fd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detialProcess_vue_vue_type_template_id_a67a6fd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "dLmT":
/*!*************************************************!*\
  !*** ./src/views/formProcess/detialProcess.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detialProcess_vue_vue_type_template_id_a67a6fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detialProcess.vue?vue&type=template&id=a67a6fd2& */ "b3bt");
/* harmony import */ var _detialProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detialProcess.vue?vue&type=script&lang=js& */ "FFxX");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detialProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detialProcess_vue_vue_type_template_id_a67a6fd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detialProcess_vue_vue_type_template_id_a67a6fd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "detialProcess.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "kStM":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/detialProcess.vue?vue&type=template&id=a67a6fd2& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isCustomized)?_c('customizedApproval'):_vm._e(),_vm._v(" "),(_vm.noCustomized)?_c('approvalProcess'):_vm._e()],1)}
var staticRenderFns = []



/***/ })

}]);