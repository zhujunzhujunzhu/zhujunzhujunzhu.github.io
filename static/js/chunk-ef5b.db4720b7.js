(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-ef5b"],{

/***/ "18/e":
/*!******************************************************!*\
  !*** ./src/api/project/safetyManage/videoMonitor.js ***!
  \******************************************************/
/*! exports provided: getVideoMonitor, getVideoMonitorTreeData, getVideoMsgList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideoMonitor", function() { return getVideoMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideoMonitorTreeData", function() { return getVideoMonitorTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideoMsgList", function() { return getVideoMsgList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function getVideoMonitor(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/videoMonitor/list',
    method: 'post',
    data: param
  });
}

function getVideoMonitorTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/videoMonitor/treeData',
    method: 'post',
    data: param
  });
}

function getVideoMsgList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/videoMonitor/videoMsgList',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "1WEO":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/safetyManage/videoMonitor/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2iU8":
/*!************************************!*\
  !*** ./src/assets/tendersIcon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAACvUlEQVRYR8VXQXISURB9/ZlUxWwcTxCyA1zIEeIJhCphK54g8QQmJxBOINmCVcETiCdwWBiykxsIm5RVYeZZ/Ychk2Qm8zUUmQVQ/P/7db9+3b9HsHo4rByGlCMRaST/bfh7TnJcEvakdTlW26Ify0GlI2I+bxgs1xwZvffal33RiCOYb9sCTnCMFx3IclgbCfBm2+AAzyQc1rh9YABEkAd+aoRBRDm3jhETgnMXJwWoQ+S5096syA2i16rIeI1npda042LM+nle9qPlswCQ/aIzmZHfAid7pfb0uMhQej0c1AIIXhWdKQaPae9DMCsyFm/loUAOXfY6gZP8/pAxEZRdaL5roxjcgfY4z3u/XaJN79kM+OBlPRL+2Dx4nMiAkl9qrjn+H9oXgApO4jonGplKJhcQ6YL0IXLkwkIx7cBpqXVxkhi7dxcQE3VGRem1p1bly0F1bJsNZPZQyRWCkxx57WkzAQ+H1WNAPsUk4KvXumjwS7UBcp5cleogRHx5Ox2Fw2ofkHdZTBSCF9B3i5WsvWln/z3nBejGu3ohzdk8HNY0NZprX5uS2bn6AOz60dL8yjNRHDkxMZBOJNQJ5+PaENkzMH1p/wyU9vUldLPB3gmxRqSTRX0x+EpwdxtJ0v8VaxX1jWNWEJyV2tMD+zNnYHEB1xLrkqyn5zsjbKqgYvAbEa6rIqX+bGYAF/D8rK+is6xc743XZUUujKbJ+xNEyz3Nub9xtSelZqk9L/vh9W5DRHzjcSTNy9k9p+548LjI13qolBUsbVuBbRUMqt28jvdYcKsHADps9JJOaIdSYh+gtmVdz3xyZjh2QcweOnjPGhEYRHbiicSoEDPznD4n4aA6dx34XC4L5z3E5Gnn9id5Y9FS3GF9++9qCmzQ0QZlweM6rZSjpZyAUncZe51zuwbQe5+B8XiSlOVfWvD4YwwXzssAAAAASUVORK5CYII="

/***/ }),

/***/ "682v":
/*!***************************************************************!*\
  !*** ./src/views/project/safetyManage/videoMonitor/index.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_f1717f20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f1717f20& */ "fAEw");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "dyxu");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "zTsP");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_f1717f20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_f1717f20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Cjj5":
/*!***************************************!*\
  !*** ./src/directive/resize/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize */ "hYTF");


