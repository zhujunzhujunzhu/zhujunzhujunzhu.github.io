(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-60d3"],{

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

/***/ "A+6S":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectList.vue?vue&type=template&id=19bfcf28& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container projectListDiv"},[_c('my-card',{attrs:{"title":"项目列表"}},[_c('div',{staticClass:"filter-container"},[_c('el-input',{staticClass:"filter-item",staticStyle:{"width":"200px"},attrs:{"placeholder":"项目名称"},model:{value:(_vm.listQuery.name),callback:function ($$v) {_vm.$set(_vm.listQuery, "name", $$v)},expression:"listQuery.name"}}),_vm._v(" "),_c('div',{staticClass:"filter-item",staticStyle:{"width":"200px"}},[_c('treeselect',{attrs:{"options":_vm.orgList,"normalizer":_vm.normalizer,"placeholder":"请选择组织","no-children-text":"无选择"},model:{value:(_vm.listQuery.orgId),callback:function ($$v) {_vm.$set(_vm.listQuery, "orgId", $$v)},expression:"listQuery.orgId"}})],1),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item projectButton",attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":_vm.search}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addProject}},[_vm._v("添加")])],1),_vm._v(" "),_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.list,"columns":_vm.columns,"list-loading":_vm.listLoading,"total":_vm.total,"page-size":_vm.listQuery.pageSize},on:{"currentChange":_vm.currentChange}})],1),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":_vm.textMap[_vm.dialogStatus],"visible":_vm.dialogFormVisible,"close-on-click-modal":false},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"projectForm",attrs:{"rules":_vm.rules,"model":_vm.projectForm,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"项目名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入项目名称"},model:{value:(_vm.projectForm.name),callback:function ($$v) {_vm.$set(_vm.projectForm, "name", $$v)},expression:"projectForm.name"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"项目短名称","prop":"shortName"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入项目短名称"},model:{value:(_vm.projectForm.shortName),callback:function ($$v) {_vm.$set(_vm.projectForm, "shortName", $$v)},expression:"projectForm.shortName"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{staticClass:"filter-item",attrs:{"label":"计划起始时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:(_vm.projectForm.planStartAndEndDate),callback:function ($$v) {_vm.$set(_vm.projectForm, "planStartAndEndDate", $$v)},expression:"projectForm.planStartAndEndDate"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{staticClass:"filter-item",attrs:{"label":"开工竣工日期"}},[_c('el-date-picker',{attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:(_vm.projectForm.startAndEndDate),callback:function ($$v) {_vm.$set(_vm.projectForm, "startAndEndDate", $$v)},expression:"projectForm.startAndEndDate"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"组织","prop":"type"}},[_c('treeselect',{attrs:{"options":_vm.orgList,"normalizer":_vm.normalizer,"placeholder":"请选择组织","no-children-text":"无选择"},model:{value:(_vm.projectForm.orgId),callback:function ($$v) {_vm.$set(_vm.projectForm, "orgId", $$v)},expression:"projectForm.orgId"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"状态","prop":"status"}},[_c('el-select',{attrs:{"placeholder":"请输入状态"},model:{value:(_vm.projectForm.status),callback:function ($$v) {_vm.$set(_vm.projectForm, "status", $$v)},expression:"projectForm.status"}},_vm._l((_vm.dictMap['project_status']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"textarea","rows":3,"autosize":"","placeholder":"请输入备注"},model:{value:(_vm.projectForm.remark),callback:function ($$v) {_vm.$set(_vm.projectForm, "remark", $$v)},expression:"projectForm.remark"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"位置","prop":"location"}},[_c('position-select',{attrs:{"location":_vm.projectForm.location,"is-choose":_vm.isChoose},on:{"getLocation":_vm.getLocation}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"轮播图上传","prop":"docId"}},[_c('fm-upload',{ref:"fmUpload",attrs:{"length":_vm.file.length,"is-file":_vm.file.isFile,"file-name":_vm.file.fileName,"file-ok-list":_vm.fileList},model:{value:(_vm.projectForm.docId),callback:function ($$v) {_vm.$set(_vm.projectForm, "docId", $$v)},expression:"projectForm.docId"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.saveProject}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.projectDialogVisible)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":"结构配置","visible":_vm.projectDialogVisible,"close-on-click-modal":false},on:{"update:visible":function($event){_vm.projectDialogVisible=$event}}},[_c('el-form',{ref:"structureForm",attrs:{"rules":_vm.structureRules,"model":_vm.structureForm,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"上级结构","prop":"parentName"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"","disabled":true},model:{value:(_vm.structureForm.parentName),callback:function ($$v) {_vm.$set(_vm.structureForm, "parentName", $$v)},expression:"structureForm.parentName"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"结构名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入结构名称"},model:{value:(_vm.structureForm.name),callback:function ($$v) {_vm.$set(_vm.structureForm, "name", $$v)},expression:"structureForm.name"}})],1)],1),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{"margin-left":"20px","margin-top":"3px"},attrs:{"type":"primary","loading":_vm.loading,"size":"mini"},on:{"click":_vm.saveStructure}},[_vm._v("提交")])],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":16}},[_c('el-tree',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"tree",staticStyle:{"margin-left":"8px"},attrs:{"props":_vm.props,"data":_vm.structureList,"node-key":"id","expand-on-click-node":false},on:{"node-expand":_vm.handleNodeExpand},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var node = ref.node;
var data = ref.data;
return _c('span',{staticClass:"custom-tree-node"},[_c('span',[_vm._v(_vm._s(node.label))]),_vm._v(" "),_c('span',[(data.type)?_c('el-button',{attrs:{"type":"text","size":"mini"},on:{"click":function () { return _vm.appendStructure(data); }}},[_vm._v("添加")]):_vm._e(),_vm._v(" "),(data.type&&data.type!='project')?_c('el-button',{attrs:{"type":"text","size":"mini"},on:{"click":function () { return _vm.updateStructure(node); }}},[_vm._v("修改")]):_vm._e(),_vm._v(" "),(data.type&&data.type!='project')?_c('el-button',{attrs:{"type":"text","size":"mini"},on:{"click":function () { return _vm.removeStructure(node); }}},[_vm._v("删除")]):_vm._e()],1)])}}],null,false,591882753)})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.projectDialogVisible = false}}},[_vm._v("确定")])],1)],1):_vm._e(),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"visible":_vm.authFormVisible,"title":"配置权限"},on:{"update:visible":function($event){_vm.authFormVisible=$event}}},[_c('choose-auth',{attrs:{"data":_vm.authList,"org-privilges":_vm.projectPrivilges}}),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.authFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"loading":_vm.loading,"type":"primary"},on:{"click":_vm.configPrivilges}},[_vm._v("提交")])],1)],1),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"visible":_vm.gisFormVisible,"title":"配置GIS"},on:{"update:visible":function($event){_vm.gisFormVisible=$event}}},[_c('el-form',{ref:"gisForm",attrs:{"model":_vm.gisForm,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"相机位置","prop":"parentName"}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.gisForm.camera),expression:"gisForm.camera"}],staticClass:"filter-item",staticStyle:{"width":"100%"},attrs:{"type":"text","placeholder":"","rows":"6"},domProps:{"value":(_vm.gisForm.camera)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.gisForm, "camera", $event.target.value)}}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"视图模型","prop":"viewInfo"}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.gisForm.viewInfo),expression:"gisForm.viewInfo"}],staticClass:"filter-item",staticStyle:{"width":"100%"},attrs:{"type":"text","placeholder":"","rows":"6"},domProps:{"value":(_vm.gisForm.viewInfo)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.gisForm, "viewInfo", $event.target.value)}}})])],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.gisFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"loading":_vm.loading,"type":"primary"},on:{"click":_vm.saveModel}},[_vm._v("提交")])],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "A1Ao":
/*!*******************************************!*\
  !*** ./src/views/project/projectList.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectList_vue_vue_type_template_id_19bfcf28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList.vue?vue&type=template&id=19bfcf28& */ "rhSn");
