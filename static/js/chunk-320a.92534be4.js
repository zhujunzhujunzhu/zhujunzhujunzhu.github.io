(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-320a"],{

/***/ "0qe8":
/*!****************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/approvalNewDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./approvalNewDialog.vue?vue&type=style&index=0&lang=scss& */ "FxVL");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "3gAl":
/*!******************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/approvalNewDialog.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _approvalNewDialog_vue_vue_type_template_id_e15f5286___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approvalNewDialog.vue?vue&type=template&id=e15f5286& */ "46Ok");
/* harmony import */ var _approvalNewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approvalNewDialog.vue?vue&type=script&lang=js& */ "ISke");
/* empty/unused harmony star reexport *//* harmony import */ var _approvalNewDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approvalNewDialog.vue?vue&type=style&index=0&lang=scss& */ "0qe8");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _approvalNewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _approvalNewDialog_vue_vue_type_template_id_e15f5286___WEBPACK_IMPORTED_MODULE_0__["render"],
  _approvalNewDialog_vue_vue_type_template_id_e15f5286___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "approvalNewDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "46Ok":
/*!*************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/approvalNewDialog.vue?vue&type=template&id=e15f5286& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_template_id_e15f5286___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./approvalNewDialog.vue?vue&type=template&id=e15f5286& */ "zGPu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_template_id_e15f5286___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_template_id_e15f5286___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ }),

/***/ "FQA3":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/approvalNewDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "JO7F");
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _components_Tinymce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Tinymce */ "glbJ");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @riophae/vue-treeselect */ "cCY5");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "VCwm");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/doc */ "5HWN");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");
/* harmony import */ var _decorator_loading_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/decorator/loading.js */ "DdcY");
/* harmony import */ var _utils_flowchartUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/flowchartUtils.js */ "evEl");
/* harmony import */ var _api_project_news__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/project/news */ "3Zin");
/* harmony import */ var _components_approvalRecord__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/approvalRecord */ "FYWv");





var _dec, _dec2, _desc, _value, _obj;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ApprovalNews',
  components: { MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_4__["default"], tinymce: _components_Tinymce__WEBPACK_IMPORTED_MODULE_5__["default"], Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_6___default.a, approvalRecord: _components_approvalRecord__WEBPACK_IMPORTED_MODULE_15__["default"] },
  directives: { buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_11__["default"] },
  props: {
    isNew: {
      type: Boolean,
      default: false
    },
    show: {
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
      editTitle: '新闻审批',
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
        content: [{ required: false, message: '请填写新闻主体' }],
        remark: [{ required: false, message: '请填写意见' }],
        result: [{ required: true, message: '请选择审批结果' }]
      },
      options: {
        sendOpts: [],
        receiveOpts: []
      },
      noticeTypes: [],
      fileListMain: [],
      fileListAttach: [],
      mainfm: null,
      attachfm: null,
      isloading: false,
      isEdit: true,
      picShow: false,
      picUrl: '',
      formDate: null,
      projectInfo: null,
      // 附件
      attachmentList: [],
      picList: [],
      imgUrl: '',
      uploadClass: null,
      saveLoading: false,
      submitLoading: false,
      sureLoading: false,
      approvalOptions: [],
      isRestart: false, // 是否为重新发起
      approvalShow: false // 审批弹框显示
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])(['fileUrl', 'dictMap', 'userId'])),
  watch: {
    form: {
      handler: function handler() {
        this.initFun();
        this.dealChange();
      },

      immediate: true
    }
  },
  mounted: function mounted() {},

  methods: (_dec = Object(_decorator_loading_js__WEBPACK_IMPORTED_MODULE_12__["validLoading"])('ruleForm', 'saveLoading'), _dec2 = Object(_decorator_loading_js__WEBPACK_IMPORTED_MODULE_12__["validLoading"])('ruleForm', 'sureLoading'), (_obj = {
    // 是否为重新发起流程
    judgeIsRestart: function judgeIsRestart() {
      if (this.ruleForm.state === 1 && this.ruleForm.applyUserId === this.userId) {
        // 当状态为1 并且审批用户为当前用户时
        this.isRestart = true;
      } else {
        this.isRestart = false;
      }
    },
    json2Formdata: function json2Formdata(json, formDate) {
      for (var key in json) {
        formDate.append(key, json[key]);
      }
      return formDate;
    },
    initFun: function initFun() {
      this.formDate = new FormData();
      this.projectInfo = JSON.parse(this.$storage.getStorage('project'));

      this.ruleForm.projectId = this.projectInfo.id;
      // 拿到审批选项
      _utils_flowchartUtils_js__WEBPACK_IMPORTED_MODULE_13__["default"].getProcessExit(this, 'approvalOptions');
    },
    upload: function upload(file) {
      this.formDate.append('attach', file.file);
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
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.picShow = true;
    },
    saveFun: function saveFun() {
      var _this2 = this;

      this.ruleForm.isDeploy = 0;
      var find = this.approvalOptions.find(function (item) {
        return item.code === _this2.ruleForm.result;
      });
      this.ruleForm.resultMemo = find ? find.name : '';
      this.formDate = this.json2Formdata(this.ruleForm, this.formDate);
      return Object(_api_project_news__WEBPACK_IMPORTED_MODULE_14__["dealTask"])(this.formDate).then(function (res) {
        if (res.success) {
          _this2.$message({
            type: 'success',
            message: '操作成功'
          });
          _this2.$emit('update:show', false);
          _this2.$emit('closeFun');
        }
      });
    },
    sureFun: function sureFun() {
      var _this3 = this;

      this.ruleForm.isDeploy = 1;
      var find = this.approvalOptions.find(function (item) {
        return item.code === _this3.ruleForm.result;
      });
      this.ruleForm.resultMemo = find ? find.name : '';
      this.formDate = this.json2Formdata(this.ruleForm, this.formDate);
      return Object(_api_project_news__WEBPACK_IMPORTED_MODULE_14__["dealTask"])(this.formDate).then(function (res) {
        if (res.success) {
          _this3.$message({
            type: 'success',
            message: '操作成功'
          });
          _this3.$emit('update:show', false);
          _this3.$emit('closeFun');
        }
      });
    },
    dealChange: function dealChange() {
      this.formData = new FormData();

      this.ruleForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, this.ruleForm, this.form, {
        deployDate: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["parseTime"])(this.form.deployDate, '{y}-{m}-{d} {h}:{i}')
      });
      this.imgUrl = this.form.url;
      this.dealAttach();
      // 处理是否重新发起
      this.judgeIsRestart();
    },
    dealAttach: function dealAttach() {
      var _this4 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var back;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this4.attachmentList = [];

                if (_this4.form.docId) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt('return');

              case 3:
                _context.next = 5;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_10__["attachList"])({
                  docId: _this4.form.docId
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
                _this4.attachmentList = back.result.map(function (item) {
                  var url = _this4.fileUrl + 'img/' + item.fileName;
                  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, item, { name: item.originalFileName, url: url });
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this4);
      }))();
    },
    beforeClose: function beforeClose() {
      this.ruleForm = {
        id: '',
        name: '',
        code: '',
        projectId: '',
        title: '',
        content: '',
        type: 'XW'
      };
      this.$emit('update:show', false);
      this.$emit('closeFun');
    }
  }, (_applyDecoratedDescriptor(_obj, 'saveFun', [_dec], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_obj, 'saveFun'), _obj), _applyDecoratedDescriptor(_obj, 'sureFun', [_dec2], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_obj, 'sureFun'), _obj)), _obj))
});

