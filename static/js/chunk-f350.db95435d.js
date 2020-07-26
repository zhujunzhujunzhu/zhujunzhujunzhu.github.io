(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-f350"],{

/***/ "0ThU":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/investControl/investPlan/commandPlanEditDetail.vue?vue&type=template&id=ba5cbf80& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container CommandPlanEditDetailDiv"},[_c('my-card',{attrs:{"title":_vm.title}},[_c('div',[_c('div',{staticClass:"topDiv flex flex-middle flex-space-between mb10"},[_c('div',{staticClass:"flex flex-middle"},[_c('div',{staticClass:"inlineBlock"},[_c('label',[_vm._v("周期：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.dataName))])]),_vm._v(" "),(_vm.initInfo.status!=='add')?_c('div',{staticClass:"inlineBlock"},[_c('label',[_vm._v("标段：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.tendersName))])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"flex flex-middle"},[(_vm.releaseBoolean)?_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_xdjhxq_bj'),expression:"'P_xdjhxq_bj'"},{name:"waves",rawName:"v-waves"}],staticClass:"addButton",attrs:{"type":"primary"},on:{"click":_vm.goEdit}},[_vm._v(_vm._s(_vm.isEdit?'取消编辑':'启动编辑'))]):_vm._e(),_vm._v(" "),(_vm.isEdit)?_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"addButton",attrs:{"type":"primary"},on:{"click":_vm.save}},[_vm._v("保存")]):_vm._e(),_vm._v(" "),_c('div',[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],class:_vm.buttonClass,attrs:{"disabled":_vm.isEdit,"type":"primary"},on:{"click":_vm.getBack}},[_vm._v("返回")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"},{name:"button-privilege",rawName:"v-button-privilege",value:('P_xdjhxq_fb'),expression:"'P_xdjhxq_fb'"}],class:_vm.buttonClass,attrs:{"disabled":_vm.isEdit,"type":"primary","loading":_vm.buttonLoading},on:{"click":_vm.issue}},[_vm._v("发布")])],1),_vm._v(" "),_c('span',[_vm._v("单位：元")])],1)])]),_vm._v(" "),_c('tree-table',{attrs:{"data":_vm.list,"expand-all":true,"columns":_vm.columns,"list-loading":_vm.listLoading,"border":""}})],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "924h":
/*!*************************************************************************************************************!*\
  !*** ./src/views/project/investControl/investPlan/commandPlanEditDetail.vue?vue&type=template&id=ba5cbf80& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_template_id_ba5cbf80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./commandPlanEditDetail.vue?vue&type=template&id=ba5cbf80& */ "0ThU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_template_id_ba5cbf80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_template_id_ba5cbf80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "Cjj5":
/*!***************************************!*\
  !*** ./src/directive/resize/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize */ "hYTF");


var install = function install(Vue) {
  Vue.directive('resize', _resize__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

if (window.Vue) {
  window['resize'] = _resize__WEBPACK_IMPORTED_MODULE_0__["default"];
  Vue.use(install); // eslint-disable-line
}

_resize__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;
/* harmony default export */ __webpack_exports__["default"] = (_resize__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "HdAu":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/investControl/investPlan/commandPlanEditDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "SAob":
/*!*******************************************************************************************************!*\
  !*** ./src/views/project/investControl/investPlan/commandPlanEditDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./commandPlanEditDetail.vue?vue&type=script&lang=js& */ "t4ef");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "Tp6F":
/*!**************************************************************************************************************************************!*\
  !*** ./src/views/project/investControl/investPlan/commandPlanEditDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./commandPlanEditDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "HdAu");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_commandPlanEditDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "hYTF":
/*!****************************************!*\
  !*** ./src/directive/resize/resize.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function bind(el, binding) {
    var options = binding.value;
    // 创建拖拽线 并挂载到元素上
    el.style = '\n     position:relative;\n     -webkit-user-select:none;\n     -moz-user-select:none;\n     -ms-user-select:none;\n     user-select:none\n  ';
    var minWidth = 300;
    var maxWidth = 700;
    if (options) {
      if (options.minWidth) {
        minWidth = options.minWidth;
      }
      if (options.maxWidth) {
        maxWidth = options.maxWidth;
      }
    }

    var resizeDiv = document.createElement('div');
    var baseStyle = '\n    position:absolute;\n    top:0;\n    bottom:0;\n    right:0;\n    width:15px;\n    cursor: e-resize;\n ';
    resizeDiv.style = baseStyle;
    // 样式的处理
    resizeDiv.onmouseenter = function () {
      resizeDiv.style = baseStyle + '\n      border-right: 1px dashed #ccc;\n      ';
    };
    resizeDiv.onmouseout = function () {
      resizeDiv.style = baseStyle;
    };

    el.appendChild(resizeDiv);
    var isDown = false;
    var disX = 0; // 鼠标按下时光标的X值
    var disW = 0; // 拖拽前div的宽
    resizeDiv.onmousedown = function (ev) {
      isDown = true;
      ev = ev || window.event;
      disX = ev.clientX; // 获取鼠标按下时光标x的值
      disW = el.offsetWidth; // 获取拖拽前div的宽
      document.onmousemove = function (ev) {
        if (!isDown) return;
        ev = ev || window.event;
        var W = ev.clientX - disX + disW;
        if (W < minWidth) {
          W = minWidth;
        }
        if (W > maxWidth) {
          W = maxWidth;
        }
        el.style.width = W + 'px'; // 拖拽后物体的宽
      };
      document.onmouseup = function () {
        isDown = false;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
});

/***/ }),

/***/ "ppYz":
/*!******************************************************************************!*\
  !*** ./src/views/project/investControl/investPlan/commandPlanEditDetail.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commandPlanEditDetail_vue_vue_type_template_id_ba5cbf80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commandPlanEditDetail.vue?vue&type=template&id=ba5cbf80& */ "924h");
