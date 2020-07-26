(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-644f"],{

/***/ "0yHZ":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/scheduleManage/components/realTimeScheduleApproval.vue?vue&type=template&id=87805972& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative realTimeScheduleApprovalDiv"},[_c('div',{staticClass:"banner relative flex flex-middle flex-space-between"},[_c('colorList',{attrs:{"type":"collect"}}),_vm._v(" "),_c('div',{staticClass:"flex-end mybtn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.passFun}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger"},on:{"click":_vm.noPassFun}},[_vm._v("驳回")])],1)],1),_vm._v(" "),_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"gantt",attrs:{"id":_vm.ganttId}})])}
var staticRenderFns = []



/***/ }),

/***/ "1s5j":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/scheduleManage/components/realTimeScheduleApproval.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "EIOC":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/scheduleManage/components/realTimeScheduleApproval.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _api_project_wbs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/wbs/index */ "OtBW");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _script_ganttUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../script/ganttUtils */ "aZkf");
/* harmony import */ var _script_ganttConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../script/ganttConfig */ "nsu0");
/* harmony import */ var _colorList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./colorList */ "/oPa");

//
//
//
//
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
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    colorList: _colorList__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  directives: { waves: _directive_waves__WEBPACK_IMPORTED_MODULE_2__["default"] },
  data: function data() {
    return {
      tasks: {
        data: []
      },
      ganttId: 'realTimeScheduleApproval',
      loading: false
    };
  },
  mounted: function mounted() {
    this.initGantt();
  },


  methods: {
    initGantt: function initGantt() {
      this.wbsDataApproveList();
      Object(_script_ganttConfig__WEBPACK_IMPORTED_MODULE_6__["ganttConfig"])();

      document.getElementById(this.ganttId).style.height = document.getElementById('app').clientHeight - 270 + 'px';
      gantt.config.drag_progress = false; // 进度拖动的属性配置

      gantt.config.show_chart = false;
      window.headerClick = function (id) {
        var ele = id;
        if (ele) {
          var val = ele.getAttribute('myValue');
          if (val) {
            ele.setAttribute('myValue', '');
            ele.className = 'el-checkbox__input';
            gantt.eachTask(function (task) {
              task.approvalStatus = false;
            });
            gantt.refreshData();
          } else {
            ele.setAttribute('myValue', true);
            ele.className = 'el-checkbox__input is-checked';
            gantt.eachTask(function (task) {
              task.approvalStatus = true;
            });
            gantt.refreshData();
          }
        }
      };
      window.checkboxFun = function () {
        var id = 'checkbox' + new Date().getTime();
        return '\n        \u5BA1\u6279\n        <label role="checkbox" class="el-checkbox " aria-checked="true" >\n        <span aria-checked="mixed" class="el-checkbox__input"  id="' + id + '">\n        <span class="el-checkbox__inner"></span>\n        <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="" onclick="window.headerClick(' + id + ')">\n        </span>\n        </label>\n        ';
      };
      gantt.config.editor_types.remark = Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_5__["generateEditorTypes"])({
        map_to: 'remark',
        type: 'text',
        width: 250,
        placeholder: '请输入备注',
        where: function where(id, column, config, placeholder) {
          var task = gantt.getTask(id);
          // 只有叶子节点才有显示框
          if (task.leaf) {
            return true;
          } else {
            return false;
          }
        }
      });
      // 备注列
      var remarkEditor = {
        type: 'remark',
        map_to: 'remark'
      };
      gantt.config.columns = [{
        name: 'text',
        label: '任务名称',
        width: 280,
        template: _script_ganttUtils__WEBPACK_IMPORTED_MODULE_5__["generateTemplateLabel"],
        tree: true,
        resize: true
      },
      // { name: 'code', label: '作业代码', align: 'center', width: 100, resize: true },
      {
        name: 'duration',
        label: '工期',
        align: 'center',
        width: 120,
        resize: true
      },
      // { name: 'duration', label: '是否汇总', align: 'center', width: 100, resize: true },
      // { name: 'figureType', label: '形象类型', align: 'center', width: 100, resize: true },
      {
        name: 'unit',
        label: '单位',
        align: 'center',
        template: Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_5__["dealDictMapTemplate"])('unit', 'quantity_unit'),
        width: 80,
        resize: true
      }, {
        name: 'alwaysQuantities',
        label: '总工程量',
        align: 'center',
        width: 100,
        resize: true
      }, {
        name: 'residualQuantity',
        label: '剩余工程量',
        align: 'center',
        width: 100,
        resize: true
      }, {
        name: 'real_start_date',
        label: '实际开始',
        align: 'center',
        width: 150,
        resize: true
      }, {
        name: 'real_end_date',
        label: '实际完成',
        align: 'center',
        width: 150,
        resize: true
      }, {
        name: 'completeQuantities',
        label: '本次完成工程量',
        align: 'center',
        width: 100,
        resize: true
      }, {
        name: 'remark',
        label: '备注',
        align: 'center',
        width: 250,
        editor: remarkEditor,
        resize: true,
        template: Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_5__["canEditTemplate"])({ prop: 'remark' })
      }, {
        name: 'approval',
        align: 'center',
        label: window.checkboxFun(),
        width: 100,
        resize: true,
        template: Object(_script_ganttUtils__WEBPACK_IMPORTED_MODULE_5__["generateTemplateCheckBox"])({ prop: 'approvalStatus' })
      }];

      gantt.init(this.ganttId);
      gantt.clearAll();
    },
    wbsDataApproveList: function wbsDataApproveList() {
      var _this = this;

      this.loading = true;
      // 初始化 滚动条至 0，0
      gantt.scrollTo(0, 0);
      Object(_api_project_wbs_index__WEBPACK_IMPORTED_MODULE_3__["wbsDataApproveList"])({}).then(function (res) {
        if (res.success) {
          _this.tasks.data = res.result.map(function (item) {
            if (item.mbsId) {
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
                id: 'mbsId_' + item.parentId + '_' + item.mbsId,
                text: item.mbsName,
                realType: item.type,
                start_date: item.planStartDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"])(item.planStartDate, '{d}-{m}-{y}') : '',
                end_date: item.planEndDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"])(item.planEndDate, '{d}-{m}-{y}') : '',
                real_start_date: item.startDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"])(item.startDate, '{y}-{m}-{d}') : '',
                real_end_date: item.endDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"])(item.endDate, '{y}-{m}-{d}') : '',
                duration: item.duration ? item.duration.slice(0, -1) : '',
                parent: item.parentId,
                $open: !item.noOpen
              });
            } else {
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
                id: item.id,
                text: item.name,
                realType: item.type,
                start_date: item.planStartDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"])(item.planStartDate, '{d}-{m}-{y}') : '',
                end_date: item.planEndDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"])(item.planEndDate, '{d}-{m}-{y}') : '',
                real_start_date: item.startDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"])(item.startDate, '{y}-{m}-{d}') : '',
                real_end_date: item.endDate ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseTime"])(item.endDate, '{y}-{m}-{d}') : '',
                duration: item.duration ? item.duration.slice(0, -1) : '',
                parent: item.parentId,
                $open: !item.noOpen
              });
            }
          });
          gantt.parse(_this.tasks);
          _this.loading = false;
        }
      });
    },
    passFun: function passFun() {
      var _this2 = this;

      this.dealApproveStatus(1).then(function (res) {
        _this2.$message({
          type: 'success',
          message: '审批成功'
        });
        gantt.clearAll();
        _this2.wbsDataApproveList();
      });
    },
    noPassFun: function noPassFun() {
      var _this3 = this;

      this.dealApproveStatus(2).then(function (res) {
        _this3.$message({
          type: 'success',
          message: '驳回通过'
        });
        gantt.clearAll();
        _this3.wbsDataApproveList();
      });
    },
    dealApproveStatus: function dealApproveStatus(approveStatus) {
      var scheduleCollectList = [];
      gantt.eachTask(function (task) {
        if (task.approvalStatus && task.scheduleCollectId) {
          scheduleCollectList.push({
            id: task.scheduleCollectId,
            remark: task.remark
          });
        }
      });
      return Object(_api_project_wbs_index__WEBPACK_IMPORTED_MODULE_3__["approveScheduleCollect"])({ scheduleCollectList: scheduleCollectList, approveStatus: approveStatus });
    }
  }
});

