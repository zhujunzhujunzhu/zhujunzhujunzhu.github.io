(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-60fc"],{

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

/***/ "e/hI":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/components/modelTree/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "kLIr":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/components/modelTree/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "FyfS");
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/renderer */ "MsMy");
/* harmony import */ var _api_project_bimFloder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/project/bimFloder */ "lC0u");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "L2JU");





//
//
//
//
//
//
//
//
//
//
//
//

__webpack_require__(/*! infinite-tree/dist/infinite-tree.css */ "ZLQe");




var InfiniteTree = __webpack_require__(/*! infinite-tree/dist/infinite-tree.js */ "+17M");
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ModelTree',
  props: {
    height: {
      type: String,
      default: ''
    },
    sceneList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      myTree: null,
      oldSelection: [],
      parentTreeNodeList: [],
      currentSceneList: [],
      oldSceneList: [],
      filterName: null
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(['viewer', 'currentSelectModel', 'viewPointList'])),
  watch: {
    currentSelectModel: function currentSelectModel(val) {
      this.parentTreeNodeList = [];
      this.getTreeParentNode(val.sceneId.toString() + val.id.toString(), val.select);
    },
    sceneList: function sceneList(val) {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var temp, num, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$store.dispatch('setIsLoad', false);
                _this.oldSelection = [];

                if (!(_this.currentSceneList && _this.currentSceneList.length > 0)) {
                  _context.next = 6;
                  break;
                }

                _this.appendOrDeleteNode(val);
                _context.next = 46;
                break;

              case 6:
                if (!(val && val.length > 0)) {
                  _context.next = 45;
                  break;
                }

                val.forEach(function (item) {
                  _this.currentSceneList.push(item);
                });
                // this.currentSceneList = val
                temp = [];
                num = 0;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 13;
                _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(val);

              case 15:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 27;
                  break;
                }

                i = _step.value;

                console.info(i);
                _context.t0 = temp;
                _context.next = 21;
                return _this.getModelInfo(val[num]);

              case 21:
                _context.t1 = _context.sent;

                _context.t0.push.call(_context.t0, _context.t1);

                num++;

              case 24:
                _iteratorNormalCompletion = true;
                _context.next = 15;
                break;

              case 27:
                _context.next = 33;
                break;

              case 29:
                _context.prev = 29;
                _context.t2 = _context['catch'](13);
                _didIteratorError = true;
                _iteratorError = _context.t2;

              case 33:
                _context.prev = 33;
                _context.prev = 34;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 36:
                _context.prev = 36;

                if (!_didIteratorError) {
                  _context.next = 39;
                  break;
                }

                throw _iteratorError;

              case 39:
                return _context.finish(36);

              case 40:
                return _context.finish(33);

              case 41:
                _this.initTree(temp);
                _this.$store.dispatch('setIsLoad', true);
                _context.next = 46;
                break;

              case 45:
                _this.$store.dispatch('setIsLoad', true);

              case 46:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[13, 29, 33, 41], [34,, 36, 40]]);
      }))();
    }
  },
  created: function created() {},
  mounted: function mounted() {
    // this.getModelInfo()
  },

  methods: {
    appendOrDeleteNode: function appendOrDeleteNode(val) {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _loop, i, num, flag, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, node, _node, vi;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _loop = function _loop(i) {
                  if (val.findIndex(function (v) {
                    return v.sceneId === _this2.currentSceneList[i].sceneId;
                  }) === -1) {
                    var node = _this2.myTree.getNodeById(_this2.currentSceneList[i].sceneId);
                    if (node) {
                      _this2.myTree.removeNode(node);
                      _this2.currentSceneList.splice(i, 1);
                    }
                  }
                };

                // const delList = []
                for (i = _this2.currentSceneList.length - 1; i >= 0; i--) {
                  _loop(i);
                }
                num = 0;
                flag = false; // 用于判断视图是否重新渲染

                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 7;
                _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(val);

              case 9:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context2.next = 32;
                  break;
                }

                i = _step2.value;

                console.info(i);

                if (!(_this2.currentSceneList.findIndex(function (v) {
                  return v.sceneId === val[num].sceneId;
                }) === -1)) {
                  _context2.next = 26;
                  break;
                }

                node = _this2.myTree.getNodeById(val[num].sceneId);

                if (node) {
                  _context2.next = 23;
                  break;
                }

                _node = _this2.myTree.getNodeById('root');

                flag = true;
                _context2.t0 = _this2.myTree;
                _context2.next = 20;
                return _this2.getModelInfo({
                  sceneId: val[num].sceneId,
                  version: val[num].version
                });

              case 20:
                _context2.t1 = _context2.sent;
                _context2.t2 = _node;

                _context2.t0.appendChildNode.call(_context2.t0, _context2.t1, _context2.t2);

              case 23:
                _this2.currentSceneList.push(val[num]);
                _context2.next = 27;
                break;

              case 26:
                // 处理显示隐藏
                if (_this2.viewPointList[val[num].sceneId]) {
                  vi = _this2.viewPointList[val[num].sceneId];
                  // if (vi.isVisable) {
                  //
                  // }

                  if (vi.familyList && vi.familyList.length > 0) {
                    vi.familyList.forEach(function (item) {
                      var node = _this2.myTree.getNodeById(val[num].sceneId + item.id);
                      node.state.isVisible = !item.isVisable;
                      _this2.myTree.updateNode(node);
                    });
                  }
                  if (vi.familyTypeList && vi.familyTypeList.length > 0) {
                    vi.familyTypeList.forEach(function (item) {
                      var node = _this2.myTree.getNodeById(val[num].sceneId + item.id);
                      node.state.isVisible = !item.isVisable;
                      _this2.myTree.updateNode(node);
                    });
                  }
                }

              case 27:
                num++;
                if (flag) {
                  (function () {
                    var arr = [];
                    _this2.currentSceneList.forEach(function (item) {
                      if (!item.version) {
                        arr.push(item.sceneId);
                      } else {
                        arr.push(item.sceneId + '.' + item.version);
                      }
                    });
                    // this.viewer.adjustCameraBySceneIds(arr)
                  })();
                }

              case 29:
                _iteratorNormalCompletion2 = true;
                _context2.next = 9;
                break;

              case 32:
                _context2.next = 38;
                break;

              case 34:
                _context2.prev = 34;
                _context2.t3 = _context2['catch'](7);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t3;

              case 38:
                _context2.prev = 38;
                _context2.prev = 39;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 41:
                _context2.prev = 41;

                if (!_didIteratorError2) {
                  _context2.next = 44;
                  break;
                }

                throw _iteratorError2;

              case 44:
                return _context2.finish(41);

              case 45:
                return _context2.finish(38);

              case 46:
                _this2.$store.dispatch('setIsLoad', true);

              case 47:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[7, 34, 38, 46], [39,, 41, 45]]);
      }))();
    },

    // 获取树上层结构
    getTreeParentNode: function getTreeParentNode(id, isSelected) {
      var _this3 = this;

      var node = this.myTree.getNodeById(id);
      this.parentTreeNodeList.unshift(node);
      if (node.parent && node.parent.id) {
        this.getTreeParentNode(node.parent.id, isSelected);
      } else {
        this.parentTreeNodeList.forEach(function (item) {
          _this3.myTree.openNode(item);
        });
        var treeNode = this.parentTreeNodeList[this.parentTreeNodeList.length - 1];
        if (this.oldSelection.findIndex(function (item) {
          return item === treeNode.id;
        }) === -1) {
          this.oldSelection.push(treeNode.id);
        }
        treeNode.state.checked = isSelected;
        // 获取所有选中模型
        var allSelectModels = this.viewer.getSelectedModels();
        // 过滤取消的模型
        var _flag = false;
        this.oldSelection.forEach(function (item) {
          _flag = false;
          allSelectModels.forEach(function (model) {
            if (model.sceneId.toString() + model.id.toString() === item) {
              _flag = true;
            }
          });
          if (!_flag) {
            var temp = _this3.myTree.getNodeById(item);
            temp.state.checked = false;
            var _index = _this3.myTree.nodes.indexOf(temp);
            _this3.myTree.rows[_index] = _this3.myTree.options.rowRenderer(temp, _this3.myTree.options);
          }
        });
        var index = this.myTree.nodes.indexOf(treeNode);
        this.myTree.rows[index] = this.myTree.options.rowRenderer(treeNode, this.myTree.options);
        this.myTree.updateNode(treeNode);
        this.myTree.scrollToNode(treeNode);
      }
    },
    getModelInfo: function getModelInfo(val) {
      var _this4 = this;

      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        Object(_api_project_bimFloder__WEBPACK_IMPORTED_MODULE_6__["getModelInfo"])(val.sceneId, val.version).then(function (res) {
          if (res.models) {
            var temp = {};
            res.models.forEach(function (item) {
              var _loop2 = function _loop2(i) {
                if (!temp[item[i][1]]) {
                  temp[item[i][1]] = {};
                }
                if (!temp[item[i][1]][item[i][2]]) {
                  temp[item[i][1]][item[i][2]] = [];
                }
                // 判断是否视图反选，隐藏则改变状态
                var isVisible = false;
                if (_this4.viewPointList[val.sceneId]) {
                  var _temp = _this4.viewPointList[val.sceneId].modelList.find(function (mo) {
                    return mo.id === i;
                  });
                  if (_temp) {
                    isVisible = !_temp.isVisable;
                  }
                }
                temp[item[i][1]][item[i][2]].push({
                  name: i,
                  id: val.sceneId + i,
                  state: { isVisible: isVisible, isLeaf: true },
                  type: 'model',
                  sceneId: val.sceneId,
                  bizId: i
                });
              };

              for (var i in item) {
                _loop2(i);
              }
            });
            var isVisible = false;
            if (_this4.viewPointList[val.sceneId]) {
              isVisible = !_this4.viewPointList[val.sceneId].sceneVisable;
            }
            var modelList = [{
              id: val.sceneId,
              name: res.properties.scene[val.sceneId],
              children: [],
              type: 'scene',
              sceneId: val.sceneId,
              bizId: val.sceneId,
              state: { isVisible: isVisible }
            }];
            var familyList = [];
            var tempTotal = 0;
            var allTotal = 0;

            var _loop3 = function _loop3(i) {
              familyList = [];
              tempTotal = 0;

              var _loop4 = function _loop4(type) {
                var isVisible = false;
                if (_this4.viewPointList[val.sceneId]) {
                  var _temp3 = _this4.viewPointList[val.sceneId].familyTypeList.find(function (mo) {
                    return mo.id === type;
                  });
                  if (_temp3) {
                    isVisible = !_temp3.isVisable;
                  }
                }
                familyList.push({
                  name: res.properties.familyType[type],
                  id: val.sceneId + type,
                  type: 'familyType',
                  sceneId: val.sceneId,
                  children: temp[i][type],
                  bizId: type,
                  state: { isVisible: isVisible, num: temp[i][type].length }
                });
                tempTotal += temp[i][type].length;
              };

              for (var type in temp[i]) {
                _loop4(type);
              }
              var isVisible = false;
              if (_this4.viewPointList[val.sceneId]) {
                var _temp2 = _this4.viewPointList[val.sceneId].familyList.find(function (mo) {
                  return mo.id === i;
                });
                if (_temp2) {
                  isVisible = !_temp2.isVisable;
                }
              }
              modelList[0].children.push({
                name: res.properties.family[i],
                id: val.sceneId + i,
                type: 'family',
                sceneId: val.sceneId,
                children: familyList,
                bizId: i,
                state: { isVisible: isVisible, num: tempTotal }
              });
              allTotal += tempTotal;
            };

            for (var i in temp) {
              _loop3(i);
            }
            modelList[0].state.num = allTotal;
            resolve(modelList[0]);
            // this.initTree(modelList)
          }
        });
      });
    },
    position: function position(id) {
      // this.myTree.scrollToNode(this.myTree.getNodeById(id))
      var nodeIndex = this.myTree.nodes.indexOf(this.myTree.getNodeById('node013599'));
      this.myTree.scrollTop(47 * (nodeIndex - 2));
    },
    changeInput: function changeInput() {
      this.searchKeyword(this.filterName);
    },
    initTree: function initTree(modelList) {
      var _this5 = this;

      this.myTree = new InfiniteTree({
        el: document.querySelector('#tree'),
        data: modelList,
        shouldLoadNodes: function shouldLoadNodes(parentNode) {
          return !parentNode.hasChildren() && parentNode.loadOnDemand;
        },
        rowRenderer: _utils_renderer__WEBPACK_IMPORTED_MODULE_5__["default"],
        loadNodes: function loadNodes(parentNode, next) {
          var nodes = [];
          next(null, nodes, function () {});
          // setTimeout(function() {
          //   next(null, nodes, function() {
          //     // if (me.treeSearchNum < me.treeSearch.length - 2) {
          //     //   me.treeSearchNum++
          //     //   me.openTree(me.treeSearch[me.treeSearchNum])
          //     // } else {
          //     //   nodes.forEach(item => {
          //     //     if (item.id === me.treeSearch[me.treeSearch.length - 1]) {
          //     //       me.myTree.selectNode(me.myTree.getNodeById(item.id))
          //     //       me.myTree.scrollToNode(me.myTree.getNodeById(item.id))
          //     //     }
          //     //   })
          //     // }
          //   })
          // }, 1000)
        }
      });
      // let selectedNodes = []
      this.myTree.on('click', function (event) {
        // event.stopPropagation()
        event.target.classList.contains('eyeIcon') && _this5.onClickEye(event.target);
        event.target.classList.contains('checkbox') && _this5.onCheckBoxChecked(event.target);
        event.target.classList.contains('leaf-btn') && _this5.onClickModel(event.target);
      });
    },
    onClickModel: function onClickModel(target) {
      var treeNode = this.myTree.getNodeById(target.parentElement.parentElement.getAttribute('data-id'));
      if (!treeNode || !treeNode.state.isLeaf) {
        return;
      }
      var model = this.viewer.loader.getModel(treeNode.bizId);
      this.viewer.setViewport(null, null, model.center);
      // 显示衬条
      this.activeNode && this.activeNode.classList.remove('br-tree-node-active')(this.activeNode = target).classList.add('br-tree-node-active');
    },
    onCheckBoxChecked: function onCheckBoxChecked(target) {
      var _this6 = this;

      var tree = this.myTree;
      var treeNode = tree.getNodeById(target.parentElement.parentElement.parentElement.getAttribute('data-id'));
      var modelsNeedSelect = [];
      var modelsNeedUnSelect = [];
      var checked = target.checked;
      this.traverseAllChildren(treeNode, function (node) {
        node.state.checked = checked;
        var index = tree.nodes.indexOf(node);
        // 刚开始一些折叠起来的节点没加载过。
        if (index === -1) return;
        tree.rows[index] = tree.options.rowRenderer(node, tree.options);
      }, function (node) {
        if (node && node.id) {
          var model = _this6.viewer.loader.getModel(node.bizId);
          model.isSelected = checked;
          if (model.isSelected) {
            modelsNeedSelect.push(model.id);
          } else {
            modelsNeedUnSelect.push(model.id);
          }
        }
      });
      tree.update();
      this.viewer.unSelect(modelsNeedUnSelect);
      this.viewer.addSelection(modelsNeedSelect);
      // modelsNeedUnSelect.forEach((model) => {
      //   const index = this.oldSelection.indexOf(model)
      //   if (index !== -1) {
      //     this.oldSelection.splice(index, 1)
      //   } else {
      //     console.log('error: no selection was found')
      //   }
      // })
      // modelsNeedSelect.forEach((model) => {
      //   if (this.oldSelection.indexOf(model) === -1) {
      //     this.oldSelection.push(model)
      //   }
      // })
      // this.viewer.canvas.tabIndex = 1
      // this.viewer.canvas.focus()
      this.viewer.change();
    },
    onClickEye: function onClickEye(target) {
      var _this7 = this;

      var tree = this.myTree;
      var treeNode = tree.getNodeById(target.parentElement.parentElement.getAttribute('data-id'));
      if (treeNode.tag && treeNode.tag.type === 'scene' && !treeNode.tag.isLoaded) {
        treeNode.state.isVisible = true;
        // this.globals.sceneIds.push(treeNode.tag.id)
        // const index = tree.nodes.indexOf(treeNode)
        // tree.rows[index] = tree.options.rowRenderer(treeNode, tree.options)
        // this.treeService.showScene(this.treeRoot, treeNode, tree)
        return;
      }
      var toDisplay = target.classList.contains('iconbiyan');
      // if (!this.viewPointList[treeNode.sceneId]) {
      //   this.viewPointList[treeNode.sceneId] = {
      //     version: '',
      //     sceneVisable: true,
      //     familyList: [],
      //     familyTypeList: [],
      //     modelList: []
      //   }
      // }
      if (this.viewPointList[treeNode.sceneId]) {
        if (treeNode.type === 'scene') {
          this.viewPointList[treeNode.sceneId].sceneVisable = toDisplay;
        } else if (treeNode.type === 'family') {
          // 先判断有没有
          if (this.viewPointList[treeNode.sceneId].familyList.length > 0) {
            var temp = this.viewPointList[treeNode.sceneId].familyList.find(function (item) {
              return item.id === treeNode.bizId;
            });
            if (temp) {
              temp.isVisable = toDisplay;
            } else {
              this.viewPointList[treeNode.sceneId].familyList.push({ id: treeNode.bizId, isVisable: toDisplay });
            }
          } else {
            this.viewPointList[treeNode.sceneId].familyList.push({ id: treeNode.bizId, isVisable: toDisplay });
          }
        } else if (treeNode.type === 'familyType') {
          if (this.viewPointList[treeNode.sceneId].familyTypeList.length > 0) {
            var _temp4 = this.viewPointList[treeNode.sceneId].familyTypeList.find(function (item) {
              return item.id === treeNode.bizId;
            });
            if (_temp4) {
              _temp4.isVisable = toDisplay;
            } else {
              this.viewPointList[treeNode.sceneId].familyTypeList.push({ id: treeNode.bizId, isVisable: toDisplay });
            }
          } else {
            this.viewPointList[treeNode.sceneId].familyTypeList.push({ id: treeNode.bizId, isVisable: toDisplay });
          }
        } else if (treeNode.type === 'model') {
          if (this.viewPointList[treeNode.sceneId].modelList.length > 0) {
            var _temp5 = this.viewPointList[treeNode.sceneId].modelList.find(function (item) {
              return item.id === treeNode.bizId;
            });
            if (_temp5) {
              _temp5.isVisable = toDisplay;
            } else {
              this.viewPointList[treeNode.sceneId].modelList.push({ id: treeNode.bizId, isVisable: toDisplay });
            }
          } else {
            this.viewPointList[treeNode.sceneId].modelList.push({ id: treeNode.bizId, isVisable: toDisplay });
          }
        }
        this.$store.dispatch('setViewPointList', this.viewPointList);
      }
      var modelsNeedUpdate = [];
      // 更新选择视图数据
      if (toDisplay) {
        this.traverseAllChildren(treeNode, function (node) {
          node.state.isVisible = false;
          // if (node.tag && node.tag.type === 'scene') {
          //   this.treeService.showScene(this.treeRoot, node)
          // }
          var index = tree.nodes.indexOf(node);
          tree.rows[index] = tree.options.rowRenderer(node, tree.options);
        }, function (node) {
          var model = _this7.viewer.loader.getModel(node.bizId);
          modelsNeedUpdate.push(model.id);
        });
        this.viewer.showModels(modelsNeedUpdate);
      } else {
        this.traverseAllChildren(treeNode, function (node) {
          node.state.isVisible = true;
          var index = tree.nodes.indexOf(node);
          tree.rows[index] = tree.options.rowRenderer(node, tree.options);
        }, function (node) {
          var model = _this7.viewer.loader.getModel(node.bizId);
          modelsNeedUpdate.push(model.id);
        });
        this.viewer.hideModels(modelsNeedUpdate);
      }
      tree.update();
      this.viewer.change();
    },
    traverseAllChildren: function traverseAllChildren(node, callback, leafCallback) {
      var _this8 = this;

      callback && callback(node);
      if (!node.children || !node.children.length) {
        leafCallback && leafCallback(node);
      } else {
        var childNodes = node.children;
        childNodes.forEach(function (child) {
          return _this8.traverseAllChildren(child, callback, leafCallback);
        });
      }
    },
    searchKeyword: function searchKeyword(keyword) {
      var filterOptions = {
        caseSensitive: false,
        exactMatch: false,
        filterPath: 'name', // Defaults to 'name'
        includeAncestors: true,
        includeDescendants: true
      };
      this.myTree.filter(keyword, filterOptions);
    }
  }
});

