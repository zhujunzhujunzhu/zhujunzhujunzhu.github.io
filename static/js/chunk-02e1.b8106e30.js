(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-02e1"],{

/***/ "2Ai/":
/*!*******************************************!*\
  !*** ./src/api/system/standardLibrary.js ***!
  \*******************************************/
/*! exports provided: list, get, save, treeData, deleteOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeData", function() { return treeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOne", function() { return deleteOne; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/standardLibrary/list',
    method: 'post',
    data: param
  });
}
function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/standardLibrary/get',
    method: 'post',
    data: param
  });
}
function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/standardLibrary/save',
    method: 'post',
    data: param
  });
}
function treeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/standardLibrary/treeData',
    method: 'post',
    data: param
  });
}

function deleteOne(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/standardLibrary/delete',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "48bi":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/KBM/issueLibrary/index.vue?vue&type=template&id=8e5fd2fe& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container issueLibraryDiv"},[_c('el-row',{staticClass:"box-card-wrapper"},[_c('el-card',{staticClass:"box-card leftCard"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('h3',[_vm._v("问题类别")])]),_vm._v(" "),_c('div',{staticClass:"flex-end"},[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"},{name:"button-privilege",rawName:"v-button-privilege",value:('P_wtk_xg'),expression:"'P_wtk_xg'"}],staticClass:"addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.add}},[_vm._v("添加")])],1),_vm._v(" "),_c('el-tree',{ref:"treeRef",attrs:{"node-key":"id","data":_vm.treeData,"props":_vm.defaultProps,"default-expand-all":false,"highlight-current":"","load":_vm.loadNode,"lazy":"","expand-on-click-node":false},on:{"node-click":_vm.handleNodeClick},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var node = ref.node;
var data = ref.data;
return _c('div',{staticClass:"custom-tree-node"},[_c('div',{staticClass:"treeItem flex-space-between"},[_c('div',{staticClass:"text-overflow"},[_vm._v("\n              "+_vm._s(data.label)+"\n              "),(node.data.id === _vm.currentNode.id)?_c('span',{staticStyle:{"font-size":"10px","color":"darkred"}},[_vm._v("（已选中当前节点）")]):_vm._e()]),_vm._v(" "),_c('div',[_c('el-row',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_wtk_xg'),expression:"'P_wtk_xg'"}]},[_c('span',{staticClass:"icon iconfont iconxinzeng tree-btn",attrs:{"title":"添加"},on:{"click":function($event){$event.stopPropagation();return (function () { return _vm.addChild(node,data); })($event)}}}),_vm._v(" "),_c('i',{staticClass:"icon iconfont iconxiugai tree-btn",attrs:{"title":"修改"},on:{"click":function($event){$event.stopPropagation();return (function () { return _vm.update(node,data); })($event)}}}),_vm._v(" "),(node.isLeaf)?_c('i',{staticClass:"icon iconfont iconshanchu1 tree-btn",attrs:{"title":"删除"},on:{"click":function($event){$event.stopPropagation();return (function () { return _vm.removeNode(node,data); })($event)}}}):_vm._e()])],1)])])}}])})],1),_vm._v(" "),_c('el-card',{staticClass:"box-card rightCard"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('h3',[_vm._v("问题模板")])]),_vm._v(" "),_c('div',{staticClass:"flex-end"},[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"},{name:"button-privilege",rawName:"v-button-privilege",value:('P_wtk_xg'),expression:"'P_wtk_xg'"}],staticClass:"addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addIssue}},[_vm._v("添加")])],1),_vm._v(" "),_c('div',{staticClass:"pre"},[_c('table-list',{staticClass:"dataTable issueTable",attrs:{"data":_vm.currentIssueList,"columns":_vm.columns,"list-loading":_vm.loading,"total":_vm.total,"show-index":true,"page-size":_vm.listQuery.pageSize}})],1)])],1),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":_vm.textMap[_vm.dialogStatus],"visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"form",attrs:{"rules":_vm.rules,"model":_vm.form,"label-position":"center","size":"small","label-width":"140px"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"问题类别名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"placeholder":"请输入问题类别名称","type":"text"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"问题类别编码","prop":"code"}},[_c('el-input',{staticClass:"filter-item",attrs:{"placeholder":"请输入问题类别编码","type":"text"},model:{value:(_vm.form.code),callback:function ($$v) {_vm.$set(_vm.form, "code", $$v)},expression:"form.code"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.buttonLoading},on:{"click":_vm.saveTree}},[_vm._v("提交")])],1)],1),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":_vm.textMap1[_vm.dialogStatus1],"visible":_vm.dialogFormVisible1},on:{"update:visible":function($event){_vm.dialogFormVisible1=$event}}},[_c('el-form',{ref:"issueForm",attrs:{"rules":_vm.issueRules,"model":_vm.issueForm,"label-position":"center","size":"small","label-width":"80px"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"问题名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"placeholder":"请输入问题名称","disabled":_vm.dialogStatus1 === 'view',"type":"text"},model:{value:(_vm.issueForm.name),callback:function ($$v) {_vm.$set(_vm.issueForm, "name", $$v)},expression:"issueForm.name"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"问题描述","prop":"description"}},[_c('el-input',{staticClass:"filter-item",attrs:{"placeholder":"请输入问题描述","disabled":_vm.dialogStatus1 === 'view',"type":"text"},model:{value:(_vm.issueForm.description),callback:function ($$v) {_vm.$set(_vm.issueForm, "description", $$v)},expression:"issueForm.description"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"标准目录","prop":"standardLibraryId"}},[_c('treeselect',{attrs:{"flat":true,"options":_vm.standardLibraryList,"no-children-text":"无选择","placeholder":"请选择系统标准","load-options":_vm.standardLoadOptions,"normalizer":_vm.standardNormalizer},model:{value:(_vm.issueForm.standardLibraryId),callback:function ($$v) {_vm.$set(_vm.issueForm, "standardLibraryId", $$v)},expression:"issueForm.standardLibraryId"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"QBS模板","prop":"qbsTemplateIds"}},[_c('treeselect',{attrs:{"flat":true,"options":_vm.qbsTemplatelist,"multiple":true,"load-options":_vm.qbsLoadOptions,"default-expand-level":_vm.defaultExpandLevel,"no-children-text":"无选择","placeholder":"请选择QBS模板","normalizer":_vm.qbsNormalizer},model:{value:(_vm.issueForm.qbsTemplateIds),callback:function ($$v) {_vm.$set(_vm.issueForm, "qbsTemplateIds", $$v)},expression:"issueForm.qbsTemplateIds"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible1 = false}}},[_vm._v("取消")]),_vm._v(" "),(_vm.dialogStatus1 !== 'view')?_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.buttonLoading},on:{"click":_vm.saveIssue}},[_vm._v("提交")]):_vm._e()],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "FjEe":
/*!**********************************************!*\
  !*** ./src/views/KBM/issueLibrary/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_8e5fd2fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8e5fd2fe& */ "lzic");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "QbCs");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "niV3");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_8e5fd2fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_8e5fd2fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "J8Nw":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/KBM/issueLibrary/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony import */ var _api_KBM_issueLibrary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/KBM/issueLibrary */ "Ouvx");
