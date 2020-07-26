(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-0676"],{

/***/ "IcsQ":
/*!****************************************************!*\
  !*** ./src/api/project/qaManage/helpCenterEdit.js ***!
  \****************************************************/
/*! exports provided: getHelpCenterCatalogList, getHelpCenterTreeData, saveHelpCenterCatalog, deleteHelpCenterCatalog, updateToUp, updateToDown, updateToUpLevel, updateToDownLevel, getPerson, getPersonList, getTechnicistInfoSave, simpleTransientSave, dataPreView, releaseSaveData, getTechnicistInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelpCenterCatalogList", function() { return getHelpCenterCatalogList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelpCenterTreeData", function() { return getHelpCenterTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveHelpCenterCatalog", function() { return saveHelpCenterCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHelpCenterCatalog", function() { return deleteHelpCenterCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUp", function() { return updateToUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDown", function() { return updateToDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToUpLevel", function() { return updateToUpLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDownLevel", function() { return updateToDownLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerson", function() { return getPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonList", function() { return getPersonList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTechnicistInfoSave", function() { return getTechnicistInfoSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleTransientSave", function() { return simpleTransientSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataPreView", function() { return dataPreView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseSaveData", function() { return releaseSaveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTechnicistInfo", function() { return getTechnicistInfo; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");

function getHelpCenterCatalogList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/helpCenter/list',
    method: 'post',
    data: param
  });
}

function getHelpCenterTreeData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/helpCenter/treeData',
    method: 'post',
    data: param
  });
}

function saveHelpCenterCatalog(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/helpCenter/save',
    method: 'post',
    data: param
  });
}
function deleteHelpCenterCatalog(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/helpCenter/delete',
    method: 'post',
    data: param
  });
}

// 上移 下移 升级 降级
function updateToUp(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/helpCenter/updateToUp',
    method: 'post',
    data: param
  });
}

function updateToDown(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/helpCenter/updateToDown',
    method: 'post',
    data: param
  });
}

function updateToUpLevel(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/helpCenter/updateToUpLevel',
    method: 'post',
    data: param
  });
}

function updateToDownLevel(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/helpCenter/updateToDownLevel',
    method: 'post',
    data: param
  });
}
function getPerson(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/technicistInfo/get',
    method: 'post',
    data: param
  });
}

function getPersonList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/rest/technicistInfo/list',
    method: 'post',
    data: param
  });
}

function getTechnicistInfoSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/helpCenter/technicistInfoSave',
    method: 'post',
    data: param
  });
}
// 单条数据暂存功能
function simpleTransientSave(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/helpCenter/simpleTransientSave',
    method: 'post',
    data: param
  });
}

//  数据预览功能不需要参数
function dataPreView(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/helpCenter/dataPreView',
    method: 'post',
    data: param
  });
}

//  发布 不需要参数
function releaseSaveData(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/helpCenter/releaseSaveData',
    method: 'post',
    data: param
  });
}

function getTechnicistInfo(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/technicistInfo/get',
    method: 'post',
    data: param
  });
}

/***/ }),

/***/ "TZCk":
/*!******************************************************************!*\
  !*** ./src/views/project/qaManage/helpCenter/helpCenterEdit.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpCenterEdit_vue_vue_type_template_id_e790361e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpCenterEdit.vue?vue&type=template&id=e790361e&scoped=true& */ "ncYP");
/* harmony import */ var _helpCenterEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpCenterEdit.vue?vue&type=script&lang=js& */ "hfhP");
/* empty/unused harmony star reexport *//* harmony import */ var _helpCenterEdit_vue_vue_type_style_index_0_id_e790361e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpCenterEdit.vue?vue&type=style&index=0&id=e790361e&scoped=true&lang=css& */ "gHiZ");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _helpCenterEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _helpCenterEdit_vue_vue_type_template_id_e790361e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _helpCenterEdit_vue_vue_type_template_id_e790361e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e790361e",
  null
  
)

component.options.__file = "helpCenterEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "dWn5":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=happyBabel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qaManage/helpCenter/helpCenterEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyCard_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MyCard/index */ "zY4l");
/* harmony import */ var _components_TreeTable_indexnew__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TreeTable/indexnew */ "f47l");
/* harmony import */ var _api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/project/qaManage/helpCenterEdit */ "IcsQ");
/* harmony import */ var _components_table_tableList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/table/tableList */ "dARg");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// import TreeTable from '@/components/TreeTable/index'
// eslint-disable-next-line no-redeclare

// import TendersSelect from '../technicalManage/components/tendersSelect'


