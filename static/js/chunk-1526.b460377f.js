(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-1526"],{

/***/ "+CQ5":
/*!**************************************************************************************************!*\
  !*** ./src/views/formProcess/customizedApproval/news/newsCom.vue?vue&type=template&id=11c6718e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCom_vue_vue_type_template_id_11c6718e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsCom.vue?vue&type=template&id=11c6718e& */ "R1EF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCom_vue_vue_type_template_id_11c6718e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCom_vue_vue_type_template_id_11c6718e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

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

/***/ "KSat":
/*!**********************************************************************!*\
  !*** ./src/views/formProcess/customizedApproval/news/reStartNew.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reStartNew_vue_vue_type_template_id_617f9c04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reStartNew.vue?vue&type=template&id=617f9c04& */ "ToII");
/* harmony import */ var _reStartNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reStartNew.vue?vue&type=script&lang=js& */ "O/R1");
/* empty/unused harmony star reexport *//* harmony import */ var _reStartNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reStartNew.vue?vue&type=style&index=0&lang=scss& */ "U7Mg");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _reStartNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reStartNew_vue_vue_type_template_id_617f9c04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reStartNew_vue_vue_type_template_id_617f9c04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "reStartNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "O/R1":
/*!***********************************************************************************************!*\
  !*** ./src/views/formProcess/customizedApproval/news/reStartNew.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reStartNew.vue?vue&type=script&lang=js& */ "ztjp");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "OQg+":
/*!******************************!*\
  !*** ./src/utils/loading.js ***!
  \******************************/
/*! exports provided: createLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLoading", function() { return createLoading; });
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! element-ui */ "XJYT");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_2__);


/*
 * @Description
 * @Autor 朱俊
 * @Date 2020-03-16 16:23:17
 * @LastEditors 朱俊
 * @LastEditTime 2020-03-22 15:27:59
 */

var createLoading = function createLoading(context, loadingObj) {
  var timeout = 10000;
  context.loadingWrapper = function () {
    var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(fun) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'loading';
      var timer;
      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              context[name] = true;
              // 需要监听如果超时 将再次置为false
              timer = setTimeout(function () {
                context[name] = false;
                Object(element_ui__WEBPACK_IMPORTED_MODULE_2__["Message"])({
                  type: 'warning',
                  message: '请求超时'
                });
              }, timeout);
              _context.next = 4;
              return fun();

            case 4:
              context[name] = false;
              clearTimeout(timer);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function fn(_x) {
      return _ref.apply(this, arguments);
    }

    return fn;
  }();
  return loadingObj;
};

/***/ }),

/***/ "R1EF":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/customizedApproval/news/newsCom.vue?vue&type=template&id=11c6718e& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"editFormNews"},[_c('el-form',{ref:"ruleForm",staticClass:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"150px"}},[_c('el-form-item',{attrs:{"label":"新闻编号","prop":"code"}},[(_vm.isEdit)?_c('el-input',{model:{value:(_vm.ruleForm.code),callback:function ($$v) {_vm.$set(_vm.ruleForm, "code", $$v)},expression:"ruleForm.code"}}):_c('span',[_vm._v(_vm._s(_vm.ruleForm.code))])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"新闻标题","prop":"title"}},[(_vm.isEdit)?_c('el-input',{model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}}):_c('span',[_vm._v(_vm._s(_vm.ruleForm.title))])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发布时间","prop":"deployDate"}},[(_vm.isEdit)?_c('el-date-picker',{attrs:{"value-format":"yyyy-MM-dd HH:mm","type":"datetime","placeholder":"选择发布时间"},model:{value:(_vm.ruleForm.deployDate),callback:function ($$v) {_vm.$set(_vm.ruleForm, "deployDate", $$v)},expression:"ruleForm.deployDate"}}):_c('span',[_vm._v(_vm._s(_vm.parseruleForm.deployDate))])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"新闻内容","prop":"content"}},[(_vm.isEdit)?_c('tinymce',{attrs:{"height":150},model:{value:(_vm.ruleForm.content),callback:function ($$v) {_vm.$set(_vm.ruleForm, "content", $$v)},expression:"ruleForm.content"}}):_c('div',{domProps:{"innerHTML":_vm._s(_vm.ruleForm.content)}})],1),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('el-form-item',{attrs:{"label":"缩略图","prop":"notice_type"}},[_c('el-upload',{attrs:{"action":"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-change":_vm.fileChange,"show-file-list":false}},[(!_vm.imgUrl)?_c('i',{staticClass:"el-icon-plus",attrs:{"slot":"default"},slot:"default"}):_c('img',{attrs:{"src":_vm.imgUrl,"width":"96","height":"96","alt":""}})])],1)],1),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('el-form-item',{attrs:{"label":"附件","prop":"notice_type"}},[_c('el-upload',{staticClass:"upload-demo",attrs:{"action":"https://jsonplaceholder.typicode.com/posts/","before-remove":_vm.beforeRemove,"http-request":_vm.upload,"file-list":_vm.attachmentList}},[_c('el-button',{attrs:{"size":"small","type":"primary"}},[_vm._v("点击上传")])],1)],1)],1)],1)],1)])}
var staticRenderFns = []



/***/ }),

