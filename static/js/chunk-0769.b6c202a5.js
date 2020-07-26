(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-0769"],{

/***/ "A96u":
/*!******************************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/treeOpe.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./treeOpe.vue?vue&type=script&lang=js& */ "pSt+");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "Dn8y":
/*!************************************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/treeOpe.vue?vue&type=template&id=0707dfab& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_template_id_0707dfab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./treeOpe.vue?vue&type=template&id=0707dfab& */ "aQ+3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_template_id_0707dfab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_template_id_0707dfab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "IuRx":
/*!*****************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/treeOpe.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _treeOpe_vue_vue_type_template_id_0707dfab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treeOpe.vue?vue&type=template&id=0707dfab& */ "Dn8y");
/* harmony import */ var _treeOpe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treeOpe.vue?vue&type=script&lang=js& */ "A96u");
/* empty/unused harmony star reexport *//* harmony import */ var _treeOpe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treeOpe.vue?vue&type=style&index=0&lang=scss& */ "nJfX");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _treeOpe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _treeOpe_vue_vue_type_template_id_0707dfab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _treeOpe_vue_vue_type_template_id_0707dfab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "treeOpe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "OtBW":
/*!**************************************!*\
  !*** ./src/api/project/wbs/index.js ***!
  \**************************************/
/*! exports provided: list, wbsList, save, deleteWBS, saveWbsMbs, tendersTreeData, realTimeScheduleList, reportDataList, approveScheduleCollect, wbsDataApproveList, scheduleCollectSave, saveWbsTenders, scheduleEmulation, mbsWbsDelete, mbsWbsSave, reportRollback, updateToUp, updateToDown, updateToUpLevel, updateToDownLevel, userTenders, getWorkPoints, queryHistoryRecord, getHistoryRecord, batchAdjustPlan, saveKeyNodes, queryWbsPeriodPlanData, updateWbsQuantities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wbsList", function() { return wbsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteWBS", function() { return deleteWBS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWbsMbs", function() { return saveWbsMbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tendersTreeData", function() { return tendersTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "realTimeScheduleList", function() { return realTimeScheduleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportDataList", function() { return reportDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveScheduleCollect", function() { return approveScheduleCollect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wbsDataApproveList", function() { return wbsDataApproveList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleCollectSave", function() { return scheduleCollectSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWbsTenders", function() { return saveWbsTenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleEmulation", function() { return scheduleEmulation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mbsWbsDelete", function() { return mbsWbsDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mbsWbsSave", function() { return mbsWbsSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportRollback", function() { return reportRollback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUp", function() { return updateToUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDown", function() { return updateToDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUpLevel", function() { return updateToUpLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDownLevel", function() { return updateToDownLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTenders", function() { return userTenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkPoints", function() { return getWorkPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHistoryRecord", function() { return queryHistoryRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistoryRecord", function() { return getHistoryRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchAdjustPlan", function() { return batchAdjustPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveKeyNodes", function() { return saveKeyNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryWbsPeriodPlanData", function() { return queryWbsPeriodPlanData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWbsQuantities", function() { return updateWbsQuantities; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/list',
    method: 'post',
    data: param
  });
}

function wbsList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/wbsList',
    method: 'post',
    data: param
  });
}
// 计划保存
function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/save',
    method: 'post',
    data: param
  });
}

// rest/wbs/delete 删除
function deleteWBS(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/delete',
    method: 'post',
    data: param
  });
}

// saveWbsMbs
function saveWbsMbs(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/saveWbsMbs',
    method: 'post',
    data: param
  });
}
function tendersTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/wbs/tendersTreeData',
    method: 'post',
    data: param
  });
}

//
function realTimeScheduleList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/realTimeScheduleList',
    method: 'post',
    data: param
  });
}
// 实时进度填报数据列表
function reportDataList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/reportDataList',
    method: 'post',
    data: param
  });
}

// 进度采集审批
function approveScheduleCollect(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/approveScheduleCollect',
    method: 'post',
    data: param
  });
}

//  实时进度数据审核列表
function wbsDataApproveList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/wbsDataApproveList',
    method: 'post',
    data: param
  });
}

// 进度采集保存
function scheduleCollectSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/scheduleCollectSave',
    method: 'post',
    data: param
  });
}

// 分配标段
function saveWbsTenders(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/saveWbsTenders',
    method: 'post',
    data: param
  });
}

// 进度仿真
function scheduleEmulation(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/scheduleEmulation',
    method: 'post',
    data: param
  });
}

// mbsWbsDelete
function mbsWbsDelete(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/mbsWbsDelete',
    method: 'post',
    data: param
  });
}

//
function mbsWbsSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/mbsWbsSave',
    method: 'post',
    data: param
  });
}

// 回撤
function reportRollback(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/reportRollback',
    method: 'post',
    data: param
  });
}

//  树的上移 下移 升级  降级
function updateToUp(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/updateToUp',
    method: 'post',
    data: param
  });
}

function updateToDown(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/updateToDown',
    method: 'post',
    data: param
  });
}

function updateToUpLevel(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/updateToUpLevel',
    method: 'post',
    data: param
  });
}

function updateToDownLevel(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/updateToDownLevel',
    method: 'post',
    data: param
  });
}

// 获取当前用户标段
function userTenders(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/userTenders',
    method: 'post',
    data: param
  });
}

// 获取标段下的工点
function getWorkPoints(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/workPoint/getWorkPoints',
    method: 'post',
    data: param
  });
}

// 填报记录查看
function queryHistoryRecord(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/queryHistoryRecord',
    method: 'post',
    data: param
  });
}
// 获取历史填报记录
function getHistoryRecord(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/getHistoryRecord',
    method: 'post',
    data: param
  });
}

// 批量调整计划开始结束时间
function batchAdjustPlan(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/batchAdjustPlan',
    method: 'post',
    data: param
  });
}

// 添加关键节点
function saveKeyNodes(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/saveKeyNodes',
    method: 'post',
    data: param
  });
}

// 根据周期查询wbsList
function queryWbsPeriodPlanData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/queryWbsPeriodPlanData',
    method: 'post',
    data: param
  });
}

// 填报工程量修改
function updateWbsQuantities(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/wbs/updateWbsQuantities',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "PfiW":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/scheduleManage/components/treeOpe.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aQ+3":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/scheduleManage/components/treeOpe.vue?vue&type=template&id=0707dfab& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-middle treeOpeDiv"},_vm._l((_vm.btns),function(item,index){return _c('div',{key:index,staticClass:"flex",on:{"click":function($event){return _vm.operation(item.code)}}},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","placement":"top","content":item.name}},[_c('i',{staticClass:"iconfont",class:item.icon})])],1)}),0)}
var staticRenderFns = []



/***/ }),

