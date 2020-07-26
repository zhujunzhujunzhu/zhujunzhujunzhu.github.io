(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-18a2"],{

/***/ "68tC":
/*!*********************************!*\
  !*** ./src/utils/renderForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "iCc5");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "V7oC");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "Kw5r");





var RenderFormUtils = function () {
  function RenderFormUtils() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RenderFormUtils);

    this.curRowInfo = null;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RenderFormUtils, [{
    key: 'renderElement',
    // 当前行信息
    // 通用的方法
    value: function renderElement(comName, _ref) {
      var _this = this;

      var value = _ref.value,
          _ref$props = _ref.props,
          props = _ref$props === undefined ? {} : _ref$props,
          _ref$attrs = _ref.attrs,
          attrs = _ref$attrs === undefined ? {} : _ref$attrs,
          _ref$on = _ref.on,
          on = _ref$on === undefined ? {} : _ref$on;
      var createChild = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return [];
      };

      return function (h, params) {
        return h(comName, {
          attrs: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            value: params.row[value]
          }, attrs),
          props: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props),
          on: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            input: function input(e) {
              vue__WEBPACK_IMPORTED_MODULE_3__["default"].set(params.row, value, e);
              _this.curRowInfo = params.row;
            }
          }, on)
        }, createChild(h, params));
      };
    }
    // 创建el-input

  }, {
    key: 'renderElInput',
    value: function renderElInput(value, _ref2) {
      var _ref2$props = _ref2.props,
          props = _ref2$props === undefined ? {} : _ref2$props,
          _ref2$attrs = _ref2.attrs,
          attrs = _ref2$attrs === undefined ? {} : _ref2$attrs,
          _ref2$on = _ref2.on,
          on = _ref2$on === undefined ? {} : _ref2$on;

      return this.renderElement('el-input', {
        value: value,
        props: props,
        attrs: attrs,
        on: on
      });
    }

    // 创建是否下拉框

  }, {
    key: 'renderWhetherSelect',
    value: function renderWhetherSelect(value, _ref3) {
      var props = _ref3.props,
          attrs = _ref3.attrs,
          on = _ref3.on;

      var options = [{
        name: '是',
        code: true
      }, {
        name: '否',
        code: false
      }];
      var createChild = function createChild(h, params) {
        return options.map(function (item) {
          return h('el-option', {
            props: {
              label: item.name,
              value: item.code
            }
          });
        });
      };
      return this.renderElement('el-select', {
        value: value,
        props: props,
        attrs: attrs,
        on: on
      }, createChild);
    }
    // 创建下拉框

  }, {
    key: 'renderElSelect',
    value: function renderElSelect(value, _ref4) {
      var _ref4$options = _ref4.options,
          options = _ref4$options === undefined ? [] : _ref4$options,
          _ref4$props = _ref4.props,
          props = _ref4$props === undefined ? {} : _ref4$props,
          _ref4$attrs = _ref4.attrs,
          attrs = _ref4$attrs === undefined ? {} : _ref4$attrs,
          _ref4$on = _ref4.on,
          on = _ref4$on === undefined ? {} : _ref4$on;

      var createChild = function createChild(h, params) {
        return options.map(function (item) {
          return h('el-option', {
            props: {
              label: item.name,
              value: item.code
            }
          });
        });
      };
      return this.renderElement('el-select', {
        value: value,
        props: props,
        attrs: attrs,
        on: on
      }, createChild);
    }

    // 创建时间输入框

  }, {
    key: 'renderElDatePicker',
    value: function renderElDatePicker(value, _ref5) {
      var _ref5$props = _ref5.props,
          props = _ref5$props === undefined ? {} : _ref5$props,
          _ref5$attrs = _ref5.attrs,
          attrs = _ref5$attrs === undefined ? {} : _ref5$attrs,
          _ref5$on = _ref5.on,
          on = _ref5$on === undefined ? {} : _ref5$on;

      props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        valueFormat: 'yyyy-MM-dd'
      }, props);
      return this.renderElement('el-date-picker', {
        value: value,
        props: props,
        attrs: attrs,
        on: on
      });
    }
    // 输入起止时间的

  }, {
    key: 'renderElDatePickerRange',
    value: function renderElDatePickerRange(value, _ref6) {
      var _ref6$props = _ref6.props,
          props = _ref6$props === undefined ? {} : _ref6$props,
          _ref6$attrs = _ref6.attrs,
          attrs = _ref6$attrs === undefined ? {} : _ref6$attrs,
          _ref6$on = _ref6.on,
          on = _ref6$on === undefined ? {} : _ref6$on;

      props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        type: 'daterange',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        valueFormat: 'yyyy-MM-dd'
      }, props);
      return this.renderElement('el-date-picker', {
        value: value,
        props: props,
        attrs: attrs,
        on: on
      });
    }

    // 创建switch

  }, {
    key: 'renderElSwitch',
    value: function renderElSwitch(value, _ref7) {
      var _ref7$props = _ref7.props,
          props = _ref7$props === undefined ? {} : _ref7$props,
          _ref7$attrs = _ref7.attrs,
          attrs = _ref7$attrs === undefined ? {} : _ref7$attrs,
          _ref7$on = _ref7.on,
          on = _ref7$on === undefined ? {} : _ref7$on;

      return this.renderElement('el-switch', {
        value: value,
        props: props,
        attrs: attrs,
        on: on
      });
    }
  }]);

  return RenderFormUtils;
}();

/* harmony default export */ __webpack_exports__["default"] = (new RenderFormUtils());

/***/ }),

