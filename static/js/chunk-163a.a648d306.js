(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-163a"],{

/***/ "2BP5":
/*!************************************************************************************************************************!*\
  !*** ./src/views/project/qualityManage/standardWork/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "XwKz");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "BJKi":
/*!********************************!*\
  !*** ./src/api/project/qbs.js ***!
  \********************************/
/*! exports provided: getqbsList, deleteqbs, saveqbs, getqbs, getqbsTreeData, getTenders, getAuthTenders, getWorkPoints, saveTemplate, getParents, updateToDown, updateToDownLevel, updateToUp, updateToUpLevel, saveBindEntity, saveQbsAndMbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getqbsList", function() { return getqbsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteqbs", function() { return deleteqbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveqbs", function() { return saveqbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getqbs", function() { return getqbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getqbsTreeData", function() { return getqbsTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTenders", function() { return getTenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthTenders", function() { return getAuthTenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkPoints", function() { return getWorkPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTemplate", function() { return saveTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParents", function() { return getParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDown", function() { return updateToDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDownLevel", function() { return updateToDownLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUp", function() { return updateToUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUpLevel", function() { return updateToUpLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBindEntity", function() { return saveBindEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveQbsAndMbs", function() { return saveQbsAndMbs; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getqbsList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/list',
    method: 'post',
    data: param
  });
}

function deleteqbs(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/delete',
    method: 'post',
    data: param
  });
}

function saveqbs(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/save',
    method: 'post',
    data: param
  });
}

function getqbs(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/get',
    method: 'post',
    data: param
  });
}

// 获取测点实时数据
function getqbsTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/treeData',
    method: 'post',
    data: param
  });
}

function getTenders(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/getTenders',
    method: 'post',
    data: param
  });
}

function getAuthTenders(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/projectAuth/projectUserTenders',
    method: 'post',
    data: param
  });
}

function getWorkPoints(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/getWorkPoints',
    method: 'post',
    data: param
  });
}

function saveTemplate(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/saveTemplate',
    method: 'post',
    data: param
  });
}

function getParents(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/getParents',
    method: 'post',
    data: param
  });
}

function updateToDown(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/updateToDown',
    method: 'post',
    data: param
  });
}
function updateToDownLevel(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/updateToDownLevel',
    method: 'post',
    data: param
  });
}

function updateToUp(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/updateToUp',
    method: 'post',
    data: param
  });
}

function updateToUpLevel(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/updateToUpLevel',
    method: 'post',
    data: param
  });
}

function saveBindEntity(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/saveBindEntity',
    method: 'post',
    data: param
  });
}

function saveQbsAndMbs(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbs/saveQbsAndMbs',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "SkyA":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qualityManage/standardWork/index.vue?vue&type=template&id=1e0d4c96& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container standardWorkDiv"},[_c('my-card',{attrs:{"title":"标准化作业(展示数据)","span-left":"-11px"}},[_c('div',{staticClass:"filter-container"},[_c('el-select',{staticClass:"filter-item",staticStyle:{"width":"150px"},attrs:{"clearable":"","placeholder":"标段"},on:{"change":_vm.search},model:{value:(_vm.listQuery.tendersId),callback:function ($$v) {_vm.$set(_vm.listQuery, "tendersId", $$v)},expression:"listQuery.tendersId"}},_vm._l((_vm.tendersList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1),_vm._v(" "),_c('el-select',{staticClass:"filter-item",staticStyle:{"width":"200px"},attrs:{"clearable":"","placeholder":"工点选择"},on:{"change":_vm.search},model:{value:(_vm.listQuery.workPointsId),callback:function ($$v) {_vm.$set(_vm.listQuery, "workPointsId", $$v)},expression:"listQuery.workPointsId"}},_vm._l((_vm.workPointsList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1),_vm._v(" "),_c('el-select',{staticClass:"filter-item",staticStyle:{"width":"200px"},attrs:{"clearable":"","placeholder":"状态"},on:{"change":_vm.search},model:{value:(_vm.listQuery.statusId),callback:function ($$v) {_vm.$set(_vm.listQuery, "statusId", $$v)},expression:"listQuery.statusId"}},_vm._l((_vm.statusList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item projectButton",attrs:{"icon":"el-icon-search"},on:{"click":_vm.search}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addStandardWork}},[_vm._v("添加\n      ")])],1),_vm._v(" "),_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.standardWorkList,"columns":_vm.columns,"list-loading":_vm.listLoading,"page-size":_vm.listQuery.pageSize,"current-page":_vm.listQuery.currPage},on:{"currentChange":_vm.currentChange}})],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "XwKz":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qualityManage/standardWork/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "YzzM":
/*!*****************************************************************************************!*\
  !*** ./src/views/project/qualityManage/standardWork/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "exdS");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "cI1u":
/*!***********************************************************************************************!*\
  !*** ./src/views/project/qualityManage/standardWork/index.vue?vue&type=template&id=1e0d4c96& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e0d4c96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1e0d4c96& */ "SkyA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e0d4c96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1e0d4c96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "exdS":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qualityManage/standardWork/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'StandardWork',
  components: {
    MyCard: _components_MyCard_index__WEBPACK_IMPORTED_MODULE_0__["default"], tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      listLoading: false,
      total: 1,
      tendersList: [],
      workPointsList: [],
      statusList: [],
      listQuery: {
        tendersId: '',
        workPointsId: '',
        pageSize: 10,
        currPage: 1,
        statusId: ''
      },
      standardWorkList: [],
      columns: [{
        text: '标段',
        value: 'tenders'
      }, {
        text: '工点',
        value: 'workPoints'
      }, {
        text: '标准化作业名称',
        value: 'name'
      }, {
        text: '工艺试听方案',
        value: 'plan',
        classFun: function classFun() {
          return 'tableLookLabel';
        },
        click: function click(val) {
          _this.clickItem(val);
        }
      }, {
        text: '首件工程实施',
        value: 'implement',
        formatter: function formatter() {
          return '<img style="width:30px" src="static/construct.png">';
        }
      }, {
        text: '状态',
        value: 'status'
      }, {
        text: '附件',
        value: 'attachments'
      }, {
        text: '操作',
        type: 'iconButton',
        width: 200,
        list: this.operButton
      }]
    };
  },
  mounted: function mounted() {
    this.getStandardWorkList();
    this.getTendersList();
    this.getWorkPoints();
    this.getStatusList();
  },
  created: function created() {},

  methods: {
    // 获取数据列表
    getStandardWorkList: function getStandardWorkList() {
      this.standardWorkList = [{
        tenders: '1标',
        workPoints: '梅富路4#工作井',
        workPointsId: 9,
        name: 'XXX标准作业1',
        plan: 'PDF',
        implement: '图片',
        status: '审核中',
        statusId: 1,
        attachment: '附件',
        tendersId: 11
      }, {
        tenders: '2标',
        workPoints: '路基',
        workPointsId: 24,
        name: 'XXX标准作业1',
        plan: 'PDF',
        implement: '图片',
        status: '实施中',
        statusId: 2,
        attachment: '附件',
        tendersId: 12
      }, {
        tenders: '3标',
        workPoints: '浦东机场站',
        workPointsId: 6,
        name: 'XXX标准作业1',
        plan: 'PDF',
        implement: '图片',
        status: '终稿上传中',
        statusId: 3,
        attachment: '附件',
        tendersId: 13
      }, {
        tenders: '3标',
        workPoints: '虹桥站',
        workPointsId: 10,
        name: 'XXX标准作业1',
        plan: 'PDF',
        implement: '图片',
        status: '已完成',
        statusId: 4,
        attachment: '附件',
        tendersId: 13
      }, {
        tenders: '4标',
        workPoints: '三林站',
        workPointsId: 3,
        name: 'XXX标准作业1',
        plan: 'PDF',
        implement: '图片',
        status: '工艺试验方案待修改',
        statusId: 5,
        attachment: '附件',
        tendersId: 14
      }];
    },

    // 获取标段列表
    getTendersList: function getTendersList() {
      var _this2 = this;

      Object(_api_project_landAcquire__WEBPACK_IMPORTED_MODULE_3__["getTendersList"])({}).then(function (res) {
        if (res.success) {
          _this2.tendersList = res.result;
        }
      });
    },

    // 获取状态列表
    getStatusList: function getStatusList() {
      this.statusList = [{ id: 1, name: '审核中' }, { id: 2, name: '实施中' }, { id: 3, name: '终稿上传中' }, { id: 4, name: '已完成' }, { id: 5, name: '工艺试验方案待修改' }, { id: 6, name: '不通过' }];
    },

    // 获取工点
    getWorkPoints: function getWorkPoints() {
      var _this3 = this;

      Object(_api_project_qbs_js__WEBPACK_IMPORTED_MODULE_2__["getWorkPoints"])({}).then(function (res) {
        if (res.success) {
          _this3.workPointsList = res.result;
        }
      });
    },

    // 搜索
    search: function search() {
      var _this4 = this;

      this.getStandardWorkList();
      var temp = [];
      var temp1 = [];
      var temp2 = [];
      // 判断标段
      if (this.listQuery.tendersId !== '') {
        this.standardWorkList.forEach(function (item, index) {
          if (item.tendersId === _this4.listQuery.tendersId) {
            temp.push(item);
          }
          if (index === _this4.standardWorkList.length - 1) {
            _this4.standardWorkList = temp;
          }
        });
      }
      // 判断工点
      if (this.listQuery.workPointsId !== '') {
        this.standardWorkList.forEach(function (item, index) {
          if (item.workPointsId === _this4.listQuery.workPointsId) {
            temp1.push(item);
          }
          if (index === _this4.standardWorkList.length - 1) {
            _this4.standardWorkList = temp1;
          }
        });
      }
      // 判断状态
      if (this.listQuery.statusId !== '') {
        this.standardWorkList.forEach(function (item, index) {
          if (item.statusId === _this4.listQuery.statusId) {
            temp2.push(item);
          }
          if (index === _this4.standardWorkList.length - 1) {
            _this4.standardWorkList = temp2;
          }
        });
      }
    },

    // 添加
    addStandardWork: function addStandardWork() {},

    // 查看PDF
    clickItem: function clickItem(val) {},

    // 操作图标
    operButton: function operButton() {
      return [{ class: 'iconaddress', value: '查看模型', click: this.goFullLine }, { class: 'iconyanjing', value: '查看详情', click: this.lookRecord }, { class: 'iconxiugai', value: '编辑', click: this.updateWork }, { class: 'iconshanchu1', value: '删除', click: this.deleteWork }];
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

/***/ "tFVF":
/*!****************************************************************!*\
  !*** ./src/views/project/qualityManage/standardWork/index.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1e0d4c96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1e0d4c96& */ "cI1u");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "YzzM");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "2BP5");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1e0d4c96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1e0d4c96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "yGO7":
/*!****************************************!*\
  !*** ./src/api/project/landAcquire.js ***!
  \****************************************/
/*! exports provided: landAcquireTotal, tendersTotal, saveLandAcquire, saveMBS, getTendersList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landAcquireTotal", function() { return landAcquireTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tendersTotal", function() { return tendersTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLandAcquire", function() { return saveLandAcquire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMBS", function() { return saveMBS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTendersList", function() { return getTendersList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


// 各工点完成情况统计
function landAcquireTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/landAcquire/landAcquireTotal',
    method: 'post',
    data: param
  });
}

// 各标段完成情况统计
function tendersTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/landAcquire/tendersTotal',
    method: 'post',
    data: param
  });
}

// 保存记录
function saveLandAcquire(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/landAcquire/save',
    method: 'post',
    data: param
  });
}

// 保存mbs
function saveMBS(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/landAcquire/saveMBS',
    method: 'post',
    data: param
  });
}

function getTendersList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/landAcquire/tendersList',
    method: 'post',
    data: param
  });
}

/***/ })

}]);