(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-3dd8"],{

/***/ "1O3d":
/*!*************************************!*\
  !*** ./src/api/project/bimViews.js ***!
  \*************************************/
/*! exports provided: saveBimView, deleteView, saveBimViewPoint, deleteViewPoint, getViewPoint, getBimViewList, getCheckList, createCheckForm, getAttachList, getFormDetail, saveForm, saveAssetBind, getView, queryBimViews, queryBimViewpoints, workPointViews, getBimPointList, saveBimPoint, bizBatchList, getBimPoint, saveBimPath, deleteBimPath, queryBimPaths, riskPointList, deletePoint, statistics, getBimModuleList, getBimModuleView, saveBimModuleView, deleteBimModuleView, batchBimViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBimView", function() { return saveBimView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteView", function() { return deleteView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBimViewPoint", function() { return saveBimViewPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteViewPoint", function() { return deleteViewPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewPoint", function() { return getViewPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBimViewList", function() { return getBimViewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckList", function() { return getCheckList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckForm", function() { return createCheckForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttachList", function() { return getAttachList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormDetail", function() { return getFormDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveForm", function() { return saveForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAssetBind", function() { return saveAssetBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getView", function() { return getView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryBimViews", function() { return queryBimViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryBimViewpoints", function() { return queryBimViewpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workPointViews", function() { return workPointViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBimPointList", function() { return getBimPointList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBimPoint", function() { return saveBimPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bizBatchList", function() { return bizBatchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBimPoint", function() { return getBimPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBimPath", function() { return saveBimPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBimPath", function() { return deleteBimPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryBimPaths", function() { return queryBimPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riskPointList", function() { return riskPointList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePoint", function() { return deletePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statistics", function() { return statistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBimModuleList", function() { return getBimModuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBimModuleView", function() { return getBimModuleView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBimModuleView", function() { return saveBimModuleView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBimModuleView", function() { return deleteBimModuleView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchBimViews", function() { return batchBimViews; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


// 保存视图视点
function saveBimView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/save',
    method: 'post',
    data: param
  });
}

// 删除视图
function deleteView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/delete',
    method: 'post',
    data: param
  });
}

// 保存视图视口
function saveBimViewPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimViewpoint/save',
    method: 'post',
    data: param
  });
}

// 删除视口
function deleteViewPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimViewpoint/delete',
    method: 'post',
    data: param
  });
}

// 获取视口
function getViewPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimViewpoint/get',
    method: 'post',
    data: param
  });
}

// 视图列表
function getBimViewList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/list',
    method: 'post',
    data: param
  });
}

// 成果审查列表
function getCheckList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsExm/formList',
    method: 'post',
    data: param
  });
}

// 创建审查单
function createCheckForm(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsExm/createForm',
    method: 'post',
    data: param
  });
}

// 选择模型列表
function getAttachList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsExm/attachList',
    method: 'post',
    data: param
  });
}

// 获取审查表详情
function getFormDetail(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsExm/getForm',
    method: 'post',
    data: param
  });
}

// 创建问题
function saveForm(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsExm/saveForm',
    method: 'post',
    data: param
  });
}

// 单个资源关联至多个实体,如一个视图（BimView）同时关联至项目和工点上
function saveAssetBind(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/asset/saveAssetBind',
    method: 'post',
    data: param
  });
}

// 获取单个视图
function getView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/get',
    method: 'post',
    data: param
  });
}

// 获取关联视图列表，**这里的remark做linkType用
function queryBimViews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/queryBimViews',
    method: 'post',
    data: param
  });
}

// 获取关联视点列表，**这里的remark做linkType用
function queryBimViewpoints(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimViewpoint/queryBimViewpoints',
    method: 'post',
    data: param
  });
}

// 查询项目所有工点的默认视图清单
function workPointViews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bim/workPointViews',
    method: 'post',
    data: param
  });
}

// 保存标注点
function getBimPointList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPoint/list',
    method: 'post',
    data: param
  });
}

// 保存标注点
function saveBimPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPoint/save',
    method: 'post',
    data: param
  });
}

// 根据单个业务类型及业务id列表批量获取标签
function bizBatchList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPoint/bizBatchList',
    method: 'post',
    data: param
  });
}

// 获取标注点
function getBimPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPoint/get',
    method: 'post',
    data: param
  });
}

// 保存漫游
function saveBimPath(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPath/save',
    method: 'post',
    data: param
  });
}

function deleteBimPath(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPath/delete',
    method: 'post',
    data: param
  });
}

function queryBimPaths(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPath/queryBimPaths',
    method: 'post',
    data: param
  });
}

// 风险源
function riskPointList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPoint/list',
    method: 'post',
    data: param
  });
}

// 删除标注
function deletePoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPoint/delete',
    method: 'post',
    data: param
  });
}

// 删除标注
function statistics(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPoint/statistics',
    method: 'post',
    data: param
  });
}

// 分页查询模型业务模块列表
function getBimModuleList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimModule/list',
    method: 'post',
    data: param
  });
}

// 根据code获取视图
function getBimModuleView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimModule/getView',
    method: 'post',
    data: param
  });
}

// 保存业务模块视图
function saveBimModuleView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimModule/saveView',
    method: 'post',
    data: param
  });
}

// 删除业务模块视图
function deleteBimModuleView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimModule/delete',
    method: 'post',
    data: param
  });
}

// 根据sourceid数组获取视图数组
function batchBimViews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/batchBimViews',
    method: 'post',
    data: param
  });
}

/***/ }),

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

