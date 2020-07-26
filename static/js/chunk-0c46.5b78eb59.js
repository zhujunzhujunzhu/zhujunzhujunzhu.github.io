(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-0c46"],{

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

/***/ "9uTl":
/*!*****************************!*\
  !*** ./src/api/formdata.js ***!
  \*****************************/
/*! exports provided: deleteApi, get, list, save, processBodyList, getFormData, getProcessExit, processList, dealTask, alreadyMatterList, approveCommentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteApi", function() { return deleteApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processBodyList", function() { return processBodyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormData", function() { return getFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessExit", function() { return getProcessExit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processList", function() { return processList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealTask", function() { return dealTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alreadyMatterList", function() { return alreadyMatterList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveCommentList", function() { return approveCommentList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function deleteApi(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/delete',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/get',
    method: 'post',
    data: param
  });
}

function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/list',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/save',
    method: 'post',
    data: param
  });
}

// 获取待办事项列表
function processBodyList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/processBodyList',
    method: 'post',
    data: param
  });
}

// 获取待办事项详情
function getFormData(param) {
  // url 映射处理
  var url = '/rest/formdata/getFormData';
  switch (param.urlType) {
    case 'KGBG':
      url = '/rest/processApproveTaskRest/getApproveForm';
      break;
    case 'SGZZSJ':
      // 施工组织设计流程
      url = '/rest/processApproveTaskRest/getApproveForm';
      break;
    case 'SJBG':
      url = 'rest/designChange/getFormData';
      break;
    case 'XW':
      // 新闻流程
      url = '/rest/news/getApproveForm';
      break;
    case 'JTJH':
      // 静态计划
      url = '/rest/wbsStagePlan/getApproveForm';
      break;
    default:
      // 自定义表单流程
      url = '/rest/formdata/getFormData';
  }
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: url,
    method: 'post',
    data: param
  });
}

// 获取流程路径
function getProcessExit(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/getProcessExit',
    method: 'post',
    data: param
  });
}
// 我的流程
function processList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/processList',
    method: 'post',
    data: param
  });
}

// 任务办理
function dealTask(param) {
  // url 映射处理
  var url = '/rest/formData/getStartReport';
  switch (param.urlType) {
    case 'KGBG':
      url = 'rest/startReport/dealTask';
      break;
    case 'SGZZSJ':
      url = '/rest/constructionOrganization/dealTask';
      break;
    case 'SJBG':
      url = '/rest/designChange/dealTask';
      break;
    case 'XW':
      url = '/rest/news/dealTask';
      break;
    default:
      url = '/rest/formData/dealTask';
  }
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: url,
    method: 'post',
    data: param
  });
}

// 已办事项
function alreadyMatterList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/alreadyMatterList',
    method: 'post',
    data: param
  });
}

// 获取审批记录信息
function approveCommentList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formData/approveCommentList',
    method: 'post',
    data: param
  });
}

/***/ })

}]);