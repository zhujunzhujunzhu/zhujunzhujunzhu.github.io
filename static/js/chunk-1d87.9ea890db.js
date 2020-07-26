(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-1d87"],{

/***/ "/2Kr":
/*!*************************************!*\
  !*** ./src/directive/zoom/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom */ "XUty");


var install = function install(Vue) {
  Vue.directive('Zoom', _zoom__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

if (window.Vue) {
  window.zoom = _zoom__WEBPACK_IMPORTED_MODULE_0__["default"];
  Vue.use(install); // eslint-disable-line
}

_zoom__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;
/* harmony default export */ __webpack_exports__["default"] = (_zoom__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "3IvD":
/*!************************************!*\
  !*** ./src/api/processTemplate.js ***!
  \************************************/
/*! exports provided: historyNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyNode", function() { return historyNode; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");

// 历史节点
function historyNode(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processTemplate/historyNode',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "40Za":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Bpmn/track.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9IqD":
/*!******************************!*\
  !*** ./src/api/flowchart.js ***!
  \******************************/
/*! exports provided: getExpressionMap, save, list, deleteOpe, processExpressionList, processTypeList, processTypeSave, placeModuleList, placeModuleSave, deleteProcessType, deletePlaceModule, getExpressionList, getprocessTemplateList, getProcessTemplate, getOrgDutyTreeData, getTaskNodeList, getUserOrgDuty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpressionMap", function() { return getExpressionMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOpe", function() { return deleteOpe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processExpressionList", function() { return processExpressionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processTypeList", function() { return processTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processTypeSave", function() { return processTypeSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeModuleList", function() { return placeModuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeModuleSave", function() { return placeModuleSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProcessType", function() { return deleteProcessType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePlaceModule", function() { return deletePlaceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpressionList", function() { return getExpressionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getprocessTemplateList", function() { return getprocessTemplateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessTemplate", function() { return getProcessTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrgDutyTreeData", function() { return getOrgDutyTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskNodeList", function() { return getTaskNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserOrgDuty", function() { return getUserOrgDuty; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getExpressionMap(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/getExpressionMap',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processTemplate/save',
    method: 'post',
    data: param
  });
}

// 列表
function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/process/list',
    method: 'post',
    data: param
  });
}

// 删除
function deleteOpe(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/process/delete',
    method: 'post',
    data: param
  });
}

// 处理人表达式列表
function processExpressionList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/process/delete',
    method: 'post',
    data: param
  });
}

// 流程类型列表
function processTypeList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/list',
    method: 'post',
    data: param
  });
}
// 流程类型保存
function processTypeSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/save',
    method: 'post',
    data: param
  });
}

// 流程模块列表
function placeModuleList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/placeModuleList',
    method: 'post',
    data: param
  });
}

// 流程模块保存
function placeModuleSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/placeModuleSave',
    method: 'post',
    data: param
  });
}

// 流程类型删除
function deleteProcessType(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/delete',
    method: 'post',
    data: param
  });
}

// 流程模块删除
function deletePlaceModule(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/deletePlaceModule',
    method: 'post',
    data: param
  });
}

// 表达式列表
function getExpressionList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/list',
    method: 'post',
    data: param
  });
}

function getprocessTemplateList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processTemplate/list',
    method: 'post',
    data: param
  });
}

// 根据流程类型获取流程图

function getProcessTemplate(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/getProcessTemplate',
    method: 'post',
    data: param
  });
}

// 组织职责树
function getOrgDutyTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/orgDutyTreeData',
    method: 'post',
    data: param
  });
}

// 获取节点
function getTaskNodeList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processTemplate/taskNodeList',
    method: 'post',
    data: param
  });
}

// 系统组织职责列表
function getUserOrgDuty(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/userOrgDuty',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "9uwR":
/*!************************************************!*\
  !*** ./src/views/formProcess/processTrack.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _processTrack_vue_vue_type_template_id_2e0ae960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processTrack.vue?vue&type=template&id=2e0ae960& */ "T816");
/* harmony import */ var _processTrack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processTrack.vue?vue&type=script&lang=js& */ "hkXk");
/* empty/unused harmony star reexport *//* harmony import */ var _processTrack_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processTrack.vue?vue&type=style&index=0&lang=scss& */ "j6dw");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _processTrack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _processTrack_vue_vue_type_template_id_2e0ae960___WEBPACK_IMPORTED_MODULE_0__["render"],
  _processTrack_vue_vue_type_template_id_2e0ae960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "processTrack.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "JCKr":