/***/ "EA5I":
/*!**********************************************************************************************!*\
  !*** ./src/views/project/BIM/components/reviewSlip/index.vue?vue&type=template&id=4b790336& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b790336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4b790336& */ "XTIp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b790336___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b790336___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "FO8B":
/*!****************************************************************************************!*\
  !*** ./src/views/project/BIM/components/reviewSlip/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "V3u+");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "GoyG":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/components/reviewSlip/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "V3u+":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/components/reviewSlip/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "FyfS");
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _api_project_bimViews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/project/bimViews */ "1O3d");
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/doc */ "5HWN");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "7Qib");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ReviewSlip',
  components: {
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      rules: {},
      activeName: null,
      dialogImageUrl: null,
      dialogVisible: false,
      currentCheckId: null,
      checkForm: {
        name: '',
        version: '',
        exmDate: '',
        upUserOrg: '',
        upUser: '',
        upDate: '',
        rectifyDate: '',
        exmUserOrg: '',
        exmUser: '',
        exmStatus: '',
        deadlineDate: null,
        issueList: []
      }
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(['dictMap', 'fileUrl', 'loading'])),
  watch: {},
  activated: function activated() {
    var _this = this;

    if (this.$storage.getStorage('lookScene') === '1') {
      this.$storage.removeStorage('lookScene');
      return;
    }
    if (this.$route.params.viewList) {
      // const temp = []
      this.checkForm.issueList[this.activeName].viewIds = [];

      var _loop = function _loop(i) {
        if (_this.$route.params.viewList[i].name) {
          if (_this.checkForm.issueList[_this.activeName].viewIds.findIndex(function (id) {
            return id === _this.$route.params.viewList[i].id;
          }) === -1) {
            _this.checkForm.issueList[_this.activeName].viewIds.push(_this.$route.params.viewList[i].id);
          }
          // temp.push({ name: item.name, url: item.pic })
        } else {
          _this.$route.params.viewList.splice(i, 1);
        }
      };

      for (var i = this.$route.params.viewList.length - 1; i >= 0; i--) {
        _loop(i);
      }
      // this.checkForm.issueList[this.activeName].viewImgList = temp
      this.checkForm.issueList[this.activeName].bimViews = this.$route.params.viewList;
    } else {
      if (this.$storage.getStorage('checkId') && this.$storage.getStorage('checkId') !== '') {
        this.checkForm.issueList = [];
        this.currentCheckId = this.$storage.getStorage('checkId');
        this.getFormDetail();
      }
    }
  },
  mounted: function mounted() {
    if (this.$storage.getStorage('checkId') && this.$storage.getStorage('checkId') !== '') {
      this.checkForm.issueList = [];
      this.currentCheckId = this.$storage.getStorage('checkId');
      this.getFormDetail();
    }
  },

  methods: {
    getFormDetail: function getFormDetail() {
      var _this2 = this;

      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_7__["getFormDetail"])({ id: this.currentCheckId }).then(function () {
        var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(res) {
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!res.success) {
                    _context2.next = 9;
                    break;
                  }

                  if (res.result.issueList) {
                    _context2.next = 5;
                    break;
                  }

                  res.result.issueList = [];
                  _context2.next = 6;
                  break;

                case 5:
                  return _context2.delegateYield( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                    var item, temp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;

                    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            item = null;
                            temp = null;
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 5;
                            _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(res.result.issueList);

                          case 7:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                              _context.next = 21;
                              break;
                            }

                            i = _step.value;

                            item = i;
                            item.fileList = [];
                            item.delIds = [];
                            item.fileBtyeList = [];
                            // 判断是否有docId, 如有则取图片

                            if (!item.docId) {
                              _context.next = 18;
                              break;
                            }

                            _context.next = 16;
                            return _this2.getAttachList(item.docId);

                          case 16:
                            temp = _context.sent;

                            if (temp && temp.length > 0) {
                              temp.forEach(function (t) {
                                item.fileList.push({
                                  id: t.id,
                                  url: _this2.fileUrl + 'img/' + t.fileName
                                });
                              });
                            }

                          case 18:
                            _iteratorNormalCompletion = true;
                            _context.next = 7;
                            break;

                          case 21:
                            _context.next = 27;
                            break;

                          case 23:
                            _context.prev = 23;
                            _context.t0 = _context['catch'](5);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                          case 27:
                            _context.prev = 27;
                            _context.prev = 28;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                            }

                          case 30:
                            _context.prev = 30;

                            if (!_didIteratorError) {
                              _context.next = 33;
                              break;
                            }

                            throw _iteratorError;

                          case 33:
                            return _context.finish(30);

                          case 34:
                            return _context.finish(27);

                          case 35:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this2, [[5, 23, 27, 35], [28,, 30, 34]]);
                  })(), 't0', 6);

                case 6:
                  if (res.result.exmStatus === '1') {
                    document.removeEventListener('paste', function (e) {
                      _this2.handleUtil(e, _this2);
                    });
                    _this2.initPaste();
                  }
                  if (res.result.exmStatus === '1') {
                    _this2.rules = {
                      deadlineDate: [{ required: true, message: '请填写整改日期', trigger: 'change' }]
                    };
                  }
                  _this2.checkForm = res.result;

                case 9:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    getAttachList: function getAttachList(id) {
      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resove) {
        Object(_api_doc__WEBPACK_IMPORTED_MODULE_8__["attachList"])({ docId: id }).then(function (res) {
          if (res.success) {
            resove(res.result);
          }
        });
      });
    },
    getView: function getView(num) {
      if (this.checkForm.issueList && this.checkForm.issueList[num] && this.checkForm.issueList[num].bimViews) {
        this.$storage.setStorage('modelViewList', this.checkForm.issueList[num].bimViews);
      }
      this.$storage.setStorage('currentExmStatus', this.checkForm.exmStatus);
      this.$storage.setStorage('checkSceneId', this.checkForm.attach.sceneId);
      this.$storage.setStorage('checkVersion', this.checkForm.attach.sceneVersion);
      this.$router.push('reviewSelect');
    },
    addColl: function addColl() {
      this.checkForm.issueList.push({
        type: '',
        viewer: '',
        fileList: [],
        fileBtyeList: [],
        delIds: [],
        viewIds: [],
        description: '',
        docId: null,
        name: null,
        bimViews: []
      });
      this.activeName = this.checkForm.issueList.length - 1;
    },
    upload: function upload(file) {
      var _this3 = this;

      var reader = new FileReader();
      reader.onload = function (event) {
        var base64Img = event.target.result;
        // 将获取到的图片的base64码用来创建img元素，并插入到div内
        _this3.checkForm.issueList[_this3.activeName].fileList.push({
          url: base64Img
        });
        _this3.checkForm.issueList[_this3.activeName].fileBtyeList.push(base64Img);
      };
      reader.readAsDataURL(file.file);
      // this.issueList[this.activeName].fileList.push({url: file})
      // this.issueList[this.activeName].fileBtyeList.push(file.file)
    },

    // 删除图片
    handleRemove: function handleRemove(file, fileList) {
      var _this4 = this;

      if (file.id) {
        this.checkForm.issueList[this.activeName].delIds.push(file.id);
        this.checkForm.issueList[this.activeName].fileList.forEach(function (item, index) {
          if (item.id === file.id) {
            _this4.checkForm.issueList[_this4.activeName].fileList.splice(index, 1);
          }
        });
      } else {
        this.checkForm.issueList[this.activeName].fileList.forEach(function (item, index) {
          if (item.url === file.url) {
            _this4.checkForm.issueList[_this4.activeName].fileList.splice(index, 1);
          }
        });
        this.checkForm.issueList[this.activeName].fileBtyeList.forEach(function (item, index) {
          if (item === file.url) {
            _this4.checkForm.issueList[_this4.activeName].fileBtyeList.splice(index, 1);
          }
        });
      }
      // if (file.status === 'success') {
      //   this.deleteImgId.push(file.id)
      // }
    },
    initPaste: function initPaste() {
      var _this5 = this;

      var me = this;
      document.onkeydown = function (e) {
        if (e.ctrlKey && e.keyCode === 67) {
          document.addEventListener('copy', this.handler, true);
          document.execCommand('copy');
        }
        if (e.ctrlKey && e.keyCode === 86) {
          document.addEventListener('paste', this.pastehandler, true);
          document.execCommand('paste');
        }
      };
      document.addEventListener('paste', function (e) {
        _this5.handleUtil(e, me);
        e.preventDefault();
      });
    },
    handleUtil: function handleUtil(e, me) {
      if (me.checkForm.exmStatus !== '1') {
        return false;
      }
      console.log('触发paste事件 e = ', e);
      console.log('触发paste事件： = ', e.clipboardData.getData('text'));
      var clipboardData = e.clipboardData;
      if (!(clipboardData && clipboardData.items)) {
        return false;
      }
      for (var i = 0, len = clipboardData.items.length; i < len; i++) {
        var item = clipboardData.items[i];
        if (item.kind === 'file') {
          var pasteFile = item.getAsFile();
          // pasteFile就是获取到的文件
          var reader = new FileReader();
          reader.onload = function (event) {
            var base64Img = event.target.result;
            if (me.checkForm.issueList[me.activeName].fileList.findIndex(function (item) {
              return item.url === base64Img;
            }) === -1) {
              // 将获取到的图片的base64码用来创建img元素，并插入到div内
              me.checkForm.issueList[me.activeName].fileList.push({
                url: base64Img
              });
              me.checkForm.issueList[me.activeName].fileBtyeList.push(base64Img);
            }
          };
          reader.readAsDataURL(pasteFile);
        }
        // const copy_content = e.clipboardData.getData('text/plain')
      }
    },
    handler: function handler(event) {
      event.clipboardData.setData('text/plain', '');
      document.removeEventListener('copy', this.handler, true);
      event.preventDefault();
    },
    pastehandler: function pastehandler(event) {
      event.clipboardData.getData('text/plain');
      document.removeEventListener('paste', this.pastehandler, true);
      event.preventDefault();
    },

    // 预览图片
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 删除问题
    deleteIssue: function deleteIssue(num) {
      this.checkForm.issueList.splice(num, 1);
    },
    saveOver: function saveOver(type) {
      var _this6 = this;

      if (type === 'over') {
        this.$refs['checkForm'].validate(function (valid) {
          if (valid) {
            _this6.saveUtil(type);
          }
        });
      } else {
        this.saveUtil(type);
      }
    },

    // 保存问题
    save: function save() {
      this.saveUtil();
    },
    saveUtil: function saveUtil(type) {
      var _this7 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, issue, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, file, formData, res, _formData;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // 先上传图片，同步后得到docid存入
                // if (this.checkForm.issueList.length < 1) {
                //   this.$message.error('请至少添加一个问题')
                //   return false
                // }
                // this.loading = true
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context3.prev = 3;
                _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(_this7.checkForm.issueList);

              case 5:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context3.next = 51;
                  break;
                }

                issue = _step2.value;

                if (!(issue.fileBtyeList.length > 0)) {
                  _context3.next = 42;
                  break;
                }

                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context3.prev = 11;
                _iterator3 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(issue.fileBtyeList);

              case 13:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context3.next = 26;
                  break;
                }

                file = _step3.value;
                formData = new FormData();

                if (issue.docId) {
                  formData.append('docId', issue.docId);
                }
                formData.append('delIds', issue.delIds);
                formData.append('attach', Object(_utils__WEBPACK_IMPORTED_MODULE_9__["dataURLtoBlob"])(file));
                _context3.next = 21;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_8__["uploadDoc"])(formData);

              case 21:
                res = _context3.sent;

                if (res.success) {
                  issue.docId = res.result.id;
                }

              case 23:
                _iteratorNormalCompletion3 = true;
                _context3.next = 13;
                break;

              case 26:
                _context3.next = 32;
                break;

              case 28:
                _context3.prev = 28;
                _context3.t0 = _context3['catch'](11);
                _didIteratorError3 = true;
                _iteratorError3 = _context3.t0;

              case 32:
                _context3.prev = 32;
                _context3.prev = 33;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 35:
                _context3.prev = 35;

                if (!_didIteratorError3) {
                  _context3.next = 38;
                  break;
                }

                throw _iteratorError3;

              case 38:
                return _context3.finish(35);

              case 39:
                return _context3.finish(32);

              case 40:
                _context3.next = 48;
                break;

              case 42:
                if (!issue.docId) {
                  _context3.next = 48;
                  break;
                }

                _formData = new FormData();

                _formData.append('docId', issue.docId);
                _formData.append('delIds', issue.delIds);
                _context3.next = 48;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_8__["uploadDoc"])(_formData);

              case 48:
                _iteratorNormalCompletion2 = true;
                _context3.next = 5;
                break;

              case 51:
                _context3.next = 57;
                break;

              case 53:
                _context3.prev = 53;
                _context3.t1 = _context3['catch'](3);
                _didIteratorError2 = true;
                _iteratorError2 = _context3.t1;

              case 57:
                _context3.prev = 57;
                _context3.prev = 58;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 60:
                _context3.prev = 60;

                if (!_didIteratorError2) {
                  _context3.next = 63;
                  break;
                }

                throw _iteratorError2;

              case 63:
                return _context3.finish(60);

              case 64:
                return _context3.finish(57);

              case 65:
                if (type && type === 'over') {
                  _this7.checkForm.exmStatus = '2';
                } else if (type && type === 'complete') {
                  _this7.checkForm.exmStatus = '3';
                }
                Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_7__["saveForm"])(_this7.checkForm).then(function (res) {
                  if (res.success) {
                    _this7.$message.success(res.message);
                    if (!type) {
                      return;
                    }
                    var view = {
                      name: 'reviewSlip',
                      path: '/BIM/reviewSlip',
                      title: '审查单'
                    };
                    _this7.$store.dispatch('delVisitedViews', view).then(function () {
                      _this7.$router.push('/BIM/bimCheck');
                    });
                  }
                  // this.loading = false
                });

              case 67:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this7, [[3, 53, 57, 65], [11, 28, 32, 40], [33,, 35, 39], [58,, 60, 64]]);
      }))();
    }
  }
});

