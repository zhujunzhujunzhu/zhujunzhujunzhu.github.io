(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-e6f3"],{

/***/ "0bLI":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/editDispatchingNoticeDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _components_selectProjectUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/selectProjectUser */ "PB0D");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/doc */ "5HWN");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { selectProjectUser: _components_selectProjectUser__WEBPACK_IMPORTED_MODULE_6__["default"] },

  directives: { buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_7__["default"] },
  props: {
    isNew: {
      type: Boolean,
      default: true
    },
    form: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    editShow: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      editTitle: '新增',
      codeShow: false,
      ruleForm: {
        type: '',
        sendUserIdTp: '',
        sendUserId: '',
        content: '',
        receiveDate: '',
        terminalDate: '',
        userIds: [],
        delIds: [],
        status: ''
      },
      rules: {
        code: [{ required: true, message: '请输入编码', trigger: 'change' }],
        name: [{ required: true, message: '请输入标题', trigger: 'change' }],
        type: [{ required: true, message: '请输入调度类型', trigger: 'change' }],
        content: [{ required: false, message: '请编辑内容', trigger: 'change' }],
        sendUserIdTp: [{ required: true, message: '请选择发令人', trigger: 'change' }],
        userIds: [{ required: false, message: '请选择受令人', trigger: 'change' }]
      },
      picShow: false,
      projectId: '',
      attachmentList: [],
      formData: new FormData()
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['dictMap', 'fileUrl'])),
  watch: {
    form: function form() {
      this.dealChange();
    }
  },
  mounted: function mounted() {
    this.dealChange();
  },

  methods: {
    validUserIds: function validUserIds() {
      this.$refs['ruleForm'].validateField('userIds', function (res) {});
    },
    validSendUserIdTp: function validSendUserIdTp() {
      this.$refs['ruleForm'].validateField('sendUserIdTp', function (res) {});
    },
    dealChange: function dealChange() {
      this.formData = new FormData();
      if (!this.isNew) {
        this.editTitle = '编辑';
        this.ruleForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.ruleForm, this.form, {
          sendDate: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parseTime"])(this.form.sendDate, '{y}-{m}-{d} {h}:{i}')
        });
        this.dealAttach();
      } else {
        this.editTitle = '新增';
        this.$set(this.ruleForm, 'sendDate', Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parseTime"])(new Date().getTime(), '{y}-{m}-{d} {h}:{i}'));
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

                if (_this.form.docId) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt('return');

              case 3:
                _context.next = 5;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_8__["attachList"])({
                  docId: _this.form.docId
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
    filterFun: function filterFun(data) {
      var _this2 = this;

      var project = JSON.parse(this.$storage.getStorage('project'));
      this.projectId = project.id;
      return data.filter(function (item) {
        return item.id === _this2.projectId;
      });
    },
    upload: function upload(item) {
      this.formData.append('file', item.file);
    },
    saveDispatch: function saveDispatch(isDeploy) {
      var _this3 = this;

      this.$refs['ruleForm'].validate(function (valid) {
        if (valid) {
          // this.ruleForm.sendUserId = this.ruleForm.sendUserIdTp[0] ? this.ruleForm.sendUserIdTp[0] : ''
          _this3.ruleForm.sendUserId = _this3.ruleForm.sendUserIdTp;
          _this3.ruleForm.isDeploy = isDeploy;
          _this3.formData = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["json2Formdata"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this3.ruleForm, { projectId: _this3.projectId }), _this3.formData);
          Object(_api_project_dispatch__WEBPACK_IMPORTED_MODULE_3__["saveDispatch"])(_this3.formData).then(function (res) {
            console.log(res);
            if (isDeploy === 0) {
              _this3.$message({
                type: 'success',
                message: '编辑成功'
              });
            } else {
              _this3.$message({
                type: 'success',
                message: '发布成功'
              });
            }

            _this3.closeFun();
          });
        }
      });
    },
    closeFun: function closeFun() {
      this.ruleForm = {
        type: '',
        sendUserIdTp: [],
        sendUserId: '',
        content: '',
        receiveDate: '',
        terminalDate: '',
        userIds: [],
        delIds: [],
        status: ''
      };
      this.$emit('update:editShow', false);
      this.$emit('closeFun', {});
    },
    beforeRemove: function beforeRemove(file) {
      var _this4 = this;

      if (file.id) {
        this.ruleForm.delIds.push(file.id);
      } else {
        var files = this.formData.getAll('file');
        var index = files.findIndex(function (item) {
          return item.uid === file.uid;
        });
        var tp = files.splice(index, 1);
        tp.forEach(function (inner) {
          _this4.formData.append('file', inner);
        });
      }
      return true;
    }
  }
});

/***/ }),