/***/ }),

/***/ "FxVL":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/approvalNewDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ISke":
/*!*******************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/approvalNewDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./approvalNewDialog.vue?vue&type=script&lang=js& */ "FQA3");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_approvalNewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "evEl":
/*!*************************************!*\
  !*** ./src/utils/flowchartUtils.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "iCc5");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "V7oC");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_formdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/formdata */ "9uTl");



/*
 * @Description
 * @Autor 朱俊
 * @Date 2020-04-07 13:55:00
 * @LastEditors 朱俊
 * @LastEditTime 2020-04-07 14:49:01
 */
/**
 * 处理流程相关的工具方法
 * @module flowchartUtils
 */


var FlowchartUtils = function () {
  function FlowchartUtils() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FlowchartUtils);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FlowchartUtils, [{
    key: 'dealCurrentExit',
    value: function dealCurrentExit(currentExit) {
      var result = '';
      var tpArr = [];
      var backArr = [];
      currentExit.forEach(function (item) {
        if (item.condition) {
          var reg = /((\#|\$)\{(.+?)\})/g; // 注意正则 RegExp的使用 同reg变量能否变化是有关系的 reg如果不是重新赋值的话  RegExp不变
          reg.test(item.condition);
          result = RegExp.$3.split('&&')[0].split('||')[0].split('==')[1].replace(/[\"\']/g, '');
          result = result.replace(/(^\s*)|(\s*$)/g, '');
          // 如果得到的是两个相同的result 则是进行只呈现一个的
          if (tpArr.indexOf(result) === -1) {
            tpArr.push(result);
            backArr.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
              code: result
            }));
          }
        }
      });
      if (backArr.length === 0) {
        backArr = [{
          name: '同意',
          code: '1'
        }];
      }
      return backArr;
    }
    /**
     * @function getProcessExit
     * @param  context  {Object} 上下文
     * @param  approvalOptions  {Array} 审批选项
     */

  }, {
    key: 'getProcessExit',
    value: function getProcessExit(context) {
      var _this = this;

      var approvalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'approvalOptions';

      var processBodyId = context.$storage.getStorage('processBodyId');
      if (!processBodyId) return;
      return Object(_api_formdata__WEBPACK_IMPORTED_MODULE_3__["getProcessExit"])({
        processBodyId: processBodyId
      }).then(function (res) {
        context[approvalOptions] = _this.dealCurrentExit(res.result);
      });
    }
  }]);

  return FlowchartUtils;
}();

