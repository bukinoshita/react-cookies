webpackHotUpdate("static/development/pages/index.js",{

/***/ "./services/cookies.js":
/*!*****************************!*\
  !*** ./services/cookies.js ***!
  \*****************************/
/*! exports provided: saveCookie, deleteCookie, retrieveCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCookie", function() { return saveCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveCookie", function() { return retrieveCookie; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookies */ "../../index.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_1__);

// Packages

var COOKIE_NAME = 'react-cookies-with-auth';
var saveCookie = function saveCookie(value) {
  var expires = new Date();
  expires.setDate(expires.getDate() + 14);
  return Object(react_cookies__WEBPACK_IMPORTED_MODULE_1__["setCookie"])(COOKIE_NAME, value, {
    expires: expires
  });
};
var deleteCookie = function deleteCookie() {
  Object(react_cookies__WEBPACK_IMPORTED_MODULE_1__["removeCookie"])(COOKIE_NAME);
};
var retrieveCookie = function retrieveCookie() {
  var cookies = Object(react_cookies__WEBPACK_IMPORTED_MODULE_1__["getAllCookies"])();
  console.log(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(cookies).length <= 0);

  if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(cookies).length > 0) {
    console.log({
      cookies: cookies
    });
    return cookies;
  }

  return false;
};

/***/ })

})
//# sourceMappingURL=index.js.03a12e4d91ba71005bfd.hot-update.js.map