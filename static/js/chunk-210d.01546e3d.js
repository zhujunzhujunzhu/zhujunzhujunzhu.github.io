(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-210d"],{

/***/ "1Nuf":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/applicationManager/programmeChild.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _components_CesiumViewer_cesiumViewPointDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CesiumViewer/cesiumViewPointDialog */ "3Mai");
/* harmony import */ var _api_project_bimViews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/project/bimViews */ "1O3d");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _components_customerForm_Upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/customerForm/Upload */ "xvje");
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/doc */ "5HWN");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");
/* harmony import */ var _api_project_application_application__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/project/application/application */ "r4qb");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






// getView






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Role',
  components: {
    tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    cesiumViewPointDialog: _components_CesiumViewer_cesiumViewPointDialog__WEBPACK_IMPORTED_MODULE_3__["default"],
    FmUpload: _components_customerForm_Upload__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_2__["default"],
    buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      dialogFormVisible: false, // 弹出框显示判断
      authFormVisible: false,
      dialogStatus: 'create',
      textMap: {
        update: '编辑',
        create: '新建'
      },
      loading: false, // 按钮重复提交判断
      listLoading: false,
      rules: {
        name: [{ required: true, message: '请填写子方案名称' }]
      },
      planForm: {
        id: '',
        name: '',
        parentId: '',
        parentName: '',
        bimViewId: '',
        bimViewpoint: {},
        workPointId: '',
        workPoint: '',
        projectPhase: '',
        applyPoint: '',
        remark: null,
        docId: ''
      },
      bimViewList: [],
      columns: [{
        text: '工点',
        value: 'workPoint'
      }, {
        text: '阶段',
        value: 'projectPhase',
        filter: _utils__WEBPACK_IMPORTED_MODULE_5__["getNameByCode"],
        filterParams: ['project_phase']
      }, {
        text: '应用类型',
        value: 'applyPoint',
        filter: _utils__WEBPACK_IMPORTED_MODULE_5__["getNameByCode"],
        filterParams: ['apply_point']
      }, {
        text: '子方案名称',
        value: 'name'
      }, {
        text: '说明',
        value: 'remark'
      }, {
        text: '操作',
        type: 'iconButton',
        list: this.operButton
      }],
      listQuery: {
        pageSize: 15,
        currPage: 1,
        name: null,
        parentId: null
      },
      total: 0,
      list: [],
      isShow: false,
      fileList: [],
      parentPlan: null
    };
  },
  mounted: function mounted() {
    this.parentPlan = JSON.parse(this.$storage.getStorage('parentPlan'));
    this.listQuery.parentId = this.parentPlan.id;
    this.initForm();
    this.getList();
    this.queryBimViews();
  },

  methods: {
    queryBimViews: function queryBimViews() {
      var _this = this;

      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_4__["queryBimViews"])({
        linkType: null,
        sourceId: this.parentPlan.workPointId,
        sourceType: 'WorkPoint',
        extParam: {
          type: 'bim_view_application'
        }
      }).then(function (res) {
        if (res.success) {
          _this.bimViewList = res.result;
        }
      });
    },

    // 获取所有子方案
    getList: function getList() {
      var _this2 = this;

      this.listLoading = true;
      Object(_api_project_application_application__WEBPACK_IMPORTED_MODULE_9__["getApplicationList"])(this.listQuery).then(function (response) {
        if (response.success) {
          if (response.result.list.length === 1) {
            response.result.list[0].isOne = true;
          } else {
            response.result.list.forEach(function (item, index) {
              if (index === 0) {
                item.isFirst = true;
              }
              if (index === response.result.list.length - 1) {
                item.isLast = true;
              }
            });
          }
          _this2.list = response.result.list;
          _this2.total = response.result.total;
        }
        _this2.listLoading = false;
      });
    },
    search: function search() {
      this.getList();
    },
    tableRowClassFun: function tableRowClassFun(val) {
      if (!val.isFirst && !val.isOne) {
        return 'white';
      }
    },
    getCamera: function getCamera(val) {
      this.planForm.bimViewpoint = val;
    },

    // 表格操作按鈕
    operButton: function operButton(val) {
      var btns = [{
        class: 'iconmokuai',
        value: '模型配置',
        click: this.goModel,
        privilege: 'P_yygl_yl'
      }, {
        id: 'up',
        class: 'iconshangyi btnClass',
        value: '上移',
        click: this.updateToUp,
        privilege: 'P_yygl_cz'
      }, {
        id: 'upLevel',
        class: 'iconiconfont_-',
        value: '置顶',
        click: this.updateToTop,
        privilege: 'P_yygl_cz'
      }, {
        id: 'down',
        class: 'iconxiayi btnClass',
        value: '下移',
        click: this.updateToDown,
        privilege: 'P_yygl_cz'
      }, {
        id: 'downLevel',
        class: 'iconjiangji',
        value: '置底',
        click: this.updateToBottom,
        privilege: 'P_yygl_cz'
      }, {
        class: 'iconxiugai',
        value: '编辑',
        click: this.updatePlan,
        privilege: 'P_yygl_cz'
      }, {
        class: 'iconshanchu1',
        value: '删除',
        click: this.deletePlan,
        privilege: 'P_yygl_cz'
      }];
      // 判断是否是第一行或者是最后行
      if (val.isFirst) {
        btns.splice(1, 1);
        btns.splice(1, 1);
      }
      if (val.isLast) {
        btns.splice(3, 1);
        btns.splice(3, 1);
      }
      if (val.isOne) {
        btns.splice(1, 1);
        btns.splice(1, 1);
        btns.splice(1, 1);
        btns.splice(1, 1);
      }
      return btns;
    },
    currentChange: function currentChange(val) {
      this.listQuery.currPage = val;
      this.getList();
    },
    updateToTop: function updateToTop(val) {
      var _this3 = this;

      Object(_api_project_application_application__WEBPACK_IMPORTED_MODULE_9__["updateToBottom"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this3.getList();
        }
      });
    },
    updateToBottom: function updateToBottom(val) {
      var _this4 = this;

      Object(_api_project_application_application__WEBPACK_IMPORTED_MODULE_9__["updateToTop"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this4.getList();
        }
      });
    },
    updateToUp: function updateToUp(val) {
      var _this5 = this;

      Object(_api_project_application_application__WEBPACK_IMPORTED_MODULE_9__["updateToDown"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this5.getList();
        }
      });
    },
    updateToDown: function updateToDown(val) {
      var _this6 = this;

      Object(_api_project_application_application__WEBPACK_IMPORTED_MODULE_9__["updateToUp"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this6.getList();
        }
      });
    },
    goModel: function goModel(val) {
      // 跳转模型配置
      this.$storage.setStorage('applyId', val.row.id);
      this.$storage.setStorage('isApply', true); // 设置为应用跳转
      this.$router.push('/fullLineModel/planFullline');
    },

    // 更新子方案
    updatePlan: function updatePlan(val) {
      var _this7 = this;

      // 获取图片
      if (val.row.docId) {
        Object(_api_doc__WEBPACK_IMPORTED_MODULE_7__["getPicture"])({ docId: val.row.docId }).then(function (res) {
          if (res.success) {
            res.result.forEach(function (item) {
              var arr = item.originalFileName.split('.');
              _this7.fileList.push({
                url: _this7.fileUrl + 'doc/' + item.fileName,
                id: item.id,
                name: item.originalFileName,
                type: arr[arr.length - 1]
              });
            });
          }
        });
      }
      Object(_api_project_application_application__WEBPACK_IMPORTED_MODULE_9__["getApplication"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this7.dialogStatus = 'update';
          if (res.result.bimViewpoint) {
            res.result.bimViewpoint = JSON.parse(res.result.bimViewpoint);
          }
          _this7.planForm = res.result;
          var parentPlan = JSON.parse(_this7.$storage.getStorage('parentPlan'));
          _this7.planForm.parentName = parentPlan.name;
          _this7.dialogFormVisible = true;
        }
      });
    },

    // 删除子方案
    deletePlan: function deletePlan(val) {
      var _this8 = this;

      this.$confirm('是否确定删除该记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        Object(_api_project_application_application__WEBPACK_IMPORTED_MODULE_9__["deleteApplication"])({ id: val.row.id }).then(function (response) {
          if (response.success) {
            _this8.getList();
            _this8.$message.success('删除成功');
          } else {
            _this8.$message.error(response.message);
          }
        });
      });
    },
    reset: function reset() {
      // 清空
      this.$refs['planForm'].resetFields();
    },
    initForm: function initForm() {
      var parentPlan = JSON.parse(this.$storage.getStorage('parentPlan'));
      this.planForm = {
        id: '',
        name: '',
        parentName: parentPlan.name,
        parentId: parentPlan.id,
        bimViewId: '',
        bimViewpoint: {},
        remark: null,
        workPointId: parentPlan.workPointId,
        workPoint: parentPlan.workPoint,
        projectPhase: parentPlan.projectPhase,
        applyPoint: parentPlan.applyPoint,
        docId: ''
      };
    },

    // 新增子方案
    addPlan: function addPlan() {
      this.dialogStatus = 'create';
      this.initForm();
      this.dialogFormVisible = true;
    },

    // 保存子方案
    savePlan: function savePlan() {
      var _this9 = this;

      this.$refs['planForm'].validate(function (valid) {
        if (valid) {
          _this9.loading = true;
          Object(_api_project_application_application__WEBPACK_IMPORTED_MODULE_9__["saveApplication"])(_this9.planForm).then(function (response) {
            if (response.success) {
              _this9.$message.success('保存成功');
              _this9.dialogFormVisible = false;
              _this9.reset();
              _this9.getList();
            } else {
              _this9.$message.error(response.message);
            }
            _this9.loading = false;
          });
        }
      });
    },
    getViewPoint: function getViewPoint() {
      if (!this.planForm.bimViewId || this.planForm.bimViewId === '') {
        this.$message.warning('请先选择视图');
        return false;
      }
      this.isShow = true;
    }
  }
});

