(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-40b2"],{

/***/ "13Cp":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/index.vue?vue&type=template&id=01be1f86& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sysHomeDiv"},[_c('div',{staticClass:"dashboardDiv"},[_c('div',{staticClass:"backgroundImg",style:({height:'100%',backgroundImage:'url('+_vm.background+')',backgroundSize:'cover'})},[_c('div',{staticClass:"flex flex-center"},[_c('div',{staticClass:"buttonClass"},_vm._l((_vm.projectList),function(item){return _c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],key:item.id,class:_vm.showProjectList.id === item.id?'buttonClassOne':'buttonClassTwo',attrs:{"round":""},on:{"click":function($event){return _vm.clickButton(item)}}},[_vm._v(_vm._s(item.shortName))])}),1)]),_vm._v(" "),_c('div',{staticClass:"flex flex-center bottomDiv"},[_c('div',{staticClass:"textDiv"},[_c('div',{staticClass:"projectRemark"},[_vm._v(_vm._s(_vm.showProjectList.remark))]),_vm._v(" "),_c('div',{staticClass:"flex bottomButtonDiv flex-center"},[(!_vm.judgePrivileges('JY_P_platform_js'))?_c('el-button',{staticClass:"bottomButton",attrs:{"round":""},on:{"click":function($event){return _vm.turnTo('construct')}}},[_vm._v("建设")]):_vm._e(),_vm._v(" "),(!_vm.judgePrivileges('JY_P_platform_zx'))?_c('el-button',{staticClass:"bottomButton",attrs:{"round":""},on:{"click":function($event){return _vm.turnTo('consult')}}},[_vm._v("BIM")]):_vm._e(),_vm._v(" "),(!_vm.judgePrivileges('JY_P_platform_jl'))?_c('el-button',{staticClass:"bottomButton",attrs:{"round":""},on:{"click":function($event){return _vm.turnTo('supervision')}}},[_vm._v("监理")]):_vm._e(),_vm._v(" "),_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_platform_st'),expression:"'P_platform_st'"}],staticClass:"bottomButton",attrs:{"round":""},on:{"click":function($event){return _vm.turnTo('drawing')}}},[_vm._v("审图")])],1)])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "ATS1":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "LvVK":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils */ "7Qib");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      showProjectList: { remark: '', id: '', urls: '' },
      sysBanner1: _assets_dashboard_sysBanner1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      sysBanner2: _assets_dashboard_sysBanner2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      consult: _assets_dashboard_consult_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      construct: _assets_dashboard_construct_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      supervision: _assets_dashboard_supervision_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      imgHeight: 300,
      height: 700,
      thirdParty: {},
      backgroundSize: '100% 100%',
      background: null,
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
    judgePrivileges: _utils__WEBPACK_IMPORTED_MODULE_13__["judgePrivileges"],
    /**
     * 项目按钮点击事件
     * @function clickButton
     */
    clickButton: function clickButton(item) {
      var _this = this;

      this.projectList.forEach(function (val) {
        if (val.id === item.id) {
          _this.showProjectList = val;
          _this.background = _this.showProjectList.urls.length ? _this.showProjectList.urls[0].url : '';
        }
      });
    },
    getApp: function getApp() {
      var _this2 = this;

      Object(_api_system_authority__WEBPACK_IMPORTED_MODULE_11__["appList"])({}).then(function (res) {
        if (res.success) {
          if (res.result.length > 0) {
            _this2.thirdParty = res.result[0];
          }
        }
      });
    },
    styleFun: function styleFun(img) {
      return '\n            background:url(' + img + ') center center no-repeat;\n            height:' + this.imgHeight + 'px;\n            background-size:cover;\n         ';
    },
    initHeight: function initHeight() {
      var height = document.getElementById('app').clientHeight - 130;
      if (height > 900) {
        this.desContentStyle = '\n            display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 6;\n        overflow: hidden;\n        ';
      }
      this.imgHeight = (height - 100) / 2;
      this.height = height;
      // document.getElementsByClassName('dashboardDiv')[0].style = `
      //    height:${height}px;
      //    overflow:hidden;
      // `
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
      var _this3 = this;

      Object(_api_project_project__WEBPACK_IMPORTED_MODULE_2__["singleProjectList"])({}).then(function (res) {
        if (res.success) {
          _this3.projectList = res.result;
          _utils_tableAttach__WEBPACK_IMPORTED_MODULE_9__["default"].getUrlList(res.result).then(function (urlList) {
            _this3.projectList = _this3.projectList.map(function (item, index) {
              console.log(item.remark.length);
              if (item.remark.length > 173) {
                item.content = item.remark.slice(0, 170);
              } else {
                item.content = item.remark;
              }
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { urls: urlList[index] });
            });
            _this3.showProjectList = _this3.projectList[0];
            _this3.background = _this3.showProjectList.urls.length ? _this3.showProjectList.urls[0].url : '';
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
    turnTo: function turnTo(type) {
      if (type === 'supervision') {
        this.toSupervisionSys(this.showProjectList);
      } else {
        this.$storage.setStorage('project', this.showProjectList);
        this.$storage.setStorage('projectType', type);
        // location.reload()
        Object(_utils_refreshRoutes__WEBPACK_IMPORTED_MODULE_12__["refreshRoutes"])(this);
      }
    }
  }
});

/***/ }),

/***/ "MORE":
/*!****************************************************************!*\
  !*** ./src/views/dashboard/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "LvVK");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "QFhp":
/*!**********************************************************************!*\
  !*** ./src/views/dashboard/index.vue?vue&type=template&id=01be1f86& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_01be1f86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=01be1f86& */ "13Cp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_01be1f86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_01be1f86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "e5Uf":
/*!***********************************************************************************************!*\
  !*** ./src/views/dashboard/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "ATS1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "lAbF":
/*!***************************************!*\
  !*** ./src/views/dashboard/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_01be1f86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=01be1f86& */ "QFhp");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "MORE");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "e5Uf");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_01be1f86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_01be1f86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);