/* harmony import */ var _commandPlanEditDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commandPlanEditDetail.vue?vue&type=script&lang=js& */ "SAob");
/* empty/unused harmony star reexport *//* harmony import */ var _commandPlanEditDetail_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commandPlanEditDetail.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "Tp6F");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _commandPlanEditDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _commandPlanEditDetail_vue_vue_type_template_id_ba5cbf80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _commandPlanEditDetail_vue_vue_type_template_id_ba5cbf80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "commandPlanEditDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "qSzo":
/*!*********************************!*\
  !*** ./src/assets/loading1.gif ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhZAAUAKUkAJCapZCbpZGbppOdp5agqpahqZqjrZ2nr6GqsqOstaSttaiwuKqzuq62vrC4vrK6wLa9w7zDycDGzMbM0crP08rP1M3S1s7T19HV2dLW2tTY3Njb39/i5ODj5eLl5+Ll6Obo6unr7ers7uzv8P///////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJDQA/ACwAAAAAZAAUAAAG4cCfcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter9MkMcDLns9h4DaoDG7rxy1XG05jj4i5T2f3C/9fXh6gk4Gc3IDRhdyEUiLao1HjwGRkoyOl5aQTXGHcnVDI4cdRqJzpEWmcqipo6WuradMGJ5yE0QZh7dFuXO7uLpHvbZGw2q/Q8YByEgbtWoURB+HF0bTc9VF13LZ2tTW397YTQPPIUUNcgpI6WrrR+0B7/Dq7PX07k4TtRDCExVKMvwLOJAgwCQCDyJJCEXCoQdvIlYZMaEiCIkYM2rcyLGjx48gQz4JAgAh+QQJDQA/ACwAAAAAZAAUAAAG+sCfcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter9ZkMcDLk9HnhDScwi4DRqznAlxBxajIsfOtxxHHyJKgIKDgYaFSIRQD3wBCEUGjm4DRhd2EUiXbpmamJ6coAGdTCCTAXFCe6cBfkMjjh1GsHyys7G3tbl2tksYpxNDv6zBQxmOxUTHfMnKyEbLds1C0W7TSKuOFEMbrAHbQx+OF0bifOTl4+nn63boTG18A3lDA6xqRA12Ckj6bvz99gX8NzAAwCYeCNgZkGrIhFMQjmSYUEHJxIoWKWbEiOSilAkg6RWR4OjBnJNVRoCcAAKly5cwY8qcSbOmzZtCggAAIfkECQ0APwAsAAAAAGQAFAAABv7An3BILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/YCPI4wmboyNPCOk5BN4Gzdk8+oiSkHdgMSpy9IAWR3V3SoSGdoiFTxd6EUcPgAEIRQaSbwNGjW+PSJsBnZqOnqNOI5IdRSCXAXJCf6wBgkOngKlGtXq3RLlvu7SoThmSE0UYrMVCx7HJQsOAzUTPetHOxEbTb9VJH5IXfqwUQxuxAeJD3YDfRul660Ttb+/o3k8NegpHboADfUMDsdYQufcmHxKCAQwaQaiwCMMoGSZUYENAzwBXQyawgnAk4kQlHkFKFPmxy4ST/opIkPRgjssqI05OAPGyps2bOHPq3MmzpwLLIAAh+QQJDQA/ACwAAAAAZAAUAAAG/sCfcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter9gKcjjCZujI08I6TkA3gbN2Tr6iJT1+xHyBiRGRRxvAoRvFkl5eHaKek8XfRFIj2+RRQ8AhAIABUUGhYMCA5KQo5SlAJVNI5iFHUarmQCuQyCYfZoSQxyarH0Ah0Wwra+smrNEwsZOGbyYE0bMt89DGJrWmAzUg6CE00TRg95D4M7QzQLiSh+9ABdG65/uura8Ag5DG9e+ABTv7PJE4PECOETgG4JLGgxSgEQhJoZF3NwC0OjHgG231hhxKADixoUNQULJMKFfEpImi3goQC9DkQm9eEE4WVIJSps15xiZwBOQGxEJtwQ80El0ygieE0AUXcq0qdOnUKNKnfokCAAh+QQJDQA/ACwAAAAAZAAUAAAG/sCfcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter9gMMjjCZujI08I6TkE3gbNGTn6iJT1ezKfhLwDCyNFHH+FFnR2eIlQF38RSI1vj0eRAZNFD4UBCEUGmm8DlI6Qo04jmh1Gp4WpRat/rUMgnwFyQoS0AYdEr2+xQ70Bv0oZmhNGxYXHRcl/y0MYtM/Ruc9CzW/W18ZOH5oXRt6F4EXif+RDuJoUQxu5AexE5m/oQ/MB9UsNfwpI+2/9jvwLELCIm0IDBA0ZkGtNkYEFH/KLkmFCBWIWMV484oHAnwG2hkygBQFJxY0mM86hMqGlwiISND1YSXPKiJYTQNTcybOnCc+fQIMKHfojCAAh+QQJDQA/ACwAAAAAZAAUAAAG/sCfcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gMBPk8YjPz5EnhPQcAnCDxjv6iJT1ezKPtychcAELI0UcgYcWR3xRF4ERSI1wj0eRAZNGlZdED4cBCEUGnXADmI5QI50dRqiHqkWsga5EsHCyQiCiAXNChrkBiUO0AbZLGZ0TRsaHyEXKgcxEznDQQhi50Na+1NIB1EsfnRdG4IfiReSB5kTocOq8uRRDG74B8UPsAe5MDYEKSPxw/B0BGECgEYIGibw5NIDQkAG+2BBBKCXDhApKLGJMojHjxTYEAg3YNWRCLghHOqIRM6GlwyISOj1YSXPKiJYTQNTcybOnCM+fQIMKRRMEACH5BAkNAD8ALAAAAABkABQAAAb+wJ9wSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CwFuTxiM/PkSeE9BwCcIMGOvqIlPV7Mo+3L/lIEHABCyNFHIOJFk4XgxFIjXCPR5EBk0aVl5iORw+JAQhFBp9wA00jnx1GqImqRayDrkSwcLKzqUUgpAFzQoi7AYtLGZ8TRsSJxkXIg8pEzHDOz8VFGLvO1sDSSB+fF0bdid9F4YPjROVw5+jeh7sUQxvAAfBMDYMKSPdw+Uf7Af2M/AsoEN+RN4kGGBoyABibJhkmVFAScWKSihQlDtN4xAOBQQN6DZmwCwKak0gmqFxYRMKnByhjRhmhcgIImThz6tzJs6cFz59NggAAIfkEAQ0APwAsAAAAAGQAFAAABuDAn3BILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TK6OPCHp6CNSrtvJt5u9lMfpSEhgvxg9L3sBEUiAe4NHhYKEgYeIjIuGRw+BewhOI5QBHUaYlJtFnYGfRKF7o6SZp0KlmkUgmXsaTRmZE0a0lLZFuIG6RLx7vr+1t8REGLABwkkfmRdGzZTPRdGB00TVe9fYztDdRBzJFE4NgQpI5XvnR+kB60bt7/Dm6PRGB5kDfk4ZExVK/f4lCQjQ3xKCAw0e8UAg0ABZZSJOmUBxn8SLGDNq3Mixo8ePIK8EAQA7"

/***/ }),

