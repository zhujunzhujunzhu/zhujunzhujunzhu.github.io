(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-2f9d"],{

/***/ "9Zcv":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/fullLineModel/components/viewPoint.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "MgzQ":
/*!*****************************************************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/viewPoint.vue?vue&type=template&id=6f186eb0& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_template_id_6f186eb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewPoint.vue?vue&type=template&id=6f186eb0& */ "VRPd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_template_id_6f186eb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_template_id_6f186eb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "UkBW":
/*!**********************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/viewPoint.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewPoint_vue_vue_type_template_id_6f186eb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewPoint.vue?vue&type=template&id=6f186eb0& */ "MgzQ");
/* harmony import */ var _viewPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewPoint.vue?vue&type=script&lang=js& */ "wa+5");
/* empty/unused harmony star reexport *//* harmony import */ var _viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewPoint.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "tpd6");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _viewPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewPoint_vue_vue_type_template_id_6f186eb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viewPoint_vue_vue_type_template_id_6f186eb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "viewPoint.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "VRPd":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/fullLineModel/components/viewPoint.vue?vue&type=template&id=6f186eb0& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"viewPointDiv drawer-wrap"},[_c('label',{staticClass:"titleLabel"},[_vm._v("视口")]),_vm._v(" "),_c('div',{staticClass:"flex flex-middle"},[_c('el-radio-group',{staticClass:"block ml10 flex1",attrs:{"size":"mini"},on:{"change":_vm.changeSourceType},model:{value:(_vm.listQuery.sourceType),callback:function ($$v) {_vm.$set(_vm.listQuery, "sourceType", $$v)},expression:"listQuery.sourceType"}},[_c('el-radio-button',{attrs:{"label":"Project"}},[_vm._v("项目")]),_vm._v(" "),_c('el-radio-button',{attrs:{"label":"Tenders"}},[_vm._v("标段")]),_vm._v(" "),_c('el-radio-button',{attrs:{"label":"WorkPoint"}},[_vm._v("工点")])],1),_vm._v(" "),(_vm.list.length < 2)?_c('el-button',{staticClass:"btn",attrs:{"size":"mini"},on:{"click":_vm.addView}},[_vm._v("新建\n    ")]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"flex"},[(_vm.listQuery.sourceType=='WorkPoint')?_c('el-select',{staticStyle:{"margin-top":"10px","margin-left":"10px"},attrs:{"size":"mini","placeholder":"请选择工点"},on:{"change":_vm.changeWorkPointId},model:{value:(_vm.sourceId),callback:function ($$v) {_vm.sourceId=$$v},expression:"sourceId"}},_vm._l((_vm.workPointList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1):_vm._e(),_vm._v(" "),(_vm.listQuery.sourceType=='Tenders')?_c('el-select',{staticStyle:{"margin-top":"10px","margin-left":"10px"},attrs:{"size":"mini","placeholder":"请选择标段"},on:{"change":_vm.changeWorkPointId},model:{value:(_vm.sourceId),callback:function ($$v) {_vm.sourceId=$$v},expression:"sourceId"}},_vm._l((_vm.tendersList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1):_vm._e()],1),_vm._v(" "),_vm._l((_vm.list),function(item,index){return [(item.name)?_c('div',{key:index,staticClass:"contentDiv flex",on:{"click":function($event){return _vm.goView(index)}}},[_c('img',{attrs:{"src":_vm.fileUrl+'img/'+ item.pic}}),_vm._v(" "),_c('div',{staticClass:"flex1"},[_c('div',{staticClass:"flex"},[_c('label',{staticClass:"flex1"},[_vm._v(_vm._s(item.name))])]),_vm._v(" "),_c('el-button',{staticClass:"btn",attrs:{"size":"mini"},on:{"click":[function($event){return _vm.updateView(index)},function($event){$event.stopPropagation();}]}},[_vm._v("\n          修改\n        ")])],1)]):_vm._e()]}),_vm._v(" "),_c('el-dialog',{staticClass:"viewPointDialog",attrs:{"title":" 新建视点","append-to-body":"","close-on-click-modal":false,"visible":_vm.dialogFormVisible,"width":"340px"},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('img',{attrs:{"src":_vm.dataURL}}),_vm._v(" "),_c('el-form',{ref:"viewForm",attrs:{"model":_vm.viewForm,"rules":_vm.rules,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"视点名称","prop":"name"}},[_c('el-input',{attrs:{"type":"text","placeholder":"请输入视点名称"},model:{value:(_vm.viewForm.name),callback:function ($$v) {_vm.$set(_vm.viewForm, "name", $$v)},expression:"viewForm.name"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[(_vm.listQuery.sourceType=='WorkPoint')?_c('el-form-item',{attrs:{"label":"所属工点","prop":"workPointId"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请选择工点"},model:{value:(_vm.viewForm.workPointId),callback:function ($$v) {_vm.$set(_vm.viewForm, "workPointId", $$v)},expression:"viewForm.workPointId"}},_vm._l((_vm.workPointList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1):_vm._e(),_vm._v(" "),(_vm.listQuery.sourceType=='Tenders')?_c('el-form-item',{attrs:{"label":"所属标段","prop":"workPointId"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请选择标段"},model:{value:(_vm.viewForm.workPointId),callback:function ($$v) {_vm.$set(_vm.viewForm, "workPointId", $$v)},expression:"viewForm.workPointId"}},_vm._l((_vm.tendersList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1):_vm._e()],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary"},on:{"click":_vm.saveView}},[_vm._v("提交\n      ")])],1)],1)],2)}
var staticRenderFns = []



