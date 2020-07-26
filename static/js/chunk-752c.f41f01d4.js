(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-752c"],{

/***/ "/a1F":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/views/project/projectManage/MBS/components/bimPreview.vue?vue&type=style&index=0&id=0c1504e0&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_style_index_0_id_0c1504e0_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./bimPreview.vue?vue&type=style&index=0&id=0c1504e0&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "qQMk");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_style_index_0_id_0c1504e0_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_style_index_0_id_0c1504e0_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_style_index_0_id_0c1504e0_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_style_index_0_id_0c1504e0_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_style_index_0_id_0c1504e0_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3GvX":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectManage/MBS/components/bimPreview.vue?vue&type=template&id=0c1504e0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bimPreviewDiv drawer-wrap"},[_c('drawer',{attrs:{"display":_vm.modelTreeSelect,"inner":true,"mask":false,"position":"left"},on:{"update:display":function($event){_vm.modelTreeSelect=$event}}},[_c('model-tree',{attrs:{"height":_vm.myHeight,"scene-list":_vm.sceneList}})],1),_vm._v(" "),_c('bim',{attrs:{"scene-list":_vm.sceneList},on:{"getViewer":_vm.getViewer}}),_vm._v(" "),_c('drawer',{attrs:{"display":_vm.rightToolDisplay,"inner":true,"mask":false,"width":"360px"},on:{"update:display":function($event){_vm.rightToolDisplay=$event}}},[(_vm.currentRightType === 'sx')?_c('attribute-model'):_vm._e()],1),_vm._v(" "),_c('bottom-button',{attrs:{"btn-list":_vm.btnList,"show-select-model":false,"select-model-select":_vm.showModel,"tree-select":_vm.modelTreeSelect,"default-tool-bar-select-type":"sx"},on:{"btnClick":_vm.btnClick}})],1)}
var staticRenderFns = []



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

/***/ "5hui":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/attribute.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "GQeE");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _api_project_bimFloder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/bimFloder */ "lC0u");


//
//
//
//
//
//
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
  name: 'AttributeModel',
  props: {},
  data: function data() {
    return {
      activeNames: [],
      list: []
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['viewer', 'currentSelectModel'])),
  watch: {
    currentSelectModel: function currentSelectModel(val) {
      if (val.id) {
        if (val.select) {
          this.getAttribute(val.id);
        } else {
          this.list = [];
        }
      }
    }
  },
  mounted: function mounted() {
    if (this.currentSelectModel && this.currentSelectModel !== '') {
      if (this.currentSelectModel.id) {
        if (this.currentSelectModel.select) {
          this.getAttribute(this.currentSelectModel.id);
        }
      }
    }
    document.getElementsByClassName('attributeDiv')[0].style.height = document.documentElement.clientHeight - 150 + 'px';
  },

  methods: {
    getAttribute: function getAttribute(id) {
      var _this = this;

      Object(_api_project_bimFloder__WEBPACK_IMPORTED_MODULE_3__["getSimpleModelInfo"])(id).then(function (res) {
        if (res) {
          var temp = [];
          var tempActive = [];
          temp = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(res).map(function (name) {
            return {
              name: name,
              items: babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(res[name]).map(function (key) {
                return { key: key, value: res[name][key] };
              })
            };
          });
          temp.sort(function (a, b) {
            if (b.name === '常规') return 1;
          });
          temp.forEach(function (item, index) {
            tempActive.push(index);
          });
          _this.activeNames = tempActive;
          _this.list = temp;
        }
      });
    }
  }
});

/***/ }),

/***/ "IV1Y":
/*!******************************************************************************************************************!*\
  !*** ./src/views/project/projectManage/MBS/components/bimPreview.vue?vue&type=template&id=0c1504e0&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_template_id_0c1504e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./bimPreview.vue?vue&type=template&id=0c1504e0&scoped=true& */ "3GvX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_template_id_0c1504e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_template_id_0c1504e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "K2V9":
