(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["OtBW"],{

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

/***/ })

}]);