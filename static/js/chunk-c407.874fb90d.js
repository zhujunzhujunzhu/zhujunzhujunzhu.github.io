(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-c407"],{

/***/ "MsMy":
/*!*******************************!*\
  !*** ./src/utils/renderer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "GQeE");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! escape-html */ "dKDz");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html5_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html5-tag */ "4iO1");
/* harmony import */ var html5_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html5_tag__WEBPACK_IMPORTED_MODULE_3__);





var renderer = function renderer(node, treeOptions) {
  var id = node.id,
      name = node.name,
      _node$loadOnDemand = node.loadOnDemand,
      loadOnDemand = _node$loadOnDemand === undefined ? false : _node$loadOnDemand,
      children = node.children,
      state = node.state,
      _node$props = node.props,
      props = _node$props === undefined ? {} : _node$props;

  var droppable = treeOptions.droppable && props.droppable;
  var depth = state.depth,
      open = state.open,
      path = state.path,
      total = state.total,
      _state$selected = state.selected,
      selected = _state$selected === undefined ? false : _state$selected,
      filtered = state.filtered,
      checked = state.checked,
      indeterminate = state.indeterminate,
      isVisible = state.isVisible,
      isLeaf = state.isLeaf,
      num = state.num;

  var childrenLength = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(children).length;
  var more = node.hasChildren();

  if (filtered === false) {
    return;
  }
  var togglerContent = '';
  if (!more && loadOnDemand) {
    togglerContent = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('i', {
      'class': classnames__WEBPACK_IMPORTED_MODULE_1___default()('icon iconfont', 'iconsanjiaoright')
    }, '');
  }
  if (more && open) {
    togglerContent = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('i', {
      'class': classnames__WEBPACK_IMPORTED_MODULE_1___default()('icon iconfont', 'iconxiajiantou')
    }, '');
  }
  if (more && !open) {
    togglerContent = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('i', {
      'class': classnames__WEBPACK_IMPORTED_MODULE_1___default()('icon iconfont', 'iconsanjiaoright')
    }, '');
  }
  if (state.expanding) {
    togglerContent = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('i', {
      'class': classnames__WEBPACK_IMPORTED_MODULE_1___default()('icon iconfont', 'iconshuaxin', 'rotating')
    }, '');
  }
  if (state.collapsing) {
    // TODO
  }
  var toggler = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('a', {
    'class': function () {
      if (!more && loadOnDemand) {
        return classnames__WEBPACK_IMPORTED_MODULE_1___default()(treeOptions.togglerClass, 'infinite-tree-closed');
      }
      if (more && open) {
        return classnames__WEBPACK_IMPORTED_MODULE_1___default()(treeOptions.togglerClass);
      }
      if (more && !open) {
        return classnames__WEBPACK_IMPORTED_MODULE_1___default()(treeOptions.togglerClass, 'infinite-tree-closed');
      }
      return '';
    }()
  }, togglerContent);

  var icon = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('i', {
    'class': classnames__WEBPACK_IMPORTED_MODULE_1___default()('infinite-tree-folder-icon', 'icon iconfont eyeIcon', { 'iconyanjing': !isVisible }, { 'iconbiyan': isVisible })
  }, '');

  var checkbox = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('input', {
    type: 'checkbox',
    style: '',
    'class': checked ? 'checkbox isCheck' : 'checkbox',
    checked: checked,
    'data-checked': checked,
    'data-indeterminate': indeterminate
  });

  var checkbox2 = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('label', {
    'class': 'br-tree-margin br-checkbox',
    'style': '',
    'title': '选中模型'
  }, ' ' + checkbox + '<span class="show-box"></span>');

  var title = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('span', {
    'class': classnames__WEBPACK_IMPORTED_MODULE_1___default()('infinite-tree-title nowrap flex1', isLeaf ? 'leaf-btn' : null),
    'style': checked && treeOptions.noCheckBox ? 'color:#235EAA' : null,
    'title': escape_html__WEBPACK_IMPORTED_MODULE_2___default()(name)
  }, escape_html__WEBPACK_IMPORTED_MODULE_2___default()(name));

  // const loadingIcon = tag('i', {
  //   'style': 'margin-left: 5px',
  //   'class': classNames(
  //     { 'hidden': !state.loading },
  //     'icon iconfont',
  //     'iconshuaxin',
  //     { 'rotating': state.loading }
  //   )i
  // }, '')

  var count = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('span', {
    'class': 'count',
    'style': checked ? 'color: #ec6337' : ''
  }, num ? '(' + num.toString() + ')' : '');
  var treeNode = null;
  if (treeOptions.noCheckBox) {
    treeNode = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('div', {
      'class': 'infinite-tree-node',
      'style': 'margin-left: ' + depth * 18 + 'px'
    }, toggler + title + count + icon);
  } else {
    treeNode = html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('div', {
      'class': 'infinite-tree-node',
      'style': 'margin-left: ' + depth * 18 + 'px'
    }, toggler + title + count + checkbox2 + icon);
  }

  var treeNodeAttributes = {
    'draggable': 'true',
    'data-id': id,
    'data-expanded': more && open,
    'data-depth': depth,
    'data-path': path,
    'data-selected': selected,
    'data-children': childrenLength,
    'data-total': total,
    'class': classnames__WEBPACK_IMPORTED_MODULE_1___default()('infinite-tree-item', depth === 0 ? 'first-tree' : '', { 'infinite-tree-selected': selected })
  };
  if (droppable) {
    treeNodeAttributes['droppable'] = true;
  }

  return html5_tag__WEBPACK_IMPORTED_MODULE_3___default()('div', treeNodeAttributes, treeNode);
};

/* harmony default export */ __webpack_exports__["default"] = (renderer);

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