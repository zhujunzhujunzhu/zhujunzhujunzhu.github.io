(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-940b"],{

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

/***/ "4NkU":
/*!*****************************************************************************!*\
  !*** ./src/views/system/standardLibrary/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "CsKG");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "8GT+":
/*!***********************************************************************************!*\
  !*** ./src/views/system/standardLibrary/index.vue?vue&type=template&id=428cd13d& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_428cd13d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=428cd13d& */ "gXP1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_428cd13d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_428cd13d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "CUxk":
/*!**************************************************************************************!*\
  !*** ./src/views/system/standardLibrary/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "OtCI");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "CsKG":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/system/standardLibrary/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/process */ "q7Rq");
/* harmony import */ var _api_system_standardLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/system/standardLibrary */ "2Ai/");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "L2JU");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'label',
        isLeaf: 'leaf'
      },
      title: '新增',
      dialogShow: false,
      form: {},
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入编码', trigger: 'blur' }],
        type: [{ required: true, message: '请输入类型', trigger: 'blur' }],
        standardLevel: [{ required: true, message: '请输入级别', trigger: 'blur' }],
        catalogue: [{ required: true, message: '请输入目录', trigger: 'blur' }],
        content: [{ required: true, message: '请填写条款', trigger: 'blur' }]
      },
      loading: false,
      isStandard: true,
      currentNode: {}, // 当前的节点
      currentData: {}
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['dictMap'])),
  mounted: function mounted() {
    this.initDom();
  },

  methods: {
    initDom: function initDom() {
      document.getElementsByClassName('leftCard')[0].style.height = document.getElementById('app').clientHeight - 170 + 'px';
      document.getElementsByClassName('rightCard')[0].style.height = document.getElementById('app').clientHeight - 170 + 'px';
    },
    handleNodeClick: function handleNodeClick(data) {
      this.currentData = data;
    },
    loadNode: function loadNode(node, resolve) {
      var params = {};
      if (node.level !== 0) {
        params.id = node.data.id;
      }
      Object(_api_system_standardLibrary__WEBPACK_IMPORTED_MODULE_2__["treeData"])(params).then(function (res) {
        if (res.success) {
          var back = {};
          if (node.level === 0) {
            // 当为第0层 此时为标准 显示name  处理是否为叶子节点  将leaf赋值给isLeaf
            back = res.result.map(function (item) {
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, item.entity, { label: item.entity.name });
            });
          } else {
            // 当为其它层 此时为条款 显示catalogue
            back = res.result.map(function (item) {
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, item.entity, { label: item.entity.catalogue });
            });
          }
          return resolve(back);
        }
      });
    },
    showAddDialog: function showAddDialog() {
      this.isStandard = true;
      this.title = '新增';
      this.dialogShow = true;
    },
    showEditDialog: function showEditDialog(node, data) {
      this.title = '编辑';
      this.currentNode = node;
      if (data.catalogue) {
        // 当为目录名不为空时为条款
        this.isStandard = false;
      } else {
        // 当为目录名不为空时为标准
        this.isStandard = true;
      }
      this.form = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, data);
      this.dialogShow = true;
    },
    showAddChild: function showAddChild(node, data) {
      this.form = {};
      this.currentNode = node;
      this.isStandard = false;
      this.title = '添加条款';
      this.form.parentId = data.id;
      this.dialogShow = true;
    },
    removeNode: function removeNode(node, data) {
      var _this = this;

      if (!data.id) return;
      Object(_utils_process__WEBPACK_IMPORTED_MODULE_1__["deleteFun"])({
        api: _api_system_standardLibrary__WEBPACK_IMPORTED_MODULE_2__["deleteOne"],
        params: { id: data.id },
        successCB: function successCB() {
          _this.$refs['treeRef'].remove(data);
        }
      });
    },
    saveFun: function saveFun() {
      var _this2 = this;

      this.$refs['form'].validate(function (valid) {
        if (!valid) return;
        _this2.loading = true;
        Object(_api_system_standardLibrary__WEBPACK_IMPORTED_MODULE_2__["save"])(_this2.form).then(function (res) {
          if (res.success) {
            if (_this2.title === '新增') {
              // 当为新增时的处理  可能还是需要调用后端的接口  不然进行删除时没有办法进行后端的删除 可以返回时将 这条数据的id再返回
              _this2.$refs['treeRef'].append(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, res.result, {
                label: res.result.name
              }));
            } else if (_this2.title === '添加条款') {
              _this2.$refs['treeRef'].append(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, res.result, { label: res.result.catalogue }), _this2.currentNode);
              // 处理其父节点的 leaf状态
              // this.currentNode.data.leaf = false
              _this2.currentNode.isLeaf = false;
            } else {
              // 当为编辑时的处理
              if (_this2.isStandard) {
                // 当为标准时的处理
                _this2.currentNode.data = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this2.currentNode.data, res.result, {
                  label: res.result.name
                });
                _this2.currentData = res.result;
              } else {
                // 当为目录时的处理
                _this2.currentNode.data = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this2.currentNode.data, res.result, {
                  label: res.result.catalogue
                });
                _this2.currentData = res.result;
              }
            }
            _this2.loading = false;
            _this2.$refs['form'].resetFields();
            _this2.dialogShow = false;
          }
        });
      });
    },
    cancelFun: function cancelFun() {
      this.dialogShow = false;
      this.$refs['form'].resetFields();
    }
  }
});