/***/ "9RIO":
/*!***************************************************!*\
  !*** ./src/api/epidemic/epDailyMaterialDetail.js ***!
  \***************************************************/
/*! exports provided: save, get, list, queryAllMaterialData, deleteApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAllMaterialData", function() { return queryAllMaterialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteApi", function() { return deleteApi; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyMaterialDetail/save',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyMaterialDetail/get',
    method: 'post',
    data: param
  });
}

function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyMaterialDetail/list',
    method: 'post',
    data: param
  });
}

function queryAllMaterialData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/epDailyMaterialDetail/queryAllMaterialData',
    method: 'post',
    data: param
  });
}

function deleteApi(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyMaterialDetail/delete',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "AvPr":
/*!************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/goods/js/goods.js ***!
  \************************************************************************/
/*! exports provided: createColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColumns", function() { return createColumns; });
/* harmony import */ var _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/renderForm.js */ "68tC");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "7Qib");


// import store from '@/store/index.js'
// import {
//   getNameByCode
// } from '@/utils'
var createColumns = function createColumns(context) {
  var columns = [{
    text: '物资名称',
    required: true,
    sortable: false,
    prop: 'name',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('name', {
      attrs: {
        placeholder: '必填'
      },
      props: {
        clearable: true
      }
    })
  }, {
    text: '当前需求总计',
    required: true,
    prop: 'demandTotal',
    sortable: false,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('demandTotal', {
      attrs: {
        placeholder: '当前需求总计'
      },
      props: {
        type: 'number'
      }
    })
  }, {
    text: '目前库存总计',
    required: true,
    prop: 'stockTotal',
    sortable: false,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('stockTotal', {
      attrs: {
        placeholder: '目前库存总计'
      },
      props: {
        type: 'number'
      }
    })
  }, {
    text: '当日使用数量',
    required: true,
    sortable: false,
    prop: 'useNum',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('useNum', {
      attrs: {
        placeholder: '当日使用总量'
      },
      props: {
        type: 'number'
      }
    })
  }, {
    text: '累计使用总计',
    sortable: false,
    required: true,
    prop: 'useTotal',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('useTotal', {
      attrs: {
        placeholder: '累计使用总计'
      },
      props: {
        type: 'number'
      }
    })
  }, {
    text: '计量单位',
    sortable: false,
    required: true,
    prop: 'unit',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('unit', {
      attrs: {
        placeholder: '计量单位'
      }
    })
  }, {
    text: '备注',
    required: false,
    sortable: false,
    prop: 'remark',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('remark', {
      attrs: {
        placeholder: '备注'
      },
      props: {
        type: 'string'
      }
    })
  }];

  var goodsListColumns = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["deepClone"])(columns).map(function (item) {
    item.value = item.prop;
    delete item.render;
    return item;
  }).concat([{
    text: '操作',
    type: 'iconButton',
    width: 100,
    list: context.operButton
  }]);

  var editGoodsColumns = columns.concat([{
    text: '操作',
    type: 'iconButton',
    width: 100,
    list: context.operButton
  }]);

  return {
    editGoodsColumns: editGoodsColumns,
    goodsListColumns: goodsListColumns
  };
};

