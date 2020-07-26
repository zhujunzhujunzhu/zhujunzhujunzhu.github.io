(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-23e4"],{

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

/***/ "Y1W8":
/*!************************************!*\
  !*** ./src/api/project/meeting.js ***!
  \************************************/
/*! exports provided: deleteOne, get, save, saveMeetingReadMessage, release, list, meetingReceiptSave, meetingReceiptMap, getMeetingReceipt, weekMeetingArrange, cancelMeeting, meetingReceiptUploadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOne", function() { return deleteOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMeetingReadMessage", function() { return saveMeetingReadMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "release", function() { return release; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meetingReceiptSave", function() { return meetingReceiptSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meetingReceiptMap", function() { return meetingReceiptMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeetingReceipt", function() { return getMeetingReceipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekMeetingArrange", function() { return weekMeetingArrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelMeeting", function() { return cancelMeeting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meetingReceiptUploadFile", function() { return meetingReceiptUploadFile; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function deleteOne(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/delete',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/get',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/save',
    method: 'post',
    data: param
  });
}

function saveMeetingReadMessage(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/saveMeetingReadMessage',
    method: 'post',
    data: param
  });
}

function release(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/release',
    method: 'post',
    data: param
  });
}

function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/list',
    method: 'post',
    data: param
  });
}

// 会议回执
function meetingReceiptSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/meetingReceiptSave',
    method: 'post',
    data: param
  });
}

// 会议回执信息
function meetingReceiptMap(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/meetingReceiptMap',
    method: 'post',
    data: param
  });
}

// 获取与会人员会议回执信息
function getMeetingReceipt(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/getMeetingReceipt',
    method: 'post',
    data: param
  });
}

// 一周会议安排
function weekMeetingArrange(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/meeting/weekMeetingArrange',
    method: 'post',
    data: param
  });
}

function cancelMeeting(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/cancelMeeting',
    method: 'post',
    data: param
  });
}

function meetingReceiptUploadFile(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/meeting/meetingReceiptUploadFile',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "sJNy":
/*!***************************************!*\
  !*** ./src/api/project/projectOrg.js ***!
  \***************************************/
/*! exports provided: treeData, getProjectOrgDetail, saveProjectOrg, deleteProjectOrg, syncProjectUserTreeData, syncProjectUserTreeData2, syncProjectUserTreeData3, syncProjectUserTreeData4, addressBook, projectOrgList, projectUserTenders, orgList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeData", function() { return treeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectOrgDetail", function() { return getProjectOrgDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProjectOrg", function() { return saveProjectOrg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjectOrg", function() { return deleteProjectOrg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncProjectUserTreeData", function() { return syncProjectUserTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncProjectUserTreeData2", function() { return syncProjectUserTreeData2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncProjectUserTreeData3", function() { return syncProjectUserTreeData3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncProjectUserTreeData4", function() { return syncProjectUserTreeData4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressBook", function() { return addressBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectOrgList", function() { return projectOrgList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectUserTenders", function() { return projectUserTenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orgList", function() { return orgList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


// 配置单项目项目组织结构树
function treeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectOrg/treeData',
    method: 'post',
    data: param
  });
}

// 配置单项目项目组织结构树
function getProjectOrgDetail(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectOrg/detail',
    method: 'post',
    data: param
  });
}

// 保存项目组织
function saveProjectOrg(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectOrg/save',
    method: 'post',
    data: param
  });
}

// 保存项目组织
function deleteProjectOrg(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectOrg/delete',
    method: 'post',
    data: param
  });
}

// 同步的项目人员树数据
function syncProjectUserTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectOrg/syncProjectUserTreeData',
    method: 'post',
    data: param
  });
}

function syncProjectUserTreeData2(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectOrg/syncProjectUserTreeData2',
    method: 'post',
    data: param
  });
}

// 将申铁投资去掉了
function syncProjectUserTreeData3(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectOrg/syncProjectUserTreeData3',
    method: 'post',
    data: param
  });
}

// 添加的人是项目里面的人
function syncProjectUserTreeData4(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectOrg/syncProjectUserTreeData4',
    method: 'post',
    data: param
  });
}

function addressBook(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/addressBook/list',
    method: 'post',
    data: param
  });
}

// 项目组织列表
function projectOrgList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectOrg/projectOrgList',
    method: 'post',
    data: param
  });
}

// 获取当前的标段
function projectUserTenders(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/projectAuth/projectUserTenders',
    method: 'post',
    data: param
  });
}

function orgList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/addressBook/projectOrgList',
    method: 'post',
    data: param
  });
}

/***/ })

}]);