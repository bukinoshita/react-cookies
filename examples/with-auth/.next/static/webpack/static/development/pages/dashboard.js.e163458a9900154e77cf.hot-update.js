webpackHotUpdate("static/development/pages/dashboard.js",{

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
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookies */ "../../index.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_0__);
// Packages

var COOKIE_NAME = 'react-cookies-with-auth';
var saveCookie = function saveCookie(value) {
  var expires = new Date();
  expires.setDate(expires.getDate() + 14);
  return Object(react_cookies__WEBPACK_IMPORTED_MODULE_0__["setCookie"])(COOKIE_NAME, value, {
    expires: expires
  });
};
var deleteCookie = function deleteCookie() {
  Object(react_cookies__WEBPACK_IMPORTED_MODULE_0__["removeCookie"])(COOKIE_NAME);
};
var retrieveCookie = function retrieveCookie() {
  var cookie = Object(react_cookies__WEBPACK_IMPORTED_MODULE_0__["getCookie"])(COOKIE_NAME);
  return cookie;
};

/***/ })

})
//# sourceMappingURL=dashboard.js.e163458a9900154e77cf.hot-update.js.map