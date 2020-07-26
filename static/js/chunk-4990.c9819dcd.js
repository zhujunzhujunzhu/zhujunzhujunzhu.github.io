(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-4990"],{

/***/ "5AUW":
/*!********************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/bodyTemperature/site.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_site_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./site.vue?vue&type=script&lang=js& */ "8MFB");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_site_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "8MFB":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/epidemic/bodyTemperature/site.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "GQeE");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_epidemic_epDailyReport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/epidemic/epDailyReport.js */ "wA5v");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "L2JU");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * 工地信息
 * @module  Site
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    info: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isEdit: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      bidOptions: [],
      rules: {
        tendersId: {
          required: true,
          message: '请输入标段',
          trigger: 'blur'
        },
        noResumptionWork: [{ required: true, message: '请输入未复工工地', trigger: 'blur' }],
        newResumptionWork: [{ required: true, message: '请输入新开工工地', trigger: 'blur' }],
        alreadyResumptionWork: [{ required: true, message: '请输入已复工工地', trigger: 'blur' }]
      }
    };
  },

  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(['epidemicReportInfo'])),
  mounted: function mounted() {
    this.getBidOptions();
  },

  methods: {
    /**
     * 获取当前用户所属标段
     * @function getBidOptions
     */
    getBidOptions: function getBidOptions() {
      var _this = this;

      Object(_api_epidemic_epDailyReport_js__WEBPACK_IMPORTED_MODULE_4__["queryUserTenders"])({}).then(function () {
        var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
          var back, noSaveBid;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!res.success) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 3;
                  return Object(_api_epidemic_epDailyReport_js__WEBPACK_IMPORTED_MODULE_4__["queryAlreadyReportData"])({});

                case 3:
                  back = _context.sent;

                  if (!(_this.epidemicReportInfo.viewStatus !== 'ADD')) {
                    _context.next = 7;
                    break;
                  }

                  // 当不为新增状态的处理  不需要修改tendersId
                  _this.bidOptions = res.result;
                  return _context.abrupt('return');

                case 7:
                  // 处理没有保存的标段
                  noSaveBid = [];

                  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(back.result).forEach(function (key) {
                    if (back.result[key] === false) {
                      noSaveBid.push(key);
                    }
                  });
                  _this.bidOptions = res.result.filter(function (bid) {
                    if (noSaveBid.includes(bid.name)) {
                      return true;
                    } else {
                      return false;
                    }
                  });
                  // 如果不为空 默认第一个
                  if (_this.bidOptions.length > 0) {
                    _this.info.tendersId = _this.bidOptions[0].id;
                  } else {
                    _this.info.tendersId = null;
                  }

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },

    /**
     * 表单验证
     * @function validForm
     */
    validForm: function validForm() {
      return this.$refs.siteForm.validate();
    },
    validate: function validate(fn) {
      this.$refs.siteForm.validate(fn);
    },

    /**
     * 更改标段时触发函数
     * @function changeTenders
     * @params  val  {ElSelectParams} 下拉框参数
     */
    changeTenders: function changeTenders(val) {
      this.$emit('changeTenders', val);
    }
  }
});

/***/ }),

/***/ "D6j1":
/*!**************************************************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/bodyTemperature/site.vue?vue&type=template&id=7e78c142& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_site_vue_vue_type_template_id_7e78c142___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./site.vue?vue&type=template&id=7e78c142& */ "qEN7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_site_vue_vue_type_template_id_7e78c142___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_site_vue_vue_type_template_id_7e78c142___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "ZwFX":
/*!*******************************************************************************!*\
  !*** ./src/views/project/projectScheduling/epidemic/bodyTemperature/site.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_vue_vue_type_template_id_7e78c142___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site.vue?vue&type=template&id=7e78c142& */ "D6j1");