/* harmony import */ var _api_system_standardLibrary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/system/standardLibrary */ "2Ai/");
/* harmony import */ var _api_system_qbsTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/system/qbsTemplate */ "rX1j");
/* harmony import */ var _components_table_tableList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/table/tableList */ "dARg");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @riophae/vue-treeselect */ "cCY5");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "VCwm");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "L2JU");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








// import { LOAD_CHILDREN_OPTIONS } from '@riophae/vue-treeselect'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'QuestionBase',
  components: { TableList: _components_table_tableList__WEBPACK_IMPORTED_MODULE_6__["default"], Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_7___default.a },

  data: function data() {
    return {
      treeData: [],
      currentNode: {},
      nodeFlag: false,
      currentIssueList: [],
      defaultProps: {
        children: 'children',
        label: 'label',
        isLeaf: 'leaf'
      },
      dialogFormVisible: false, // 弹出框显示判断
      dialogStatus: 'create',
      textMap: {
        update: '编辑',
        create: '新建'
      },
      form: {
        id: '',
        name: '',
        parentId: ''
      },
      rules: {
        name: [{ required: true, message: '请输入问题类型名称' }]
        // code: [{ required: true, message: '请输入问题类型编码' }]
      },
      dialogFormVisible1: false, // 弹出框显示判断
      dialogStatus1: 'create',
      textMap1: {
        update: '编辑',
        create: '新建',
        view: '查看'
      },
      issueForm: {
        id: '',
        name: '',
        issueTypeId: '',
        description: '',
        standardId: '',
        standardLibraryId: '',
        qbsTemplateIds: null
      },
      issueRules: {
        name: [{ required: true, message: '请输入问题名称' }]
      },
      buttonLoading: false,
      columns: [{
        text: '问题',
        value: 'name'
      }, {
        text: '操作',
        type: 'iconButton',
        width: 120,
        list: this.operButton
      }],
      total: 0,
      listQuery: {
        pageSize: 15,
        currPage: 1,
        issueTypeId: ''
      },
      standardLibraryList: [],
      contentList: [],
      standardNormalizer: function standardNormalizer(node) {
        if (node.treeLevel === 1) {
          return {
            id: node.id,
            label: node.name,
            children: node.children
          };
        } else {
          return {
            id: node.id,
            label: node.catalogue,
            children: node.children
          };
        }
      },

      qbsTemplatelist: [],
      qbsTemplateId: null,
      defaultExpandLevel: 2,
      qbsNormalizer: function qbsNormalizer(node) {
        return {
          id: node.id,
          label: node.name,
          children: node.children
        };
      }
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])(['dictMap', 'buttonPrivileges'])),
  mounted: function mounted() {
    this.initDom();
  },

  methods: {
    initDom: function initDom() {
      document.getElementsByClassName('leftCard')[0].style.height = document.getElementById('app').clientHeight - 170 + 'px';
      document.getElementsByClassName('rightCard')[0].style.height = document.getElementById('app').clientHeight - 170 + 'px';
    },
    add: function add() {
      this.reset();
      this.currentNode = {};
      this.nodeFlag = false;
      this.dialogFormVisible = true;
      this.dialogStatus = 'create';
    },
    addChild: function addChild(node, data) {
      this.reset();
      this.currentNode = node;
      this.nodeFlag = true;
      this.form.parentId = data.id;
      this.dialogFormVisible = true;
      this.dialogStatus = 'create';
    },
    update: function update(node, data) {
      this.form = data;
      this.currentNode = node;
      this.dialogFormVisible = true;
      this.dialogStatus = 'update';
    },
    loadNode: function loadNode(node, resolve) {
      var params = {};
      if (node.level !== 0) {
        params.id = node.data.id;
      }
      Object(_api_KBM_issueLibrary__WEBPACK_IMPORTED_MODULE_3__["getIssueTypeTreeData"])(params).then(function (res) {
        if (res.success) {
          var back = {};
          // 当为第0层 此时为标准 显示name  处理是否为叶子节点  将leaf赋值给isLeaf
          back = res.result.map(function (item) {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, item.entity, { label: item.entity.name });
          });
          return resolve(back);
        }
      });
    },
    handleNodeClick: function handleNodeClick(node) {
      var _this = this;

      this.currentNode = node;
      Object(_api_KBM_issueLibrary__WEBPACK_IMPORTED_MODULE_3__["getIssueList"])({ issueTypeId: node.id }).then(function (res) {
        if (res.success) {
          _this.currentIssueList = res.result.list;
        }
      });
    },
    saveTree: function saveTree() {
      var _this2 = this;

      this.$refs['form'].validate(function (valid) {
        if (valid) {
          _this2.buttonLoading = true;
          Object(_api_KBM_issueLibrary__WEBPACK_IMPORTED_MODULE_3__["saveIssueType"])(_this2.form).then(function (res) {
            if (res.success) {
              _this2.$message.success('保存成功');
              _this2.buttonLoading = false;
              _this2.dialogFormVisible = false;
              if (_this2.dialogStatus === 'create') {
                if (_this2.nodeFlag) {
                  _this2.$refs['treeRef'].append(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, res.result, { label: res.result.name }), _this2.currentNode);
                  _this2.currentNode.isLeaf = false;
                } else {
                  _this2.$refs['treeRef'].append(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, res.result, {
                    label: res.result.name
                  }));
                }
              } else {
                _this2.currentNode.data = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, res.result, {
                  label: res.result.name
                });
              }
              // if (this.currentNode) {
              //   this.$refs['treeRef'].append({ ...res.result, label: res.result.name }, this.currentNode)
              //   this.currentNode.isLeaf = false
              // }
            }
          });
        }
      });
    },
    removeNode: function removeNode(node, data) {
      var _this3 = this;

      this.$confirm('是否确定删除该记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        Object(_api_KBM_issueLibrary__WEBPACK_IMPORTED_MODULE_3__["deleteIssueType"])({ id: node.data.id }).then(function (response) {
          if (response.success) {
            _this3.$refs['treeRef'].remove(data);
            _this3.$message.success('删除成功');
          } else {
            _this3.$message.error(response.message);
          }
        });
      });
    },
    reset: function reset() {
      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }
      this.form.id = '';
      this.form.parentId = '';
    },
    getStandardLibraryList: function getStandardLibraryList() {
      var _this4 = this;

      Object(_api_system_standardLibrary__WEBPACK_IMPORTED_MODULE_4__["treeData"])({}).then(function (res) {
        if (res.success) {
          res.result.forEach(function (item) {
            item.entity.children = null;
            if (_this4.dialogStatus1 === 'view') {
              item.entity.isDisabled = true;
            }
            _this4.standardLibraryList.push(item.entity);
          });
          // this.standardLibraryList = res.result
        }
      });
    },
    getQBSTemplateList: function getQBSTemplateList() {
      var _this5 = this;

      this.qbsTemplatelist = [];
      Object(_api_system_qbsTemplate__WEBPACK_IMPORTED_MODULE_5__["getqbsTemplateTreeData"])({}).then(function (res) {
        if (res.success) {
          res.result.forEach(function (item) {
            item.entity.children = null;
            if (_this5.dialogStatus1 === 'view') {
              item.entity.isDisabled = true;
            }
            _this5.qbsTemplatelist.push(item.entity);
          });
        }
      });
    },
    qbsLoadOptions: function qbsLoadOptions(_ref) {
      var _this6 = this;

      var action = _ref.action,
          parentNode = _ref.parentNode,
          callback = _ref.callback;

      Object(_api_system_qbsTemplate__WEBPACK_IMPORTED_MODULE_5__["getqbsTemplateTreeData"])({ id: parentNode.id }).then(function (res) {
        if (res.success) {
          parentNode.children = [];
          res.result.forEach(function (item) {
            item.entity.children = null;
            if (_this6.dialogStatus1 === 'view') {
              item.entity.isDisabled = true;
            }
            parentNode.children.push(item.entity);
          });
          callback();
        }
      });
    },
    standardLoadOptions: function standardLoadOptions(_ref2) {
      var _this7 = this;

      var action = _ref2.action,
          parentNode = _ref2.parentNode,
          callback = _ref2.callback;

      Object(_api_system_standardLibrary__WEBPACK_IMPORTED_MODULE_4__["treeData"])({ id: parentNode.id }).then(function (res) {
        if (res.success) {
          parentNode.children = [];
          res.result.forEach(function (item) {
            item.entity.children = null;
            if (_this7.dialogStatus1 === 'view') {
              item.entity.isDisabled = true;
            }
            parentNode.children.push(item.entity);
          });
          callback();
        }
      });
    },

    // changeStandardType(val) {
    //   this.standardLibraryList = []
    //   treeData({ type: val }).then(res => {
    //     if (res.success) {
    //       res.result.forEach(item => {
    //         this.standardLibraryList.push(item.entity)
    //       })
    //     }
    //   })
    // },
    addIssue: function addIssue() {
      var _this8 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this8.dialogStatus1 = 'create';
                _this8.dialogFormVisible1 = true;
                if (_this8.$refs['issueForm']) {
                  _this8.$refs['issueForm'].resetFields();
                }
                _this8.issueForm.issueTypeId = _this8.currentNode.id;
                _this8.issueForm.id = '';
                _this8.issueForm.qbsTemplateIds = null;
                _this8.contentList = [];
                _context.next = 9;
                return _this8.getStandardLibraryList();

              case 9:
                _this8.qbsTemplatelist = [];
                _context.next = 12;
                return _this8.getQBSTemplateList();

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this8);
      }))();
    },
    operButton: function operButton() {
      return [{
        class: 'iconyanjing',
        value: '查看',
        click: this.scanDetial,
        privilege: 'P_wtk_ck'
      }, {
        class: 'iconxiugai',
        value: '编辑',
        click: this.updateIssue,
        privilege: 'P_wtk_xg'
      }, {
        class: 'iconshanchu1',
        value: '删除',
        click: this.deleteIssue,
        privilege: 'P_wtk_xg'
      }];
    },
    getIssueData: function getIssueData(val) {
      var _this9 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this9.getStandardLibraryList();

              case 2:
                _context2.next = 4;
                return _this9.getQBSTemplateList();

              case 4:
                Object(_api_KBM_issueLibrary__WEBPACK_IMPORTED_MODULE_3__["getIssue"])({ id: val.row.id }).then(function (res) {
                  if (res.success) {
                    _this9.issueForm = res.result;
                    if (res.result.standardLibraryId) {
                      Object(_api_system_standardLibrary__WEBPACK_IMPORTED_MODULE_4__["get"])({ id: res.result.standardLibraryId }).then(function (res) {
                        if (res.success) {
                          _this9.issueForm.standardId = res.result.parentId;
                        }
                      });
                    }
                  }
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this9);
      }))();
    },
    scanDetial: function scanDetial(val) {
      var _this10 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this10.dialogStatus1 = 'view';
                _this10.dialogFormVisible1 = true;
                _this10.getIssueData(val);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this10);
      }))();
    },
    updateIssue: function updateIssue(val) {
      this.dialogStatus1 = 'update';
      this.dialogFormVisible1 = true;
      this.getIssueData(val);
    },
    saveIssue: function saveIssue() {
      var _this11 = this;

      this.$refs['issueForm'].validate(function (valid) {
        if (valid) {
          if (_this11.issueForm.issueTypeId) {
            Object(_api_KBM_issueLibrary__WEBPACK_IMPORTED_MODULE_3__["saveIssue"])(_this11.issueForm).then(function (res) {
              if (res.success) {
                _this11.$message.success('保存成功');
                _this11.dialogFormVisible1 = false;
              }
            });
          } else {
            _this11.$message.error('请选择左侧树的问题类型');
          }
        }
      });
    },
    deleteIssue: function deleteIssue(val) {
      var _this12 = this;

      this.$confirm('是否确定删除该记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        Object(_api_KBM_issueLibrary__WEBPACK_IMPORTED_MODULE_3__["deleteIssue"])({ id: val.row.id }).then(function (response) {
          if (response.success) {
            _this12.$message.success('删除成功');
            Object(_api_KBM_issueLibrary__WEBPACK_IMPORTED_MODULE_3__["getIssueList"])({ issueTypeId: _this12.currentNode.id }).then(function (res) {
              if (res.success) {
                _this12.currentIssueList = res.result.list;
              }
            });
          } else {
            _this12.$message.error(response.message);
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "Ouvx":
/*!*************************************!*\
  !*** ./src/api/KBM/issueLibrary.js ***!
  \*************************************/
/*! exports provided: getIssueTypeList, getOneIssueType, saveIssueType, deleteIssueType, getIssueTypeTreeData, getIssueList, saveIssue, getIssue, deleteIssue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIssueTypeList", function() { return getIssueTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOneIssueType", function() { return getOneIssueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveIssueType", function() { return saveIssueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteIssueType", function() { return deleteIssueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIssueTypeTreeData", function() { return getIssueTypeTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIssueList", function() { return getIssueList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveIssue", function() { return saveIssue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIssue", function() { return getIssue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteIssue", function() { return deleteIssue; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getIssueTypeList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/issueType/list',
    method: 'post',
    data: param
  });
}

function getOneIssueType(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/issueType/list',
    method: 'post',
    data: param
  });
}

function saveIssueType(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/issueType/save',
    method: 'post',
    data: param
  });
}

function deleteIssueType(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/issueType/delete',
    method: 'post',
    data: param
  });
}

function getIssueTypeTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/issueType/treeData',
    method: 'post',
    data: param
  });
}

function getIssueList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/issueLibrary/list',
    method: 'post',
    data: param
  });
}

function saveIssue(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/issueLibrary/save',
    method: 'post',
    data: param
  });
}

function getIssue(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/issueLibrary/get',
    method: 'post',
    data: param
  });
}

function deleteIssue(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/issueLibrary/delete',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "QbCs":
/*!***********************************************************************!*\
  !*** ./src/views/KBM/issueLibrary/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "J8Nw");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "lzic":
/*!*****************************************************************************!*\
  !*** ./src/views/KBM/issueLibrary/index.vue?vue&type=template&id=8e5fd2fe& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8e5fd2fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=8e5fd2fe& */ "48bi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8e5fd2fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8e5fd2fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "niV3":
/*!******************************************************************************************************!*\
  !*** ./src/views/KBM/issueLibrary/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "vPDJ");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "rX1j":
/*!***************************************!*\
  !*** ./src/api/system/qbsTemplate.js ***!
  \***************************************/
/*! exports provided: getqbsTemplateList, deleteqbsTemplate, saveqbsTemplate, getqbsTemplate, getqbsTemplateTreeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getqbsTemplateList", function() { return getqbsTemplateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteqbsTemplate", function() { return deleteqbsTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveqbsTemplate", function() { return saveqbsTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getqbsTemplate", function() { return getqbsTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getqbsTemplateTreeData", function() { return getqbsTemplateTreeData; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");



function getqbsTemplateList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbsTemplate/list',
    method: 'post',
    data: param
  });
}

function deleteqbsTemplate(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbsTemplate/delete',
    method: 'post',
    data: param
  });
}

function saveqbsTemplate(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbsTemplate/save',
    method: 'post',
    data: param
  });
}

function getqbsTemplate(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbsTemplate/get',
    method: 'post',
    data: param
  });
}

// 获取测点实时数据
function getqbsTemplateTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/qbsTemplate/treeData',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "vPDJ":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/KBM/issueLibrary/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);