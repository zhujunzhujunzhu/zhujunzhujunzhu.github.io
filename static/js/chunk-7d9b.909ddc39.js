(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-7d9b"],{

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

/***/ "6nRU":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/editNoticePublicityDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _components_Tinymce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Tinymce */ "glbJ");
/* harmony import */ var _api_project_news__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/project/news */ "3Zin");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _components_selectOrg_selectOrgByType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/selectOrg/selectOrgByType */ "VYyl");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { tinymce: _components_Tinymce__WEBPACK_IMPORTED_MODULE_4__["default"], selectOrg: _components_selectOrg_selectOrgByType__WEBPACK_IMPORTED_MODULE_7__["default"] },
  directives: {
    buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  props: {
    isNew: {
      type: Boolean,
      default: true
    },
    editShow: {
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
      editTitle: '新增',
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'change' }],
        content: [{ required: false, message: '请编辑内容', trigger: 'change' }],
        code: [{ required: true, message: '请填写编码', trigger: 'change' }]
        // noticeType: [
        //   { required: true, message: '请选择公告类型', trigger: 'change' }
        // ]
      },
      ruleForm: {
        title: '',
        code: '',
        reportOrg: '',
        noticeType: '',
        mainDocId: '',
        docId: '',
        fileDocId: '',
        reportOrgId: null,
        noticeOrgIds: [],
        content: '',
        type: 'GG',
        delIds: [], // 存放删除已经上传的附件的id
        picDelIds: [],
        orgIds: [] // 收文单位
      },
      picShow: false,
      picUrl: '',
      dialogImageUrl: '',
      // 附件
      attachmentList: [],
      picList: [],
      formData: new FormData()
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['loading', 'dictMap', 'fileUrl'])),
  watch: {
    form: function form() {
      this.dealChange();
    }
  },
  mounted: function mounted() {
    this.dealChange();
  },

  methods: {
    // 处理空的orgIds
    dealOrgIds: function dealOrgIds() {
      if (this.form.orgIds) {
        // 当orgIds存在时
        this.form.orgIds = this.form.orgIds.filter(function (id) {
          if (id) {
            return true;
          } else {
            return false;
          }
        });
      } else {
        // 不存在时 为空数组
        this.form.orgIds = [];
      }
    },
    dealChange: function dealChange() {
      this.dealOrgIds();
      this.formData = new FormData();
      if (!this.isNew) {
        this.editTitle = '编辑';
        this.ruleForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.ruleForm, this.form, {
          deployDate: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(this.form.deployDate, '{y}-{m}-{d} {h}:{i}')
        });
        this.dealAttach();
        this.dealPic();
      } else {
        // this.$set(this.ruleForm, 'deployDate', parseTime(new Date().getTime(), '{y}-{m}-{d} {h}:{i}'))
        this.ruleForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.ruleForm, {
          deployDate: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(new Date().getTime(), '{y}-{m}-{d} {h}:{i}')
        });
        this.$forceUpdate();
        this.editTitle = '新增';
      }
    },
    dealAttach: function dealAttach() {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var back;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.attachmentList = [];

                if (_this.form.fileDocId) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt('return');

              case 3:
                _context.next = 5;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_9__["attachList"])({
                  docId: _this.form.fileDocId
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
                _this.attachmentList = back.result.map(function (item) {
                  var url = _this.fileUrl + 'img/' + item.fileName;
                  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, { name: item.originalFileName, url: url });
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    dealPic: function dealPic() {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var back;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.picList = [];

                if (_this2.form.docId) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt('return');

              case 3:
                _context2.next = 5;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_9__["attachList"])({
                  docId: _this2.form.docId
                });

              case 5:
                back = _context2.sent;

                if (!back.success) {
                  _context2.next = 10;
                  break;
                }

                if (!(!back.result || back.result.length === 0)) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt('return');

              case 9:
                _this2.picList = back.result.map(function (item) {
                  var url = _this2.fileUrl + 'img/' + item.fileName;
                  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, { name: item.originalFileName, url: url });
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    handleRemove: function handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.picUrl = file.url;
      this.picShow = true;
    },
    upload: function upload(file) {
      this.formData.append('file', file.file);
    },
    uploadPic: function uploadPic(file) {
      this.formData.append('image', file.file);
    },
    submitForm: function submitForm(isDeloy) {
      var _this3 = this;

      this.ruleForm.isDeploy = isDeloy;
      this.formData = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["json2Formdata"])(this.ruleForm, this.formData);
      this.$refs['ruleForm'].validate(function (valid) {
        if (valid) {
          Object(_api_project_news__WEBPACK_IMPORTED_MODULE_5__["saveNews"])(_this3.formData).then(function (res) {
            if (res.success) {
              if (isDeloy === 0) {
                _this3.$message({
                  type: 'success',
                  message: '保存成功'
                });
              } else {
                _this3.$message({
                  type: 'success',
                  message: '提交成功'
                });
              }
              _this3.beforeClose();
            }
          });
        }
      });
    },
    beforeClose: function beforeClose() {
      this.ruleForm = {
        title: '',
        code: '',
        reportOrg: '',
        noticeType: '',
        mainDocId: '',
        docId: '',
        fileDocId: '',
        reportOrgId: null,
        noticeOrgIds: [],
        content: '',
        type: 'GG',
        delIds: [], // 存放删除已经上传的附件的id
        picDelIds: [],
        orgIds: []
      };
      this.$emit('update:editShow', false);
      this.$emit('closeFun', {});
    },
    beforeRemove: function beforeRemove(file) {
      var _this4 = this;

      if (file.id) {
        this.ruleForm.delIds.push(file.id);
      } else {
        var files = this.formDate.getAll('file');
        var index = files.findIndex(function (item) {
          return item.uid === file.uid;
        });
        var tp = files.splice(index, 1);
        tp.forEach(function (inner) {
          _this4.formDate.append('file', inner);
        });
      }
      return true;
    },
    beforeRemovePic: function beforeRemovePic(file) {
      var _this5 = this;

      if (file.id) {
        // 这一块的字段需要进行确定
        this.ruleForm.picDelIds.push(file.id);
      } else {
        var files = this.formDate.getAll('img');
        var index = files.findIndex(function (item) {
          return item.uid === file.uid;
        });
        var tp = files.splice(index, 1);
        tp.forEach(function (inner) {
          _this5.formDate.append('img', inner);
        });
      }
      return true;
    }
  }
});

