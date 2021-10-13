(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ server)
/* harmony export */ });
const dev = false;
const server = dev ? 'http://localhost:3000' : 'http://localhost:3000m';

/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(130);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(562);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/ArticleItem.js





const ArticleItem = ({
  article
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/article/${article.id}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: (Article_module_default()).card,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: [article.title, " \u2192"]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: article.excerpt
      })]
    })
  });
};

/* harmony default export */ const components_ArticleItem = (ArticleItem);
;// CONCATENATED MODULE: ./components/ArticleList.js




const ArticleList = ({
  articles
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Article_module_default()).grid,
    children: articles.map(article => /*#__PURE__*/jsx_runtime_.jsx(components_ArticleItem, {
      article: article
    }))
  });
};

/* harmony default export */ const components_ArticleList = (ArticleList);
;// CONCATENATED MODULE: ./pages/index.js



function Home({
  articles
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(components_ArticleList, {
      articles: articles
    })
  });
}
const getStaticProps = async () => {
  const res = await fetch(`${config/* server */.f}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  };
}; // export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles,
//     },
//   }
// }

/***/ }),

/***/ 562:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "Article_grid__2WPYc",
	"card": "Article_card__2DgoW",
	"logo": "Article_logo__p8cMG"
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
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(973)));
module.exports = __webpack_exports__;

})();