/*!***************************************!*\
  !*** ./src/components/Bpmn/track.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _track_vue_vue_type_template_id_64067ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.vue?vue&type=template&id=64067ffe& */ "Qhy9");
/* harmony import */ var _track_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track.vue?vue&type=script&lang=js& */ "wwgo");
/* empty/unused harmony star reexport *//* harmony import */ var _track_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track.vue?vue&type=style&index=0&lang=scss& */ "vrca");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _track_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _track_vue_vue_type_template_id_64067ffe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _track_vue_vue_type_template_id_64067ffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "track.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Qhy9":
/*!**********************************************************************!*\
  !*** ./src/components/Bpmn/track.vue?vue&type=template&id=64067ffe& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_template_id_64067ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./track.vue?vue&type=template&id=64067ffe& */ "uS5k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_template_id_64067ffe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_template_id_64067ffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "SvE+":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/processTrack.vue?vue&type=template&id=2e0ae960& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"processTrack"},[_c('my-card',{staticStyle:{"height":"80vh"},attrs:{"title":"流程跟踪"}},[_c('div',{staticClass:"drag-wrapper"},[_c('div',{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"wrapper"},[_c('div',{directives:[{name:"zoom",rawName:"v-zoom"}],staticClass:"dragtest"},[_c('TrackBpmn',{ref:"bpmnTrack",attrs:{"xml-str":_vm.XmlStr,"load-run":_vm.loadRun,"color-ids":_vm.nodeIds},on:{"moveElement":_vm.moveElement}})],1)])]),_vm._v(" "),_c('div',{staticClass:"moveCard",style:(_vm.moveCardStyle),domProps:{"innerHTML":_vm._s(_vm.cardTemplate)}})])],1)}
var staticRenderFns = []



/***/ }),

/***/ "T816":
/*!*******************************************************************************!*\
  !*** ./src/views/formProcess/processTrack.vue?vue&type=template&id=2e0ae960& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_template_id_2e0ae960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./processTrack.vue?vue&type=template&id=2e0ae960& */ "SvE+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_template_id_2e0ae960___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_template_id_2e0ae960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "UHUm":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Bpmn/track.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bpmn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bpmn-js */ "OBnF");



//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TrackBpmn',
  props: {
    XmlStr: {
      type: String,
      default: ''
    },
    loadRun: {
      type: Function,
      default: function _default(obj) {}
    },
    colorIds: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      bpmnModeler: null
    };
  },

  watch: {
    XmlStr: function XmlStr(val) {
      this.createNewDiagram(val);
    }
  },
  mounted: function mounted() {
    this.eventInit();
  },

  methods: {
    eventInit: function eventInit() {
      var _this2 = this;

      document.getElementsByClassName('trackBpmn')[0].onmouseover = function (event) {
        // 可以通过代理的方式  直接拿到id
        if (event && event.delegateTarget && event.delegateTarget.dataset && event.delegateTarget.dataset.elementId) {
          _this2.getCurrentEle(event.delegateTarget.dataset.elementId, event);
        }
      };
    },

    // 获取当前元素
    getCurrentEle: function getCurrentEle(id, event) {
      var _this3 = this;

      this.getAllXML().then(function (res) {
        var bpmnXml = _this3.createXml(res);
        var currentEle = bpmnXml.getElementById(id);
        // 当前点击的元素存在时 才更改
        // if (!currentEle) return
        _this3.$emit('moveElement', { id: id, currentEle: currentEle, event: event });
      });
    },

    // 将xml字条串转化为可以进行操作的xml文档
    createXml: function createXml(str) {
      if (document.all) {
        var xmlDom = new ActiveXObject('Microsoft.XMLDOM');
        xmlDom.loadXML(str);
        return xmlDom;
      } else {
        return new DOMParser().parseFromString(str, 'text/xml');
      }
    },

    // 拿到流程图的xml
    getAllXML: function getAllXML() {
      var _this = this;
      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
        _this.bpmnModeler.saveXML({ format: true }, function (err, xml) {
          if (xml) {
            _this.bpmnXmlStr = xml;
            resolve(xml);
          }
          console.log(err);
        });
      });
    },
    createNewDiagram: function createNewDiagram(xmlStr) {
      var _this4 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this4.bpmnModeler = new bpmn_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
                  container: _this4.$refs.canvas
                });
                // 初始化面板信息
                _this4.bpmnModeler.importXML(xmlStr, function (res) {
                  _this4.addColors(_this4.colorIds);
                  var xml = _this4.createXml(xmlStr);
                  _this4.loadRun({ xml: xml, xmlStr: xmlStr });
                });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this4);
      }))();
    },

    // 着色操作
    addColor: function addColor(currentId) {
      var _this5 = this;

      var cssClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'highlight';

      // 拿到当前的xmlstr
      this.getAllXML().then(function (xmlstr) {
        // 将xmlstr转换为xml
        var xml = _this5.createXml(xmlstr);
        var currentEle = xml.getElementById(currentId);
        // 对当前的元素类型进行判断
        if (!currentId || currentEle.tagName === 'process') return;
        var canvas = _this5.bpmnModeler.get('canvas');
        canvas.addMarker(currentEle, cssClass);
      });
    },


    // 多个节点同时进行着色的处理
    addColors: function addColors(currentIds) {
      var _this6 = this;

      var cssClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'highlight';

      if (!currentIds || currentIds.length === 0) return;
      this.getAllXML().then(function (xmlstr) {
        // 将xmlstr转换为xml
        var xml = _this6.createXml(xmlstr);
        var canvas = _this6.bpmnModeler.get('canvas');
        currentIds.forEach(function (currentId) {
          var currentEle = xml.getElementById(currentId);
          // 对当前的元素类型进行判断
          if (!currentId || currentEle.tagName === 'process') return;
          canvas.addMarker(currentEle, cssClass);
        });
      });
    }
  }
});

