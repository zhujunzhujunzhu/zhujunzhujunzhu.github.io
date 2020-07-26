(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-862c"],{

/***/ "9IqD":
/*!******************************!*\
  !*** ./src/api/flowchart.js ***!
  \******************************/
/*! exports provided: getExpressionMap, save, list, deleteOpe, processExpressionList, processTypeList, processTypeSave, placeModuleList, placeModuleSave, deleteProcessType, deletePlaceModule, getExpressionList, getprocessTemplateList, getProcessTemplate, getOrgDutyTreeData, getTaskNodeList, getUserOrgDuty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpressionMap", function() { return getExpressionMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOpe", function() { return deleteOpe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processExpressionList", function() { return processExpressionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processTypeList", function() { return processTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processTypeSave", function() { return processTypeSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeModuleList", function() { return placeModuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeModuleSave", function() { return placeModuleSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProcessType", function() { return deleteProcessType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePlaceModule", function() { return deletePlaceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpressionList", function() { return getExpressionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getprocessTemplateList", function() { return getprocessTemplateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessTemplate", function() { return getProcessTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrgDutyTreeData", function() { return getOrgDutyTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskNodeList", function() { return getTaskNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserOrgDuty", function() { return getUserOrgDuty; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getExpressionMap(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/getExpressionMap',
    method: 'post',
    data: param
  });
}

function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processTemplate/save',
    method: 'post',
    data: param
  });
}

// 列表
function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/process/list',
    method: 'post',
    data: param
  });
}

// 删除
function deleteOpe(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/process/delete',
    method: 'post',
    data: param
  });
}

// 处理人表达式列表
function processExpressionList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/process/delete',
    method: 'post',
    data: param
  });
}

// 流程类型列表
function processTypeList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/list',
    method: 'post',
    data: param
  });
}
// 流程类型保存
function processTypeSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/save',
    method: 'post',
    data: param
  });
}

// 流程模块列表
function placeModuleList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/placeModuleList',
    method: 'post',
    data: param
  });
}

// 流程模块保存
function placeModuleSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/placeModuleSave',
    method: 'post',
    data: param
  });
}

// 流程类型删除
function deleteProcessType(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/delete',
    method: 'post',
    data: param
  });
}

// 流程模块删除
function deletePlaceModule(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/deletePlaceModule',
    method: 'post',
    data: param
  });
}

// 表达式列表
function getExpressionList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/list',
    method: 'post',
    data: param
  });
}

function getprocessTemplateList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processTemplate/list',
    method: 'post',
    data: param
  });
}

// 根据流程类型获取流程图

function getProcessTemplate(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processType/getProcessTemplate',
    method: 'post',
    data: param
  });
}

// 组织职责树
function getOrgDutyTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/orgDutyTreeData',
    method: 'post',
    data: param
  });
}

// 获取节点
function getTaskNodeList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processTemplate/taskNodeList',
    method: 'post',
    data: param
  });
}

// 系统组织职责列表
function getUserOrgDuty(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/processExpression/userOrgDuty',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "Eu/z":
/*!****************************************************************!*\
  !*** ./src/views/flowChart/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "eI2k");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "FRvC":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/flowChart/index.vue?vue&type=template&id=62823aca& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bpmn-wrapper cannotselect"},[_c('my-card',{staticClass:"bpmn-container",staticStyle:{"height":"75vh"},attrs:{"title":"创建流程"}},[_c('div',[_c('div',{staticClass:"menu"},[_c('div',{staticClass:"main-menu-wrapper flex-space-between flex-middle"},[_c('div',{staticClass:"main-menu flex"},_vm._l((_vm.mainMenuList),function(item,index){return _c('div',{key:index,staticClass:"pointer main-menu-tab",class:{ active: _vm.mainMenuIndex ===index },on:{"click":function($event){return _vm.changeType('mainMenuIndex',index,item)}}},[_vm._v(_vm._s(item.name))])}),0),_vm._v(" "),_c('div',{staticClass:"flex fs-9"},[_c('div',{staticClass:"btn border-right-2a71cb color-white pointer",on:{"click":function($event){return _vm.deleteMenuItem('mainMenuList')}}},[_c('i',{staticClass:"el-icon-close"}),_vm._v(" "),_c('span',[_vm._v("删除")])]),_vm._v(" "),_c('div',{staticClass:"btn border-right-2a71cb color-white pointer",on:{"click":function($event){return _vm.showMainMenuDialog('edit')}}},[_c('i',{staticClass:"el-icon-edit"}),_vm._v(" "),_c('span',[_vm._v("修改")])]),_vm._v(" "),_c('div',{staticClass:"btn color-white pointer",on:{"click":function($event){return _vm.showMainMenuDialog('add')}}},[_c('i',{staticClass:"el-icon-plus"}),_vm._v(" "),_c('span',[_vm._v("添加")])])])]),_vm._v(" "),_c('div',{staticClass:"sub-menu-wrapper flex-space-between flex-middle"},[_c('div',{staticClass:"sub-menu flex"},_vm._l((_vm.subMenuList),function(item,index){return _c('div',{key:index,staticClass:"pointer flex-center flex-middle",class:{ active:_vm.subMenuIndex ===index },on:{"click":function($event){return _vm.changeType('subMenuIndex',index)}}},[_vm._v(_vm._s(item.name))])}),0),_vm._v(" "),_c('div',{staticClass:"flex-middle"},[_c('div',{staticClass:"flex fs-9"},[_c('div',{staticClass:"btn border-right-e5e5e5 color-5b89c3 pointer",staticStyle:{"color":"e70f1b"},on:{"click":function($event){return _vm.deleteMenuItem('subMenuList')}}},[_c('i',{staticClass:"el-icon-close"}),_vm._v(" "),_c('span',[_vm._v("删除")])]),_vm._v(" "),_c('div',{staticClass:"btn border-right-e5e5e5 color-5b89c3 pointer",on:{"click":function($event){return _vm.showSubMenuDialog('edit')}}},[_c('i',{staticClass:"el-icon-edit"}),_vm._v(" "),_c('span',[_vm._v("修改")])]),_vm._v(" "),_c('div',{staticClass:"btn pointer color-5b89c3",on:{"click":function($event){return _vm.showSubMenuDialog('add')}}},[_c('i',{staticClass:"el-icon-plus"}),_vm._v(" "),_c('span',[_vm._v("添加")])])])])])]),_vm._v(" "),_c('el-form',{ref:"processInfo",staticClass:"flex-space-between plr20",attrs:{"rules":_vm.rules,"model":_vm.processInfo,"label-position":"center","size":"small","label-width":"100px"}},[_c('div',{staticClass:"flex"})])],1),_vm._v(" "),_c('Bpmn',{ref:"bpmn",attrs:{"xml-str":_vm.XmlStr},on:{"saveFun":_vm.saveFun,"bpmnClick":_vm.bpmnClick}})],1),_vm._v(" "),(_vm.mainMenuShow)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"flowchart-menu-dialog",attrs:{"title":_vm.mainMenuTitle,"visible":_vm.mainMenuShow,"append-to-body":""},on:{"update:visible":function($event){_vm.mainMenuShow=$event}}},[_c('el-form',{ref:"mainMenuRef",attrs:{"rules":_vm.mainMenuRules,"model":_vm.mainMenuForm,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"类型名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入类型名称"},model:{value:(_vm.mainMenuForm.name),callback:function ($$v) {_vm.$set(_vm.mainMenuForm, "name", $$v)},expression:"mainMenuForm.name"}})],1),_vm._v(" "),(_vm.isMainMenuAdd)?_c('el-form-item',{attrs:{"label":"类型编码","prop":"code"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","disabled":!_vm.isMainMenuAdd,"placeholder":"请输入类型编码"},model:{value:(_vm.mainMenuForm.code),callback:function ($$v) {_vm.$set(_vm.mainMenuForm, "code", $$v)},expression:"mainMenuForm.code"}})],1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.mainMenuShow = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveMainMenu}},[_vm._v("确定")])],1)],1):_vm._e(),_vm._v(" "),(_vm.subMenuShow)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"flowchart-menu-dialog",attrs:{"title":_vm.subMenuTitle,"visible":_vm.subMenuShow,"append-to-body":""},on:{"update:visible":function($event){_vm.subMenuShow=$event}}},[_c('el-form',{ref:"subMenuRef",attrs:{"rules":_vm.subMenuRules,"model":_vm.subMenuForm,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"模块名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入模块名称"},model:{value:(_vm.subMenuForm.name),callback:function ($$v) {_vm.$set(_vm.subMenuForm, "name", $$v)},expression:"subMenuForm.name"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.subMenuShow = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveSubMenu}},[_vm._v("确定")])],1)],1):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "eI2k":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/flowChart/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Bpmn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Bpmn */ "YILp");
