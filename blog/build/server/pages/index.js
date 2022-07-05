"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ get)
/* harmony export */ });
// Wrapper for fetch api with prefilled api endpoint and token
const get = (path)=>{
    return fetch(process.env.API_ENDPOINT + path, {
        headers: new Headers({
            "Authorization": "Bearer " + process.env.API_TOKEN
        })
    });
};



/***/ }),

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);


function Albums({ albums  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: albums.map((album)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    album.attributes.name,
                    " | ",
                    album.id
                ]
            }, album.id))
    });
}
async function getStaticProps() {
    const res = await (0,lib_api_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U)("/albums");
    const albums = (await res.json()).data;
    return {
        props: {
            albums
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Albums);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(196));
module.exports = __webpack_exports__;

})();