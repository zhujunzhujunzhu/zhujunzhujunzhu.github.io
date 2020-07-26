(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-1da8"],{

/***/ "1+3H":
/*!***********************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/seeMoreNews.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./seeMoreNews.vue?vue&type=style&index=0&lang=scss& */ "tjiL");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6mvm":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/seeMoreNews.vue?vue&type=template&id=035afbd3& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container seeMoreNews"},[_c('my-card',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"title":"新闻中心列表","span-left":"-11px"}},[_c('search-bar',{attrs:{"forms":_vm.forms,"list-query":_vm.listQuery1}},[_c('div',{attrs:{"slot":"right"},slot:"right"},[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"},{name:"button-privilege",rawName:"v-button-privilege",value:('P_gcdd_xwgg_xwbc'),expression:"'P_gcdd_xwgg_xwbc'"}],staticClass:"filter-item addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addFun}},[_vm._v("添加")])],1)]),_vm._v(" "),_c('div',{staticClass:"news-card"},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"news-card-item flex-space-between pointer"},[_c('div',{staticClass:"pic flex-center flex-middle"},[_c('img',{attrs:{"src":item.url,"width":"100","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"card-btns"},[(_vm.dealApprovalPrivilege(item))?_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"审批","placement":"top-start"}},[_c('i',{staticClass:"iconfont iconedit btn-icon",on:{"click":function($event){return _vm.approvalFun(item)}}})]):_vm._e(),_vm._v(" "),(item.status!=='yfb' && item.state !== 1)?_c('el-tooltip',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_gcdd_xwgg_xwbc'),expression:"'P_gcdd_xwgg_xwbc'"}],staticClass:"item",attrs:{"effect":"dark","content":"编辑","placement":"top-start"}},[_c('i',{staticClass:"iconfont iconxiugai btn-icon",on:{"click":function($event){return _vm.editFun(item)}}})]):_vm._e(),_vm._v(" "),(_vm.deleteShow(item))?_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"删除","placement":"top-start"}},[_c('i',{staticClass:"iconfont iconshanchu1 btn-icon",on:{"click":function($event){return _vm.deleteFun(item)}}})]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"des"},[_c('div',{staticClass:"time fs-9 mt20 mb20"},[_vm._v(_vm._s(item.time))]),_vm._v(" "),_c('div',{staticClass:"fs-16 color-265EAB mt20 mb20",on:{"click":function($event){return _vm.goDetial(item)}}},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"color-888 fs-12 lh24 text-overflow-multi"},[_c('div',{domProps:{"innerHTML":_vm._s(item.noImgContent)}})])])])}),0),_vm._v(" "),_c('div',{staticClass:"mt20 mb20 flex-center"},[(_vm.total>=_vm.listQuery.pageSize)?_c('el-pagination',{attrs:{"current-page":_vm.listQuery.currPage,"page-size":_vm.listQuery.pageSize,"layout":"sizes, total, prev, pager, next, jumper","page-sizes":[5, 15, 50],"total":_vm.total},on:{"current-change":_vm.handleCurrentChange,"size-change":_vm.handleSizeChange}}):_vm._e()],1),_vm._v(" "),(_vm.editShow)?_c('editFormNewDialog',{attrs:{"edit-show":_vm.editShow,"form":_vm.form,"is-new":_vm.isNew},on:{"update:editShow":function($event){_vm.editShow=$event},"update:edit-show":function($event){_vm.editShow=$event},"closeFun":_vm.closeFun}}):_vm._e(),_vm._v(" "),(_vm.approvalShow)?_c('approvalNewDialog',{attrs:{"show":_vm.approvalShow,"form":_vm.form},on:{"update:show":function($event){_vm.approvalShow=$event},"closeFun":_vm.closeFun}}):_vm._e()],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "Asqa":
/*!********************************!*\
  !*** ./src/assets/new_pic.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/new_pic.0bfe05e.png";

/***/ }),

/***/ "KTbR":
/*!*************************************************************!*\
  !*** ./src/views/project/projectScheduling/seeMoreNews.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _seeMoreNews_vue_vue_type_template_id_035afbd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seeMoreNews.vue?vue&type=template&id=035afbd3& */ "fbEe");
/* harmony import */ var _seeMoreNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seeMoreNews.vue?vue&type=script&lang=js& */ "hFw/");
/* empty/unused harmony star reexport *//* harmony import */ var _seeMoreNews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seeMoreNews.vue?vue&type=style&index=0&lang=scss& */ "1+3H");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _seeMoreNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _seeMoreNews_vue_vue_type_template_id_035afbd3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _seeMoreNews_vue_vue_type_template_id_035afbd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "seeMoreNews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Qcfr":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/seeMoreNews.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "gDS+");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SearchBar */ "3nF5");
/* harmony import */ var _api_project_news__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/project/news */ "3Zin");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _utils_process__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/process */ "q7Rq");
/* harmony import */ var _utils_tableAttach__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/tableAttach */ "2fVa");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _components_editFormNewDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/editFormNewDialog */ "wWqR");
/* harmony import */ var _components_approvalNewDialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/approvalNewDialog */ "3gAl");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SeeMoreNews',
  components: { MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_4__["default"], searchBar: _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], editFormNewDialog: _components_editFormNewDialog__WEBPACK_IMPORTED_MODULE_12__["default"], approvalNewDialog: _components_approvalNewDialog__WEBPACK_IMPORTED_MODULE_13__["default"] },
  filters: {},
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_11__["default"],
    buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  data: function data() {
    return {
      total: 0,
      listQuery: {
        pageSize: 5,
        currPage: 1
      },
      listQuery1: [],
      forms: [{ type: 'input', placeholder: '请输入关键字', prop: 'title' }, { type: 'searchBtn', searchFun: this.searchFun }],
      list: [],
      editShow: false,
      approvalShow: false,
      isNew: true,
      form: {},
      loading: false
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])(['fileUrl', 'projectButtonPrivileges', 'userId'])),
  mounted: function mounted() {
    this.judgeDeloyPri();
    this.getNewsList();
  },

  methods: {
    // 处理审批权限
    dealApprovalPrivilege: function dealApprovalPrivilege(item) {
      if (item.approveStatus === 1) {
        return true;
      } else {
        return false;
      }
    },

    // 处理删除按钮
    deleteShow: function deleteShow(item) {
      if (
      //  1 拥有P_gcdd_xwgg_xwsc并且是只能删除本人的
      this.projectButtonPrivileges.includes('P_gcdd_xwgg_xwsc') && item.applyUserId === this.userId ||
      // 2 P_gcdd_xwgg_xwsc_child是只有进入流程审批才能进行删除
      this.projectButtonPrivileges.includes('P_gcdd_xwgg_xwsc_child') && item.state === 1 ||
      // 3 如果从oa中推送过来的新闻的话 只需要有删除权限就可以进行删除
      this.projectButtonPrivileges.includes('P_gcdd_xwgg_xwsc') && !!item.sourceId) {
        return true;
      } else {
        return false;
      }
    },
    judgeDeloyPri: function judgeDeloyPri() {
      if (!this.projectButtonPrivileges.includes('P_gcdd_xwgg_xwbc') && !this.projectButtonPrivileges.includes('P_gcdd_xwgg_xwfb')) {
        this.listQuery1.status = 'yfb';
      } else {
        this.listQuery1.status = null;
      }
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.listQuery.currPage = val;
      this.getNewsList();
    },
    handleSizeChange: function handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.listQuery.currPage = 1;
      this.getNewsList();
    },
    searchFun: function searchFun() {
      this.getNewsList();
    },
    goDetial: function goDetial(info) {
      // this.$storage.setStorage('toDetialPageNewsInfo', {
      //   from: 'news',
      //   ...info
      // })
      // this.$router.push('/projectScheduling/detialPageNews')
      if (info.content) {
        this.$storage.setStorage('toDetialPageNewsInfo', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({
          from: 'news'
        }, info));
        this.$router.push('/projectScheduling/detialPageNews');
      } else {
        this.openPdf(info);
      }
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
    getNoImgContent: function getNoImgContent(htmlStr) {
      htmlStr = htmlStr.replace(/\<[img | IMG].*?\>/g, '');
      return htmlStr;
    },
    getNewsList: function getNewsList() {
      var _this = this;

      this.loading = true;
      Object(_api_project_news__WEBPACK_IMPORTED_MODULE_6__["getNewsList"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, this.listQuery, this.listQuery1)).then(function () {
        var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(res) {
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (res.success) {
                    _this.loading = false;
                    _this.list = res.result.list.map(function (item) {
                      var url = __webpack_require__(/*! ../../../assets/new_pic.png */ "Asqa");
                      if (item.headImage) {
                        url = _this.fileUrl + 'img/' + item.headImage;
                      }
                      var noImgContent = _this.getNoImgContent(item.content);
                      return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, item, {
                        noImgContent: noImgContent,
                        time: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseTime"])(item.deployDate, '{y}-{m}-{d}'),
                        url: url
                      });
                    });

                    // 附件
                    _utils_tableAttach__WEBPACK_IMPORTED_MODULE_10__["default"].getUrlList(_this.list, 'docId', true).then(function (urlList) {
                      _this.list = _this.list.map(function (item, index) {
                        return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, item, { urls: urlList[index] });
                      });
                    });
                    _this.total = res.result.total;
                  }

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    addFun: function addFun() {
      this.editShow = true;
      this.isNew = true;
    },
    closeFun: function closeFun() {
      this.editShow = false;
      this.getNewsList();
    },
    editFun: function editFun(val) {
      this.editShow = true;
      this.isNew = false;
      this.form = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, val);
    },
    deleteFun: function deleteFun(val) {
      var _this2 = this;

      if (!val.id) return;
      Object(_utils_process__WEBPACK_IMPORTED_MODULE_9__["deleteFun"])({
        api: _api_project_news__WEBPACK_IMPORTED_MODULE_6__["deleteNews"],
        params: { id: val.id },
        successCB: function successCB() {
          _this2.listQuery.currPage = 1;
          _this2.getNewsList();
        }
      });
    },

    // 审批
    approvalFun: function approvalFun(val) {
      this.approvalShow = true;
      this.form = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, val);
      this.$storage.setStorage('processInfo', babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, val, {
        processBodyId: val.processBodyId,
        businessType: 'XW'
      })));
      this.$storage.setStorage('processBodyId', val.processBodyId);
    }
  }
});

