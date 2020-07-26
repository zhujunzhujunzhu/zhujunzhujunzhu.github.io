(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-4474"],{

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

/***/ 79:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 80:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 81:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 82:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "Hn2C":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/projectDashboard/components/notice.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "J5ki":
/*!*****************************************************************************************!*\
  !*** ./src/views/projectDashboard/components/notice.vue?vue&type=template&id=8ce42dc6& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_template_id_8ce42dc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./notice.vue?vue&type=template&id=8ce42dc6& */ "zR5g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_template_id_8ce42dc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_template_id_8ce42dc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "R/JX":
/*!********************************************************************************************!*\
  !*** ./src/views/projectDashboard/components/notice.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./notice.vue?vue&type=style&index=0&lang=scss& */ "Hn2C");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "T7Is":
/*!**********************************************************!*\
  !*** ./src/views/projectDashboard/components/notice.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notice_vue_vue_type_template_id_8ce42dc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice.vue?vue&type=template&id=8ce42dc6& */ "J5ki");
/* harmony import */ var _notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice.vue?vue&type=script&lang=js& */ "mML1");
/* empty/unused harmony star reexport *//* harmony import */ var _notice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice.vue?vue&type=style&index=0&lang=scss& */ "R/JX");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notice_vue_vue_type_template_id_8ce42dc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notice_vue_vue_type_template_id_8ce42dc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "notice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "mML1":
/*!***********************************************************************************!*\
  !*** ./src/views/projectDashboard/components/notice.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./notice.vue?vue&type=script&lang=js& */ "yNjP");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "yNjP":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/projectDashboard/components/notice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony import */ var _api_project_dispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/dispatch */ "EEB7");