/* harmony default export */ __webpack_exports__["default"] = (new FlowchartUtils());

/***/ }),

/***/ "zGPu":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/approvalNewDialog.vue?vue&type=template&id=e15f5286& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"approvalNewsDialog",attrs:{"title":_vm.editTitle,"visible":_vm.show,"width":"80%","before-close":_vm.beforeClose,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.show=$event}}},[_c('div',{staticClass:"approvalFormNews"},[_c('approvalRecord'),_vm._v(" "),_c('el-form',{ref:"ruleForm",staticClass:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"150px"}},[(!_vm.isNew)?_c('el-form-item',{attrs:{"label":"新闻编号","prop":"code"}},[(_vm.isEdit)?_c('el-input',{model:{value:(_vm.ruleForm.code),callback:function ($$v) {_vm.$set(_vm.ruleForm, "code", $$v)},expression:"ruleForm.code"}}):_c('span',[_vm._v(_vm._s(_vm.ruleForm.code))])],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"新闻标题","prop":"title"}},[_c('el-input',{model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发布时间","prop":"deployDate"}},[_c('el-date-picker',{attrs:{"value-format":"yyyy-MM-dd HH:mm","type":"datetime","placeholder":"选择发布时间"},model:{value:(_vm.ruleForm.deployDate),callback:function ($$v) {_vm.$set(_vm.ruleForm, "deployDate", $$v)},expression:"ruleForm.deployDate"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"新闻内容","prop":"content"}},[(_vm.isEdit)?_c('tinymce',{attrs:{"height":150},model:{value:(_vm.ruleForm.content),callback:function ($$v) {_vm.$set(_vm.ruleForm, "content", $$v)},expression:"ruleForm.content"}}):_c('div',{domProps:{"innerHTML":_vm._s(_vm.ruleForm.content)}})],1),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('el-form-item',{attrs:{"label":"缩略图","prop":"notice_type"}},[_c('el-upload',{attrs:{"action":"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-change":_vm.fileChange,"show-file-list":false}},[(!_vm.imgUrl)?_c('i',{staticClass:"el-icon-plus",attrs:{"slot":"default"},slot:"default"}):_c('img',{attrs:{"src":_vm.imgUrl,"width":"96","height":"96","alt":""}})])],1)],1),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('el-form-item',{attrs:{"label":"附件","prop":"notice_type"}},[_c('el-upload',{directives:[{name:"upload-preview",rawName:"v-upload-preview",value:(_vm.attachmentList),expression:"attachmentList"}],staticClass:"upload-demo",attrs:{"action":"https://jsonplaceholder.typicode.com/posts/","before-remove":_vm.beforeRemove,"http-request":_vm.upload,"file-list":_vm.attachmentList}},[_c('el-button',{attrs:{"size":"small","type":"primary"}},[_vm._v("点击上传")])],1)],1)],1),_vm._v(" "),(_vm.approvalShow)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"approvalDialog",attrs:{"title":"审批","visible":_vm.approvalShow,"width":"50%","close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.approvalShow=$event}}},[(!_vm.isRestart)?_c('el-form-item',{attrs:{"label":"意见","prop":"remark"}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.ruleForm.remark),expression:"ruleForm.remark"}],staticStyle:{"width":"100%"},attrs:{"rows":"5","placeholder":"请输入意见"},domProps:{"value":(_vm.ruleForm.remark)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.ruleForm, "remark", $event.target.value)}}})]):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"结果","prop":"result"}},[_c('el-select',{attrs:{"placeholder":"请选择审批结果"},model:{value:(_vm.ruleForm.result),callback:function ($$v) {_vm.$set(_vm.ruleForm, "result", $$v)},expression:"ruleForm.result"}},_vm._l((_vm.approvalOptions),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.name,"value":item.code}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"flex-center"},[_c('el-button',{on:{"click":function($event){_vm.approvalShow = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success","loading":_vm.sureLoading},on:{"click":_vm.sureFun}},[_vm._v("提交")])],1)],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"flex-center"},[_c('el-button',{on:{"click":_vm.beforeClose}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_gcdd_xwgg_xwbc'),expression:"'P_gcdd_xwgg_xwbc'"}],attrs:{"type":"primary","loading":_vm.saveLoading},on:{"click":_vm.saveFun}},[_vm._v("保存")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success"},on:{"click":function($event){_vm.approvalShow =true}}},[_vm._v("审批")])],1)],1)],1)]):_vm._e()}
var staticRenderFns = []



/***/ })

}]);