/***/ }),

/***/ "fbEe":
/*!********************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/seeMoreNews.vue?vue&type=template&id=035afbd3& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_template_id_035afbd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./seeMoreNews.vue?vue&type=template&id=035afbd3& */ "6mvm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_template_id_035afbd3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_template_id_035afbd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "hFw/":
/*!**************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/seeMoreNews.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./seeMoreNews.vue?vue&type=script&lang=js& */ "Qcfr");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_seeMoreNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "q7Rq":
/*!******************************!*\
  !*** ./src/utils/process.js ***!
  \******************************/
/*! exports provided: deleteFun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFun", function() { return deleteFun; });
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui */ "XJYT");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);


var deleteFun = function deleteFun(_ref) {
  var placeholder = _ref.placeholder,
      api = _ref.api,
      successCB = _ref.successCB,
      params = _ref.params,
      cancelCB = _ref.cancelCB;

  if (!placeholder) placeholder = '此操作将永久删除, 是否继续?';
  if (!successCB) successCB = function successCB() {};
  if (!cancelCB) cancelCB = function cancelCB() {};
  element_ui__WEBPACK_IMPORTED_MODULE_0__["MessageBox"].confirm(placeholder, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(function () {
    api(params).then(function (res) {
      if (res.success) {
        Object(element_ui__WEBPACK_IMPORTED_MODULE_0__["Message"])({
          type: 'success',
          message: '删除成功!'
        });
        successCB();
      }
    });
  }).catch(function (error) {
    console.log(error);
    cancelCB(error);
    Object(element_ui__WEBPACK_IMPORTED_MODULE_0__["Message"])({
      type: 'info',
      message: '已取消删除'
    });
  });
};

/***/ }),

/***/ "tjiL":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/seeMoreNews.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);