var install = function install(Vue) {
  Vue.directive('resize', _resize__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

if (window.Vue) {
  window['resize'] = _resize__WEBPACK_IMPORTED_MODULE_0__["default"];
  Vue.use(install); // eslint-disable-line
}

_resize__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;
/* harmony default export */ __webpack_exports__["default"] = (_resize__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "dyxu":
/*!****************************************************************************************!*\
  !*** ./src/views/project/safetyManage/videoMonitor/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "oUJI");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "fAEw":
/*!**********************************************************************************************!*\
  !*** ./src/views/project/safetyManage/videoMonitor/index.vue?vue&type=template&id=f1717f20& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f1717f20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=f1717f20& */ "weHb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f1717f20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f1717f20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "hYTF":
/*!****************************************!*\
  !*** ./src/directive/resize/resize.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function bind(el, binding) {
    var options = binding.value;
    // 创建拖拽线 并挂载到元素上
    el.style = '\n     position:relative;\n     -webkit-user-select:none;\n     -moz-user-select:none;\n     -ms-user-select:none;\n     user-select:none\n  ';
    var minWidth = 300;
    var maxWidth = 700;
    if (options) {
      if (options.minWidth) {
        minWidth = options.minWidth;
      }
      if (options.maxWidth) {
        maxWidth = options.maxWidth;
      }
    }

    var resizeDiv = document.createElement('div');
    var baseStyle = '\n    position:absolute;\n    top:0;\n    bottom:0;\n    right:0;\n    width:15px;\n    cursor: e-resize;\n ';
    resizeDiv.style = baseStyle;
    // 样式的处理
    resizeDiv.onmouseenter = function () {
      resizeDiv.style = baseStyle + '\n      border-right: 1px dashed #ccc;\n      ';
    };
    resizeDiv.onmouseout = function () {
      resizeDiv.style = baseStyle;
    };

    el.appendChild(resizeDiv);
    var isDown = false;
    var disX = 0; // 鼠标按下时光标的X值
    var disW = 0; // 拖拽前div的宽
    resizeDiv.onmousedown = function (ev) {
      isDown = true;
      ev = ev || window.event;
      disX = ev.clientX; // 获取鼠标按下时光标x的值
      disW = el.offsetWidth; // 获取拖拽前div的宽
      document.onmousemove = function (ev) {
        if (!isDown) return;
        ev = ev || window.event;
        var W = ev.clientX - disX + disW;
        if (W < minWidth) {
          W = minWidth;
        }
        if (W > maxWidth) {
          W = maxWidth;
        }
        el.style.width = W + 'px'; // 拖拽后物体的宽
      };
      document.onmouseup = function () {
        isDown = false;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
});

/***/ }),

/***/ "oUJI":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/safetyManage/videoMonitor/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _directive_resize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/directive/resize */ "Cjj5");
/* harmony import */ var _components_MyCard_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MyCard/index */ "zY4l");
/* harmony import */ var _api_project_safetyManage_videoMonitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/project/safetyManage/videoMonitor */ "18/e");
/* harmony import */ var _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/directive/buttonPrivilege */ "qNua");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _assets_tendersIcon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/tendersIcon.png */ "2iU8");
/* harmony import */ var _assets_tendersIcon_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_tendersIcon_png__WEBPACK_IMPORTED_MODULE_8__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VideoMonitor',
  components: { MyCard: _components_MyCard_index__WEBPACK_IMPORTED_MODULE_4__["default"] },
  directives: { buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_6__["default"], resize: _directive_resize__WEBPACK_IMPORTED_MODULE_3__["default"] },
  data: function data() {
    return {
      tendersIcon: _assets_tendersIcon_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'label',
        isLeaf: 'leaf'
      },
      deviceList: [],
      list: [],
      showList: [],
      type: 'four',
      myVideo: '',
      player: [],
      playerIndex: -1,
      playerUrl: '',
      layOut: {
        span: 12,
        total: 4
      },
      videoShow: true,
      queryDevice: {},
      currentNode: null,
      loading: false,
      refresh: true
    };
  },

  computed: {
    computedList: function computedList() {
      return this.showList.slice(0, this.layOut.total);
    }
  },
  mounted: function mounted() {
    var _this = this;

    return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getAllDeviceList(null);

            case 2:
              // 从所有设备列表中取前四个
              _this.allDeviceList.forEach(function (item, index) {
                // if (index < 4) {
                _this.deviceList.push(item);
                // }
              });
              _this.initDom();
              _context.next = 6;
              return _this.getVideoList();

            case 6:
              _this.showVideo();

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    this.deviceList.forEach(function (item, index) {
      _this2.player[index].dispose();
    });
  },

  methods: {
    judgePrivileges: _utils__WEBPACK_IMPORTED_MODULE_7__["judgePrivileges"],
    /** 处理视频卡片的显示
     * @function showVideo
     */
    showVideo: function showVideo() {
      var _this3 = this;

      this.videoShow = false;
      this.$nextTick(function () {
        _this3.showList.forEach(function (item, index) {
          try {
            var player = _this3.$video('myVideo' + index, {
              // width: width,
              // height: height,
              updating: false,
              controls: true, // controlbar是否显示
              autoplay: 'muted'
            });
            player.src(item.VideoURL);
            player.load(item.VideoURL);
            _this3.player.push(player);
          } catch (error) {
            console.log(error);
          }
        });
        setTimeout(function () {
          _this3.videoShow = true;
        }, 200);
      });
    },


    // 初始化卡片的高度
    initDom: function initDom() {
      document.getElementById('leftCard').style.height = document.getElementById('app').clientHeight - 170 + 'px';
      document.getElementById('rightCard').style.height = document.getElementById('app').clientHeight - 170 + 'px';
      document.getElementById('videoFrame').style.height = document.getElementById('rightCard').clientHeight - 100 + 'px';
      document.getElementById('videoFrame').style.width = document.getElementById('rightCard').clientWidth - 40 + 'px';
    },
    loadNode: function loadNode(node, resolve) {
      var listQuery = {};
      if (node.level === 0) {
        listQuery.type = 'project';
      } else if (node.level === 1) {
        listQuery.id = node.data.id;
        listQuery.type = 'work_point';
      } else {
        listQuery.id = node.data.id;
        listQuery.type = 'video_monitor';
      }
      Object(_api_project_safetyManage_videoMonitor__WEBPACK_IMPORTED_MODULE_5__["getVideoMonitorTreeData"])(listQuery).then(function (res) {
        if (res.success) {
          return resolve(res.result.map(function (item) {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
              label: item.name,
              children: item.leaf ? null : []
            });
          }));
        }
      });
    },

    /** 拿到所有的设备列表
     * @function getAllDeviceList
     */
    getAllDeviceList: function getAllDeviceList(id, type) {
      var _this4 = this;

      var listQuery = {};
      if (type === 'project') {
        listQuery.tendersId = id;
      } else {
        listQuery.workPointId = id;
      }
      return Object(_api_project_safetyManage_videoMonitor__WEBPACK_IMPORTED_MODULE_5__["getVideoMonitor"])(listQuery).then(function (res) {
        if (res.success) {
          _this4.allDeviceList = res.result.list;
        }
      });
    },

    /** 获取视频列表
     * @function getVideoList
     */
    getVideoList: function getVideoList(node) {
      var _this5 = this;

      this.showList = [];
      this.loading = true;
      var devCodes = [];
      // deviceList验证有值
      this.deviceList.slice(0, this.layOut.total).forEach(function (item) {
        devCodes.push(item.code);
      });
      var devCodesString = devCodes.join(',');
      return Object(_api_project_safetyManage_videoMonitor__WEBPACK_IMPORTED_MODULE_5__["getVideoMsgList"])({ devCodes: devCodesString }).then(function (res) {
        if (res.success) {
          // 因为接口数据返回慢 如果不为当前节点的返回数据 返回的数据弃用
          if (_this5.currentNode && node && node.id !== _this5.currentNode.id) {
            return;
          }
          if (res.result.length > 0) {
            devCodes.forEach(function (key) {
              var index = res.result.findIndex(function (item) {
                return item.DevCode === key;
              });
              if (index > -1) {
                _this5.showList.push(res.result[index]);
              }
            });
            _this5.showVideo();
          }
          _this5.loading = false;
        }
      });
    },

    /** 左侧树点击
     * @function handleNodeClick
     */
    handleNodeClick: function handleNodeClick(node) {
      var _this6 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this6.currentNode = node;
                _this6.videoShow = false;
                _this6.player.forEach(function (item, index) {
                  _this6.player[index].dispose && _this6.player[index].dispose();
                });
                _this6.deviceList = [];
                _this6.showList = [];
                _this6.player = [];

                if (!(node.type === 'project' || node.type === 'work_point')) {
                  _context2.next = 13;
                  break;
                }

                if (_this6.type === 'one') {
                  // 当上一类型为one时才处理
                  _this6.type = 'four';
                  _this6.layOut = {
                    span: 12,
                    total: 4
                  };
                }

                _context2.next = 10;
                return _this6.getAllDeviceList(node.id, node.type);

              case 10:
                if (_this6.allDeviceList.length > 0) {
                  _this6.allDeviceList.forEach(function (item, index) {
                    // if (index < 4) {
                    _this6.deviceList.push(item);
                    // }
                  });
                }
                _context2.next = 16;
                break;

              case 13:
                _this6.type = 'one';
                _this6.layOut = {
                  span: 24,
                  total: 1
                };

                _this6.deviceList.push(node.entity);

              case 16:
                if (!(_this6.deviceList.length > 0)) {
                  _context2.next = 19;
                  break;
                }

                _context2.next = 19;
                return _this6.getVideoList(node);

              case 19:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this6);
      }))();
    },


    /** 宫格处理
     * @function dealGrid
     */
    dealGrid: function dealGrid(type) {
      var _this7 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this7.currentNode && _this7.currentNode.type === 'video_monitor')) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return');

              case 2:
                if (type === 'nine') {
                  _this7.type = 'nine';
                  // 处理九宫格
                  _this7.layOut = {
                    span: 8,
                    total: 9
                  };
                } else if (type === 'four') {
                  _this7.type = 'four';
                  // 处理四宫格
                  _this7.layOut = {
                    span: 12,
                    total: 4
                  };
                } else {
                  _this7.type = 'one';
                  // 单个
                  _this7.layOut = {
                    span: 24,
                    total: 1
                  };
                }

                // 相同的数据 vue不会重新销毁 不销毁不能使用dispose 而不使用dispose 视频就没有办法加载
                // 视频链接五分钟没有播放会失效
                _this7.refresh = false;
                _context3.next = 6;
                return _this7.getVideoList(_this7.currentNode);

              case 6:

                _this7.$nextTick(function () {
                  _this7.refresh = true;
                  _this7.player.forEach(function (item, index) {
                    _this7.player[index].dispose && _this7.player[index].dispose();
                  });
                  _this7.player = [];
                  _this7.showVideo();
                });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this7);
      }))();
    },

    /** 宫格高度处理
     * @function dealHeight
     */
    dealStyle: function dealStyle() {
      var rate = 100 / (this.layOut.total / (24 / this.layOut.span));
      return 'height:' + rate + '%;';
    },

    /** 跳转到视频列表页面
     * @function turnTo
     */
    turnTo: function turnTo() {
      this.$router.push('./videoList');
    }
  }
});

