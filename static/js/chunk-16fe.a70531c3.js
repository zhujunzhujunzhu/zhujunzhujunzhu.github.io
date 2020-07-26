(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-16fe"],{

/***/ "+iuc":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "wgeU");
__webpack_require__(/*! ../modules/es6.string.iterator */ "FlQf");
__webpack_require__(/*! ../modules/web.dom.iterable */ "bBy9");
__webpack_require__(/*! ../modules/es6.set */ "B9jh");
__webpack_require__(/*! ../modules/es7.set.to-json */ "dL40");
module.exports = __webpack_require__(/*! ../modules/_core */ "WEpk").Set;

/***/ }),

/***/ "96iH":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/system/org/index.vue?vue&type=template&id=5b3676e9& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container orgDiv"},[_c('my-card',{attrs:{"title":"组织管理"}},[_c('div',{staticClass:"flex-space-between"},[_c('div',{staticClass:"flex flex-middle"},[_c('el-input',{staticClass:"filter-item",staticStyle:{"width":"200px"},attrs:{"placeholder":"请输入关键字,回车","clearable":""},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.searchFun($event)}},model:{value:(_vm.searchKey),callback:function ($$v) {_vm.searchKey=$$v},expression:"searchKey"}}),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item projectButton",attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":_vm.searchFun}},[_vm._v("查询")])],1),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addOrg}},[_vm._v("添加")])],1),_vm._v(" "),_c('tree-table',{attrs:{"data":_vm.data,"columns":_vm.columns,"list-loading":_vm.listLoading,"border":""}})],1),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"title":_vm.textMap[_vm.dialogStatus],"visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"orgForm",attrs:{"rules":_vm.rules,"model":_vm.orgForm,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"组织名称","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入权限名称"},model:{value:(_vm.orgForm.name),callback:function ($$v) {_vm.$set(_vm.orgForm, "name", $$v)},expression:"orgForm.name"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"组织编码","prop":"code"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入权限code"},model:{value:(_vm.orgForm.code),callback:function ($$v) {_vm.$set(_vm.orgForm, "code", $$v)},expression:"orgForm.code"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"组织类型","prop":"type"}},[_c('el-select',{attrs:{"placeholder":"请选择组织类型"},model:{value:(_vm.orgForm.type),callback:function ($$v) {_vm.$set(_vm.orgForm, "type", $$v)},expression:"orgForm.type"}},_vm._l((_vm.dictMap['org_type']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"法人","prop":"corporation"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入法人"},model:{value:(_vm.orgForm.corporation),callback:function ($$v) {_vm.$set(_vm.orgForm, "corporation", $$v)},expression:"orgForm.corporation"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"单位代码","prop":"orgCode"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","placeholder":"请输入权限单位代码"},model:{value:(_vm.orgForm.orgCode),callback:function ($$v) {_vm.$set(_vm.orgForm, "orgCode", $$v)},expression:"orgForm.orgCode"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"位置","prop":"location"}},[_c('position-select',{attrs:{"location":_vm.orgForm.location,"is-choose":_vm.isChoose},on:{"get-location":_vm.getLocation}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"签章图片"}},[(_vm.dialogFormVisible)?_c('singlePic',{attrs:{"img":_vm.singlePicImg},on:{"fileChange":_vm.fileChange}}):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancelFun}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"loading":_vm.loading,"type":"primary"},on:{"click":_vm.saveOrg}},[_vm._v("提交")])],1)],1),_vm._v(" "),_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],attrs:{"visible":_vm.authFormVisible,"title":"配置权限"},on:{"update:visible":function($event){_vm.authFormVisible=$event}}},[_c('choose-auth',{attrs:{"data":_vm.authList,"org-privilges":_vm.orgPrivilges}}),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.authFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"loading":_vm.loading,"type":"primary"},on:{"click":_vm.configPrivilges}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.dutyFormVisible)?_c('el-dialog',{directives:[{name:"dragDialog",rawName:"v-dragDialog"}],staticClass:"orgDutyDialog",attrs:{"visible":_vm.dutyFormVisible,"append-to-body":"","close-on-click-modal":false,"title":"配置职责"},on:{"update:visible":function($event){_vm.dutyFormVisible=$event}}},[_c('el-form',{ref:"dutyForm",attrs:{"rules":_vm.dutyRules,"model":_vm.dutyForm,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"名称","prop":"sysUserId"}},[_c('treeselect',{staticClass:"tree-select",attrs:{"options":_vm.orgList,"normalizer":_vm.normalizer,"placeholder":"请选择处理人","width":200,"no-children-text":"无选择"},on:{"select":_vm.getSelect},model:{value:(_vm.dutyForm.sysUserId),callback:function ($$v) {_vm.$set(_vm.dutyForm, "sysUserId", $$v)},expression:"dutyForm.sysUserId"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"职责","prop":"duty"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请选择职责"},model:{value:(_vm.dutyForm.duty),callback:function ($$v) {_vm.$set(_vm.dutyForm, "duty", $$v)},expression:"dutyForm.duty"}},_vm._l((_vm.dictMap['user_org_duty']),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}})}),1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"flex-end"},[(!_vm.isEdit)?_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"loading":_vm.loading,"type":"primary"},on:{"click":_vm.addDutyList}},[_vm._v("添加")]):_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"loading":_vm.loading,"type":"primary"},on:{"click":_vm.editDutyItem}},[_vm._v("保存")])],1)])],1)],1),_vm._v(" "),_c('table-list',{staticClass:"dataTable",attrs:{"data":_vm.dutyList,"columns":_vm.dutyColumns,"list-loading":_vm.dutyLoading,"total":_vm.dutyListTotal,"page-size":_vm.dutyListQuery.pageSize},on:{"currentChange":_vm.dutyCurrentChange}})],1):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "B9jh":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "Wu5q");

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "raTm")('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),

/***/ "BiOG":
/*!************************************************************************************************!*\
  !*** ./src/views/system/org/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "qG0a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Lvy+":
/*!**************************************!*\
  !*** ./src/utils/treeTableSearch.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/set */ "jWXv");
