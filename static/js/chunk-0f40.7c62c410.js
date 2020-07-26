(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-0f40"],{

/***/ "15Ai":
/*!**************************************!*\
  !*** ./src/api/project/workPoint.js ***!
  \**************************************/
/*! exports provided: getWorkPointList, getWorkPointAreaList, deleteWorkPoint, saveWorkPoint, getWorkPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkPointList", function() { return getWorkPointList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkPointAreaList", function() { return getWorkPointAreaList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteWorkPoint", function() { return deleteWorkPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWorkPoint", function() { return saveWorkPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkPoint", function() { return getWorkPoint; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getWorkPointList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/workPoint/list',
    method: 'post',
    data: param
  });
}

function getWorkPointAreaList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/workPointArea/list',
    method: 'post',
    data: param
  });
}

function deleteWorkPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/workPoint/delete',
    method: 'post',
    data: param
  });
}

function saveWorkPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/workPoint/save',
    method: 'post',
    data: param
  });
}

function getWorkPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/workPoint/get',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "1O3d":
/*!*************************************!*\
  !*** ./src/api/project/bimViews.js ***!
  \*************************************/
/*! exports provided: saveBimView, deleteView, saveBimViewPoint, deleteViewPoint, getViewPoint, getBimViewList, getCheckList, createCheckForm, getAttachList, getFormDetail, saveForm, saveAssetBind, getView, queryBimViews, queryBimViewpoints, workPointViews, getBimPointList, saveBimPoint, bizBatchList, getBimPoint, saveBimPath, deleteBimPath, queryBimPaths, riskPointList, deletePoint, statistics, getBimModuleList, getBimModuleView, saveBimModuleView, deleteBimModuleView, batchBimViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBimView", function() { return saveBimView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteView", function() { return deleteView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBimViewPoint", function() { return saveBimViewPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteViewPoint", function() { return deleteViewPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewPoint", function() { return getViewPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBimViewList", function() { return getBimViewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckList", function() { return getCheckList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckForm", function() { return createCheckForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttachList", function() { return getAttachList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormDetail", function() { return getFormDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveForm", function() { return saveForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAssetBind", function() { return saveAssetBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getView", function() { return getView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryBimViews", function() { return queryBimViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryBimViewpoints", function() { return queryBimViewpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workPointViews", function() { return workPointViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBimPointList", function() { return getBimPointList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBimPoint", function() { return saveBimPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bizBatchList", function() { return bizBatchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBimPoint", function() { return getBimPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBimPath", function() { return saveBimPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBimPath", function() { return deleteBimPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryBimPaths", function() { return queryBimPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riskPointList", function() { return riskPointList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePoint", function() { return deletePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statistics", function() { return statistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBimModuleList", function() { return getBimModuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBimModuleView", function() { return getBimModuleView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBimModuleView", function() { return saveBimModuleView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBimModuleView", function() { return deleteBimModuleView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchBimViews", function() { return batchBimViews; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


// 保存视图视点
function saveBimView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/save',
    method: 'post',
    data: param
  });
}

// 删除视图
function deleteView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/delete',
    method: 'post',
    data: param
  });
}

// 保存视图视口
function saveBimViewPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimViewpoint/save',
    method: 'post',
    data: param
  });
}

// 删除视口
function deleteViewPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimViewpoint/delete',
    method: 'post',
    data: param
  });
}

// 获取视口
function getViewPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimViewpoint/get',
    method: 'post',
    data: param
  });
}

// 视图列表
function getBimViewList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/list',
    method: 'post',
    data: param
  });
}

// 成果审查列表
function getCheckList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsExm/formList',
    method: 'post',
    data: param
  });
}

// 创建审查单
function createCheckForm(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsExm/createForm',
    method: 'post',
    data: param
  });
}

// 选择模型列表
function getAttachList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsExm/attachList',
    method: 'post',
    data: param
  });
}

// 获取审查表详情
function getFormDetail(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsExm/getForm',
    method: 'post',
    data: param
  });
}

// 创建问题
function saveForm(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsExm/saveForm',
    method: 'post',
    data: param
  });
}

// 单个资源关联至多个实体,如一个视图（BimView）同时关联至项目和工点上
function saveAssetBind(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/asset/saveAssetBind',
    method: 'post',
    data: param
  });
}

// 获取单个视图
function getView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/get',
    method: 'post',
    data: param
  });
}

// 获取关联视图列表，**这里的remark做linkType用
function queryBimViews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/queryBimViews',
    method: 'post',
    data: param
  });
}

// 获取关联视点列表，**这里的remark做linkType用
function queryBimViewpoints(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimViewpoint/queryBimViewpoints',
    method: 'post',
    data: param
  });
}

// 查询项目所有工点的默认视图清单
function workPointViews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bim/workPointViews',
    method: 'post',
    data: param
  });
}

// 保存标注点
function getBimPointList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPoint/list',
    method: 'post',
    data: param
  });
}

// 保存标注点
function saveBimPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPoint/save',
    method: 'post',
    data: param
  });
}

// 根据单个业务类型及业务id列表批量获取标签
function bizBatchList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPoint/bizBatchList',
    method: 'post',
    data: param
  });
}

// 获取标注点
function getBimPoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPoint/get',
    method: 'post',
    data: param
  });
}

// 保存漫游
function saveBimPath(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPath/save',
    method: 'post',
    data: param
  });
}

function deleteBimPath(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPath/delete',
    method: 'post',
    data: param
  });
}

function queryBimPaths(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPath/queryBimPaths',
    method: 'post',
    data: param
  });
}

// 风险源
function riskPointList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPoint/list',
    method: 'post',
    data: param
  });
}

// 删除标注
function deletePoint(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimPoint/delete',
    method: 'post',
    data: param
  });
}

// 删除标注
function statistics(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/riskPoint/statistics',
    method: 'post',
    data: param
  });
}

// 分页查询模型业务模块列表
function getBimModuleList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimModule/list',
    method: 'post',
    data: param
  });
}

// 根据code获取视图
function getBimModuleView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimModule/getView',
    method: 'post',
    data: param
  });
}

// 保存业务模块视图
function saveBimModuleView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimModule/saveView',
    method: 'post',
    data: param
  });
}

// 删除业务模块视图
function deleteBimModuleView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimModule/delete',
    method: 'post',
    data: param
  });
}

// 根据sourceid数组获取视图数组
function batchBimViews(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/bimView/batchBimViews',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "5dgt":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/system/workPoints/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @riophae/vue-treeselect */ "cCY5");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "VCwm");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _api_project_workPoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/project/workPoint */ "15Ai");
/* harmony import */ var _api_project_project__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/project/project */ "T+6t");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/SearchBar */ "3nF5");
/* harmony import */ var _api_project_workPointArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/api/project/workPointArea */ "LoPM");
/* harmony import */ var _api_project_bimViews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/api/project/bimViews */ "1O3d");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'WorkPoint',
  components: {
    tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_6__["default"],
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_3___default.a,
    searchBar: _components_SearchBar__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      projectList: [],
      dialogFormVisible: false, // 弹出框显示判断
      normalizer: function normalizer(node) {
        return {
          id: node.id,
          label: node.name,
          children: node.children
        };
      },

      dialogStatus: 'create',
      textMap: {
        update: '编辑',
        create: '新建'
      },
      rules: {
        name: [{ required: true, message: '请填写名称' }],
        code: [{ required: true, message: '请填写编码' }],
        type: [{ required: true, message: '请填写工点类型', trigger: 'change' }],
        projectId: [{ required: true, message: '请填写项目ID', trigger: 'change' }],
        planStartDate: [{ required: true, message: '请填写计划开始时间' }],
        planEndDate: [{ required: true, message: '请填写计划结束时间' }],
        startDate: [{ required: true, message: '请填写开工时间' }],
        endDate: [{ required: true, message: '请填写竣工时间' }],
        status: [{ required: true, message: '请填写状态', trigger: 'change' }],
        startMileage: [{ required: false, message: '请填写起始里程' }],
        endMileage: [{ required: false, message: '请填写结束里程' }],
        sortNo: [{ required: false, message: '请填写排序值' }]
      },
      workPointForm: {
        id: '',
        name: '',
        code: '',
        type: '',
        projectId: JSON.parse(this.$storage.getStorage('project')).id,
        projectIds: null,
        planStartDate: '',
        planEndDate: '',
        startDate: '',
        endDate: '',
        status: '',
        startMileage: '',
        endMileage: '',
        sortNo: '',
        planDate: null,
        startAndEndDate: null,
        bimViewId: null
      },
      columns: [{
        text: '名称',
        value: 'name'
      }, {
        text: '编码',
        value: 'code'
      }, {
        text: '工点类型',
        value: 'type',
        filter: _utils__WEBPACK_IMPORTED_MODULE_1__["getNameByCode"],
        filterParams: ['work_point_type']
      }, {
        text: '计划开始时间',
        value: 'planStartDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_1__["parseTime"],
        filterParams: ['{y}/{m}/{d}']
      }, {
        text: '计划结束时间',
        value: 'planEndDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_1__["parseTime"],
        filterParams: ['{y}/{m}/{d}']
      }, {
        text: '开工时间',
        value: 'startDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_1__["parseTime"],
        filterParams: ['{y}/{m}/{d}']
      }, {
        text: '竣工时间',
        value: 'endDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_1__["parseTime"],
        filterParams: ['{y}/{m}/{d}']
      }, {
        text: '状态',
        value: 'status',
        filter: _utils__WEBPACK_IMPORTED_MODULE_1__["getNameByCode"],
        filterParams: ['project_status']
      },
      // {
      //   text: '开始里程',
      //   value: 'startMileage'
      // },
      // {
      //   text: '结束里程',
      //   value: 'endMileage'
      // },
      // {
      //   text: '排序值',
      //   value: 'sortNo'
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
        projectId: JSON.parse(this.$storage.getStorage('project')).id,
        name: '',
        code: ''
      },
      forms: [{ type: 'input', prop: 'name', placeholder: '名称' }, { type: 'input', prop: 'code', placeholder: '编码' }, { type: 'searchBtn', searchFun: this.search }],
      total: 0,
      list: [],
      workPointAreaVisible: false,
      workPointAreaList: [],
      workPointAreaColumns: [{
        text: '名称',
        value: 'name'
      }, {
        text: '编码',
        value: 'code'
      }, {
        text: '操作',
        type: 'iconButton',
        width: 150,
        list: this.workPointAreaOperButton
      }],
      workPointAreaListQuery: {
        pageSize: 15,
        currPage: 1,
        name: '',
        code: ''
      },
      workPoint: {},
      workPointAreaLoading: false,
      workPointAreaTotal: 0,
      workPointAreaForm: {
        id: '',
        name: '',
        code: '',
        workPointId: ''
      },
      workPointAreadialogFormVisible: false, // 弹出框显示判断
      workPointAreaDialogStatus: 'create',
      workPointAreaTextMap: {
        update: '编辑',
        create: '新建'
      },
      viewList: []
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['dictMap', 'loading'])),
  mounted: function mounted() {
    this.getList();
    this.getProjectList();
  },

  methods: {
    // 获取项目表树结构列表
    getProjectList: function getProjectList() {
      var _this = this;

      Object(_api_project_project__WEBPACK_IMPORTED_MODULE_9__["singleTreeData"])({
        projectId: JSON.parse(this.$storage.getStorage('project')).id
      }).then(function (response) {
        if (response.success) {
          response.result.forEach(function (item) {
            if (item.projectType === 'zxm') {
              item.isDisabled = true;
            }
          });
          _this.projectList = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["treeListUtil"])(response.result);
        }
      });
    },

    // 获取所有项目工点表
    getList: function getList() {
      var _this2 = this;

      this.listLoading = true;
      Object(_api_project_workPoint__WEBPACK_IMPORTED_MODULE_8__["getWorkPointList"])(this.listQuery).then(function (response) {
        if (response.success) {
          _this2.list = response.result.list;
          _this2.total = response.result.total;
        }
        _this2.listLoading = false;
      });
    },
    search: function search() {
      this.getList();
    },

    // 表格操作按鈕
    operButton: function operButton() {
      return [{
        class: 'iconRectangleCopy',
        value: '工点区域',
        click: this.workPointArea,
        privilege: 'P_gdgl_gdqy'
      }, {
        class: 'iconxiugai',
        value: '编辑',
        click: this.updateWorkPoint,
        privilege: 'P_gdgl_gdbc'
      }, {
        class: 'iconshanchu1',
        value: '删除',
        click: this.deleteWorkPoint,
        privilege: 'P_gdgl_gdsc'
      }];
    },
    handleSizeChange: function handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.listQuery.currPage = 1;
      this.getList();
    },
    currentChange: function currentChange(val) {
      this.listQuery.currPage = val;
      this.getList();
    },

    // 更新项目工点表
    updateWorkPoint: function updateWorkPoint(val) {
      var _this3 = this;

      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_12__["queryBimViews"])({ sourceId: val.row.id, sourceType: 'WorkPoint' }).then(function (res) {
        if (res.success) {
          _this3.viewList = res.result;
          Object(_api_project_workPoint__WEBPACK_IMPORTED_MODULE_8__["getWorkPoint"])({ id: val.row.id }).then(function (res) {
            if (res.success) {
              _this3.dialogStatus = 'update';
              if (res.result.projectList) {
                var arr = [];
                res.result.projectList.forEach(function (item) {
                  arr.push(item.id);
                });
                res.result.projectIds = arr;
              }
              _this3.workPointForm = res.result;
              _this3.workPointForm.planDate = _this3.workPointForm.planStartDate ? [_this3.workPointForm.planStartDate, _this3.workPointForm.planEndDate] : null;
              _this3.workPointForm.startAndEndDate = _this3.workPointForm.startDate ? [_this3.workPointForm.startDate, _this3.workPointForm.endDate] : null;
              _this3.dialogFormVisible = true;
            }
          });
        }
      });
    },

    // 删除项目工点表
    deleteWorkPoint: function deleteWorkPoint(val) {
      var _this4 = this;

      this.$confirm('是否确定删除该记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        Object(_api_project_workPoint__WEBPACK_IMPORTED_MODULE_8__["deleteWorkPoint"])({ id: val.row.id }).then(function (response) {
          if (response.success) {
            _this4.getList();
            _this4.$message.success('删除成功');
          } else {
            _this4.$message.error(response.message);
          }
        });
      });
    },
    reset: function reset() {
      // 清空
      this.workPointForm = {
        id: '',
        startMileage: '',
        endMileage: '',
        sortNo: '',
        name: '',
        code: '',
        type: '',
        projectId: JSON.parse(this.$storage.getStorage('project')).id,
        planStartDate: '',
        planEndDate: '',
        startDate: '',
        endDate: '',
        planDate: null,
        startAndEndDate: null,
        status: ''
      };
    },

    // 新增项目工点表
    addWorkPoint: function addWorkPoint() {
      this.dialogStatus = 'create';
      this.reset();
      this.dialogFormVisible = true;
    },

    // 保存项目工点表
    saveWorkPoint: function saveWorkPoint() {
      var _this5 = this;

      this.$refs['workPointForm'].validate(function (valid) {
        if (valid) {
          _this5.workPointForm.planStartDate = _this5.workPointForm.planDate ? _this5.workPointForm.planDate[0] : '';
          _this5.workPointForm.planEndDate = _this5.workPointForm.planDate ? _this5.workPointForm.planDate[1] : '';
          _this5.workPointForm.startDate = _this5.workPointForm.startAndEndDate ? _this5.workPointForm.startAndEndDate[0] : '';
          _this5.workPointForm.endDate = _this5.workPointForm.startAndEndDate ? _this5.workPointForm.startAndEndDate[1] : '';
          _this5.loading = true;
          Object(_api_project_workPoint__WEBPACK_IMPORTED_MODULE_8__["saveWorkPoint"])(_this5.workPointForm).then(function (response) {
            if (response.success) {
              _this5.$message.success('保存成功');
              // 操作数结构
              _this5.dialogFormVisible = false;
              _this5.reset();
              _this5.getList();
            } else {
              _this5.$message.error(response.message);
            }
            _this5.loading = false;
          });
        }
      });
    },
    workPointArea: function workPointArea(val) {
      // this.$storage.setStorage('workPointId', val.row.id)
      // this.$router.push({ path: '/projectSystem/workPointArea' })
      this.getWorkPointAreaList(val);
      this.workPointAreaVisible = true;
    },

    // 获取所有项目工点区域表
    getWorkPointAreaList: function getWorkPointAreaList(val) {
      var _this6 = this;

      this.workPointAreaLoading = true;
      this.workPointAreaList = [];
      this.workPointAreaTotal = 0;
      this.workPoint = val;
      Object(_api_project_workPointArea__WEBPACK_IMPORTED_MODULE_11__["getWorkPointAreaList"])({ workPointId: val.row.id }).then(function (response) {
        if (response.success) {
          _this6.workPointAreaList = response.result.list;
          _this6.workPointAreaTotal = response.result.total;
        }
        _this6.workPointAreaLoading = false;
      });
    },
    workPointAreaOperButton: function workPointAreaOperButton() {
      return [{
        class: 'iconxiugai',
        value: '编辑',
        click: this.updateWorkPointArea,
        privilege: 'P_gdgl_gdqybc'
      }, {
        class: 'iconshanchu1',
        value: '删除',
        click: this.deleteWorkPointArea,
        privilege: 'P_gdgl_gdqysc'
      }];
    },
    workPointAreaCurrentChange: function workPointAreaCurrentChange() {},
    workPointAreaReset: function workPointAreaReset() {
      // 清空
      this.workPointAreaForm = {
        id: '',
        name: '',
        code: ''
      };
    },

    // 新增项目工点区域
    addWorkPointArea: function addWorkPointArea() {
      this.workPointAreaDialogStatus = 'create';
      this.workPointAreaReset();
      this.workPointAreadialogFormVisible = true;
    },
    updateWorkPointArea: function updateWorkPointArea(val) {
      var _this7 = this;

      Object(_api_project_workPointArea__WEBPACK_IMPORTED_MODULE_11__["getWorkPointArea"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this7.workPointAreaDialogStatus = 'update';
          _this7.workPointAreaForm = res.result;
          _this7.workPointAreadialogFormVisible = true;
        }
      });
    },
    deleteWorkPointArea: function deleteWorkPointArea(val) {
      var _this8 = this;

      this.$confirm('是否确定删除该记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        Object(_api_project_workPointArea__WEBPACK_IMPORTED_MODULE_11__["deleteWorkPointArea"])({ id: val.row.id }).then(function (response) {
          if (response.success) {
            // this.getList()
            _this8.$message.success('删除成功');
          } else {
            _this8.$message.error(response.message);
          }
        });
      });
    },
    saveWorkPointArea: function saveWorkPointArea() {
      var _this9 = this;

      this.$refs['workPointAreaForm'].validate(function (valid) {
        if (valid) {
          _this9.workPointAreaForm.workPointId = _this9.workPoint.row.id;
          _this9.workPointAreaLoading = true;
          Object(_api_project_workPointArea__WEBPACK_IMPORTED_MODULE_11__["saveWorkPointArea"])(_this9.workPointAreaForm).then(function (response) {
            if (response.success) {
              _this9.$message.success('保存成功');
              // 操作数结构
              _this9.workPointAreadialogFormVisible = false;
              _this9.workPointAreaReset();
              _this9.getWorkPointAreaList(_this9.workPoint);
            } else {
              _this9.$message.error(response.message);
            }
            _this9.workPointAreaLoading = false;
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "JvE5":
/*!*******************************************************!*\
  !*** ./src/views/project/system/workPoints/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_03ac9270_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=03ac9270&scoped=true& */ "VTOE");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "NEOF");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_03ac9270_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=03ac9270&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "QqMx");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_03ac9270_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_03ac9270_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03ac9270",
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "LoPM":
/*!******************************************!*\
  !*** ./src/api/project/workPointArea.js ***!
  \******************************************/
/*! exports provided: getWorkPointAreaList, deleteWorkPointArea, saveWorkPointArea, getWorkPointArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkPointAreaList", function() { return getWorkPointAreaList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteWorkPointArea", function() { return deleteWorkPointArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWorkPointArea", function() { return saveWorkPointArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkPointArea", function() { return getWorkPointArea; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getWorkPointAreaList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/workPointArea/list',
    method: 'post',
    data: param
  });
}

function deleteWorkPointArea(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/workPointArea/delete',
    method: 'post',
    data: param
  });
}

function saveWorkPointArea(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/workPointArea/save',
    method: 'post',
    data: param
  });
}

function getWorkPointArea(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/workPointArea/get',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "NEOF":
/*!********************************************************************************!*\
  !*** ./src/views/project/system/workPoints/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "5dgt");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "QqMx":
/*!***************************************************************************************************************************************!*\
  !*** ./src/views/project/system/workPoints/index.vue?vue&type=style&index=0&id=03ac9270&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03ac9270_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=03ac9270&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "TIDT");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03ac9270_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03ac9270_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03ac9270_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03ac9270_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03ac9270_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "TIDT":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/system/workPoints/index.vue?vue&type=style&index=0&id=03ac9270&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "VTOE":
/*!**************************************************************************************************!*\
  !*** ./src/views/project/system/workPoints/index.vue?vue&type=template&id=03ac9270&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_03ac9270_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=03ac9270&scoped=true& */ "xbCx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_03ac9270_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_03ac9270_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "xbCx":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/system/workPoints/index.vue?vue&type=template&id=03ac9270&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container workPointsDiv"},[_c('my-card',{attrs:{"title":"项目工点表管理"}},[_c('div',{staticClass:"filter-container"},[_c('search-bar',{attrs:{"forms":_vm.forms,"list-query":_vm.listQuery}},[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"},{name:"button-privilege",rawName:"v-button-privilege",value:('P_gdgl_gdbc'),expression:"'P_gdgl_gdbc'"}],staticClass:"filter-item addButton",attrs:{"slot":"right","type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addWorkPoint},slot:"right"},[_vm._v("添加")])],1)],1),_vm._v(" "),_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.list,"columns":_vm.columns,"list-loading":_vm.loading,"total":_vm.total,"page-size":_vm.listQuery.pageSize,"show-size":true},on:{"handleSizeChange":_vm.handleSizeChange,"currentChange":_vm.currentChange}})],1),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":_vm.textMap[_vm.dialogStatus],"width":"70%","close-on-click-modal":false,"visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"workPointForm",attrs:{"rules":_vm.rules,"model":_vm.workPointForm,"label-position":"center","size":"small","label-width":"130px"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入名称"},model:{value:(_vm.workPointForm.name),callback:function ($$v) {_vm.$set(_vm.workPointForm, "name", $$v)},expression:"workPointForm.name"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"编码","prop":"code"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入编码"},model:{value:(_vm.workPointForm.code),callback:function ($$v) {_vm.$set(_vm.workPointForm, "code", $$v)},expression:"workPointForm.code"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"工点类型","prop":"type"}},[_c('el-select',{attrs:{"placeholder":"请选择工点类型"},model:{value:(_vm.workPointForm.type),callback:function ($$v) {_vm.$set(_vm.workPointForm, "type", $$v)},expression:"workPointForm.type"}},_vm._l((_vm.dictMap['work_point_type']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"状态","prop":"status"}},[_c('el-select',{attrs:{"placeholder":"请选择状态"},model:{value:(_vm.workPointForm.status),callback:function ($$v) {_vm.$set(_vm.workPointForm, "status", $$v)},expression:"workPointForm.status"}},_vm._l((_vm.dictMap['project_status']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1)],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"计划开始结束时间","prop":"planDate"}},[_c('el-date-picker',{attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间","placeholder":"选择时间范围"},model:{value:(_vm.workPointForm.planDate),callback:function ($$v) {_vm.$set(_vm.workPointForm, "planDate", $$v)},expression:"workPointForm.planDate"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"开工竣工时间","prop":"startAndEndDate"}},[_c('el-date-picker',{attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间","placeholder":"选择时间范围"},model:{value:(_vm.workPointForm.startAndEndDate),callback:function ($$v) {_vm.$set(_vm.workPointForm, "startAndEndDate", $$v)},expression:"workPointForm.startAndEndDate"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"标段","prop":"projectIds"}},[_c('treeselect',{attrs:{"flat":true,"options":_vm.projectList,"no-children-text":"无选择","placeholder":"请选择","multiple":true,"normalizer":_vm.normalizer},model:{value:(_vm.workPointForm.projectIds),callback:function ($$v) {_vm.$set(_vm.workPointForm, "projectIds", $$v)},expression:"workPointForm.projectIds"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"视图","prop":"bimViewId"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请选择场景"},model:{value:(_vm.workPointForm.bimViewId),callback:function ($$v) {_vm.$set(_vm.workPointForm, "bimViewId", $$v)},expression:"workPointForm.bimViewId"}},_vm._l((_vm.viewList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"开始里程","prop":"startMileage"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"string","placeholder":"请输入开始里程"},model:{value:(_vm.workPointForm.startMileage),callback:function ($$v) {_vm.$set(_vm.workPointForm, "startMileage", $$v)},expression:"workPointForm.startMileage"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"结束里程","prop":"endMileage"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"string","placeholder":"请输入结束里程"},model:{value:(_vm.workPointForm.endMileage),callback:function ($$v) {_vm.$set(_vm.workPointForm, "endMileage", $$v)},expression:"workPointForm.endMileage"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"排序值","prop":"sortNo"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"string","placeholder":"请输入排序值"},model:{value:(_vm.workPointForm.sortNo),callback:function ($$v) {_vm.$set(_vm.workPointForm, "sortNo", $$v)},expression:"workPointForm.sortNo"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.saveWorkPoint}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.workPointAreaVisible)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":"工点区域","visible":_vm.workPointAreaVisible},on:{"update:visible":function($event){_vm.workPointAreaVisible=$event}}},[_c('div',{staticClass:"filter-container"},[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"},{name:"button-privilege",rawName:"v-button-privilege",value:('P_gdgl_gdbc'),expression:"'P_gdgl_gdbc'"}],staticClass:"filter-item addButton",attrs:{"slot":"right","type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addWorkPointArea},slot:"right"},[_vm._v("添加")]),_vm._v(" "),_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.workPointAreaList,"columns":_vm.workPointAreaColumns,"list-loading":_vm.workPointAreaLoading,"total":_vm.workPointAreaTotal,"page-size":_vm.workPointAreaListQuery.pageSize},on:{"currentChange":_vm.workPointAreaCurrentChange}})],1)]):_vm._e(),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":_vm.workPointAreaTextMap[_vm.workPointAreaDialogStatus],"visible":_vm.workPointAreadialogFormVisible},on:{"update:visible":function($event){_vm.workPointAreadialogFormVisible=$event}}},[_c('el-form',{ref:"workPointAreaForm",attrs:{"rules":_vm.rules,"model":_vm.workPointAreaForm,"label-position":"center","size":"small","label-width":"130px"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入名称"},model:{value:(_vm.workPointAreaForm.name),callback:function ($$v) {_vm.$set(_vm.workPointAreaForm, "name", $$v)},expression:"workPointAreaForm.name"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"编码","prop":"code"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入编码"},model:{value:(_vm.workPointAreaForm.code),callback:function ($$v) {_vm.$set(_vm.workPointAreaForm, "code", $$v)},expression:"workPointAreaForm.code"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.workPointAreadialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.saveWorkPointArea}},[_vm._v("提交")])],1)],1)],1)}
var staticRenderFns = []



/***/ })

}]);