/***/ }),

/***/ "weHb":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/safetyManage/videoMonitor/index.vue?vue&type=template&id=f1717f20& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container videoMonitorDiv"},[_c('el-row',{staticClass:"box-card-wrapper"},[_c('el-card',{directives:[{name:"resize",rawName:"v-resize",value:({maxWidth:800}),expression:"{maxWidth:800}"},{name:"initHeight",rawName:"v-initHeight"}],staticClass:"box-card leftCard",attrs:{"id":"leftCard"}},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"header-title"},[_vm._v("视频监控管理")])]),_vm._v(" "),_c('el-tree',{ref:"treeRef",attrs:{"node-key":"id","data":_vm.treeData,"props":_vm.defaultProps,"default-expand-all":false,"highlight-current":"","load":_vm.loadNode,"lazy":"","expand-on-click-node":false},on:{"node-click":_vm.handleNodeClick},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var node = ref.node;
var data = ref.data;
return _c('span',{staticClass:"custom-tree-node"},[(node.data.type==='project')?_c('img',{staticClass:"tendersIcon-img",attrs:{"src":_vm.tendersIcon,"width":"15","alt":""}}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"tree-label",attrs:{"title":node.label}},[_vm._v(_vm._s(node.label))])])}}])})],1),_vm._v(" "),_c('el-card',{staticClass:"box-card rightCard",attrs:{"id":"rightCard"}},[_c('div',{staticClass:"flex flex-space-between",attrs:{"slot":"header"},slot:"header"},[_c('div',[_c('el-button',{class:[ _vm.type==='four' ? 'btn-active':''],on:{"click":function($event){return _vm.dealGrid('four')}}},[_vm._v("四屏")]),_vm._v(" "),_c('el-button',{class:[ _vm.type==='nine' ? 'btn-active':''],on:{"click":function($event){return _vm.dealGrid('nine')}}},[_vm._v("九屏")])],1),_vm._v(" "),_c('div',{staticClass:"flex flex-middle"},[(_vm.judgePrivileges('P_splb_ck'))?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.turnTo}},[_vm._v("视频列表")]):_vm._e()],1)]),_vm._v(" "),_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"videoFrame",attrs:{"id":"videoFrame","element-loading-text":"玩命加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.01)"}},[_c('el-row',[_vm._l((_vm.computedList),function(item,index){return [_c('el-col',{key:index,staticClass:"flex flex-center flex-middle",style:(_vm.dealStyle()),attrs:{"span":_vm.layOut.span}},[(_vm.refresh)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.videoShow),expression:"videoShow"}],staticClass:"video-wrapper"},[_c('video',{staticClass:"video-js",attrs:{"id":'myVideo'+index}})]):_vm._e()])]})],2),_vm._v(" "),(!_vm.loading &&_vm.computedList.length ===0 )?_c('div',{staticClass:"empty-text-video"},[_vm._v("视频监控空空如也~")]):_vm._e()],1)])],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "zTsP":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/project/safetyManage/videoMonitor/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "1WEO");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);