/***/ }),

/***/ "1vai":
/*!****************************************************************************************!*\
  !*** ./src/components/CesiumViewer/cesiumViewPointDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./cesiumViewPointDialog.vue?vue&type=script&lang=js& */ "u+Yf");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "3Mai":
/*!***************************************************************!*\
  !*** ./src/components/CesiumViewer/cesiumViewPointDialog.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cesiumViewPointDialog_vue_vue_type_template_id_dbb8ebfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cesiumViewPointDialog.vue?vue&type=template&id=dbb8ebfc& */ "sM1q");
/* harmony import */ var _cesiumViewPointDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cesiumViewPointDialog.vue?vue&type=script&lang=js& */ "1vai");
/* empty/unused harmony star reexport *//* harmony import */ var _cesiumViewPointDialog_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cesiumViewPointDialog.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "duYN");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cesiumViewPointDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cesiumViewPointDialog_vue_vue_type_template_id_dbb8ebfc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cesiumViewPointDialog_vue_vue_type_template_id_dbb8ebfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "cesiumViewPointDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ "AzA6":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CesiumViewer/cesiumViewPointDialog.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "CjcT":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CesiumViewer/cesiumViewPointDialog.vue?vue&type=template&id=dbb8ebfc& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"cesiumDialog",attrs:{"title":"选取视口","width":"70%","before-close":_vm.beforeClose,"close-on-click-modal":false,"visible":_vm.isShow},on:{"update:visible":function($event){_vm.isShow=$event}}},[_c('cesium-viewer',{ref:"cesium",attrs:{"tileset":_vm.tileset}}),_vm._v(" "),_c('bottomButton',{attrs:{"btn-list":_vm.btnList,"show-tree":false},on:{"dxClick":_vm.dxClick,"qxClick":_vm.qxClick}}),_vm._v(" "),_c('div',{staticClass:"dxDiv"},[(_vm.showDx)?_c('div',{staticClass:"flex"},[_c('label',[_vm._v("地形控制：")]),_vm._v(" "),_c('el-slider',{staticClass:"silder",attrs:{"step":0.05,"input-size":"mini","min":0,"max":1},on:{"input":_vm.changeSilder},model:{value:(_vm.dxSlider),callback:function ($$v) {_vm.dxSlider=$$v},expression:"dxSlider"}})],1):_vm._e(),_vm._v(" "),(_vm.showQx)?_c('div',{staticClass:"flex"},[_c('label',[_vm._v("倾斜摄影：")]),_vm._v(" "),_c('el-slider',{staticClass:"silder",attrs:{"step":0.05,"input-size":"mini","min":0,"max":1},on:{"input":_vm.changeQxSilder},model:{value:(_vm.qxSlider),callback:function ($$v) {_vm.qxSlider=$$v},expression:"qxSlider"}})],1):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.beforeClose}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.saveViewPoint}},[_vm._v("提交")])],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "VA4T":
/*!*****************************************************************!*\
  !*** ./src/views/project/applicationManager/programmeChild.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _programmeChild_vue_vue_type_template_id_5e627a2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programmeChild.vue?vue&type=template&id=5e627a2d& */ "paEI");