/***/ }),

/***/ "Vjxy":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/processTrack.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "WrTi":
/*!*************************************!*\
  !*** ./src/directive/drag/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag */ "jaZ2");


var install = function install(Vue) {
  Vue.directive('el-drag', _drag__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

if (window.Vue) {
  window['el-drag'] = _drag__WEBPACK_IMPORTED_MODULE_0__["default"];
  Vue.use(install); // eslint-disable-line
}

_drag__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;
/* harmony default export */ __webpack_exports__["default"] = (_drag__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "XUty":
/*!************************************!*\
  !*** ./src/directive/zoom/zoom.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function bind(el) {
    el.onmousewheel = function (e) {
      // 赋初值
      if (!window.per) window.per = 1;

      window.per = window.per + (e.deltaY < 0 ? 0.1 : -0.1);
      window.per = window.per <= 0.5 ? 0.5 : window.per;
      window.per = window.per >= 3.0 ? 3.0 : window.per;
      if (window.per > 0.5 && window.per < 3.0) {
        el.style.transform = 'scale(' + window.per + ')';
        el.style.transformOrigin = e.offsetX + 'px ' + e.offsetY + 'px';
      }
    };
  }

});

/***/ }),

/***/ "hkXk":
/*!*************************************************************************!*\
  !*** ./src/views/formProcess/processTrack.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./processTrack.vue?vue&type=script&lang=js& */ "ns7T");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "j6dw":
/*!**********************************************************************************!*\
  !*** ./src/views/formProcess/processTrack.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./processTrack.vue?vue&type=style&index=0&lang=scss& */ "Vjxy");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_processTrack_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "jaZ2":
/*!************************************!*\
  !*** ./src/directive/drag/drag.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function bind(el, binding) {
    var oDiv = el;
    oDiv.onmousedown = function (e) {
      var disX = e.clientX - oDiv.offsetLeft;
      var disY = e.clientY - oDiv.offsetTop;
      e.preventDefault();
      document.onmousemove = function (e) {
        var left = e.clientX - disX;
        var top = e.clientY - disY;
        oDiv.style.left = left + 'px';
        oDiv.style.top = top + 'px';
        e.preventDefault();
      };
      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
        binding.value.fn({ x: e.pageX, y: e.pageY, id: binding.value.id });
        e.preventDefault();
      };
    };
  }
});

/***/ }),

