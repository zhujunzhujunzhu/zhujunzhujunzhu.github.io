(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-9e7d"],{

/***/ "+YkP":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "29bv":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/measure.vue?vue&type=template&id=00775110& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"measureDiv drawer-wrap"},[_c('label',{staticClass:"titleLabel"},[_vm._v("多线段测量")]),_vm._v(" "),_c('el-row',[_c('el-col',[_c('label',{staticClass:"leftlabel"},[_vm._v("精度")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},on:{"change":_vm.changeMeasure},model:{value:(_vm.percision),callback:function ($$v) {_vm.percision=$$v},expression:"percision"}},_vm._l((_vm.percisionList),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1)],1),_vm._v(" "),_c('div',{staticClass:"btnDiv"},[(!_vm.isStart)?_c('el-button',{staticClass:"btn",attrs:{"size":"mini"},on:{"click":_vm.startMeasure}},[_vm._v("开启")]):_vm._e(),_vm._v(" "),(_vm.isStart)?_c('el-button',{staticClass:"btn",attrs:{"size":"mini"},on:{"click":_vm.quitMeasure}},[_vm._v("退出")]):_vm._e()],1),_vm._v(" "),_c('label',{staticClass:"btLabel"},[_vm._v("\n    提示:在\"多线段测量\"模式下，开始测量时需要确定测量起点，单击左键确定测量点，单击右键完成测量\n  ")])],1)}
var staticRenderFns = []



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

/***/ "7iZ0":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/index.vue?vue&type=template&id=45ab2ce8& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detailedModexDiv drawer-wrap"},[_c('drawer',{attrs:{"display":_vm.modelTreeSelect,"inner":true,"mask":false,"position":"left"},on:{"update:display":function($event){_vm.modelTreeSelect=$event}}},[_c('model-tree',{attrs:{"height":_vm.myHeight,"scene-list":_vm.sceneList}})],1),_vm._v(" "),_c('drawer',{attrs:{"display":_vm.rightToolDisplay,"inner":true,"mask":false,"width":"360px"},on:{"update:display":function($event){_vm.rightToolDisplay=$event}}},[(_vm.currentRightType === 'st')?_c('detailed-model-view',{attrs:{"view-visible":_vm.rightToolDisplay,"view-list":_vm.viewList},on:{"showView":_vm.showView,"getViewList":_vm.getViewList}}):_vm._e(),_vm._v(" "),(_vm.currentRightType === 'sk')?_c('detailed-model-viewpoint',{staticClass:"viewPointWrapper",attrs:{"link-type":"detailedModel"}}):_vm._e(),_vm._v(" "),(_vm.currentRightType === 'xxCl')?_c('measure-model'):_vm._e(),_vm._v(" "),(_vm.currentRightType === 'pm')?_c('bisect-model'):_vm._e(),_vm._v(" "),(_vm.currentRightType === 'sx')?_c('attribute-model'):_vm._e()],1),_vm._v(" "),_c('bim',{attrs:{"scene-list":_vm.sceneList,"right-px":350}}),_vm._v(" "),_c('video',{attrs:{"id":"video1","controls":"","src":"https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4","type":"video/mp4"}}),_vm._v(" "),_c('bottom-button',{attrs:{"btn-list":_vm.btnList,"show-select-model":true,"select-model-select":_vm.showModel,"tree-select":_vm.modelTreeSelect,"default-tool-bar-select-type":"st"},on:{"btnClick":_vm.btnClick}}),_vm._v(" "),_c('model-select',{attrs:{"show":_vm.showModel,"history-select-ids":_vm.selectIds},on:{"update:show":function($event){_vm.showModel=$event},"changeModel":_vm.changeModel}}),_vm._v(" "),(_vm.showBack)?_c('el-button',{staticStyle:{"position":"absolute","top":"10px","margin-left":"50%"},attrs:{"type":"primary"},on:{"click":_vm.goBack}},[_vm._v("返回\n  ")]):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "9thh":
/*!********************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "H55Z");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "BZBf":
/*!********************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/measure.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _measure_vue_vue_type_template_id_00775110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./measure.vue?vue&type=template&id=00775110& */ "ngVE");
/* harmony import */ var _measure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./measure.vue?vue&type=script&lang=js& */ "qor7");
/* empty/unused harmony star reexport *//* harmony import */ var _measure_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./measure.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "OZxq");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _measure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _measure_vue_vue_type_template_id_00775110___WEBPACK_IMPORTED_MODULE_0__["render"],
  _measure_vue_vue_type_template_id_00775110___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "measure.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "H55Z":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "L2JU");