/* harmony import */ var _programmeChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programmeChild.vue?vue&type=script&lang=js& */ "lyVY");
/* empty/unused harmony star reexport *//* harmony import */ var _programmeChild_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programmeChild.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "jEuU");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _programmeChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _programmeChild_vue_vue_type_template_id_5e627a2d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _programmeChild_vue_vue_type_template_id_5e627a2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "programmeChild.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "duYN":
/*!***********************************************************************************************************************!*\
  !*** ./src/components/CesiumViewer/cesiumViewPointDialog.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./cesiumViewPointDialog.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "AzA6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "jEuU":
/*!*************************************************************************************************************************!*\
  !*** ./src/views/project/applicationManager/programmeChild.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./programmeChild.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "n6Ay");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "kECi":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/applicationManager/programmeChild.vue?vue&type=template&id=5e627a2d& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container programmeChildDiv"},[_c('my-card',{attrs:{"title":"应用方案详细配置"}},[_c('div',{staticClass:"filter-container"},[_c('el-input',{staticClass:"filter-item",staticStyle:{"width":"200px"},attrs:{"placeholder":"名称"},model:{value:(_vm.listQuery.name),callback:function ($$v) {_vm.$set(_vm.listQuery, "name", $$v)},expression:"listQuery.name"}}),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item projectButton",attrs:{"icon":"el-icon-search"},on:{"click":_vm.search}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"},{name:"button-privilege",rawName:"v-button-privilege",value:('P_yygl_cz'),expression:"'P_yygl_cz'"}],staticClass:"filter-item addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addPlan}},[_vm._v("添加")])],1),_vm._v(" "),_c('table-list',{staticClass:"dataTable",staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"columns":_vm.columns,"list-loading":_vm.listLoading,"total":_vm.total,"page-size":_vm.listQuery.pageSize,"table-row-class-fun":_vm.tableRowClassFun},on:{"currentChange":_vm.currentChange}})],1),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":_vm.textMap[_vm.dialogStatus],"visible":_vm.dialogFormVisible,"close-on-click-modal":false},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"planForm",attrs:{"rules":_vm.rules,"model":_vm.planForm,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"主方案","prop":"parentName"}},[_c('label',[_vm._v(_vm._s(_vm.planForm.parentName))])])],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"子方案名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入子方案名称"},model:{value:(_vm.planForm.name),callback:function ($$v) {_vm.$set(_vm.planForm, "name", $$v)},expression:"planForm.name"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"链接文件","prop":"docId"}},[_c('fm-upload',{ref:"fmUpload",attrs:{"is-file":true,"file-name":"attach","file-ok-list":_vm.fileList},model:{value:(_vm.planForm.docId),callback:function ($$v) {_vm.$set(_vm.planForm, "docId", $$v)},expression:"planForm.docId"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"方案说明","prop":"remark"}},[_c('el-input',{staticClass:"filter-item",staticStyle:{"width":"100%"},attrs:{"type":"textarea","rows":"5","placeholder":"请输入方案说明"},model:{value:(_vm.planForm.remark),callback:function ($$v) {_vm.$set(_vm.planForm, "remark", $$v)},expression:"planForm.remark"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.savePlan}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.isShow)?_c('cesium-view-point-dialog',{attrs:{"camera":_vm.planForm.bimViewpoint?_vm.planForm.bimViewpoint.camera:null,"is-show":_vm.isShow,"view-id":_vm.planForm.bimViewId},on:{"update:isShow":function($event){_vm.isShow=$event},"update:is-show":function($event){_vm.isShow=$event},"getCamera":_vm.getCamera}}):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "lyVY":
/*!******************************************************************************************!*\
  !*** ./src/views/project/applicationManager/programmeChild.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./programmeChild.vue?vue&type=script&lang=js& */ "1Nuf");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "n6Ay":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/applicationManager/programmeChild.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "paEI":