/***/ }),

/***/ "HGWS":
/*!************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/goods/goodsList.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./goodsList.vue?vue&type=style&index=0&lang=scss& */ "eJDw");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "JJdC":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/epidemic/goods/goodsList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "JO7F");
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SearchBar */ "3nF5");
/* harmony import */ var _api_epidemic_epDailyMaterialDetail_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/epidemic/epDailyMaterialDetail.js */ "9RIO");
/* harmony import */ var _js_goods_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/goods.js */ "AvPr");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _api_epidemic_epDailyReport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/epidemic/epDailyReport.js */ "wA5v");
/* harmony import */ var _api_project_project_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/project/project.js */ "T+6t");
/* harmony import */ var _decorator_loading_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/decorator/loading.js */ "DdcY");
/* harmony import */ var _decorator_comfirm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/decorator/comfirm.js */ "abuB");



var _dec, _dec2, _desc, _value, _obj;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//




// import { deleteFun } from '@/utils/process'






/* harmony default export */ __webpack_exports__["default"] = ({
  components: { tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_2__["default"], searchBar: _components_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], queryAllPersonOrgList: _api_project_project_js__WEBPACK_IMPORTED_MODULE_8__["queryAllPersonOrgList"] },
  data: function data() {
    var _this = this;
    return {
      listLoading: false,
      /**  ********/
      columns: Object(_js_goods_js__WEBPACK_IMPORTED_MODULE_5__["createColumns"])(_this).goodsListColumns,
      /** *******/
      listQuery1: [],
      listQuery: {
        pageSize: 15,
        currPage: 1,
        name: '',
        code: ''
      },
      forms: [{
        type: 'input',
        placeholder: '物资名称',
        prop: 'name',
        clearable: true
      }, {
        type: 'date',
        placeholder: '日期',
        prop: 'currentDate',
        clearable: true
      }, {
        type: 'select',
        placeholder: '请选择组织',
        prop: 'projectOrgId',
        clearable: true,
        options: []
      }, { type: 'searchBtn', searchFun: this.searchFun }],
      owerPri: 'P_xmgcxx_yqrb_fywz_ck_all',
      isOwner: false,
      total: 0,
      list: [{}]
    };
  },
  created: function created() {
    // 默认当天数据
    this.judgeIsOwsner();
    this.getBidOptions();
    this.$set(this.listQuery1, 'currentDate', Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(new Date(), '{y}-{m}-{d}'));
    this.getSysOrg();
  },

  methods: (_dec = Object(_decorator_loading_js__WEBPACK_IMPORTED_MODULE_9__["loading"])('listLoading'), _dec2 = Object(_decorator_comfirm_js__WEBPACK_IMPORTED_MODULE_10__["comfirm"])({
    list: 'getList'
  }), (_obj = {
    /**
     * 判断是否为业主单位
     * @function judgeIsOwsner
     */
    judgeIsOwsner: function judgeIsOwsner() {
      var buttonPrivileges = this.$store.getters.projectButtonPrivileges.includes(this.owerPri);
      if (buttonPrivileges) {
        this.isOwner = true;
      } else {
        this.isOwner = false;
      }
      return this.isOwner;
    },

    /**
     * 获取当前用户的标段
     * @function getBidOptions
     */
    getBidOptions: function getBidOptions() {
      var _this2 = this;

      Object(_api_project_project_js__WEBPACK_IMPORTED_MODULE_8__["queryAllPersonOrgList"])({}).then(function (res) {
        if (res.success) {
          var options = res.result.map(function (item) {
            item.value = item.id;
            item.label = item.name;
            return item;
          });
          if (_this2.isOwner) {
            _this2.forms = _this2.forms.map(function (item) {
              if (item.prop === 'projectOrgId') {
                item.options = options;
              }
              return item;
            });
          } else {
            _this2.forms = _this2.forms.filter(function (item) {
              return item.prop !== 'projectOrgId';
            });
          }
        }
      });
    },

    // 获取当前用户的组织信息
    getSysOrg: function getSysOrg() {
      var _this3 = this;

      this.listLoading = true;
      Object(_api_epidemic_epDailyReport_js__WEBPACK_IMPORTED_MODULE_7__["getSysOrg"])({}).then(function (res) {
        if (res.success) {
          _this3.listQuery.orgId = res.result.id;
          _this3.getList();
        }
      });
    },
    getList: function getList() {
      var _this4 = this;

      var api = _api_epidemic_epDailyMaterialDetail_js__WEBPACK_IMPORTED_MODULE_4__["list"];
      if (this.isOwner) {
        // 当为业主的处理
        api = _api_epidemic_epDailyMaterialDetail_js__WEBPACK_IMPORTED_MODULE_4__["queryAllMaterialData"];
        // if (this.listQuery1.tendersId === 'other') {
        //   this.listQuery['isOther'] = true
        //   this.listQuery.tendersId = null
        // } else if (this.listQuery1.tendersId === 'all') {
        //   this.listQuery['isOther'] = false
        //   this.listQuery.tendersId = null
        // } else {
        //   this.listQuery['isOther'] = false
        //   this.listQuery.tendersId = this.listQuery1.tendersId
        // }
      }
      delete this.listQuery.orgId;
      return api(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.listQuery, this.listQuery1)).then(function (res) {
        if (res.success) {
          _this4.total = res.result.total;
          _this4.list = res.result.list;
        }
      });
    },
    searchFun: function searchFun() {
      this.getList();
    },

    // 表格操作按鈕
    operButton: function operButton(val) {
      return [
      // { class: 'iconyanjing', value: '查看', click: this.viewFun },
      { class: 'iconshanchu', value: '删除', click: this.deleteFun }];
    },
    currentChange: function currentChange(val) {
      this.listQuery.currPage = val;
      this.getList();
    },
    viewFun: function viewFun(val) {
      this.isShow = true;
      this.isAdd = false; // 不为新增
      this.isView = true; // 查看
      this.info = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, val.row);
    },
    editFun: function editFun(val) {
      this.isShow = true;
      this.isAdd = false;
      this.isView = false; // 不为查看
      this.info = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, val.row);
    },
    deleteFun: function deleteFun(val) {
      return Object(_api_epidemic_epDailyMaterialDetail_js__WEBPACK_IMPORTED_MODULE_4__["deleteApi"])({ id: val.row.id });
    }
  }, (_applyDecoratedDescriptor(_obj, 'getList', [_dec], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_obj, 'getList'), _obj), _applyDecoratedDescriptor(_obj, 'deleteFun', [_dec2], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_obj, 'deleteFun'), _obj)), _obj))
});

