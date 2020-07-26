(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-7275"],{

/***/ "06J6":
/*!*******************************************************************!*\
  !*** ./src/views/project/safetyManage/videoMonitor/index_old.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_old_vue_vue_type_template_id_a862e9a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_old.vue?vue&type=template&id=a862e9a2&scoped=true& */ "vDuN");
/* harmony import */ var _index_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_old.vue?vue&type=script&lang=js& */ "qvfq");
/* empty/unused harmony star reexport *//* harmony import */ var _index_old_vue_vue_type_style_index_0_id_a862e9a2_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index_old.vue?vue&type=style&index=0&id=a862e9a2&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "DGlD");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_old_vue_vue_type_template_id_a862e9a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_old_vue_vue_type_template_id_a862e9a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a862e9a2",
  null
  
)

component.options.__file = "index_old.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ "6Ct/":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/safetyManage/videoMonitor/index_old.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyCard_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MyCard/index */ "zY4l");
/* harmony import */ var _api_project_safetyManage_videoMonitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/project/safetyManage/videoMonitor */ "18/e");
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


// import axios from 'axios' // 以后外部资源调用

// import { getTenders } from '@/api/project/qbs'


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VideoMonitor',
  components: { MyCard: _components_MyCard_index__WEBPACK_IMPORTED_MODULE_4__["default"] },
  directives: { buttonPrivilege: _directive_buttonPrivilege__WEBPACK_IMPORTED_MODULE_6__["default"] },
  data: function data() {
    return {
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'label',
        isLeaf: 'leaf'
      },
      allDeviceList: [],
      deviceList: [],
      list: [],
      showList: [],
      type: 'four',
      // nine: [0, 1, 8, 10, 11, 14, 15, 16, 17],
      // four: [1, 8, 14, 17],
      // num1: [10, 11, 12, 13, 14, 15, 9, 7, 8],
      myVideo: '',
      player: [],
      playerIndex: -1,
      playerUrl: '',
      showOne: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getAllDeviceList(null);

            case 2:
              // 从所有设备列表中取前四个
              _this.allDeviceList.forEach(function (item, index) {
                if (index < 4) {
                  _this.deviceList.push(item);
                }
              });
              _this.initDom();
              _context.next = 6;
              return _this.getVideoList();

            case 6:
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
    showVideo: function showVideo() {
      var _this3 = this;

      // 总的显示区域的尺寸
      var width = document.getElementById('videoFrame').clientWidth;
      var height = document.getElementById('videoFrame').clientHeight;
      var size = {
        width: width,
        height: height
      };
      this.showList.forEach(function (item, index) {
        // this.player.push()
        _this3.initVideo(size, item, index);
      });
    },
    reload: function reload() {
      var now = new Date();
      console.log(now);
    },

    // 初始化卡片的高度
    initDom: function initDom() {
      document.getElementById('leftCard').style.height = document.getElementById('app').clientHeight - 170 + 'px';
      document.getElementById('rightCard').style.height = document.getElementById('app').clientHeight - 170 + 'px';
      document.getElementById('treeRef').style.height = document.getElementById('leftCard').clientHeight - 150 + 'px';
      document.getElementById('videoFrame').style.height = document.getElementById('rightCard').clientHeight - 60 + 'px';
      document.getElementById('videoFrame').style.width = document.getElementById('rightCard').clientWidth - 200 + 'px';
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
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, item, { label: item.name, children: item.leaf ? null : [] });
          }));
        }
      });
    },
    handleNodeClick: function handleNodeClick(node) {
      var _this4 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 上一次为type为one并且当次为类型设备时不dispose
                if (_this4.player.length > 0 && !(_this4.type === 'one' && node.type === 'video_monitor')) {
                  _this4.player.forEach(function (item, index) {
                    _this4.player[index].dispose();
                  });
                }
                _this4.deviceList = [];
                _this4.showList = [];
                _this4.player = [];

                if (!(node.type === 'project' || node.type === 'work_point')) {
                  _context2.next = 11;
                  break;
                }

                _this4.type = 'four';
                _context2.next = 8;
                return _this4.getAllDeviceList(node.id, node.type);

              case 8:
                if (_this4.allDeviceList.length > 0) {
                  _this4.allDeviceList.forEach(function (item, index) {
                    if (index < 4) {
                      _this4.deviceList.push(item);
                    }
                  });
                }
                _context2.next = 13;
                break;

              case 11:
                _this4.type = 'one';
                _this4.deviceList.push(node.entity);

              case 13:
                if (!(_this4.deviceList.length > 0)) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 16;
                return _this4.getVideoList();

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this4);
      }))();
    },
    change: function change(type) {
      var _this5 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this5.type !== type && _this5.showList.length > 0) {
                  _this5.showList.forEach(function (item, index) {
                    _this5.player[index].dispose();
                  });
                  _this5.type = type;
                }
                _this5.deviceList = [];
                if (type === 'four') {
                  _this5.allDeviceList.forEach(function (item, index) {
                    if (index < 4) {
                      _this5.deviceList.push(item);
                    }
                  });
                }

                _context3.next = 5;
                return _this5.getVideoList();

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this5);
      }))();
    },
    turnTo: function turnTo() {
      this.$router.push('./videoList');
    },
    getAllDeviceList: function getAllDeviceList(id, type) {
      var _this6 = this;

      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
        var listQuery = {};
        if (type === 'project') {
          listQuery.tendersId = id;
        } else {
          listQuery.workPointId = id;
        }
        Object(_api_project_safetyManage_videoMonitor__WEBPACK_IMPORTED_MODULE_5__["getVideoMonitor"])(listQuery).then(function (res) {
          if (res.success) {
            _this6.allDeviceList = res.result.list;
            resolve();
          }
        });
      });
    },
    getVideoList: function getVideoList() {
      var _this7 = this;

      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
        var devCodes = [];
        // deviceList验证有值
        _this7.deviceList.forEach(function (item) {
          devCodes.push(item.code);
        });
        var devCodesString = devCodes.join(',');
        // this.showList = []
        // this.player = []
        Object(_api_project_safetyManage_videoMonitor__WEBPACK_IMPORTED_MODULE_5__["getVideoMsgList"])({ devCodes: devCodesString }).then(function (res) {
          if (res.success) {
            if (res.result.length > 0) {
              devCodes.forEach(function (key) {
                var index = res.result.findIndex(function (item) {
                  return item.DevCode === key;
                });
                if (index > -1) {
                  _this7.showList.push(res.result[index]);
                }
              });
              _this7.showVideo();
            }
            resolve();
          }
        });
        // axios.post('http://180.169.207.226:82/st-web/api/getForGgpt/video/videoMsgList', { devCodes: devCodesString }).then(res => {
        //   if (res.data.success) {
        //     if (res.data.result.length > 0) {
        //       devCodes.forEach(key => {
        //         const index = res.data.result.findIndex(item => item.DevCode === key)
        //         if (index > -1) {
        //           this.showList.push(res.data.result[index])
        //         }
        //       })
        //       // res.data.result.forEach((item) => {
        //       //   this.showList.push(item)
        //       // })
        //       this.showVideo()
        //     }
        //
        //     // this.list = res.data.result
        //     resolve()
        //   }
        // })
      });
      // const back = await getVideoMonitor({})
      // if (back.success) {
      //   this.list = back.result.list
      // }
    },
    initVideo: function initVideo(size, item, index) {
      var width = size.width;
      var height = size.height - 200;
      if (this.type === 'four') {
        width = size.width / 2;
        height = (size.height - 200) / 2;
      } else if (this.type === 'nine') {
        width = size.width / 3;
        height = (size.height - 200) / 3;
      }
      var player = this.$video('myVideo' + index, {
        // videoId: item.id,
        width: width,
        height: height,
        updating: false,
        controls: true, // controlbar是否显示
        autoplay: 'muted'
      });
      player.src(item.VideoURL);
      player.load(item.VideoURL);
      // player.videoIndex = index
      this.player.push(player);
      // this.player[item].videoId = item
    }
  }
});

