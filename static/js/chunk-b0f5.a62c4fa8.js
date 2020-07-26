(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-b0f5"],{

/***/ "4p30":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/viewPoint.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5arj":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/viewPoint.vue?vue&type=template&id=e31b246a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"viewPointDiv drawer-wrap"},[_c('label',{staticClass:"titleLabel"},[_vm._v("视口")]),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('el-button',{staticClass:"btn",attrs:{"size":"mini"},on:{"click":_vm.addView}},[_vm._v("新建\n    ")]),_vm._v(" "),_c('el-select',{staticStyle:{"margin-top":"10px","margin-left":"10px"},attrs:{"clearable":"","size":"mini","placeholder":"请选择工点"},on:{"change":_vm.changeWorkPointId},model:{value:(_vm.workPointId),callback:function ($$v) {_vm.workPointId=$$v},expression:"workPointId"}},_vm._l((_vm.workPointList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),_vm._l((_vm.listData),function(item,index){return _c('div',{key:index},[(item.name)?_c('div',{key:index,staticClass:"contentDiv flex",on:{"click":function($event){return _vm.goView(index)}}},[_c('img',{attrs:{"src":_vm.fileUrl+'img/'+ item.pic}}),_vm._v(" "),_c('label',{staticClass:"flex1"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('i',{staticClass:"icon iconfont iconcha",on:{"click":function($event){$event.stopPropagation();return _vm.deleteView(item.id)}}})]):_vm._e()])}),_vm._v(" "),_c('el-dialog',{staticClass:"viewPointDialog",attrs:{"title":"新建视点","append-to-body":"","close-on-click-modal":false,"visible":_vm.dialogFormVisible,"width":"340px"},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('img',{attrs:{"src":_vm.dataURL}}),_vm._v(" "),_c('el-form',{ref:"viewForm",attrs:{"model":_vm.viewForm,"rules":_vm.rules,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"视点名称","prop":"name"}},[_c('el-input',{attrs:{"type":"text","placeholder":"请输入视点名称"},model:{value:(_vm.viewForm.name),callback:function ($$v) {_vm.$set(_vm.viewForm, "name", $$v)},expression:"viewForm.name"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"所属工点","prop":"workPointId"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请选择工点"},model:{value:(_vm.viewForm.workPointId),callback:function ($$v) {_vm.$set(_vm.viewForm, "workPointId", $$v)},expression:"viewForm.workPointId"}},_vm._l((_vm.workPointList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary"},on:{"click":_vm.saveView}},[_vm._v("提交\n      ")])],1)],1)],2)}
var staticRenderFns = []



/***/ }),

/***/ "Fnor":
/*!******************************************************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/viewPoint.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewPoint.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "4p30");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Q8N0":
/*!*****************************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/viewPoint.vue?vue&type=template&id=e31b246a& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_template_id_e31b246a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewPoint.vue?vue&type=template&id=e31b246a& */ "5arj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_template_id_e31b246a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_template_id_e31b246a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "cptT":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/viewPoint.vue?vue&type=script&lang=js& ***!
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DetailedModelViewpoint',
  components: {},
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
      listData: [],
      update: true,
      testList: [],
      workPointList: [],
      workPointId: null
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['fileUrl', 'viewer', 'loading'])),
  watch: {},
  mounted: function mounted() {
    this.listQuery.linkType = this.linkType;
    document.getElementsByClassName('viewPointDiv')[0].style.height = document.documentElement.clientHeight - 150 + 'px';
    // 获取工点
    this.getWorkPointList();
    this.getList();
  },

  methods: {
    changeWorkPointId: function changeWorkPointId() {
      if (!this.workPointId || this.workPointId === '') {
        this.listQuery = {
          linkType: this.linkType,
          sourceId: JSON.parse(this.$storage.getStorage('project')).id,
          sourceType: 'Project'
        };
      } else {
        this.listQuery = {
          linkType: this.linkType,
          sourceId: this.workPointId,
          sourceType: 'WorkPoint'
        };
      }
      this.getList();
    },
    getWorkPointList: function getWorkPointList() {
      var _this = this;

      Object(_api_project_workPoint__WEBPACK_IMPORTED_MODULE_5__["getWorkPointList"])({}).then(function (res) {
        if (res.success) {
          _this.workPointList = res.result.list;
        }
      });
    },
    getList: function getList() {
      var _this2 = this;

      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["queryBimViewpoints"])(this.listQuery).then(function (res) {
        if (res.success) {
          if (res.result.length < 1) {
            res.result = [{}];
          }
          _this2.listData = res.result;
          _this2.$forceUpdate();
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
      var _this3 = this;

      this.$refs['viewForm'].validate(function (valid) {
        if (valid) {
          // 先上传图片
          _this3.loading = true;
          var formData = new FormData();
          formData.append('attach', Object(_utils__WEBPACK_IMPORTED_MODULE_4__["dataURLtoBlob"])(_this3.dataURL));
          Object(_api_doc__WEBPACK_IMPORTED_MODULE_2__["uploadImg"])(formData).then(function (res) {
            if (res.success) {
              _this3.viewForm.pic = res.result;
              Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["saveBimViewPoint"])(_this3.viewForm).then(function (res) {
                if (res.success) {
                  // 调用保存关系
                  var params = {
                    assetId: res.result.id,
                    assetType: 'BimViewpoint',
                    linkType: 'detailedModel',
                    sourceList: [{
                      sourceId: JSON.parse(_this3.$storage.getStorage('project')).id,
                      sourceType: 'Project'
                    }, {
                      sourceId: _this3.viewForm.workPointId,
                      sourceType: 'WorkPoint'
                    }]
                  };
                  Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["saveAssetBind"])(params).then(function (res) {
                    if (res.success) {
                      _this3.$message.success(res.message);
                      _this3.reset();
                      _this3.dialogFormVisible = false;
                      _this3.loading = false;
                      _this3.getList();
                    }
                  });
                }
              });
            }
          });
        }
      });
    },
    deleteView: function deleteView(id) {
      var _this4 = this;

      this.$confirm('是否确定删除该视口?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_3__["deleteViewPoint"])({ id: id }).then(function (res) {
          if (res.success) {
            _this4.$message.success(res.message);
            _this4.getList();
          }
        });
      });
    },

    // 渲染View
    goView: function goView(num) {
      this.viewer.setCamera(JSON.parse(this.listData[num].camera));
    },
    addView: function addView() {
      if (!this.viewer) {
        this.$message.error('请先选择模型');
        return false;
      }
      this.viewForm.camera = this.viewer.getCameraInfo();
      this.dataURL = this.viewer.getScreenshot(document.getElementById('viewer').clientWidth - 1, document.getElementById('viewer').clientHeight - 1);
      this.dialogFormVisible = true;
    }
  }
});

/***/ }),

/***/ "q14R":
/*!***********************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/viewPoint.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewPoint.vue?vue&type=script&lang=js& */ "cptT");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_viewPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "tlDJ":
/*!**********************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/viewPoint.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewPoint_vue_vue_type_template_id_e31b246a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewPoint.vue?vue&type=template&id=e31b246a& */ "Q8N0");
/* harmony import */ var _viewPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewPoint.vue?vue&type=script&lang=js& */ "q14R");
/* empty/unused harmony star reexport *//* harmony import */ var _viewPoint_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewPoint.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "Fnor");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _viewPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewPoint_vue_vue_type_template_id_e31b246a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viewPoint_vue_vue_type_template_id_e31b246a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "viewPoint.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);