/***/ }),

/***/ "XTIp":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/components/reviewSlip/index.vue?vue&type=template&id=4b790336& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container reviewSlipDiv"},[_c('my-card',{attrs:{"title":"审查单"}},[_c('el-form',{ref:"checkForm",attrs:{"rules":_vm.rules,"model":_vm.checkForm,"label-position":"left","size":"small","label-width":"100px"}},[_c('el-card',{staticClass:"box-card"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("基本信息")]),_vm._v(" "),(_vm.checkForm.exmStatus == '1')?_c('el-button',{staticStyle:{"float":"right","padding":"3px 0"},attrs:{"type":"text"},on:{"click":function($event){return _vm.saveOver('over')}}},[_vm._v("提交问题")]):_vm._e(),_vm._v(" "),(_vm.checkForm.exmStatus == '2')?_c('el-button',{staticStyle:{"float":"right","padding":"3px 0"},attrs:{"type":"text"},on:{"click":function($event){return _vm.saveOver('complete')}}},[_vm._v("整改完成")]):_vm._e(),_vm._v(" "),(_vm.checkForm.exmStatus == '1')?_c('el-button',{staticStyle:{"float":"right","padding":"3px 0","margin-right":"10px"},attrs:{"type":"text"},on:{"click":_vm.save}},[_vm._v("临时保存")]):_vm._e()],1),_vm._v(" "),_c('el-row',{staticClass:"titleRow"},[_c('el-col',{attrs:{"span":6}},[_c('label',[_vm._v("模型：")]),_vm._v(" "),_c('label',{attrs:{"title":_vm.checkForm.name}},[_vm._v(_vm._s(_vm.checkForm.name))])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('label',[_vm._v("版本：")]),_vm._v(" "),_c('label',[_vm._v("V"+_vm._s(_vm.checkForm.version))])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('label',[_vm._v("审查日期：")]),_vm._v(" "),_c('label',[_vm._v(_vm._s(_vm._f("parseTime")(_vm.checkForm.exmDate,'{y}-{m}-{d}')))])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[(_vm.checkForm.exmStatus == '1')?_c('el-form-item',{staticStyle:{"margin-bottom":"0px","margin-left":"-10px"},attrs:{"label":"整改期限:","prop":"deadlineDate"}},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.checkForm.deadlineDate),callback:function ($$v) {_vm.$set(_vm.checkForm, "deadlineDate", $$v)},expression:"checkForm.deadlineDate"}})],1):_vm._e(),_vm._v(" "),(_vm.checkForm.exmStatus != '1')?_c('label',[_vm._v("整改期限：")]):_vm._e(),_vm._v(" "),(_vm.checkForm.exmStatus != '1')?_c('label',[_vm._v(_vm._s(_vm._f("parseTime")(_vm.checkForm.deadlineDate,'{y}-{m}-{d}')))]):_vm._e()],1)],1),_vm._v(" "),_c('el-row',{staticClass:"titleRow mar20",style:({'margin-bottom':_vm.checkForm.exmStatus != '1' ? '10px' : '20px'})},[_c('el-col',{attrs:{"span":6}},[_c('label',[_vm._v("上传单位：")]),_vm._v(" "),_c('label',[_vm._v(_vm._s(_vm.checkForm.upUserOrg))])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('label',[_vm._v("上传人：")]),_vm._v(" "),_c('label',[_vm._v(_vm._s(_vm.checkForm.upUser))])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('label',[_vm._v("上传日期：")]),_vm._v(" "),_c('label',[_vm._v(_vm._s(_vm._f("parseTime")(_vm.checkForm.upDate,'{y}-{m}-{d}')))])]),_vm._v(" "),_c('el-col',{staticStyle:{"margin-top":"-8px"},attrs:{"span":6}},[_c('label',[_vm._v("整改日期：")]),_vm._v(" "),_c('label',[_vm._v(_vm._s(_vm._f("parseTime")(_vm.checkForm.rectifyDate,'{y}-{m}-{d}')))])])],1),_vm._v(" "),_c('el-row',{staticClass:"titleRow"},[_c('el-col',{attrs:{"span":6}},[_c('label',[_vm._v("审查单位：")]),_vm._v(" "),_c('label',[_vm._v(_vm._s(_vm.checkForm.exmUserOrg))])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('label',[_vm._v("审查人：")]),_vm._v(" "),_c('label',[_vm._v(_vm._s(_vm.checkForm.exmUser))])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('label',[_vm._v("状态：")]),_vm._v(" "),_c('label',[_vm._v(_vm._s(_vm._f("getNameByCode")(_vm.checkForm.exmStatus,'exm_status')))])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}})],1)],1),_vm._v(" "),_c('el-card',{staticClass:"box-card tCard"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("问题列表")]),_vm._v(" "),(_vm.checkForm.exmStatus == '1')?_c('el-button',{staticStyle:{"float":"right","padding":"3px 0","margin-right":"10px"},attrs:{"type":"text"},on:{"click":_vm.addColl}},[_vm._v("添加")]):_vm._e()],1),_vm._v(" "),_c('el-collapse',{attrs:{"accordion":""},model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},_vm._l((_vm.checkForm.issueList),function(item,index){return _c('el-collapse-item',{key:index,attrs:{"name":index}},[_c('template',{slot:"title"},[_c('label',{staticClass:"flex-1"},[_vm._v("问题"+_vm._s(index+1))]),_vm._v(" "),(_vm.checkForm.exmStatus == '1')?_c('i',{staticClass:"icon iconfont iconshanchu1",staticStyle:{"font-size":"30px","color":"red"},attrs:{"title":"删除"},on:{"click":function($event){return _vm.deleteIssue(index)}}}):_vm._e()]),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"问题类型","prop":"type"}},[_c('el-select',{attrs:{"filterable":"","placeholder":"请选择问题类型"},model:{value:(item.type),callback:function ($$v) {_vm.$set(item, "type", $$v)},expression:"item.type"}},_vm._l((_vm.dictMap['model_question_type']),function(qbs){return _c('el-option',{key:qbs.code,attrs:{"label":qbs.name,"value":qbs.code}})}),1)],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"问题视图","prop":"viewer"}},[_vm._l((item.bimViews),function(item,i){return _c('img',{key:i,staticStyle:{"width":"100px","height":"100px","cursor":"pointer"},attrs:{"src":_vm.fileUrl+'img/'+item.pic},on:{"click":function($event){return _vm.getView(index)}}})}),_vm._v(" "),(_vm.checkForm.exmStatus == '1')?_c('div',{staticClass:"el-upload el-upload--picture-card",attrs:{"tabindex":"0"},on:{"click":function($event){return _vm.getView(index)}}},[_c('i',{staticClass:"el-icon-plus"})]):_vm._e()],2)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"问题图片","prop":"viewer"}},[_c('el-upload',{attrs:{"action":"","list-type":"picture-card","http-request":_vm.upload,"on-preview":_vm.handlePictureCardPreview,"on-remove":_vm.handleRemove,"disabled":_vm.checkForm.exmStatus != '1',"file-list":item.fileList}},[(_vm.checkForm.exmStatus == '1')?_c('i',{staticClass:"el-icon-plus"}):_vm._e()])],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"问题描述","prop":"viewer"}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(item.description),expression:"item.description"}],staticStyle:{"width":"100%"},attrs:{"rows":"6"},domProps:{"value":(item.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "description", $event.target.value)}}})])],1)],1)],2)}),1)],1)],1),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"visible":_vm.dialogVisible,"title":"预览"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "XiYf":
/*!***************************************************************!*\
  !*** ./src/views/project/BIM/components/reviewSlip/index.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4b790336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4b790336& */ "EA5I");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "FO8B");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "gzRx");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4b790336___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4b790336___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "gzRx":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/project/BIM/components/reviewSlip/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "GoyG");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);