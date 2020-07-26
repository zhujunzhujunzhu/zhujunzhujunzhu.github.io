(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-0a80"],{

/***/ "9C19":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/indexOld.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "D6Ah":
/*!******************************************!*\
  !*** ./src/views/dashboard/indexOld.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexOld_vue_vue_type_template_id_89306b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexOld.vue?vue&type=template&id=89306b6e& */ "nADw");
/* harmony import */ var _indexOld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexOld.vue?vue&type=script&lang=js& */ "fsGd");
/* empty/unused harmony star reexport *//* harmony import */ var _indexOld_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexOld.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "kjhd");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _indexOld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexOld_vue_vue_type_template_id_89306b6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexOld_vue_vue_type_template_id_89306b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "indexOld.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "TWvS":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/indexOld.vue?vue&type=template&id=89306b6e& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container sysHomeDiv"},[_c('div',{staticClass:"dashboardDiv height_100 flex flex-center"},[_c('div',{staticClass:"height_100 flex flex-center"},[_c('div',{staticClass:"contentWrapper"},_vm._l((_vm.projectList),function(item,index){return _c('div',{key:index,staticClass:"cardContent border-box"},[_c('div',{staticClass:"contentItem flex pointer",style:('height:'+_vm.imgHeight+'px')},[_c('div',{staticClass:"des flex-1 border-box"},[_c('div',{staticClass:"desInnerWrapper"},[_c('div',{staticClass:"platform"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(item.shortName))])]),_vm._v(" "),_c('div',{staticClass:"flex-column flex-space-between",staticStyle:{"height":"calc(100% - 40px)"}},[_c('div',{staticClass:"des-content",style:(_vm.desContentStyle)},[_vm._v(_vm._s(item.remark))]),_vm._v(" "),_c('div',{staticClass:"flex flex-end"},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"myBtn flex flex-center flex-middle",on:{"click":function($event){return _vm.turnTo('construct',item)}}},[_vm._v("建设")]),_vm._v(" "),_c('div',{staticClass:"myBtn flex-center flex-middle",on:{"click":function($event){return _vm.turnTo('consult',item)}}},[_vm._v("BIM")]),_vm._v(" "),_c('div',{staticClass:"myBtn flex-center flex-middle",on:{"click":function($event){return _vm.turnTo('supervision',item)}}},[_vm._v("监理")])])])])])]),_vm._v(" "),_c('div',{staticClass:"flex-1"},[_c('el-carousel',_vm._l((item.urls),function(inner,innerIndex){return _c('el-carousel-item',{key:index+'_'+innerIndex},[(inner.url)?_c('div',{style:(_vm.styleFun(inner.url))}):_vm._e()])}),1)],1)])])}),0)])])])}
var staticRenderFns = []



/***/ }),

