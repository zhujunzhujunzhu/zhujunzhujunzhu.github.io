(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-1529"],{

/***/ "6J71":
/*!******************************************************************************************!*\
  !*** ./src/views/project/designManage/components/docSelect.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./docSelect.vue?vue&type=script&lang=js& */ "Mcm4");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "Mcm4":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/designManage/components/docSelect.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony import */ var _uploadDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploadDialog */ "o9FE");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "MoAn":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/designManage/components/docSelect.vue?vue&type=style&index=0&id=20b3765c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "RGkN":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/designManage/components/docSelect.vue?vue&type=template&id=20b3765c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"docSelect"},[_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"visible":_vm.dialogVisible,"close-on-click-modal":false,"before-close":_vm.close},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.drawingList,"columns":_vm.columns}}),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.close}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.buttonLoading},on:{"click":_vm.save}},[_vm._v("提交")])],1)],1),_vm._v(" "),_c('upload-dialog',{ref:"fmUpload",attrs:{"dialog-visible":_vm.uploadVisible,"upload-data":_vm.uploadData,"length":_vm.file.length,"is-file":_vm.file.isFile,"file-name":_vm.file.fileName,"title":_vm.title},on:{"update:dialogVisible":function($event){_vm.uploadVisible=$event},"update:dialog-visible":function($event){_vm.uploadVisible=$event},"submit":_vm.submit}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "Zwzy":
/*!************************************************************************************************************!*\
  !*** ./src/views/project/designManage/components/docSelect.vue?vue&type=template&id=20b3765c&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_template_id_20b3765c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./docSelect.vue?vue&type=template&id=20b3765c&scoped=true& */ "RGkN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_template_id_20b3765c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_template_id_20b3765c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "p3kF":
/*!*****************************************************************!*\
  !*** ./src/views/project/designManage/components/docSelect.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docSelect_vue_vue_type_template_id_20b3765c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docSelect.vue?vue&type=template&id=20b3765c&scoped=true& */ "Zwzy");
/* harmony import */ var _docSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docSelect.vue?vue&type=script&lang=js& */ "6J71");
/* empty/unused harmony star reexport *//* harmony import */ var _docSelect_vue_vue_type_style_index_0_id_20b3765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docSelect.vue?vue&type=style&index=0&id=20b3765c&lang=scss&scoped=true& */ "q1Nt");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _docSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _docSelect_vue_vue_type_template_id_20b3765c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _docSelect_vue_vue_type_template_id_20b3765c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "20b3765c",
  null
  
)

component.options.__file = "docSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "q1Nt":
/*!***************************************************************************************************************************!*\
  !*** ./src/views/project/designManage/components/docSelect.vue?vue&type=style&index=0&id=20b3765c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_20b3765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./docSelect.vue?vue&type=style&index=0&id=20b3765c&lang=scss&scoped=true& */ "MoAn");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_20b3765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_20b3765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_20b3765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_20b3765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_docSelect_vue_vue_type_style_index_0_id_20b3765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);