/* harmony import */ var babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/array/from */ "rfXi");
/* harmony import */ var babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "iCc5");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "V7oC");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "gDS+");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__);






/*
 * @Description
 * @Autor 朱俊
 * @Date 2020-04-18 21:56:31
 * @LastEditors 朱俊
 * @LastEditTime 2020-05-11 14:34:58
 */
function deepCloneArray(arr) {
  var arrStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()({
    arr: arr
  });
  arr = JSON.parse(arrStr).arr;
  return arr;
}

var TreeTableSearch = function () {
  function TreeTableSearch(options) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TreeTableSearch);

    this.data = [];
    this.searchData = [];
    this.key = '';
    this.filterNodes = [];
    this.parentNodes = [];
    this.color = 'red';
    this.filterAttrs = ['name', 'code'];

    if (options.color) {
      this.color = options.color;
    }
    if (options.filterAttrs) {
      this.filterAttrs = options.filterAttrs;
    }
  }
  // 工具处理变化后的 内容的提取


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TreeTableSearch, [{
    key: 'getTextContent',
    value: function getTextContent(htmlStr) {
      var ele = document.createElement('div');
      ele.innerHTML = htmlStr;
      return ele.innerText;
    }

    // 过滤出关键节点

  }, {
    key: 'filter',
    value: function filter(data, key) {
      var _this = this;

      var filterNodes = data.filter(function (item) {
        var flag = false;
        for (var index = 0; index < _this.filterAttrs.length; index++) {
          var attr = _this.filterAttrs[index];
          if (item[attr] && item[attr].indexOf(key) !== -1) {
            flag = true;
            break;
          }
        }
        return flag;
      });
      return filterNodes;
    }
    // 给关键节点添加样式

  }, {
    key: 'light',
    value: function light(filterNodes, key) {
      var _this2 = this;

      filterNodes = filterNodes.map(function (node) {
        _this2.filterAttrs.forEach(function (attr) {
          if (node[attr] && node[attr].indexOf(key) !== -1) {
            var arr = node[attr].split(key);
            var keyHtml = '<span style=\'color:' + _this2.color + '\'>' + key + '</span>';
            node[attr] = arr[0] + keyHtml + arr[1];
          }
        });
        return node;
      });
      return filterNodes;
    }
    // 找父节点

  }, {
    key: 'findParentNodes',
    value: function findParentNodes(data, filterNodes) {
      // 构建孩子节点id 与父节点映射
      var parentNodes = [];
      var map = {};
      data.forEach(function (node) {
        var find = data.find(function (item) {
          return item.id === node.parentId;
        });
        if (find) {
          map[node.id] = find;
        }
      });

      filterNodes.forEach(function (filterNode) {
        // 利用循环的方式代替递归
        var parentNode = map[filterNode.id];
        // 父节点的状态为展开
        if (parentNode) {
          // parentNode._expanded = true // 对于老组件树的展开的处理 直接这样的赋值会导致筛选后不能进行关闭
          parentNode = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, parentNode, { _expanded: true
            // parentNode.expanded = true // 新树  这个目前是传入不进去的 没有作用的
          });parentNodes.push(parentNode);
        }

        while (parentNode) {
          parentNode = map[parentNode.id];
          // 父节点的状态为展开
          if (parentNode) {
            // parentNode._expanded = true
            parentNode = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, parentNode, { _expanded: true
              // parentNode.expanded = true // 新树
            });parentNodes.push(parentNode);
          }
        }
      });
      return parentNodes;
    }
    // 找孩子节点

  }, {
    key: 'findChildrenNodes',
    value: function findChildrenNodes(data, filterNodes) {
      var childrenNodes = [];
      filterNodes.forEach(function (filterNode) {
        var children = data.filter(function (item) {
          return item.parentId === filterNode.id;
        });
        childrenNodes = childrenNodes.concat(children);
        while (children.length > 0) {
          children.forEach(function (childrenNode) {
            children = data.filter(function (inner) {
              return inner.parentId === childrenNode.id;
            });
            childrenNodes = childrenNodes.concat(children);
          });
        }
      });
      return childrenNodes;
    }

    // 节点合并

  }, {
    key: 'mergeNodes',
    value: function mergeNodes() {
      var data = this.parentNodes.concat(this.filterNodes).concat(this.childrenNodes);
      var ids = babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(new babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(data.map(function (item) {
        return item.id;
      })));
      var searchData = [];
      ids.forEach(function (id) {
        var find = data.find(function (item) {
          return item.id === id;
        });
        searchData.push(find);
      });
      return searchData;
    }
    // 主搜索函数

  }, {
    key: 'search',
    value: function search(data, key) {
      data = deepCloneArray(data);
      if (key) {
        key = key.trim();
      }
      if (!key || key === '') {
        return {
          searchData: data,
          parentNodes: [],
          childrenNodes: []
        };
      }

      this.data = data;
      this.key = key;

      // 先找到关键节点
      this.filterNodes = this.filter(data, key);
      // 给关键节点添加样式
      this.filterNodes = this.light(this.filterNodes, key);
      // 向上找父节点
      this.parentNodes = this.findParentNodes(data, this.filterNodes);
      // 向下找孩子节点
      this.childrenNodes = this.findChildrenNodes(data, this.filterNodes);
      // 合并节点 并去重
      this.searchData = this.mergeNodes();
      return {
        searchData: this.searchData,
        parentNodes: this.parentNodes,
        childrenNodes: this.childrenNodes
      };
    }
  }]);

  return TreeTableSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (TreeTableSearch);