/***/ "t4ef":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/investControl/investPlan/commandPlanEditDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "JO7F");
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _components_investTree_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/investTree.vue */ "xFrH");
/* harmony import */ var _components_table_tableList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/table/tableList */ "dARg");
/* harmony import */ var _components_TreeTable_vsTree_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/TreeTable/vsTree.vue */ "AgHI");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _decorator_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/decorator/loading */ "DdcY");
/* harmony import */ var _directive_resize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/directive/resize */ "Cjj5");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");
/* harmony import */ var _api_project_invcbs_investPlan__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/api/project/invcbs/investPlan */ "9dhF");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuex */ "L2JU");



var _dec, _desc, _value, _obj;

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






// import TreeTable from '@/components/TreeTable'






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CommandPlanEditDetail',
  components: {
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_3__["default"],
    TreeTable: _components_TreeTable_vsTree_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    investTree: _components_investTree_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TableList: _components_table_tableList__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_2__["default"],
    resize: _directive_resize__WEBPACK_IMPORTED_MODULE_9__["default"],
    buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      tendersName: '',
      dataName: '',
      buttonLoading: false,
      releaseBoolean: true,
      amountMap: {}, // 调整后的所有合计数值
      diffAmountMap: {}, // //调整后的数据差值
      modifiedAmountMap: {}, // 手动修改后调整的合计
      approvedAmountMap: {}, // 未调整的所有合计数值
      modifiedApprovedAmountMap: {}, // 手动修改后未调整的合计
      modifiedReleasedAmountMap: {}, // 手动修改后的合计

      isEdit: false, // 是否可编辑按钮
      title: '下达计划详情（可编辑）',
      approvedType: '', // 是否调整过
      list: [],
      backupsList: [],
      columns: [],
      fixationColumns: [
      // 固定不变的表头
      {
        text: '形象类型',
        value: 'name',
        width: 200
      }, {
        text: '单位',
        width: 70,
        value: 'unit',
        filter: _utils__WEBPACK_IMPORTED_MODULE_7__["getNameByCode"],
        filterParams: ['quantity_unit']
      }],
      noAdjustColumns: [], // 未调整的年度计划表头
      adjustColumns: [],
      //   调整的年度计划表头
      addColumns: [
      // 最后剩余的表头
      {
        text: '剩余',
        children: [{
          text: '数量',
          value: 'leftQuantities',
          formatter: this.changeStyle('leftQuantities')
        }, {
          text: '金额',
          value: 'leftAmount',
          formatter: this.changeStyle('leftAmount')
        }]
      }, {
        text: '累计完成占合同百分比%',
        value: 'donePercentage',
        formatter: this.changeStyle('donePercentage')
      }],
      listLoading: false,
      tempList: [],
      listQuery: {
        tendersId: null
      },
      initInfo: {
        status: '' // 三种状态 新增 编辑  查看
      }
    };
  },

  computed: {
    buttonClass: function buttonClass() {
      return {
        'filter-item': true,
        addButtonTow: this.isEdit,
        addButton: !this.isEdit
      };
    }
  },
  mounted: function mounted() {
    this.getInitInfo();
  },

  methods: (_dec = Object(_decorator_loading__WEBPACK_IMPORTED_MODULE_8__["loading"])('listLoading'), (_obj = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapActions"])(['delVisitedViews']), {
    /**
     * 关闭当前标签页
     * @function closeTagView
     */
    closeTagView: function closeTagView() {
      this.delVisitedViews({
        path: 'investControl/investPlan/commandPlanEditDetail'
      });
    },

    /**
     * 获得页面跳转获得的数据
     * @function getInitInfo
     */
    getInitInfo: function getInitInfo() {
      this.initInfo = JSON.parse(this.$storage.getStorage('commandPlanEditDetail'));
      this.title = '下达计划详情';
      // this.initInfo.approvedType = this.initInfo.statut
      this.initInfo.rowData.amount && (this.initInfo.approvedType = 'YTZ');
      this.changeColumns();

      // 获取投资计划列表
      this.tendersName = this.initInfo.rowData.name;
      this.dataName = this.initInfo.treeData.name;
      this.releaseBoolean = this.initInfo.releaseBoolean;
      this.listQuery.tendersId = this.initInfo.rowData.tendersId;
      this.listQuery.invPlanId = this.initInfo.treeData.id;
      this.getInvPlanDataList();
    },

    /**
     * @function changeColumns
     */
    changeColumns: function changeColumns() {
      var _this = this;

      var textName = '年度计划';
      var contractColumns = [{
        text: '施工图总额',
        children: [{
          text: '数量',
          value: 'contractVolume',
          formatter: this.changeStyle('contractVolume')
        }, {
          text: '金额',
          value: 'total',
          formatter: this.changeStyle('total')
        }]
      }];
      this.adjustColumns = [
      // 调整的年度计划表头
      {
        text: textName,
        children: [{
          text: '数量',
          value: 'lastCommandQuantities',
          formatter: this.changeStyle('lastCommandQuantities')
        }, {
          text: '金额',
          value: 'lastCommandAmount',
          formatter: this.changeStyle('lastCommandAmount')
        }]
      },
      /**
      此处数据展示的逻辑为，当有modifiedReleasedQuantities(下达计划处的数量所对应的数据)所展示的就是modifiedReleasedQuantities和modifiedReleasedAmount
      当有modifiedPlanQuantities就展示modifiedPlanQuantities和modifiedPlanAmount，最后展示的是planQuantities和amount
       */
      {
        text: textName + '（调整）',
        children: [{
          text: '数量',
          width: 150,
          render: function render(h, param) {
            if (param.row.leaf && _this.isEdit) {
              if (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0) {
                return h('el-input', {
                  attrs: {
                    value: param.row.modifiedReleasedQuantities,
                    type: 'number'
                  },
                  on: {
                    input: function input(e) {
                      _this.$set(param.row, 'modifiedReleasedQuantities', e);
                      _this.dealamountMap(param, e);
                    }
                  }
                });
              } else if (param.row.modifiedPlanQuantities || param.row.modifiedPlanQuantities === 0) {
                return h('el-input', {
                  attrs: {
                    value: param.row.modifiedPlanQuantities,
                    type: 'number'
                  },
                  on: {
                    input: function input(e) {
                      _this.$set(param.row, 'modifiedPlanQuantities', e);
                      _this.dealamountMap(param, e);
                    }
                  }
                });
              } else {
                return h('el-input', {
                  attrs: {
                    value: param.row.planQuantities,
                    type: 'number'
                  },
                  on: {
                    input: function input(e) {
                      _this.$set(param.row, 'planQuantities', e);
                      _this.dealamountMap(param, e);
                    }
                  }
                });
              }
            } else {
              if (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0) {
                var planQuantities = param.row.modifiedPlanQuantities ? param.row.modifiedPlanQuantities : param.row.planQuantities;
                if (param.row.modifiedReleasedQuantities !== planQuantities) {
                  return h('span', {
                    domProps: {
                      innerHTML: '<span style="display: inline-block;width: 100px;text-align: right;color:#3f9cfc">' + (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0 ? (param.row.modifiedReleasedQuantities * 1).toFixed(2) : '-') + '</span>'
                    }
                  });
                } else {
                  return h('span', {
                    domProps: {
                      innerHTML: '<span style="display: inline-block;width: 100px;text-align: right">' + (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0 ? (param.row.modifiedReleasedQuantities * 1).toFixed(2) : '-') + '</span>'
                    }
                  });
                }
              } else if (param.row.modifiedPlanQuantities || param.row.modifiedPlanQuantities === 0) {
                return h('span', {
                  domProps: {
                    innerHTML: '<span style="display: inline-block;width: 100px;text-align: right">' + (param.row.modifiedPlanQuantities || param.row.modifiedPlanQuantities === 0 ? (param.row.modifiedPlanQuantities * 1).toFixed(2) : '-') + '</span>'
                  }
                });
              } else {
                return h('span', {
                  domProps: {
                    innerHTML: '<span style="display: inline-block;width: 100px;text-align: right">' + (param.row.planQuantities || param.row.planQuantities === 0 ? (param.row.planQuantities * 1).toFixed(2) : '-') + '</span>'
                  }
                });
              }
            }
          }
        },
        // modifiedAmountMap
        {
          text: '金额',
          value: 'amount',
          // formatter: this.changeStyle('amount')
          formatter: function formatter(val) {
            if ('modifiedReleasedAmount' in val) {
              if (_this.modifiedReleasedAmountMap[val.id] !== undefined && _this.modifiedReleasedAmountMap[val.id] !== null) {
                return '<span class=\'flex-end\'>' + _this.modifiedReleasedAmountMap[val.id].toFixed(2) + '</span>';
              } else {
                return '';
              }
            } else if ('modifiedAmount' in val) {
              if (_this.modifiedAmountMap[val.id] !== undefined && _this.modifiedAmountMap[val.id] !== null) {
                return '<span class=\'flex-end\'>' + _this.modifiedAmountMap[val.id].toFixed(2) + '</span>';
              } else {
                return '';
              }
            } else {
              if (_this.amountMap[val.id] !== undefined && _this.amountMap[val.id] !== null) {
                return '<span class=\'flex-end\'>' + _this.amountMap[val.id].toFixed(2) + '</span>';
              } else {
                return '';
              }
            }
          }
        }]
      }, {
        text: '开累预计完成',
        children: [{
          text: '数量',
          value: 'resultPlanQuantities',
          formatter: this.changeStyle('resultPlanQuantities')
        }, {
          text: '金额',
          value: 'resultAmount',
          formatter: this.changeStyle('resultAmount')
        }]
      }];
      this.noAdjustColumns = [
      // 未调整的年度计划表头
      /**
       * 此处为展示的数据可能为先调整后，再进行发布的可能。'amount'这个字段就为展示是否已经调整过的可能，因此通过该字段来判断是否调整过
       * 当已调整过了，当有了modifiedReleasedQuantities就先展示了modifiedReleasedQuantities和modifiedReleasedAmount，
       * 接着有了modifiedPlanQuantities就展示modifiedPlanQuantities和modifiedAmount
       * 最后展示planQuantities和amount
       * 接着没有调整逻辑就是modifiedReleasedQuantities >modifiedApprovedPlanQuantities>approvedPlanQuantities
       */
      {
        text: textName,
        sortable: false,
        children: [{
          text: '数量',
          width: 150,
          render: function render(h, param) {
            if (param.row.leaf && _this.isEdit) {
              if ('amount' in param.row) {
                if (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0) {
                  return h('el-input', {
                    attrs: {
                      value: param.row.modifiedReleasedQuantities,
                      type: 'number'
                    },
                    on: {
                      input: function input(e) {
                        _this.$set(param.row, 'modifiedReleasedQuantities', e);
                        _this.dealamountMap(param, e);
                      }
                    }
                  });
                } else if (param.row.modifiedPlanQuantities || param.row.modifiedPlanQuantities === 0) {
                  return h('el-input', {
                    attrs: {
                      value: param.row.modifiedPlanQuantities,
                      type: 'number'
                    },
                    on: {
                      input: function input(e) {
                        _this.$set(param.row, 'modifiedPlanQuantities ', e);
                        _this.dealamountMap(param, e);
                      }
                    }
                  });
                } else {
                  return h('el-input', {
                    attrs: {
                      value: param.row.planQuantities,
                      type: 'number'
                    },
                    on: {
                      input: function input(e) {
                        _this.$set(param.row, 'planQuantities', e);
                        _this.dealamountMap(param, e);
                      }
                    }
                  });
                }
              } else {
                if (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0) {
                  return h('el-input', {
                    attrs: {
                      value: param.row.modifiedReleasedQuantities,
                      type: 'number'
                    },
                    on: {
                      input: function input(e) {
                        console.log(_this.list);
                        _this.$set(param.row, 'modifiedReleasedQuantities', e);
                        _this.dealamountMap(param, e);
                      }
                    }
                  });
                } else if (param.row.modifiedApprovedPlanQuantities || param.row.modifiedApprovedPlanQuantities === 0) {
                  return h('el-input', {
                    attrs: {
                      value: param.row.modifiedApprovedPlanQuantities,
                      type: 'number'
                    },
                    on: {
                      input: function input(e) {
                        console.log(_this.list);
                        _this.$set(param.row, 'modifiedApprovedPlanQuantities', e);
                        _this.dealamountMap(param, e);
                      }
                    }
                  });
                } else {
                  return h('el-input', {
                    attrs: {
                      value: param.row.approvedPlanQuantities,
                      type: 'number'
                    },
                    on: {
                      input: function input(e) {
                        console.log(_this.list);
                        _this.$set(param.row, 'approvedPlanQuantities', e);
                        _this.dealamountMap(param, e);
                      }
                    }
                  });
                }
              }
            } else {
              if ('amount' in param.row) {
                if (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0) {
                  var modifiedPlanQuantities = param.row.modifiedPlanQuantities || param.row.modifiedPlanQuantities === 0 ? param.row.modifiedPlanQuantities : param.row.planQuantities;
                  if (param.row.modifiedReleasedQuantities !== modifiedPlanQuantities) {
                    return h('span', {
                      domProps: {
                        innerHTML: '<span style="display: inline-block;width: 100px;text-align: right;color:#3f9cfc">' + (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0 ? (param.row.modifiedReleasedQuantities * 1).toFixed(2) : '-') + '</span>'
                      }
                    });
                  } else {
                    return h('span', {
                      domProps: {
                        innerHTML: '<span style="display: inline-block;width: 100px;text-align: right">' + (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0 ? (param.row.modifiedReleasedQuantities * 1).toFixed(2) : '-') + '</span>'
                      }
                    });
                  }
                } else if (param.row.modifiedPlanQuantities || param.row.modifiedPlanQuantities === 0) {
                  return h('span', {
                    domProps: {
                      innerHTML: '<span style="display: inline-block;width: 100px;text-align: right">' + (param.row.modifiedPlanQuantities || param.row.modifiedPlanQuantities === 0 ? (param.row.modifiedPlanQuantities * 1).toFixed(2) : '-') + '</span>'
                    }
                  });
                } else {
                  return h('span', {
                    domProps: {
                      innerHTML: '<span style="display: inline-block;width: 100px;text-align: right">' + (param.row.planQuantities || param.row.planQuantities === 0 ? (param.row.planQuantities * 1).toFixed(2) : '-') + '</span>'
                    }
                  });
                }
              } else {
                if (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0) {
                  var modifiedApprovedPlanQuantities = param.row.modifiedApprovedPlanQuantities || param.row.modifiedApprovedPlanQuantities === 0 ? param.row.modifiedApprovedPlanQuantities : param.row.approvedPlanQuantities;
                  if (param.row.modifiedReleasedQuantities !== modifiedApprovedPlanQuantities) {
                    return h('span', {
                      domProps: {
                        innerHTML: '<span style="display: inline-block;width: 100px;text-align: right;color:#3f9cfc">' + (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0 ? (param.row.modifiedReleasedQuantities * 1).toFixed(2) : '-') + '</span>'
                      }
                    });
                  } else {
                    return h('span', {
                      domProps: {
                        innerHTML: '<span style="display: inline-block;width: 100px;text-align: right">' + (param.row.modifiedReleasedQuantities || param.row.modifiedReleasedQuantities === 0 ? (param.row.modifiedReleasedQuantities * 1).toFixed(2) : '-') + '</span>'
                      }
                    });
                  }
                } else if (param.row.modifiedApprovedPlanQuantities || param.row.modifiedApprovedPlanQuantities === 0) {
                  return h('span', {
                    domProps: {
                      innerHTML: '<span style="display: inline-block;width: 100px;text-align: right">' + (param.row.modifiedApprovedPlanQuantities || param.row.modifiedApprovedPlanQuantities === 0 ? (param.row.modifiedApprovedPlanQuantities * 1).toFixed(2) : '-') + '</span>'
                    }
                  });
                } else {
                  return h('span', {
                    domProps: {
                      innerHTML: '<span style="display: inline-block;width: 100px;text-align: right">' + (param.row.approvedPlanQuantities || param.row.approvedPlanQuantities === 0 ? (param.row.approvedPlanQuantities * 1).toFixed(2) : '-') + '</span>'
                    }
                  });
                }
              }
            }
          }
        }, {
          text: '金额',
          value: 'approvedAmount',
          // formatter: this.changeStyle('approvedAmount')
          formatter: function formatter(val) {
            if ('amount' in val) {
              if ('modifiedReleasedAmount' in val) {
                if (_this.modifiedReleasedAmountMap[val.id] !== undefined && _this.modifiedReleasedAmountMap[val.id] !== null) {
                  return '<span class=\'flex-end\'>' + _this.modifiedReleasedAmountMap[val.id].toFixed(2) + '</span>';
                } else {
                  return '';
                }
              } else if ('modifiedAmount' in val) {
                if (_this.modifiedAmountMap[val.id] !== undefined && _this.modifiedAmountMap[val.id] !== null) {
                  return '<span class=\'flex-end\'>' + _this.modifiedAmountMap[val.id].toFixed(2) + '</span>';
                } else {
                  return '';
                }
              } else {
                if (_this.amountMap[val.id] !== undefined && _this.amountMap[val.id] !== null) {
                  // 断电
                  return '<span class=\'flex-end\'>' + _this.amountMap[val.id].toFixed(2) + '</span>';
                } else {
                  return '';
                }
              }
            } else {
              if ('modifiedReleasedAmount' in val) {
                if (_this.modifiedReleasedAmountMap[val.id] !== undefined && _this.modifiedReleasedAmountMap[val.id] !== null) {
                  return '<span class=\'flex-end\'>' + _this.modifiedReleasedAmountMap[val.id].toFixed(2) + '</span>';
                } else {
                  return '';
                }
              } else if ('modifiedApprovedAmount' in val) {
                if (_this.modifiedApprovedAmountMap[val.id] !== undefined && _this.modifiedApprovedAmountMap[val.id] !== null) {
                  return '<span class=\'flex-end\'>' + _this.modifiedApprovedAmountMap[val.id].toFixed(2) + '</span>';
                } else {
                  return '';
                }
              } else {
                if (_this.approvedAmountMap[val.id] !== undefined && _this.approvedAmountMap[val.id] !== null) {
                  return '<span class=\'flex-end\'>' + _this.approvedAmountMap[val.id].toFixed(2) + '</span>';
                } else {
                  return '';
                }
              }
            }
          }
        }]
      }, {
        text: '开累预计完成',
        sortable: false,
        children: [{
          text: '数量',
          value: 'resultPlanQuantities',
          formatter: this.changeStyle('resultPlanQuantities')
        }, {
          text: '金额',
          value: 'resultAmount',
          formatter: this.changeStyle('resultAmount')
        }]
        // }
      }];

      // 是否已调整调整
      var columns = void 0;
      if (this.initInfo.approvedType === 'YTZ' && this.initInfo.statut === 'YTZ') {
        columns = this.fixationColumns.concat(contractColumns).concat(this.adjustColumns.concat(this.addColumns));
      } else {
        columns = this.fixationColumns.concat(contractColumns).concat(this.noAdjustColumns.concat(this.addColumns));
      }
      this.columns = columns;
    },
    getInvPlanDataList: function getInvPlanDataList() {
      var _this2 = this;

      return Object(_api_project_invcbs_investPlan__WEBPACK_IMPORTED_MODULE_11__["invPlanDataList"])(this.listQuery).then(function (res) {
        if (res.success) {
          _this2.list = res.result;
          _this2.backupsList = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["deepCloneArray"])(res.result); // 备份深度拷贝数据
          _this2.setData(res.result);
        }
      });
    },

    /**
     * 处理手动需要动态更新的数据
     * @function setData
     * @param data 需要處理的數據
     */
    //  approvedAmountMap
    /**
     * 此处为Map数据的动态更新，将数据的动态更新数据，使得界面展示的实时动态更新
     */
    setData: function setData(data) {
      var _this3 = this;

      data.forEach(function (item) {
        if (item.diffAmount || item.diffAmount === 0) {
          if ('modifiedReleasedAmount' in item) {
            if (item.modifiedReleasedAmount !== null && item.modifiedReleasedAmount !== undefined) {
              _this3.$set(_this3.modifiedReleasedAmountMap, item.id, item.modifiedReleasedAmount);
            } else {
              _this3.$set(_this3.modifiedReleasedAmountMap, item.id, '');
            }
          } else if ('modifiedAmount' in item) {
            if (item.modifiedAmount !== null && item.modifiedAmount !== undefined) {
              _this3.$set(_this3.modifiedAmountMap, item.id, item.modifiedAmount);
            } else {
              _this3.$set(_this3.modifiedAmountMap, item.id, '');
            }
          } else {
            if (item.amount !== null && item.amount !== undefined) {
              _this3.$set(_this3.amountMap, item.id, item.amount);
            } else {
              _this3.$set(_this3.amountMap, item.id, '');
            }
          }
          if (item.diffAmount !== null && item.diffAmount !== undefined) {
            _this3.$set(_this3.diffAmountMap, item.id, item.diffAmount);
          } else {
            _this3.$set(_this3.diffAmountMap, item.id, '');
          }
        } else {
          // 未调整的数据中，拥有两个不同的合计行，一个是modifiedApprovedAmount，一个是approvedAmountMap，前一个包括了后面一个中的数据
          if ('modifiedReleasedAmount' in item) {
            if (item.modifiedReleasedAmount !== undefined && item.modifiedReleasedAmount !== null) {
              _this3.$set(_this3.modifiedReleasedAmountMap, item.id, item.modifiedReleasedAmount);
            } else {
              _this3.$set(_this3.modifiedReleasedAmountMap, item.id, '');
            }
          } else if ('modifiedApprovedAmount' in item) {
            if (item.modifiedApprovedAmount !== undefined && item.modifiedApprovedAmount !== null) {
              _this3.$set(_this3.modifiedApprovedAmountMap, item.id, item.modifiedApprovedAmount);
            } else {
              _this3.$set(_this3.modifiedApprovedAmountMap, item.id, '');
            }
          } else {
            if (item.approvedAmount !== undefined && item.approvedAmount !== null) {
              _this3.$set(_this3.approvedAmountMap, item.id, item.approvedAmount);
            } else {
              _this3.$set(_this3.approvedAmountMap, item.id, '');
            }
          }
        }
      });
    },

    /**
     * 将数据小数点后保留两位有效数字
     * @function changeStyle
     */
    changeStyle: function changeStyle(att) {
      return function (val) {
        // approvedAmount
        // 需要注意0.0的情况
        if (att === 'donePercentage') {
          return '<span  class="flex-end">' + (val.donePercentage || val.donePercentage === 0 ? (val.donePercentage * 100).toFixed(2) + '%' : '-') + '</span>';
        } else if (att === 'approvedPlanQuantities') {
          if (val.modifiedReleasedQuantities || val.modifiedReleasedQuantities === 0) {
            return '<span  class="flex-end">' + (val.modifiedReleasedQuantities || val.modifiedReleasedQuantities === 0 ? val.modifiedReleasedQuantities.toFixed(2) : '-') + '</span>';
          } else {
            return '<span  class="flex-end">' + (val.approvedPlanQuantities || val.approvedPlanQuantities === 0 ? val.approvedPlanQuantities.toFixed(2) : '-') + '</span>';
          }
        } else if (att === 'approvedAmount') {
          if (val.modifiedReleasedAmount || val.modifiedReleasedAmount === 0) {
            return '<span  class="flex-end">' + (val.modifiedReleasedAmount || val.modifiedReleasedAmount === 0 ? val.modifiedReleasedAmount.toFixed(2) : '-') + '</span>';
          } else {
            return '<span  class="flex-end">' + (val.approvedAmount || val.approvedAmount === 0 ? val.approvedAmount.toFixed(2) : '-') + '</span>';
          }
        } else if (!(val[att] === undefined || val[att] === null)) {
          return '<span  class="flex-end">' + val[att].toFixed(2) + '</span>';
        } else {
          return '<span  class="flex-end">-</span>';
        }
      };
    },

    /**
     * 发布
     * @function issue
     */
    issue: function issue() {
      var _this4 = this;

      this.buttonLoading = true;
      Object(_api_project_invcbs_investPlan__WEBPACK_IMPORTED_MODULE_11__["changeReleaseStatus"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.listQuery)).then(function (res) {
        if (res.success) {
          _this4.buttonLoading = false;
          _this4.closeTagView();
          _this4.$router.push('/investControl/investPlanIndex');
        }
      });
    },

    /**
     * 返回
     * @function getBack
     */
    getBack: function getBack() {
      this.closeTagView();
      this.$router.push('/investControl/investPlanIndex');
    },

    /**
     * 启动编辑以及取消编辑
     * @function goEdit
     */
    goEdit: function goEdit() {
      this.isEdit = !this.isEdit;
      if (!this.isEdit) {
        this.getInitInfo();
      }
    },

    /**
     * 编辑后保存按钮
     * @function save
     */
    // this.modifiedAmountMap
    //      this.amountMap
    //  this.modifiedApprovedAmountMap
    //  this.approvedAmountMap
    /**
     * 当YTZ时，若先已经手动修改过了modifiedReleasedQuantities这个是有值的，不许对齐赋值，只要将modifiedReleasedAmount获得，
     * modifiedReleasedAmount为modifiedReleasedQuantities（手动修改后的数量）*approvedTargetPrice（指标价）
     * 当下达计划没有手动修改是，若有了modifiedPlanQuantities这个字段，就先将modifiedPlanQuantities赋值给modifiedReleasedQuantities
     * 在获得modifiedReleasedAmount，一样为数量*指标价
     * 最后一种情况就是将planQuantities赋值给modifiedReleasedQuantities，在获得modifiedReleasedAmount
     * 当不为YTZ时，第一种情况是一样的，第二种情况是将modifiedPlanQuantities换成了modifiedApprovedPlanQuantities
     * 第三种情况是将planQuantities换成了approvedPlanQuantities
     */
    save: function save() {
      var _this5 = this;

      var adjustment = void 0;
      var dataList = [];
      if (this.initInfo.approvedType === 'YTZ') {
        adjustment = this.list.map(function (item) {
          if ('modifiedReleasedAmount' in item) {
            item.modifiedReleasedAmount = item.approvedTargetPrice && item.modifiedReleasedQuantities ? item.approvedTargetPrice * item.modifiedReleasedQuantities : 0;
          } else if ('modifiedAmount' in item) {
            item.modifiedReleasedQuantities = item.modifiedPlanQuantities;
            item.modifiedReleasedAmount = item.approvedTargetPrice && item.modifiedPlanQuantities ? item.approvedTargetPrice * item.modifiedPlanQuantities : 0;
          } else {
            item.modifiedReleasedQuantities = item.planQuantities;
            item.modifiedReleasedAmount = item.approvedTargetPrice && item.planQuantities ? item.approvedTargetPrice * item.planQuantities : 0;
          }
          return item;
        });
      } else {
        adjustment = this.list.map(function (item) {
          if ('modifiedReleasedAmount' in item) {
            item.modifiedReleasedAmount = item.approvedTargetPrice && item.modifiedReleasedQuantities ? item.modifiedReleasedQuantities * item.approvedTargetPrice : 0;
          } else {
            if ('modifiedApprovedAmount' in item) {
              item.modifiedReleasedQuantities = item.modifiedApprovedPlanQuantities;
              item.modifiedReleasedAmount = item.approvedTargetPrice && item.modifiedApprovedPlanQuantities ? item.modifiedApprovedPlanQuantities * item.approvedTargetPrice : 0;
            } else {
              item.modifiedReleasedQuantities = item.approvedPlanQuantities;
              item.modifiedReleasedAmount = item.approvedTargetPrice && item.approvedPlanQuantities ? item.approvedPlanQuantities * item.approvedTargetPrice : 0;
            }
          }
          return item;
        });
      }

      adjustment.forEach(function (item) {
        delete item.children;
        delete item.parent;
        _this5.backupsList.forEach(function (inner) {
          delete inner.children;
          delete inner.parent;
          if (item.id === inner.id) {
            if (inner.modifiedReleasedQuantities !== item.modifiedReleasedQuantities && _this5.initInfo.approvedType === 'YTZ') {
              inner.modifiedReleasedQuantities = item.modifiedReleasedQuantities;
              inner.modifiedReleasedAmount = item.modifiedReleasedAmount;
              dataList.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, inner));
            } else if (inner.modifiedReleasedQuantities !== item.modifiedReleasedQuantities && _this5.initInfo.approvedType !== 'YTZ') {
              inner.modifiedReleasedQuantities = item.modifiedReleasedQuantities;
              inner.modifiedReleasedAmount = item.modifiedReleasedAmount;
              dataList.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, inner));
            } else {
              dataList.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, item, inner));
            }
          }
        });
      });
      Object(_api_project_invcbs_investPlan__WEBPACK_IMPORTED_MODULE_11__["savePlanDataList"])({ dataList: dataList, release: true }).then(function (res) {
        if (res.success) {
          _this5.$message({ message: '保存成功', type: 'success' });
          _this5.isEdit = !_this5.isEdit;
          _this5.getInvPlanDataList();
        }
      });
    },

    /**
     * 处理合价映射
     * @function dealamountMap
     * @param params {Object} 包含行信息params.row
     * @param e  {FormEvent} 输入值planQuantities approvedTargetPrice
     */
    // modifiedReleasedQuantities
    /**
     * 此处的逻辑和之前的是一样的，是否YTZ，是否手动修改过
     */
    dealamountMap: function dealamountMap(param, e) {
      // approvedAmount
      var handMovement = false; // 是否为手动修改后的
      if ('amount' in param.row) {
        var diff = void 0;
        var setBoolean = true;
        if ('modifiedReleasedQuantities' in param.row) {
          if (this.modifiedReleasedAmountMap[param.row.id] !== null) {
            var amount = param.row.modifiedReleasedQuantities && param.row.approvedTargetPrice ? param.row.modifiedReleasedQuantities * param.row.approvedTargetPrice : 0;
            diff = amount - this.modifiedReleasedAmountMap[param.row.id]; // 调整后的合计变化后的差值
            var diffAmount = amount - param.row.approvedAmount; // 变化后的合计（调整）-合计=总差值
            this.$set(this.modifiedReleasedAmountMap, param.row.id, amount);
            this.$set(this.diffAmountMap, param.row.id, diffAmount);
            handMovement = true;
          }
        } else if ('modifiedPlanQuantities' in param.row) {
          if (this.modifiedAmountMap[param.row.id] !== null) {
            var _amount = param.row.modifiedPlanQuantities && param.row.approvedTargetPrice ? param.row.modifiedPlanQuantities * param.row.approvedTargetPrice : 0;
            diff = _amount - this.modifiedAmountMap[param.row.id]; // 调整后的合计变化后的差值
            var _diffAmount = _amount - param.row.approvedAmount; // 变化后的合计（调整）-合计=总差值
            this.$set(this.modifiedAmountMap, param.row.id, _amount);
            this.$set(this.diffAmountMap, param.row.id, _diffAmount);
            handMovement = true;
          }
        } else {
          if (this.diffAmountMap[param.row.id] !== null && this.amountMap[param.row.id] !== null) {
            var _amount2 = param.row.planQuantities && param.row.approvedTargetPrice ? param.row.planQuantities * param.row.approvedTargetPrice : 0;
            diff = _amount2 - this.amountMap[param.row.id]; // 调整后的合计变化后的差值
            var _diffAmount2 = _amount2 - param.row.approvedAmount; // 变化后的合计（调整）-合计=总差值
            this.$set(this.amountMap, param.row.id, _amount2);
            this.$set(this.diffAmountMap, param.row.id, _diffAmount2);
          }
        }
        this.recursionDiff(param.row.parentId, diff, setBoolean, handMovement);
      } else {
        var _setBoolean = false;
        var _diff = void 0;
        if ('modifiedReleasedQuantities' in param.row) {
          // 若拥有已经手动修改后的数据，则合计行所对应的数据应该为变化后的
          if (this.modifiedReleasedAmountMap[param.row.id] !== null) {
            var _amount3 = param.row.modifiedReleasedQuantities && param.row.approvedTargetPrice ? param.row.modifiedReleasedQuantities * param.row.approvedTargetPrice : 0;
            _diff = _amount3 - this.modifiedReleasedAmountMap[param.row.id];
            this.$set(this.modifiedReleasedAmountMap, param.row.id, _amount3);
            handMovement = true;
          }
        } else if ('modifiedApprovedPlanQuantities' in param.row) {
          if (this.modifiedApprovedAmountMap[param.row.id] !== null) {
            var _amount4 = param.row.modifiedApprovedPlanQuantities && param.row.approvedTargetPrice ? param.row.modifiedApprovedPlanQuantities * param.row.approvedTargetPrice : 0;
            _diff = _amount4 - this.modifiedApprovedAmountMap[param.row.id];
            this.$set(this.modifiedApprovedAmountMap, param.row.id, _amount4);
            handMovement = true;
          }
        } else {
          // 此为为发生过手动修改的数据
          if (this.approvedAmountMap[param.row.id] !== null) {
            var _amount5 = param.row.approvedPlanQuantities && param.row.approvedTargetPrice ? param.row.approvedPlanQuantities * param.row.approvedTargetPrice : 0;
            _diff = _amount5 - this.approvedAmountMap[param.row.id]; // 差值
            this.$set(this.approvedAmountMap, param.row.id, _amount5);
          }
        }
        this.recursionDiff(param.row.parentId, _diff, _setBoolean, handMovement);
      }
    },

    /**
     * 处理合计值
     * @function recursionDiff
     * @param parentId 父节点id
     * @param diff 改变的差值
     * @param setBoolean 确定是否有调整
     * @param handMovement 是否为手动修改后的数据
     */
    recursionDiff: function recursionDiff(parentId, diff, setBoolean, handMovement) {
      var parentNode = this.list.find(function (_ref) {
        var id = _ref.id;
        return id === parentId;
      });
      if (parentNode) {
        if (setBoolean) {
          if ('modifiedReleasedAmount' in parentNode) {
            var diffAmount = this.diffAmountMap[parentId] + diff;
            var amount = this.modifiedReleasedAmountMap[parentId] + diff;
            this.$set(this.modifiedReleasedAmountMap, parentId, amount);
            this.$set(this.diffAmountMap, parentId, diffAmount);
          } else if ('modifiedAmount' in parentNode) {
            var _diffAmount3 = this.diffAmountMap[parentId] + diff;
            var _amount6 = this.modifiedAmountMap[parentId] + diff;
            this.$set(this.modifiedAmountMap, parentId, _amount6);
            this.$set(this.diffAmountMap, parentId, _diffAmount3);
          } else {
            var _diffAmount4 = this.diffAmountMap[parentId] + diff;
            var _amount7 = this.amountMap[parentId] + diff;
            this.$set(this.amountMap, parentId, _amount7);
            this.$set(this.diffAmountMap, parentId, _diffAmount4);
          }
        } else {
          if ('modifiedReleasedAmount' in parentNode) {
            var _amount8 = this.modifiedReleasedAmountMap[parentId] + diff;
            this.$set(this.modifiedReleasedAmountMap, parentId, _amount8);
          } else if ('modifiedApprovedAmount' in parentNode) {
            var _amount9 = this.modifiedApprovedAmountMap[parentId] + diff;
            this.$set(this.modifiedApprovedAmountMap, parentId, _amount9);
          } else {
            var _amount10 = this.approvedAmountMap[parentId] + diff;
            this.$set(this.approvedAmountMap, parentId, _amount10);
          }
        }
        if (parentNode.parentId) {
          this.recursionDiff(parentNode.parentId, diff, setBoolean, handMovement);
        }
      } else {
        return;
      }
    }
  }), (_applyDecoratedDescriptor(_obj, 'getInvPlanDataList', [_dec], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_obj, 'getInvPlanDataList'), _obj)), _obj))
});

/***/ })

}]);