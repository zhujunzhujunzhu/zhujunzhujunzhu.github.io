(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-589f"],{

/***/ "A0uA":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/epidemic/realName/editRealNameInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "gDS+");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _js_editRealName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/editRealName.js */ "d0ak");
/* harmony import */ var _api_project_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/project/project.js */ "T+6t");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _api_epidemic_epPerson_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/epidemic/epPerson.js */ "mM4T");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _api_area_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/area.js */ "WZwz");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_2__["default"] },
  props: {
    info: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isAdd: {
      type: Boolean,
      default: true
    },
    isView: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var _this = this;
    return {
      columns: Object(_js_editRealName_js__WEBPACK_IMPORTED_MODULE_3__["createColumns"])(_this),
      areaRootList: [], // 行政区列表
      tendersId: '',
      bidOptions: [],
      list: [{}],
      addPersonNumber: 1,
      loading: false
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(['dictMap'])),
  created: function created() {
    this.getAreaRootList(); // 拿到行政区信息
    this.getBidOptions();
  },

  methods: {
    getAreaRootList: function getAreaRootList() {
      var _this2 = this;

      this.loading = true;
      Object(_api_area_js__WEBPACK_IMPORTED_MODULE_8__["getAreaRootList"])({}).then(function (res) {
        if (res.success) {
          _this2.areaRootList = res.result;
          _this2.dealColumns();
        }
      });
    },
    getAreaName: function getAreaName(val) {
      var find = this.areaRootList.find(function (item) {
        return item.code === val;
      });
      if (find) {
        return find.name;
      } else {
        return null;
      }
    },
    dealColumns: function dealColumns() {
      if (!this.isAdd) {
        // 当不为新增时的处理 而为修改时的处理
        // 处理 起止时间
        if (this.info.departDate && this.info.arriveDate) {
          this.info.date = [Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseTime"])(this.info.departDate, '{y}-{m}-{d}'), Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseTime"])(this.info.arriveDate, '{y}-{m}-{d}')];
        }
        this.info.quarantineDate && (this.info.quarantineDate = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseTime"])(this.info.quarantineDate, '{y}-{m}-{d}'));
        this.list = [babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.info)];
        this.tendersId = this.info.tendersId;

        this.columns = Object(_js_editRealName_js__WEBPACK_IMPORTED_MODULE_3__["createColumns"])(this).filter(function (item) {
          return item.text !== '操作';
        });
      } else {
        this.columns = Object(_js_editRealName_js__WEBPACK_IMPORTED_MODULE_3__["createColumns"])(this);
      }
      if (this.isView) {
        // 当为查看时的处理
        // 赋值当前行数据
        // 处理 起止时间
        if (this.info.departDate && this.info.arriveDate) {
          this.info.date = [Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseTime"])(this.info.departDate, '{y}-{m}-{d}'), Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseTime"])(this.info.arriveDate, '{y}-{m}-{d}')];
        }
        this.list = [babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.info)];
        this.tendersId = this.info.tendersId;
        // 将列表变为非编辑的状态
        this.columns = Object(_js_editRealName_js__WEBPACK_IMPORTED_MODULE_3__["createColumns"])(this).map(function (item) {
          item.value = item.prop;
          delete item.render;
          return item;
        }).filter(function (item) {
          return item.text !== '操作';
        }); // 去除操作列
      }
      this.loading = false;
    },
    validID: function validID(val) {
      if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val)) {
        return true;
      } else {
        return false;
      }
    },

    // 表格操作按鈕
    operButton: function operButton(val) {
      if (this.list.length > 1) {
        return [{ class: 'iconshanchu', value: '删除', click: this.deleteRow }];
      } else {
        return [];
      }
    },
    getBidOptions: function getBidOptions() {
      var _this3 = this;

      Object(_api_project_project_js__WEBPACK_IMPORTED_MODULE_4__["projectUserTenders"])({}).then(function (res) {
        if (res.success) {
          _this3.bidOptions = res.result;
        }
      });
    },
    addPersonRows: function addPersonRows() {
      var _this4 = this;

      var pushList = function pushList(start) {
        for (var index = start; index < _this4.addPersonNumber; index++) {
          _this4.list.push({});
        }
      };

      if (this.list.length > this.addPersonNumber) {
        // 当添加人数小于当前列表人数  提示进行覆盖操作
        this.$confirm('继续此操作将会覆盖之前填写的数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          _this4.list = [];
          pushList(0);
        }).catch(function () {
          _this4.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      } else {
        // 当添加人数大于当前列表人数  在当前列表后追加列
        pushList(this.list.length);
      }
    },
    deleteRow: function deleteRow(val) {
      var _this5 = this;

      if (babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(val.row) === '{}') {
        // 当前行不存在内容 直接删除
        this.list.splice(val.$index, 1);
        this.addPersonNumber = this.list.length;
      } else {
        this.$confirm('继续此操作将会删除之前填写的数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          _this5.list.splice(val.$index, 1);
          _this5.addPersonNumber = _this5.list.length;
        }).catch(function () {
          _this5.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      }
    },
    addRow: function addRow() {
      this.list.push({});
      this.addPersonNumber = this.list.length;
    },
    dealData: function dealData(data, state) {
      var _this6 = this;

      // 数据验证
      // 拿到需要验证的属性  需要验证的属性都是打上了required属性
      var needValidateAttrs = this.columns.filter(function (item) {
        return item.required;
      }).map(function (item) {
        return item.prop;
      });
      var isValid = true;
      var failedAttrs = [];
      var failedAttrsName = [];
      var incorrectFormat = [];
      var incorrectFormatName = [];
      for (var index = 0; index < data.length; index++) {
        var item = data[index];
        for (var innerIndex = 0; innerIndex < needValidateAttrs.length; innerIndex++) {
          var attr = needValidateAttrs[innerIndex];
          if (item[attr] === null || item[attr] === undefined) {
            isValid = false;
            failedAttrs.push(attr);
          } else if (['idCard'].includes(attr)) {
            // 相关属性需要验证格式的处理  idCard
            if (attr === 'idCard') {
              if (!this.validID(item[attr])) {
                incorrectFormat.push(attr);
              }
            }
          }
        }
        if (!isValid) {
          // 验证不通过
          // 将错误信息抛出 index+1 行
          failedAttrsName = this.columns.filter(function (item) {
            return failedAttrs.includes(item.prop);
          }).map(function (item) {
            return item.text;
          });
          incorrectFormatName = this.columns.filter(function (item) {
            return incorrectFormat.includes(item.prop);
          }).map(function (item) {
            return item.text;
          });
          var message = '\u7B2C' + (index + 1) + '\u884C\uFF0C' + failedAttrsName.join('、') + '\u4E0D\u80FD\u4E3A\u7A7A';
          if (incorrectFormatName.length > 0) {
            message += '\n' + incorrectFormatName.join('、') + '\u683C\u5F0F\u4E0D\u6B63\u786E';
          }
          this.$message({
            type: 'warning',
            message: message
          });
          // 终止循环
          return false;
        }
      }
      // 数据处理 将标段添加到每条记录中
      var result = data.map(function (item) {
        // 处理 起止时间
        if (item.date && item.date[1]) {
          item.departDate = item.date[0];
          item.arriveDate = item.date[1];
        }
        return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, item, { tendersId: _this6.tendersId, state: state });
      });
      return result;
    },
    saveFun: function saveFun() {
      var _this7 = this;

      var sendData = this.dealData(this.list, 0);
      if (!sendData) return;
      Object(_api_epidemic_epPerson_js__WEBPACK_IMPORTED_MODULE_6__["save"])({
        tendersId: this.tendersId,
        epPersonList: sendData
      }).then(function (res) {
        if (res.success) {
          _this7.$message.success('保存成功');
          _this7.$emit('close');
        }
      });
    },
    submitFun: function submitFun() {
      var _this8 = this;

      var sendData = this.dealData(this.list, 1);
      if (!sendData) return;
      Object(_api_epidemic_epPerson_js__WEBPACK_IMPORTED_MODULE_6__["save"])({
        tendersId: this.tendersId,
        epPersonList: sendData
      }).then(function (res) {
        if (res.success) {
          _this8.$message.success('提交成功');
          _this8.$emit('close');
        }
      });
    }
  }
});