/*!***********************************************************************!*\
  !*** ./src/views/project/projectManage/MBS/components/bimPreview.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bimPreview_vue_vue_type_template_id_0c1504e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bimPreview.vue?vue&type=template&id=0c1504e0&scoped=true& */ "IV1Y");
/* harmony import */ var _bimPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bimPreview.vue?vue&type=script&lang=js& */ "q1R+");
/* empty/unused harmony star reexport *//* harmony import */ var _bimPreview_vue_vue_type_style_index_0_id_0c1504e0_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bimPreview.vue?vue&type=style&index=0&id=0c1504e0&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "/a1F");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bimPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bimPreview_vue_vue_type_template_id_0c1504e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bimPreview_vue_vue_type_template_id_0c1504e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c1504e0",
  null
  
)

component.options.__file = "bimPreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "LHt6":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/attribute.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "MMqJ":
/*!*****************************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/attribute.vue?vue&type=template&id=48a257a8& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_template_id_48a257a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attribute.vue?vue&type=template&id=48a257a8& */ "v+0/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_template_id_48a257a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_template_id_48a257a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "O3GU":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectManage/MBS/components/bimPreview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_bim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/bim */ "/ncK");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _api_project_mbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/mbs */ "pc9B");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _BIM_components_modelTree_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../BIM/components/modelTree/index */ "nyTV");
/* harmony import */ var _components_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/drawer */ "BHIJ");
/* harmony import */ var _BIM_bottomButton_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../BIM/bottomButton/index */ "RNWj");
/* harmony import */ var _BIM_detailedModel_components_attribute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../BIM/detailedModel/components/attribute */ "Zxg3");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










