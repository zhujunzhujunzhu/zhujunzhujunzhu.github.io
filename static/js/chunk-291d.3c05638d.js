(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-291d"],{

/***/ "0Rbd":
/*!***************************************************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/preWork.vue?vue&type=template&id=63611b43& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_template_id_63611b43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./preWork.vue?vue&type=template&id=63611b43& */ "Q/Km");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_template_id_63611b43___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_template_id_63611b43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "D/O9":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/fullLineModel/components/preWork.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "DOP/":
/*!****************************************************************************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/preWork.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./preWork.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "D/O9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F31x":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/fullLineModel/components/preWork.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _api_project_bimViews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/project/bimViews */ "1O3d");
/* harmony import */ var _api_custom_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/custom/custom */ "qxEe");
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ "7Qib");

//
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
  name: 'FullLineModelPreWork',
  components: { tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_4__["default"] },
  props: {},
  data: function data() {
    return {
      list: [],
      columns: [],
      listLoading: false,
      total: 0,
      listQuery: {
        currPage: 1,
        pageSize: 10,
        landAcquireType: ''
      }
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['currentTagType', 'isFull'])),
  watch: {
    currentTagType: function currentTagType() {
      this.getBimPointList();
      this.getList();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$parent.$refs.cesium.clearMarker();
  },
  mounted: function mounted() {
    if (!this.isFull) {
      document.getElementsByClassName('fullLineModelPreDiv')[0].style.height = document.documentElement.clientHeight - 159 + 'px';
    } else {
      document.getElementsByClassName('fullLineModelPreDiv')[0].style.height = 'calc(100% - 30px)';
    }
    this.getBimPointList();
    this.getList();
  },

  methods: {
    getBimPointList: function getBimPointList() {
      var _this = this;

      this.$parent.$refs.cesium.clearMarker();
      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_2__["getBimPointList"])({ bizCode: this.currentTagType }).then(function (res) {
        if (res.success) {
          res.result.list.forEach(function (item) {
            _this.$parent.$refs.cesium.addMarkerToMap({
              x: item.x,
              y: item.y,
              z: item.z
            }, item.name, false, item.bizCode);
          });
        }
      });
    },
    getList: function getList() {
      var _this2 = this;

      switch (this.currentTagType) {
        case 'zd':
          this.listQuery.landAcquireType = 'acquisition_work';
          this.columns = [{ text: '权属', value: 'landOwner' }, {
            text: '地块性质', value: 'landNature', filter: _utils__WEBPACK_IMPORTED_MODULE_5__["getNameByCode"],
            filterParams: ['land_nature']
          }, {
            text: '面积',
            value: 'quantities',
            classFun: function classFun() {
              return 'numSpan';
            }
          }];
          break;
        case 'jd':
          this.listQuery.landAcquireType = 'borrow_work';
          this.columns = [{ text: '权属', value: 'landOwner' }, {
            text: '地块性质', value: 'landNature', filter: _utils__WEBPACK_IMPORTED_MODULE_5__["getNameByCode"],
            filterParams: ['land_nature']
          }, {
            text: '面积',
            value: 'quantities',
            classFun: function classFun() {
              return 'numSpan';
            }
          }];
          break;
        case 'cq':
          this.listQuery.landAcquireType = 'remove_work';
          this.columns = [{ text: '权属', value: 'landOwner' }, {
            text: '房屋性质', value: 'landNature', filter: _utils__WEBPACK_IMPORTED_MODULE_5__["getNameByCode"],
            filterParams: ['land_nature']
          }, {
            text: '面积',
            value: 'quantities',
            classFun: function classFun() {
              return 'numSpan';
            }
          }];
          break;
        case 'dl':
          this.listQuery.landAcquireType = 'roadway';
          this.columns = [{ text: '名称', value: 'landName' }, { text: '道路位置', value: 'location' }, {
            text: '权属',
            value: 'landOwner'
          }];
          break;
        case 'ql':
          this.listQuery.landAcquireType = 'bridge';
          this.columns = [{ text: '名称', value: 'landName' }, { text: '桥梁位置', value: 'location' }, {
            text: '权属',
            value: 'landOwner'
          }];
          break;
        case 'gx':
          this.listQuery.landAcquireType = 'pipeline_migration';
          this.columns = [{ text: '管线名称', value: 'landName' }, { text: '管线规格', value: 'lineStandard' }, {
            text: '路段位置',
            value: 'location'
          }];
          break;
        case 'lh':
          this.listQuery.landAcquireType = 'afforest_transplant';
          this.columns = [{ text: '名称', value: 'landName' }, {
            text: '面积', value: 'quantities', classFun: function classFun() {
              return 'numSpan';
            }
          }];
          break;
      }
      this.columns.push({
        text: '操作', type: 'iconButton', width: 50, list: function list() {
          return [{ class: 'iconaddress', value: '定位', click: _this2.goLocation }];
        }
      });
      this.listLoading = true;
      Object(_api_custom_custom__WEBPACK_IMPORTED_MODULE_3__["customTable"])('rest/landAcquire/list', this.listQuery).then(function (response) {
        if (response.success) {
          _this2.list = response.result.list;
          _this2.total = response.result.total;
        }
        _this2.listLoading = false;
      });
    },
    currentChange: function currentChange(val) {
      this.listQuery.currPage = val;
      this.getList();
    },

    // 定位到标签
    goLocation: function goLocation(val) {
      var _this3 = this;

      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_2__["getBimPoint"])({ bizId: val.row.id, bizCode: this.currentTagType }).then(function (res) {
        if (res.success) {
          if (!res.result || !res.result.x) {
            _this3.$message.warning('该数据未配置标注点');
            return false;
          }
          _this3.$parent.$refs.cesium.flyToMarker({ x: res.result.x, y: res.result.y, z: res.result.z });
        }
      });
    }
  }
});

/***/ }),

/***/ "Q/Km":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/fullLineModel/components/preWork.vue?vue&type=template&id=63611b43& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fullLineModelPreDiv drawer-wrap viewPointWrapper"},[_c('label',{staticClass:"titleLabel"},[_vm._v("前期")]),_vm._v(" "),_c('table-list',{staticClass:"dataTable",staticStyle:{"text-align":"center","margin":"0px 5px"},attrs:{"data":_vm.list,"columns":_vm.columns,"show-small-pagination":true,"list-loading":_vm.listLoading,"total":_vm.total,"page-size":_vm.listQuery.pageSize,"page-num":_vm.listQuery.currPage},on:{"currentChange":_vm.currentChange}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "S6vu":
/*!********************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/preWork.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preWork_vue_vue_type_template_id_63611b43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preWork.vue?vue&type=template&id=63611b43& */ "0Rbd");
/* harmony import */ var _preWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preWork.vue?vue&type=script&lang=js& */ "VPqW");
/* empty/unused harmony star reexport *//* harmony import */ var _preWork_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preWork.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "DOP/");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _preWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _preWork_vue_vue_type_template_id_63611b43___WEBPACK_IMPORTED_MODULE_0__["render"],
  _preWork_vue_vue_type_template_id_63611b43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "preWork.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "VPqW":
/*!*********************************************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/preWork.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./preWork.vue?vue&type=script&lang=js& */ "F31x");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_preWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "qxEe":
/*!**********************************!*\
  !*** ./src/api/custom/custom.js ***!
  \**********************************/
/*! exports provided: customTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customTable", function() { return customTable; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function customTable(url, param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: url,
    method: 'post',
    data: param
  });
}

/***/ })

}]);