/***/ }),

/***/ "ElIZ":
/*!***********************************************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/realTimeScheduleApproval.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./realTimeScheduleApproval.vue?vue&type=script&lang=js& */ "EIOC");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "hKrE":
/*!********************************************************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/realTimeScheduleApproval.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./realTimeScheduleApproval.vue?vue&type=style&index=0&lang=scss& */ "1s5j");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "jIXS":
/*!**********************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/realTimeScheduleApproval.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _realTimeScheduleApproval_vue_vue_type_template_id_87805972___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./realTimeScheduleApproval.vue?vue&type=template&id=87805972& */ "wCP/");
/* harmony import */ var _realTimeScheduleApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./realTimeScheduleApproval.vue?vue&type=script&lang=js& */ "ElIZ");
/* empty/unused harmony star reexport *//* harmony import */ var _realTimeScheduleApproval_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./realTimeScheduleApproval.vue?vue&type=style&index=0&lang=scss& */ "hKrE");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _realTimeScheduleApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _realTimeScheduleApproval_vue_vue_type_template_id_87805972___WEBPACK_IMPORTED_MODULE_0__["render"],
  _realTimeScheduleApproval_vue_vue_type_template_id_87805972___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "realTimeScheduleApproval.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "wCP/":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/project/scheduleManage/components/realTimeScheduleApproval.vue?vue&type=template&id=87805972& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_template_id_87805972___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./realTimeScheduleApproval.vue?vue&type=template&id=87805972& */ "0yHZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_template_id_87805972___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_realTimeScheduleApproval_vue_vue_type_template_id_87805972___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);