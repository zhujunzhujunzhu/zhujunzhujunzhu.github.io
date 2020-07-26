(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["b1oR"],{

/***/ "b1oR":
/*!*************************************!*\
  !*** ./src/utils/treeTableUtils.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "iCc5");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "V7oC");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var TreeTableUtils = function () {
  function TreeTableUtils() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TreeTableUtils);

    this.allList = [];
    this.allRoot = [];
    this.filterRoot = [];
    this.currPage = 1;
    this.pageSize = 20;
    this.currRoot = [];
    this.pageList = [];
    this.map = {};
    this.page = {};
    this.key = null;
    this.context = null;
    this.hasExpandNodes = [];
    this.oldData = [];
    this.isDeep = true;
    this.noPage = true;
  } // 所有的数据
  // 根节点
  // 筛选后的根节点
  // 当前页
  // 一页根节点的数目
  // 当前页面的根节点
  // 当前页所有的数据
  // id 与 其孩子节点的映射
  // 保留外部传入的分页对象
  // 索引关键字
  // 执行上下文
  // 状态为展开的节点
  // 上一次的数据
  // 深度模式 如果不为深度仅仅支持两层


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TreeTableUtils, [{
    key: 'initPageParams',
    value: function initPageParams(page, context, noDeep) {
      this.currPage = page.currPage;
      this.pageSize = page.pageSize;
      this.key = page.key;
      this.page = page;
      // 如果noDeep 才不为深度模式
      if (noDeep) {
        this.isDeep = false;
      }
      // 不进行分页
      if (page.noPage === undefined) {
        this.noPage = true;
      } else {
        this.noPage = page.noPage;
      }
      this.context = context;
    }
  }, {
    key: 'dealList',
    value: function dealList(list, oldData) {
      // 处理列表数据
      // 首先找到所有的根节点
      this.allList = list;
      this.allRoot = list.filter(function (item) {
        return !item.parentId;
      });
      this.oldData = oldData;
      this.dealPageList();
      return this.pageList;
    }
    // 前端分页

  }, {
    key: 'changeCurrPage',
    value: function changeCurrPage(currPage) {
      if (!this.noPage) {
        this.currPage = currPage;
        this.dealPageList();
      }
      return this.pageList;
    }
    // 前端根节点查询

  }, {
    key: 'searchByRoot',
    value: function searchByRoot(val) {
      this.key = val.trim(); // 去掉两头空格
      this.currPage = 1; // 分页置为1
      this.dealPageList();
      return this.pageList;
    }
    // 处理当前页面的数据

  }, {
    key: 'dealPageList',
    value: function dealPageList() {
      var _this = this;

      //  从根节点中匹配到 关键字 进行查询
      if (this.key) {
        // 当关键字存在时
        this.filterRoot = this.allRoot.filter(function (item) {
          return item.name.indexOf(_this.key) !== -1 || item.code.indexOf(_this.key) !== -1;
        });
      } else {
        // 当关键字不存在时
        this.filterRoot = this.allRoot;
      }

      // 根节点总数
      this.page.total = this.filterRoot.length;
      if (!this.noPage) {
        // 当进行分页时
        var start = (this.currPage - 1) * this.pageSize;
        var end = this.currPage * this.pageSize;
        this.currRoot = this.filterRoot.slice(start, end);
      } else {
        // 当不进行分页时
        this.currRoot = this.filterRoot.slice();
      }

      if (this.isDeep) {
        // 深度模式
        this.createhasExpandNodes();
      } else {
        // 仅仅支持两层
        this.createCurrRootMap();
      }
      // 生成当前页面的数据
      this.productPageList();
    }
    // 构建映射关系
    // 构建当前页的映射关系

  }, {
    key: 'createCurrRootMap',
    value: function createCurrRootMap() {
      var _this2 = this;

      // 在所有的数据中查找 目前只追求第二层映射
      this.currRoot.forEach(function (item) {
        var children = _this2.allList.filter(function (innerItem) {
          return innerItem.parentId === item.id;
        });
        _this2.map[item.id] = children;
      });
    }

    // 前端懒加载处理
    /**
     点击 + 构建基本映射 加入去  此时的映射是可以有一个缓存的 因为不涉及到更新数据的操作的
     并将节点添加入loadedChilrenNodes中去 但是此时需要注意节点展开状态的处理 节点刷新时
     将节点加入到hasExpandNodes
     */

  }, {
    key: 'loadMoreData',
    value: function loadMoreData(val) {
      // 新的树的组件会传入true
      if (val._expanded) {
        // 加载节点
        // 当不存在映射 需要先构建映射
        if (!this.map[val.id]) {
          var children = this.allList.filter(function (innerItem) {
            return innerItem.parentId === val.id;
          });
          this.map[val.id] = children;
          if (!this.hasExpandNodes) {
            // 初始化展开映射
            this.hasExpandNodes = [];
          }
          // 标识为已经展开的状态
          this.hasExpandNodes.push(val.id);
          this.pageList = this.pageList.concat(this.map[val.id]);
        }
      } else {
        // 从已经展开hasExpandNodes中剔除
        this.hasExpandNodes = this.hasExpandNodes.filter(function (item) {
          return item !== val.id;
        });
      }
      return this.pageList;
    }

    // 新的树组件的前端懒加载

  }, {
    key: 'noRequestLazyLoad',
    value: function noRequestLazyLoad(_ref) {
      var tree = _ref.tree,
          treeNode = _ref.treeNode,
          resolve = _ref.resolve;

      // 需要判断 它是否已经有孩子节点
      if (!treeNode.loaded) {
        this.hasExpandNodes.push(tree.id); // 将已经展开的节点保存  为下一次状态恢复
        var children = this.allList.filter(function (item) {
          return item.parentId === tree.id;
        });
        children = children.map(function (item) {
          if (!item.leaf) {
            item.hasChildren = true;
          }
          return item;
        });
        resolve(children);
        this.pageList = this.pageList.concat(children);
        return this.pageList;
      }
    }

    // 当重新getList时 hasExpandNodes 需要 构建映射

  }, {
    key: 'createhasExpandNodes',
    value: function createhasExpandNodes() {
      var _this3 = this;

      // 在当前页面的展开的节点
      if (!this.hasExpandNodes && this.hasExpandNodes.length === 0) return;
      // 从当前根节点进行查找 我会想到没有办法打开 新的树形表它会自动恢复之前的状态
      var createMap = function createMap(parent, needKeys) {
        // 当前父节点有的key
        var parentKeys = parent.map(function (item) {
          return item.id;
        });
        var fitlerKeys = needKeys.filter(function (key) {
          return parentKeys.includes(key);
        });
        if (fitlerKeys.length === 0) return;
        var list = [];
        fitlerKeys.forEach(function (key) {
          _this3.map[key] = _this3.allList.filter(function (item) {
            return item.parentId === key;
          });
          list = list.concat(_this3.map[key]);
        });
        createMap(list, needKeys);
      };
      createMap(this.currRoot, this.hasExpandNodes);
    }
    // 生成当前页面的数据

  }, {
    key: 'productPageList',
    value: function productPageList() {
      var _this4 = this;

      var list = [].concat(this.currRoot);
      if (this.isDeep) {
        // 深度模式
        if (this.hasExpandNodes) {
          // 当前页存在展开节点时
          this.hasExpandNodes.forEach(function (id) {
            _this4.map[id] && (list = list.concat(_this4.map[id]));
          });
        }
      } else {
        this.currRoot.forEach(function (item) {
          _this4.map[item.id] && (list = list.concat(_this4.map[item.id]));
        });
      }
      this.pageList = list;
    }
    // 列表方法

  }, {
    key: 'getList',
    value: function getList(_ref2) {
      var _this5 = this;

      var api = _ref2.api,
          params = _ref2.params,
          oldData = _ref2.oldData;

      return api(params).then(function (response) {
        if (response.success) {
          var list = _this5.dealList(response.result, oldData);
          return _this5.resetExpendStatus(list, oldData);
        }
      });
    }
    // 处理第二次刷新列表可以保存之前的展开状态   老版本的树形表格需要利用oldData

  }, {
    key: 'resetExpendStatus',
    value: function resetExpendStatus(result, oldData) {
      if (!oldData || oldData.length === 0) {
        return result;
      }
      return result.map(function (item, index) {
        var find = oldData.find(function (innerItem) {
          return innerItem.id === item.id;
        });
        if (find) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, find, item);
        } else {
          return item;
        }
      });
    }

    // 懒加载节点状态处理

  }, {
    key: 'resetExpendStatusLazy',
    value: function resetExpendStatusLazy(result, oldData, expandedKeys) {
      var loadedName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'loaded';

      if (!oldData || oldData.length === 0) {
        return result;
      }
      return result.map(function (item, index) {
        var find = oldData.find(function (innerItem) {
          return innerItem.id === item.id;
        });
        var inExpandKeys = expandedKeys.find(function (innerItem) {
          return innerItem.id === item.id;
        });
        if (inExpandKeys) {
          item[loadedName] = true;
        } else {
          item[loadedName] = false;
        }
        if (find) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, find, item);
        } else {
          return item;
        }
      });
    }
    // 找到相关兄弟节点

  }, {
    key: 'getNodeInfo',
    value: function getNodeInfo(_ref3) {
      var data = _ref3.data,
          curEle = _ref3.curEle;

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
    }
    // 操作按钮的筛选操作

  }, {
    key: 'filterOprButtons',
    value: function filterOprButtons(val, btns, data) {
      var ids = [];
      //  处理上移 下移 升级  降级
      var info = this.getNodeInfo({
        data: data,
        curEle: val
      });
      if (!info.isFirst) {
        // 当不是在兄弟节点的第一位就是可以 进行上移  降级
        ids.push('up');
      }
      if (!info.isEnd) {
        // 当不是兄弟节点的最后一位就是可以进行 下移
        ids.push('down');
      }
      // 处理新增 编辑 删除
      ids.push('add');
      ids.push('edit');
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
    }

    // 创建操作函数  上移 下移 升级  降级
    /**
      opeList:[{name:'',api:'',message：''}}]
      listFunName 默认列表接口
     */

  }, {
    key: 'createOperateFun',
    value: function createOperateFun(opeList) {
      var _this6 = this;

      var listFunName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'getList';

      var methods = {};
      opeList.forEach(function (item) {
        methods[item.name] = function (val) {
          if (!item.message) {
            item.message = '操作成功';
          }
          item.api({
            id: val.row.id
          }).then(function (res) {
            if (res.success) {
              _this6.context.$message({
                type: 'success',
                message: item.message
              });
              _this6.context[listFunName]();
            }
          });
        };
      });
      return methods;
    }
  }]);

  return TreeTableUtils;
}();

/* harmony default export */ __webpack_exports__["default"] = (new TreeTableUtils());

/***/ })

}]);