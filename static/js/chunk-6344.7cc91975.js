(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-6344"],{

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

/***/ })

}]);