/* harmony import */ var _components_TreeTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TreeTable */ "itRl");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _api_flowchart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/flowchart.js */ "9IqD");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ProjectFlowChart',
  components: {
    Bpmn: _components_Bpmn__WEBPACK_IMPORTED_MODULE_3__["default"],
    TreeTable: _components_TreeTable__WEBPACK_IMPORTED_MODULE_4__["default"],
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      baseInfo: {
        id: '',
        name: ''
      },
      extendedAttributes: [{
        name: '',
        value: ''
      }],
      XmlStr: '',
      dialogFormVisible: false,
      loading: false,
      processInfo: {
        name: '',
        processXml: '',
        type: '',
        projectId: '',
        deploy: false
      }, // deploy 是否发布
      rules: {
        name: [{ required: true, message: '请输入流程名称', trigger: 'blur' }]
      },
      mainMenuTitle: '流程类型添加',
      subMenuTitle: '流程模块添加',
      mainMenuList: [],
      subMenuList: [],
      mainMenuIndex: 0,
      subMenuIndex: 0,
      subMenuShow: false,
      mainMenuShow: false,
      subMenuRules: {
        name: [{ required: true, message: '请填写菜单名称' }],
        code: [{ required: true, message: '请填写菜单编码' }]
      },
      mainMenuRules: {
        name: [{ required: true, message: '请填写菜单名称' }],
        code: [{ required: true, message: '请填写菜单编码' }]
      },
      subMenuForm: {
        name: ''
      },
      mainMenuForm: {
        name: '',
        code: ''
      },
      projectId: null,
      isMainMenuAdd: true // 主菜单编辑
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(['dictMap'])),
  watch: {},
  created: function created() {
    this.initFun();
    this.getMenu();
  },
  mounted: function mounted() {},

  methods: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])(['delVisitedViews']), {
    getMenu: function getMenu() {
      var _this = this;

      Object(_api_flowchart_js__WEBPACK_IMPORTED_MODULE_8__["processTypeList"])({ projectId: this.projectId }).then(function (res) {
        if (res.success) {
          if (!res.result) return;
          _this.mainMenuList = res.result;
          if (_this.mainMenuList && _this.mainMenuList[_this.mainMenuIndex]) {
            // 给type赋初值
            _this.$set(_this.processInfo, 'type', _this.mainMenuList[_this.mainMenuIndex].code);
            _this.placeModuleList(_this.mainMenuList[_this.mainMenuIndex].id);
            // 根据流程类型获取流程
            _this.getProcessTemplate(_this.mainMenuList[_this.mainMenuIndex].code);
          }
        }
      });
    },
    getProcessTemplate: function getProcessTemplate(code) {
      var _this2 = this;

      Object(_api_flowchart_js__WEBPACK_IMPORTED_MODULE_8__["getProcessTemplate"])({ code: code, projectId: this.projectId }).then(function (res) {
        if (res.success) {
          if (!res.result) {
            // 当没有流程相关信息时
            _this2.processInfo = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this2.processInfo, {
              id: null,
              deploy: false
            });
            _this2.$refs.bpmn.setProcessInfo('');
            _this2.XmlStr = 'new';
          } else {
            _this2.processInfo = res.result;
            _this2.$refs.bpmn.setProcessInfo(_this2.processInfo.name);
            _this2.XmlStr = res.result.processXml;
          }
        }
      });
    },
    placeModuleList: function placeModuleList(processTypeId) {
      var _this3 = this;

      Object(_api_flowchart_js__WEBPACK_IMPORTED_MODULE_8__["placeModuleList"])({ processTypeId: processTypeId, projectId: this.projectId }).then(function (res) {
        if (res.success) {
          _this3.subMenuList = res.result;
        }
      });
    },
    initFun: function initFun() {
      this.XmlStr = 'new';
      var projectInfo = this.$storage.getStorage('project');
      if (projectInfo) {
        this.projectId = JSON.parse(projectInfo).id;
      }
    },
    changeType: function changeType(type, index, item) {
      this[type] = index;
      if (item) {
        this.$set(this.processInfo, 'type', item.code);
      }

      if (type === 'mainMenuIndex') {
        this.placeModuleList(this.mainMenuList[this.mainMenuIndex].id);
        this.getProcessTemplate(this.mainMenuList[this.mainMenuIndex].code);
        // 每次mainMenuIndex 切换的时候 subMenuIndex重置为1
        this.subMenuIndex = 0;
      }
    },
    saveFun: function saveFun(_ref) {
      var _this4 = this;

      var saveType = _ref.saveType,
          processName = _ref.processName;
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var deploy, back;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                deploy = false;

                if (saveType === 'deploy') {
                  deploy = true;
                }
                _context.next = 4;
                return _this4.$refs.bpmn.getAllXML();

              case 4:
                back = _context.sent;

                _this4.XmlStr = back;

                if (processName) {
                  _context.next = 9;
                  break;
                }

                _this4.$message({
                  type: 'warning',
                  message: '请输入流程名称'
                });
                return _context.abrupt('return');

              case 9:
                Object(_api_flowchart_js__WEBPACK_IMPORTED_MODULE_8__["save"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this4.processInfo, {
                  processXml: _this4.XmlStr,
                  deploy: deploy,
                  name: processName,
                  projectId: _this4.projectId
                })).then(function (res) {
                  if (res.success) {
                    if (deploy) {
                      _this4.$message({
                        message: '发布成功',
                        type: 'success'
                      });
                    } else {
                      _this4.$message({
                        message: '保存成功',
                        type: 'success'
                      });
                    }
                    if (res.result.id) {
                      _this4.processInfo.id = res.result.id;
                    }
                  }
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this4);
      }))();
    },
    deleteMenuItem: function deleteMenuItem(valName) {
      var _this5 = this;

      // 处理删除会激活的节点的问题  当为最后一个元素的时候  再次置长度 其余的情况不处理
      var dealNodeActive = function dealNodeActive(indexName) {
        if (_this5[indexName] === _this5[valName].length) {
          _this5[indexName] = _this5[valName].length - 1;
        }
      };
      // 处理流程模板及子模块问题
      var getTemplateAndModule = function getTemplateAndModule() {
        _this5.placeModuleList(_this5.mainMenuList[_this5.mainMenuIndex].id);
        _this5.getProcessTemplate(_this5.mainMenuList[_this5.mainMenuIndex].code);
      };

      var dealFun = function dealFun() {
        if (_this5[valName] && _this5[valName][0]) {
          if (valName === 'mainMenuList') {
            var mainId = _this5[valName][_this5.mainMenuIndex].id;
            Object(_api_flowchart_js__WEBPACK_IMPORTED_MODULE_8__["deleteProcessType"])({ id: mainId }).then(function (res) {
              if (res.success) {
                _this5[valName].splice(_this5.mainMenuIndex, 1);
                dealNodeActive('mainMenuIndex');
                getTemplateAndModule();
              }
            });
          } else {
            var subId = _this5[valName][_this5.subMenuIndex].id;
            Object(_api_flowchart_js__WEBPACK_IMPORTED_MODULE_8__["deletePlaceModule"])({ id: subId }).then(function (res) {
              if (res.success) {
                _this5[valName].splice(_this5.subMenuIndex, 1);
                dealNodeActive('subMenuIndex');
              }
            });
          }

          _this5.$message({
            type: 'success',
            message: '删除成功!'
          });
        }
      };

      this.$confirm('此操作将永久删除该, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        dealFun();
      }).catch(function () {
        _this5.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    showSubMenuDialog: function showSubMenuDialog(flag) {
      if (flag === 'edit') {
        this.subMenuTitle = '流程模块编辑';
        this.subMenuForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.subMenuList[this.subMenuIndex]);
      } else {
        this.subMenuTitle = '流程模块新增';
        this.subMenuForm = { name: '' };
      }
      this.subMenuShow = true;
    },
    showMainMenuDialog: function showMainMenuDialog(flag) {
      if (flag === 'edit') {
        this.isMainMenuAdd = false;
        this.mainMenuTitle = '流程类型编辑';
        this.mainMenuForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.mainMenuList[this.mainMenuIndex]);
      } else {
        this.mainMenuTitle = '流程类型新增';
        this.isMainMenuAdd = true;
        this.mainMenuForm = { name: '', code: '' };
      }
      this.mainMenuShow = true;
    },
    saveSubMenu: function saveSubMenu() {
      var _this6 = this;

      this.$refs.subMenuRef.validate(function (valid) {
        if (valid) {
          var processTypeId = _this6.mainMenuList[_this6.mainMenuIndex].id;
          Object(_api_flowchart_js__WEBPACK_IMPORTED_MODULE_8__["placeModuleSave"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this6.subMenuForm, { processTypeId: processTypeId })).then(function (res) {
            _this6.$message({
              type: 'success',
              message: '模块保存成功'
            });
            _this6.placeModuleList(processTypeId);
            _this6.subMenuShow = false;
          });
        }
      });
    },
    saveMainMenu: function saveMainMenu() {
      var _this7 = this;

      this.$refs['mainMenuRef'].validate(function (valid) {
        if (valid) {
          Object(_api_flowchart_js__WEBPACK_IMPORTED_MODULE_8__["processTypeSave"])(_this7.mainMenuForm).then(function (res) {
            if (res.success) {
              if (!res.result) return;
              _this7.$message({
                type: 'success',
                message: '类型保存成功'
              });

              _this7.$refs.bpmn.setProcessInfo('');
              _this7.XmlStr = 'new';
              if (_this7.isMainMenuAdd) {
                _this7.AddMainMenu(res);
              } else {
                _this7.editMainMenu(res);
              }
              _this7.getMenu();
              _this7.mainMenuShow = false;
            }
          });
        }
      });
    },

    // 编辑的处理
    editMainMenu: function editMainMenu(res) {
      this.processInfo = { type: res.result.code };
    },

    // 新增的处理
    AddMainMenu: function AddMainMenu(res) {
      // 跟上  此时mainMenuList 还是更新之前的mainMenuList
      this.mainMenuIndex = this.mainMenuList.length;
      this.processInfo = { type: res.result.code };
    },
    releaseFun: function releaseFun() {},
    bpmnClick: function bpmnClick() {}
  })
});

/***/ }),

/***/ "iJ5A":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/flowChart/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "jr1U":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/concat.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/concat */ "wObO"), __esModule: true };

/***/ }),

/***/ "nfAv":
/*!**********************************************************************!*\
  !*** ./src/views/flowChart/index.vue?vue&type=template&id=62823aca& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62823aca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=62823aca& */ "FRvC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62823aca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62823aca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "vbho":
/*!***************************************!*\
  !*** ./src/views/flowChart/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_62823aca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=62823aca& */ "nfAv");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "Eu/z");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "z9hr");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_62823aca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_62823aca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "wObO":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// for a legacy code and future fixes
module.exports = function(){
  return Function.call.apply(Array.prototype.concat, arguments);
};

/***/ }),

/***/ "z9hr":
/*!*************************************************************************!*\
  !*** ./src/views/flowChart/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "iJ5A");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);