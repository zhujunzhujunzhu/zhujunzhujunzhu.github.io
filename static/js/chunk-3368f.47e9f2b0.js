(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-3368f"],{

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

/***/ }),

/***/ "mPfy":
/*!********************************************************!*\
  !*** ./src/api/project/designManage/industryReview.js ***!
  \********************************************************/
/*! exports provided: getIndustryReviewList, getIndustryReview, saveIndustryReview, getDrawingIndustryReviewList, saveDrawingIndustryReview, getClear, reviewDataChangeStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndustryReviewList", function() { return getIndustryReviewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndustryReview", function() { return getIndustryReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveIndustryReview", function() { return saveIndustryReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawingIndustryReviewList", function() { return getDrawingIndustryReviewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDrawingIndustryReview", function() { return saveDrawingIndustryReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClear", function() { return getClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewDataChangeStatus", function() { return reviewDataChangeStatus; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getIndustryReviewList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReviewDate/list',
    method: 'post',
    data: param
  });
}

function getIndustryReview(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReviewDate/get',
    method: 'post',
    data: param
  });
}

function saveIndustryReview(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReviewDate/save',
    method: 'post',
    data: param
  });
}

function getDrawingIndustryReviewList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingIndustryReview/list',
    method: 'post',
    data: param
  });
}

function saveDrawingIndustryReview(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingIndustryReview/save',
    method: 'post',
    data: param
  });
}

function getClear(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReviewDate/getClear',
    method: 'post',
    data: param
  });
}

function reviewDataChangeStatus(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/progressPlan/reviewDataChangeStatus',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "qzCe":
/*!***************************************************!*\
  !*** ./src/api/project/safetyManage/riskPoint.js ***!
  \***************************************************/
/*! exports provided: queryMbs, saveBindEntity, updateBindEntity, save, download, list, deleteFun, get, showList, riskShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryMbs", function() { return queryMbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBindEntity", function() { return saveBindEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBindEntity", function() { return updateBindEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFun", function() { return deleteFun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showList", function() { return showList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riskShow", function() { return riskShow; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function queryMbs(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPoint/queryMbs',
    method: 'post',
    data: param
  });
}

function saveBindEntity(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/asset/saveBindEntity',
    method: 'post',
    data: param
  });
}

function updateBindEntity(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/asset/updateBindEntity',
    method: 'post',
    data: param
  });
}
// 提交按钮
function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPointPlan/save',
    method: 'post',
    data: param
  });
}
// 导出接口
function download(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPointPlan/download',
    method: 'post',
    data: param
  });
}

// 列表数据
function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPointPlan/list',
    method: 'post',
    data: param
  });
}
// 删除

function deleteFun(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPointPlan/delete',
    method: 'post',
    data: param
  });
}
// 查看

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPointPlan/get',
    method: 'post',
    data: param
  });
}
// 查看
function showList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPointPlan/showList',
    method: 'post',
    data: param
  });
}
// 预览
function riskShow(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPointPlan/riskShow',
    method: 'post',
    data: param
  });
}

/***/ })

}]);