/***/ }),

/***/ "PXR8":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/epidemic/goods/goodsList.vue?vue&type=template&id=2942e50c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"goodsListDiv"},[_c('searchBar',{attrs:{"forms":_vm.forms,"list-query":_vm.listQuery1}}),_vm._v(" "),_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.list,"columns":_vm.columns,"list-loading":_vm.listLoading,"total":_vm.total,"page-size":_vm.listQuery.pageSize},on:{"currentChange":_vm.currentChange}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "RSUS":
/*!*********************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/goods/goodsList.vue?vue&type=template&id=2942e50c& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_template_id_2942e50c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./goodsList.vue?vue&type=template&id=2942e50c& */ "PXR8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_template_id_2942e50c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_template_id_2942e50c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "Z2Og":
/*!***************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/goods/goodsList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./goodsList.vue?vue&type=script&lang=js& */ "JJdC");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "abuB":
/*!**********************************!*\
  !*** ./src/decorator/comfirm.js ***!
  \**********************************/
/*! exports provided: comfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comfirm", function() { return comfirm; });
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui */ "XJYT");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);
/*
 * @Description
 * @Autor 朱俊
 * @Date 2020-03-20 18:32:54
 * @LastEditors 朱俊
 * @LastEditTime 2020-06-10 15:44:09
 */