/* harmony import */ var _api_project_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/project/news */ "3Zin");
/* harmony import */ var _api_project_disReceiveDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/project/disReceiveDocument */ "hlZ4");
/* harmony import */ var _api_project_meeting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/project/meeting */ "Y1W8");
/* harmony import */ var _api_project_rulesRegulations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/project/rulesRegulations */ "yiYg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _views_project_projectScheduling_receivingAndIssuing_receivingAndIssuingDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/project/projectScheduling/receivingAndIssuing/receivingAndIssuingDialog */ "1ItX");
/* harmony import */ var _project_projectScheduling_dispatching_dispatchingDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../project/projectScheduling/dispatching/dispatchingDialog */ "FvoM");
/* harmony import */ var _views_project_projectScheduling_components_meetingNoticeDetialDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/project/projectScheduling/components/meetingNoticeDetialDialog */ "m8xR");
/* harmony import */ var _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/tableAttach.js */ "2fVa");
/* harmony import */ var _components_PDF_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/PDF/index */ "QfQx");



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
  components: {
    meetingNoticeDetialDialog: _views_project_projectScheduling_components_meetingNoticeDetialDialog__WEBPACK_IMPORTED_MODULE_11__["default"],
    pdf: _components_PDF_index__WEBPACK_IMPORTED_MODULE_13__["default"],
    receivingAndIssuingDialog: _views_project_projectScheduling_receivingAndIssuing_receivingAndIssuingDialog__WEBPACK_IMPORTED_MODULE_9__["default"],
    dispatchingDialog: _project_projectScheduling_dispatching_dispatchingDialog__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      menus: [{ name: '新闻中心' }, { name: '公告公示' }, { name: '调度信息' }, { name: '规章制度' }, { name: '收发文' }],
      activeIndex: 0,
      listAll: [],
      list: [],
      listQuery: {
        currPage: 1,
        pageSize: 8
      },
      isShow: false,
      listBool: false,
      recordList: {},
      dailogStatus: 'view',
      detialShow: false,
      info: {},
      loading: false,
      mettingDetialShow: false,
      pdfShow: false,
      pdfTitle: '',
      pdfSrc: '',
      iconClass: 'iconfont iconfujian',
      form: {},
      isDispatchShow: false
    };
  },
  mounted: function mounted() {
    this.getNewsList();
  },

  methods: {
    clickFun: function clickFun(index) {
      // 处理两次点击相同的tab不处理
      if (index === this.activeIndex) return;
      if (this.loading) return; // 当正在加载数据时不能进行切换
      this.activeIndex = index;
      if (index === 0) {
        this.getNewsList();
      } else if (index === 1) {
        this.getNoticeList();
      } else if (index === 2) {
        this.getDispatchList();
      } else if (index === 3) {
        this.getRulesRegulations();
      } else if (index === 4) {
        this.getReceiveList();
      } else {
        this.getMeetingList();
      }
    },
    classFun: function classFun(index) {
      if (this.activeIndex === index) {
        return 'active';
      }
    },
    dealIconClass: function dealIconClass(urlInfo) {
      // if (!urlInfo) {
      //   return 'iconfont iconfujian'
      // } else {
      //   const regExp = /(.+?)\.pdf$/
      //   if (regExp.test(urlInfo.url)) {
      //     return 'iconfont iconfujian'
      //   } else {
      //     return 'iconfont iconxiazai2'
      //   }
      // }
      return 'iconfont iconxiazai2';
    },
    getNewsList: function getNewsList() {
      var _this = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_news__WEBPACK_IMPORTED_MODULE_4__["getNewsList"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.listQuery, { status: 'yfb' })).then(function (res) {
        if (res.success) {
          _this.loading = false;
          if (!res.result) return;
          _this.total = res.result.total;
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_12__["default"].getUrlList(res.result.list, 'docId', true).then(function (urlList) {
            _this.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.deployDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, { name: item.title, urls: urlList[index] });
            });
          });
        }
      });
    },
    getNoticeList: function getNoticeList() {
      var _this2 = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_news__WEBPACK_IMPORTED_MODULE_4__["getNoticeList"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.listQuery, { status: 'yfb' })).then(function (res) {
        if (res.success) {
          _this2.loading = false;
          if (!res.result) return;
          _this2.total = res.result.total;
          // 处理docId 第三个参数 isDown 明确是进行下载的
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_12__["default"].getUrlList(res.result.list, 'fileDocId', true).then(function (urlList) {
            _this2.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.deployDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, { name: item.title, urls: urlList[index] });
            });
          });
        }
      });
    },
    getDispatchList: function getDispatchList() {
      var _this3 = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_dispatch__WEBPACK_IMPORTED_MODULE_3__["list"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.listQuery, { deployStatus: 'yfb' })).then(function (res) {
        if (res.success) {
          _this3.loading = false;
          if (!res.result) return;
          _this3.total = res.result.total;
          // this.list = res.result.list.map(item => {
          //   return { ...item, time: parseTime(item.sponsorDate, '{y}-{m}-{d} {h}:{i}') }
          // })
          // 处理docId 第三个参数 isDown 明确是进行下载的
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_12__["default"].getUrlList(res.result.list, 'docId', true).then(function (urlList) {
            _this3.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.sponsorDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, { urls: urlList[index] });
            });
          });
        }
      });
    },
    getRulesRegulations: function getRulesRegulations() {
      var _this4 = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_rulesRegulations__WEBPACK_IMPORTED_MODULE_7__["regulationsList"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.listQuery, { status: 'yfb' })).then(function (res) {
        if (res.success) {
          _this4.loading = false;
          if (!res.result) return;
          _this4.total = res.result.total;
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_12__["default"].getUrlList(res.result.list, 'fileDocId', true).then(function (urlList) {
            _this4.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.deployDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, { name: item.title, urls: urlList[index] });
            });
          });
        }
      });
    },
    getReceiveList: function getReceiveList() {
      var _this5 = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_disReceiveDocument__WEBPACK_IMPORTED_MODULE_5__["list"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.listQuery, { deployStatus: 'yfb' })).then(function (res) {
        if (res.success) {
          _this5.loading = false;
          if (!res.result) return;
          _this5.total = res.result.total;
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_12__["default"].getUrlList(res.result.list, 'docId', true).then(function (urlList) {
            _this5.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.receiveDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, { name: item.title, urls: urlList[index] });
            });
          });
        }
      });
    },
    getMeetingList: function getMeetingList() {
      var _this6 = this;

      this.loading = true;
      this.list = [];
      Object(_api_project_meeting__WEBPACK_IMPORTED_MODULE_6__["list"])(this.listQuery).then(function (res) {
        if (res.success) {
          _this6.loading = false;
          if (!res.result) return;
          _this6.total = res.result.total;
          _utils_tableAttach_js__WEBPACK_IMPORTED_MODULE_12__["default"].getUrlList(res.result.list, 'docId', true).then(function (urlList) {
            _this6.list = res.result.list.map(function (item, index) {
              item.time = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.sponsorDate, '{y}-{m}-{d} {h}:{i}');
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, { name: item.title, urls: urlList[index] });
            });
          });
        }
      });
    },
    goMorePage: function goMorePage() {
      // 点击不同的更多跳转到不同的列表页面 新闻中心 通知公告 调度信息 规章制度
      var routers = ['SeeMoreNews', 'seeMoreNotice', 'dispatching', 'rulesRegulations', 'receivingAndIssuing'];
      this.$router.push('/projectScheduling/' + routers[this.activeIndex]);
    },
    goDetial: function goDetial(info) {
      var _this7 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this7.activeIndex === 0)) {
                  _context.next = 4;
                  break;
                }

                // 新闻中心详情
                if (info.content) {
                  _this7.$storage.setStorage('toDetialPageNewsInfo', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
                    from: 'news'
                  }, info));
                  _this7.$router.push('/projectScheduling/detialPageNews');
                } else {
                  _this7.openPdf(info);
                }
                _context.next = 23;
                break;

              case 4:
                if (!(_this7.activeIndex === 1)) {
                  _context.next = 8;
                  break;
                }

                // 公告通知
                Object(_api_project_news__WEBPACK_IMPORTED_MODULE_4__["saveNotice"])({ newsId: info.id }).then(function (res) {
                  if (info.content) {
                    _this7.$storage.setStorage('toDetialPageNewsInfo', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
                      from: 'notice'
                    }, info));
                    _this7.$router.push('/projectScheduling/detialPageNews');
                  } else {
                    _this7.openPdf(info);
                  }
                });
                _context.next = 23;
                break;

              case 8:
                if (!(_this7.activeIndex === 2)) {
                  _context.next = 22;
                  break;
                }

                _this7.form = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, info);
                _this7.dailogStatus = 'view';
                _this7.isDispatchShow = true;
                _this7.listBool = true;
                _context.next = 15;
                return Object(_api_project_dispatch__WEBPACK_IMPORTED_MODULE_3__["saveDispatchReadMessage"])({ id: info.id });

              case 15:
                _context.next = 17;
                return Object(_api_project_dispatch__WEBPACK_IMPORTED_MODULE_3__["getDispatchReadRecord"])({ id: info.id });

              case 17:
                res = _context.sent;

                if (res.success) {
                  _this7.recordList = res.result;
                }
                _this7.openPdf(info);
                _context.next = 23;
                break;

              case 22:
                if (_this7.activeIndex === 3) {
                  // 规章制度 弹框
                  if (info.content) {
                    _this7.$storage.setStorage('toDetialPageNewsInfo', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
                      from: 'notice'
                    }, info));
                    _this7.$router.push('/projectScheduling/detialPageNews');
                  } else {
                    _this7.openPdf(info);
                  }
                } else if (_this7.activeIndex === 4) {
                  _this7.form = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, info);
                  _this7.dailogStatus = 'view';
                  _this7.isShow = true;
                  _this7.listBool = true;
                  Object(_api_project_disReceiveDocument__WEBPACK_IMPORTED_MODULE_5__["saveReceiveReadMessage"])({ id: info.id }).then(function (res) {
                    if (res.success) {
                      Object(_api_project_disReceiveDocument__WEBPACK_IMPORTED_MODULE_5__["getReadRecord"])({ id: info.id }).then(function (res) {
                        _this7.recordList = res.result;
                      });
                    }
                  });
                }

              case 23:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this7);
      }))();
    },
    download: function download(firstPdf) {
      var _this8 = this;

      this.$confirm('请点击下载预览', '提示', {
        confirmButtonText: '下载',
        cancelButtonText: '取消',
        type: 'info'
      }).then(function () {
        window.open(firstPdf);
        _this8.$message({
          type: 'success',
          message: '下载成功'
        });
      }).catch(function () {
        _this8.$message({
          type: 'info',
          message: '取消下载'
        });
      });
    },
    openPdf: function openPdf(info) {
      var regExp = /(.+?)\.(pdf|jpg|gif|bmp|jpeg|png|bmp|tiff)$/;
      var url = '';
      // 首先判断有无附件
      if (info.urls.length === 0) {
        this.$message({
          type: 'warning',
          message: '无附件'
        });
        return;
      }
      // 尝试找到第一个可以直接用浏览器打开的pdf或者图片
      for (var index = 0; index < info.urls.length; index++) {
        if (regExp.test(info.urls[index].url)) {
          url = info.urls[index].url;
          break;
        }
      }
      if (url) {
        url = url.replace('/doc', '/img');
        // 将doc替换为img
        window.open(url);
      } else {
        url = info.urls[0].url;
        this.download(url);
      }
    },
    openFile: function openFile(inner, item) {
      window.open(inner.url);
      // 当为公告公示时的处理   调用后台saveNotice接口保存阅读量
      if (this.activeIndex === 1) {
        Object(_api_project_news__WEBPACK_IMPORTED_MODULE_4__["saveNotice"])({ newsId: item.id }).then(function (res) {});
      }
    }
  }
});