/* harmony import */ var _components_bim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/bim */ "/ncK");
/* harmony import */ var _components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/drawer */ "BHIJ");
/* harmony import */ var _components_modelTree_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modelTree/index */ "nyTV");
/* harmony import */ var _components_modelSelect_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modelSelect/index */ "g90N");
/* harmony import */ var _bottomButton_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bottomButton/index */ "RNWj");
/* harmony import */ var _components_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/view */ "fhWf");
/* harmony import */ var _components_viewPoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/viewPoint */ "tlDJ");
/* harmony import */ var _components_measure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/measure */ "BZBf");
/* harmony import */ var _components_bisect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bisect */ "6OrZ");
/* harmony import */ var _components_attribute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/attribute */ "Zxg3");
/* harmony import */ var _api_project_bimViews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/api/project/bimViews */ "1O3d");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//














// let showUtil = null
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DetailedModel',
  components: {
    bim: _components_bim__WEBPACK_IMPORTED_MODULE_2__["default"],
    drawer: _components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModelTree: _components_modelTree_index__WEBPACK_IMPORTED_MODULE_4__["default"],
    BottomButton: _bottomButton_index__WEBPACK_IMPORTED_MODULE_6__["default"],
    DetailedModelView: _components_view__WEBPACK_IMPORTED_MODULE_7__["default"],
    ModelSelect: _components_modelSelect_index__WEBPACK_IMPORTED_MODULE_5__["default"],
    DetailedModelViewpoint: _components_viewPoint__WEBPACK_IMPORTED_MODULE_8__["default"],
    MeasureModel: _components_measure__WEBPACK_IMPORTED_MODULE_9__["default"],
    BisectModel: _components_bisect__WEBPACK_IMPORTED_MODULE_10__["default"],
    AttributeModel: _components_attribute__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  props: {},
  data: function data() {
    return {
      sceneList: null,
      myHeight: null,
      modelTreeSelect: true,
      rightToolDisplay: true,
      btnList: ['st', 'sk', 'pm', 'xxCl', 'sx'],
      currentSceneId: null,
      currentVersion: null,
      showModel: false,
      currentRightType: 'st',
      sceneLength: 0,
      currentVal: null,
      showBack: false
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['viewPointList', 'viewer', 'allSceneList', 'currentSceneList', 'currentPage'])),
  watch: {},
  created: function created() {
    this.$store.dispatch('setCurrentPage', 'detailed');

    // document.getElementById('viewer')
    // showUtil = () => {
    //   if (this.currentPage === 'detailed') {
    //     this.listen(viewInfo, num, JSON.parse(val.camera))
    //   }
    // }
  },
  beforeDestroy: function beforeDestroy() {
    // this.viewer.unlisten(JY.THREE.Events.ManifestLoaded)
  },
  mounted: function mounted() {
    var _this = this;

    this.sceneList = [];
    document.getElementsByClassName('detailedModexDiv')[0].style.height = document.documentElement.clientHeight - 130 + 'px';
    this.myHeight = document.getElementById('app').clientHeight - 190 + 'px';
    // 判断来源如果是应用管理取消视图视点
    if (this.$route.params.viewId) {
      this.showBack = true;
      this.btnList = ['pm', 'xxCl', 'sx'];
      this.rightToolDisplay = false;
      this.showModel = false;
      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_12__["getView"])({ id: this.$route.params.viewId }).then(function (res) {
        if (res.success) {
          _this.showView(res.result);
        }
      });
    } else {
      this.queryBimViews();
    }
    // console.log(document.getElementById('viewer'))
    // debugger
  },

  methods: {
    // 设置默认视图演示
    queryBimViews: function queryBimViews() {
      var _this2 = this;

      Object(_api_project_bimViews__WEBPACK_IMPORTED_MODULE_12__["queryBimViews"])({
        sourceId: JSON.parse(this.$storage.getStorage('project')).id,
        sourceType: 'Project'
      }).then(function (res) {
        if (res.success) {
          if (res.result && res.result.length > 0) {
            res.result.forEach(function (item) {
              if (item.id === 255) {
                _this2.showView(item);
              }
            });
          }
        }
      });
    },
    closeDrop: function closeDrop() {
      this.openTree = true;
    },
    getModel: function getModel() {
      // this.selectIds = []
      this.showModel = true;
    },
    btnClick: function btnClick(val) {
      if (!val.display) {
        document.getElementById('view-cube').style.right = '20px';
      } else {
        document.getElementById('view-cube').style.right = '350px';
      }
      if (val.type === 'modelTree') {
        this.display = true;
        this.modelTreeSelect = !this.modelTreeSelect;
      } else if (val.type === 'selectModel') {
        this.showModel = !this.showModel;
      } else {
        this.currentRightType = val.type;
        this.rightToolDisplay = val.display;
      }
    },
    showViewUtil: function showViewUtil(viewInfo, camera) {
      var _this3 = this;

      var _loop = function _loop(i) {
        var temp = viewInfo[i];
        if (!temp.sceneVisable) {
          _this3.viewer.hideScene(_this3.viewer.getScenesUnionId(i, temp.version));
        }
        if (temp.familyList && temp.familyList.length > 0) {
          var family = [];
          temp.familyList.forEach(function (item) {
            family = _this3.viewer.filterModels(function (f) {
              return f.familyId.toString() === item.id && f.sceneId.toString() === i;
            });
            if (item.isVisable) {
              _this3.viewer.showModels(family.map(function (f) {
                return f.modelId;
              }));
            } else {
              _this3.viewer.hideModels(family.map(function (f) {
                return f.modelId;
              }));
            }
          });
        }
        if (temp.familyTypeList && temp.familyTypeList.length > 0) {
          var familyType = [];
          temp.familyTypeList.forEach(function (item) {
            familyType = _this3.viewer.filterModels(function (f) {
              return f.familyTypeId.toString() === item.id && f.sceneId.toString() === i;
            });
            if (item.isVisable) {
              _this3.viewer.showModels(familyType.map(function (f) {
                return f.modelId;
              }));
            } else {
              _this3.viewer.hideModels(familyType.map(function (f) {
                return f.modelId;
              }));
            }
          });
        }
        if (temp.modelList && temp.modelList.length > 0) {
          var model = [];
          temp.modelList.forEach(function (item) {
            model = _this3.viewer.filterModels(function (f) {
              return f.modelId.toString() === item.id && f.sceneId.toString() === i;
            });
            if (item.isVisable) {
              _this3.viewer.showModels(model.map(function (f) {
                return f.modelId;
              }));
            } else {
              _this3.viewer.hideModels(model.map(function (f) {
                return f.modelId;
              }));
            }
          });
        }
      };

      for (var i in viewInfo) {
        _loop(i);
      }
      this.viewer.flyTo(camera);
    },

    // 显示场景
    showView: function showView(val) {
      var _this4 = this;

      this.currentVal = val;
      var viewInfo = JSON.parse(val.viewInfo);
      this.$store.dispatch('setViewPointList', viewInfo);
      var sceneList = [];
      var num = 0;

      var _loop2 = function _loop2(i) {
        // 判断是否在缓存中
        if (_this4.allSceneList.findIndex(function (s) {
          return s === i + '.' + viewInfo[i].version || s === '' + i;
        }) === -1) {
          num++;
        }
        // 判断是否和审查模型是一个模型
        if (i !== _this4.viewer.getScenesUnionId(_this4.currentSceneId, _this4.currentVersion)) {
          sceneList.push({ sceneId: i, version: viewInfo[i].version });
        } else {
          _this4.viewer.flyTo(JSON.parse(val.camera));
        }
      };

      for (var i in viewInfo) {
        _loop2(i);
      }
      this.sceneList = sceneList;
      if (num === 0) {
        setTimeout(function () {
          _this4.showViewUtil(viewInfo, JSON.parse(val.camera));
        });
      }
      this.viewer.listen(JY.THREE.Events.ManifestLoaded, function () {
        if (_this4.currentPage === 'detailed') {
          _this4.listen(viewInfo, num, JSON.parse(val.camera));
        }
      });
    },
    listen: function listen(viewInfo, num, camera) {
      this.sceneLength++;
      if (this.sceneLength >= num) {
        this.showViewUtil(viewInfo, camera);
      }
    },
    adjustListen: function adjustListen(num) {
      this.sceneLength++;
      if (this.sceneLength >= num) {
        this.viewer.adjustCameraBySceneIds(this.currentSceneList);
      }
    },
    goBack: function goBack() {
      this.$router.back(-1);
    },
    getViewList: function getViewList(val) {
      this.viewList = val;
    },

    // 模型选取回调
    changeModel: function changeModel(val) {
      var _this5 = this;

      var temp = [];
      if (val && val.length > 0) {
        val.forEach(function (item) {
          if (item.sceneId) {
            temp.push({
              sceneId: item.sceneId.toString(),
              version: item.sceneVersion ? item.sceneVersion.toString() : null
            });
          }
        });
      }
      this.sceneList = temp;
      // 判断是否在缓存
      var num = 0;
      temp.forEach(function (item) {
        // 判断是否在缓存中
        if (_this5.allSceneList.findIndex(function (s) {
          return s === item.sceneId;
        }) === -1) {
          num++;
        }
      });
      this.sceneLength = 0;
      this.viewer.listen(JY.THREE.Events.ManifestLoaded, function () {
        if (_this5.currentPage === 'detailed') {
          _this5.adjustListen(num);
        }
      });
      // 加入新模型存入缓存

      var _loop3 = function _loop3(i) {
        if (temp.findIndex(function (item) {
          return item.sceneId === i;
        }) === -1) {
          delete _this5.viewPointList[i];
        }
      };

      for (var i in this.viewPointList) {
        _loop3(i);
      }
      temp.forEach(function (item) {
        // if (!this.viewPointList[item.sceneId]) {
        _this5.viewPointList[item.sceneId] = {
          version: item.version,
          sceneVisable: true,
          familyList: [],
          familyTypeList: [],
          modelList: []
          // }
        };
      });
    }
  }
});

