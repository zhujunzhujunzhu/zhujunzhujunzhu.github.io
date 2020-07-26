(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-8828"],{

/***/ "7Xma":
/*!************************************************************************************************************!*\
  !*** ./src/views/project/qualityManage/inspectReport/index.vue?vue&type=template&id=5625e8bf&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5625e8bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5625e8bf&scoped=true& */ "dHMs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5625e8bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5625e8bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "J98d":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--7-0!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qualityManage/inspectReport/index.vue?vue&type=style&index=0&id=5625e8bf&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "NC4x":
/*!***************************************************************!*\
  !*** ./src/api/project/qualityInspect/qualityInspectItems.js ***!
  \***************************************************************/
/*! exports provided: saveQualityInspectItems, getQualityInspectItems, getQualityInspectItemsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveQualityInspectItems", function() { return saveQualityInspectItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQualityInspectItems", function() { return getQualityInspectItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQualityInspectItemsList", function() { return getQualityInspectItemsList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function saveQualityInspectItems(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qualityInspectItems/save',
    method: 'post',
    data: param
  });
}

function getQualityInspectItems(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qualityInspectItems/get',
    method: 'post',
    data: param
  });
}

function getQualityInspectItemsList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qualityInspectItems/list',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "YXCJ":
/*!******************************************************************************************!*\
  !*** ./src/views/project/qualityManage/inspectReport/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "irl9");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "dHMs":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qualityManage/inspectReport/index.vue?vue&type=template&id=5625e8bf&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container inspectListDiv"},[_c('my-card',{attrs:{"title":"本次巡检基本信息"}},[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{"icon":"el-icon-circle-plus-outline"},on:{"click":_vm.backTo}},[_vm._v("返回\n    ")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.save}},[_vm._v("保存\n    ")]),_vm._v(" "),_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.form,"columns":_vm.columns,"list-loading":_vm.loading,"total":_vm.total,"span-method":_vm.spanMethod,"page-size":_vm.listQuery.pageSize},on:{"currentChange":_vm.currentChange}},[_c('template',{slot:"myColumn"})],2)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "eHym":
/*!*****************************************************************!*\
  !*** ./src/views/project/qualityManage/inspectReport/index.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5625e8bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5625e8bf&scoped=true& */ "7Xma");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "YXCJ");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_5625e8bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=5625e8bf&scoped=true&lang=css& */ "p81E");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5625e8bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5625e8bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5625e8bf",
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "irl9":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qualityManage/inspectReport/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MyCard_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/MyCard/index */ "zY4l");
/* harmony import */ var _components_table_tableList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/table/tableList */ "dARg");
/* harmony import */ var _api_project_qualityInspect_qualityInspectItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/project/qualityInspect/qualityInspectItems */ "NC4x");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'InspectLReport',
  components: { TableList: _components_table_tableList__WEBPACK_IMPORTED_MODULE_1__["default"], MyCard: _components_MyCard_index__WEBPACK_IMPORTED_MODULE_0__["default"] },
  data: function data() {
    return {
      list: [],
      form: [],
      inspectTypeNames: [],
      columns: [{
        text: '巡检项目',
        value: 'inspectTypeName'
      }, {
        text: '巡查明细项',
        // renderHeader: this.render
        value: 'inspectDetail'
      }, {
        text: '巡查检查情况',
        model: 'inspectSituation',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
        activeValue: true,
        inactiveValue: false
      }, {
        text: '整改情况',
        render: this.renderFun
      }],
      loading: false,
      listQuery: {
        pageSize: 15,
        currPage: 1
      },
      total: 0,
      radio: '1',
      typeValue: ''
    };
  },
  created: function created() {
    var _this = this;

    if (this.$storage.getStorage('qualityInspectItems')) {
      var qualityInspectItems = JSON.parse(this.$storage.getStorage('qualityInspectItems'));
      // this.inspectTypeNames = []
      // const names = JSON.parse(this.$storage.getStorage('inspectTypeNames'))
      // names.forEach(item => {
      //   this.inspectTypeNames.push({ name: item, count: 0 })
      // })
      qualityInspectItems.forEach(function (item) {
        // const index = this.inspectTypeNames.findIndex(item1 => item.inspectTypeName === item1.name)
        // if (index > -1) {
        //   this.inspectTypeNames[index].count++
        // }
        _this.form.push(item);
      });
    }
  },

  methods: {
    spanMethod: function spanMethod(_ref) {
      var row = _ref.row,
          column = _ref.column,
          rowIndex = _ref.rowIndex,
          columnIndex = _ref.columnIndex;
    },
    currentChange: function currentChange(val) {
      this.listQuery.currPage = val;
      this.getList();
    },
    render: function render(h) {
      var _this2 = this;

      var filters = [{
        text: '巡检项目',
        value: 'inspectTypeName'
      }, {
        text: '巡查明细项',
        value: 'inspectDetail'
      }];
      return h('el-select', {
        on: {
          input: function input(value) {
            // 随着下拉框的不同，文字框里的内容改变
            _this2.typeValue = value;
            _this2.getList(); // 文字框里的内容 change事件
          }
        },
        props: {
          value: this.typeValue
        }
      }, [filters.map(function (item) {
        return h('el-option', {
          props: {
            value: item.value,
            label: item.text
          }
        });
      })]);
    },
    renderFun1: function renderFun1(h, val) {
      return h('el-tag', {
        props: {
          size: 'mini'
        }
      }, val.row.inspectDetail);
    },
    renderFun: function renderFun(h, val) {
      var _this3 = this;

      return h('el-input', {
        attrs: {
          value: val.row.remark
        },
        on: {
          input: function input(e) {
            _this3.$set(val.row, 'remark', e);
          }
        }
      });
    },
    backTo: function backTo() {
      this.$router.push('/qualityManage/qualityInspect');
      // this.$router.go(-1)
    },
    save: function save() {
      var _this4 = this;

      this.form.forEach(function (item) {
        Object(_api_project_qualityInspect_qualityInspectItems__WEBPACK_IMPORTED_MODULE_2__["saveQualityInspectItems"])(item).then(function (res) {
          if (res.success) {
            _this4.$message.success('保存成功');
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "p81E":
/*!**************************************************************************************************************************!*\
  !*** ./src/views/project/qualityManage/inspectReport/index.vue?vue&type=style&index=0&id=5625e8bf&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5625e8bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--7-0!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5625e8bf&scoped=true&lang=css& */ "J98d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5625e8bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5625e8bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5625e8bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5625e8bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5625e8bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);