(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-6d46"],{

/***/ "BwK0":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/scheduleManage/components/realTimeScheduleCollect.vue?vue&type=template&id=f1f7dbb4& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"realTimeScheduleCollectDiv"},[_c('div',{staticClass:"flex flex-space-between"},[_c('div',{staticClass:"banner flex flex-middle"},[_c('el-select',{attrs:{"placeholder":"请选择标段"},on:{"change":_vm.getBid},model:{value:(_vm.listQuery.tendersId),callback:function ($$v) {_vm.$set(_vm.listQuery, "tendersId", $$v)},expression:"listQuery.tendersId"}},_vm._l((_vm.bidOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1),_vm._v(" "),_c('colorList',{attrs:{"type":"collect"}})],1),_vm._v(" "),_c('div',{staticClass:"flex-end flex-middle"},[_c('div',{staticClass:"flex-end mybtns"},[(_vm.isMore)?_c('el-button',{attrs:{"type":"text"},on:{"click":_vm.goBack}},[_vm._v("< 返回")]):_c('el-button',{attrs:{"type":"text"},on:{"click":_vm.goMore}},[_vm._v("更多 >")])],1)])]),_vm._v(" "),_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"gantt",attrs:{"id":_vm.ganttId}})])}
var staticRenderFns = []



/***/ }),