/***/ "c4st":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/indexOld.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _api_project_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/project/project */ "T+6t");
/* harmony import */ var _views_project_flowChart_component_auditArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/project/flowChart/component/auditArea */ "L73f");
/* harmony import */ var _assets_dashboard_sysBanner1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/dashboard/sysBanner1.png */ "nDLr");
/* harmony import */ var _assets_dashboard_sysBanner1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_dashboard_sysBanner1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_dashboard_sysBanner2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/dashboard/sysBanner2.png */ "Urvz");
/* harmony import */ var _assets_dashboard_sysBanner2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_dashboard_sysBanner2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_dashboard_consult_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/dashboard/consult.png */ "iV4q");
/* harmony import */ var _assets_dashboard_consult_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_dashboard_consult_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_dashboard_construct_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/dashboard/construct.png */ "0KIZ");
/* harmony import */ var _assets_dashboard_construct_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_dashboard_construct_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_dashboard_supervision_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/dashboard/supervision.png */ "d/nb");
/* harmony import */ var _assets_dashboard_supervision_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_dashboard_supervision_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_tableAttach__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/tableAttach */ "2fVa");
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/login */ "fe1z");
/* harmony import */ var _api_system_authority__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/api/system/authority */ "9Vyn");
/* harmony import */ var _utils_refreshRoutes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/refreshRoutes */ "ZBzj");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Dashboard',
  components: { AuditArea: _views_project_flowChart_component_auditArea__WEBPACK_IMPORTED_MODULE_3__["default"] },
  component: {
    AuditArea: _views_project_flowChart_component_auditArea__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      projectList: null,
      sysBanner1: _assets_dashboard_sysBanner1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      sysBanner2: _assets_dashboard_sysBanner2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      consult: _assets_dashboard_consult_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      construct: _assets_dashboard_construct_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      supervision: _assets_dashboard_supervision_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      imgHeight: 300,
      thirdParty: {},
      desContentStyle: '\n              display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 4;\n        overflow: hidden;\n      '
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['name', 'avatar', 'roles'])),
  created: function created() {
    this.singleProjectList();
  },
  mounted: function mounted() {
    this.initHeight();
    this.getApp();
  },

  methods: {
    getApp: function getApp() {
      var _this = this;

      Object(_api_system_authority__WEBPACK_IMPORTED_MODULE_11__["appList"])({}).then(function (res) {
        if (res.success) {
          if (res.result.length > 0) {
            _this.thirdParty = res.result[0];
          }
        }
      });
    },
    styleFun: function styleFun(img) {
      return '\n            background:url(' + img + ') center center no-repeat;\n            height:' + this.imgHeight + 'px;\n            background-size:cover;\n         ';
    },
    initHeight: function initHeight() {
      var height = document.getElementById('app').clientHeight - 140;
      if (height > 900) {
        this.desContentStyle = '\n            display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 6;\n        overflow: hidden;\n        ';
      }
      this.imgHeight = (height - 100) / 2;
      document.getElementsByClassName('dashboardDiv')[0].style = '\n         height:' + height + 'px;\n         overflow:auto;\n      ';
    },
    dealIndicator: function dealIndicator(urls) {
      if (urls && urls.length > 1) {
        return '';
      } else {
        return 'none';
      }
    },
    dealArrow: function dealArrow(urls) {
      if (urls && urls.length > 1) {
        return '';
      } else {
        return 'never';
      }
    },
    singleProjectList: function singleProjectList() {
      var _this2 = this;

      Object(_api_project_project__WEBPACK_IMPORTED_MODULE_2__["singleProjectList"])({}).then(function (res) {
        if (res.success) {
          _this2.projectList = res.result;
          _utils_tableAttach__WEBPACK_IMPORTED_MODULE_9__["default"].getUrlList(res.result).then(function (urlList) {
            _this2.projectList = _this2.projectList.map(function (item, index) {
              console.log(item.remark.length);
              if (item.remark.length > 173) {
                item.content = item.remark.slice(0, 170);
              } else {
                item.content = item.remark;
              }
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { urls: urlList[index] });
            });
          });
        }
      });
    },
    toSupervisionSys: function toSupervisionSys(item) {
      Object(_api_login__WEBPACK_IMPORTED_MODULE_10__["getAppUrl"])({ code: this.thirdParty.code }).then(function (res) {
        if (res.success) {
          window.open(res.result.appUrl + '&projectId=' + item.id);
        }
      });
    },
    turnTo: function turnTo(type, item) {
      if (type === 'supervision') {
        this.toSupervisionSys(item);
      } else {
        this.$storage.setStorage('project', item);
        this.$storage.setStorage('projectType', type);
        // location.reload()
        Object(_utils_refreshRoutes__WEBPACK_IMPORTED_MODULE_12__["refreshRoutes"])(this);
      }
    }
  }
});

/***/ }),

/***/ "fsGd":
/*!*******************************************************************!*\
  !*** ./src/views/dashboard/indexOld.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./indexOld.vue?vue&type=script&lang=js& */ "c4st");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "kjhd":
/*!**************************************************************************************************!*\
  !*** ./src/views/dashboard/indexOld.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./indexOld.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "9C19");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "nADw":
/*!*************************************************************************!*\
  !*** ./src/views/dashboard/indexOld.vue?vue&type=template&id=89306b6e& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_template_id_89306b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./indexOld.vue?vue&type=template&id=89306b6e& */ "TWvS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_template_id_89306b6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexOld_vue_vue_type_template_id_89306b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);