(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-1935"],{

/***/ "4zY6":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/uploadDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "7mGT":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/uploadDialog.vue?vue&type=template&id=0907b295& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cus-dialog-container",attrs:{"id":_vm.uploadId}},[_c('el-dialog',{attrs:{"width":_vm.isFile? '500px': '45%',"append-to-body":"","visible":_vm.dialogVisible,"close-on-click-modal":false,"title":_vm.title},on:{"update:visible":function($event){_vm.dialogVisible=$event},"close":_vm.close}},[(!_vm.isFile)?_c('el-upload',{ref:_vm.uploadId,attrs:{"action":"","auto-upload":false,"http-request":_vm.upload,"limit":_vm.length,"on-remove":_vm.handleRemove,"multiple":"","file-list":_vm.fileList,"list-type":"picture-card"}},[_c('i',{staticClass:"el-icon-plus"})]):_c('el-upload',{ref:_vm.uploadId,attrs:{"action":"","http-request":_vm.upload,"on-remove":_vm.handleRemove,"auto-upload":false,"file-list":_vm.fileList,"multiple":"","limit":_vm.length}},[_c('el-button',{attrs:{"slot":"trigger","size":"small","type":"primary"},slot:"trigger"},[_vm._v("选取文件")])],1),_vm._v(" "),_vm._t("notice",[_c('div',[_vm._v(_vm._s(_vm.notice))])]),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.close}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.handleSubmit}},[_vm._v("确定")])],1)],2)],1)}
var staticRenderFns = []



/***/ }),

/***/ "9EM/":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/uploadDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/doc */ "5HWN");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'UploadDialog',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    uploadData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    value: {
      type: String | Number,
      default: ''
    },
    length: {
      type: Number,
      default: 9
    },
    isFile: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    fileName: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    notice: {
      type: String,
      default: ''
    },
    docName: {
      type: String,
      default: 'docId'
      // fileType: {
      //   type: Boolean,
      //   default: false
      // }
    } },
  data: function data() {
    return {
      uploadId: 'upload_' + new Date().getTime(),
      formData: null,
      loading: false,
      fileList: [],
      deleteImgId: [],
      docId: this.uploadData[this.docName]
      // fileType: flase
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['fileUrl'])),
  watch: {
    dialogVisible: function dialogVisible(val) {
      var _this = this;

      if (val) {
        this.docId = this.uploadData[this.docName];
        if (this.docId && this.docId !== '') {
          Object(_api_doc__WEBPACK_IMPORTED_MODULE_2__["getPicture"])({ docId: this.docId }).then(function (response) {
            if (response.success) {
              for (var i = 0; i < response.result.length; i++) {
                _this.fileList.push({
                  url: _this.isFile ? _this.fileUrl + 'doc/' + response.result[i].fileName : _this.fileUrl + 'img/' + response.result[i].fileName,
                  id: response.result[i].id,
                  name: response.result[i].originalFileName
                });
              }
            }
          });
        }
      }
    }
  },
  methods: {
    close: function close() {
      this.fileList = [];
      this.deleteImgId = [];
      this.$emit('update:dialogVisible', false);
    },
    handleRemove: function handleRemove(file) {
      if (file.status === 'success') {
        this.deleteImgId.push(file.id);
      }
    },

    // beforeUpload(file) {
    //   this.$emit('beforeUpload', file)
    // },
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      this.loading = true;
      this.formData = new FormData();

      this.$refs[this.uploadId].submit();
      // debugger
      // if (this.fileType) {
      //   this.loading = false
      //   return
      // }
      if (this.deleteImgId && this.deleteImgId.length > 0) {
        this.formData.append('delIds', this.deleteImgId);
      } else {
        this.formData.append('delIds', []);
      }
      if (this.docId && this.docId !== '') {
        this.formData.append('docId', this.docId);
      }
      Object(_api_doc__WEBPACK_IMPORTED_MODULE_2__["uploadDoc"])(this.formData).then(function (response) {
        _this2.loading = false;
        if (response.success) {
          _this2.$message.success('上传成功');
          _this2.docId = response.result.id;
          _this2.uploadData[_this2.docName] = response.result.id;
          _this2.$emit('submit', _this2.docId);
          _this2.$emit('update:dialogVisible', false);
        }
      });
    },
    upload: function upload(item) {
      this.formData.append('attach', item.file);
    },
    submitOk: function submitOk() {
      var _this3 = this;

      if (this.deleteImgId.length > 0) {
        this.formData = new FormData();
        this.formData.append('docId', this.docId);
        this.formData.append('delIds', this.deleteImgId);
        this.loading = true;
        Object(_api_doc__WEBPACK_IMPORTED_MODULE_2__["uploadDoc"])(this.formData).then(function (response) {
          _this3.loading = false;
        });
      }
      this.$emit('input', this.docId);
      this.$emit('update:dialogVisible', false);
    }
  }
});