/***/ "8zB1":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/editDispatchingNoticeDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "SEDA":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/editDispatchingNoticeDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editDispatchingNoticeDialog.vue?vue&type=script&lang=js& */ "0bLI");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "SKoJ":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/editDispatchingNoticeDialog.vue?vue&type=template&id=41a2628c& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_template_id_41a2628c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editDispatchingNoticeDialog.vue?vue&type=template&id=41a2628c& */ "u61O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_template_id_41a2628c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_template_id_41a2628c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "SZvO":
/*!****************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/editDispatchingNoticeDialog.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editDispatchingNoticeDialog_vue_vue_type_template_id_41a2628c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editDispatchingNoticeDialog.vue?vue&type=template&id=41a2628c& */ "SKoJ");
/* harmony import */ var _editDispatchingNoticeDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editDispatchingNoticeDialog.vue?vue&type=script&lang=js& */ "SEDA");
/* empty/unused harmony star reexport *//* harmony import */ var _editDispatchingNoticeDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editDispatchingNoticeDialog.vue?vue&type=style&index=0&lang=scss& */ "nhwG");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editDispatchingNoticeDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editDispatchingNoticeDialog_vue_vue_type_template_id_41a2628c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editDispatchingNoticeDialog_vue_vue_type_template_id_41a2628c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "editDispatchingNoticeDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "nhwG":
/*!**************************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/components/editDispatchingNoticeDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editDispatchingNoticeDialog.vue?vue&type=style&index=0&lang=scss& */ "8zB1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editDispatchingNoticeDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "u61O":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/components/editDispatchingNoticeDialog.vue?vue&type=template&id=41a2628c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.editShow)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"dispatchingNoticeDialog",attrs:{"title":_vm.editTitle,"visible":_vm.editShow,"before-close":_vm.closeFun,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.editShow=$event}}},[_c('el-form',{ref:"ruleForm",staticClass:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"150px"}},[_c('el-row',[(!_vm.isNew)?_c('el-col',{staticClass:"my-form-item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"调度编号","prop":"code"}},[_c('el-input',{model:{value:(_vm.ruleForm.code),callback:function ($$v) {_vm.$set(_vm.ruleForm, "code", $$v)},expression:"ruleForm.code"}})],1)],1):_vm._e(),_vm._v(" "),_c('el-col',{staticClass:"my-form-item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"调度名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入调度名称"},model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"调度类型","prop":"type"}},[_c('el-select',{attrs:{"placeholder":"请选择类型"},model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},_vm._l((_vm.dictMap['dispatch_type']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1)],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item1",attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"受令人","prop":"userIds"}},[_c('selectProjectUser',{attrs:{"user-ids":_vm.ruleForm.userIds,"is-multiple":true},on:{"update:userIds":function($event){return _vm.$set(_vm.ruleForm, "userIds", $event)},"update:user-ids":function($event){return _vm.$set(_vm.ruleForm, "userIds", $event)},"input":_vm.validUserIds}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"要求处理时间","prop":"terminalDate"}},[_c('el-date-picker',{attrs:{"value-format":"yyyy-MM-dd HH:mm","type":"datetime","placeholder":"选择要求处理时间"},model:{value:(_vm.ruleForm.terminalDate),callback:function ($$v) {_vm.$set(_vm.ruleForm, "terminalDate", $$v)},expression:"ruleForm.terminalDate"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"发布时间","prop":"sendDate"}},[_c('el-date-picker',{attrs:{"value-format":"yyyy-MM-dd HH:mm","type":"datetime","placeholder":"选择发布时间"},model:{value:(_vm.ruleForm.sendDate),callback:function ($$v) {_vm.$set(_vm.ruleForm, "sendDate", $$v)},expression:"ruleForm.sendDate"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"调度状态","prop":"status"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请选择类型"},model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},_vm._l((_vm.dictMap['dispatch_status']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1)],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item1",attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"内容","prop":"content"}},[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"请输入内容"},model:{value:(_vm.ruleForm.content),callback:function ($$v) {_vm.$set(_vm.ruleForm, "content", $$v)},expression:"ruleForm.content"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"my-form-item1",attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"附件","prop":"notice_type"}},[_c('el-upload',{staticClass:"upload-demo",attrs:{"action":"","multiple":false,"http-request":_vm.upload,"before-remove":_vm.beforeRemove,"file-list":_vm.attachmentList}},[_c('el-button',{attrs:{"size":"small","type":"primary"}},[_vm._v("点击上传")])],1)],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer flex-center",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.closeFun}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_gcdd_ddtz_ddbc'),expression:"'P_gcdd_ddtz_ddbc'"}],attrs:{"type":"primary"},on:{"click":function($event){return _vm.saveDispatch(0)}}},[_vm._v("保存")]),_vm._v(" "),_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_gcdd_ddtz_ddfb'),expression:"'P_gcdd_ddtz_ddfb'"}],attrs:{"type":"success"},on:{"click":function($event){return _vm.saveDispatch(1)}}},[_vm._v("发布")])],1)],1):_vm._e()],1)}
var staticRenderFns = []



/***/ })

}]);