/***/ }),

/***/ "OtCI":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/system/standardLibrary/index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "gXP1":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/system/standardLibrary/index.vue?vue&type=template&id=428cd13d& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container standardLibraryDiv"},[_c('el-row',{staticClass:"box-card-wrapper"},[_c('el-card',{staticClass:"box-card leftCard"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('h3',[_vm._v("系统标准规范树")])]),_vm._v(" "),_c('div',{staticClass:"flex-end"},[_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.showAddDialog}},[_vm._v("添加")])],1),_vm._v(" "),_c('el-tree',{ref:"treeRef",attrs:{"node-key":"id","data":_vm.treeData,"props":_vm.defaultProps,"default-expand-all":false,"highlight-current":"","load":_vm.loadNode,"lazy":"","expand-on-click-node":false},on:{"node-click":_vm.handleNodeClick},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var node = ref.node;
var data = ref.data;
return _c('div',{staticClass:"custom-tree-node"},[_c('div',{staticClass:"treeItem flex-space-between"},[_c('div',{staticClass:"text-overflow"},[_c('i',{staticClass:"icon iconfont",class:node.expanded?'iconwenjianjia_kai':'iconwenjianjia_guan'}),_vm._v("\n              "+_vm._s(data.label)+"\n            ")]),_vm._v(" "),_c('div',[_c('el-row',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_xtbzgf_xg'),expression:"'P_xtbzgf_xg'"}]},[_c('span',{staticClass:"icon iconfont iconxinzeng tree-btn",attrs:{"title":"添加"},on:{"click":function($event){$event.stopPropagation();return (function () { return _vm.showAddChild(node,data); })($event)}}}),_vm._v(" "),_c('i',{staticClass:"icon iconfont iconxiugai tree-btn",attrs:{"title":"修改"},on:{"click":function($event){$event.stopPropagation();return (function () { return _vm.showEditDialog(node,data); })($event)}}}),_vm._v(" "),(node.isLeaf)?_c('i',{staticClass:"icon iconfont iconshanchu1 tree-btn",attrs:{"title":"删除"},on:{"click":function($event){$event.stopPropagation();return (function () { return _vm.removeNode(node,data); })($event)}}}):_vm._e()])],1)])])}}])})],1),_vm._v(" "),_c('el-card',{staticClass:"box-card rightCard"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('h3',[_vm._v("标准规范内容")])]),_vm._v(" "),_c('div',{staticClass:"contentDiv"},[_vm._v(_vm._s(_vm.currentData.content))])])],1),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":_vm.title,"close-on-click-modal":false,"visible":_vm.dialogShow},on:{"update:visible":function($event){_vm.dialogShow=$event}}},[_c('el-form',{ref:"form",attrs:{"rules":_vm.rules,"model":_vm.form,"size":"small","label-width":"100px"}},[_c('el-row',[(_vm.isStandard)?_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"placeholder":"请输入名称"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1)],1):_vm._e(),_vm._v(" "),(_vm.isStandard)?_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"编号","prop":"code"}},[_c('el-input',{staticClass:"filter-item",attrs:{"placeholder":"请输入编号"},model:{value:(_vm.form.code),callback:function ($$v) {_vm.$set(_vm.form, "code", $$v)},expression:"form.code"}})],1)],1):_vm._e(),_vm._v(" "),(_vm.isStandard)?_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"标准类型","prop":"type"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请选择标准类型"},model:{value:(_vm.form.type),callback:function ($$v) {_vm.$set(_vm.form, "type", $$v)},expression:"form.type"}},_vm._l((_vm.dictMap['standard_type']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1)],1)],1):_vm._e(),_vm._v(" "),(_vm.isStandard)?_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"标准级别","prop":"standardLevel"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请选择标准级别"},model:{value:(_vm.form.standardLevel),callback:function ($$v) {_vm.$set(_vm.form, "standardLevel", $$v)},expression:"form.standardLevel"}},_vm._l((_vm.dictMap['standard_level']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1)],1)],1):_vm._e(),_vm._v(" "),(!_vm.isStandard)?_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"目录","prop":"catalogue"}},[_c('el-input',{staticClass:"filter-item",attrs:{"placeholder":"请输入目录"},model:{value:(_vm.form.catalogue),callback:function ($$v) {_vm.$set(_vm.form, "catalogue", $$v)},expression:"form.catalogue"}})],1)],1):_vm._e(),_vm._v(" "),(!_vm.isStandard)?_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"条款","prop":"content"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"textarea","autosize":{ minRows: 3},"placeholder":"请填写条款"},model:{value:(_vm.form.content),callback:function ($$v) {_vm.$set(_vm.form, "content", $$v)},expression:"form.content"}})],1)],1):_vm._e(),_vm._v(" "),(!_vm.isStandard)?_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"备注","autosize":{ minRows: 2},"prop":"remark"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"textarea","placeholder":"请填写备注"},model:{value:(_vm.form.remark),callback:function ($$v) {_vm.$set(_vm.form, "remark", $$v)},expression:"form.remark"}})],1)],1):_vm._e()],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancelFun}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.saveFun}},[_vm._v("提交")])],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "oqKq":
/*!****************************************************!*\
  !*** ./src/views/system/standardLibrary/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_428cd13d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=428cd13d& */ "8GT+");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "4NkU");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "CUxk");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_428cd13d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_428cd13d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ })

}]);