/***/ "GngU":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/scheduleManage/components/realTimeScheduleCollect.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Lnb2":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/realTimeScheduleCollect.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./realTimeScheduleCollect.vue?vue&type=style&index=0&lang=scss& */ "GngU");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "TFJ+":
/*!*********************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/realTimeScheduleCollect.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _realTimeScheduleCollect_vue_vue_type_template_id_f1f7dbb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./realTimeScheduleCollect.vue?vue&type=template&id=f1f7dbb4& */ "ozDG");
/* harmony import */ var _realTimeScheduleCollect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./realTimeScheduleCollect.vue?vue&type=script&lang=js& */ "yvmZ");
/* empty/unused harmony star reexport *//* harmony import */ var _realTimeScheduleCollect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./realTimeScheduleCollect.vue?vue&type=style&index=0&lang=scss& */ "Lnb2");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _realTimeScheduleCollect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _realTimeScheduleCollect_vue_vue_type_template_id_f1f7dbb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _realTimeScheduleCollect_vue_vue_type_template_id_f1f7dbb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "realTimeScheduleCollect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "gxOG":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/scheduleManage/components/realTimeScheduleCollect.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _api_project_wbs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/project/wbs/index */ "OtBW");
/* harmony import */ var _colorList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colorList */ "/oPa");
/* harmony import */ var _script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../script/ganttUtils */ "aZkf");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _script_ganttConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../script/ganttConfig */ "nsu0");
/* harmony import */ var _utils_process__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/process */ "q7Rq");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_3__["default"],
    colorList: _colorList__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  directives: { waves: _directive_waves__WEBPACK_IMPORTED_MODULE_4__["default"] },
  data: function data() {
    return {
      tasks: {
        data: []
      },
      ganttId: 'realTimeScheduleCollect',
      loading: false,
      isMore: false,
      buttonStatus: 0,
      posX: 0,
      posY: 0,
      bidOptions: [],
      listQuery: {
        tendersId: null,
        allPlanStatus: 1
      }
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    this.getBidOptions().then(function (res) {
      _this2.initGantt();
    });
  },
  destroyed: function destroyed() {
    gantt.clearAll();
  },


  methods: {
    getBidOptions: function getBidOptions() {
      var _this3 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', Object(_api_project_wbs_index__WEBPACK_IMPORTED_MODULE_5__["userTenders"])({}).then(function (res) {
                  if (res.success) {
                    if (!res.result) return;
                    _this3.bidOptions = res.result;
                    if (_this3.bidOptions[0]) {
                      _this3.listQuery.tendersId = _this3.bidOptions[0].id;
                    } else {
                      _this3.listQuery.tendersId = null;
                    }
                  }
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))();
    },
    getBid: function getBid(val) {
      if (!val) {
        this.listQuery.allPlanStatus = 1;
      } else {
        delete this.listQuery.allPlanStatus;
      }
      // 重新进行视图的初始化
      this.initGantt();
    },
    dealTime: function dealTime(time) {
      var diff = new Date(time).getTime() - new Date().getTime();
      if (diff < 0) {
        return false;
      } else {
        return true;
      }
    },
    initGantt: function initGantt() {
      Object(_script_ganttConfig__WEBPACK_IMPORTED_MODULE_9__["ganttConfig"])();
      gantt.config.show_chart = false;
      document.getElementById(this.ganttId).style.height = document.getElementById('app').clientHeight - 270 + 'px';
      var _this = this;
      var typeConfig = {
        type: 'date',
        where: function where(id, column, config, placeholder) {
          var task = gantt.getTask(id);
          // 只有叶子节点才有显示框
          if (task.leaf) {
            return true;
          } else {
            return false;
          }
        }
      };

      gantt.config.editor_types.realStartDate = Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["generateEditorTypes"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, typeConfig, {
        map_to: 'real_start_date',
        defaultValue: Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(new Date(), '{y}-{m}-{d}'),
        validFun: function validFun(value) {
          if (value) {
            if (_this.dealTime(value)) {
              _this.$message({
                type: 'warning',
                message: '时间不能在今天之后'
              });
              return false;
            }
            return true;
          } else {
            return true;
          }
        },
        is_changed: function is_changed(value, id, column, node) {
          var task = gantt.getTask(id);
          _this.scheduleCollectSave(task).then(function (res) {
            if (!res.success) {
              task.real_start_date = '';
              gantt.updateTask(task.id);
            }
          });
        }
      }));
      gantt.config.editor_types.realEndDate = Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["generateEditorTypes"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, typeConfig, {
        map_to: 'real_end_date',
        defaultValue: Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(new Date(), '{y}-{m}-{d}'),
        validFun: function validFun(value) {
          if (value) {
            if (_this.dealTime(value)) {
              _this.$message({
                type: 'warning',
                message: '时间不能在今天之后'
              });
              return false;
            }
            return true;
          } else {
            return true;
          }
        },
        is_changed: function is_changed(value, id, column, node) {
          var task = gantt.getTask(id);
          _this.scheduleCollectSave(task).then(function (res) {
            if (!res.success) {
              task.real_end_date = '';
              gantt.updateTask(task.id);
            }
          });
        }
      }));

      gantt.config.editor_types.completeQuantities = Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["generateEditorTypes"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, typeConfig, {
        map_to: 'completeQuantities',
        type: 'text',
        is_changed: function is_changed(value, id, column, node) {
          if (value) {
            var task = gantt.getTask(id);
            _this.scheduleCollectSave(task).then(function (res) {
              if (!res.success) {
                task.completeQuantities = '';
                gantt.updateTask(task.id);
              }
            });
          }
        }
      }));

      gantt.config.editor_types.remark = Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["generateEditorTypes"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, typeConfig, {
        map_to: 'remark',
        type: 'text',
        width: 250,
        placeholder: '请输入备注',
        is_changed: function is_changed(value, id, column, node) {
          if (value) {
            var task = gantt.getTask(id);
            _this.scheduleCollectSave(task).then(function (res) {
              if (!res.success) {
                task.remark = '';
                gantt.updateTask(task.id);
              }
            });
          }
        }
      }));

      // 处理总工程量编辑
      gantt.config.editor_types.alwaysQuantities = Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["generateEditorTypes"])({
        map_to: 'alwaysQuantities',
        where: function where(id, column, config, placeholder) {
          var task = gantt.getTask(id);
          // 只有mbs节点才有显示框
          if (task.mbsId) {
            return true;
          } else {
            return false;
          }
        },

        type: 'text',
        is_changed: function is_changed(value, id, column, node) {
          if (value) {
            var task = gantt.getTask(id);
            _this.updateWbsQuantities(task).then(function (res) {
              if (!res.success) {
                task.alwaysQuantities = '';
                gantt.updateTask(task.id);
              }
            });
          }
        }
      });

      var alwaysQuantitiesEditor = {
        type: 'alwaysQuantities',
        map_to: 'alwaysQuantities'
      };

      var realStartDateEditor = {
        type: 'realStartDate',
        map_to: 'real_start_date'
      };
      var realEndDateEditor = {
        type: 'realEndDate',
        map_to: 'real_end_date'
        // const realEndDateEditor = { type: 'date', map_to: 'real_end_date' }

      };var completeQuantitiesEditor = {
        type: 'completeQuantities',
        map_to: 'completeQuantities'

        // 备注列
        // const remarkEditor = {
        //   type: 'remark',
        //   map_to: 'remark'
        // }
        // const textEditor = { type: 'text', map_to: 'residualQuantity' }
      };gantt.config.columns = [{
        name: 'text',
        label: '任务名称',
        width: 280,
        template: _script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["generateTemplateLabel"],
        tree: true,
        resize: true
      },
      // {
      //   name: 'code',
      //   label: '作业代码',
      //   align: 'center',
      //   width: 100,
      //   resize: true
      // },
      // {
      //   name: 'figureType',
      //   label: '形象类型',
      //   align: 'center',
      //   width: 100,
      //   resize: true
      // },
      {
        name: 'unit',
        label: '单位',
        align: 'center',
        template: Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["dealDictMapTemplate"])('unit', 'quantity_unit'),
        width: 100,
        resize: true
      }, {
        name: 'alwaysQuantities',
        label: '总工程量',
        align: 'center',
        width: 100,
        resize: true,
        editor: alwaysQuantitiesEditor,
        template: Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["canEditTemplate"])({
          prop: 'alwaysQuantities',
          filter: function filter(val) {
            if (val.mbsId) {
              // 只有mbs节点才可以编辑
              return true;
            } else {
              return false;
            }
          }
        })
      }, {
        name: 'residualQuantity',
        label: '剩余工程量',
        align: 'center',
        width: 100,
        resize: true
      },
      // { name: 'residualQuantity', label: '剩余工程量', align: 'center', editor: textEditor, width: 100, resize: true },
      {
        name: 'real_start_date',
        label: '实际开始',
        align: 'center',
        width: 150,
        editor: realStartDateEditor,
        resize: true,
        template: Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["canEditTemplate"])({ prop: 'real_start_date' })
      }, {
        name: 'real_end_date',
        label: '实际完成',
        align: 'center',
        width: 150,
        editor: realEndDateEditor,
        resize: true,
        template: Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["canEditTemplate"])({ prop: 'real_end_date' })
      }, {
        name: 'completeQuantities',
        label: '本次完成工程量',
        align: 'center',
        width: 200,
        editor: completeQuantitiesEditor,
        resize: true,
        template: Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["canEditTemplate"])({ prop: 'completeQuantities' })
      }, {
        name: 'remark',
        label: '备注',
        align: 'center',
        width: 250,
        resize: true
        // editor: remarkEditor,
        // resize: true,
        // template: canEditTemplate({ prop: 'remark' })
      }, {
        label: '撤消',
        align: 'center',
        width: 100,
        resize: true,
        template: Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_7__["generateTemplateOperate"])({
          list: [{
            iconClass: 'iconfont iconchexiao-',
            name: '回撤',
            code: 'reset'
          }],
          filter: function filter(list, obj) {
            if (!(obj.state === 0 || obj.state === 2)) {
              list = [];
            }
            return list;
          },
          click: function click(obj, e, code) {
            if (code === 'reset') {
              var successCB = function successCB() {
                _this.$message({
                  type: 'success',
                  message: '撤消成功'
                });
                _this.getScrollState();
                _this.reportDataList();
              };
              Object(_utils_process__WEBPACK_IMPORTED_MODULE_10__["deleteFun"])({
                api: _api_project_wbs_index__WEBPACK_IMPORTED_MODULE_5__["reportRollback"],
                placeholder: '是否进行回撤操作?',
                params: { id: obj.scheduleCollectId },
                successCB: successCB
              });
            }
          }
        })
      }];

      gantt.init(this.ganttId);

      this.reportDataList();
    },
    getScrollState: function getScrollState() {
      var sPos = gantt.getScrollState();
      this.posY = sPos.y;
      this.posX = sPos.x;
    },
    reportDataList: function reportDataList() {
      var _this4 = this;

      this.loading = true;
      // 初始化 滚动条至 0，0
      gantt.scrollTo(0, 0);
      Object(_api_project_wbs_index__WEBPACK_IMPORTED_MODULE_5__["reportDataList"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        buttonStatus: this.buttonStatus
      }, this.listQuery)).then(function (res) {
        if (res.success) {
          var data = res.result.map(function (item) {
            if (item.mbsId) {
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
                id: 'mbsId_' + item.parentId + '_' + item.mbsId,
                text: item.mbsName,
                realType: item.type,
                start_date: item.planStartDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.planStartDate, '{d}-{m}-{y}') : '',
                end_date: item.planEndDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.planEndDate, '{d}-{m}-{y}') : '',
                real_start_date: item.startDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.startDate, '{y}-{m}-{d}') : '',
                real_end_date: item.endDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.endDate, '{y}-{m}-{d}') : '',
                duration: item.duration ? item.duration.slice(0, -1) : '',
                parent: item.parentId,
                $open: !item.noOpen
              });
            } else {
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
                id: item.id,
                text: item.name,
                realType: item.type,
                start_date: item.planStartDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.planStartDate, '{d}-{m}-{y}') : '',
                end_date: item.planEndDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.planEndDate, '{d}-{m}-{y}') : '',
                real_start_date: item.startDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.startDate, '{y}-{m}-{d}') : '',
                real_end_date: item.endDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.endDate, '{y}-{m}-{d}') : '',
                duration: item.duration ? item.duration.slice(0, -1) : '',
                parent: item.parentId,
                $open: !item.noOpen
              });
            }
          });
          _this4.tasks.data = data;
          gantt.clearAll();
          gantt.parse(_this4.tasks);
          gantt.scrollTo(_this4.posX, _this4.posY);
          _this4.loading = false;
        }
      });
    },


    /** 更新总工程量
     * @function updateWbsQuantities
     */
    updateWbsQuantities: function updateWbsQuantities(task) {
      var params = {};

      if (task.mbsWbsId) {
        params = {
          mbsWbsId: task.mbsWbsId,
          alwaysQuantities: task.alwaysQuantities
        };
      } else {
        params = {
          wbsId: task.id,
          alwaysQuantities: task.alwaysQuantities
        };
      }
      return Object(_api_project_wbs_index__WEBPACK_IMPORTED_MODULE_5__["updateWbsQuantities"])(params);
    },
    scheduleCollectSave: function scheduleCollectSave(task) {
      var _this5 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var params, taskObj, res;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = {};


                if (task.mbsWbsId) {
                  params = {
                    startDate: task.real_start_date,
                    endDate: task.real_end_date,
                    completeQuantities: task.completeQuantities,
                    mbsWbsId: task.mbsWbsId,
                    wbsId: task.wbsId,
                    id: task.scheduleCollectId,
                    remark: task.remark
                  };
                } else {
                  params = {
                    startDate: task.real_start_date,
                    endDate: task.real_end_date,
                    completeQuantities: task.completeQuantities,
                    wbsId: task.wbsId,
                    id: task.scheduleCollectId,
                    remark: task.remark
                  };
                }
                taskObj = gantt.getTask(task.id);
                _context2.next = 5;
                return Object(_api_project_wbs_index__WEBPACK_IMPORTED_MODULE_5__["scheduleCollectSave"])(params);

              case 5:
                res = _context2.sent;

                if (res.success) {
                  taskObj.scheduleCollectId = res.result.id;
                  gantt.updateTask(taskObj.id);
                }
                return _context2.abrupt('return', res);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this5);
      }))();
    },
    resetScoll: function resetScoll() {
      this.posX = 0;
      this.posY = 0;
    },
    goMore: function goMore() {
      this.resetScoll();
      this.buttonStatus = 1;
      this.isMore = true;
      this.reportDataList();
    },
    goBack: function goBack() {
      this.resetScoll();
      this.buttonStatus = 0;
      this.isMore = false;
      this.reportDataList();
    }
  }
});

/***/ }),

/***/ "ozDG":
/*!****************************************************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/realTimeScheduleCollect.vue?vue&type=template&id=f1f7dbb4& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_template_id_f1f7dbb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./realTimeScheduleCollect.vue?vue&type=template&id=f1f7dbb4& */ "BwK0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_template_id_f1f7dbb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_template_id_f1f7dbb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "yvmZ":
/*!**********************************************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/realTimeScheduleCollect.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./realTimeScheduleCollect.vue?vue&type=script&lang=js& */ "gxOG");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleCollect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);