(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-14cc"],{

/***/ "3RZC":
/*!******************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/view.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "t58x");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "5HWN":
/*!************************!*\
  !*** ./src/api/doc.js ***!
  \************************/
/*! exports provided: uploadDoc, getPicture, uploadImg, attachList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadDoc", function() { return uploadDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPicture", function() { return getPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImg", function() { return uploadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachList", function() { return attachList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function uploadDoc(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/uploadDoc',
    method: 'post',
    data: param
  });
}

// 根据docId获取图片
function getPicture(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/attachList',
    method: 'post',
    data: param
  });
}

function uploadImg(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/uploadImg',
    method: 'post',
    data: param
  });
}

// 根据docId获取图片
function attachList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/attachList',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "6oh5":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/view.vue?vue&type=template&id=990f3486& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"viewpointManageDiv drawer-wrap"},[_c('label',{staticClass:"titleLabel"},[_vm._v("视图")]),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('el-radio-group',{staticClass:"flex1",staticStyle:{"margin-left":"10px"},attrs:{"size":"mini"},on:{"change":_vm.getList},model:{value:(_vm.viewType),callback:function ($$v) {_vm.viewType=$$v},expression:"viewType"}},_vm._l((_vm.dictMap['bim_view_type']),function(item,index){return _c('el-radio-button',{key:index,attrs:{"label":item.code}},[_vm._v("\n        "+_vm._s(item.name)+"\n      ")])}),1),_vm._v(" "),(_vm.isEdit)?_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_xxmx_cz'),expression:"'P_xxmx_cz'"}],staticClass:"btn",staticStyle:{"margin-top":"0px","margin-right":"25px"},attrs:{"size":"mini"},on:{"click":_vm.addView}},[_vm._v("新建\n    ")]):_vm._e()],1),_vm._v(" "),_c('el-select',{staticStyle:{"margin-left":"10px","margin-top":"10px"},attrs:{"clearable":"","filterable":"","size":"mini","placeholder":"请选择工点"},on:{"change":_vm.changeWorkPointId},model:{value:(_vm.workPointId),callback:function ($$v) {_vm.workPointId=$$v},expression:"workPointId"}},_vm._l((_vm.workPointList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1),_vm._v(" "),_c('div',{attrs:{"id":"contentParentDiv"}},_vm._l((_vm.list),function(item,index){return (item.name)?_c('div',{key:index,staticClass:"contentDiv flex",on:{"click":function($event){return _vm.goView(index)}}},[_c('img',{attrs:{"src":_vm.fileUrl+'img/'+ item.pic}}),_vm._v(" "),_c('div',{staticClass:"flex1"},[_c('div',{staticClass:"flex"},[_c('label',{staticClass:"flex1"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('el-tooltip',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_xxmx_cz'),expression:"'P_xxmx_cz'"}],attrs:{"content":"删除","placement":"top"}},[(_vm.isEdit && item.isEdit)?_c('i',{staticClass:"icon iconfont iconcha",on:{"click":[function($event){return _vm.deleteView(item.id, index)},function($event){$event.stopPropagation();}]}}):_vm._e()])],1),_vm._v(" "),(_vm.isEdit && _vm.currentNum == index && item.isEdit)?_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_xxmx_cz'),expression:"'P_xxmx_cz'"}],staticClass:"btn",attrs:{"size":"mini"},on:{"click":[function($event){return _vm.updateView(index)},function($event){$event.stopPropagation();}]}},[_vm._v("\n          修改\n        ")]):_vm._e()],1)]):_vm._e()}),0),_vm._v(" "),_c('el-dialog',{staticClass:"viewPointDialog",attrs:{"title":_vm.viewForm.id ? '修改视图' : '新建视图',"append-to-body":"","close-on-click-modal":false,"visible":_vm.dialogFormVisible,"width":"340px"},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('img',{attrs:{"src":_vm.dataURL}}),_vm._v(" "),_c('el-form',{ref:"viewForm",attrs:{"model":_vm.viewForm,"rules":_vm.rules,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"视图名称","prop":"name"}},[_c('el-input',{attrs:{"type":"text","placeholder":"请输入视图名称"},model:{value:(_vm.viewForm.name),callback:function ($$v) {_vm.$set(_vm.viewForm, "name", $$v)},expression:"viewForm.name"}})],1)],1),_vm._v(" "),(!_vm.viewForm.id)?_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"所属工点","prop":"workPointId"}},[_c('el-select',{attrs:{"clearable":"","filterable":"","placeholder":"请选择工点"},model:{value:(_vm.viewForm.workPointId),callback:function ($$v) {_vm.$set(_vm.viewForm, "workPointId", $$v)},expression:"viewForm.workPointId"}},_vm._l((_vm.workPointList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)],1):_vm._e(),_vm._v(" "),(!_vm.viewForm.id)?_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"视图类型","prop":"type"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请视图类型"},model:{value:(_vm.viewForm.type),callback:function ($$v) {_vm.$set(_vm.viewForm, "type", $$v)},expression:"viewForm.type"}},_vm._l((_vm.dictMap['bim_view_type']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1)],1)],1):_vm._e()],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.saveView}},[_vm._v("提交")])],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "7Tkc":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/view.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Dwen":
/*!*************************************************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/view.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "7Tkc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "SDzl":
/*!************************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/view.vue?vue&type=template&id=990f3486& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_990f3486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=990f3486& */ "6oh5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_990f3486___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_990f3486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "fhWf":
/*!*****************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/view.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_990f3486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=990f3486& */ "SDzl");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "3RZC");
/* empty/unused harmony star reexport *//* harmony import */ var _view_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "Dwen");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_990f3486___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_990f3486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "t58x":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/view.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DetailedModelView',
  components: {},
  directives: {
    buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    viewList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isEdit: {
      type: Boolean,
      default: true
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
        workPointId: null,
        type: ''
      },
      rules: {},
      list: [],
      listQuery: {
        linkType: null,
        sourceId: JSON.parse(this.$storage.getStorage('project')).id,
        sourceType: 'Project',
        extParam: {
          type: null
        }
      },
      workPointList: [],
      workPointId: null,
      currentNum: null,
      viewType: 'bim_view_workpoint',
      loading: false
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['viewer', 'viewPointList', 'loading', 'fileUrl', 'isLoad', 'userId', 'dictMap'])),
  watch: {
    viewList: function viewList(val) {
      this.list = val;
    }
  },
  mounted: function mounted() {
    document.getElementsByClassName('viewpointManageDiv')[0].style.height = document.documentElement.clientHeight - 150 + 'px';
    document.getElementById('contentParentDiv').style.height = document.documentElement.clientHeight - 270 + 'px';
    // 获取视图
    this.getList();
    // 获取工点
    this.getWorkPointList();
  },

  methods: {
    changeWorkPointId: function changeWorkPointId() {
      if (!this.workPointId || this.workPointId === '') {
        this.listQuery = {
          linkType: this.linkType,
          sourceId: JSON.parse(this.$storage.getStorage('project')).id,
          sourceType: 'Project',
          type: null,
          extParam: {
            type: null
          }
        };
      } else {
        this.listQuery = {
          linkType: this.linkType,
          sourceId: this.workPointId,
          sourceType: 'WorkPoint',
          type: null,
          extParam: {
            type: null
          }
        };
      }
      this.getList();
    },
    getList: function getList() {
      var _this = this;

      this.listQuery.extParam.type = this.viewType;
      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["queryBimViews"])(this.listQuery).then(function (res) {
        if (res.success) {
          res.result.forEach(function (item) {
            if (item.createUserId === _this.userId) {
              item.isEdit = true;
            }
          });
          res.result.sort(_this.compare('name'));
          _this.list = res.result;
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
    updateView: function updateView(num) {
      this.viewForm = this.list[num];
      this.rules = {
        name: [{ required: true, message: '请输入视图名称', trigger: 'blur' }],
        type: [{ required: true, message: '请选择视图类型', trigger: 'change' }]
      };
      this.dataURL = this.viewer.getScreenshot(document.getElementById('viewer').clientWidth - 1, document.getElementById('viewer').clientHeight - 1);
      this.dialogFormVisible = true;
    },

    // 排序
    compare: function compare(property) {
      return function (a, b) {
        var value1 = a[property];
        if (value1.indexOf('[') === -1) {
          value1 = 0;
        } else {
          value1 = value1.substring(value1.indexOf('[') + 1, value1.indexOf(']'));
        }
        var value2 = b[property];
        if (value2.indexOf('[') === -1) {
          value2 = 0;
        } else {
          value2 = value2.substring(value2.indexOf('[') + 1, value2.indexOf(']'));
        }
        return value2 - value1;
      };
    },
    addView: function addView() {
      this.viewForm = {
        id: null,
        name: '',
        camera: null,
        viewInfo: null,
        pic: null,
        workPointId: null,
        type: ''
        // 数据渲染问题加入空数组
      };if (this.list < 1) {
        this.list.unshift({});
      }
      this.rules = {
        name: [{ required: true, message: '请输入视图名称', trigger: 'blur' }],
        type: [{ required: true, message: '请选择视图类型', trigger: 'change' }],
        workPointId: [{ required: true, message: '请选择工点', trigger: 'change' }]
      };
      this.dialogFormVisible = true;
      // 获取截图
      this.dataURL = this.viewer.getScreenshot(document.getElementById('viewer').clientWidth - 1, document.getElementById('viewer').clientHeight - 1);
    },
    reset: function reset() {
      this.viewForm = {
        id: null,
        name: '',
        camera: null,
        viewInfo: null,
        pic: null,
        workPointId: null,
        type: ''
      };
      this.dataURL = null;
    },
    saveView: function saveView() {
      var _this3 = this;

      this.$refs['viewForm'].validate(function (valid) {
        if (valid) {
          // 先上传图片
          _this3.loading = true;
          var formData = new FormData();
          formData.append('attach', Object(_utils__WEBPACK_IMPORTED_MODULE_4__["dataURLtoBlob"])(_this3.dataURL));
          Object(_api_doc__WEBPACK_IMPORTED_MODULE_2__["uploadImg"])(formData).then(function (res) {
            if (res.success) {
              _this3.viewForm.camera = _this3.viewer.getCameraInfo();
              _this3.viewForm.viewInfo = _this3.viewPointList;
              _this3.viewForm.pic = res.result;
              Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["saveBimView"])(_this3.viewForm).then(function (res) {
                _this3.loading = false;
                if (res.success) {
                  var params = {
                    assetId: res.result.id,
                    assetType: 'BimView',
                    linkType: 'detailedModel',
                    sourceList: [{
                      sourceId: JSON.parse(_this3.$storage.getStorage('project')).id,
                      sourceType: 'Project'
                    }, {
                      sourceId: _this3.viewForm.workPointId,
                      sourceType: 'WorkPoint'
                    }]
                  };
                  if (!_this3.viewForm.id) {
                    Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["saveAssetBind"])(params).then(function (res) {
                      if (res.success) {
                        _this3.$message.success(res.message);
                        _this3.reset();
                        _this3.dialogFormVisible = false;
                        _this3.loading = false;
                        _this3.getList();
                      }
                    });
                  } else {
                    _this3.$message.success(res.message);
                    _this3.reset();
                    _this3.dialogFormVisible = false;
                    _this3.loading = false;
                    _this3.getList();
                  }
                }
              });
            }
          });
        }
      });
    },
    deleteView: function deleteView(id, num) {
      var _this4 = this;

      this.$confirm('是否确定删除该视图?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["deleteView"])({ id: id }).then(function (res) {
          if (res.success) {
            _this4.list.splice(num, 1);
          }
        });
      });
    },

    // 渲染View
    goView: function goView(num) {
      if (!this.isLoad) {
        this.$message.warning('请稍后操作');
        return false;
      }
      this.currentNum = num;
      var temp = this.list[num];
      if (temp && temp.viewInfo) {
        this.$emit('showView', temp);
      }
    }
  }
});

/***/ })

}]);