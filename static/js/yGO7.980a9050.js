(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["yGO7"],{

/***/ "yGO7":
/*!****************************************!*\
  !*** ./src/api/project/landAcquire.js ***!
  \****************************************/
/*! exports provided: landAcquireTotal, tendersTotal, saveLandAcquire, saveMBS, getTendersList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landAcquireTotal", function() { return landAcquireTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tendersTotal", function() { return tendersTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLandAcquire", function() { return saveLandAcquire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMBS", function() { return saveMBS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTendersList", function() { return getTendersList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


// 各工点完成情况统计
function landAcquireTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/landAcquire/landAcquireTotal',
    method: 'post',
    data: param
  });
}

// 各标段完成情况统计
function tendersTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/landAcquire/tendersTotal',
    method: 'post',
    data: param
  });
}

// 保存记录
function saveLandAcquire(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/landAcquire/save',
    method: 'post',
    data: param
  });
}

// 保存mbs
function saveMBS(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/landAcquire/saveMBS',
    method: 'post',
    data: param
  });
}

function getTendersList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/landAcquire/tendersList',
    method: 'post',
    data: param
  });
}

/***/ })

}]);