/*!************************************************************************************************!*\
  !*** ./src/views/project/applicationManager/programmeChild.vue?vue&type=template&id=5e627a2d& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_template_id_5e627a2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./programmeChild.vue?vue&type=template&id=5e627a2d& */ "kECi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_template_id_5e627a2d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_programmeChild_vue_vue_type_template_id_5e627a2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "r4qb":
/*!****************************************************!*\
  !*** ./src/api/project/application/application.js ***!
  \****************************************************/
/*! exports provided: getApplicationList, deleteApplication, saveApplication, getApplication, updateToUp, updateToDown, updateToBottom, updateToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationList", function() { return getApplicationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteApplication", function() { return deleteApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveApplication", function() { return saveApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplication", function() { return getApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUp", function() { return updateToUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDown", function() { return updateToDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToBottom", function() { return updateToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToTop", function() { return updateToTop; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getApplicationList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsApplication/list',
    method: 'post',
    data: param
  });
}

function deleteApplication(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsApplication/delete',
    method: 'post',
    data: param
  });
}

function saveApplication(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsApplication/save',
    method: 'post',
    data: param
  });
}

function getApplication(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsApplication/get',
    method: 'post',
    data: param
  });
}

function updateToUp(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsApplication/updateToUp',
    method: 'post',
    data: param
  });
}

function updateToDown(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsApplication/updateToDown',
    method: 'post',
    data: param
  });
}

function updateToBottom(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsApplication/updateToBottom',
    method: 'post',
    data: param
  });
}

function updateToTop(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbsApplication/updateToTop',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "sM1q":
/*!**********************************************************************************************!*\
  !*** ./src/components/CesiumViewer/cesiumViewPointDialog.vue?vue&type=template&id=dbb8ebfc& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_template_id_dbb8ebfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./cesiumViewPointDialog.vue?vue&type=template&id=dbb8ebfc& */ "CjcT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_template_id_dbb8ebfc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cesiumViewPointDialog_vue_vue_type_template_id_dbb8ebfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "u+Yf":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CesiumViewer/cesiumViewPointDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CesiumViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CesiumViewer */ "Zgts");