/***/ }),

/***/ "DGlD":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/views/project/safetyManage/videoMonitor/index_old.vue?vue&type=style&index=0&id=a862e9a2&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_style_index_0_id_a862e9a2_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_old.vue?vue&type=style&index=0&id=a862e9a2&rel=stylesheet%2Fscss&lang=scss&scoped=true& */ "uzMI");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_style_index_0_id_a862e9a2_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_style_index_0_id_a862e9a2_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_style_index_0_id_a862e9a2_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_style_index_0_id_a862e9a2_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_style_index_0_id_a862e9a2_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E/BK":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/safetyManage/videoMonitor/index_old.vue?vue&type=template&id=a862e9a2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container videoMonitorDiv"},[_c('el-row',{staticClass:"box-card-wrapper"},[_c('el-card',{staticClass:"box-card leftCard",attrs:{"id":"leftCard"}},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('h3',[_vm._v("视频列表")])]),_vm._v(" "),_c('el-tree',{ref:"treeRef",staticStyle:{"overflow":"auto"},attrs:{"id":"treeRef","node-key":"id","data":_vm.treeData,"props":_vm.defaultProps,"default-expand-all":false,"highlight-current":"","load":_vm.loadNode,"lazy":"","expand-on-click-node":false},on:{"node-click":_vm.handleNodeClick}})],1),_vm._v(" "),_c('el-card',{staticClass:"box-card rightCard",attrs:{"id":"rightCard"}},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('h3',[_vm._v("视频监控")])]),_vm._v(" "),_c('el-button',{directives:[{name:"button-privilege",rawName:"v-button-privilege",value:('P_splb_tz'),expression:"'P_splb_tz'"}],staticStyle:{"float":"right"},attrs:{"type":"primary","size":"mini"},on:{"click":_vm.turnTo}},[_vm._v("\n        视频列表\n      ")]),_vm._v(" "),_c('div',{staticClass:"videoFrame",attrs:{"id":"videoFrame"}},[(_vm.type==='one')?_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('video',{staticClass:"video-js",staticStyle:{"border":"1px solid white"},attrs:{"id":"myVideo0"}})])],1):_vm._e(),_vm._v(" "),(_vm.type==='four')?_c('el-row',_vm._l((_vm.deviceList),function(item,index){return (index < 2)?_c('el-col',{key:item.id,attrs:{"span":12}},[_c('video',{staticClass:"video-js",staticStyle:{"border":"1px solid white"},attrs:{"id":'myVideo'+index}})]):_vm._e()}),1):_vm._e(),_vm._v(" "),(_vm.type==='four')?_c('el-row',_vm._l((_vm.deviceList),function(item,index){return (index > 1 && index < 4)?_c('el-col',{key:item.id,attrs:{"span":12}},[_c('video',{staticClass:"video-js",staticStyle:{"border":"1px solid white"},attrs:{"id":'myVideo'+index}})]):_vm._e()}),1):_vm._e(),_vm._v(" "),(_vm.type==='nine')?_c('el-row',_vm._l((_vm.showList),function(item,index){return (index < 3)?_c('el-col',{key:item.id,attrs:{"span":8}},[_c('video',{staticClass:"video-js",staticStyle:{"border":"1px solid white"},attrs:{"id":'myVideo'+index}})]):_vm._e()}),1):_vm._e(),_vm._v(" "),(_vm.type==='nine')?_c('el-row',_vm._l((_vm.showList),function(item,index){return (index < 6 && index >= 3)?_c('el-col',{key:item.id,attrs:{"span":8}},[_c('video',{staticClass:"video-js",staticStyle:{"border":"1px solid white"},attrs:{"id":'myVideo'+index}})]):_vm._e()}),1):_vm._e(),_vm._v(" "),(_vm.type==='nine')?_c('el-row',_vm._l((_vm.showList),function(item,index){return (index < 9 && index >= 6)?_c('el-col',{key:item.id,attrs:{"span":8}},[_c('video',{staticClass:"video-js",staticStyle:{"border":"1px solid white"},attrs:{"id":'myVideo'+index}})]):_vm._e()}),1):_vm._e()],1)],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "qvfq":
/*!********************************************************************************************!*\
  !*** ./src/views/project/safetyManage/videoMonitor/index_old.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_old.vue?vue&type=script&lang=js& */ "6Ct/");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "uzMI":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/safetyManage/videoMonitor/index_old.vue?vue&type=style&index=0&id=a862e9a2&rel=stylesheet%2Fscss&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "vDuN":
/*!**************************************************************************************************************!*\
  !*** ./src/views/project/safetyManage/videoMonitor/index_old.vue?vue&type=template&id=a862e9a2&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_template_id_a862e9a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_old.vue?vue&type=template&id=a862e9a2&scoped=true& */ "E/BK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_template_id_a862e9a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_old_vue_vue_type_template_id_a862e9a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);