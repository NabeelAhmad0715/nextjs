(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./styles/Nav.module.css
var Nav_module = __webpack_require__(371);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Nav.js





const Nav = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: (Nav_module_default()).nav,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: "Home"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: "About"
        })
      })]
    })
  });
};

/* harmony default export */ const components_Nav = (Nav);
// EXTERNAL MODULE: ./components/Meta.js + 1 modules
var Meta = __webpack_require__(876);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(795);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header.js




const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
      className: (Header_module_default()).title,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Web Development"
      }), " News"]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (Header_module_default()).description,
      children: "Keep up to date with the latest web dev news"
    })]
  });
};

/* harmony default export */ const components_Header = (Header);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(667);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: ./components/Layout.js








const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Meta/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Nav, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Layout_module_default()).container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
        className: (Layout_module_default()).main,
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), children]
      })
    })]
  });
};

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 795:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Header_title__1vi4d",
	"description": "Header_description__1lhe1"
};


/***/ }),

/***/ 667:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__1SPwL",
	"main": "Layout_main__cgm7e"
};


/***/ }),

/***/ 371:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Nav_nav__3Zjf-"
};


/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(380)));
module.exports = __webpack_exports__;

})();