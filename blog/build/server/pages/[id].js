"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
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

/***/ 244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);


function Album({ album  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: [
            "Here an album ",
            album.attributes.name
        ]
    });
}
async function getStaticPaths() {
    const res = await (0,lib_api_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U)("/albums");
    const albums = (await res.json()).data;
    const paths = albums.map((album)=>({
            params: {
                id: album.id.toString()
            }
        }));
    // { fallback: false } means other routes should 404
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const res = await (0,lib_api_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U)(`/albums/${params.id}`);
    const album = (await res.json()).data;
    return {
        props: {
            album
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Album);


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
var __webpack_exports__ = (__webpack_exec__(244));
module.exports = __webpack_exports__;

})();