// import TendersSelect from '../../../../components/BidSelect/tendersSelect'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HelpCenterEdit',
  components: { TableList: _components_table_tableList__WEBPACK_IMPORTED_MODULE_4__["default"], TreeTable: _components_TreeTable_indexnew__WEBPACK_IMPORTED_MODULE_2__["default"], MyCard: _components_MyCard_index__WEBPACK_IMPORTED_MODULE_1__["default"] },
  data: function data() {
    return {
      data: [],
      highlightBoolean: true,
      columns: [{
        text: '目录名',
        value: 'name'
      }, {
        text: '操作',
        type: 'iconButton',
        width: 300,
        list: this.operButton
      }, {
        text: '级别移动',
        type: 'iconButton',
        width: 300,
        list: this.levelOperButton
      }, {
        text: '内容编辑',
        type: 'iconButton',
        width: 300,
        list: this.contentButton
      }],
      dialogFormVisible: false,
      dialogStatus: 'create',
      listLoading: false,
      helpCenterDialogStatus: 'create',
      textMap: {
        update: '编辑',
        create: '新建',
        look: '查看'
      },
      drawingFilesVisible: false,
      helpCenterFormVisible: false,
      buttonLoading: false,
      rules: {},
      form: {
        id: '',
        parentId: '',
        name: '',
        content: ''
      },
      expands: []
    };
  },
  mounted: function mounted() {
    this.getList();
  },

  methods: {
    goBack: function goBack() {
      this.$router.push('/qaManage/helpCenterShow');
    },
    preShow: function preShow() {
      //  todo 待确认
      this.helpCenterFormVisible = true;
      this.getShow();
      this.$router.push('/qaManage/helpCenterPreShow');
    },
    saveFun: function saveFun() {
      this.getList();
    },
    getShow: function getShow() {
      var _this = this;

      this.listLoading = true;
      this.data = [];
      Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["dataPreView"])({}).then(function (res) {
        if (res.success) {
          _this.list = res.result.list;
          _this.total = res.result.total;
          if (_this.$refs.table) {
            _this.$refs.table.$refs.multipleTable.bodyWrapper.scrollTop = 0;
          }
        }
      });
    },

    // 加载列表
    // getHelpCenterCatalogList({}).then(res => {
    //       if (res.success) {
    //         // res的顺序 ——expand换成data的
    //         const data = res.result.list.map(item => {
    //           return { ...this.data.find(item1 => item1.id === item.id) }
    //         })
    //         this.data = data
    //       }
    //     })
    getList: function getList() {
      var _this2 = this;

      this.listLoading = true;
      this.data = [];
      Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["getHelpCenterCatalogList"])({}).then(function (res) {
        if (res.success) {
          _this2.listLoading = false;
          _this2.resetExpendStatus(res.result.list);
        }
      });
    },
    showFiles: function showFiles() {
      this.drawingFilesVisible = true;
    },
    resetExpendStatus: function resetExpendStatus(result) {
      var oldData = this.data.slice();
      if (oldData.length === 0) {
        this.data = result;
        return;
      }
      this.data = result.map(function (item, index) {
        var find = oldData.find(function (innerItem) {
          return innerItem.id === item.id;
        });
        if (find) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, find, item);
        } else {
          return item;
        }
      });
    },
    lookRecord: function lookRecord(val) {
      var _this3 = this;

      Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["getTechnicistInfo"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this3.form = res.result.list;
          _this3.total = res.result.total;
          if (_this3.$refs.table) {
            _this3.$refs.table.$refs.multipleTable.bodyWrapper.scrollTop = 0;
          }
        }
      });
      // this.form = { ...val.row, major: getNameByCode(val.row.major, 'project_major') }
    },

    // 表格操作按鈕
    operButton: function operButton(val) {
      var btns = [{
        id: 'add',
        class: 'iconxinzeng',
        value: '添加',
        click: this.addChild
      }, {
        id: 'edit',
        class: 'iconxiugai',
        value: '编辑',
        click: this.update
      }, {
        id: 'delete',
        class: 'iconshanchu1',
        value: '删除',
        click: this.delete
      }];
      return this.filterOprButtons(val, btns);
    },
    contentButton: function contentButton(val) {
      var btns = [{
        id: 'edit',
        class: 'iconxiugai',
        value: '编辑',
        click: this.update
      }, {
        id: 'look',
        class: 'iconxiugai',
        value: '查看',
        click: this.lookRecord
      }];
      return this.filterOprButtons(val, btns);
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
      ids.push('look');
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
    levelOperButton: function levelOperButton(val) {
      var btns = [{
        id: 'upLevel',
        class: 'iconiconfont_-',
        value: '升级',
        click: this.updateToUpLevel
        // privilege: 'P_tzml_xg'
      }, {
        id: 'downLevel',
        class: 'iconjiangji',
        value: '降级',
        click: this.updateToDownLevel
        // privilege: 'P_tzml_xg'
      }, {
        id: 'up',
        class: 'iconshangyi',
        value: '上移',
        click: this.updateToUp
        // privilege: 'P_tzml_xg'
      }, {
        id: 'down',
        class: 'iconxiayi',
        value: '下移',
        click: this.updateToDown
        // privilege: 'P_tzml_xg'
      }];
      return this.filterLevelOperButton(val, btns);
    },
    reset: function reset() {
      this.form = {
        id: '',
        parentId: '',
        name: ''
      };
    },
    addParent: function addParent() {
      this.helpCenterFormVisible = true;
      this.helpCenterDialogStatus = 'create';
      this.reset();
    },
    addChild: function addChild(val) {
      this.helpCenterFormVisible = true;
      this.helpCenterDialogStatus = 'create';
      this.reset();
      this.form.parentId = val.row.id;
      this.updateList(val);
    },
    update: function update(val) {
      this.helpCenterFormVisible = true;
      this.helpCenterDialogStatus = 'update';
      this.reset();
      this.form = {
        id: val.row.id,
        parentId: val.row.parentId,
        content: val.row.content
      };
      this.updateList(val);
    },
    look: function look(val) {
      this.helpCenterFormVisible = true;
      this.helpCenterDialogStatus = 'look';
      this.reset();
      this.form = {
        id: val.row.id,
        parentId: val.row.parentId,
        name: val.row.name,
        content: val.row.content
      };
      this.lookList(val);
    },
    delete: function _delete(val) {
      var _this4 = this;

      this.$confirm('是否确定删除该记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["deleteHelpCenterCatalog"])({ id: val.row.id }).then(function (response) {
          if (response.success) {
            _this4.data.splice(_this4.data.findIndex(function (item) {
              return item.id === val.row.id;
            }), 1);
            _this4.$message.success('删除成功');
          } else {
            _this4.$message.error(response.message);
          }
        });
      });
    },
    saveTree: function saveTree() {
      var _this5 = this;

      this.buttonLoading = true;
      Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["saveHelpCenterCatalog"])(this.form).then(function (res) {
        if (res.success) {
          _this5.buttonLoading = false;
          _this5.$message.success('保存成功');
          _this5.helpCenterFormVisible = false;
          if (!_this5.form.id) {
            _this5.data.push(res.result);
          } else {
            var index = _this5.data.findIndex(function (item) {
              return res.result.id === item.id;
            });
            _this5.$set(_this5.data, index, res.result);
            // this.data[index] = res.result
          }
        }
      });
    },
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
    filterLevelOperButton: function filterLevelOperButton(val, btns) {
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
      var result = btns.filter(function (item) {
        if (ids.includes(item.id)) {
          return true;
        }
      });
      return result;
    },
    updateList: function updateList(val) {
      var _this6 = this;

      // const codes = this.dictMap['risk_status'].map(item => item.code)
      if (val.row.treeLevel !== 1) {
        // 保持展开状态
        Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["getHelpCenterCatalogList"])({}).then(function (res) {
          if (res.success) {
            // res的顺序 ——expand换成data的
            var data = res.result.list.map(function (item) {
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this6.data.find(function (item1) {
                return item1.id === item.id;
              }));
            });
            _this6.data = data;
          }
        });
      } else {
        // 展开状态与什么关联
        // this.data的_expanded状态保留
        Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["getHelpCenterCatalogList"])({}).then(function (res) {
          if (res.success) {
            // res的顺序 ——expand换成data的
            var data = res.result.list.map(function (item) {
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this6.data.find(function (item1) {
                return item1.id === item.id;
              }));
            });
            _this6.data = data;
          }
        });
      }
    },
    lookList: function lookList(val) {
      var _this7 = this;

      Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["getHelpCenterCatalogList"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this7.helpCenterDialogStatus = 'view';
          _this7.form = res.result;
          _this7.form.major = val.row.major ? getNameByCode(val.row.major, 'project_major') : '';
          // this.form.designOrgIds = []
        }
      });

      // this.form = { ...val.row, major: getNameByCode(val.row.major, 'project_major') }
    },


    // 上移下移 降级升级
    updateToUp: function updateToUp(val) {
      var _this8 = this;

      Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["updateToUp"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          // this.listLoading = false
          _this8.$message.success('上移成功');
          _this8.updateList(val);
        }
      });
    },
    updateToDown: function updateToDown(val) {
      var _this9 = this;

      Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["updateToDown"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this9.$message.success('下移成功');
          _this9.updateList(val);
        }
      });
    },
    updateToUpLevel: function updateToUpLevel(val) {
      var _this10 = this;

      Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["updateToUpLevel"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this10.$message.success('升级成功');
          Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["getHelpCenterCatalogList"])({}).then(function (res) {
            if (res.success) {
              // this.data = res.result.list
              // res的顺序 ——expand换成data的
              var data = res.result.list.map(function (item) {
                var find = _this10.data.find(function (_item) {
                  return _item.id === item.id;
                });
                return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { _expanded: find._expanded });
              });
              _this10.data = data;
            }
          });
        }
      });
    },
    updateToDownLevel: function updateToDownLevel(val) {
      var _this11 = this;

      Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["updateToDownLevel"])({ id: val.row.id }).then(function (res) {
        if (res.success) {
          _this11.$message.success('降级成功');
          Object(_api_project_qaManage_helpCenterEdit__WEBPACK_IMPORTED_MODULE_3__["getHelpCenterCatalogList"])({}).then(function (res) {
            if (res.success) {
              var data = res.result.list.map(function (item) {
                var find = _this11.data.find(function (_item) {
                  return _item.id === item.id;
                });
                return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { _expanded: find._expanded });
              });
              _this11.data = data;
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "gHiZ":
/*!***************************************************************************************************************************!*\
  !*** ./src/views/project/qaManage/helpCenter/helpCenterEdit.vue?vue&type=style&index=0&id=e790361e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_style_index_0_id_e790361e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--7-0!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./helpCenterEdit.vue?vue&type=style&index=0&id=e790361e&scoped=true&lang=css& */ "ngLV");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_style_index_0_id_e790361e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_style_index_0_id_e790361e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_style_index_0_id_e790361e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_style_index_0_id_e790361e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_0_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_style_index_0_id_e790361e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "hfhP":
/*!*******************************************************************************************!*\
  !*** ./src/views/project/qaManage/helpCenter/helpCenterEdit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/happypack/loader.js?id=happyBabel!../../../../../node_modules/vue-loader/lib??vue-loader-options!./helpCenterEdit.vue?vue&type=script&lang=js& */ "dWn5");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_happypack_loader_js_id_happyBabel_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "ncYP":
/*!*************************************************************************************************************!*\
  !*** ./src/views/project/qaManage/helpCenter/helpCenterEdit.vue?vue&type=template&id=e790361e&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_template_id_e790361e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./helpCenterEdit.vue?vue&type=template&id=e790361e&scoped=true& */ "ycCu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_template_id_e790361e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_helpCenterEdit_vue_vue_type_template_id_e790361e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "ngLV":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--7-0!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qaManage/helpCenter/helpCenterEdit.vue?vue&type=style&index=0&id=e790361e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ycCu":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/project/qaManage/helpCenter/helpCenterEdit.vue?vue&type=template&id=e790361e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container drawingCatalogDiv"},[_c('my-card',{attrs:{"title":"帮助中心"}},[_c('h3',[_vm._v("目录")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.goBack}},[_c('i',{staticClass:"el-icon--left"}),_vm._v("返回\n    ")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.preShow}},[_c('i',{staticClass:"el-icon--left"}),_vm._v("预览\n    ")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"},{name:"button-privilege",rawName:"v-button-privilege"}],staticClass:"filter-item addButton",attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addParent}},[_vm._v("新增")]),_vm._v(" "),_c('div',{staticClass:"w50"},[_c('tree-table',{attrs:{"data":_vm.data,"columns":_vm.columns,"highlight":_vm.highlightBoolean,"list-loading":_vm.listLoading,"expand-keys":_vm.expands}})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.textMap[_vm.helpCenterDialogStatus],"visible":_vm.helpCenterFormVisible},on:{"update:visible":function($event){_vm.helpCenterFormVisible=$event}}},[_c('el-form',{ref:"form",attrs:{"rules":_vm.rules,"model":_vm.form,"label-position":"center","size":"small","label-width":"140px"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"目录名","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"placeholder":"请输入目录名","type":"text"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"内容信息","prop":"name"}},[_c('el-input',{staticClass:"filter-item",attrs:{"placeholder":"请输入内容","type":"text"},model:{value:(_vm.form.content),callback:function ($$v) {_vm.$set(_vm.form, "content", $$v)},expression:"form.content"}})],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.helpCenterFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","loading":_vm.buttonLoading},on:{"click":_vm.saveTree}},[_vm._v("提交")])],1)],1),_vm._v(" "),_c('drawing-dialog',{attrs:{"dialog-visible":_vm.dialogFormVisible,"dialog-status":_vm.dialogStatus,"form":_vm.form},on:{"update:dialogVisible":function($event){_vm.dialogFormVisible=$event},"update:dialog-visible":function($event){_vm.dialogFormVisible=$event},"save":_vm.saveFun,"showFiles":_vm.showFiles}}),_vm._v(" "),_c('drawing-files-dialog',{attrs:{"dialog-visible":_vm.drawingFilesVisible},on:{"update:dialogVisible":function($event){_vm.drawingFilesVisible=$event},"update:dialog-visible":function($event){_vm.drawingFilesVisible=$event}}})],1)}
var staticRenderFns = []



/***/ })

}]);