/***/ "nJfX":
/*!***************************************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/treeOpe.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./treeOpe.vue?vue&type=style&index=0&lang=scss& */ "PfiW");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_treeOpe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "pSt+":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/scheduleManage/components/treeOpe.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_project_wbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/project/wbs */ "OtBW");

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
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      btnsAll: [{ name: '上移', icon: 'iconshangyi', code: 'updateToUp' }, { name: '下移', icon: 'iconxiayi', code: 'updateToDown' }, { name: '升级', icon: 'iconiconfont_-', code: 'updateToUpLevel' }, { name: '降级', icon: 'iconjiangji', code: 'updateToDownLevel' }],
      btns: [],
      node: {},
      selectEvent: null
    };
  },
  mounted: function mounted() {
    this.getSelectedNode();
  },
  destoryed: function destoryed() {
    if (this.selectEvent) {
      gantt.detachEvent(this.selectEvent);
    }
  },

  methods: {
    // updateToUp, updateToDown, updateToUpLevel, updateToDownLevel
    operation: function operation(code) {
      if (this.node.wbsId && !this.node.mbsId) {
        if (this[code]) {
          this[code]();
        }
      } else {
        var message = '当前节点不能进行上移操作';
        if (code === 'updateToUp') {
          message = '当前节点不能进行上移操作';
        } else if (code === 'updateToDown') {
          message = '当前节点不能进行下移操作';
        } else if (code === 'updateToUpLevel') {
          message = '当前节点不能进行升级操作';
        } else {
          message = '当前节点不能进行降级操作';
        }
        this.$message({
          type: 'warning',
          message: message
        });
      }
    },
    getParent: function getParent(data, id) {
      // eslint-disable-next-line eqeqeq
      var node = data.find(function (item) {
        return item.id == id;
      });
      if (!node) {
        console.log('当前节点不存在');
        return null;
      }
      // eslint-disable-next-line eqeqeq
      var parent = data.find(function (item) {
        return item.id == node.parentId;
      });
      return parent;
    },
    getBrother: function getBrother(data, id) {
      // eslint-disable-next-line eqeqeq
      var node = data.find(function (item) {
        return item.id == id;
      });
      if (!node) {
        console.log('当前节点不存在');
        return null;
      }
      // eslint-disable-next-line eqeqeq
      return data.filter(function (item) {
        return item.parentId == node.parentId;
      });
    },
    getChildren: function getChildren(data, id) {
      // eslint-disable-next-line eqeqeq
      return data.filter(function (item) {
        return item.parentId == id;
      });
    },
    dealRelatedInfo: function dealRelatedInfo(id) {
      var parent = this.getParent(this.data, id);
      var brother = this.getBrother(this.data, id);
      var preNode = null; // 上一个兄弟节点
      var nextNode = null; // 下一个兄弟节点
      var isFirst = false; // 是在兄弟节点的第一位
      var isEnd = false; // 在兄弟节点的最后一位
      if (brother) {
        for (var index = 0; index < brother.length; index++) {
          if (brother[index].id.toString() === id) {
            if (index > 0) {
              preNode = brother[index - 1];
            }
            if (index + 1 < brother.length) {
              nextNode = brother[index + 1];
            }
            if (index === 0) {
              isFirst = true;
            }
            if (index === brother.length - 1) {
              isEnd = true;
            }
            break;
          }
        }
      }
      return {
        parent: parent,
        brother: brother,
        preNode: preNode,
        nextNode: nextNode,
        isFirst: isFirst,
        isEnd: isEnd
      };
    },
    dealBtns: function dealBtns(btnsAll, id) {
      var nodeInfo = this.dealRelatedInfo(id);
      if (!nodeInfo.parent) {
        //  当无父节点  无升级操作
        btnsAll = btnsAll.filter(function (item) {
          return item.code !== 'updateToUpLevel';
        });
      }
      if (nodeInfo.isFirst) {
        //  当无前置节点  无上移操作  同时没有降级操作
        btnsAll = btnsAll.filter(function (item) {
          return item.code !== 'updateToUp' && item.code !== 'updateToDownLevel';
        });
      }
      if (nodeInfo.isEnd) {
        //  当无后置节点  无下移操作
        btnsAll = btnsAll.filter(function (item) {
          return item.code !== 'updateToDown';
        });
      }
      return btnsAll;
    },
    getSelectedNode: function getSelectedNode() {
      var _this = this;

      gantt.attachEvent('onTaskSelected', function (id) {
        _this.node = gantt.getTask(id);
        if (_this.node.wbsId && !_this.node.mbsId) {
          // this.btns = this.btnsAll.slice()
          // setTimeout(() => { this.btns = this.dealBtns(this.btnsAll, id) }, 300)
          _this.btns = _this.dealBtns(_this.btnsAll, id);
        } else {
          _this.btns = [];
        }
      });
    },
    updateToUp: function updateToUp() {
      var _this2 = this;

      Object(_api_project_wbs__WEBPACK_IMPORTED_MODULE_1__["updateToUp"])({ id: this.node.wbsId }).then(function (res) {
        if (res.success) {
          var message = '进行上移操作成功';
          _this2.$message({
            type: 'success',
            message: message
          });
          _this2.$emit('operation', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'updateToUp' }, res.result));
        }
      });
    },
    updateToDown: function updateToDown() {
      var _this3 = this;

      Object(_api_project_wbs__WEBPACK_IMPORTED_MODULE_1__["updateToDown"])({ id: this.node.wbsId }).then(function (res) {
        if (res.success) {
          var message = '进行下移操作成功';
          _this3.$message({
            type: 'success',
            message: message
          });
          _this3.$emit('operation', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'updateToDown' }, res.result));
        }
      });
    },
    updateToUpLevel: function updateToUpLevel() {
      var _this4 = this;

      Object(_api_project_wbs__WEBPACK_IMPORTED_MODULE_1__["updateToUpLevel"])({ id: this.node.wbsId }).then(function (res) {
        if (res.success) {
          var message = '进行升级操作成功';
          _this4.$message({
            type: 'success',
            message: message
          });
          _this4.$emit('operation', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'updateToUpLevel' }, res.result));
        }
      });
    },
    updateToDownLevel: function updateToDownLevel() {
      var _this5 = this;

      Object(_api_project_wbs__WEBPACK_IMPORTED_MODULE_1__["updateToDownLevel"])({ id: this.node.wbsId }).then(function (res) {
        if (res.success) {
          var message = '进行降级操作成功';
          _this5.$message({
            type: 'success',
            message: message
          });
          _this5.$emit('operation', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'updateToDownLevel' }, res.result));
        }
      });
    }
  }
});

/***/ })

}]);