/***/ }),

/***/ "rpz8":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/fullLineModel/components/viewPoint.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/doc */ "5HWN");
/* harmony import */ var _api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/bimViews */ "1O3d");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _api_project_workPoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/project/workPoint */ "15Ai");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _api_project_qbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/project/qbs */ "BJKi");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ViewpointManage',
  components: {},
  directives: {
    buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_6__["default"], waves: _directive_waves__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    linkType: {
      type: String,
      default: 'fullLineModel'
    }
  },
  data: function data() {
    return {
      dialogFormVisible: false,
      dataURL: null,
      viewForm: {
        id: null,
        name: '',
        camera: null,
        viewInfo: null,
        pic: null,
        workPointId: null
      },
      rules: {
        name: [{ required: true, message: '请输入视点名称', trigger: 'blur' }],
        workPointId: [{ required: true, message: '请选择工点', trigger: 'change' }]
      },
      listQuery: {
        linkType: null,
        sourceId: JSON.parse(this.$storage.getStorage('project')).id,
        sourceType: 'Project'
      },
      list: [],
      update: true,
      testList: [],
      workPointList: [],
      tendersList: [],
      sourceId: null
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['fileUrl', 'isFull'])),
  watch: {},
  mounted: function mounted() {
    this.listQuery.linkType = this.linkType;
    if (!this.isFull) {
      document.getElementsByClassName('viewPointDiv')[0].style.height = document.documentElement.clientHeight - 159 + 'px';
    } else {
      document.getElementsByClassName('viewPointDiv')[0].style.height = 'calc(100% - 30px)';
    }
    // 获取工点
    this.getWorkPointList();
    this.getAuthTenders();
    this.getList();
  },

  methods: {
    changeSourceType: function changeSourceType() {
      if (this.listQuery.sourceType === 'WorkPoint') {
        this.sourceId = this.workPointList[0] ? this.workPointList[0].id : null;
        this.rules['workPointId'] = [{ required: true, message: '请选择工点', trigger: 'change' }];
      } else if (this.listQuery.sourceType === 'Tenders') {
        this.sourceId = this.tendersList[0] ? this.tendersList[0].id : null;
        this.rules['workPointId'] = [{ required: true, message: '请选择标段', trigger: 'change' }];
      } else {
        this.rules['workPointId'] = null;
      }
      this.listQuery = {
        linkType: this.linkType,
        sourceId: this.listQuery.sourceType === 'Project' ? JSON.parse(this.$storage.getStorage('project')).id : this.sourceId,
        sourceType: this.listQuery.sourceType
      };
      this.getList();
    },
    changeWorkPointId: function changeWorkPointId() {
      this.listQuery = {
        linkType: this.linkType,
        sourceId: this.sourceId,
        sourceType: this.listQuery.sourceType
      };
      this.getList();
    },
    getAuthTenders: function getAuthTenders() {
      var _this = this;

      Object(_api_project_qbs__WEBPACK_IMPORTED_MODULE_8__["getAuthTenders"])({}).then(function (res) {
        if (res.success) {
          _this.tendersList = res.result;
        }
      });
    },
    getWorkPointList: function getWorkPointList() {
      var _this2 = this;

      Object(_api_project_workPoint__WEBPACK_IMPORTED_MODULE_5__["getWorkPointList"])({}).then(function (res) {
        if (res.success) {
          _this2.workPointList = res.result.list;
        }
      });
    },
    getList: function getList() {
      var _this3 = this;

      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["queryBimViewpoints"])(this.listQuery).then(function (res) {
        if (res.success) {
          _this3.list = res.result;
          _this3.list.push({});
          _this3.$forceUpdate();
        }
      });
    },
    reset: function reset() {
      this.viewForm = {
        id: null,
        name: '',
        camera: null,
        viewInfo: null,
        pic: null,
        workPointId: null
      };
      this.dataURL = null;
    },
    saveView: function saveView() {
      var _this4 = this;

      this.$refs['viewForm'].validate(function (valid) {
        if (valid) {
          // 先上传图片
          _this4.loading = true;
          var formData = new FormData();
          formData.append('attach', Object(_utils__WEBPACK_IMPORTED_MODULE_4__["dataURLtoBlob"])(_this4.dataURL));
          Object(_api_doc__WEBPACK_IMPORTED_MODULE_2__["uploadImg"])(formData).then(function (res) {
            if (res.success) {
              _this4.viewForm.pic = res.result;
              Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["saveBimViewPoint"])(_this4.viewForm).then(function (res) {
                if (res.success) {
                  if (!_this4.viewForm.id) {
                    // 调用保存关系
                    var params = {
                      assetId: res.result.id,
                      assetType: 'BimViewpoint',
                      linkType: 'fullLineModel'
                    };
                    if (_this4.listQuery.sourceType === 'Project') {
                      params.sourceList = [{
                        sourceId: JSON.parse(_this4.$storage.getStorage('project')).id,
                        sourceType: _this4.listQuery.sourceType
                      }];
                    } else {
                      params.sourceList = [{
                        sourceId: _this4.viewForm.workPointId,
                        sourceType: _this4.listQuery.sourceType
                      }];
                    }
                    Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["saveAssetBind"])(params).then(function (res) {
                      if (res.success) {
                        _this4.$message.success(res.message);
                        _this4.reset();
                        _this4.dialogFormVisible = false;
                        _this4.loading = false;
                        _this4.getList();
                      }
                    });
                  } else {
                    _this4.$message.success(res.message);
                    _this4.reset();
                    _this4.dialogFormVisible = false;
                    _this4.loading = false;
                    _this4.getList();
                  }
                }
              });
            }
          });
        }
      });
    },
    updateView: function updateView(num) {
      this.viewForm = this.list[num];
      this.viewForm.workPointId = this.sourceId;
      if (this.listQuery.sourceType === 'WorkPoint') {
        this.rules['workPointId'] = [{ required: true, message: '请选择工点', trigger: 'change' }];
      } else if (this.listQuery.sourceType === 'Tenders') {
        this.rules['workPointId'] = [{ required: true, message: '请选择标段', trigger: 'change' }];
      } else {
        this.rules['workPointId'] = null;
      }
      var viewPoint = this.$parent.$refs['cesium'].saveViewPoint();
      this.dataURL = viewPoint.dataURL;
      this.viewForm.camera = {
        direction: viewPoint.direction,
        position: viewPoint.position,
        up: viewPoint.up
      };
      this.dialogFormVisible = true;
    },
    deleteView: function deleteView(id) {
      var _this5 = this;

      this.$confirm('是否确定删除该视口?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["deleteViewPoint"])({ id: id }).then(function (res) {
          if (res.success) {
            _this5.$message.success(res.message);
            _this5.getList();
          }
        });
      });
    },

    // 渲染View
    goView: function goView(num) {
      this.$parent.$refs['cesium'].flyTo(JSON.parse(this.list[num].camera));
    },
    addView: function addView() {
      this.viewForm.workPointId = this.sourceId;
      var viewPoint = this.$parent.$refs['cesium'].saveViewPoint();
      this.dataURL = viewPoint.dataURL;
      this.viewForm.camera = {
        direction: viewPoint.direction,
        position: viewPoint.position,
        up: viewPoint.up
      };
      this.dialogFormVisible = true;
      this.$forceUpdate();
    }
  }
});

/***/ }),

/***/ "tpd6":
/*!******************************************************************************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/viewPoint.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewPoint.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "9Zcv");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "wa+5":
/*!***********************************************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/viewPoint.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewPoint.vue?vue&type=script&lang=js& */ "rpz8");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);