/***/ }),

/***/ "EKQj":
/*!************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/realName/editRealNameInfo.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editRealNameInfo_vue_vue_type_template_id_407b9132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editRealNameInfo.vue?vue&type=template&id=407b9132& */ "Y8P7");
/* harmony import */ var _editRealNameInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editRealNameInfo.vue?vue&type=script&lang=js& */ "urUz");
/* empty/unused harmony star reexport *//* harmony import */ var _editRealNameInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editRealNameInfo.vue?vue&type=style&index=0&lang=scss& */ "phfO");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editRealNameInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editRealNameInfo_vue_vue_type_template_id_407b9132___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editRealNameInfo_vue_vue_type_template_id_407b9132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "editRealNameInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "WZwz":
/*!*************************!*\
  !*** ./src/api/area.js ***!
  \*************************/
/*! exports provided: getAreaRootList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaRootList", function() { return getAreaRootList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getAreaRootList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/area/rootList',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "Y8P7":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/realName/editRealNameInfo.vue?vue&type=template&id=407b9132& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_template_id_407b9132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./editRealNameInfo.vue?vue&type=template&id=407b9132& */ "Yg6n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_template_id_407b9132___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_template_id_407b9132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "Yg6n":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/epidemic/realName/editRealNameInfo.vue?vue&type=template&id=407b9132& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editRealNameInfoDiv"},[_c('div',{staticClass:"header flex"},[_c('div',{staticClass:"inlineBlock flex-middle"},[_c('label',{staticStyle:{"width":"60px"}},[_vm._v("所属标段：")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择所属标段","clearable":"","disabled":_vm.isView},model:{value:(_vm.tendersId),callback:function ($$v) {_vm.tendersId=$$v},expression:"tendersId"}},_vm._l((_vm.bidOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),(_vm.isAdd && !_vm.isView)?_c('div',{staticClass:"inlineBlock flex-middle"},[_c('label',{staticStyle:{"width":"100px","text-aligin":"right"}},[_vm._v("新增人数:")]),_vm._v(" "),_c('el-input',{attrs:{"min":1,"type":"number"},model:{value:(_vm.addPersonNumber),callback:function ($$v) {_vm.addPersonNumber=$$v},expression:"addPersonNumber"}})],1):_vm._e(),_vm._v(" "),(_vm.isAdd && !_vm.isView)?_c('div',{staticClass:"inlineBlock"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addPersonRows}},[_vm._v("确定")])],1):_vm._e()]),_vm._v(" "),_c('table-list',{attrs:{"data":_vm.list,"loading":_vm.loading,"columns":_vm.columns}}),_vm._v(" "),(!_vm.isView)?_c('div',{staticClass:"btnWrapper flex-end"},[(_vm.isAdd)?_c('el-button',{on:{"click":_vm.addRow}},[_vm._v("添加行")]):_vm._e(),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveFun}},[_vm._v("保存")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success"},on:{"click":_vm.submitFun}},[_vm._v("提交")])],1):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "d0ak":
/*!**********************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/realName/js/editRealName.js ***!
  \**********************************************************************************/
/*! exports provided: createColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColumns", function() { return createColumns; });
/* harmony import */ var _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/renderForm.js */ "68tC");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/index.js */ "Q2AE");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "7Qib");




