(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-1377"],{

/***/ "07Q5":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/components/authority/authInfoBox.vue?vue&type=style&index=0&id=b6c0d734&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "AdZy":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/components/authority/authInfoBox.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _api_project_projectRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/project/projectRole */ "vPDp");
/* harmony import */ var _api_project_bimFloder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/bimFloder */ "lC0u");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AuthInfoBox',
  components: {},
  props: {},
  data: function data() {
    return {
      authForm: {
        actionIds: [],
        permissionTypeId: '',
        permissionType: 'ProjectRole',
        resourceId: ''
      },
      allSelect: false,
      roleDisabled: false,
      authList: [],
      roleList: [],
      rules: {
        permissionTypeId: [{ required: true, message: '请选择项目角色', trigger: 'change' }],
        actionIds: [{ required: true, message: '请选择权限', trigger: 'change' }]
      }
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['categoryActions', 'docActions', 'isDoc', 'rightClickNode', 'document', 'authEditForm', 'authEditType', 'currentAuthList'])),
  watch: {
    authEditForm: function authEditForm(val) {
      if (val) {
        var temp = [];
        val.actions.forEach(function (item) {
          temp.push(item.id);
        });
        this.authForm.actionIds = temp;
        this.authForm.permissionTypeId = val.projectRole.id;
        this.$store.dispatch('setAuthEditForm', null);
      }
    },
    authEditType: function authEditType(val) {
      if (val === 'add') {
        this.authForm = {
          actionIds: [],
          permissionTypeId: '',
          permissionType: 'ProjectRole',
          resourceId: ''
        };
        this.roleDisabled = false;
        this.allSelect = false;
      } else {
        this.roleDisabled = true;
      }
    }
  },
  mounted: function mounted() {
    document.getElementsByClassName('auth-info-box')[0].style.height = document.documentElement.clientHeight - 110 + 'px';
    this.getRoles();
  },

  methods: {
    handleClose: function handleClose() {
      this.$store.dispatch('setAuthInfoVisible', false);
    },
    getRoles: function getRoles() {
      var _this = this;

      Object(_api_project_projectRole__WEBPACK_IMPORTED_MODULE_2__["projectRoleList"])({}).then(function (res) {
        if (res.success) {
          _this.roleList = res.result.list;
        }
      });
    },
    changeAllSelect: function changeAllSelect() {
      var _this2 = this;

      if (this.allSelect) {
        if (this.isDoc) {
          this.docActions.forEach(function (item) {
            _this2.authForm.actionIds.push(item.id);
          });
        } else {
          this.categoryActions.forEach(function (item) {
            _this2.authForm.actionIds.push(item.id);
          });
        }
      } else {
        this.authForm.actionIds = [];
      }
    },
    reset: function reset() {
      this.authForm = {
        actionIds: [],
        permissionTypeId: '',
        permissionType: 'ProjectRole',
        resourceId: ''
      };
      this.roleDisabled = false;
      this.allSelect = false;
      this.$store.dispatch('setRefreshTable', true);
    },
    saveAuth: function saveAuth() {
      var _this3 = this;

      var flag = true;
      // 判断是否重复添加
      this.currentAuthList.forEach(function (item) {
        if (item.projectRole.id === _this3.authForm.permissionTypeId) {
          flag = false;
        }
      });
      if (!flag && this.authEditType === 'add') {
        this.$message.warning('不能重复为一个角色添加权限');
        return false;
      }
      this.$refs['authForm'].validate(function (valid) {
        if (valid) {
          if (_this3.isDoc) {
            _this3.authForm.resourceId = _this3.document.id;
            Object(_api_project_bimFloder__WEBPACK_IMPORTED_MODULE_3__["permitDocActions"])(_this3.authForm).then(function (res) {
              if (res.success) {
                _this3.$message.success('保存成功');
                _this3.reset();
              }
            });
          } else {
            _this3.authForm.resourceId = _this3.rightClickNode.id;
            Object(_api_project_bimFloder__WEBPACK_IMPORTED_MODULE_3__["permitCategoryActions"])(_this3.authForm).then(function (res) {
              if (res.success) {
                _this3.$message.success('保存成功');
                _this3.reset();
              }
            });
          }
        }
      });
    },
    cancel: function cancel() {
      this.$store.dispatch('setAuthInfoVisible', false);
    }
  }
});

/***/ }),