/***/ "ToII":
/*!*****************************************************************************************************!*\
  !*** ./src/views/formProcess/customizedApproval/news/reStartNew.vue?vue&type=template&id=617f9c04& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_template_id_617f9c04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reStartNew.vue?vue&type=template&id=617f9c04& */ "omVy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_template_id_617f9c04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_template_id_617f9c04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "U7Mg":
/*!********************************************************************************************************!*\
  !*** ./src/views/formProcess/customizedApproval/news/reStartNew.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reStartNew.vue?vue&type=style&index=0&lang=scss& */ "WrH8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reStartNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "WrH8":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/customizedApproval/news/reStartNew.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ezlP":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/customizedApproval/news/newsCom.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_Tinymce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Tinymce */ "glbJ");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @riophae/vue-treeselect */ "cCY5");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "VCwm");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/doc */ "5HWN");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils */ "7Qib");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'RestartNew',
  components: { tinymce: _components_Tinymce__WEBPACK_IMPORTED_MODULE_3__["default"], Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4___default.a },
  props: {
    isReStart: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    form: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ruleForm: {
        id: '',
        name: '',
        code: '',
        projectId: '',
        title: '',
        content: '',
        type: 'XW',
        delIds: []
      },
      rules: {
        name: [{ required: true, message: '请填写名称' }],
        code: [{ required: true, message: '请填写编码' }],
        title: [{ required: true, message: '请填写标题' }],
        content: [{ required: false, message: '请填写新闻主体' }]
      },
      formDate: null,
      projectInfo: null,
      // 附件
      attachmentList: [],
      picList: [],
      imgUrl: '',
      uploadClass: null
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])(['fileUrl'])),
  watch: {
    form: function form() {
      this.initFun();
      this.dealChange();
    }
  },
  mounted: function mounted() {
    this.initFun();
    this.dealChange();
  },

  methods: {
    json2Formdata: function json2Formdata(json, formDate) {
      for (var key in json) {
        formDate.set(key, json[key]);
      }
      return formDate;
    },
    initFun: function initFun() {
      this.formDate = new FormData();
      this.projectInfo = JSON.parse(this.$storage.getStorage('project'));
      this.ruleForm.projectId = this.projectInfo.id;
    },
    fileChange: function fileChange(file) {
      var testmsg = /^image\/(jpeg|png|jpg)$/.test(file.raw.type);
      if (!testmsg) {
        this.$message.error('上传图片格式不对!');
        return;
      }
      this.formDate.set('file', file.raw);
      this.imgUrl = file.url;
      this.$forceUpdate();
    },
    upload: function upload(file) {
      this.formDate.append('attach', file.file);
    },
    beforeRemove: function beforeRemove(file) {
      var _this = this;

      if (file.id) {
        // 当为已上传的附件时
        this.ruleForm.delIds.push(file.id);
      } else {
        var files = this.formDate.getAll('attach');
        var index = files.findIndex(function (item) {
          return item.uid === file.uid;
        });
        var tp = files.splice(index, 1);
        tp.forEach(function (inner) {
          _this.formDate.append('attach', inner);
        });
      }
      return true;
    },
    dealChange: function dealChange() {
      this.formData = new FormData();
      this.ruleForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.ruleForm, this.form, { deployDate: Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(this.form.deployDate, '{y}-{m}-{d} {h}:{i}') });
      this.imgUrl = this.form.url;
      this.dealAttach();
    },
    dealAttach: function dealAttach() {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var back;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.attachmentList = [];

                if (_this2.form.docId) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt('return');

              case 3:
                _context.next = 5;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_7__["attachList"])({
                  docId: _this2.form.docId
                });

              case 5:
                back = _context.sent;

                if (!back.success) {
                  _context.next = 10;
                  break;
                }

                if (!(!back.result || back.result.length === 0)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('return');

              case 9:
                _this2.attachmentList = back.result.map(function (item) {
                  var url = _this2.fileUrl + 'img/' + item.fileName;
                  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, { name: item.originalFileName, url: url });
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    releaseFun: function releaseFun(cb) {
      var _this3 = this;

      this.ruleForm.isDeploy = 2;
      this.formDate = this.json2Formdata(this.ruleForm, this.formDate);
      this.$refs['ruleForm'].validate(function (valid) {
        if (valid) {
          cb(_this3.formDate);
        }
      });
    }
  }
});