/* harmony import */ var _api_project_bimViews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/project/bimViews */ "1O3d");
/* harmony import */ var _api_project_bimFloder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/project/bimFloder */ "lC0u");
/* harmony import */ var _views_project_BIM_bottomButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/project/BIM/bottomButton */ "RNWj");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/doc */ "5HWN");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "7Qib");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var currentTileSets = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CesiumViewPointDialog',
  components: { CesiumViewer: _components_CesiumViewer__WEBPACK_IMPORTED_MODULE_3__["default"], bottomButton: _views_project_BIM_bottomButton__WEBPACK_IMPORTED_MODULE_6__["default"] },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    camera: {
      type: Object,
      default: function _default() {}
    },
    viewId: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      btnList: ['dx', 'qx'],
      showQx: false,
      showDx: false,
      dxSlider: 0.5,
      qxSlider: 1,
      loading: false
    };
  },

  watch: {},
  beforeDestroy: function beforeDestroy() {
    this.$refs.cesium.destroyViewer();
  },
  mounted: function mounted() {
    var _this = this;

    currentTileSets = [];
    this.$nextTick(function () {
      _this.init();
    });
  },

  methods: {
    changeSilder: function changeSilder() {
      this.$refs.cesium.groundAlpha(this.dxSlider);
    },
    changeQxSilder: function changeQxSilder() {
      this.$refs.cesium.photoAlphaHandler(this.qxSlider);
    },
    dxClick: function dxClick(val) {
      if (!val.display) {
        this.$refs.cesium.groundAlpha(1);
        this.dxSlider = 0.5;
      }
      this.showDx = val.display;
    },
    qxClick: function qxClick(val) {
      if (!val.display) {
        this.$refs.cesium.photoAlphaHandler(1);
      }
      this.showQx = val.display;
    },
    saveViewPoint: function saveViewPoint() {
      var _this2 = this;

      this.loading = true;
      var viewPoint = this.$refs['cesium'].saveViewPoint();
      var formData = new FormData();
      formData.append('attach', Object(_utils__WEBPACK_IMPORTED_MODULE_9__["dataURLtoBlob"])(viewPoint.dataURL));
      Object(_api_doc__WEBPACK_IMPORTED_MODULE_8__["uploadImg"])(formData).then(function (res) {
        if (res.success) {
          var camera = {
            direction: viewPoint.direction,
            position: viewPoint.position,
            up: viewPoint.up
          };
          _this2.$emit('getCamera', { img: res.result, camera: camera });
          _this2.beforeClose();
          _this2.loading = false;
        }
      });
    },
    init: function init() {
      var _this3 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var result, docList;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this3.getView(_this3.viewId);

              case 2:
                result = _context.sent;
                _context.next = 5;
                return _this3.projectDocList();

              case 5:
                docList = _context.sent;

                if (result) {
                  (function () {
                    // this.currentCamera = JSON.parse(this.currentPlan.bimViewpoint).camera
                    // this.currentModels = JSON.parse(result[0].viewInfo)
                    var tileset = {};
                    var temp = {};
                    var arr = []; // 组装传给模型数据
                    temp = JSON.parse(result.viewInfo);

                    var _loop = function _loop(i) {
                      tileset = {
                        name: i,
                        url: _this3.$gisUrl + 'getModel?tileset=true&id=' + i + '_' + (temp[i].version ? temp[i].version : '65536')
                        // debugger
                      };docList.forEach(function (item) {
                        if (item.sceneId && item.sceneId.toString() === i && item.sse) {
                          tileset.maximumScreenSpaceError = item.sse;
                        }
                      });
                      var _tileset = _this3.$refs.cesium.addTileset(tileset);
                      arr.push({
                        tileset: _this3.$refs.cesium.getTileset(_tileset),
                        familyList: temp[i].familyList,
                        familyTypeList: temp[i].familyTypeList,
                        modelList: temp[i].modelList,
                        sceneId: i,
                        version: temp[i].version ? temp[i].version : null,
                        isVisable: typeof temp[i].sceneVisable === 'undefined' ? true : temp[i].sceneVisable
                      });
                      currentTileSets.push(_tileset);
                    };

                    for (var i in temp) {
                      _loop(i);
                    }
                    console.info('tileset\u6570\u91CF=' + arr.length);
                    _this3.$refs.cesium.tilesetVisible(arr);
                    _this3.$refs['cesium'].flyToTileset(_this3.$refs.cesium.getTileset(currentTileSets[0]));
                  })();
                }

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))();
    },
    beforeClose: function beforeClose() {
      this.$emit('update:isShow', false);
    },
    projectDocList: function projectDocList() {
      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resove) {
        Object(_api_project_bimFloder__WEBPACK_IMPORTED_MODULE_5__["projectDocList"])({}).then(function (res) {
          if (res.success) {
            resove(res.result);
          }
        });
      });
    },
    queryBimViews: function queryBimViews() {
      var _this4 = this;

      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resove) {
        Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_4__["queryBimViews"])({
          linkType: 'projectFullLineModel',
          sourceId: JSON.parse(_this4.$storage.getStorage('project')).id,
          sourceType: 'Project'
        }).then(function (res) {
          if (res.success) {
            resove(res.result);
          }
        });
      });
    },
    getView: function getView(id) {
      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resove) {
        Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_4__["getView"])({ id: id }).then(function (res) {
          if (res.success) {
            resove(res.result);
          }
        });
      });
    }
  }
});

/***/ })

}]);