/* harmony import */ var _site_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site.vue?vue&type=script&lang=js& */ "5AUW");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _site_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _site_vue_vue_type_template_id_7e78c142___WEBPACK_IMPORTED_MODULE_0__["render"],
  _site_vue_vue_type_template_id_7e78c142___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "site.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "qEN7":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/projectScheduling/epidemic/bodyTemperature/site.vue?vue&type=template&id=7e78c142& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form',{ref:"siteForm",attrs:{"model":_vm.info,"rules":_vm.rules,"label-position":"center","size":"small","label-width":"100px"}},[_c('el-row',[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"标段"}},[(_vm.isEdit)?_c('el-select',{attrs:{"placeholder":"标段","disabled":!_vm.isEdit},on:{"change":_vm.changeTenders},model:{value:(_vm.info.tendersId),callback:function ($$v) {_vm.$set(_vm.info, "tendersId", $$v)},expression:"info.tendersId"}},_vm._l((_vm.bidOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1):_c('el-select',{attrs:{"placeholder":"标段","disabled":true},model:{value:(_vm.info.tendersName),callback:function ($$v) {_vm.$set(_vm.info, "tendersName", $$v)},expression:"info.tendersName"}},_vm._l((_vm.bidOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"单位名称","prop":"orgName"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"text","disabled":"","placeholder":"单位名称"},model:{value:(_vm.info.orgName),callback:function ($$v) {_vm.$set(_vm.info, "orgName", $$v)},expression:"info.orgName"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"未复工工地","prop":"noResumptionWork"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"number","min":0,"disabled":!_vm.isEdit,"placeholder":"未复工工地"},model:{value:(_vm.info.noResumptionWork),callback:function ($$v) {_vm.$set(_vm.info, "noResumptionWork", $$v)},expression:"info.noResumptionWork"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"新开工工地","prop":"newResumptionWork"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"number","min":0,"disabled":!_vm.isEdit,"placeholder":"新开工工地"},model:{value:(_vm.info.newResumptionWork),callback:function ($$v) {_vm.$set(_vm.info, "newResumptionWork", $$v)},expression:"info.newResumptionWork"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"已复工工地","prop":"alreadyResumptionWork"}},[_c('el-input',{staticClass:"filter-item",attrs:{"type":"number","min":0,"disabled":!_vm.isEdit,"placeholder":"已复工工地"},model:{value:(_vm.info.alreadyResumptionWork),callback:function ($$v) {_vm.$set(_vm.info, "alreadyResumptionWork", $$v)},expression:"info.alreadyResumptionWork"}})],1)],1)],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "wA5v":
/*!*******************************************!*\
  !*** ./src/api/epidemic/epDailyReport.js ***!
  \*******************************************/
/*! exports provided: save, get, list, deleteFun, getSysOrg, constructionSiteStatistics, epidemicWorkTotal, personStatistics, deployReports, queryUserTenders, queryAlreadyReportData, epidemicPersonTotal, epidemicPersonOverview, materialReportExport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFun", function() { return deleteFun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSysOrg", function() { return getSysOrg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructionSiteStatistics", function() { return constructionSiteStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epidemicWorkTotal", function() { return epidemicWorkTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personStatistics", function() { return personStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployReports", function() { return deployReports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryUserTenders", function() { return queryUserTenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAlreadyReportData", function() { return queryAlreadyReportData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epidemicPersonTotal", function() { return epidemicPersonTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epidemicPersonOverview", function() { return epidemicPersonOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialReportExport", function() { return materialReportExport; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function save(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/save',
    method: 'post',
    data: param
  });
}

function get(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/get',
    method: 'post',
    data: param
  });
}

function list(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/list',
    method: 'post',
    data: param
  });
}

function deleteFun(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/delete',
    method: 'post',
    data: param
  });
}

function getSysOrg(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/getSysOrg',
    method: 'post',
    data: param
  });
}

// 工地信息统计
function constructionSiteStatistics(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/constructionSiteStatistics',
    method: 'post',
    data: param
  });
}

// 疫情工作统计
function epidemicWorkTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/epidemicWorkTotal',
    method: 'post',
    data: param
  });
}

// 人员信息统计
function personStatistics(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/personStatistics',
    method: 'post',
    data: param
  });
}

// 修改填报状态
function deployReports(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/deployReports',
    method: 'post',
    data: param
  });
}

// 查到当前用户真正所属的标段
function queryUserTenders(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/queryUserTenders',
    method: 'post',
    data: param
  });
}

// 查询当前用户组织的填报情况
function queryAlreadyReportData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/queryAlreadyReportData',
    method: 'post',
    data: param
  });
}

// 疫情人员统计
function epidemicPersonTotal(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/epidemicPersonTotal',
    method: 'post',
    data: param
  });
}

// 疫情人员统计总览
function epidemicPersonOverview(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/epidemicPersonOverview',
    method: 'post',
    data: param
  });
}
// 疫情导出
function materialReportExport(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/epDailyReport/materialReportExport',
    method: 'post',
    data: param
  });
}

/***/ })

}]);