var comfirm = function comfirm(_ref) {
  var placeholder = _ref.placeholder,
      list = _ref.list,
      cancel = _ref.cancel,
      success = _ref.success,
      _ref$successMessage = _ref.successMessage,
      successMessage = _ref$successMessage === undefined ? '删除成功' : _ref$successMessage,
      _ref$cancelMessage = _ref.cancelMessage,
      cancelMessage = _ref$cancelMessage === undefined ? '已取消删除' : _ref$cancelMessage,
      _ref$showSuccessTip = _ref.showSuccessTip,
      showSuccessTip = _ref$showSuccessTip === undefined ? true : _ref$showSuccessTip,
      _ref$showErrorTip = _ref.showErrorTip,
      showErrorTip = _ref$showErrorTip === undefined ? true : _ref$showErrorTip;

  if (!placeholder) placeholder = '此操作将永久删除, 是否继续?';
  return function (target, name, descriptor) {
    var oldFunction = descriptor.value;
    descriptor.value = function fn() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      element_ui__WEBPACK_IMPORTED_MODULE_0__["MessageBox"].confirm(placeholder, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        oldFunction.apply(_this, args).then(function (res) {
          showSuccessTip && Object(element_ui__WEBPACK_IMPORTED_MODULE_0__["Message"])({
            type: 'success',
            message: successMessage
          });
          list && _this[list]();
          success && success.apply(undefined, [_this].concat(args));
        });
      }).catch(function (err) {
        console.log(err);
        showErrorTip && Object(element_ui__WEBPACK_IMPORTED_MODULE_0__["Message"])({
          type: 'info',
          message: cancelMessage
        });
        cancel && cancel(_this);
      });
    };
    return descriptor;
  };
};

/***/ }),

/***/ "eJDw":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/epidemic/goods/goodsList.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "sOgw":
/*!**************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/goods/goodsList.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goodsList_vue_vue_type_template_id_2942e50c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goodsList.vue?vue&type=template&id=2942e50c& */ "RSUS");
/* harmony import */ var _goodsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goodsList.vue?vue&type=script&lang=js& */ "Z2Og");
/* empty/unused harmony star reexport *//* harmony import */ var _goodsList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goodsList.vue?vue&type=style&index=0&lang=scss& */ "HGWS");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goodsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goodsList_vue_vue_type_template_id_2942e50c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goodsList_vue_vue_type_template_id_2942e50c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "goodsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "wA5v":
/*!*******************************************!*\
  !*** ./src/api/epidemic/epDailyReport.js ***!
  \*******************************************/
/*! exports provided: save, get, list, deleteFun, getSysOrg, constructionSiteStatistics, epidemicWorkTotal, personStatistics, deployReports, queryUserTenders, queryAlreadyReportData, epidemicPersonTotal, epidemicPersonOverview, materialReportExport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFun", function() { return deleteFun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSysOrg", function() { return getSysOrg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructionSiteStatistics", function() { return constructionSiteStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epidemicWorkTotal", function() { return epidemicWorkTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personStatistics", function() { return personStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployReports", function() { return deployReports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryUserTenders", function() { return queryUserTenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAlreadyReportData", function() { return queryAlreadyReportData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epidemicPersonTotal", function() { return epidemicPersonTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epidemicPersonOverview", function() { return epidemicPersonOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialReportExport", function() { return materialReportExport; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/save',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/get',
    method: 'post',
    data: param
  });
}

function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/list',
    method: 'post',
    data: param
  });
}

function deleteFun(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/delete',
    method: 'post',
    data: param
  });
}

function getSysOrg(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/getSysOrg',
    method: 'post',
    data: param
  });
}

// 工地信息统计
function constructionSiteStatistics(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/constructionSiteStatistics',
    method: 'post',
    data: param
  });
}

// 疫情工作统计
function epidemicWorkTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/epidemicWorkTotal',
    method: 'post',
    data: param
  });
}

// 人员信息统计
function personStatistics(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/personStatistics',
    method: 'post',
    data: param
  });
}

// 修改填报状态
function deployReports(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/deployReports',
    method: 'post',
    data: param
  });
}

// 查到当前用户真正所属的标段
function queryUserTenders(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/queryUserTenders',
    method: 'post',
    data: param
  });
}

// 查询当前用户组织的填报情况
function queryAlreadyReportData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/queryAlreadyReportData',
    method: 'post',
    data: param
  });
}

// 疫情人员统计
function epidemicPersonTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/epidemicPersonTotal',
    method: 'post',
    data: param
  });
}

// 疫情人员统计总览
function epidemicPersonOverview(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/epidemicPersonOverview',
    method: 'post',
    data: param
  });
}
// 疫情导出
function materialReportExport(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/materialReportExport',
    method: 'post',
    data: param
  });
}

/***/ })

}]);