/***/ }),

/***/ "yiYg":
/*!*********************************************!*\
  !*** ./src/api/project/rulesRegulations.js ***!
  \*********************************************/
/*! exports provided: regulationsList, save, regulationsDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regulationsList", function() { return regulationsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regulationsDelete", function() { return regulationsDelete; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function regulationsList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/regulationsList',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/save',
    method: 'post',
    data: param
  });
}
function regulationsDelete(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/news/delete',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "zR5g":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/projectDashboard/components/notice.vue?vue&type=template&id=8ce42dc6& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"homeInfoDiv"},[_c('div',{staticClass:"header flex flex-space-between flex-middle"},[_c('div',{staticClass:"menuTab flex flex-middle pointer"},[_c('i',{staticClass:"iconfont iconxinwen"}),_vm._v(" "),_vm._l((_vm.menus),function(item,index){return _c('div',{key:index,class:_vm.classFun(index),on:{"click":function($event){return _vm.clickFun(index)}}},[_vm._v("\n        "+_vm._s(item.name)+"\n        "),( (index !== _vm.menus.length-1))?_c('span',[_vm._v("/")]):_vm._e()])})],2),_vm._v(" "),_c('div',{staticClass:"more pointer",on:{"click":function($event){return _vm.goMorePage()}}},[_vm._v("更多 >")])]),_vm._v(" "),_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"content"},[(_vm.list.length!==0)?_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"card-content-item flex-space-between"},[_c('div',{staticClass:"flex flex-1 flex-space-between"},[_c('div',{staticClass:"text-overflow flex-1 nameDiv",on:{"click":function($event){return _vm.goDetial(item)}}},[_vm._v(_vm._s(item.name))]),_vm._v(" "),(item.urls && item.urls.length>0)?_c('div',_vm._l((item.urls.slice(0,3)),function(inner,innerIndex){return _c('span',{key:innerIndex+'_'+index,class:_vm.dealIconClass(inner),attrs:{"title":inner.originalFileName},on:{"click":function($event){return _vm.openFile(inner,item)}}})}),0):_vm._e()]),_vm._v(" "),(_vm.activeIndex !==2)?_c('div',{staticClass:"time fs-14 color-999"},[_vm._v(_vm._s(item.time))]):_vm._e()])}):_c('div',{staticClass:"no-data"},[_vm._v("暂无数据")])],2),_vm._v(" "),(_vm.isDispatchShow)?_c('dispatchingDialog',{attrs:{"is-show":_vm.isDispatchShow,"dailog-status":_vm.dailogStatus,"form":_vm.form,"record-list":_vm.recordList,"list-bool":_vm.listBool},on:{"update:isShow":function($event){_vm.isDispatchShow=$event},"update:is-show":function($event){_vm.isDispatchShow=$event}}}):_vm._e(),_vm._v(" "),_c('meetingNoticeDetialDialog',{attrs:{"detial-show":_vm.mettingDetialShow,"info":_vm.info},on:{"update:detialShow":function($event){_vm.mettingDetialShow=$event},"update:detial-show":function($event){_vm.mettingDetialShow=$event}}}),_vm._v(" "),(_vm.isShow)?_c('receivingAndIssuingDialog',{attrs:{"is-show":_vm.isShow,"dailog-status":_vm.dailogStatus,"form":_vm.form,"record-list":_vm.recordList,"list-bool":_vm.listBool},on:{"update:isShow":function($event){_vm.isShow=$event},"update:is-show":function($event){_vm.isShow=$event}}}):_vm._e(),_vm._v(" "),(_vm.pdfShow)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"pdf-notice-dialog-container",attrs:{"title":_vm.pdfTitle,"visible":_vm.pdfShow,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.pdfShow=$event}}},[_c('pdf',{attrs:{"src":_vm.pdfSrc},on:{"update:src":function($event){_vm.pdfSrc=$event}}})],1):_vm._e()],1)}
var staticRenderFns = []



/***/ })

}]);