/***/ "ns7T":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/processTrack.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Bpmn_track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Bpmn/track */ "JCKr");
/* harmony import */ var _components_Bpmn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Bpmn */ "YILp");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _api_processTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/processTemplate */ "3IvD");
/* harmony import */ var _directive_zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/directive/zoom */ "/2Kr");
/* harmony import */ var _directive_drag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/directive/drag */ "WrTi");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  directives: { zoom: _directive_zoom__WEBPACK_IMPORTED_MODULE_5__["default"], drag: _directive_drag__WEBPACK_IMPORTED_MODULE_6__["default"] },
  components: { Bpmn: _components_Bpmn__WEBPACK_IMPORTED_MODULE_2__["default"], MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_3__["default"], TrackBpmn: _components_Bpmn_track__WEBPACK_IMPORTED_MODULE_1__["default"] },
  data: function data() {
    return {
      baseInfo: null,
      XmlStr: null,
      colorIds: [],
      lineIds: [],
      curnodeId: null,
      nodeList: [],
      nodeIds: [],
      moveCardStyle: '',
      cardTemplate: null,
      hoverNodes: []
    };
  },
  mounted: function mounted() {
    this.getInitInfo();
  },

  methods: {
    getInitInfo: function getInitInfo() {
      var _this = this;

      this.baseInfo = JSON.parse(this.$storage.getStorage('bpmnTaskInfoToTrack'));
      Object(_api_processTemplate__WEBPACK_IMPORTED_MODULE_4__["historyNode"])({ processBodyId: this.baseInfo.id }).then(function (res) {
        if (res.success) {
          _this.XmlStr = res.result.modelXML;
          _this.nodeList = res.result.nodeList;
          _this.getHoverNodes(_this.nodeList); // 将hoverNodes处理出
          res.result.nodeList.forEach(function (item) {
            if (item.type === 'SequenceFlow') {
              _this.lineIds.push(item.id);
            } else {
              _this.nodeIds.push(item.id);
            }
          });
        }
      });
    },
    getHoverNodes: function getHoverNodes(nodeList) {
      var _this2 = this;

      var filterTypes = ['startEvent', 'endEvent', 'SequenceFlow'];
      // 将头尾删除
      this.hoverNodes = nodeList.filter(function (item) {
        return filterTypes.indexOf(item.type) === -1;
      });

      // 将当前节点加上
      this.hoverNodes = this.hoverNodes.map(function (item) {
        if (item.id === _this2.baseInfo.nodeKey) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { userName: _this2.baseInfo.approveUser });
        } else {
          return item;
        }
      });

      this.hoverNodeIds = this.hoverNodes.map(function (item) {
        return item.id;
      });
    },
    loadRun: function loadRun(_ref) {
      var xml = _ref.xml,
          xmlStr = _ref.xmlStr;

      this.dealEle({ xml: xml, xmlStr: xmlStr });
    },

    // 对线条 点等元素的颜色处理
    dealEle: function dealEle(_ref2) {
      var xml = _ref2.xml,
          xmlStr = _ref2.xmlStr;

      //  当前处理节点
      this.curnodeId = this.baseInfo.nodeKey;
      this.$refs.bpmnTrack.addColor(this.curnodeId, 'cur-light');
      // 现在根据后端返回的结果进行处理
      this.$refs.bpmnTrack.addColors(this.lineIds, 'line-light');
    },
    json2style: function json2style(json) {
      var str = '';
      for (var key in json) {
        str += key + ':' + json[key] + ';';
      }
      return str;
    },

    // 没有移动框的节点
    noMoveCard: function noMoveCard(id) {
      if (this.hoverNodeIds.indexOf(id) === -1) {
        return true;
      } else {
        return false;
      }
    },
    moveElement: function moveElement(_ref3) {
      var id = _ref3.id,
          currentEle = _ref3.currentEle,
          event = _ref3.event;

      // 内容处理
      this.dealContent(id, this.hoverNodes);
      // 样式处理
      this.dealStyle(id, event);
    },
    dealContent: function dealContent(id, nodeList) {
      var find = nodeList.find(function (item) {
        return item.id === id;
      });
      if (!find) {
        this.cardTemplate = ' ';
      } else if (find.id === this.baseInfo.nodeKey) {
        this.cardTemplate = '\n         \u5F53\u524D\u5904\u7406\u4EBA\uFF1A' + find.userName + '\n      ';
      } else {
        this.cardTemplate = '\n         \u5904\u7406\u4EBA\uFF1A' + find.userName + '\n      ';
      }
    },
    dealStyle: function dealStyle(id, event) {
      var style = '';
      if (this.noMoveCard(id)) {
        style = {
          position: 'absolute',
          left: event.layerX + 'px',
          top: event.layerY + 100 + 'px',
          opacity: 0
        };
      } else {
        style = {
          position: 'absolute',
          left: event.layerX + 'px',
          top: event.layerY + 100 + 'px'
        };
      }
      this.moveCardStyle = this.json2style(style);
    }
  }
});

/***/ }),

/***/ "uS5k":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Bpmn/track.vue?vue&type=template&id=64067ffe& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"trackBpmn"},[_c('div',{ref:"canvas",staticClass:"canvas"})])}
var staticRenderFns = []



/***/ }),

/***/ "vrca":
/*!*************************************************************************!*\
  !*** ./src/components/Bpmn/track.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./track.vue?vue&type=style&index=0&lang=scss& */ "40Za");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "wwgo":
/*!****************************************************************!*\
  !*** ./src/components/Bpmn/track.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./track.vue?vue&type=script&lang=js& */ "UHUm");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_track_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);