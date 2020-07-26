(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-09b2"],{

/***/ "3Zin":
/*!*********************************!*\
  !*** ./src/api/project/news.js ***!
  \*********************************/
/*! exports provided: getNewsList, getNoticeList, deleteNews, saveNews, releaseNews, getNews, uploadFiles, saveNotice, dealTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsList", function() { return getNewsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNoticeList", function() { return getNoticeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNews", function() { return deleteNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveNews", function() { return saveNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseNews", function() { return releaseNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFiles", function() { return uploadFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveNotice", function() { return saveNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealTask", function() { return dealTask; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getNewsList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/list',
    method: 'post',
    data: param
  });
}

function getNoticeList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/noticeList',
    method: 'post',
    data: param
  });
}

function deleteNews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/delete',
    method: 'post',
    data: param
  });
}

function saveNews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/save',
    method: 'post',
    data: param
  });
}

// 新闻公告发布
function releaseNews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/release',
    method: 'post',
    data: param
  });
}

function getNews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/get',
    method: 'post',
    data: param
  });
}

// 上传文件
function uploadFiles(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/uploadFiles',
    method: 'post',
    data: param
  });
}

// 保存公告的查看信息  记录统计阅读次数
function saveNotice(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/saveNotice',
    method: 'post',
    data: param
  });
}

// 新闻流程审批
function dealTask(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/dealTask',
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

/***/ "Bu1/":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/detialPageNews.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "DPWf":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/detialPageNews.vue?vue&type=template&id=3a2458a2& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container detailPageNews"},[_c('my-card',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"span-left":"-11px"}},[_c('div',{staticClass:"inner-wrapper"},[_c('div',{staticClass:"head-title "},[_vm._v("\n        "+_vm._s(_vm.news.title)+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"sub-title  flex-middle"},[(_vm.news.deploy_user)?_c('div',[_vm._v("\n          发布人："+_vm._s(_vm.news.deploy_user)+"\n        ")]):_vm._e(),_vm._v(" "),(_vm.news.time)?_c('div',[_vm._v("\n          发布时间 "+_vm._s(_vm.news.time)+"\n        ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"splitLine"}),_vm._v(" "),(_vm.news.content)?_c('div',{staticClass:"content fs-20",domProps:{"innerHTML":_vm._s(_vm.news.content)}}):_vm._e(),_vm._v(" "),(_vm.attachList.length>0)?_c('div',{staticClass:"attachList"},[_c('div',{staticClass:"font-bold fs-18 flex-middle"},[_vm._v("\n          附件\n        ")]),_vm._v(" "),_c('div',_vm._l((_vm.attachList),function(item,index){return _c('div',{key:index,staticClass:"attach-item pointer",on:{"click":function($event){return _vm.downAttach(item.url)}}},[_vm._v("\n            "+_vm._s(index+1)+". "+_vm._s(item.originalFileName)+"\n          ")])}),0)]):_vm._e(),_vm._v(" "),(_vm.baseInfo.from !== 'news' && (_vm.readRecordList.length >0))?_c('detialPageNewsReadRecord',{attrs:{"loading":_vm.readRecordLoading,"data-list":_vm.readRecordList}}):_vm._e()],1)])],1)}
var staticRenderFns = []



/***/ }),

/***/ "ISzg":
/*!*************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/detialPageNewsReadRecord.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detialPageNewsReadRecord_vue_vue_type_template_id_7039f65a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detialPageNewsReadRecord.vue?vue&type=template&id=7039f65a& */ "V9ZQ");
/* harmony import */ var _detialPageNewsReadRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detialPageNewsReadRecord.vue?vue&type=script&lang=js& */ "tLRU");
/* empty/unused harmony star reexport *//* harmony import */ var _detialPageNewsReadRecord_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detialPageNewsReadRecord.vue?vue&type=style&index=0&lang=scss& */ "xCG+");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detialPageNewsReadRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detialPageNewsReadRecord_vue_vue_type_template_id_7039f65a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detialPageNewsReadRecord_vue_vue_type_template_id_7039f65a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "detialPageNewsReadRecord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "OUuu":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/detialPageNewsReadRecord.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "PCtQ":
/*!****************************************************************!*\
  !*** ./src/views/project/projectScheduling/detialPageNews.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detialPageNews_vue_vue_type_template_id_3a2458a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detialPageNews.vue?vue&type=template&id=3a2458a2& */ "Y8Vs");
