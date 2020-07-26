(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-6dfd"],{

/***/ "07xw":
/*!***********************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonWidgetForm.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sonWidgetForm_vue_vue_type_template_id_cf799b14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sonWidgetForm.vue?vue&type=template&id=cf799b14& */ "b+8a");
/* harmony import */ var _sonWidgetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sonWidgetForm.vue?vue&type=script&lang=js& */ "4XIi");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sonWidgetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sonWidgetForm_vue_vue_type_template_id_cf799b14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sonWidgetForm_vue_vue_type_template_id_cf799b14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "sonWidgetForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3XYF":
/*!**********************************************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonWidgetFormItem.vue?vue&type=template&id=d746dd7a& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetFormItem_vue_vue_type_template_id_d746dd7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./sonWidgetFormItem.vue?vue&type=template&id=d746dd7a& */ "J/od");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetFormItem_vue_vue_type_template_id_d746dd7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetFormItem_vue_vue_type_template_id_d746dd7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "4MG6":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/sonCustomerForm/sonWidgetForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "MQ60");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sonWidgetFormItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sonWidgetFormItem */ "Xiid");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a,
    sonWidgetFormItem: _sonWidgetFormItem__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    data: {
      type: Object,
      default: function _default() {}
    },
    select: {
      type: Object,
      default: function _default() {}
    },
    recycleBin: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      selectWidget: this.select
    };
  },

  watch: {
    select: function select(val) {
      this.selectWidget = val;
    },

    selectWidget: {
      handler: function handler(val) {
        this.$emit('update:select', val);
      },

      deep: true
    }
  },
  mounted: function mounted() {
    document.body.ondrop = function (event) {
      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      if (isFirefox) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  },

  methods: {
    handleMoveEnd: function handleMoveEnd(_ref) {
      var newIndex = _ref.newIndex,
          oldIndex = _ref.oldIndex;

      console.log('index', newIndex, oldIndex);
    },
    handleSelectWidget: function handleSelectWidget(index) {
      console.log(index, '#####');
      this.selectWidget = this.data.list[index];
    },

    // 处理recycleBin
    dealRecycleBin: function dealRecycleBin(key) {
      var keyIndex = -1;
      this.recycleBin.forEach(function (item, index) {
        if (item.key === key) keyIndex = index;
      });
      if (keyIndex !== -1) {
        this.recycleBin.splice(keyIndex, 1);
      }
    },

    // RecycleBinKeys  判断recycleBin中是不是已经存在这个key
    findKey: function findKey(jsonArr, key) {
      return jsonArr.some(function (item) {
        return item.key === key;
      });
    },
    handleWidgetAdd: function handleWidgetAdd(evt) {
      console.log('add', evt);
      console.log('end', evt);
      var newIndex = evt.newIndex;
      var to = evt.to;
      console.log(to);
      // 为拖拽到容器的元素添加唯一 key
      var key = this.data.list[newIndex].key;
      if (key) {
        var configItem = this.recycleBin.find(function (item) {
          return item.key === key;
        });
        if (configItem) {
          this.$set(this.data.list, newIndex, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, configItem));
          this.dealRecycleBin(key);
        }
      } else {
        key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999);
        this.$set(this.data.list, newIndex, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.data.list[newIndex], {
          options: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.data.list[newIndex].options, {
            remoteFunc: 'func_' + key,
            props: {
              value: 'value',
              label: 'label'
            }
          }),
          key: key,
          // 绑定键值
          model: this.data.list[newIndex].type + '_' + key,
          rules: []
        }));

        if (this.data.list[newIndex].type === 'radio' || this.data.list[newIndex].type === 'checkbox' || this.data.list[newIndex].type === 'select') {
          this.$set(this.data.list, newIndex, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.data.list[newIndex], {
            options: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.data.list[newIndex].options, {
              options: this.data.list[newIndex].options.options.map(function (item) {
                return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item);
              })
            })
          }));
        }
      }
      if (this.data.list[newIndex].type === 'grid') {
        this.$set(this.data.list, newIndex, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.data.list[newIndex], {
          columns: this.data.list[newIndex].columns.map(function (item) {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item);
          })
        }));
      }

      this.selectWidget = this.data.list[newIndex];
    },
    handleWidgetColAdd: function handleWidgetColAdd($event, row, colIndex) {
      console.log('coladd', $event, row, colIndex);
      var newIndex = $event.newIndex;
      var oldIndex = $event.oldIndex;
      var item = $event.item;

      // 防止布局元素的嵌套拖拽
      if (item.className.indexOf('data-grid') >= 0) {
        // 如果是列表中拖拽的元素需要还原到原来位置
        item.tagName === 'DIV' && this.data.list.splice(oldIndex, 0, row.columns[colIndex].list[newIndex]);
        row.columns[colIndex].list.splice(newIndex, 1);
        return false;
      }
      console.log('from', item);
      var key = row.columns[colIndex].list[newIndex].key;
      if (key) {
        var configItem = this.recycleBin.find(function (item) {
          return item.key === key;
        });
        if (configItem) {
          this.$set(row.columns[colIndex].list, newIndex, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, configItem));
          this.dealRecycleBin(key);
        }
      }
      this.selectWidget = row.columns[colIndex].list[newIndex];
    },
    handleWidgetDelete: function handleWidgetDelete(index) {
      var _this = this;

      if (this.data.list.length - 1 === index) {
        if (index === 0) {
          this.selectWidget = {};
        } else {
          this.selectWidget = this.data.list[index - 1];
        }
      } else {
        this.selectWidget = this.data.list[index + 1];
      }

      this.$nextTick(function () {
        // 当为type='grid'  这个将里面的组件放入到回收箱
        var bin = _this.data.list.splice(index, 1);
        if (bin && bin[0]) {
          if (bin[0].type === 'grid') {
            bin[0].columns.forEach(function (item) {
              item.list.forEach(function (inner) {
                if (!_this.findKey(_this.recycleBin, inner.key)) {
                  _this.recycleBin.push(inner);
                }
              });
            });
          }
          if (bin[0].type === 'label') {
            if (!_this.findKey(_this.recycleBin, bin[0].key)) {
              _this.recycleBin.push(bin[0]);
            }
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "4XIi":
/*!************************************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonWidgetForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./sonWidgetForm.vue?vue&type=script&lang=js& */ "4MG6");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "69fx":
/*!*************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonWidgetConfig.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sonWidgetConfig_vue_vue_type_template_id_6ee3c760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sonWidgetConfig.vue?vue&type=template&id=6ee3c760& */ "nuzp");
/* harmony import */ var _sonWidgetConfig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sonWidgetConfig.vue?vue&type=script&lang=js& */ "ZZc0");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sonWidgetConfig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sonWidgetConfig_vue_vue_type_template_id_6ee3c760___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sonWidgetConfig_vue_vue_type_template_id_6ee3c760___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "sonWidgetConfig.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Al8e":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/sonCustomerForm/sonWidgetFormItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Upload */ "xvje");
/* harmony import */ var _components_Tinymce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Tinymce */ "glbJ");
/* harmony import */ var _components_selectUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/selectUser */ "6zDp");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @riophae/vue-treeselect */ "cCY5");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "VCwm");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    FmUpload: _Upload__WEBPACK_IMPORTED_MODULE_0__["default"],
    Tinymce: _components_Tinymce__WEBPACK_IMPORTED_MODULE_1__["default"],
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_3___default.a,
    selectUser: _components_selectUser__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    element: {
      type: Object,
      default: function _default() {}
    },
    select: {
      type: Object,
      default: function _default() {}
    },
    index: {
      type: Number,
      default: 0
    },
    data: {
      type: Object,
      default: function _default() {}
    },
    recycleBin: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      selectWidget: this.select
    };
  },

  watch: {
    select: function select(val) {
      this.selectWidget = val;
    },

    selectWidget: {
      handler: function handler(val) {
        this.$emit('update:select', val);
      },

      deep: true
    }
  },
  mounted: function mounted() {},

  methods: {
    // RecycleBinKeys  判断recycleBin中是不是已经存在这个key
    findKey: function findKey(jsonArr, key) {
      return jsonArr.some(function (item) {
        return item.key === key;
      });
    },
    handleSelectWidget: function handleSelectWidget(index) {
      this.selectWidget = this.data.list[index];
    },
    handleWidgetDelete: function handleWidgetDelete(index) {
      var _this = this;

      if (this.data.list.length - 1 === index) {
        if (index === 0) {
          this.selectWidget = {};
        } else {
          this.selectWidget = this.data.list[index - 1];
        }
      } else {
        this.selectWidget = this.data.list[index + 1];
      }

      this.$nextTick(function () {
        var tp = _this.data.list.splice(index, 1);
        if (tp && tp[0]) {
          if (!_this.findKey(_this.recycleBin, tp[0].key)) {
            _this.recycleBin.push(tp[0]);
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "BGlq":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/sonCustomerForm/sonIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Cgsh":
/*!*************************************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonIndex.vue?vue&type=template&id=4fcdaee2& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_template_id_4fcdaee2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./sonIndex.vue?vue&type=template&id=4fcdaee2& */ "Jp5K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_template_id_4fcdaee2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_template_id_4fcdaee2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "Evfw":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/sonCustomerForm/sonWidgetConfig.vue?vue&type=template&id=6ee3c760& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',[_c('el-form',{attrs:{"label-position":"top"}},[(Object.keys(_vm.data.options).indexOf('width')>=0)?_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{model:{value:(_vm.data.options.width),callback:function ($$v) {_vm.$set(_vm.data.options, "width", $$v)},expression:"data.options.width"}})],1):_vm._e(),_vm._v(" "),(Object.keys(_vm.data.options).indexOf('height')>=0)?_c('el-form-item',{attrs:{"label":"高度"}},[_c('el-input',{model:{value:(_vm.data.options.height),callback:function ($$v) {_vm.$set(_vm.data.options, "height", $$v)},expression:"data.options.height"}})],1):_vm._e(),_vm._v(" "),(Object.keys(_vm.data.options).indexOf('size')>=0)?_c('el-form-item',{attrs:{"label":"大小"}},[_vm._v("\n      宽度：\n      "),_c('el-input',{staticStyle:{"width":"90px"},attrs:{"type":"number"},model:{value:(_vm.data.options.size.width),callback:function ($$v) {_vm.$set(_vm.data.options.size, "width", _vm._n($$v))},expression:"data.options.size.width"}}),_vm._v("\n      高度：\n      "),_c('el-input',{staticStyle:{"width":"90px"},attrs:{"type":"number"},model:{value:(_vm.data.options.size.height),callback:function ($$v) {_vm.$set(_vm.data.options.size, "height", _vm._n($$v))},expression:"data.options.size.height"}})],1):_vm._e(),_vm._v(" "),(Object.keys(_vm.data.options).indexOf('inline')>=0)?_c('el-form-item',{attrs:{"label":"布局方式"}},[_c('el-radio-group',{model:{value:(_vm.data.options.inline),callback:function ($$v) {_vm.$set(_vm.data.options, "inline", $$v)},expression:"data.options.inline"}},[_c('el-radio-button',{attrs:{"label":false}},[_vm._v("块级")]),_vm._v(" "),_c('el-radio-button',{attrs:{"label":true}},[_vm._v("行内")])],1)],1):_vm._e(),_vm._v(" "),(Object.keys(_vm.data.options).indexOf('showInput')>=0)?_c('el-form-item',{attrs:{"label":"显示输入框"}},[_c('el-switch',{model:{value:(_vm.data.options.showInput),callback:function ($$v) {_vm.$set(_vm.data.options, "showInput", $$v)},expression:"data.options.showInput"}})],1):_vm._e(),_vm._v(" "),(Object.keys(_vm.data.options).indexOf('min')>=0)?_c('el-form-item',{attrs:{"label":"最小值"}},[_c('el-input-number',{attrs:{"min":0,"max":100,"step":1},model:{value:(_vm.data.options.min),callback:function ($$v) {_vm.$set(_vm.data.options, "min", $$v)},expression:"data.options.min"}})],1):_vm._e(),_vm._v(" "),(Object.keys(_vm.data.options).indexOf('max')>=0)?_c('el-form-item',{attrs:{"label":"最大值"}},[_c('el-input-number',{attrs:{"min":0,"max":100,"step":1},model:{value:(_vm.data.options.max),callback:function ($$v) {_vm.$set(_vm.data.options, "max", $$v)},expression:"data.options.max"}})],1):_vm._e(),_vm._v(" "),(Object.keys(_vm.data.options).indexOf('step')>=0)?_c('el-form-item',{attrs:{"label":"步长"}},[_c('el-input-number',{attrs:{"min":0,"max":100,"step":1},model:{value:(_vm.data.options.step),callback:function ($$v) {_vm.$set(_vm.data.options, "step", $$v)},expression:"data.options.step"}})],1):_vm._e(),_vm._v(" "),(_vm.data.type=='label')?[_c('el-form-item',{attrs:{"label":"样式class"}},[_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.data.options.class),callback:function ($$v) {_vm.$set(_vm.data.options, "class", $$v)},expression:"data.options.class"}})],1)]:_vm._e(),_vm._v(" "),(_vm.data.type=='blank')?[_c('el-form-item',{attrs:{"label":"绑定数据类型"}},[_c('el-select',{model:{value:(_vm.data.options.defaultType),callback:function ($$v) {_vm.$set(_vm.data.options, "defaultType", $$v)},expression:"data.options.defaultType"}},[_c('el-option',{attrs:{"value":"String","label":"字符"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"Object","label":"对象"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"Array","label":"数组"}})],1)],1)]:_vm._e(),_vm._v(" "),(_vm.data.type == 'grid')?[_c('el-form-item',{attrs:{"label":"栅格间隔"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.data.options.gutter),callback:function ($$v) {_vm.$set(_vm.data.options, "gutter", _vm._n($$v))},expression:"data.options.gutter"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"列配置项"}},[_c('draggable',_vm._b({attrs:{"tag":"ul","list":_vm.data.columns,"handle":".drag-item"}},'draggable',{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'},false),_vm._l((_vm.data.columns),function(item,index){return _c('li',{key:index},[_c('i',{staticClass:"drag-item",staticStyle:{"font-size":"16px","margin":"0 5px","cursor":"move"}},[_c('i',{staticClass:"iconfont icon-icon_bars"})]),_vm._v(" "),_c('el-input',{staticStyle:{"width":"100px"},attrs:{"placeholder":"栅格值","size":"mini","type":"number"},model:{value:(item.span),callback:function ($$v) {_vm.$set(item, "span", _vm._n($$v))},expression:"item.span"}}),_vm._v(" "),_c('el-button',{staticStyle:{"padding":"4px","margin-left":"5px"},attrs:{"circle":"","plain":"","type":"danger","size":"mini","icon":"el-icon-minus"},on:{"click":function($event){return _vm.handleOptionsRemove(index)}}})],1)}),0),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"22px"}},[_c('el-button',{attrs:{"type":"text"},on:{"click":_vm.handleAddColumn}},[_vm._v("添加列")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"水平排列方式"}},[_c('el-select',{model:{value:(_vm.data.options.justify),callback:function ($$v) {_vm.$set(_vm.data.options, "justify", $$v)},expression:"data.options.justify"}},[_c('el-option',{attrs:{"value":"start","label":"左对齐"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"end","label":"右对齐"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"center","label":"居中"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"space-around","label":"两侧间隔相等"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"space-between","label":"两端对齐"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"垂直排列方式"}},[_c('el-select',{model:{value:(_vm.data.options.align),callback:function ($$v) {_vm.$set(_vm.data.options, "align", $$v)},expression:"data.options.align"}},[_c('el-option',{attrs:{"value":"top","label":"顶部对齐"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"middle","label":"居中"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"bottom","label":"底部对齐"}})],1)],1)]:_vm._e(),_vm._v(" "),(_vm.data.type != 'grid'&&_vm.data.type != 'label')?[_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{model:{value:(_vm.data.options.isEdit),callback:function ($$v) {_vm.$set(_vm.data.options, "isEdit", $$v)},expression:"data.options.isEdit"}},[_vm._v("可编辑")])],1)]:_vm._e()],2)],1):_vm._e()}
var staticRenderFns = []



/***/ }),

/***/ "FpnX":
/*!****************************************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonWidgetFormItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetFormItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./sonWidgetFormItem.vue?vue&type=script&lang=js& */ "Al8e");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetFormItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "Hy2l":
/*!****************************************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../../node_modules/css-loader??ref--11-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./sonIndex.vue?vue&type=style&index=0&lang=scss& */ "BGlq");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "J/od":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/sonCustomerForm/sonWidgetFormItem.vue?vue&type=template&id=d746dd7a& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.element && _vm.element.key)?_c('el-form-item',{staticClass:"widget-view ",class:{active: _vm.selectWidget.key == _vm.element.key, 'is_req': _vm.element.options.required},attrs:{"label":_vm.element.name},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.handleSelectWidget(_vm.index)}}},[(_vm.element.type == 'input')?[_c('el-input',{style:({width: _vm.element.options.width}),attrs:{"placeholder":_vm.element.options.placeholder},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'textarea')?[_c('el-input',{style:({width: _vm.element.options.width}),attrs:{"type":"textarea","rows":5,"disabled":_vm.element.options.disabled,"placeholder":_vm.element.options.placeholder},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'number')?[_c('el-input-number',{style:({width: _vm.element.options.width}),attrs:{"disabled":_vm.element.options.disabled,"controls-position":_vm.element.options.controlsPosition},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'radio')?[_c('el-radio-group',{style:({width: _vm.element.options.width}),model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}},_vm._l((_vm.element.options.options),function(item,index){return _c('el-radio',{key:item.value + index,style:({display: _vm.element.options.inline ? 'inline-block' : 'block'}),attrs:{"label":item.value}},[_vm._v("\n        "+_vm._s(item.label)+"\n      ")])}),1)]:_vm._e(),_vm._v(" "),(_vm.element.type == 'checkbox')?[_c('el-checkbox-group',{style:({width: _vm.element.options.width}),model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}},_vm._l((_vm.element.options.options),function(item,index){return _c('el-checkbox',{key:item.value + index,style:({display: _vm.element.options.inline ? 'inline-block' : 'block'}),attrs:{"label":item.value}},[_vm._v("\n        "+_vm._s(item.label)+"\n      ")])}),1)]:_vm._e(),_vm._v(" "),(_vm.element.type == 'time')?[_c('el-time-picker',{style:({width: _vm.element.options.width}),attrs:{"is-range":_vm.element.options.isRange,"placeholder":_vm.element.options.placeholder,"start-placeholder":_vm.element.options.startPlaceholder,"end-placeholder":_vm.element.options.endPlaceholder,"readonly":_vm.element.options.readonly,"disabled":_vm.element.options.disabled,"editable":_vm.element.options.editable,"clearable":_vm.element.options.clearable,"arrow-control":_vm.element.options.arrowControl},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'date')?[_c('el-date-picker',{style:({width: _vm.element.options.width}),attrs:{"type":_vm.element.options.type,"is-range":_vm.element.options.isRange,"placeholder":_vm.element.options.placeholder,"start-placeholder":_vm.element.options.startPlaceholder,"end-placeholder":_vm.element.options.endPlaceholder,"readonly":_vm.element.options.readonly,"disabled":_vm.element.options.disabled,"editable":_vm.element.options.editable,"clearable":_vm.element.options.clearable},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'rate')?[_c('el-rate',{attrs:{"max":_vm.element.options.max,"disabled":_vm.element.options.disabled,"allow-half":_vm.element.options.allowHalf},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'color')?[_c('el-color-picker',{attrs:{"disabled":_vm.element.options.disabled,"show-alpha":_vm.element.options.showAlpha},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'select')?[_c('el-select',{style:({width: _vm.element.options.width}),attrs:{"disabled":_vm.element.options.disabled,"multiple":_vm.element.options.multiple,"clearable":_vm.element.options.clearable,"placeholder":_vm.element.options.placeholder},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}},_vm._l((_vm.element.options.options),function(item){return _c('el-option',{key:item.value,attrs:{"value":item.value,"label":_vm.element.options.showLabel?item.label:item.value}})}),1)]:_vm._e(),_vm._v(" "),(_vm.element.type=='switch')?[_c('el-switch',{attrs:{"disabled":_vm.element.options.disabled},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type=='slider')?[_c('el-slider',{style:({width: _vm.element.options.width}),attrs:{"min":_vm.element.options.min,"max":_vm.element.options.max,"disabled":_vm.element.options.disabled,"step":_vm.element.options.step,"show-input":_vm.element.options.showInput,"range":_vm.element.options.range},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type=='imgupload')?[_c('fm-upload',{attrs:{"length":_vm.element.options.length,"is-file":_vm.element.options.isFile,"file-name":_vm.element.options.fileName,"multiple":_vm.element.options.multiple},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'cascader')?[_c('el-cascader',{style:({width: _vm.element.options.width}),attrs:{"disabled":_vm.element.options.disabled,"clearable":_vm.element.options.clearable,"placeholder":_vm.element.options.placeholder,"options":_vm.element.options.remoteOptions},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'editor')?[_c('Tinymce',{attrs:{"width":_vm.element.options.width,"height":_vm.element.options.height},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'treeSelect')?[_c('treeselect',{attrs:{"options":_vm.element.options.list,"width":_vm.element.options.width,"placeholder":_vm.element.options.placeholder,"multiple":_vm.element.options.multiple,"no-children-text":"无选择"},model:{value:(_vm.element.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.element.options, "defaultValue", $$v)},expression:"element.options.defaultValue"}})]:_vm._e(),_vm._v(" "),(_vm.element.type == 'selectUser')?[_c('select-user',{attrs:{"user-ids":_vm.element.options.defaultValue,"is-multiple":_vm.element.options.multiple},on:{"update:userIds":function($event){return _vm.$set(_vm.element.options, "defaultValue", $event)},"update:user-ids":function($event){return _vm.$set(_vm.element.options, "defaultValue", $event)}}})]:_vm._e(),_vm._v(" "),(_vm.element.type=='blank')?[_c('div',{staticStyle:{"height":"50px","color":"#999","background":"#eee","line-height":"50px","text-align":"center"}},[_vm._v("自定义区域")])]:_vm._e(),_vm._v(" "),(_vm.selectWidget.key == _vm.element.key)?_c('el-button',{staticClass:"widget-action-delete",attrs:{"title":"删除","circle":"","plain":"","type":"danger"},on:{"click":function($event){$event.stopPropagation();return _vm.handleWidgetDelete(_vm.index)}}},[_c('i',{staticClass:"iconfont iconshanchu",staticStyle:{"font-size":"16px"}})]):_vm._e()],2):_vm._e()}
var staticRenderFns = []



/***/ }),

/***/ "Jp5K":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/sonCustomerForm/sonIndex.vue?vue&type=template&id=4fcdaee2& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-container',{staticClass:"fm2-container customFormDiv sonCustomFormDiv"},[_c('el-main',{staticClass:"fm2-main"},[_c('el-container',[_c('el-aside',{staticStyle:{"wdith":"250px"}},[_c('div',{staticClass:"components-list"},[(_vm.recycleBin.length !==0)?[_c('div',{staticClass:"widget-cate"},[_vm._v("回收的组件")]),_vm._v(" "),_c('draggable',_vm._b({attrs:{"tag":"ul","list":_vm.recycleBin,"move":_vm.handleMove},on:{"end":_vm.handleMoveEnd,"start":_vm.handleMoveStart}},'draggable',{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'},false),_vm._l((_vm.recycleBin),function(item,index){return _c('li',{key:index,staticClass:"form-edit-widget-label"},[_c('a',[_c('i',{staticClass:"icon iconfont",class:item.icon}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.name))])])])}),0)]:_vm._e(),_vm._v(" "),[_c('div',{staticClass:"widget-cate"},[_vm._v("布局字段")]),_vm._v(" "),_c('draggable',_vm._b({attrs:{"tag":"ul","list":_vm.layoutComponents,"move":_vm.handleMove},on:{"end":_vm.handleMoveEnd,"start":_vm.handleMoveStart}},'draggable',{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'},false),_vm._l((_vm.layoutComponents),function(item,index){return _c('li',{key:index,staticClass:"form-edit-widget-label data-grid"},[_c('a',[_c('i',{staticClass:"icon iconfont",class:item.icon}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.name))])])])}),0)]],2)]),_vm._v(" "),_c('el-container',{staticClass:"center-container",attrs:{"direction":"vertical"}},[_c('el-header',{staticClass:"btn-bar",staticStyle:{"height":"45px"}},[_vm._t("action"),_vm._v(" "),(_vm.upload)?_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-upload2"},on:{"click":_vm.handleUpload}},[_vm._v("导入JSON\n          ")]):_vm._e(),_vm._v(" "),(_vm.preview)?_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-view"},on:{"click":_vm.handlePreview}},[_vm._v("预览\n          ")]):_vm._e(),_vm._v(" "),(_vm.generateJson)?_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-tickets"},on:{"click":_vm.handleGenerateJson}},[_vm._v("\n            生成JSON\n          ")]):_vm._e()],2),_vm._v(" "),_c('el-main',{class:{'widget-empty': _vm.widgetForm.list.length == 0}},[(!_vm.resetJson)?_c('son-widget-form',{ref:"widgetForm",attrs:{"data":_vm.widgetForm,"recycle-bin":_vm.recycleBin,"select":_vm.widgetFormSelect},on:{"update:select":function($event){_vm.widgetFormSelect=$event}}}):_vm._e()],1)],1),_vm._v(" "),_c('el-aside',{staticClass:"widget-config-container"},[_c('el-container',[_c('el-header',{attrs:{"height":"45px"}},[_c('div',{staticClass:"config-tab",class:{active: _vm.configTab=='widget'},on:{"click":function($event){return _vm.handleConfigSelect('widget')}}},[_vm._v("\n              字段属性\n            ")]),_vm._v(" "),_c('div',{staticClass:"config-tab",class:{active: _vm.configTab=='form'},on:{"click":function($event){return _vm.handleConfigSelect('form')}}},[_vm._v("表单属性\n            ")])]),_vm._v(" "),_c('el-main',{staticClass:"config-content"},[_c('son-widget-config',{directives:[{name:"show",rawName:"v-show",value:(_vm.configTab=='widget'),expression:"configTab=='widget'"}],attrs:{"data":_vm.widgetFormSelect,"list":_vm.widgetForm.list}}),_vm._v(" "),_c('form-config',{directives:[{name:"show",rawName:"v-show",value:(_vm.configTab=='form'),expression:"configTab=='form'"}],attrs:{"data":_vm.widgetForm.config}})],1)],1)],1),_vm._v(" "),_c('cus-dialog',{ref:"widgetPreview",attrs:{"visible":_vm.previewVisible,"width":"1000px","form":""},on:{"on-close":function($event){_vm.previewVisible = false},"on-submit":_vm.handleTest}},[(_vm.previewVisible)?_c('son-generate-form',{ref:"generateForm",attrs:{"insite":"true","data":_vm.widgetForm,"value":_vm.widgetModels,"remote":_vm.remoteFuncs}}):_vm._e()],1),_vm._v(" "),_c('cus-dialog',{ref:"uploadJson",attrs:{"visible":_vm.uploadVisible,"width":"800px","form":""},on:{"on-close":function($event){_vm.uploadVisible = false},"on-submit":_vm.handleUploadJson}},[_c('el-alert',{attrs:{"type":"info","title":"JSON格式如下，直接复制生成的json覆盖此处代码点击确定即可"}}),_vm._v(" "),_c('div',{staticStyle:{"height":"400px","width":"100%"},attrs:{"id":"uploadeditor"}},[_vm._v(_vm._s(_vm.jsonEg))])],1),_vm._v(" "),_c('cus-dialog',{ref:"jsonPreview",attrs:{"visible":_vm.jsonVisible,"width":"800px","form":""},on:{"on-close":function($event){_vm.jsonVisible = false}}},[_c('div',{staticStyle:{"height":"400px","width":"100%"},attrs:{"id":"jsoneditor"}},[_vm._v(_vm._s(_vm.jsonTemplate))]),_vm._v(" "),_c('template',{slot:"action"},[_c('el-button',{attrs:{"id":"copybtn","data-clipboard-target":".ace_text-input"}},[_vm._v("双击复制")])],1)],2),_vm._v(" "),_c('cus-dialog',{ref:"codePreview",attrs:{"visible":_vm.codeVisible,"width":"800px","form":"","action":false},on:{"on-close":function($event){_vm.codeVisible = false}}},[_c('div',{staticStyle:{"height":"500px","width":"100%"},attrs:{"id":"codeeditor"}},[_vm._v(_vm._s(_vm.htmlTemplate))])])],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "MgjN":
/*!*************************************************************************!*\
  !*** ./src/views/customerForm/sonEditForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/happypack/loader.js?id=happyBabel!../../../node_modules/vue-loader/lib??vue-loader-options!./sonEditForm.vue?vue&type=script&lang=js& */ "hWs8");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "S3sh":
/*!********************************************************************************************************!*\
  !*** ./src/views/customerForm/sonEditForm.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!../../../node_modules/css-loader??ref--11-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--11-2!../../../node_modules/sass-loader/lib/loader.js??ref--11-3!../../../node_modules/vue-loader/lib??vue-loader-options!./sonEditForm.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "rD4Y");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_0_node_modules_css_loader_index_js_ref_11_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Snp6":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customerForm/sonEditForm.vue?vue&type=template&id=1adc255e& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container editForm"},[_c('my-card',{attrs:{"title":_vm.title}},[_c('div',{staticClass:"border-gray flex-space-between flex-middle",staticStyle:{"height":"50px"}},[_c('el-form',{ref:"formRef",staticClass:"flex flex-middle",attrs:{"rules":_vm.rules,"model":_vm.customerForm,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"流程节点","prop":"process"}},[_c('el-select',{attrs:{"clearable":false,"placeholder":"请选择流程节点"},on:{"change":_vm.changeProcessNode},model:{value:(_vm.customerForm.nodeId),callback:function ($$v) {_vm.$set(_vm.customerForm, "nodeId", $$v)},expression:"customerForm.nodeId"}},_vm._l((_vm.processNodeList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)],1),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"save-btn",attrs:{"type":"primary"},on:{"click":_vm.cancelFun}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"save-btn",attrs:{"type":"primary"},on:{"click":_vm.save}},[_vm._v("保存")])],1)],1),_vm._v(" "),_c('son-customer-form',{ref:"makingForm",attrs:{"upload":"","preview":"","generate-code":"","generate-json":""}},[_c('template',{slot:"action"})],2)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "TDdN":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/sonCustomerForm/sonWidgetConfig.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "GQeE");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "MQ60");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    data: {
      type: Object,
      default: function _default() {}
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      validator: {
        type: null,
        required: null,
        pattern: null,
        range: null,
        length: null
      }
    };
  },

  computed: {
    show: function show() {
      if (this.data && babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.data).length > 0) {
        return true;
      }
      return false;
    }
  },
  watch: {
    'data.options.isRange': function dataOptionsIsRange(val) {
      if (typeof val !== 'undefined') {
        if (val) {
          this.data.options.defaultValue = null;
        } else {
          if (babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.data.options).indexOf('defaultValue') >= 0) {
            this.data.options.defaultValue = '';
          }
        }
      }
    },
    'data.options.required': function dataOptionsRequired(val) {
      var _this = this;

      if (val) {
        if (this.data.type === 'imgupload') {
          this.validator.required = { required: true, message: this.data.name + '\u5FC5\u987B\u4E0A\u4F20' };
        } else {
          this.validator.required = { required: true, message: this.data.name + '\u5FC5\u987B\u586B\u5199' };
        }
      } else {
        this.validator.required = null;
      }

      this.$nextTick(function () {
        _this.generateRule();
      });
    },
    'data.options.dataType': function dataOptionsDataType(val) {
      if (!this.show) {
        return false;
      }

      if (val) {
        this.validator.type = { type: val, message: this.data.name + '格式不正确' };
      } else {
        this.validator.type = null;
      }

      this.generateRule();
    },
    'data.options.pattern': function dataOptionsPattern(val) {
      if (!this.show) {
        return false;
      }

      if (val) {
        this.validator.pattern = { pattern: val, message: this.data.name + '格式不匹配' };
      } else {
        this.validator.pattern = null;
      }

      this.generateRule();
    }
  },
  methods: {
    handleOptionsRemove: function handleOptionsRemove(index) {
      if (this.data.type === 'grid') {
        this.data.columns.splice(index, 1);
      } else {
        this.data.options.options.splice(index, 1);
      }
    },
    handleAddOption: function handleAddOption() {
      if (this.data.options.showLabel) {
        this.data.options.options.push({
          value: '新选项',
          label: '新选项'
        });
      } else {
        this.data.options.options.push({
          value: '新选项'
        });
      }
    },
    handleAddColumn: function handleAddColumn() {
      this.data.columns.push({
        span: '',
        list: []
      });
    },
    generateRule: function generateRule() {
      var _this2 = this;

      this.data.rules = [];
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.validator).forEach(function (key) {
        if (_this2.validator[key]) {
          _this2.data.rules.push(_this2.validator[key]);
        }
      });
    },
    handleSelectMuliple: function handleSelectMuliple(value) {
      if (value) {
        if (this.data.options.defaultValue) {
          this.data.options.defaultValue = [this.data.options.defaultValue];
        } else {
          this.data.options.defaultValue = [];
        }
      } else {
        if (this.data.options.defaultValue.length > 0) {
          this.data.options.defaultValue = this.data.options.defaultValue[0];
        } else {
          this.data.options.defaultValue = '';
        }
      }
    }
  }
});

/***/ }),

/***/ "UX2+":
/*!************************************************!*\
  !*** ./src/views/customerForm/sonEditForm.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sonEditForm_vue_vue_type_template_id_1adc255e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sonEditForm.vue?vue&type=template&id=1adc255e& */ "r8Ap");
/* harmony import */ var _sonEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sonEditForm.vue?vue&type=script&lang=js& */ "MgjN");
/* empty/unused harmony star reexport *//* harmony import */ var _sonEditForm_vue_vue_type_style_index_0_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sonEditForm.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& */ "S3sh");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sonEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sonEditForm_vue_vue_type_template_id_1adc255e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sonEditForm_vue_vue_type_template_id_1adc255e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "sonEditForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Xiid":
/*!***************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonWidgetFormItem.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sonWidgetFormItem_vue_vue_type_template_id_d746dd7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sonWidgetFormItem.vue?vue&type=template&id=d746dd7a& */ "3XYF");
/* harmony import */ var _sonWidgetFormItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sonWidgetFormItem.vue?vue&type=script&lang=js& */ "FpnX");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sonWidgetFormItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sonWidgetFormItem_vue_vue_type_template_id_d746dd7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sonWidgetFormItem_vue_vue_type_template_id_d746dd7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "sonWidgetFormItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ZZc0":
/*!**************************************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonWidgetConfig.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetConfig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./sonWidgetConfig.vue?vue&type=script&lang=js& */ "TDdN");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetConfig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "b+8a":
/*!******************************************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonWidgetForm.vue?vue&type=template&id=cf799b14& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetForm_vue_vue_type_template_id_cf799b14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./sonWidgetForm.vue?vue&type=template&id=cf799b14& */ "tANG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetForm_vue_vue_type_template_id_cf799b14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetForm_vue_vue_type_template_id_cf799b14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "bIWR":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/sonCustomerForm/sonIndex.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "gDS+");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "MQ60");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sonWidgetConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sonWidgetConfig */ "69fx");
/* harmony import */ var _FormConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormConfig */ "9fqm");
/* harmony import */ var _sonWidgetForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sonWidgetForm */ "07xw");
/* harmony import */ var _CusDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CusDialog */ "a7Fm");
/* harmony import */ var _sonGenerateForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sonGenerateForm */ "do4G");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clipboard */ "Ddwv");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _componentsConfig_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentsConfig.js */ "mH49");
/* harmony import */ var _generateCode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generateCode.js */ "qaDS");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ace-builds */ "bU/s");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_10__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SonCustomerForm',
  components: {
    Draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a,
    sonWidgetConfig: _sonWidgetConfig__WEBPACK_IMPORTED_MODULE_2__["default"],
    FormConfig: _FormConfig__WEBPACK_IMPORTED_MODULE_3__["default"],
    sonWidgetForm: _sonWidgetForm__WEBPACK_IMPORTED_MODULE_4__["default"],
    CusDialog: _CusDialog__WEBPACK_IMPORTED_MODULE_5__["default"],
    sonGenerateForm: _sonGenerateForm__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    preview: {
      type: Boolean,
      default: false
    },
    generateCode: {
      type: Boolean,
      default: false
    },
    generateJson: {
      type: Boolean,
      default: false
    },
    upload: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      basicComponents: _componentsConfig_js__WEBPACK_IMPORTED_MODULE_8__["basicComponents"],
      layoutComponents: _componentsConfig_js__WEBPACK_IMPORTED_MODULE_8__["layoutComponents"],
      resetJson: false,
      widgetForm: {
        list: [],
        config: {
          labelWidth: 100,
          labelPosition: 'top',
          size: 'small'
        }
      },
      recycleBin: [],
      originalCounter: 0,
      originalwidgetForm: {
        list: [],
        config: {
          labelWidth: 100,
          labelPosition: 'top',
          size: 'small'
        }
      },
      // leftBasicComponents: [], // 左边的基本组件列表
      configTab: 'widget',
      widgetFormSelect: null,
      previewVisible: false,
      jsonVisible: false,
      codeVisible: false,
      uploadVisible: false,
      remoteFuncs: {},
      widgetModels: {},
      blank: '',
      htmlTemplate: '',
      jsonTemplate: '',
      uploadEditor: null,
      jsonEg: '{\n  "list": [\n    {\n      "type": "input",\n      "name": "\u5355\u884C\u6587\u672C",\n      "icon": "icon-input",\n      "options": {\n        "width": "100%",\n        "defaultValue": "",\n        "required": false,\n        "dataType": "string",\n        "pattern": "",\n        "placeholder": "",\n        "remoteFunc": "func_1540908864000_94322"\n      },\n      "key": "1540908864000_94322",\n      "model": "input_1540908864000_94322",\n      "rules": [\n        {\n          "type": "string",\n          "message": "\u5355\u884C\u6587\u672C\u683C\u5F0F\u4E0D\u6B63\u786E"\n        }\n      ]\n    },\n    {\n      "type": "textarea",\n      "name": "\u591A\u884C\u6587\u672C",\n      "icon": "icon-diy-com-textarea",\n      "options": {\n        "width": "100%",\n        "defaultValue": "",\n        "required": false,\n        "pattern": "",\n        "placeholder": "",\n        "remoteFunc": "func_1540908876000_19435"\n      },\n      "key": "1540908876000_19435",\n      "model": "textarea_1540908876000_19435",\n      "rules": []\n    }\n  ],\n  "config": {\n    "labelWidth": 100,\n    "labelPosition": "top",\n    "size": "small"\n  }\n}'
    };
  },

  watch: {
    widgetForm: {
      deep: true,
      handler: function handler(val) {
        if (this.originalCounter === 0) {
          // 多层引用类型  避免引用的传递
          var objStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(val);
          this.originalwidgetForm = JSON.parse(objStr);
        }
        this.originalCounter++;
      }
    }
  },
  mounted: function mounted() {
    document.getElementsByClassName('fm2-container')[0].style.minHeight = document.getElementById('app').clientHeight - 340 + 'px';
  },

  methods: {
    handleConfigSelect: function handleConfigSelect(value) {
      this.configTab = value;
    },
    handleMoveEnd: function handleMoveEnd(evt) {
      console.log('end', evt);
    },
    handleMoveStart: function handleMoveStart(_ref) {
      var oldIndex = _ref.oldIndex;

      console.log('start', oldIndex, this.basicComponents);
    },
    handleMove: function handleMove() {
      return true;
    },
    handlePreview: function handlePreview() {
      console.log('widgetForm===' + this.widgetForm);
      this.previewVisible = true;
    },
    handleTest: function handleTest() {
      var _this = this;

      this.$refs.generateForm.getData().then(function (data) {
        _this.$alert(data, '').catch(function (e) {});
        _this.$refs.widgetPreview.end();
      }).catch(function (e) {
        _this.$refs.widgetPreview.end();
      });
    },
    handleGenerateJson: function handleGenerateJson() {
      this.jsonVisible = true;
      var temp = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.widgetForm);
      temp = JSON.parse(temp);
      temp.list.forEach(function (item) {
        if (item.options.options) {
          item.options.options = [];
        }
        if (item.options.remoteOptions) {
          item.options.remoteOptions = [];
        }
        if (item.options.list) {
          item.options.list = [];
        }
      });
      this.jsonTemplate = temp;
      // console.log(JSON.stringify(this.widgetForm))
      this.$nextTick(function () {
        var editor = ace_builds__WEBPACK_IMPORTED_MODULE_10___default.a.edit('jsoneditor');
        editor.session.setMode('ace/mode/json');
        new clipboard__WEBPACK_IMPORTED_MODULE_7___default.a('#copybtn');
      });
    },
    handleGenerateCode: function handleGenerateCode() {
      this.codeVisible = true;
      this.htmlTemplate = Object(_generateCode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.widgetForm));
      this.$nextTick(function () {
        var editor = ace_builds__WEBPACK_IMPORTED_MODULE_10___default.a.edit('codeeditor');
        editor.session.setMode('ace/mode/html');
      });
    },
    handleUpload: function handleUpload() {
      var _this2 = this;

      this.uploadVisible = true;
      this.$nextTick(function () {
        _this2.uploadEditor = ace_builds__WEBPACK_IMPORTED_MODULE_10___default.a.edit('uploadeditor');
        _this2.uploadEditor.session.setMode('ace/mode/json');
      });
    },
    handleUploadJson: function handleUploadJson() {
      try {
        this.setJSON(JSON.parse(this.uploadEditor.getValue()));
        this.uploadVisible = false;
      } catch (e) {
        this.$message.error(e.message);
        this.$refs.uploadJson.end();
      }
    },
    getJSON: function getJSON() {
      var temp = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.widgetForm);
      temp = JSON.parse(temp);
      temp.list.forEach(function (item) {
        if (item.options.options) {
          item.options.options = [];
        }
        if (item.options.remoteOptions) {
          item.options.remoteOptions = [];
        }
        if (item.options.list) {
          item.options.list = [];
        }
      });
      return temp;
    },
    getHtml: function getHtml() {
      return Object(_generateCode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.widgetForm));
    },
    setJSON: function setJSON(json) {
      this.widgetForm = json;

      if (json.list.length > 0) {
        this.widgetFormSelect = json.list[0];
      }
    },
    handleInput: function handleInput(val) {
      console.log(val);
      this.blank = val;
    }
  }
});

