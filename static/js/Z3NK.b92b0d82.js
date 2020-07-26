(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["Z3NK"],{

/***/ "Z3NK":
/*!******************************************************!*\
  !*** ./src/api/project/designManage/schedulePlan.js ***!
  \******************************************************/
/*! exports provided: getProgressPlanList, getProgressPlan, saveProgressPlan, deleteProgressPlan, getPath, changeStatus, progressPlanChangeStatus, drawingCatalogDownload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressPlanList", function() { return getProgressPlanList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressPlan", function() { return getProgressPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProgressPlan", function() { return saveProgressPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProgressPlan", function() { return deleteProgressPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPath", function() { return getPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeStatus", function() { return changeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressPlanChangeStatus", function() { return progressPlanChangeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawingCatalogDownload", function() { return drawingCatalogDownload; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getProgressPlanList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/progressPlan/list',
    method: 'post',
    data: param
  });
}

function getProgressPlan(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/progressPlan/get',
    method: 'post',
    data: param
  });
}

function saveProgressPlan(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/progressPlan/save',
    method: 'post',
    data: param
  });
}

function deleteProgressPlan(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/progressPlan/delete',
    method: 'post',
    data: param
  });
}

function getPath(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/progressPlan/getPath',
    method: 'post',
    data: param
  });
}

function changeStatus(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/progressPlan/changeStatus',
    method: 'post',
    data: param
  });
}

function progressPlanChangeStatus(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/progressPlan/progressPlanChangeStatus',
    method: 'post',
    data: param
  });
}

function drawingCatalogDownload(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/progressPlan/drawingCatalogDownload',
    method: 'post',
    data: param
  });
}

/***/ })

}]);