/***/ }),

/***/ "omVy":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/customizedApproval/news/reStartNew.vue?vue&type=template&id=617f9c04& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"restartNewDiv"},[_c('div',{staticClass:"editFormNews"},[_c('newsCom',{ref:"newsComRef",attrs:{"is-edit":"","form":_vm.form}}),_vm._v(" "),(_vm.form.commentMessageList && _vm.form.commentMessageList.length !==0)?_c('div',{staticClass:"dealProcess-card"},[_c('div',{staticClass:"headTitle"},[_vm._v("审批信息")]),_vm._v(" "),_vm._l((_vm.form.commentMessageList),function(item,index){return _c('div',{key:index},[_c('div',[_c('div',{staticClass:"flex-space-between mt10 mb10"},[_c('span',[_vm._v("审批人：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.userName))])]),_vm._v(" "),_c('div',{staticClass:"flex-space-between mt10 mb10"},[_c('span',[_vm._v("审批意见：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.content))])]),_vm._v(" "),_c('div',{staticClass:"flex-space-between mt10 mb10"},[_c('span',[_vm._v("创建时间：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.time))])])])])})],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dealProcess-card"},[_c('div',{staticClass:"flex-space-between mt10 mb10"},[_c('span',[_vm._v("节点选择：")]),_vm._v(" "),_c('el-select',{attrs:{"clearable":""},model:{value:(_vm.conditionCode),callback:function ($$v) {_vm.conditionCode=$$v},expression:"conditionCode"}},_vm._l((_vm.form.currentExit),function(item,index){return _c('el-option',{key:index,attrs:{"value":item.conditionCode,"label":item.conditionName}})}),1)],1)]),_vm._v(" "),_c('div',{staticClass:"flex-end btns"},[_c('el-button',{on:{"click":_vm.cancelFun}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.submitFun}},[_vm._v("确定")])],1)],1)])}
var staticRenderFns = []



/***/ }),

/***/ "q61I":
/*!*******************************************************************!*\
  !*** ./src/views/formProcess/customizedApproval/news/newsCom.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newsCom_vue_vue_type_template_id_11c6718e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsCom.vue?vue&type=template&id=11c6718e& */ "+CQ5");
/* harmony import */ var _newsCom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsCom.vue?vue&type=script&lang=js& */ "qcSv");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newsCom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newsCom_vue_vue_type_template_id_11c6718e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newsCom_vue_vue_type_template_id_11c6718e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "newsCom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "qcSv":
/*!********************************************************************************************!*\
  !*** ./src/views/formProcess/customizedApproval/news/newsCom.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsCom.vue?vue&type=script&lang=js& */ "ezlP");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_newsCom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "ztjp":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/customizedApproval/news/reStartNew.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsCom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsCom */ "q61I");
/* harmony import */ var _api_formdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/formdata */ "9uTl");
/* harmony import */ var _api_project_news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/news */ "3Zin");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _utils_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/loading */ "OQg+");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'RestartNew',
  components: { newsCom: _newsCom__WEBPACK_IMPORTED_MODULE_1__["default"] },
  props: {
    isNew: {
      type: Boolean,
      default: true
    },
    editShow: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var _this = this;
    return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_utils_loading__WEBPACK_IMPORTED_MODULE_6__["createLoading"])(_this, { loading: false }), {
      form: {},
      conditionCode: ''
    });
  },
  mounted: function mounted() {
    this.getInfo();
  },

  methods: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])(['delVisitedViews']), {
    dealCurrentExit: function dealCurrentExit(currentExit) {
      var result = '';
      var tpArr = [];
      var backArr = [];
      currentExit.forEach(function (item) {
        if (item.condition) {
          var reg = /((\#|\$)\{(.+?)\})/g; // 注意正则 RegExp的使用 同reg变量能否变化是有关系的 reg如果不是重新赋值的话  RegExp不变
          reg.test(item.condition);
          result = RegExp.$3.split('&&')[0].split('||')[0].split('==')[1].replace(/[\"\']/g, '');
          result = result.replace(/(^\s*)|(\s*$)/g, '');
          console.log(result);
          // 如果得到的是两个相同的result 则是进行只呈现一个的
          if (tpArr.indexOf(result) === -1) {
            tpArr.push(result);
            // const conditionName = getNameByCode(result, 'approval_btn_type')
            var conditionName = item.name;
            backArr.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { conditionCode: result, conditionName: conditionName }));
          }
        }
      });
      return backArr;
    },
    getInfo: function getInfo() {
      var _this2 = this;

      this.processInfo = JSON.parse(this.$storage.getStorage('processInfo'));
      if (!this.processInfo.id) return;
      Object(_api_formdata__WEBPACK_IMPORTED_MODULE_2__["getFormData"])({
        processBodyId: this.processInfo.id,
        urlType: this.processInfo.businessType
      }).then(function (res) {
        if (res.success) {
          _this2.form = res.result;
          _this2.form.commentMessageList = _this2.form.commentMessageList.map(function (item) {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { time: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parseTime"])(item.createDate) });
          });
          _this2.form.currentExit = _this2.dealCurrentExit(_this2.form.currentExit);
        }
      });
    },
    submitFun: function submitFun() {
      var _this3 = this;

      this.$refs['newsComRef'].releaseFun(function (formdata) {
        if (!_this3.conditionCode) {
          _this3.$message({
            type: 'warning',
            message: '请先选择节点选项'
          });
          return;
        }
        formdata.append('result', _this3.conditionCode);
        var save = Object(_api_project_news__WEBPACK_IMPORTED_MODULE_3__["saveNews"])(formdata).then(function (res) {
          if (res.success) {
            _this3.$message({
              type: 'success',
              message: '重新发布成功'
            });
            _this3.delVisitedViews({ path: '/formProcess/customizedApproval' });
            _this3.$router.push('/formProcess/approvalList');
          }
        });
        // loading处理
        _this3.loadingWrapper(function () {
          return save;
        }, 'loading');
      });
    },
    releaseFun: function releaseFun() {
      var _this4 = this;

      this.$refs['newsComRef'].releaseFun(function (formdata) {
        Object(_api_project_news__WEBPACK_IMPORTED_MODULE_3__["saveNews"])(formdata).then(function (res) {
          if (res.success) {
            _this4.$message({
              type: 'success',
              message: '重新发布成功'
            });
            _this4.delVisitedViews({ path: '/formProcess/customizedApproval' });
            _this4.$router.push('/formProcess/approvalList');
          }
        });
      });
    },
    cancelFun: function cancelFun() {
      this.delVisitedViews({ path: '/formProcess/customizedApproval' });
      this.$router.push('/formProcess/approvalList');
    }
  })
});

/***/ })

}]);