/***/ }),

/***/ "gRBi":
/*!*******************************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonIndex.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../node_modules/vue-loader/lib??vue-loader-options!./sonIndex.vue?vue&type=script&lang=js& */ "bIWR");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_sonIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "hWs8":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customerForm/sonEditForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "gDS+");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_customerForm_sonCustomerForm_sonIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/customerForm/sonCustomerForm/sonIndex */ "sv+w");
/* harmony import */ var _components_MyCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MyCard */ "zY4l");
/* harmony import */ var _api_flowchart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/flowchart */ "9IqD");
/* harmony import */ var _api_formTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/formTemplate */ "kC2G");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "L2JU");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SonEditForm',
  components: {
    SonCustomerForm: _components_customerForm_sonCustomerForm_sonIndex__WEBPACK_IMPORTED_MODULE_2__["default"], MyCard: _components_MyCard__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      title: '子表单配置',
      rules: {
        name: [{ required: true, message: '请填写表单名称' }],
        processTemplateId: [{ required: false, message: '请填写流程名称' }],
        formType: [{ required: true, message: '请选择表单类型' }]
      },
      customerForm: {
        formTemplateId: '',
        nodeId: '',
        template: '',
        id: ''
      },
      processNodeList: [],
      customerFormInfo: {}
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])(['dictMap'])),
  created: function created() {
    this.initFun();
  },
  mounted: function mounted() {},

  methods: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapActions"])(['delVisitedViews']), {
    initFun: function initFun() {
      this.customerFormInfo = JSON.parse(this.$storage.getStorage('custormerFormInfo'));
      if (this.customerFormInfo && !this.customerFormInfo.isNew) {
        this.getTaskNodeList(this.customerFormInfo.processTemplateId);
      }
    },

    // 对于回收箱的处理
    dealRecycleBin: function dealRecycleBin(template, originalTemplate) {
      var recycleBin = JSON.parse(originalTemplate).list.filter(function (item) {
        var some = JSON.parse(template).list.some(function (inner) {
          return inner.key === item.key;
        });
        return !some;
      });
      this.$refs['makingForm'].recycleBin = recycleBin;
    },
    getInfo: function getInfo(nodeId) {
      var _this = this;

      Object(_api_formTemplate__WEBPACK_IMPORTED_MODULE_5__["getFormTemplateChildren"])({ formTemplateId: this.customerFormInfo.id, nodeId: nodeId }).then(function (res) {
        if (res.success) {
          _this.customerForm.formTemplateId = _this.customerFormInfo.id;
          var template = _this.customerFormInfo.template;
          if (res.result) {
            _this.customerForm.id = res.result.id;
            template = res.result.template;
          }
          _this.dealRecycleBin(template, _this.customerFormInfo.template);
          _this.$refs['makingForm'].setJSON(JSON.parse(template));
        }
      });
    },
    getTaskNodeList: function getTaskNodeList(processTemplateId) {
      var _this2 = this;

      Object(_api_flowchart__WEBPACK_IMPORTED_MODULE_4__["getTaskNodeList"])({ processTemplateId: processTemplateId }).then(function (res) {
        if (res.success) {
          _this2.processNodeList = res.result.filter(function (item) {
            return ['userTask', 'serviceTask'].includes(item.type);
          });
          // 默认选择第一个
          if (_this2.processNodeList && _this2.processNodeList.length !== 0) {
            _this2.customerForm.nodeId = _this2.processNodeList[0].id;
            _this2.getInfo(_this2.customerForm.nodeId);
          }
        }
      });
    },
    save: function save() {
      var _this3 = this;

      this.customerForm.template = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.$refs['makingForm'].getJSON());
      this.$refs['formRef'].validate(function (valid) {
        if (valid) {
          Object(_api_formTemplate__WEBPACK_IMPORTED_MODULE_5__["save"])(_this3.customerForm).then(function (res) {
            if (res.success) {
              _this3.dealSkip();
            }
          });
        }
      });
    },

    // 跳转页面处理
    dealSkip: function dealSkip() {
      var _this4 = this;

      this.$confirm('保存成功，是否继续编辑子表单', '提示', {
        confirmButtonText: '继续编辑',
        cancelButtonText: '返回母表单列表',
        type: 'success'
      }).then(function () {}).catch(function () {
        _this4.delVisitedViews({ path: 'customerFormEditPage' });
        _this4.$router.push('customerFormIndex');
      });
    },
    changeProcessNode: function changeProcessNode(val) {
      this.getInfo(val);
    },
    cancelFun: function cancelFun() {
      this.delVisitedViews({ path: 'customerFormEditPage' });
      this.$router.push('customerFormIndex');
    }
  })
});

