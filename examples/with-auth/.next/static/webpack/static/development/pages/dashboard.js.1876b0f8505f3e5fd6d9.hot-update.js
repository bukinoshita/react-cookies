webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layouts_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/page */ "./layouts/page.js");
/* harmony import */ var _services_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/cookies */ "./services/cookies.js");





var _jsxFileName = "/Users/bukinoshita/github/react-cookies/examples/with-auth/pages/dashboard.js";

// Packages

 // Layouts

 // Services



var Dashboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard, _Component);

  function Dashboard() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dashboard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard).call(this));
    _this.state = {
      cookie: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var cookie = Object(_services_cookies__WEBPACK_IMPORTED_MODULE_9__["retrieveCookie"])();
      this.setState({
        cookie: cookie
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cookie = this.state.cookie;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_layouts_page__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-3233409030",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Your token"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3233409030",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, cookie), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3233409030",
        __self: this
      }, "h1.jsx-3233409030{text-align:center;font-size:16px;text-transform:uppercase;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-weight:300;margin-bottom:32px;}span.jsx-3233409030{word-break:break-all;text-align:center;display:block;font-size:11px;opacity:0.5;line-height:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9idWtpbm9zaGl0YS9naXRodWIvcmVhY3QtY29va2llcy9leGFtcGxlcy93aXRoLWF1dGgvcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IsQUFHK0IsQUFTRyxrQkFSTixHQVNHLFlBUk8sTUFTWCxjQUNDLEtBVEksVUFVUCxZQUNLLGlCQUNuQixzREFYa0IsZ0JBQ0csbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9idWtpbm9zaGl0YS9naXRodWIvcmVhY3QtY29va2llcy9leGFtcGxlcy93aXRoLWF1dGgvcGFnZXMvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFja2FnZXNcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbi8vIExheW91dHNcbmltcG9ydCBQYWdlIGZyb20gJy4uL2xheW91dHMvcGFnZSdcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IHJldHJpZXZlQ29va2llIH0gZnJvbSAnLi4vc2VydmljZXMvY29va2llcydcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHsgY29va2llOiAnJyB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjb29raWUgPSByZXRyaWV2ZUNvb2tpZSgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvb2tpZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29va2llIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxoMT5Zb3VyIHRva2VuPC9oMT5cbiAgICAgICAgPHNwYW4+e2Nvb2tpZX08L3NwYW4+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9QYWdlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcbiJdfQ== */\n/*@ sourceURL=/Users/bukinoshita/github/react-cookies/examples/with-auth/pages/dashboard.js */"));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=dashboard.js.1876b0f8505f3e5fd6d9.hot-update.js.map