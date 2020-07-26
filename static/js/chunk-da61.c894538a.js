(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-da61"],{

/***/ "2vqy":
/*!************************************************!*\
  !*** ./src/views/formProcess/startProcess.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _startProcess_vue_vue_type_template_id_67ca9e3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startProcess.vue?vue&type=template&id=67ca9e3f& */ "DbxW");
/* harmony import */ var _startProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startProcess.vue?vue&type=script&lang=js& */ "3my7");
/* empty/unused harmony star reexport *//* harmony import */ var _startProcess_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startProcess.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "zah8");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _startProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _startProcess_vue_vue_type_template_id_67ca9e3f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _startProcess_vue_vue_type_template_id_67ca9e3f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "startProcess.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3my7":
/*!*************************************************************************!*\
  !*** ./src/views/formProcess/startProcess.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./startProcess.vue?vue&type=script&lang=js& */ "k07N");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "B+gK":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/startProcess.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "DbxW":
/*!*******************************************************************************!*\
  !*** ./src/views/formProcess/startProcess.vue?vue&type=template&id=67ca9e3f& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_template_id_67ca9e3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./startProcess.vue?vue&type=template&id=67ca9e3f& */ "GBy3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_template_id_67ca9e3f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_template_id_67ca9e3f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "GBy3":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/startProcess.vue?vue&type=template&id=67ca9e3f& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container startProcessDiv"},[_c('my-card',{attrs:{"title":_vm.title}},[_c('el-row',{staticClass:"cardWrapper",attrs:{"gutter":40}},_vm._l((_vm.formTemplateMap),function(item,index){return _c('el-col',{key:index,staticClass:"card",attrs:{"span":8}},[_c('div',{staticClass:"card-header"},[_vm._v(_vm._s(_vm.getNameByCode(item.name,'process_form_type')))]),_vm._v(" "),_vm._l((item.value),function(innerItem,innerIndex){return _c('div',{key:innerIndex,staticClass:"flex-space-between cardItem",on:{"click":function($event){return _vm.startProcess(innerItem)}}},[_c('div',{staticClass:"text-overflow"},[_vm._v(_vm._s(innerItem.name))])])})],2)}),1),_vm._v(" "),(_vm.showForm)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":"流程发起","visible":_vm.showForm,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.showForm=$event}}},[_c('generate-form',{ref:"generateForm",attrs:{"data":_vm.jsonData,"value":_vm.editData}}),_vm._v(" "),_c('div',{staticClass:"dialog-footer flex-center",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.showForm = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"loading":_vm.loading,"type":"primary"},on:{"click":_vm.save}},[_vm._v("提交")])],1)],1):_vm._e()],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "YEIV":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "SEkw");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "k07N":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/formProcess/startProcess.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "gDS+");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _api_formTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/formTemplate */ "kC2G");
/* harmony import */ var _api_formdata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/formdata */ "9uTl");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _components_customerForm_GenerateForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/customerForm/GenerateForm */ "QqhD");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CustomerForm',
  components: {
    tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_5__["default"],
    GenerateForm: _components_customerForm_GenerateForm__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      title: '表单流程发起',
      dialogFormVisible: false, // 弹出框显示判断
      dialogStatus: 'create',
      textMap: {
        update: '编辑',
        create: '新建'
      },
      loading: false, // 按钮重复提交判断
      listLoading: false,
      rules: {
        name: [{ required: true, message: '请填写角色名称' }],
        code: [{ required: true, message: '请填写角色编码' }],
        orgId: [{ required: true, message: '请选择组织', trigger: 'change' }]
      },
      roleForm: {
        id: '',
        name: '',
        code: '',
        orgId: '',
        description: ''
      },
      listQuery: {
        pageSize: 15,
        currPage: 1,
        name: '',
        code: ''
      },
      total: 0,
      formTemplateMap: [],
      remoteFuncs: function remoteFuncs() {},
      jsonData: {},
      editData: {},
      showForm: false,
      curForm: '',
      projectId: null
    };
  },
  mounted: function mounted() {
    this.initFun();
    this.getList();
  },

  methods: {
    getNameByCode: _utils__WEBPACK_IMPORTED_MODULE_9__["getNameByCode"],
    initFun: function initFun() {
      var projectInfo = this.$storage.getStorage('project');
      if (projectInfo) {
        this.projectId = JSON.parse(projectInfo).id;
      }
    },
    getList: function getList() {
      var _this = this;

      Object(_api_formTemplate__WEBPACK_IMPORTED_MODULE_7__["getFormTemplateMap"])(this.listQuery).then(function (res) {
        if (res.success) {
          _this.formTemplateMap = res.result;
        }
      });
    },
    search: function search() {
      this.getList();
    },
    currentChange: function currentChange(val) {
      this.listQuery.currPage = val;
      this.getList();
    },
    startProcess: function startProcess(val) {
      this.showForm = true;
      this.curForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, val);
      this.jsonData = JSON.parse(val.template);
    },
    save: function save() {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var back;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$refs['generateForm'].getData();

              case 2:
                back = _context.sent;

                Object(_api_formdata__WEBPACK_IMPORTED_MODULE_8__["save"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({
                  metadata: babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(back)
                }, back, {
                  processTemplateId: _this2.curForm.processTemplateId,
                  formTemplateId: _this2.curForm.id,
                  projectId: _this2.projectId
                })).then(function (res) {
                  if (res.success) {
                    _this2.showForm = false;
                    _this2.$message({
                      type: 'success',
                      message: '保存成功'
                    });
                  }
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ "kC2G":
/*!*********************************!*\
  !*** ./src/api/formTemplate.js ***!
  \*********************************/
/*! exports provided: list, deleteApi, get, save, formTemplateList, getFormTemplateMap, getFormTemplateChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteApi", function() { return deleteApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formTemplateList", function() { return formTemplateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormTemplateMap", function() { return getFormTemplateMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormTemplateChildren", function() { return getFormTemplateChildren; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/list',
    method: 'post',
    data: param
  });
}

function deleteApi(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/delete',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/get',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/save',
    method: 'post',
    data: param
  });
}

// 查询与流程挂钩的表单列表
function formTemplateList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/formTemplateList',
    method: 'post',
    data: param
  });
}

// 表单类型 流程名称
function getFormTemplateMap(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/getFormTemplateMap',
    method: 'post',
    data: param
  });
}

// 获取子表单
function getFormTemplateChildren(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/formTemplate/getFormTemplateChildren',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "zah8":
/*!********************************************************************************************************!*\
  !*** ./src/views/formProcess/startProcess.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./startProcess.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "B+gK");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_startProcess_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);