/***/ }),

/***/ "nuzp":
/*!********************************************************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonWidgetConfig.vue?vue&type=template&id=6ee3c760& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetConfig_vue_vue_type_template_id_6ee3c760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./sonWidgetConfig.vue?vue&type=template&id=6ee3c760& */ "Evfw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetConfig_vue_vue_type_template_id_6ee3c760___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonWidgetConfig_vue_vue_type_template_id_6ee3c760___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "r8Ap":
/*!*******************************************************************************!*\
  !*** ./src/views/customerForm/sonEditForm.vue?vue&type=template&id=1adc255e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_template_id_1adc255e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./sonEditForm.vue?vue&type=template&id=1adc255e& */ "Snp6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_template_id_1adc255e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sonEditForm_vue_vue_type_template_id_1adc255e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "rD4Y":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-0!./node_modules/css-loader??ref--11-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/vue-loader/lib??vue-loader-options!./src/views/customerForm/sonEditForm.vue?vue&type=style&index=0&rel=stylesheet%2Fscss&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "sv+w":
/*!******************************************************************!*\
  !*** ./src/components/customerForm/sonCustomerForm/sonIndex.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sonIndex_vue_vue_type_template_id_4fcdaee2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sonIndex.vue?vue&type=template&id=4fcdaee2& */ "Cgsh");