/* harmony import */ var _detialPageNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detialPageNews.vue?vue&type=script&lang=js& */ "gNWd");
/* empty/unused harmony star reexport *//* harmony import */ var _detialPageNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detialPageNews.vue?vue&type=style&index=0&lang=scss& */ "jiOq");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detialPageNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detialPageNews_vue_vue_type_template_id_3a2458a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detialPageNews_vue_vue_type_template_id_3a2458a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "detialPageNews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "V9ZQ":
/*!********************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/detialPageNewsReadRecord.vue?vue&type=template&id=7039f65a& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_template_id_7039f65a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detialPageNewsReadRecord.vue?vue&type=template&id=7039f65a& */ "XPRK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_template_id_7039f65a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_template_id_7039f65a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "XPRK":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/detialPageNewsReadRecord.vue?vue&type=template&id=7039f65a& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detialPageNewsReadRecordDiv"},[_c('div',{staticClass:"title"},[_vm._v("\n    日志记录\n  ")]),_vm._v(" "),_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.list,"columns":_vm.columns,"list-loading":_vm.loading}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "Y8Vs":
/*!***********************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/detialPageNews.vue?vue&type=template&id=3a2458a2& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_template_id_3a2458a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./detialPageNews.vue?vue&type=template&id=3a2458a2& */ "DPWf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_template_id_3a2458a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_template_id_3a2458a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "Y9go":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/detialPageNews.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _api_project_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/project/news */ "3Zin");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _components_detialPageNewsReadRecord__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/detialPageNewsReadRecord */ "ISzg");
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/doc */ "5HWN");



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
  components: { MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_3__["default"], tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_7__["default"], detialPageNewsReadRecord: _components_detialPageNewsReadRecord__WEBPACK_IMPORTED_MODULE_8__["default"] },
  data: function data() {
    return {
      news: {},
      baseInfo: {},
      title: '新闻详情',
      attachList: [],
      columns: [{
        text: '名称',
        value: 'name'
      }, {
        text: '大小',
        value: 'code'
      }],
      readRecordList: [], // 阅读次数列表
      readRecordLoading: false
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(['loading', 'fileUrl'])),
  mounted: function mounted() {
    this.getInitInfo();
  },

  methods: {
    getInitInfo: function getInitInfo() {
      var baseInfo = this.$storage.getStorage('toDetialPageNewsInfo');
      if (!baseInfo) return;
      this.baseInfo = JSON.parse(baseInfo);
      this.dealTitle();
      this.getNews();
    },
    dealTitle: function dealTitle() {
      if (this.baseInfo.from === 'news') {
        this.title = '新闻详情';
        var view = {
          path: '/projectScheduling/detialPageNews',
          title: '新闻详情'
        };
        this.$store.dispatch('updateViewName', view);
      } else {
        this.title = '公告公示详情';
        // 更改tabview名称
        var _view = {
          path: '/projectScheduling/detialPageNews',
          title: '公告公示详情'
        };
        this.$store.dispatch('updateViewName', _view);
      }
    },

    // 获取新闻 或者 公告 详情
    getNews: function getNews() {
      var _this = this;

      this.readRecordLoading = true;
      Object(_api_project_news__WEBPACK_IMPORTED_MODULE_4__["getNews"])({ id: this.baseInfo.id }).then(function (res) {
        if (res.success) {
          if (!res.result) return;
          _this.readRecordLoading = false; // 阅读次数列表的loading
          _this.news = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, res.result, { time: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(res.result.deployDate, '{y}-{m}-{d} {h}:{i}')
            //  各单位阅读统计
          });_this.readRecordList = _this.news.newsNoticeList;
          // 查询附件列表
          if (_this.news.fileDocId) {
            _this.getAttachList(_this.news.fileDocId);
          }
        }
      });
    },
    getAttachList: function getAttachList(docId) {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var back;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_9__["attachList"])({
                  docId: docId
                });

              case 2:
                back = _context.sent;

                if (back.success) {
                  _this2.attachList = back.result.map(function (item) {
                    if (item.fileName) {
                      item.url = _this2.fileUrl + 'img/' + item.fileName;
                    }
                    return item;
                  });
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },

    // 表格操作按鈕
    operButton: function operButton() {
      return [{ class: 'iconxiugai', value: '下载', click: this.downAttach }];
    },
    downAttach: function downAttach(url) {
      window.open(url);
    }
  }
});

/***/ }),

/***/ "gNWd":
/*!*****************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/detialPageNews.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./detialPageNews.vue?vue&type=script&lang=js& */ "Y9go");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "jiOq":
/*!**************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/detialPageNews.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./detialPageNews.vue?vue&type=style&index=0&lang=scss& */ "Bu1/");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "tLRU":
/*!**************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/detialPageNewsReadRecord.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detialPageNewsReadRecord.vue?vue&type=script&lang=js& */ "v6XR");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "v6XR":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/detialPageNewsReadRecord.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "7Qib");
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
  components: { tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_0__["default"] },
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    dataList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      list: [],
      columns: [{
        text: '单位',
        value: 'orgName',
        sortable: false
      }, {
        text: '状态',
        value: 'status',
        sortable: false
      }, {
        text: '首次阅读时间',
        value: 'readDate',
        sortable: false
      }]
    };
  },

  watch: {
    loading: function loading() {
      if (!this.loading) {
        this.dealList();
      }
    }
  },
  mounted: function mounted() {
    this.dealList();
  },

  methods: {
    dealList: function dealList() {
      this.list = this.dataList.map(function (item) {
        if (!item.readDate) {
          item.status = '未查收';
        } else {
          item.status = '已查收';
          item.readDate = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseTime"])(item.readDate, '{y}-{m}-{d} {h}:{i}');
        }
        return item;
      });
    }
  }
});

/***/ }),

/***/ "xCG+":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/detialPageNewsReadRecord.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detialPageNewsReadRecord.vue?vue&type=style&index=0&lang=scss& */ "OUuu");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_detialPageNewsReadRecord_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);