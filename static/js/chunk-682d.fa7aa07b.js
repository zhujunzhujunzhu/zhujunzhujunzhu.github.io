(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-682d"],{

/***/ "6i8j":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/fullLineModel/components/attribute.vue?vue&type=template&id=4c24a302& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fulllineAttributeDiv drawer-wrap attributeWrapper viewPointWrapper"},[_c('label',{staticClass:"titleLabel"},[_vm._v("属性")]),_vm._v(" "),(_vm.list.length < 1)?_c('label',{staticClass:"noLabel"},[_vm._v("未获取到属性信息")]):_c('el-collapse',{model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},_vm._l((_vm.list),function(item,index){return _c('el-collapse-item',{key:index,attrs:{"title":item.name,"name":index}},_vm._l((item.items),function(child,num){return _c('div',{key:num,staticClass:"flex",staticStyle:{"margin-bottom":"5px"}},[_c('label',{staticClass:"flex1"},[_vm._v(_vm._s(child.key))]),_vm._v(" "),_c('label',{staticStyle:{"width":"185px"}},[_vm._v(_vm._s(child.value))])])}),0)}),1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "MH2X":
/*!*****************************************************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/attribute.vue?vue&type=template&id=4c24a302& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_template_id_4c24a302___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attribute.vue?vue&type=template&id=4c24a302& */ "6i8j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_template_id_4c24a302___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_template_id_4c24a302___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "P85+":
/*!***********************************************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/attribute.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attribute.vue?vue&type=script&lang=js& */ "i85v");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "i1Y+":
/*!**********************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/attribute.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attribute_vue_vue_type_template_id_4c24a302___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute.vue?vue&type=template&id=4c24a302& */ "MH2X");
/* harmony import */ var _attribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute.vue?vue&type=script&lang=js& */ "P85+");
/* empty/unused harmony star reexport *//* harmony import */ var _attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attribute.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "jnbK");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _attribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attribute_vue_vue_type_template_id_4c24a302___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attribute_vue_vue_type_template_id_4c24a302___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "attribute.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "i85v":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/fullLineModel/components/attribute.vue?vue&type=script&lang=js& ***!
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
  name: 'FulllineAttribute',
  components: {},
  props: {},
  data: function data() {
    return {
      activeNames: [],
      list: []
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['currentSelectModel', 'isFull'])),
  watch: {
    currentSelectModel: function currentSelectModel(val) {
      if (val.id) {
        this.getAttribute(val.id);
        // if (val.select) {
        //   this.getAttribute(val.id)
        // } else {
        //   this.list = []
        // }
      }
    }
  },
  beforeDestroy: function beforeDestroy() {},
  mounted: function mounted() {
    if (this.currentSelectModel && this.currentSelectModel !== '') {
      if (this.currentSelectModel.id) {
        this.getAttribute(this.currentSelectModel.id);
      }
    }
    if (!this.isFull) {
      document.getElementsByClassName('attributeWrapper')[0].style.height = document.documentElement.clientHeight - 159 + 'px';
    } else {
      document.getElementsByClassName('attributeWrapper')[0].style.height = 'calc(100% - 30px)';
    }
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

/***/ "jjRo":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/fullLineModel/components/attribute.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "jnbK":
/*!******************************************************************************************************************************!*\
  !*** ./src/views/project/BIM/fullLineModel/components/attribute.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attribute.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "jjRo");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_attribute_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "lC0u":
/*!**************************************!*\
  !*** ./src/api/project/bimFloder.js ***!
  \**************************************/
/*! exports provided: categoryTreeData, saveCategory, dbsAttachList, dbsDocList, getCategory, saveDoc, uploadDbsAttaches, startBimTrans, getAttach, getModelInfo, getSimpleModelInfo, categoryActions, docActions, currCategoryActions, currCategoryPermitActions, currDocPermitActions, currDocActions, permitCategoryActions, permitDocActions, removeCategoryActions, removeDocActions, deleteAttach, deleteDoc, deleteCategory, projectDocList, start3dTiling, allDocList, updateToDown, updateToDownLevel, updateToTop, updateToUp, updateToUpLevel, updateToBottom, docListSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryTreeData", function() { return categoryTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCategory", function() { return saveCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbsAttachList", function() { return dbsAttachList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbsDocList", function() { return dbsDocList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDoc", function() { return saveDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadDbsAttaches", function() { return uploadDbsAttaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBimTrans", function() { return startBimTrans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttach", function() { return getAttach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelInfo", function() { return getModelInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSimpleModelInfo", function() { return getSimpleModelInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryActions", function() { return categoryActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docActions", function() { return docActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currCategoryActions", function() { return currCategoryActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currCategoryPermitActions", function() { return currCategoryPermitActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currDocPermitActions", function() { return currDocPermitActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currDocActions", function() { return currDocActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permitCategoryActions", function() { return permitCategoryActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permitDocActions", function() { return permitDocActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCategoryActions", function() { return removeCategoryActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDocActions", function() { return removeDocActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAttach", function() { return deleteAttach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDoc", function() { return deleteDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategory", function() { return deleteCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectDocList", function() { return projectDocList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start3dTiling", function() { return start3dTiling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDocList", function() { return allDocList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDown", function() { return updateToDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDownLevel", function() { return updateToDownLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToTop", function() { return updateToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUp", function() { return updateToUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUpLevel", function() { return updateToUpLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToBottom", function() { return updateToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docListSearch", function() { return docListSearch; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "Kw5r");



function categoryTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/categoryTreeData',
    method: 'post',
    data: param
  });
}

function saveCategory(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/saveCategory',
    method: 'post',
    data: param
  });
}

function dbsAttachList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/attachList',
    method: 'post',
    data: param
  });
}

function dbsDocList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/docList',
    method: 'post',
    data: param
  });
}

function getCategory(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/getCategory',
    method: 'post',
    data: param
  });
}

function saveDoc(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/saveDoc',
    method: 'post',
    data: param
  });
}

function uploadDbsAttaches(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/uploadDbsAttaches',
    method: 'post',
    data: param
  });
}

function startBimTrans(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/startBimTrans',
    method: 'post',
    data: param
  });
}

function getAttach(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/getAttach',
    method: 'post',
    data: param
  });
}

function getModelInfo(sceneId, version) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.bimUrl + 'webgl/getModelExtendInfo?sceneId=' + sceneId + '&version=' + version,
    method: 'get'
  });
}

function getSimpleModelInfo(modelId) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.bimUrl + 'webgl/getSimpleModelInfo?modelId=' + modelId,
    method: 'get'
  });
}

// 目录权限清单
function categoryActions(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/categoryActions',
    method: 'post',
    data: param
  });
}

// 文档权限清单
function docActions(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/docActions',
    method: 'post',
    data: param
  });
}

// 当前目录拥有的数据权限信息
function currCategoryActions(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/currCategoryActions',
    method: 'post',
    data: param
  });
}

// 当前目录拥有的数据权限配置信息
function currCategoryPermitActions(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/currCategoryPermitActions',
    method: 'post',
    data: param
  });
}

// 当前文档拥有的数据权限配置信息
function currDocPermitActions(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/currDocPermitActions',
    method: 'post',
    data: param
  });
}

// 当前文件拥有的数据权限信息
function currDocActions(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/currDocActions',
    method: 'post',
    data: param
  });
}

// 成果目录授权
function permitCategoryActions(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/permitCategoryActions',
    method: 'post',
    data: param
  });
}

// 成果文档授权
function permitDocActions(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/permitDocActions',
    method: 'post',
    data: param
  });
}

// 清除成果目录数据权限配置
function removeCategoryActions(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/removeCategoryActions',
    method: 'post',
    data: param
  });
}

// 清除成果文档数据权限配置
function removeDocActions(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/removeDocActions',
    method: 'post',
    data: param
  });
}

// 删除成果附件
function deleteAttach(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/deleteAttach',
    method: 'post',
    data: param
  });
}

// 删除成果文件
function deleteDoc(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/deleteDoc',
    method: 'post',
    data: param
  });
}

// 删除成果文件
function deleteCategory(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/deleteCategory',
    method: 'post',
    data: param
  });
}

// 获取项目下所有成果
function projectDocList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/projectDocList',
    method: 'post',
    data: param
  });
}

// 瓦片化
function start3dTiling(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/start3dTiling',
    method: 'post',
    data: param
  });
}

// 分页查询所有成果文件列表
function allDocList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/allDocList',
    method: 'post',
    data: param
  });
}

function updateToDown(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/updateToDown',
    method: 'post',
    data: param
  });
}

function updateToDownLevel(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/updateToDownLevel',
    method: 'post',
    data: param
  });
}

function updateToTop(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/updateToTop',
    method: 'post',
    data: param
  });
}

function updateToUp(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/updateToUp',
    method: 'post',
    data: param
  });
}

function updateToUpLevel(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/updateToUpLevel',
    method: 'post',
    data: param
  });
}

function updateToBottom(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/updateToBottom',
    method: 'post',
    data: param
  });
}

function docListSearch(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/dbs/docListSearch',
    method: 'post',
    data: param
  });
}

/***/ })

}]);