/***/ }),

/***/ "PYvC":
/*!****************************************!*\
  !*** ./src/views/system/org/index.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5b3676e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5b3676e9& */ "rPMu");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "Rb3e");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "BiOG");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5b3676e9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5b3676e9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Rb3e":
/*!*****************************************************************!*\
  !*** ./src/views/system/org/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "h597");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "dL40":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(/*! ./_export */ "Y7ZC");

$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(/*! ./_collection-to-json */ "8iia")('Set')});

/***/ }),

/***/ "h597":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/system/org/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TreeTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TreeTable */ "itRl");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/directive/waves */ "ZySA");
/* harmony import */ var _components_chooseAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chooseAuth */ "gskV");
/* harmony import */ var _components_positionSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/positionSelect */ "5+DE");
/* harmony import */ var _api_system_authority__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/system/authority */ "9Vyn");
/* harmony import */ var _utils_treeTableSearch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/treeTableSearch.js */ "Lvy+");
/* harmony import */ var _api_system_org__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/system/org */ "fmxT");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _utils_process__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/process */ "q7Rq");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _components_selectUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/selectUser */ "6zDp");
/* harmony import */ var _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/table/tableList.vue */ "dARg");
/* harmony import */ var _api_system_person__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/api/system/person */ "AjWs");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @riophae/vue-treeselect */ "cCY5");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_singlePic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/singlePic */ "PtkV");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Org',
  components: {
    TreeTable: _components_TreeTable__WEBPACK_IMPORTED_MODULE_2__["default"],
    chooseAuth: _components_chooseAuth__WEBPACK_IMPORTED_MODULE_4__["default"],
    positionSelect: _components_positionSelect__WEBPACK_IMPORTED_MODULE_5__["default"],
    selectUser: _components_selectUser__WEBPACK_IMPORTED_MODULE_13__["default"],
    MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_12__["default"],
    tableList: _components_table_tableList_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_16___default.a,
    singlePic: _components_singlePic__WEBPACK_IMPORTED_MODULE_17__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      dialogFormVisible: false, // 弹出框显示判断
      authFormVisible: false, // 配置权限显示判断
      dutyFormVisible: false, // 权限配置显示判断
      dialogStatus: 'create',
      searchKey: null,
      textMap: {
        update: '编辑',
        create: '新建'
      },
      treeTableSearch: new _utils_treeTableSearch_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        color: 'red',
        filterAttrs: ['name', 'code']
      }),
      isChoose: false,
      orgPrivilges: [], // 组织的权限
      authList: [], // 权限数组
      loading: false, // 按钮重复提交判断
      listLoading: false,
      rules: {
        name: [{ required: true, message: '请填写组织名称' }],
        code: [{ required: true, message: '请填写组织编码' }],
        type: [{ required: true, message: '请选择组织类型', trigger: 'change' }],
        corporation: [{ required: true, message: '请填写法人' }],
        orgCode: [{ required: true, message: '请填写单位代码' }],
        leaderId: [{ required: true, message: '请选择组织领导', trigger: 'change' }]
      },
      orgForm: {
        id: '',
        parentId: '',
        name: '',
        type: '',
        code: '',
        leaderId: '',
        corporation: '',
        orgCode: '',
        location: {},
        signature: ''
      },
      columns: [{
        text: '组织名称',
        value: 'name'
      }, {
        text: '组织编码',
        value: 'code'
      }, {
        text: '类型',
        value: 'type',
        type: 'text',
        formatter: this.typeFormatter
      },
      // {
      //   text: '分管领导',
      //   value: 'leaderId',
      //   type: 'text'
      // },
      {
        text: '法人',
        value: 'corporation',
        type: 'text'
      }, {
        text: '单位代码',
        value: 'orgCode',
        type: 'text'
      }, {
        text: '操作',
        type: 'iconButton',
        width: 230,
        list: this.operButton
      }],
      data: [],
      currentOrgId: '',
      dutyList: [],
      dutyForm: {
        sysUserId: null,
        duty: '',
        sysOrgId: ''
      },
      // sysUserId: null,
      dutyRules: {
        sysUserId: [{ required: true, message: '请选择人员名称' }],
        duty: [{ required: true, message: '请填写用户职责' }]
      },
      dutyColumns: [{
        text: '姓名',
        value: 'sysUserName'
      },
      // {
      //   text: '职责',
      //   value: 'dutyNames'
      // },
      {
        text: '职责',
        value: 'duty',
        filter: _utils__WEBPACK_IMPORTED_MODULE_10__["getNameByCode"],
        filterParams: ['user_org_duty']
      }, {
        text: '操作',
        type: 'iconButton',
        width: 230,
        list: this.dutyOperButton
      }],
      dutyLoading: false,
      dutyListQuery: {
        pageSize: 4,
        currPage: 1,
        sysOrgId: ''
      },
      dutyListTotal: 0,
      isEdit: false,
      orgList: [],
      orginalData: [],
      normalizer: function normalizer(node) {
        if (node.type === 'org') {
          return {
            id: node.id,
            label: node.name,
            children: node.children,
            type: node.type
          };
        } else {
          return {
            id: node.id,
            label: node.name,
            children: node.children,
            type: node.type
          };
        }
      },

      singlePicImg: {}
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])(['dictMap', 'fileUrl'])),
  mounted: function mounted() {
    this.getList();
    this.getAuthList();
  },

  methods: {
    /** 列表关键字搜索
     * @function searchFun
     */
    searchFun: function searchFun() {
      var treeTableSearchObj = this.treeTableSearch.search(this.orginalData, this.searchKey);
      this.data = treeTableSearchObj.searchData;
    },
    getOrg: function getOrg() {
      var _this = this;

      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resovle) {
        Object(_api_system_person__WEBPACK_IMPORTED_MODULE_15__["userTreeData"])({ orgId: _this.dutyForm.sysOrgId }).then(function (res) {
          if (res.success) {
            // 过滤根组织
            if (res.result && res.result.length > 0) {
              res.result.forEach(function (item) {
                if (item.parentId) {
                  if (!res.result.find(function (res) {
                    return res.id === item.parentId;
                  })) {
                    delete item['parentId'];
                  }
                }
              });
            }
            _this.orgList = _this.treeListUtil(res.result);
            resovle();
          }
        });
      });
    },
    getSelect: function getSelect(e) {
      var _this2 = this;

      if (e.type === 'org') {
        setTimeout(function () {
          _this2.dutyForm.sysUserId = null;
        }, 200);
      }
    },
    treeListUtil: function treeListUtil(data, parentId) {
      var itemArr = [];
      for (var i = 0; i < data.length; i++) {
        var node = data[i];
        if (node.parentId === parentId) {
          if (node.type === 'user') {
            if (node.id.toString().indexOf('user') === -1) {
              node.id = node.type + '#' + node.id;
            }
          } else {
            if (this.treeListUtil(data, node.id).length > 0) {
              node.children = this.treeListUtil(data, node.id);
            } else {
              node.isDisabled = true;
            }
          }
          itemArr.push(node);
        }
      }
      return itemArr;
    },

    // 获取所有组织
    getList: function getList() {
      var _this3 = this;

      this.listLoading = true;
      Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["getOrgList"])({}).then(function (response) {
        if (response.success) {
          // this.data = this.treeListUtil(response.result)
          // this.data = response.result
          _this3.resetExpendStatus(response.result);
          _this3.searchKey && _this3.searchFun(); // 当搜索关键字存在便进行搜索
        }
        _this3.listLoading = false;
      });
    },
    filterOrg: function filterOrg(data) {
      return this.orgList;
    },

    // 获取所有权限
    getAuthList: function getAuthList() {
      var _this4 = this;

      Object(_api_system_authority__WEBPACK_IMPORTED_MODULE_6__["getList"])({ scope: 'system' }).then(function (response) {
        if (response.success) {
          _this4.authList = response.result;
        }
      });
    },

    // 获取位置
    getLocation: function getLocation(val) {
      this.orgForm.location = val;
    },
    typeFormatter: function typeFormatter(val) {
      return val.type === 'dept' ? '部门' : '公司';
    },

    // 添加到列表中
    addDutyList: function addDutyList() {
      var _this5 = this;

      this.$refs['dutyForm'].validate(function (valid) {
        var sysUserId = '';
        if (_this5.dutyForm.sysUserId) {
          sysUserId = _this5.dutyForm.sysUserId.split('#')[1];
        }
        if (!valid) return;
        Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["saveOrgDuty"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this5.dutyForm, { sysUserId: sysUserId, id: '' })).then(function (res) {
          if (!res.success) return;
          _this5.orgDutyList();
          _this5.$message({
            type: 'success',
            message: '添加成功'
          });
        });
      });
    },

    // 切换编辑状态
    toggleEdit: function toggleEdit(val) {
      if (this.isEdit) {
        this.$message({
          type: 'warning',
          message: '请先编辑保存或者取消编辑'
        });
        return;
      }
      this.dutyList = this.dutyList.map(function (item) {
        if (item.id === val.row.id) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, item, { eidtFlag: true });
        } else {
          return item;
        }
      });
      this.dutyForm = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, val.row, { sysUserId: [val.row.sysUserId] });
      this.isEdit = true;
    },


    // 保存修改
    editDutyItem: function editDutyItem() {
      var _this6 = this;

      this.$refs['dutyForm'].validate(function (valid) {
        var sysUserId = _this6.dutyForm.sysUserId[0] ? _this6.dutyForm.sysUserId[0] : '';
        // const duty = this.dutyForm.duty.join(',')
        Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["saveOrgDuty"])(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this6.dutyForm, { sysUserId: sysUserId })).then(function (res) {
          if (res.success) {
            // 保存完成 当前编辑状态恢复
            _this6.dutyList = _this6.dutyList.map(function (item) {
              if (item.id === _this6.dutyForm.id) {
                return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, item, { eidtFlag: false });
              } else {
                return item;
              }
            });
            _this6.isEdit = false;
            _this6.$message({
              type: 'success',
              message: '修改成功'
            });
            _this6.orgDutyList();
          }
        });
      });
    },
    orgDutyList: function orgDutyList() {
      var _this7 = this;

      this.dutyLoading = true;
      this.dutyListQuery.sysOrgId = this.dutyForm.sysOrgId;
      Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["orgDutyList"])(this.dutyListQuery).then(function (res) {
        if (res.success) {
          // this.dutyList = res.result.list.map(item => {
          //   return { ...item, dutyNames: getNamesByCode(item.duty.split(','), 'user_org_duty') }
          // })
          _this7.dutyList = res.result.list;
          _this7.dutyListTotal = res.result.total;
          _this7.dutyForm.duty = '';
          _this7.dutyForm.sysUserId = null;
          _this7.$refs['dutyForm'].resetFields();
        }
        _this7.dutyLoading = false;
      });
    },

    // 表格操作按鈕
    operButton: function operButton(val) {
      var btns = [{
        id: 'upLevel',
        class: 'iconiconfont_-',
        value: '升级',
        click: this.updateToUpLevel
      }, {
        id: 'downLevel',
        class: 'iconjiangji',
        value: '降级',
        click: this.updateToDownLevel
      }, {
        id: 'up',
        class: 'iconshangyi',
        value: '上移',
        click: this.updateToUp
      }, {
        id: 'down',
        class: 'iconxiayi',
        value: '下移',
        click: this.updateToDown
      }, {
        id: 'add',
        class: 'iconxinzeng',
        value: '添加',
        click: this.addChild
      }, {
        id: 'edit',
        class: 'iconxiugai',
        value: '编辑',
        click: this.updateOrg
      }, {
        id: 'setPri',
        class: 'iconpermisssion-management',
        value: '配置权限',
        click: this.setPrivilege
      }, {
        id: 'delete',
        class: 'iconshanchu1',
        value: '删除',
        click: this.deleteOrg
      }];
      return this.filterOprButtons(val, btns);
    },

    // 找到相关兄弟节点
    getNodeInfo: function getNodeInfo(_ref) {
      var data = _ref.data,
          curEle = _ref.curEle;

      var brother = data.filter(function (item) {
        return item.treeLevel === curEle.treeLevel && item.parentId === curEle.parentId;
      });
      var preNode = null; // 上一个兄弟节点
      var nextNode = null; // 下一个兄弟节点
      var isFirst = false; // 是在兄弟节点的第一位
      var isEnd = false; // 在兄弟节点的最后一位
      for (var index = 0; index < brother.length; index++) {
        if (brother[index].id === curEle.id) {
          if (index > 0) {
            preNode = brother[index - 1];
          }
          if (index + 1 < brother.length) {
            nextNode = brother[index + 1];
          }
          if (index === 0) {
            isFirst = true;
          }
          if (index === brother.length - 1) {
            isEnd = true;
          }
          break;
        }
      }
      return {
        brother: brother,
        preNode: preNode,
        nextNode: nextNode,
        isFirst: isFirst,
        isEnd: isEnd
      };
    },
    filterOprButtons: function filterOprButtons(val, btns) {
      var ids = [];
      //  处理上移 下移 升级  降级
      if (val.treeLevel !== 1) {
        // 当treeLevel 不是在第一层的时候 就是可以进行升级
        ids.push('upLevel');
      }
      var info = this.getNodeInfo({ data: this.data, curEle: val });
      if (!info.isFirst) {
        // 当不是在兄弟节点的第一位就是可以 进行上移  降级
        ids.push('up');
        ids.push('downLevel');
      }
      if (!info.isEnd) {
        // 当不是兄弟节点的最后一位就是可以进行 下移
        ids.push('down');
      }
      // 处理新增 编辑 删除
      ids.push('add');
      ids.push('edit');
      if (!val.parentId) {
        ids.push('setPri');
      }
      if (!(val.children && val.children.length > 0)) {
        // 当不存在有孩子节点才是可以进行删除
        ids.push('delete');
      }

      var result = btns.filter(function (item) {
        if (ids.includes(item.id)) {
          return true;
        }
      });
      return result;
    },

    // 职责表格操作按钮
    dutyOperButton: function dutyOperButton(val) {
      // 如果有 eidtFlag == true  此时不需要修改按钮
      if (val.eidtFlag) {
        return [{
          class: 'iconquxiaobianji',
          value: '取消修改',
          click: this.cancelEdit
        }, { class: 'iconshanchu1', value: '删除', click: this.deleteDuty }];
      }
      return [{ class: 'iconxiugai', value: '修改', click: this.toggleEdit }, { class: 'iconshanchu1', value: '删除', click: this.deleteDuty }];
    },

    // 取消编辑
    cancelEdit: function cancelEdit(val) {
      this.dutyList = this.dutyList.map(function (item) {
        if (item.id === val.row.id) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, item, { eidtFlag: false });
        } else {
          return item;
        }
      });
      this.dutyForm.duty = '';
      this.dutyForm.sysUserId = '';
      this.$refs['dutyForm'].resetFields();
      // 将当前编辑状态转为false
      this.isEdit = false;
    },

    // 删除职责
    deleteDuty: function deleteDuty(val) {
      var _this8 = this;

      Object(_utils_process__WEBPACK_IMPORTED_MODULE_11__["deleteFun"])({
        api: _api_system_org__WEBPACK_IMPORTED_MODULE_8__["delOrgDuty"],
        params: { id: val.row.id },
        successCB: function successCB() {
          _this8.dutyListQuery.currPage = 1;
          _this8.orgDutyList();
        }
      });
    },
    showDutyDialog: function showDutyDialog(val) {
      this.dutyForm = { sysUserId: null, duty: '', sysOrgId: val.row.id };
      this.getOrg(); // 获取组织
      // dutyForm 进行初始化
      this.isEdit = false;
      this.orgDutyList();
      this.dutyFormVisible = true;
    },

    // 更新组织
    updateOrg: function updateOrg(val) {
      this.dialogStatus = 'update';
      this.orgForm.id = val.row.id;
      this.orgForm.parentId = val.row.parentId;
      this.orgForm.name = val.row.name;
      this.orgForm.code = val.row.code;
      this.orgForm.type = val.row.type;
      this.orgForm.orgCode = val.row.orgCode;
      this.orgForm.corporation = val.row.corporation;
      if (val.row.location && val.row.location.address) {
        this.isChoose = true;
      } else {
        this.isChoose = false;
      }
      this.orgForm.location = val.row.location;
      this.orgForm.signature = val.row.signature;
      if (val.row.signature) {
        // 处理签章
        this.singlePicImg = { url: this.fileUrl + 'img/' + val.row.signature };
      } else {
        this.singlePicImg = { url: '' };
      }

      this.dialogFormVisible = true;
    },

    // 添加子节点
    addChild: function addChild(val) {
      this.dialogStatus = 'create';
      this.orgForm = {
        id: '',
        parentId: val.row.id,
        name: '',
        code: '',
        type: '',
        location: {}
      };
      this.dialogFormVisible = true;
    },

    // 配置权限
    setPrivilege: function setPrivilege(val) {
      var _this9 = this;

      this.currentOrgId = val.row.id;
      // 获取组织权限
      Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["getOrgPrivileges"])({ id: val.row.id }).then(function (response) {
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
          _this9.orgPrivilges = tempArr;
          _this9.$store.dispatch('setCheckAuth', tempPri);
          _this9.authFormVisible = true;
        } else {
          _this9.$message.error(response.message);
        }
      });
    },

    // 配置权限
    configPrivilges: function configPrivilges() {
      var _this10 = this;

      this.loading = true;
      Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["configPrivileges"])({
        orgId: this.currentOrgId,
        privilegeIds: this.$store.getters.checkAuth
      }).then(function (response) {
        if (response.success) {
          _this10.$message.success(response.message);
          _this10.authFormVisible = false;
        } else {
          _this10.$message.error(response.message);
        }
        _this10.loading = false;
      });
    },

    // 删除组织
    deleteOrg: function deleteOrg(val) {
      var _this11 = this;

      this.$confirm('是否确定删除该记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this11.loading = true;
        Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["deleteOrg"])({ id: val.row.id }).then(function (response) {
          if (response.success) {
            _this11.data.splice(_this11.data.findIndex(function (item) {
              return item.id === val.row.id;
            }), 1);
            _this11.$message.success('删除成功');
          } else {
            _this11.$message.error(response.message);
          }
          _this11.loading = false;
        });
      });
    },
    reset: function reset() {
      // 清空
      this.orgForm.id = '';
      this.orgForm.parentId = '';
      this.$refs['orgForm'].resetFields();
    },
    cancelFun: function cancelFun() {
      this.dialogFormVisible = false;
      this.reset();
    },

    // 新增组织
    addOrg: function addOrg() {
      this.dialogStatus = 'create';
      this.orgForm = {
        id: '',
        parentId: '',
        name: '',
        type: '',
        code: '',
        location: {}
      };
      this.singlePicImg = { url: '' };
      this.dialogFormVisible = true;
    },
    setDgData: function setDgData(item, result) {
      item.name = result.name;
      item.code = result.code;
      item.type = result.type;
      item.location = result.location;
      item.signature = result.signature;
    },

    // 保存组织
    saveOrg: function saveOrg() {
      var _this12 = this;

      this.$refs['orgForm'].validate(function (valid) {
        if (valid) {
          _this12.loading = true;
          if (_this12.orgForm.leaderId && _this12.orgForm.leaderId[0]) {
            _this12.orgForm.leaderId = _this12.orgForm.leaderId[0];
          }
          Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["saveOrg"])(_this12.orgForm).then(function (response) {
            if (response.success) {
              _this12.$message.success('保存成功');
              // 操作数结构
              response.result.children = [];
              // 判断是更新还是添加
              if (_this12.orgForm.id !== '') {
                var findVal = _this12.data.find(function (item) {
                  return item.id === response.result.id;
                });
                _this12.setDgData(findVal, response.result);
              } else {
                _this12.data.push(response.result);
              }
              _this12.dialogFormVisible = false;
              _this12.reset();
            } else {
              _this12.$message.error(response.message);
            }
            _this12.loading = false;
          });
        }
      });
    },

    // 职责列表分页
    dutyCurrentChange: function dutyCurrentChange(val) {
      this.dutyListQuery.currPage = val;
      this.orgDutyList();
    },

    // 上传签名图片相关处理
    fileChange: function fileChange(file) {
      this.orgForm.signature = file.remoteName;
    },
    resetExpendStatus: function resetExpendStatus(result) {
      var oldData = this.data.slice();
      if (oldData.length === 0) {
        this.data = result;
        this.orginalData = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["deepCloneArray"])(this.data);
        return;
      }
      this.data = result.map(function (item, index) {
        var find = oldData.find(function (innerItem) {
          return innerItem.id === item.id;
        });
        if (find) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, find, item);
        } else {
          return item;
        }
      });
      this.orginalData = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["deepCloneArray"])(this.data);
    },

    // 上移下移 降级升级
    updateToUp: function updateToUp(val) {
      var _this13 = this;

      Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["updateToUp"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this13.getList();
        }
      });
    },
    updateToDown: function updateToDown(val) {
      var _this14 = this;

      Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["updateToDown"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this14.getList();
        }
      });
    },
    updateToUpLevel: function updateToUpLevel(val) {
      var _this15 = this;

      Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["updateToUpLevel"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this15.getList();
        }
      });
    },
    updateToDownLevel: function updateToDownLevel(val) {
      var _this16 = this;

      Object(_api_system_org__WEBPACK_IMPORTED_MODULE_8__["updateToDownLevel"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this16.getList();
        }
      });
    }
  }
});

/***/ }),

/***/ "jWXv":
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/set.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/set */ "+iuc"), __esModule: true };

/***/ }),

/***/ "jr1U":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/concat.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/concat */ "wObO"), __esModule: true };

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

/***/ }),

/***/ "qG0a":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/system/org/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "rPMu":
/*!***********************************************************************!*\
  !*** ./src/views/system/org/index.vue?vue&type=template&id=5b3676e9& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b3676e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5b3676e9& */ "96iH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b3676e9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b3676e9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);