/***/ }),

/***/ "B//w":
/*!***************************************************************!*\
  !*** ./src/views/drawingPlatform/components/uploadDialog.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uploadDialog_vue_vue_type_template_id_0907b295___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadDialog.vue?vue&type=template&id=0907b295& */ "ge07");
/* harmony import */ var _uploadDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadDialog.vue?vue&type=script&lang=js& */ "CvDL");
/* empty/unused harmony star reexport *//* harmony import */ var _uploadDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploadDialog.vue?vue&type=style&index=0&lang=scss& */ "r4XG");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uploadDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uploadDialog_vue_vue_type_template_id_0907b295___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uploadDialog_vue_vue_type_template_id_0907b295___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "uploadDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "CuCC":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/docSelect.vue?vue&type=style&index=0&id=6b9c9468&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_6b9c9468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./docSelect.vue?vue&type=style&index=0&id=6b9c9468&lang=scss&scoped=true& */ "uyib");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_6b9c9468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_6b9c9468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_6b9c9468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_6b9c9468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_6b9c9468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "CvDL":
/*!****************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/uploadDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./uploadDialog.vue?vue&type=script&lang=js& */ "9EM/");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "dQts":
/*!************************************************************!*\
  !*** ./src/views/drawingPlatform/components/docSelect.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docSelect_vue_vue_type_template_id_6b9c9468_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docSelect.vue?vue&type=template&id=6b9c9468&scoped=true& */ "kNZT");
/* harmony import */ var _docSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docSelect.vue?vue&type=script&lang=js& */ "iGTt");
/* empty/unused harmony star reexport *//* harmony import */ var _docSelect_vue_vue_type_style_index_0_id_6b9c9468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docSelect.vue?vue&type=style&index=0&id=6b9c9468&lang=scss&scoped=true& */ "CuCC");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _docSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _docSelect_vue_vue_type_template_id_6b9c9468_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _docSelect_vue_vue_type_template_id_6b9c9468_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b9c9468",
  null
  
)

component.options.__file = "docSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ge07":
/*!**********************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/uploadDialog.vue?vue&type=template&id=0907b295& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_template_id_0907b295___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./uploadDialog.vue?vue&type=template&id=0907b295& */ "7mGT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_template_id_0907b295___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_template_id_0907b295___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "iGTt":
/*!*************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/docSelect.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./docSelect.vue?vue&type=script&lang=js& */ "uQ25");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "kNZT":
/*!*******************************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/docSelect.vue?vue&type=template&id=6b9c9468&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_template_id_6b9c9468_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./docSelect.vue?vue&type=template&id=6b9c9468&scoped=true& */ "lTTZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_template_id_6b9c9468_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_template_id_6b9c9468_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "lTTZ":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/docSelect.vue?vue&type=template&id=6b9c9468&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"docSelect"},[_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"visible":_vm.dialogVisible,"close-on-click-modal":false,"before-close":_vm.close},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.drawingList,"columns":_vm.columns}}),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.close}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.buttonLoading},on:{"click":_vm.save}},[_vm._v("提交")])],1)],1),_vm._v(" "),_c('upload-dialog',{ref:"fmUpload",attrs:{"dialog-visible":_vm.uploadVisible,"upload-data":_vm.uploadData,"length":_vm.file.length,"is-file":_vm.file.isFile,"file-name":_vm.file.fileName,"title":_vm.title},on:{"update:dialogVisible":function($event){_vm.uploadVisible=$event},"update:dialog-visible":function($event){_vm.uploadVisible=$event},"submit":_vm.submit}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "r4XG":
/*!*************************************************************************************************!*\
  !*** ./src/views/drawingPlatform/components/uploadDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./uploadDialog.vue?vue&type=style&index=0&lang=scss& */ "4zY6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "uQ25":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/docSelect.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");
/* harmony import */ var _components_table_tableList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/table/tableList */ "dARg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _uploadDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploadDialog */ "B//w");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






