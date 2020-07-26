(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["wA5v"],{

/***/ "wA5v":
/*!*******************************************!*\
  !*** ./src/api/epidemic/epDailyReport.js ***!
  \*******************************************/
/*! exports provided: save, get, list, deleteFun, getSysOrg, constructionSiteStatistics, epidemicWorkTotal, personStatistics, deployReports, queryUserTenders, queryAlreadyReportData, epidemicPersonTotal, epidemicPersonOverview, materialReportExport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFun", function() { return deleteFun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSysOrg", function() { return getSysOrg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructionSiteStatistics", function() { return constructionSiteStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epidemicWorkTotal", function() { return epidemicWorkTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personStatistics", function() { return personStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployReports", function() { return deployReports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryUserTenders", function() { return queryUserTenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAlreadyReportData", function() { return queryAlreadyReportData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epidemicPersonTotal", function() { return epidemicPersonTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epidemicPersonOverview", function() { return epidemicPersonOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialReportExport", function() { return materialReportExport; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/save',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/get',
    method: 'post',
    data: param
  });
}

function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/list',
    method: 'post',
    data: param
  });
}

function deleteFun(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/delete',
    method: 'post',
    data: param
  });
}

function getSysOrg(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/getSysOrg',
    method: 'post',
    data: param
  });
}

// 工地信息统计
function constructionSiteStatistics(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/constructionSiteStatistics',
    method: 'post',
    data: param
  });
}

// 疫情工作统计
function epidemicWorkTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/epidemicWorkTotal',
    method: 'post',
    data: param
  });
}

// 人员信息统计
function personStatistics(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/personStatistics',
    method: 'post',
    data: param
  });
}

// 修改填报状态
function deployReports(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/deployReports',
    method: 'post',
    data: param
  });
}

// 查到当前用户真正所属的标段
function queryUserTenders(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/queryUserTenders',
    method: 'post',
    data: param
  });
}

// 查询当前用户组织的填报情况
function queryAlreadyReportData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/queryAlreadyReportData',
    method: 'post',
    data: param
  });
}

// 疫情人员统计
function epidemicPersonTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/epidemicPersonTotal',
    method: 'post',
    data: param
  });
}

// 疫情人员统计总览
function epidemicPersonOverview(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/epidemicPersonOverview',
    method: 'post',
    data: param
  });
}
// 疫情导出
function materialReportExport(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/materialReportExport',
    method: 'post',
    data: param
  });
}

/***/ })

}]);