/***/ }),

/***/ "JSTC":
/*!***************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/editNoticePublicityDialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editNoticePublicityDialog.vue?vue&type=script&lang=js& */ "6nRU");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "L/+3":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/editNoticePublicityDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "M7ud":
/*!************************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/editNoticePublicityDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editNoticePublicityDialog.vue?vue&type=style&index=0&lang=scss& */ "L/+3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "QWe7":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/editNoticePublicityDialog.vue?vue&type=template&id=5517ef1e& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_template_id_5517ef1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editNoticePublicityDialog.vue?vue&type=template&id=5517ef1e& */ "Tg8T");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_template_id_5517ef1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editNoticePublicityDialog_vue_vue_type_template_id_5517ef1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "RCea":
/*!**************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/editNoticePublicityDialog.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editNoticePublicityDialog_vue_vue_type_template_id_5517ef1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editNoticePublicityDialog.vue?vue&type=template&id=5517ef1e& */ "QWe7");
/* harmony import */ var _editNoticePublicityDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editNoticePublicityDialog.vue?vue&type=script&lang=js& */ "JSTC");
/* empty/unused harmony star reexport *//* harmony import */ var _editNoticePublicityDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editNoticePublicityDialog.vue?vue&type=style&index=0&lang=scss& */ "M7ud");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editNoticePublicityDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editNoticePublicityDialog_vue_vue_type_template_id_5517ef1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editNoticePublicityDialog_vue_vue_type_template_id_5517ef1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "editNoticePublicityDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Tg8T":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/editNoticePublicityDialog.vue?vue&type=template&id=5517ef1e& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.editShow)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"noticePublicityDialog",attrs:{"title":_vm.editTitle,"visible":_vm.editShow,"before-close":_vm.beforeClose,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.editShow=$event}}},[_c('div',{staticClass:"editNoticePublicity"},[_c('el-form',{ref:"ruleForm",staticClass:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"150px"}},[(!_vm.isNew)?_c('el-form-item',{attrs:{"label":"公告公示编号","prop":"code"}},[_c('el-input',{model:{value:(_vm.ruleForm.code),callback:function ($$v) {_vm.$set(_vm.ruleForm, "code", $$v)},expression:"ruleForm.code"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"公告公示标题","prop":"title"}},[_c('el-input',{model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发布时间","prop":"deployDate"}},[_c('el-date-picker',{attrs:{"value-format":"yyyy-MM-dd HH:mm","type":"datetime","placeholder":"选择发布时间"},model:{value:(_vm.ruleForm.deployDate),callback:function ($$v) {_vm.$set(_vm.ruleForm, "deployDate", $$v)},expression:"ruleForm.deployDate"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"收文单位","prop":"orgIds"}},[_c('selectOrg',{attrs:{"is-multiple":"","org-id":_vm.ruleForm.orgIds},on:{"update:orgId":function($event){return _vm.$set(_vm.ruleForm, "orgIds", $event)},"update:org-id":function($event){return _vm.$set(_vm.ruleForm, "orgIds", $event)}}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"公告公示内容","prop":"content"}},[_c('tinymce',{attrs:{"height":150},model:{value:(_vm.ruleForm.content),callback:function ($$v) {_vm.$set(_vm.ruleForm, "content", $$v)},expression:"ruleForm.content"}})],1),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('el-form-item',{attrs:{"label":"图片"}},[_c('el-upload',{staticStyle:{"width":"70%"},attrs:{"action":"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","file-list":_vm.picList,"http-request":_vm.uploadPic,"before-remove":_vm.beforeRemovePic,"on-preview":_vm.handlePictureCardPreview,"on-remove":_vm.handleRemove}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.picShow,"title":"预览","append-to-body":""},on:{"update:visible":function($event){_vm.picShow=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.picUrl,"alt":""}})])],1)],1),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('el-form-item',{attrs:{"label":"附件","prop":"notice_type"}},[_c('el-upload',{staticClass:"upload-demo",attrs:{"action":"https://","before-remove":_vm.beforeRemove,"http-request":_vm.upload,"file-list":_vm.attachmentList}},[_c('el-button',{attrs:{"size":"small","type":"primary"}},[_vm._v("点击上传")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"flex-center"},[_c('el-button',{on:{"click":_vm.beforeClose}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_gcdd_xwgg_xwbc'),expression:"'P_gcdd_xwgg_xwbc'"}],attrs:{"type":"primary"},on:{"click":function($event){return _vm.submitForm(0)}}},[_vm._v("保存")]),_vm._v(" "),_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_gcdd_xwgg_xwfb'),expression:"'P_gcdd_xwgg_xwfb'"}],attrs:{"type":"success"},on:{"click":function($event){return _vm.submitForm(1)}}},[_vm._v("发布")])],1)],1)],1)]):_vm._e()}
var staticRenderFns = []



/***/ })

}]);