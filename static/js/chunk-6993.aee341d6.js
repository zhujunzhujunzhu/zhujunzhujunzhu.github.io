(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-6993"],{

/***/ "+tDp":
/*!**************************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/home/carousel.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./carousel.vue?vue&type=style&index=0&lang=scss& */ "yLZu");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "BZKO":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/home/carousel.vue?vue&type=template&id=1a2aba83& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"carouselDiv"},[_c('el-carousel',{ref:"carouselRef",attrs:{"indicator-position":"none"},on:{"change":_vm.changeFun}},_vm._l((_vm.picList),function(item,index){return _c('el-carousel-item',{key:index,staticClass:"flex-center flex-middle"},[_c('img',{attrs:{"src":item.url.url,"width":"100%","height":"100%","alt":""}})])}),1),_vm._v(" "),_c('div',{staticClass:"maskDes flex  flex-middle flex-space-between"},[_c('span',[_vm._v(_vm._s(_vm.curDes))]),_vm._v(" "),_c('div',{staticClass:"flex flex-middle"},_vm._l((_vm.picList),function(item,index){return _c('div',{key:index,staticClass:"dot",class:_vm.classFun(index),on:{"click":function($event){return _vm.setActiveItem(index)}}})}),0)])],1)}
var staticRenderFns = []



/***/ }),

/***/ "DcgZ":
/*!****************************************************************!*\
  !*** ./src/views/drawingPlatform/components/home/carousel.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_vue_vue_type_template_id_1a2aba83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.vue?vue&type=template&id=1a2aba83& */ "TfEv");
/* harmony import */ var _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.vue?vue&type=script&lang=js& */ "NpG2");
/* empty/unused harmony star reexport *//* harmony import */ var _carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.vue?vue&type=style&index=0&lang=scss& */ "+tDp");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _carousel_vue_vue_type_template_id_1a2aba83___WEBPACK_IMPORTED_MODULE_0__["render"],
  _carousel_vue_vue_type_template_id_1a2aba83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "NpG2":
/*!*****************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/home/carousel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./carousel.vue?vue&type=script&lang=js& */ "bYqQ");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "TfEv":
/*!***********************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/home/carousel.vue?vue&type=template&id=1a2aba83& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_1a2aba83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./carousel.vue?vue&type=template&id=1a2aba83& */ "BZKO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_1a2aba83___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_1a2aba83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "bYqQ":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/home/carousel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_tableAttach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/tableAttach */ "2fVa");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const banner1 = require('@/assets/dashboard/banner1.png')
// const banner2 = require('@/assets/dashboard/banner2.png')
// const banner3 = require('@/assets/dashboard/banner3.png')
// import banner1 from '@/assets/dashboard/banner1.png'
// import banner2 from '@/assets/dashboard/banner2.jpg'
// import banner3 from '@/assets/dashboard/banner3.jpg'

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      picList: [],
      curDes: '',
      activeIndex: 0
    };
  },
  mounted: function mounted() {
    // this.singleProjectList()
    this.dealPics();
  },

  methods: {
    changeFun: function changeFun(index) {
      // 返回的是当前幻灯片的索引
      this.activeIndex = index;
      this.curDes = this.picList[index].label;
    },
    classFun: function classFun(index) {
      if (this.activeIndex === index) {
        return 'active';
      }
    },
    setActiveItem: function setActiveItem(index) {
      this.$refs['carouselRef'].setActiveItem(index);
    },
    dealPics: function dealPics() {
      var _this = this;

      var project = JSON.parse(this.$storage.getStorage('project'));
      var list = [];
      _utils_tableAttach__WEBPACK_IMPORTED_MODULE_1__["default"].getUrlList([project]).then(function (urlList) {
        list = [project].map(function (item, index) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { urls: urlList[index] });
        });
        if (list.length > 0) {
          if (list[0].urls.length > 0) {
            _this.picList = list[0].urls.map(function (item) {
              return { url: item, label: list[0].name };
            });
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "yLZu":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/home/carousel.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);