var showUtil = null;
var sceneLength = 0;
var num = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BimPreview',
  components: {
    AttributeModel: _BIM_detailedModel_components_attribute__WEBPACK_IMPORTED_MODULE_8__["default"],
    BottomButton: _BIM_bottomButton_index__WEBPACK_IMPORTED_MODULE_7__["default"],
    drawer: _components_drawer__WEBPACK_IMPORTED_MODULE_6__["default"],
    ModelTree: _BIM_components_modelTree_index__WEBPACK_IMPORTED_MODULE_5__["default"],
    bim: _components_bim__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    mbsIds: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      sceneList: [],
      currentModels: [],
      modelTreeSelect: true,
      myHeight: null,
      btnList: ['sx'],
      showModel: true,
      rightToolDisplay: true,
      currentRightType: 'sx'
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['allSceneList', 'viewer', 'currentPage', 'currentSceneList', 'currentSelectModel'])),
  watch: {
    mbsIds: function mbsIds(val) {
      if (val && val.length > 0) {
        this.getList();
      }
    }
  },
  created: function created() {
    var _this = this;

    sceneLength = 0;
    showUtil = function showUtil() {
      sceneLength++;
      if (sceneLength >= num) {
        _this.hideUtil();
      }
    };
    this.$store.dispatch('setCurrentSelectModelId', null);
    // this.$store.dispatch('currentSelectModel', null)
  },
  destroyed: function destroyed() {
    // this.viewer.adjustCameraBySceneIds(this.currentSceneList)
    this.viewer.unlisten(JY.THREE.Events.ManifestLoaded, showUtil);
  },
  mounted: function mounted() {
    this.myHeight = document.getElementById('app').clientHeight - 390 + 'px';
    document.getElementsByClassName('attributeDiv')[0].style.height = this.myHeight;
    this.getList();
    // showUtil = () => {
    //   sceneLength++
    //   if (sceneLength >= num) {
    //     this.hideUtil()
    //   }
    // }
  },

  methods: {
    getViewer: function getViewer() {
      this.viewUtil();
    },
    viewUtil: function viewUtil() {
      var _this2 = this;

      this.sceneList.forEach(function (item) {
        if (_this2.allSceneList.findIndex(function (s) {
          return s === item.sceneId.toString();
        }) === -1) {
          num++;
        }
      });
      if (num === 0) {
        this.hideUtil();
      } else {
        this.viewer.listen(JY.THREE.Events.ManifestLoaded, showUtil);
      }
    },
    hideUtil: function hideUtil() {
      var _this3 = this;

      var tempModelArr = this.currentModels.map(function (item) {
        return item.modelId;
      });
      var temp = this.viewer.filterModels().map(function (item) {
        return item.id;
      });
      setTimeout(function () {
        _this3.viewer.setModelCustomColor(temp, new THREE.Color('#ffffff'), 0.5);
        // this.viewer.hideModels(temp)
        // this.viewer.showModels(tempModelArr)
        // this.$storage.setStorage('currentSelectModel', tempModelArr)
        // tempModelArr.forEach(item => {
        //   this.$store.dispatch('setCurrentSelectModelId', {
        //     id: item
        //   })
        // })
        // this.currentModels.forEach(item => {
        //   this.$store.dispatch('setCurrentSelectModelId', {
        //     id: item.modelId,
        //     select: true,
        //     sceneId: item.sceneId
        //   })
        // })
        _this3.viewer.addSelection(tempModelArr);
        if (_this3.currentSceneList.length > 0) {
          _this3.viewer.adjustCameraBySceneIds(_this3.currentSceneList);
        }
      });
    },
    getList: function getList() {
      var _this4 = this;

      Object(_api_project_mbs__WEBPACK_IMPORTED_MODULE_3__["batchComponents"])(this.mbsIds).then(function (res) {
        if (res.success) {
          var temp = [];
          res.result.forEach(function (item) {
            var sceneId = item.sceneId.toString();
            if (temp.findIndex(function (t) {
              return t.sceneId === item.sceneId.toString();
            }) === -1) {
              temp.push({
                sceneId: sceneId,
                version: null
              });
            }
          });
          _this4.sceneList = temp;
          _this4.currentModels = res.result;
          if (_this4.viewer) {
            _this4.hideUtil();
          }
        }
      });
    },
    btnClick: function btnClick(val) {
      if (val.type === 'modelTree') {
        // this.display = true
        this.modelTreeSelect = !this.modelTreeSelect;
      } else if (val.type === 'selectModel') {
        this.showModel = !this.showModel;
      } else {
        this.currentRightType = val.type;
        this.rightToolDisplay = val.display;
      }
    }
  }
});

/***/ }),

/***/ "Zxg3":
/*!**********************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/attribute.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attribute_vue_vue_type_template_id_48a257a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute.vue?vue&type=template&id=48a257a8& */ "MMqJ");
/* harmony import */ var _attribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute.vue?vue&type=script&lang=js& */ "klXl");
/* empty/unused harmony star reexport *//* harmony import */ var _attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attribute.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "vzRh");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _attribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attribute_vue_vue_type_template_id_48a257a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attribute_vue_vue_type_template_id_48a257a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "attribute.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "klXl":
/*!***********************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/attribute.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attribute.vue?vue&type=script&lang=js& */ "5hui");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "pc9B":
/*!********************************!*\
  !*** ./src/api/project/mbs.js ***!
  \********************************/