/* harmony import */ var _sonIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sonIndex.vue?vue&type=script&lang=js& */ "gRBi");
/* empty/unused harmony star reexport *//* harmony import */ var _sonIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sonIndex.vue?vue&type=style&index=0&lang=scss& */ "Hy2l");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sonIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sonIndex_vue_vue_type_template_id_4fcdaee2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sonIndex_vue_vue_type_template_id_4fcdaee2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "sonIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "tANG":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customerForm/sonCustomerForm/sonWidgetForm.vue?vue&type=template&id=cf799b14& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget-form-container"},[_c('el-form',{attrs:{"size":_vm.data.config.size,"label-position":_vm.data.config.labelPosition,"label-width":_vm.data.config.labelWidth + 'px'}},[_c('draggable',_vm._b({staticClass:"widget-form-list",on:{"end":_vm.handleMoveEnd,"add":_vm.handleWidgetAdd},model:{value:(_vm.data.list),callback:function ($$v) {_vm.$set(_vm.data, "list", $$v)},expression:"data.list"}},'draggable',{group:'people', ghostClass: 'ghost'},false),[_vm._l((_vm.data.list),function(element,index){return [(element.type == 'grid')?[(element && element.key)?_c('div',{key:element.key,staticClass:"widget-grid-container data-grid",staticStyle:{"position":"relative"}},[_c('el-row',{staticClass:"widget-grid ",class:{active: _vm.selectWidget.key == element.key},attrs:{"type":"flex","gutter":element.options.gutter ? element.options.gutter : 0,"justify":element.options.justify,"align":element.options.align},nativeOn:{"click":function($event){return _vm.handleSelectWidget(index)}}},_vm._l((element.columns),function(col,colIndex){return _c('el-col',{key:colIndex,attrs:{"span":col.span ? col.span : 0}},[_c('div',{staticStyle:{"border":"1px dashed #999"}},[_c('draggable',_vm._b({staticClass:"widget-form-list",staticStyle:{"padding-bottom":"50px"},attrs:{"filter":"widget-grid-container"},on:{"end":_vm.handleMoveEnd,"add":function($event){return _vm.handleWidgetColAdd($event, element, colIndex)}},model:{value:(col.list),callback:function ($$v) {_vm.$set(col, "list", $$v)},expression:"col.list"}},'draggable',{group:'people', ghostClass: 'ghost'},false),_vm._l((col.list),function(el,i){return (el.key)?_c('son-widget-form-item',{key:el.key,attrs:{"element":el,"select":_vm.selectWidget,"index":i,"recycle-bin":_vm.recycleBin,"data":col},on:{"update:select":function($event){_vm.selectWidget=$event}}}):_vm._e()}),1)],1)])}),1),_vm._v(" "),(_vm.selectWidget.key == element.key)?_c('el-button',{staticClass:"widget-action-delete",staticStyle:{"bottom":"-20px"},attrs:{"title":"删除","circle":"","plain":"","type":"danger"},on:{"click":function($event){$event.stopPropagation();return _vm.handleWidgetDelete(index)}}},[_c('i',{staticClass:"iconfont iconshanchu"})]):_vm._e()],1):_vm._e()]:(element.type == 'label')?[(element.key)?_c('div',{key:element.key,staticClass:"widget-grid-container data-grid",staticStyle:{"position":"relative"},on:{"click":function($event){return _vm.handleSelectWidget(index)}}},[_c('label',{staticClass:"widget-grid",class:{active: _vm.selectWidget.key == element.key},staticStyle:{"display":"block"}},[_vm._v(" "+_vm._s(element.name))]),_vm._v(" "),(_vm.selectWidget.key == element.key)?_c('el-button',{staticClass:"widget-action-delete",staticStyle:{"bottom":"-20px"},attrs:{"title":"删除","circle":"","plain":"","type":"danger"},on:{"click":function($event){$event.stopPropagation();return _vm.handleWidgetDelete(index)}}},[_c('i',{staticClass:"iconfont iconshanchu"})]):_vm._e()],1):_vm._e()]:[(element && element.key)?_c('son-widget-form-item',{key:element.key,attrs:{"element":element,"select":_vm.selectWidget,"index":index,"recycle-bin":_vm.recycleBin,"data":_vm.data},on:{"update:select":function($event){_vm.selectWidget=$event}}}):_vm._e()]]})],2)],1)],1)}
var staticRenderFns = []



/***/ })

}]);