// import renderFormUtils from '@/utils/renderForm.js'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DocSelect',
  components: { UploadDialog: _uploadDialog__WEBPACK_IMPORTED_MODULE_5__["default"], TableList: _components_table_tableList__WEBPACK_IMPORTED_MODULE_3__["default"] },
  directives: {
    buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    drawingList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    currentSelectId: {
      type: Number | String,
      default: null
    }
  },
  data: function data() {
    var _this = this;

    // const _this = this
    return {
      buttonLoading: false,
      selectId: null,
      columns: [{
        text: '',
        render: this.render,
        // render: renderFormUtils.renderElRadio('id', {
        //   on: {
        //     change: _this.selectChange
        //   },
        //   props: {
        //     value: this.selectId
        //   }
        // }),
        width: 40
      }, {
        text: '版本号',
        render: this.renderVersion
      }, {
        text: 'CAD',
        formatter: function formatter(val) {
          return _this.formatter('cad', val);
        },
        click: function click(val) {
          return _this.clickFun('cad', val);
        },
        classFun: function classFun() {
          return 'tableLookLabel';
        }
      }, {
        text: 'PDF',
        formatter: function formatter(val) {
          return _this.formatter('pdf', val);
        },
        click: function click(val) {
          return _this.clickFun('pdf', val);
        },
        classFun: function classFun() {
          return 'tableLookLabel';
        }
      }, {
        text: '时间',
        value: 'uploadDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"],
        filterParams: ['{y}-{m}-{d}']
      }, {
        text: '上传人',
        value: 'uploadUserName'
      }, {
        text: '图纸说明',
        render: this.renderRemark
      }],
      uploadVisible: false,
      uploadData: {},
      file: {
        length: 100,
        isFile: true,
        fileName: ''
      },
      title: '',
      uploadType: ''
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['dictMap'])),
  watch: {
    dialogVisible: function dialogVisible(val) {
      if (val) {
        this.selectId = this.currentSelectId;
      }
    }
    // currentSelectId(val) {
    //   if (val) {
    //     this.selectId = val
    //   }
    // }

  },
  methods: {
    close: function close() {
      this.$emit('update:dialogVisible', false);
    },

    /**
     * 渲染单选列
     * @function render
     */
    render: function render(h, val) {
      var _this2 = this;

      return [h('el-radio', {
        on: {
          change: function change(e) {
            _this2.selectId = val.row.id;
          }
        },
        props: {
          label: val.row.id,
          value: this.selectId
        }
      }, [h('span', {})])];
    },

    /**
     * 渲染版本列
     * @function render
     */
    renderVersion: function renderVersion(h, val) {
      var _this3 = this;

      if (!val.row.id) {
        // 新版本
        return h('el-input', {
          attrs: {
            value: val.row.drawingVersion
          },
          on: {
            input: function input(e) {
              _this3.$set(val.row, 'drawingVersion', e);
            }
          }
        });
      } else {
        // 历史版本
        return h('span', {}, val.row.drawingVersion);
      }
    },

    /**
     * 渲染图纸说明列
     * @function render
     */
    renderRemark: function renderRemark(h, val) {
      var _this4 = this;

      if (!val.row.id) {
        // 新版本
        return h('el-input', {
          attrs: {
            value: val.row.remark
          },
          on: {
            input: function input(e) {
              _this4.$set(val.row, 'remark', e);
            }
          }
        });
      } else {
        // 历史版本
        return h('span', {}, val.row.remark);
      }
    },

    /**
     * 处理CAD和PDF列
     * @function formatter
     */
    formatter: function formatter(type, val) {
      return val.id ? val[type + 'DocId'] ? '查看' : '' : '上传'; // id为空需要上传附件，存在id且存在docId支持查看功能
    },

    /**
     * CAD和PDF列的操作
     * @function clickFun
     */
    clickFun: function clickFun(type, val) {
      val.id ? this.view(type, val[type + 'DocId']) : this.upload(type, val); // id为空上传附件，id存在查看附件
    },

    /**
     * 查看附件列表
     * @function view
     */
    view: function view(type, docId) {
      if (docId) {
        this.$store.dispatch('setFileType', type);
        this.$store.dispatch('setFileDocId', docId);
        this.$emit('showFiles');
      } else {
        this.$message.warning('未上传图纸！');
      }
    },

    /**
     * 上传附件
     * @function view
     */
    upload: function upload(type, val) {
      this.uploadType = type;
      if (type === 'cad') {
        this.title = 'CAD图纸上传';
      } else {
        this.title = 'PDF图纸上传';
      }
      this.uploadData = {
        id: val.id,
        docId: val[type + 'DocId'] ? val[type + 'DocId'] : ''
        // this.uploadData = val
      };this.uploadVisible = true;
    },

    /**
     * 上传附件提交
     * @function submit
     */
    submit: function submit() {
      var _this5 = this;

      var find = this.drawingList.find(function (item) {
        return item.id === _this5.uploadData.id;
      });
      if (find) {
        find[this.uploadType + 'DocId'] = this.uploadData.docId;
      }
    },
    save: function save() {
      this.$emit('update:currentSelectId', this.selectId);
      // this.currentSelectId = this.selectId
      this.$emit('save');
      this.close();
      // this.$emit('update: ')
      // console.log(this.drawingList)
      // console.log('find', this.drawingList.find(item => item.id === this.selectId))
      // debugger
      // // 选择历史版本
      // if (this.selectId) {
      //
      // } else { // 选择新图纸
      //
      // }
    }
  }
});

/***/ }),

/***/ "uyib":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/drawingPlatform/components/docSelect.vue?vue&type=style&index=0&id=6b9c9468&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);