/* harmony import */ var _projectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList.vue?vue&type=script&lang=js& */ "gKRT");
/* empty/unused harmony star reexport *//* harmony import */ var _projectList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "vgHq");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _projectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _projectList_vue_vue_type_template_id_19bfcf28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _projectList_vue_vue_type_template_id_19bfcf28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "projectList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Z0ad":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_table_tableList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/table/tableList */ "dARg");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _components_positionSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/positionSelect */ "5+DE");
/* harmony import */ var _api_system_org__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/system/org */ "fmxT");
/* harmony import */ var _api_project_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/project/project */ "T+6t");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @riophae/vue-treeselect */ "cCY5");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "VCwm");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _api_system_authority__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/system/authority */ "9Vyn");
/* harmony import */ var _system_org_components_chooseAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../system/org/components/chooseAuth */ "gskV");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _components_customerForm_Upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/customerForm/Upload */ "xvje");
/* harmony import */ var _api_project_bimViews__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/project/bimViews */ "1O3d");
/* harmony import */ var _utils_refreshRoutes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/utils/refreshRoutes */ "ZBzj");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ProjectList',
  components: {
    tableList: _components_table_tableList__WEBPACK_IMPORTED_MODULE_1__["default"],
    positionSelect: _components_positionSelect__WEBPACK_IMPORTED_MODULE_3__["default"],
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_8__["default"],
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_6___default.a,
    chooseAuth: _system_org_components_chooseAuth__WEBPACK_IMPORTED_MODULE_11__["default"],
    FmUpload: _components_customerForm_Upload__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      dialogFormVisible: false, // 弹出框显示判断
      projectDialogVisible: false,
      dialogStatus: 'create',
      orgList: [],
      textMap: {
        update: '编辑',
        create: '新建'
      },
      isChoose: false,
      loading: false, // 按钮重复提交判断
      listLoading: false,
      rules: {
        name: [{ required: true, message: '请填写项目名称' }],
        orgId: [{ required: true, message: '请选择组织', trigger: 'change' }]
      },
      projectForm: {
        id: '',
        name: '',
        remark: '',
        orgId: '',
        location: {},
        planStartDate: '',
        planEndDate: '',
        completionDate: '',
        startDate: '',
        status: '',
        planStartAndEndDate: [],
        startAndEndDate: [],
        docId: '',
        shortName: ''
      },
      gisFormVisible: false,
      gisForm: {
        id: null,
        name: '',
        camera: null,
        viewInfo: null,
        projectId: null
      },
      columns: [{
        text: '项目名称',
        value: 'name',
        width: '300'
      },
      // {
      //   text: '项目编码',
      //   value: 'code'
      // },
      // {
      //   text: '组织',
      //   value: 'org'
      // },
      // {
      //   text: '地址',
      //   value: 'address'
      // },
      // {
      //   text: '备注',
      //   value: 'remark'
      // },
      // {
      //   text: '创建时间',
      //   value: 'createDate',
      //   filter: parseTime,
      //   filterParams: ['{y}/{m}/{d}']
      // },
      {
        text: '计划开始时间',
        value: 'planStartDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_9__["parseTime"],
        filterParams: ['{y}/{m}/{d}']
      }, {
        text: '计划完成时间',
        value: 'planEndDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_9__["parseTime"],
        filterParams: ['{y}/{m}/{d}']
      }, {
        text: '竣工日期',
        value: 'endDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_9__["parseTime"],
        filterParams: ['{y}/{m}/{d}']
      }, {
        text: '开工日期',
        value: 'startDate',
        filter: _utils__WEBPACK_IMPORTED_MODULE_9__["parseTime"],
        filterParams: ['{y}/{m}/{d}']
      }, {
        text: '状态',
        value: 'status',
        filter: _utils__WEBPACK_IMPORTED_MODULE_9__["getNameByCode"],
        filterParams: ['project_status']
      }, {
        text: '操作',
        type: 'iconButton',
        width: 230,
        list: this.operButton
      }],
      listQuery: {
        name: '',
        orgId: null
      },
      list: [],
      total: 0,
      currentOrgId: '',
      file: {
        length: 9,
        isFile: false,
        fileName: ''
      },
      fileList: [],
      normalizer: function normalizer(node) {
        return {
          id: node.id,
          label: node.name,
          children: node.children
        };
      },

      // 树结构
      props: {
        label: 'name',
        children: 'children',
        isLeaf: 'leaf'
      },
      currentPorject: {},
      structureForm: {
        id: '',
        projectId: '',
        parentId: '',
        name: '',
        parentName: ''
      },
      structureRules: {
        name: [{ required: true, message: '请填写结构名称' }]
      },
      structureList: [],
      currentTreeData: null,
      // 权限数组
      authList: [],
      authFormVisible: false,
      projectPrivilges: [], // 项目配置的数组
      currentPorjectId: ''
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapGetters"])(['dictMap'])),
  mounted: function mounted() {
    this.getList();
    this.getOrgList();
    this.getAuthList();
  },

  methods: {
    // 获取组织、
    getOrgList: function getOrgList() {
      var _this = this;

      Object(_api_system_org__WEBPACK_IMPORTED_MODULE_4__["getOrgList"])({}).then(function (response) {
        if (response.success) {
          // 组装参数
          _this.orgList = _this.treeListUtil(response.result);
        }
      });
    },
    saveModel: function saveModel() {
      var _this2 = this;

      this.gisForm.projectId = this.currentPorjectId;
      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_14__["saveBimView"])(this.gisForm).then(function (res) {
        var params = {
          assetId: res.result.id,
          assetType: 'BimView',
          linkType: 'projectFullLineModel',
          sourceList: [{
            sourceId: _this2.currentPorjectId,
            sourceType: 'Project'
          }]
        };
        Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_14__["saveAssetBind"])(params).then(function (res) {
          if (res.success) {
            _this2.$message.success(res.message);
            _this2.gisForm = {
              id: null,
              name: '',
              camera: null,
              viewInfo: null
            };
            _this2.gisFormVisible = false;
          }
        });
      });
    },

    // 获取所有权限
    getAuthList: function getAuthList() {
      var _this3 = this;

      Object(_api_system_authority__WEBPACK_IMPORTED_MODULE_10__["getList"])({ scope: 'project' }).then(function (response) {
        if (response.success) {
          _this3.authList = response.result;
        }
      });
    },
    treeListUtil: function treeListUtil(data, parentId) {
      var itemArr = [];
      for (var i = 0; i < data.length; i++) {
        var node = data[i];
        if (node.parentId === parentId) {
          node.children = this.treeListUtil(data, node.id);
          itemArr.push(node);
        }
      }
      return itemArr;
    },
    currentChange: function currentChange(val) {
      this.listQuery.currPage = val;
      this.getList();
    },

    // 获取所有项目
    getList: function getList() {
      var _this4 = this;

      this.listLoading = true;
      Object(_api_project_project__WEBPACK_IMPORTED_MODULE_5__["getProjectList"])(this.listQuery).then(function (response) {
        if (response.success) {
          _this4.list = response.result.list;
          _this4.total = response.result.total;
        }
        _this4.listLoading = false;
      });
    },

    // 获取位置
    getLocation: function getLocation(val) {
      this.projectForm.location = val;
    },

    // 表格操作按鈕
    operButton: function operButton(val) {
      return [{ class: 'iconxiangqing1', value: '详情', click: this.goProject }, { class: 'iconxiugai', value: '修改', click: this.updateProject }, {
        class: 'iconjiegou ',
        value: '结构配置',
        click: this.setStructure,
        privilege: 'P_xmlb_jgpz'
      }, {
        class: 'iconpermisssion-management',
        value: '配置权限',
        click: this.setPrivilege
      }, { class: 'iconmokuai', value: '配置模型', click: this.setModel }, { class: 'iconshanchu1', value: '删除', click: this.deleteProject }];
    },
    setModel: function setModel(val) {
      var _this5 = this;

      this.currentPorjectId = val.row.id;
      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_14__["queryBimViews"])({
        linkType: 'projectFullLineModel',
        sourceId: val.row.id,
        sourceType: 'Project'
      }).then(function (res) {
        if (res.success) {
          if (res.result.length > 0) {
            _this5.gisForm = res.result[0];
          }
          _this5.gisFormVisible = true;
        }
      });
    },

    // 进入项目
    goProject: function goProject(val) {
      this.$storage.setStorage('project', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, val.row));
      // location.reload()
      // 刷新路由列表
      Object(_utils_refreshRoutes__WEBPACK_IMPORTED_MODULE_15__["refreshRoutes"])(this);
    },

    // 配置权限
    setPrivilege: function setPrivilege(val) {
      var _this6 = this;

      this.currentPorjectId = val.row.id;
      // 获取组织权限
      Object(_api_project_project__WEBPACK_IMPORTED_MODULE_5__["projectPrivileges"])({ projectId: val.row.id }).then(function (response) {
        if (response.success) {
          var tempArr = [];
          var tempPri = [];
          if (response.result && response.result.length > 0) {
            response.result.forEach(function (item) {
              if (item.leaf) {
                tempArr.push(item.id);
              }
              tempPri.push(item.id);
            });
          }
          _this6.projectPrivilges = tempArr;
          _this6.$store.dispatch('setCheckAuth', tempPri);
          _this6.authFormVisible = true;
        } else {
          _this6.$message.error(response.message);
        }
      });
    },

    // 配置项目权限
    configPrivilges: function configPrivilges() {
      var _this7 = this;

      this.loading = true;
      Object(_api_project_project__WEBPACK_IMPORTED_MODULE_5__["configProjectPrivileges"])({
        projectId: this.currentPorjectId,
        privilegeIds: this.$store.getters.checkAuth
      }).then(function (response) {
        if (response.success) {
          _this7.$message.success(response.message);
          _this7.authFormVisible = false;
        } else {
          _this7.$message.error(response.message);
        }
        _this7.loading = false;
      });
    },

    // 配置结构
    setStructure: function setStructure(val) {
      var _this8 = this;

      Object(_api_project_project__WEBPACK_IMPORTED_MODULE_5__["structureTreeData"])({ id: val.row.id, type: 'project' }).then(function (response) {
        if (response.success) {
          _this8.currentPorject = {
            id: val.row.id,
            name: val.row.name,
            type: 'project'
          };
          if (response.result.length === 0) {
            _this8.structureList = [{
              id: val.row.id,
              name: val.row.name,
              type: 'project',
              leaf: true
            }];
          } else {
            _this8.structureList = [{
              id: val.row.id,
              name: val.row.name,
              type: 'project',
              children: ['']
            }];
          }
          _this8.projectDialogVisible = true;
        }
      });
    },

    // 删除项目
    deleteProject: function deleteProject(val) {
      var _this9 = this;

      this.$confirm('是否确定删除该记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this9.loading = true;
        Object(_api_project_project__WEBPACK_IMPORTED_MODULE_5__["deleteProject"])({ id: val.row.id }).then(function (response) {
          if (response.success) {
            _this9.getList();
            _this9.$message.success('删除成功');
          }
          _this9.loading = false;
        });
      });
    },

    // 更新项目
    updateProject: function updateProject(val) {
      this.dialogStatus = 'update';
      this.projectForm.id = val.row.id;
      this.projectForm.name = val.row.name;
      this.projectForm.orgId = val.row.orgId;
      this.projectForm.remark = val.row.remark;
      this.projectForm.startDate = val.row.startDate;
      this.projectForm.planStartTime = val.row.planStartTime;
      this.projectForm.planCompleteTime = val.row.planCompleteTime;
      this.projectForm.completionDate = val.row.completionDate;
      this.projectForm.docId = val.row.docId;
      this.projectForm.shortName = val.row.shortName;
      if (val.row.planStartDate && val.row.planEndDate) {
        this.projectForm.planStartAndEndDate = [val.row.planStartDate, val.row.planEndDate];
      }
      if (val.row.startDate && val.row.endDate) {
        this.projectForm.startAndEndDate = [val.row.startDate, val.row.endDate];
      }
      this.$set(this.projectForm, 'status', val.row.status);
      if (val.row.location && val.row.location.address) {
        this.isChoose = true;
      } else {
        this.isChoose = false;
      }
      this.projectForm.location = val.row.location;
      this.dialogFormVisible = true;
    },
    reset: function reset() {
      // 清空
      this.projectForm.id = '';
      this.$refs['projectForm'].resetFields();
    },
    search: function search() {
      this.getList();
    },

    // 新增项目
    addProject: function addProject() {
      this.dialogStatus = 'create';
      this.projectForm = {
        id: '',
        parentId: '',
        name: '',
        type: '',
        code: '',
        location: {},
        status: '',
        planStartAndEndDate: [],
        startAndEndDate: []
      };
      this.dialogFormVisible = true;
    },

    // 保存项目
    saveProject: function saveProject() {
      var _this10 = this;

      this.$refs['projectForm'].validate(function (valid) {
        if (valid) {
          _this10.loading = true;
          if (_this10.projectForm.planStartAndEndDate && _this10.projectForm.planStartAndEndDate.length === 2) {
            _this10.projectForm.planStartDate = _this10.projectForm.planStartAndEndDate[0];
            _this10.projectForm.planEndDate = _this10.projectForm.planStartAndEndDate[1];
          }
          if (_this10.projectForm.startAndEndDate && _this10.projectForm.startAndEndDate.length === 2) {
            _this10.projectForm.startDate = _this10.projectForm.startAndEndDate[0];
            _this10.projectForm.endDate = _this10.projectForm.startAndEndDate[1];
          }
          Object(_api_project_project__WEBPACK_IMPORTED_MODULE_5__["saveProject"])(_this10.projectForm).then(function (response) {
            if (response.success) {
              _this10.$message.success('保存成功');
              _this10.getList();
              _this10.dialogFormVisible = false;
              _this10.reset();
            }
            _this10.loading = false;
          });
        }
      });
    },
    handleNodeExpand: function handleNodeExpand(data, node) {
      var _this11 = this;

      if (data.children && data.children[0] !== '') {
        return;
      }
      this.loading = true;
      setTimeout(function () {
        Object(_api_project_project__WEBPACK_IMPORTED_MODULE_5__["structureTreeData"])({ id: node.data.id, type: node.data.type }).then(function (response) {
          if (response.success) {
            response.result.forEach(function (item) {
              if (!item.leaf) {
                item.children = [''];
              }
            });
            data.children = response.result;
            _this11.loading = false;
          }
        });
      }, 500);
    },

    // 添加结构
    saveStructure: function saveStructure() {
      var _this12 = this;

      if (this.structureForm.parentId === '') {
        this.$message.error('请先选择上级节点');
        return;
      }
      this.$refs['structureForm'].validate(function (valid) {
        if (valid) {
          _this12.loading = true;
          _this12.structureForm.projectId = _this12.currentPorject.id;
          Object(_api_project_project__WEBPACK_IMPORTED_MODULE_5__["saveStructure"])(_this12.structureForm).then(function (response) {
            if (response.success) {
              _this12.$message.success('保存成功');
              if (_this12.structureForm.id === '') {
                var newChild = {
                  id: response.result.id,
                  name: response.result.name,
                  children: [],
                  leaf: true,
                  type: 'structure'
                };
                if (!_this12.currentTreeData.children) {
                  _this12.$set(_this12.currentTreeData, 'children', []);
                }
                _this12.currentTreeData.children.push(newChild);
              } else {
                _this12.$refs.tree.getNode(_this12.structureForm.id).data.name = _this12.structureForm.name;
                _this12.structureForm.id = '';
              }
            }
            _this12.structureForm.parentId = '';
            _this12.structureForm.parentName = '';
            _this12.structureForm.name = '';
            _this12.loading = false;
          });
        }
      });
    },

    // 修改结构
    updateStructure: function updateStructure(data) {
      this.structureForm.name = data.data.name;
      if (data.parent.data.type === 'project') {
        this.structureForm.parentId = null;
      } else {
        this.structureForm.parentId = data.parent.data.id;
      }
      this.structureForm.parentName = data.parent.data.name;
      this.structureForm.id = data.data.id;
    },

    // 删除结构
    removeStructure: function removeStructure(data) {
      var _this13 = this;

      this.$confirm('是否确定删除该结构?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        Object(_api_project_project__WEBPACK_IMPORTED_MODULE_5__["deleteStructure"])({ id: data.data.id }).then(function (response) {
          if (response.success) {
            _this13.$refs.tree.remove(data.data.id);
            _this13.$message.success('删除成功');
          }
        });
      });
    },
    appendStructure: function appendStructure(data) {
      this.structureForm.name = '';
      if (data.type === 'project') {
        this.structureForm.parentId = null;
      } else {
        this.structureForm.parentId = data.id;
      }
      this.structureForm.parentName = data.name;
      this.currentTreeData = data;
    }
  }
});

/***/ }),

/***/ "gKRT":
/*!********************************************************************!*\
  !*** ./src/views/project/projectList.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./projectList.vue?vue&type=script&lang=js& */ "Z0ad");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "oULt":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "rhSn":
/*!**************************************************************************!*\
  !*** ./src/views/project/projectList.vue?vue&type=template&id=19bfcf28& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_template_id_19bfcf28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./projectList.vue?vue&type=template&id=19bfcf28& */ "A+6S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_template_id_19bfcf28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_template_id_19bfcf28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "vgHq":
/*!***************************************************************************************************!*\
  !*** ./src/views/project/projectList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./projectList.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "oULt");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_projectList_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);