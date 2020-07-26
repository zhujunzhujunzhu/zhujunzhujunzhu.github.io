(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-8967"],{

/***/ "+Us3":
/*!************************************************************************************************!*\
  !*** ./src/views/project/qualityManage/thirdpartyDetection/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "6RS6");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "5Xfr":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qualityManage/thirdpartyDetection/index.vue?vue&type=template&id=5fc26d3d&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"filter-container"},[_c('el-select',{staticClass:"filter-item",staticStyle:{"width":"150px"},attrs:{"clearable":"","placeholder":"标段"},on:{"change":_vm.search},model:{value:(_vm.listQuery.tendersId),callback:function ($$v) {_vm.$set(_vm.listQuery, "tendersId", $$v)},expression:"listQuery.tendersId"}},_vm._l((_vm.tendersList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1),_vm._v(" "),_c('el-select',{staticClass:"filter-item",staticStyle:{"width":"200px"},attrs:{"clearable":"","placeholder":"工点选择"},on:{"change":_vm.search},model:{value:(_vm.listQuery.workPointsId),callback:function ($$v) {_vm.$set(_vm.listQuery, "workPointsId", $$v)},expression:"listQuery.workPointsId"}},_vm._l((_vm.workPointsList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1),_vm._v(" "),_c('el-select',{staticClass:"filter-item",staticStyle:{"width":"200px"},attrs:{"clearable":"","placeholder":"检测类型"},on:{"change":_vm.search},model:{value:(_vm.listQuery.typeId),callback:function ($$v) {_vm.$set(_vm.listQuery, "typeId", $$v)},expression:"listQuery.typeId"}},_vm._l((_vm.typeList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item projectButton",attrs:{"icon":"el-icon-search"},on:{"click":_vm.search}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addStandardWork}},[_vm._v("新增\n    ")])],1),_vm._v(" "),_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.list,"columns":_vm.columns,"list-loading":_vm.listLoading,"total":_vm.total,"page-size":_vm.listQuery.pageSize,"current-page":_vm.listQuery.currPage},on:{"currentChange":_vm.currentChange}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "6RS6":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qualityManage/thirdpartyDetection/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MyCard_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/MyCard/index */ "zY4l");
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _api_project_qbs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/project/qbs.js */ "BJKi");
/* harmony import */ var _api_project_landAcquire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/landAcquire */ "yGO7");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ThirdpartyDetection',
  components: {
    MyCard: _components_MyCard_index__WEBPACK_IMPORTED_MODULE_0__["default"], tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      listLoading: false,
      total: 1,
      tendersList: [],
      workPointsList: [],
      typeList: [],
      listQuery: {
        tendersId: '',
        workPointsId: '',
        pageSize: 10,
        currPage: 1,
        typeId: ''
      },
      list: [],
      columns: [{
        text: '第三方检测名称',
        value: 'name'
      }, {
        text: '检测单位',
        value: 'company'
      }, {
        text: '委托单位',
        value: 'entrustion'
      }, {
        text: '检测类型',
        value: 'type'
      }, {
        text: '取样日期',
        value: 'samlpingDate'
      }, {
        text: '检验日期',
        value: 'testDate'
      }, {
        text: '报告日期',
        value: 'reportDate'
      }, {
        text: '关联模型',
        value: 'model'
      }, {
        text: '检测结果',
        value: 'result'
      }, {
        text: '操作',
        type: 'iconButton',
        width: 200,
        list: this.operButton
      }]
    };
  },
  mounted: function mounted() {
    this.getList();
    this.getTendersList();
    this.getWorkPoints();
    this.getTypeList();
  },
  created: function created() {},

  methods: {
    // 获取数据列表
    getList: function getList() {
      this.list = [{
        name: 'XXX标准作业1',
        company: 'XXX检测公司',
        entrustion: '上海建工',
        type: '实体',
        samlpingDate: '',
        testDate: '',
        reportDate: '',
        model: '',
        result: '合格',
        workPointsId: 6,
        tendersId: 11,
        typeId: 1
      }, {
        name: 'XXX标准作业2',
        company: 'XXX检测公司',
        entrustion: '上海城建',
        type: '成品',
        samlpingDate: '',
        testDate: '',
        reportDate: '',
        model: '',
        result: '不合格',
        workPointsId: 20,
        tendersId: 12,
        typeId: 2
      }, {
        name: 'XXX标准作业3',
        company: 'XXX检测公司',
        entrustion: '上海城建',
        type: '成品',
        samlpingDate: '',
        testDate: '',
        reportDate: '',
        model: '',
        result: '不合格',
        workPointsId: 19,
        tendersId: 13,
        typeId: 2
      }, {
        name: 'XXX标准作业4',
        company: 'XXX检测公司',
        entrustion: '上海建工',
        type: '半成品',
        samlpingDate: '',
        testDate: '',
        reportDate: '',
        model: '',
        result: '合格',
        workPointsId: 6,
        tendersId: 14,
        typeId: 3
      }];
    },

    // 获取标段列表
    getTendersList: function getTendersList() {
      var _this = this;

      Object(_api_project_landAcquire__WEBPACK_IMPORTED_MODULE_3__["getTendersList"])({}).then(function (res) {
        if (res.success) {
          _this.tendersList = res.result;
        }
      });
    },

    // 获取工点
    getWorkPoints: function getWorkPoints() {
      var _this2 = this;

      Object(_api_project_qbs_js__WEBPACK_IMPORTED_MODULE_2__["getWorkPoints"])({}).then(function (res) {
        if (res.success) {
          _this2.workPointsList = res.result;
        }
      });
    },

    // 获取检测类型列表
    getTypeList: function getTypeList() {
      this.typeList = [{ id: 1, name: '实体' }, { id: 2, name: '成品' }, { id: 3, name: '半成品' }];
    },

    // 搜索
    search: function search() {
      var _this3 = this;

      this.getList();
      var temp = [];
      var temp1 = [];
      var temp2 = [];
      // 判断标段
      if (this.listQuery.tendersId !== '') {
        this.list.forEach(function (item, index) {
          if (item.tendersId === _this3.listQuery.tendersId) {
            temp.push(item);
          }
          if (index === _this3.list.length - 1) {
            _this3.list = temp;
          }
        });
      }
      // 判断工点
      if (this.listQuery.workPointsId !== '') {
        this.list.forEach(function (item, index) {
          if (item.workPointsId === _this3.listQuery.workPointsId) {
            temp1.push(item);
          }
          if (index === _this3.list.length - 1) {
            _this3.list = temp1;
          }
        });
      }
      // 判断检测类型
      if (this.listQuery.typeId !== '') {
        this.list.forEach(function (item, index) {
          if (item.typeId === _this3.listQuery.typeId) {
            temp2.push(item);
          }
          if (index === _this3.list.length - 1) {
            _this3.list = temp2;
          }
        });
      }
    },

    // 添加
    addStandardWork: function addStandardWork() {},

    // 操作图标
    operButton: function operButton() {
      return [{ class: 'iconaddress', value: '模型定位', click: this.goFullLine }, { class: 'iconyanjing', value: '查看详情', click: this.lookRecord }, { class: 'iconxiugai', value: '编辑', click: this.updateWork }, { class: 'iconshanchu1', value: '删除', click: this.deleteWork }];
    },

    // 查看模型
    goFullLine: function goFullLine(val) {},

    // 查看详情
    lookRecord: function lookRecord(val) {},

    // 编辑
    updateWork: function updateWork(val) {},

    // 删除
    deleteWork: function deleteWork(val) {},

    // 换页
    currentChange: function currentChange() {
      this.currentIndex = val.$index;
      this.listQuery.currPage = val;
      this.getStandardWorkList();
    }
  }
});

/***/ }),

/***/ "SSK2":
/*!******************************************************************************************************************!*\
  !*** ./src/views/project/qualityManage/thirdpartyDetection/index.vue?vue&type=template&id=5fc26d3d&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5fc26d3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5fc26d3d&scoped=true& */ "5Xfr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5fc26d3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5fc26d3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "W4m/":
/*!********************************************************************************************************************************!*\
  !*** ./src/views/project/qualityManage/thirdpartyDetection/index.vue?vue&type=style&index=0&id=5fc26d3d&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5fc26d3d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--7-0!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5fc26d3d&scoped=true&lang=css& */ "y8q1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5fc26d3d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5fc26d3d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5fc26d3d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5fc26d3d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5fc26d3d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "nJVP":
/*!***********************************************************************!*\
  !*** ./src/views/project/qualityManage/thirdpartyDetection/index.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5fc26d3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5fc26d3d&scoped=true& */ "SSK2");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "+Us3");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_5fc26d3d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=5fc26d3d&scoped=true&lang=css& */ "W4m/");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5fc26d3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5fc26d3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5fc26d3d",
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "y8q1":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--7-0!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qualityManage/thirdpartyDetection/index.vue?vue&type=style&index=0&id=5fc26d3d&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);