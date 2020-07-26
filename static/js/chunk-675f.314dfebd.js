(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-675f"],{

/***/ "2fVa":
/*!**********************************!*\
  !*** ./src/utils/tableAttach.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "m1cH");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/regenerator */ "14Xm");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "D3Ub");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "iCc5");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "V7oC");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_doc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/doc */ "5HWN");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils */ "7Qib");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store */ "Q2AE");











var TableAttach = function () {
  function TableAttach() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, TableAttach);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(TableAttach, [{
    key: 'dealUrl',
    value: function dealUrl(info, isDown) {
      /* 如果为图片 pdf类型的利用img  如果为其它的使用doc */
      var url = _store__WEBPACK_IMPORTED_MODULE_9__["default"].getters.fileUrl + 'doc/' + info.fileName;
      var reg = /\.((png|jpe?g|gif|svg|pdf))/;
      if (reg.test(info.fileName)) {
        url = _store__WEBPACK_IMPORTED_MODULE_9__["default"].getters.fileUrl + 'img/' + info.fileName;
      }
      // 如果isDown 存在不为undefined 此时 isDown 优先级最高
      if (isDown !== undefined) {
        url = _store__WEBPACK_IMPORTED_MODULE_9__["default"].getters.fileUrl + (isDown ? 'doc/' : 'img/') + info.fileName;
      }
      return url;
    }
    /**
     * @function dealItem 处理每一行
     * @param {*} docId  传入附件id
     * @param {*} isDown  是否可以下载
     */

  }, {
    key: 'dealItem',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(docId, isDown, showDetail) {
        var _this = this;

        var back, html;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (docId) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', '');

              case 2:
                _context.next = 4;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_7__["attachList"])({
                  docId: docId
                });

              case 4:
                back = _context.sent;
                html = '';

                window.clickFun = function (url) {
                  window.open(url);
                };
                if (back.success) {
                  back.result.forEach(function (item) {
                    var url = _this.dealUrl(item, isDown);
                    if (showDetail) {
                      html += '<div class="pointer text-overflow hover-btn" style="width:100%;" title="' + item.originalFileName + '" onclick="window.clickFun(\'' + url + '\')">' + item.originalFileName + ' <span v-if="showDetail" style="margin-left: 5px;color: rgba(0,0,0,0.7)">(' + item.updateUser + ' ' + Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(item.updateDate, '{y}-{m}-{d} {h}:{i}') + ')</span> </div>';
                    } else {
                      html += '<div class="pointer text-overflow hover-btn" style="width:100%;" title="' + item.originalFileName + '" onclick="window.clickFun(\'' + url + '\')">' + item.originalFileName + '</div>';
                    }
                    // html += `<span class="icon iconfont iconfujian1 hover-btn pointer " title="${item.originalFileName}" onclick="window.clickFun('${url}')"></span>`
                  });
                }
                // html = `<div style="width:100%;text-align:center;">${html}</div>`
                return _context.abrupt('return', html);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function dealItem(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return dealItem;
    }()
  }, {
    key: 'dealItemNew',
    value: function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(docId, isDown) {
        var _this2 = this;

        var back, html, urls;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (docId) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', '');

              case 2:
                _context2.next = 4;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_7__["attachList"])({
                  docId: docId
                });

              case 4:
                back = _context2.sent;
                html = '';
                urls = [];

                window.clickFun = function (url) {
                  window.open(url);
                };
                if (back.success) {
                  back.result.forEach(function (item) {
                    var url = _this2.dealUrl(item, isDown);
                    urls.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, {
                      url: url
                    }));
                    html += '<div class="pointer text-overflow hover-btn" style="width:100%;" title="' + item.originalFileName + '" onclick="window.clickFun(\'' + url + '\')">' + item.originalFileName + ' </div>';
                    // html += `<span class="icon iconfont iconfujian1 hover-btn pointer " title="${item.originalFileName}" onclick="window.clickFun('${url}')"></span>`
                  });
                }
                return _context2.abrupt('return', {
                  html: html,
                  urls: urls
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function dealItemNew(_x4, _x5) {
        return _ref2.apply(this, arguments);
      }

      return dealItemNew;
    }()
  }, {
    key: 'generateList',
    value: function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(list) {
        var docId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'docId';

        var _this3 = this;

        var isDown = arguments[2];
        var showDetail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var promiseAll;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // showDetail 显示上传时间和上传人
                promiseAll = [];

                list.forEach(function (item) {
                  promiseAll.push(_this3.dealItem(item[docId], isDown, showDetail));
                });
                return _context3.abrupt('return', babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(promiseAll));

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function generateList(_x6) {
        return _ref3.apply(this, arguments);
      }

      return generateList;
    }()
  }, {
    key: 'generateListNew',
    value: function () {
      var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(list) {
        var _this4 = this;

        var docId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'docId';
        var isDown = arguments[2];
        var promiseAll;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                promiseAll = [];

                list.forEach(function (item) {
                  promiseAll.push(_this4.dealItemNew(item[docId], isDown));
                });
                return _context4.abrupt('return', babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(promiseAll));

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function generateListNew(_x9) {
        return _ref4.apply(this, arguments);
      }

      return generateListNew;
    }()
  }, {
    key: 'getSigleUrl',
    value: function () {
      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(docId, isDown) {
        var _this5 = this;

        var back, urls;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (docId) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return', '');

              case 2:
                _context5.next = 4;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_7__["attachList"])({
                  docId: docId
                });

              case 4:
                back = _context5.sent;
                urls = [];

                if (back.success) {
                  back.result.forEach(function (item) {
                    var url = _this5.dealUrl(item, isDown);
                    urls.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, {
                      url: url
                    }));
                  });
                }
                return _context5.abrupt('return', urls);

              case 8:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getSigleUrl(_x11, _x12) {
        return _ref5.apply(this, arguments);
      }

      return getSigleUrl;
    }()
  }, {
    key: 'getUrlList',
    value: function () {
      var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6(list) {
        var _this6 = this;

        var docId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'docId';
        var isDown = arguments[2];
        var promiseAll;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                promiseAll = [];

                list.forEach(function (item) {
                  promiseAll.push(_this6.getSigleUrl(item[docId], isDown));
                });
                return _context6.abrupt('return', babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(promiseAll));

              case 3:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getUrlList(_x13) {
        return _ref6.apply(this, arguments);
      }

      return getUrlList;
    }()
  }, {
    key: 'generateAttachList',
    value: function generateAttachList(item) {
      var docId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'docId';
      var isDown = arguments[2];

      return this.dealItem(item[docId], isDown);
    }
  }, {
    key: 'getSingleLatestTime',
    value: function () {
      var _ref7 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee7() {
        var docId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var res, list, latestTime;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!docId) {
                  _context7.next = 14;
                  break;
                }

                _context7.next = 3;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_7__["attachList"])({ docId: docId });

              case 3:
                res = _context7.sent;

                if (!res.success) {
                  _context7.next = 12;
                  break;
                }

                list = res.result;

                if (!(list.length > 0)) {
                  _context7.next = 11;
                  break;
                }

                latestTime = Math.max.apply(Math, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(list.map(function (item) {
                  return item.recordCreateDate;
                })));
                return _context7.abrupt('return', Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseTime"])(latestTime, '{y}-{m}-{d} {h}:{i}'));

              case 11:
                return _context7.abrupt('return', '');

              case 12:
                _context7.next = 15;
                break;

              case 14:
                return _context7.abrupt('return', '');

              case 15:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getSingleLatestTime() {
        return _ref7.apply(this, arguments);
      }

      return getSingleLatestTime;
    }()
  }, {
    key: 'getLatestTime',
    value: function () {
      var _ref8 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee8(list) {
        var _this7 = this;

        var promiseAll;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                promiseAll = [];

                list.forEach(function (item) {
                  promiseAll.push(_this7.getSingleLatestTime(item.docId));
                });
                return _context8.abrupt('return', babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(promiseAll));

              case 3:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getLatestTime(_x17) {
        return _ref8.apply(this, arguments);
      }

      return getLatestTime;
    }()

    /**
     * 进行的设计与处理
     * 基本的思路采用管道 数据流的风格
     * 内置工具方法 urls  html lastTime
     */

  }, {
    key: 'aggregate',
    value: function () {
      var _ref9 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee9(_ref10) {
        var _this8 = this;

        var list = _ref10.list,
            tools = _ref10.tools,
            _ref10$docId = _ref10.docId,
            docId = _ref10$docId === undefined ? 'docId' : _ref10$docId,
            isDown = _ref10.isDown;
        var promiseAll;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                //  根据列表拿到附件
                promiseAll = [];

                list.forEach(function (item) {
                  promiseAll.push(_this8.dealAttachItem(item[docId], isDown, tools));
                });
                return _context9.abrupt('return', babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(promiseAll));

              case 3:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function aggregate(_x18) {
        return _ref9.apply(this, arguments);
      }

      return aggregate;
    }()

    //  处理每次请求得到的附件

  }, {
    key: 'dealAttachItem',
    value: function () {
      var _ref11 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee10(docId, isDown, tools) {
        var _this9 = this;

        var back, result, toolSet;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (docId) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt('return', '');

              case 2:
                _context10.next = 4;
                return Object(_api_doc__WEBPACK_IMPORTED_MODULE_7__["attachList"])({
                  docId: docId
                });

              case 4:
                back = _context10.sent;

                if (back.success) {
                  _context10.next = 7;
                  break;
                }

                return _context10.abrupt('return');

              case 7:
                result = {};
                toolSet = ['urls', 'html', 'lastTime'];

                tools.forEach(function (tool) {
                  if (typeof tool === 'string') {
                    // 当为字符串类型 判断是否为内置函数
                    if (toolSet.includes(tool)) {
                      _this9['tool_' + tool](back, result);
                    } else {
                      throw new Error('没有相对应的内置方法');
                    }
                  } else {
                    // 自定义方法
                  }
                });

                return _context10.abrupt('return', {
                  html: html,
                  urls: urls
                });

              case 11:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function dealAttachItem(_x19, _x20, _x21) {
        return _ref11.apply(this, arguments);
      }

      return dealAttachItem;
    }()

    // 内置处理方法

  }, {
    key: 'tool_html',
    value: function tool_html(back, result) {
      var _this10 = this;

      var html = '';
      var urls = [];
      window.clickFun = function (url) {
        window.open(url);
      };

      back.result.forEach(function (item) {
        var url = _this10.dealUrl(item, isDown);
        urls.push(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, {
          url: url
        }));
        html += '<div class="pointer text-overflow hover-btn" style="width:100%;" title="' + item.originalFileName + '" onclick="window.clickFun(\'' + url + '\')">' + item.originalFileName + ' </div>';
      });
      result['urls'] = urls;
      result['html'] = html;
    }
  }]);

  return TableAttach;
}();

/* harmony default export */ __webpack_exports__["default"] = (new TableAttach());

/***/ }),

/***/ "5HWN":
/*!************************!*\
  !*** ./src/api/doc.js ***!
  \************************/
/*! exports provided: uploadDoc, getPicture, uploadImg, attachList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadDoc", function() { return uploadDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPicture", function() { return getPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImg", function() { return uploadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachList", function() { return attachList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "t3Un");


function uploadDoc(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/uploadDoc',
    method: 'post',
    data: param
  });
}

// 根据docId获取图片
function getPicture(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/attachList',
    method: 'post',
    data: param
  });
}

function uploadImg(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/uploadImg',
    method: 'post',
    data: param
  });
}

// 根据docId获取图片
function attachList(param) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'rest/doc/attachList',
    method: 'post',
    data: param
  });
}

/***/ })

}]);