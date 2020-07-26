(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-0c5c"],{

/***/ "5HWN":
/*!************************!*\
  !*** ./src/api/doc.js ***!
  \************************/
/*! exports provided: uploadDoc, getPicture, uploadImg, attachList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadDoc", function() { return uploadDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPicture", function() { return getPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImg", function() { return uploadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachList", function() { return attachList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function uploadDoc(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/uploadDoc',
    method: 'post',
    data: param
  });
}

// 根据docId获取图片
function getPicture(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/attachList',
    method: 'post',
    data: param
  });
}

function uploadImg(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/uploadImg',
    method: 'post',
    data: param
  });
}

// 根据docId获取图片
function attachList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/attachList',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "j9qd":
/*!*******************************************************!*\
  !*** ./src/api/project/designManage/drawingReview.js ***!
  \*******************************************************/
/*! exports provided: saveDrawingDoc, getDrawingDoc, getDrawingDocList, getProjectOrgWithType, getDrawingReviewList, getDrawingReview, saveDrawingReview, getDrawingReviewDocList, getDrawingReviewDoc, saveDrawingReviewDoc, saveDrawingReviewQualified, getDrawingReviewQualifiedList, getDrawingReviewQualified, showDrawingAddMaterial, getDrawings, getClear, canPrint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDrawingDoc", function() { return saveDrawingDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawingDoc", function() { return getDrawingDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawingDocList", function() { return getDrawingDocList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectOrgWithType", function() { return getProjectOrgWithType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawingReviewList", function() { return getDrawingReviewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawingReview", function() { return getDrawingReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDrawingReview", function() { return saveDrawingReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawingReviewDocList", function() { return getDrawingReviewDocList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawingReviewDoc", function() { return getDrawingReviewDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDrawingReviewDoc", function() { return saveDrawingReviewDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDrawingReviewQualified", function() { return saveDrawingReviewQualified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawingReviewQualifiedList", function() { return getDrawingReviewQualifiedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawingReviewQualified", function() { return getDrawingReviewQualified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDrawingAddMaterial", function() { return showDrawingAddMaterial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawings", function() { return getDrawings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClear", function() { return getClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canPrint", function() { return canPrint; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function saveDrawingDoc(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingDoc/save',
    method: 'post',
    data: param
  });
}

function getDrawingDoc(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingDoc/get',
    method: 'post',
    data: param
  });
}

function getDrawingDocList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingDoc/list',
    method: 'post',
    data: param
  });
}

function getProjectOrgWithType(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/progressPlan/getProjectOrgWithType',
    method: 'post',
    data: param
  });
}

function getDrawingReviewList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReview/list',
    method: 'post',
    data: param
  });
}

function getDrawingReview(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReview/get',
    method: 'post',
    data: param
  });
}

function saveDrawingReview(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReview/save',
    method: 'post',
    data: param
  });
}

function getDrawingReviewDocList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReviewDoc/list',
    method: 'post',
    data: param
  });
}

function getDrawingReviewDoc(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReviewDoc/get',
    method: 'post',
    data: param
  });
}

function saveDrawingReviewDoc(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReviewDoc/save',
    method: 'post',
    data: param
  });
}

function saveDrawingReviewQualified(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReviewQualified/save',
    method: 'post',
    data: param
  });
}

function getDrawingReviewQualifiedList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReviewQualified/list',
    method: 'post',
    data: param
  });
}

function getDrawingReviewQualified(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingReviewQualified/get',
    method: 'post',
    data: param
  });
}

function showDrawingAddMaterial(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/drawingAddMaterials/showDrawingAddMaterial',
    method: 'post',
    data: param
  });
}

function getDrawings(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/progressPlan/get',
    method: 'post',
    data: param
  });
}

function getClear(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/progressPlan/getClear',
    method: 'post',
    data: param
  });
}

function canPrint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/progressPlan/canPrint',
    method: 'post',
    data: param
  });
}

/***/ })

}]);