/***/ "FTlQ":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/components/authority/authInfoBox.vue?vue&type=template&id=b6c0d734&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"authInfoBox",staticClass:"auth-info-box drawer-wrap"},[_c('div',{staticClass:"titleDiv"},[_c('label',{staticClass:"title"},[_vm._v("配置权限")]),_vm._v(" "),_c('div',{staticClass:"close icon iconfont iconguanbi",on:{"click":_vm.handleClose}})]),_vm._v(" "),_c('el-form',{ref:"authForm",staticClass:"authForm",attrs:{"rules":_vm.rules,"model":_vm.authForm,"label-position":"center","size":"small","label-width":"80px"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"项目角色","prop":"permissionTypeId"}},[_c('el-select',{attrs:{"placeholder":"请选择角色","disabled":_vm.roleDisabled},model:{value:(_vm.authForm.permissionTypeId),callback:function ($$v) {_vm.$set(_vm.authForm, "permissionTypeId", $$v)},expression:"authForm.permissionTypeId"}},_vm._l((_vm.roleList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"权限","prop":"actionIds"}},[_c('el-checkbox',{on:{"change":_vm.changeAllSelect},model:{value:(_vm.allSelect),callback:function ($$v) {_vm.allSelect=$$v},expression:"allSelect"}},[_vm._v("全选")]),_vm._v(" "),(!_vm.isDoc)?_c('el-checkbox-group',{model:{value:(_vm.authForm.actionIds),callback:function ($$v) {_vm.$set(_vm.authForm, "actionIds", $$v)},expression:"authForm.actionIds"}},_vm._l((_vm.categoryActions),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name)+"\n            ")])}),1):_c('el-checkbox-group',{model:{value:(_vm.authForm.actionIds),callback:function ($$v) {_vm.$set(_vm.authForm, "actionIds", $$v)},expression:"authForm.actionIds"}},_vm._l((_vm.docActions),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name)+"\n            ")])}),1)],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveAuth}},[_vm._v("保存")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.cancel}},[_vm._v("取消")])],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "M91S":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/views/project/BIM/components/authority/authInfoBox.vue?vue&type=style&index=0&id=b6c0d734&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_style_index_0_id_b6c0d734_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./authInfoBox.vue?vue&type=style&index=0&id=b6c0d734&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "07Q5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_style_index_0_id_b6c0d734_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_style_index_0_id_b6c0d734_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_style_index_0_id_b6c0d734_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_style_index_0_id_b6c0d734_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_style_index_0_id_b6c0d734_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "NvGw":
/*!***************************************************************************************************************!*\
  !*** ./src/views/project/BIM/components/authority/authInfoBox.vue?vue&type=template&id=b6c0d734&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_template_id_b6c0d734_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./authInfoBox.vue?vue&type=template&id=b6c0d734&scoped=true& */ "FTlQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_template_id_b6c0d734_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_template_id_b6c0d734_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "PNrz":
/*!*********************************************************************************************!*\
  !*** ./src/views/project/BIM/components/authority/authInfoBox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./authInfoBox.vue?vue&type=script&lang=js& */ "AdZy");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_authInfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "vPDp":
/*!****************************************!*\
  !*** ./src/api/project/projectRole.js ***!
  \****************************************/
/*! exports provided: configProjectRole, projectRoleList, saveProjectRole, rolePrivileges, deleteProjectRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configProjectRole", function() { return configProjectRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectRoleList", function() { return projectRoleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProjectRole", function() { return saveProjectRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rolePrivileges", function() { return rolePrivileges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjectRole", function() { return deleteProjectRole; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


// 项目角色权限配置
function configProjectRole(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectPrivilege/configProjectRole',
    method: 'post',
    data: param
  });
}

// 项目角色分页查询
function projectRoleList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectPrivilege/projectRoleList',
    method: 'post',
    data: param
  });
}

// 维护项目角色
function saveProjectRole(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectPrivilege/saveProjectRole',
    method: 'post',
    data: param
  });
}

// 项目角色权限清单
function rolePrivileges(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectPrivilege/rolePrivileges',
    method: 'post',
    data: param
  });
}

// 删除项目角色
function deleteProjectRole(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectPrivilege/deleteProjectRole',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "vmNk":
/*!********************************************************************!*\
  !*** ./src/views/project/BIM/components/authority/authInfoBox.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authInfoBox_vue_vue_type_template_id_b6c0d734_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authInfoBox.vue?vue&type=template&id=b6c0d734&scoped=true& */ "NvGw");
/* harmony import */ var _authInfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authInfoBox.vue?vue&type=script&lang=js& */ "PNrz");
/* empty/unused harmony star reexport *//* harmony import */ var _authInfoBox_vue_vue_type_style_index_0_id_b6c0d734_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authInfoBox.vue?vue&type=style&index=0&id=b6c0d734&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "M91S");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _authInfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _authInfoBox_vue_vue_type_template_id_b6c0d734_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _authInfoBox_vue_vue_type_template_id_b6c0d734_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b6c0d734",
  null
  
)

component.options.__file = "authInfoBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);