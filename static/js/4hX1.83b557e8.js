(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["4hX1"],{

/***/ "4hX1":
/*!***************************************!*\
  !*** ./src/api/project/disReports.js ***!
  \***************************************/
/*! exports provided: deleteFun, list, queryDayWeather, save, queryFigureScheduleData, approveReport, queryInvestData, judgeScheduleReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFun", function() { return deleteFun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDayWeather", function() { return queryDayWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryFigureScheduleData", function() { return queryFigureScheduleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveReport", function() { return approveReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryInvestData", function() { return queryInvestData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "judgeScheduleReport", function() { return judgeScheduleReport; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function deleteFun(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/disReports/delete',
    method: 'post',
    data: param
  });
}

// 列表接口
function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/disReports/list',
    method: 'post',
    data: param
  });
}

// 查询天气接口
function queryDayWeather(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/disReports/queryDayWeather',
    method: 'post',
    data: param
  });
}

// 保存
function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/disReports/save',
    method: 'post',
    data: param
  });
}

// 形象进度数据
function queryFigureScheduleData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/disReports/queryFigureScheduleData',
    method: 'post',
    data: param
  });
}

// 审批通过驳回
function approveReport(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/disReports/approveReport',
    method: 'post',
    data: param
  });
}

// 投资计划列表查询
function queryInvestData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/disReports/queryInvestData',
    method: 'post',
    data: param
  });
}
// 判断进度填报状态
function judgeScheduleReport(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/disReports/judgeScheduleReport',
    method: 'post',
    data: param
  });
}

/***/ })

}]);