/*! exports provided: getmbsList, deletembs, savembs, getmbs, getmbsTreeData, getTenders, getWorkPoints, getParents, esModels, esModelsRelation, getComponents, saveComponents, saveModelComponents, deleteComponents, batchComponents, getParentsByIds, updateToDown, updateToDownLevel, updateToUp, updateToUpLevel, batchSaveModelComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getmbsList", function() { return getmbsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletembs", function() { return deletembs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savembs", function() { return savembs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getmbs", function() { return getmbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getmbsTreeData", function() { return getmbsTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTenders", function() { return getTenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkPoints", function() { return getWorkPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParents", function() { return getParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esModels", function() { return esModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esModelsRelation", function() { return esModelsRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponents", function() { return getComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveComponents", function() { return saveComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveModelComponents", function() { return saveModelComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComponents", function() { return deleteComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchComponents", function() { return batchComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentsByIds", function() { return getParentsByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDown", function() { return updateToDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDownLevel", function() { return updateToDownLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUp", function() { return updateToUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUpLevel", function() { return updateToUpLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchSaveModelComponents", function() { return batchSaveModelComponents; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getmbsList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/list',
    method: 'post',
    data: param
  });
}

function deletembs(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/delete',
    method: 'post',
    data: param
  });
}

function savembs(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/save',
    method: 'post',
    data: param
  });
}

function getmbs(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/get',
    method: 'post',
    data: param
  });
}

// 获取测点实时数据
function getmbsTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/treeData',
    method: 'post',
    data: param
  });
}

function getTenders(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/getTenders',
    method: 'post',
    data: param
  });
}

function getWorkPoints(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/getWorkPoints',
    method: 'post',
    data: param
  });
}
// 获取父节点
function getParents(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/getParents',
    method: 'post',
    data: param
  });
}

// 根据条件查询引擎中的构件列表
function esModels(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/esModels',
    method: 'post',
    data: param
  });
}

function esModelsRelation(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/esModelsRelation',
    method: 'post',
    data: param
  });
}

// 查询MBS关联构件列表
function getComponents(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/components',
    method: 'post',
    data: param
  });
}

// 保存MBS关联构件列表
function saveComponents(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/saveComponents',
    method: 'post',
    data: param
  });
}

// 保存MBS关联构件列表提示已绑定构件
function saveModelComponents(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/saveModelComponents',
    method: 'post',
    data: param
  });
}

// 清除MBS关联构件列表
function deleteComponents(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/deleteComponents',
    method: 'post',
    data: param
  });
}

// 根据mbsids获取所有构建
function batchComponents(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/batchComponents',
    method: 'post',
    data: param
  });
}

// 传入多个mbsIds获取父节点
function getParentsByIds(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/getParentsByIds',
    method: 'post',
    data: param
  });
}

function updateToDown(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/updateToDown',
    method: 'post',
    data: param
  });
}
function updateToDownLevel(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/updateToDownLevel',
    method: 'post',
    data: param
  });
}

function updateToUp(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/updateToUp',
    method: 'post',
    data: param
  });
}

function updateToUpLevel(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/updateToUpLevel',
    method: 'post',
    data: param
  });
}

function batchSaveModelComponents(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/mbs/batchSaveModelComponents',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "q1R+":
/*!************************************************************************************************!*\
  !*** ./src/views/project/projectManage/MBS/components/bimPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./bimPreview.vue?vue&type=script&lang=js& */ "O3GU");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_bimPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "qQMk":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectManage/MBS/components/bimPreview.vue?vue&type=style&index=0&id=0c1504e0&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "v+0/":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/attribute.vue?vue&type=template&id=48a257a8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"attributeDiv drawer-wrap"},[_c('label',{staticClass:"titleLabel"},[_vm._v("属性")]),_vm._v(" "),(_vm.list.length < 1)?_c('label',{staticClass:"noLabel"},[_vm._v("未获取到属性信息")]):_c('el-collapse',{model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},_vm._l((_vm.list),function(item,index){return _c('el-collapse-item',{key:index,attrs:{"title":item.name,"name":index}},_vm._l((item.items),function(child,num){return _c('div',{key:num,staticClass:"flex",staticStyle:{"margin-bottom":"5px"}},[_c('label',{staticClass:"flex1"},[_vm._v(_vm._s(child.key))]),_vm._v(" "),_c('label',{staticStyle:{"width":"185px"}},[_vm._v(_vm._s(child.value))])])}),0)}),1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "vzRh":
/*!******************************************************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/attribute.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attribute.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "LHt6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);