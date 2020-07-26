(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-283a"],{

/***/ "/OLC":
/*!******************************************!*\
  !*** ./src/views/customerForm/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2321c808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2321c808& */ "I8dF");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "o7BV");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "sd3l");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2321c808___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2321c808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5Vsq":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customerForm/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "I8dF":
/*!*************************************************************************!*\
  !*** ./src/views/customerForm/index.vue?vue&type=template&id=2321c808& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2321c808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2321c808& */ "tW94");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2321c808___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2321c808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "ljRY":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customerForm/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _api_formTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/formTemplate */ "kC2G");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _utils_process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/process */ "q7Rq");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      title: '自定义表单列表',
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
      columns: [{
        text: '名称',
        value: 'name'
      }, {
        text: '创建用户',
        value: 'createUser'
      }, {
        text: '创建时间',
        value: 'createDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_5__["parseTime"]
      }, {
        text: '关联流程',
        value: 'relateProcess'
      },
      // {
      //   text: '是否启用',
      //   value: 'description',
      //   type: 'switch'
      // },
      {
        text: '操作',
        type: 'iconButton',
        width: 150,
        list: this.operButton
      }],
      listQuery: {
        pageSize: 15,
        currPage: 1,
        name: '',
        code: ''
      },
      total: 0,
      list: [{}]
    };
  },
  mounted: function mounted() {
    this.getList();
  },

  methods: {
    getList: function getList() {
      var _this = this;

      Object(_api_formTemplate__WEBPACK_IMPORTED_MODULE_4__["list"])(this.listQuery).then(function (res) {
        if (res.success) {
          _this.total = res.result.total;
          _this.list = res.result.list.map(function (item) {
            var relateProcess = void 0;
            if (!item.processTemplateId) {
              relateProcess = '\n                <span class="color-bbb cursor">\u6682\u65E0\u5173\u8054\u6D41\u7A0B</span>\n              ';
            } else {
              relateProcess = item.processTemplateName;
            }
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { relateProcess: relateProcess });
          });
        }
      });
    },
    search: function search() {
      this.getList();
    },

    // 表格操作按鈕
    operButton: function operButton(val) {
      if (val.processTemplateId) {
        return [{ class: 'iconxiugai', value: '编辑', click: this.editForm }, {
          class: 'iconzibiaodan',
          value: '配置子表单',
          click: this.sonEditForm
        }, { class: 'iconshanchu1', value: '删除', click: this.deleteFun }];
      } else {
        return [{ class: 'iconxiugai', value: '编辑', click: this.editForm }, { class: 'iconshanchu1', value: '删除', click: this.deleteFun }];
      }
    },
    currentChange: function currentChange(val) {
      this.listQuery.currPage = val;
      this.getList();
    },
    addForm: function addForm() {
      this.$storage.setStorage('custormerFormInfo', { isNew: true });
      this.$router.push('customerFormEditPage');
    },
    editForm: function editForm(val) {
      this.$storage.setStorage('custormerFormInfo', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        isNew: false
      }, val.row));
      this.$router.push('customerFormEditPage');
    },
    sonEditForm: function sonEditForm(val) {
      this.$storage.setStorage('custormerFormInfo', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        isNew: false
      }, val.row));
      this.$router.push('customerFormSonEditPage');
    },
    deleteFun: function deleteFun(val) {
      var _this2 = this;

      var successCB = function successCB() {
        _this2.getList();
      };
      Object(_utils_process__WEBPACK_IMPORTED_MODULE_6__["deleteFun"])({ api: _api_formTemplate__WEBPACK_IMPORTED_MODULE_4__["deleteApi"], params: { id: val.row.id }, successCB: successCB });
    }
  }
});

/***/ }),

/***/ "o7BV":
/*!*******************************************************************!*\
  !*** ./src/views/customerForm/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "ljRY");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "sd3l":
/*!**************************************************************************************************!*\
  !*** ./src/views/customerForm/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "5Vsq");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "tW94":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customerForm/index.vue?vue&type=template&id=2321c808& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container customerFormPage"},[_c('my-card',{attrs:{"title":_vm.title}},[_c('div',{staticClass:"filter-container"},[_c('el-input',{staticClass:"filter-item",staticStyle:{"width":"200px"},attrs:{"placeholder":"表单名称"},model:{value:(_vm.listQuery.name),callback:function ($$v) {_vm.$set(_vm.listQuery, "name", $$v)},expression:"listQuery.name"}}),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":_vm.search}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addForm}},[_vm._v("添加")])],1),_vm._v(" "),_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.list,"columns":_vm.columns,"list-loading":_vm.listLoading,"total":_vm.total,"page-size":_vm.listQuery.pageSize},on:{"currentChange":_vm.currentChange}})],1)],1)}
var staticRenderFns = []



/***/ })

}]);