/***/ }),

/***/ "keNO":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/components/modelTree/index.vue?vue&type=template&id=31e8b9d8& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"modelView"}},[_c('el-input',{ref:"filterInput",staticClass:"filterInput",attrs:{"id":"filterInput","prefix-icon":"el-icon-search","placeholder":"请输入"},on:{"input":_vm.changeInput},model:{value:(_vm.filterName),callback:function ($$v) {_vm.filterName=$$v},expression:"filterName"}}),_vm._v(" "),_c('div',{style:({height:_vm.height}),attrs:{"id":"tree"}})],1)}
var staticRenderFns = []



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

/***/ }),

/***/ "lhdM":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/project/BIM/components/modelTree/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "e/hI");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "nyTV":
/*!**************************************************************!*\
  !*** ./src/views/project/BIM/components/modelTree/index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_31e8b9d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=31e8b9d8& */ "ytf3");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "z/Xj");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "lhdM");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_31e8b9d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_31e8b9d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ytf3":
/*!*********************************************************************************************!*\
  !*** ./src/views/project/BIM/components/modelTree/index.vue?vue&type=template&id=31e8b9d8& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_31e8b9d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=31e8b9d8& */ "keNO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_31e8b9d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_31e8b9d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "z/Xj":
/*!***************************************************************************************!*\
  !*** ./src/views/project/BIM/components/modelTree/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "kLIr");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);