var createColumns = function createColumns(context) {
  var whetherSelectFilter = function whetherSelectFilter(val) {
    if (val === true) {
      return '是';
    } else if (val === false) {
      return '否';
    }
  };
  var columns = [{
    text: '姓名',
    required: true,
    sortable: false,
    fixed: true,
    width: 150,
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
    text: '性别',
    required: true,
    fixed: true,
    width: 100,
    prop: 'gender',
    sortable: false,
    filter: _utils__WEBPACK_IMPORTED_MODULE_2__["getNameByCode"],
    filterParams: ['sex_type'],
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElSelect('gender', {
      attrs: {
        placeholder: '必填'
      },
      props: {
        clearable: true
      },
      options: function () {
        return _store_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getters.dictMap['sex_type'];
      }()
    })
  }, {
    text: '身份证',
    required: true,
    fixed: true,
    width: 200,
    sortable: false,
    prop: 'idCard',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('idCard', {
      attrs: {
        placeholder: '必填'
      },
      on: {
        change: function change(val) {
          if (!context.validID(val)) {
            context.$message({
              type: 'warning',
              message: '请输入正确格式的身份证号'
            });
          }
        }
      }
    })
  }, {
    text: '籍贯',
    required: true,
    sortable: false,
    width: 150,
    prop: 'nativePlace',
    filter: context.getAreaName,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElSelect('nativePlace', {
      attrs: {
        placeholder: '必填'
      },
      options: context.areaRootList
    })
  }, {
    text: '联系方式',
    sortable: false,
    width: 150,
    prop: 'mobileNumber',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('mobileNumber', {
      attrs: {
        placeholder: '联系方式'
      }
    })
  }, {
    text: '所属单位',
    sortable: false,
    required: true,
    width: 150,
    prop: 'orgName',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('orgName', {
      attrs: {
        placeholder: '必填'
      }
    })
  }, {
    text: '岗位',
    width: 150,
    sortable: false,
    prop: 'station',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('station', {
      attrs: {
        placeholder: '岗位'
      }
    })
  }, {
    text: '是否在岗',
    sortable: false,
    required: true,
    width: 100,
    prop: 'stationStatus',
    filter: whetherSelectFilter,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderWhetherSelect('stationStatus', {
      attrs: {
        placeholder: '必填'
      }
    })
  }, {
    text: '春节期间是否离沪',
    sortable: false,
    required: true,
    width: 100,
    prop: 'leaveStatus',
    filter: whetherSelectFilter,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderWhetherSelect('leaveStatus', {
      attrs: {
        placeholder: '必填'
      }
    })
  }, {
    text: '出发-到沪时间',
    sortable: false,
    width: 350,
    // depart_date arrive_date
    prop: 'date',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElDatePickerRange('date', {})
  }, {
    text: '身体健康状况',
    width: 150,
    sortable: false,
    prop: 'healthCondition',
    filter: _utils__WEBPACK_IMPORTED_MODULE_2__["getNameByCode"],
    filterParams: ['health_condition'],
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElSelect('healthCondition', {
      attrs: {
        placeholder: '健康状况'
      },
      options: _store_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getters.dictMap['health_condition']
    })
  }, {
    text: '是否填写来沪健康登记表',
    sortable: false,
    width: 100,
    prop: 'fillOutForm',
    filter: whetherSelectFilter,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderWhetherSelect('fillOutForm', {
      attrs: {
        placeholder: '请选择'
      }
    })
  }, {
    text: '随申码',
    sortable: false,
    width: 150,
    prop: 'followCode',
    filter: _utils__WEBPACK_IMPORTED_MODULE_2__["getNameByCode"],
    filterParams: ['follow_code'],
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElSelect('followCode', {
      attrs: {
        placeholder: '随申码'
      },
      options: _store_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getters.dictMap['follow_code']
    })
  }, {
    text: '出发地',
    width: 150,
    sortable: false,
    prop: 'departSite',
    filter: context.getAreaName,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElSelect('departSite', {
      attrs: {
        placeholder: '出发地'
      },
      options: context.areaRootList
    })
  }, {
    text: '是否途经湖北省',
    sortable: false,
    width: 100,
    prop: 'epidemicArea',
    filter: whetherSelectFilter,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderWhetherSelect('epidemicArea', {
      attrs: {
        placeholder: '请选择'
      }
    })
  }, {
    text: '回沪方式',
    sortable: false,
    prop: 'tripMode',
    filter: _utils__WEBPACK_IMPORTED_MODULE_2__["getNameByCode"],
    width: 150,
    filterParams: ['trip_mode'],
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElSelect('tripMode', {
      attrs: {
        placeholder: '回沪方式'
      },
      options: _store_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getters.dictMap['trip_mode']
    })
  }, {
    text: '回沪住宿',
    sortable: false,
    prop: 'tripDorm',
    width: 150,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('tripDorm', {
      attrs: {
        placeholder: '回沪住宿'
      }
    })
  }, {
    text: '是否保留出行票据',
    sortable: false,
    prop: 'tripBill',
    filter: whetherSelectFilter,
    width: 120,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderWhetherSelect('tripBill', {
      attrs: {
        placeholder: '请选择'
      }
    })
  }, {
    text: '是否有接触史',
    sortable: false,
    prop: 'contact',
    filter: whetherSelectFilter,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderWhetherSelect('contact', {
      attrs: {
        placeholder: '请选择'
      }
    })
  }, {
    text: '是否有病史',
    sortable: false,
    prop: 'medicalHistory',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderWhetherSelect('medicalHistory', {
      attrs: {
        placeholder: '请选择'
      }
    })
  }, {
    text: '1月10日后过湖北',
    sortable: false,
    width: 80,
    prop: 'goEpidemicArea',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderWhetherSelect('goEpidemicArea', {
      attrs: {
        placeholder: '请选择'
      }
    })
  }, {
    text: '是否隔离',
    sortable: false,
    prop: 'insulate',
    width: 80,
    filter: whetherSelectFilter,
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderWhetherSelect('insulate', {
      attrs: {
        placeholder: '请选择'
      }
    })
  }, {
    text: '开始隔离日期',
    sortable: false,
    width: 150,
    prop: 'quarantineDate',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElDatePicker('quarantineDate', {
      attrs: {
        placeholder: '开始隔离日期'
      }
    })
  }, {
    text: '隔离措施',
    sortable: false,
    width: 150,
    prop: 'insulateMeasure',
    filter: _utils__WEBPACK_IMPORTED_MODULE_2__["getNameByCode"],
    filterParams: ['insulate_measure'],
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElSelect('insulateMeasure', {
      attrs: {
        placeholder: '隔离措施'
      },
      options: _store_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getters.dictMap['insulate_measure']
    })
  }, {
    text: '同行人数',
    width: 100,
    sortable: false,
    prop: 'peersNumber',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('peersNumber', {
      attrs: {
        placeholder: '同行人数',
        min: 0
      },
      props: {
        type: 'number',
        min: 0
      }
    })
  }, {
    text: '同行人姓名及联系方式',
    sortable: false,
    width: 200,
    prop: 'peersUserMessage',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('peersUserMessage', {
      attrs: {
        placeholder: '同行人姓名及联系方式'
      }
    })
  }, {
    text: '备注',
    width: 200,
    fixed: 'right',
    sortable: false,
    prop: 'remark',
    render: _utils_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderElInput('remark', {
      attrs: {
        placeholder: '备注'
      }
    })
  }];

  return columns.concat([{
    text: '操作',
    type: 'iconButton',
    fixed: 'right',
    width: 100,
    list: context.operButton
  }]);
};

/***/ }),

/***/ "mM4T":
/*!**************************************!*\
  !*** ./src/api/epidemic/epPerson.js ***!
  \**************************************/
/*! exports provided: save, get, list, deleteApi, queryAllPersonList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteApi", function() { return deleteApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAllPersonList", function() { return queryAllPersonList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epPerson/save',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epPerson/get',
    method: 'post',
    data: param
  });
}

function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epPerson/list',
    method: 'post',
    data: param
  });
}

function deleteApi(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epPerson/delete',
    method: 'post',
    data: param
  });
}

function queryAllPersonList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epPerson/queryAllPersonList',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "phfO":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/realName/editRealNameInfo.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./editRealNameInfo.vue?vue&type=style&index=0&lang=scss& */ "vlvO");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "urUz":
/*!*************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/realName/editRealNameInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./editRealNameInfo.vue?vue&type=script&lang=js& */ "A0uA");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_editRealNameInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "vlvO":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/epidemic/realName/editRealNameInfo.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);