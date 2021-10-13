"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Meta)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Meta.js




const Meta = ({
  title,
  keywords,
  description
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      href: "/favicon.ico"
    }), /*#__PURE__*/jsx_runtime_.jsx("title", {
      children: title
    })]
  });
};

Meta.defaultProps = {
  title: 'Web development News',
  keywords: 'web development, programming',
  description: 'Get the latest news in web dev'
};
/* harmony default export */ const components_Meta = (Meta);

/***/ }),

/***/ 288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(876);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const about = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      title: "About"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
      children: "About"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(288));
module.exports = __webpack_exports__;

})();