/***/ }),

/***/ "LHt6":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/attribute.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "MK8s":
/*!*******************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_45ab2ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=45ab2ce8& */ "ixP0");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "9thh");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "d1UJ");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_45ab2ce8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_45ab2ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ "OZxq":
/*!****************************************************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/measure.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../../node_modules/css-loader??ref--11-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./measure.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "T9jQ");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "T9jQ":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/measure.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "UPNu":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/BIM/detailedModel/components/measure.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "L2JU");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'MeasureModel',
  props: {},
  data: function data() {
    return {
      len: 'm',
      percision: 1,
      lenList: [{ label: 'm', value: 'm' }, { label: 'mm', value: 'mm' }],
      percisionList: [{ label: '0.1', value: 1 }, { label: '0.01', value: 2 }],
      isStart: false
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['viewer'])),
  watch: {},
  beforeDestroy: function beforeDestroy() {
    if (this.isStart) {
      this.viewer.leaveMeasureMode();
    }
  },
  mounted: function mounted() {
    document.getElementsByClassName('measureDiv')[0].style.height = document.documentElement.clientHeight - 150 + 'px';
  },

  methods: {
    startMeasure: function startMeasure() {
      this.isStart = true;
      this.viewer.enterMeasureMode(0.1, 0xf95628, 0xf95628, 'white', this.percision, this.len);
    },
    quitMeasure: function quitMeasure() {
      this.isStart = false;
      this.viewer.leaveMeasureMode();
    },
    changeMeasure: function changeMeasure() {
      if (this.isStart) {
        this.viewer.leaveMeasureMode();
      }
      this.viewer.enterMeasureMode(0.1, 0xf95628, 0xf95628, 'white', this.percision, this.len);
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

/***/ "d1UJ":
/*!***************************************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "+YkP");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ixP0":
/*!**************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/index.vue?vue&type=template&id=45ab2ce8& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45ab2ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=45ab2ce8& */ "7iZ0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45ab2ce8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45ab2ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "ngVE":
/*!***************************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/measure.vue?vue&type=template&id=00775110& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_template_id_00775110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./measure.vue?vue&type=template&id=00775110& */ "29bv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_template_id_00775110___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_template_id_00775110___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "qor7":
/*!*********************************************************************************************!*\
  !*** ./src/views/project/BIM/detailedModel/components/measure.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./measure.vue?vue&type=script&lang=js& */ "UPNu");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_measure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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