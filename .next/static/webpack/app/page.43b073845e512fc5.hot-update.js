"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ProjectCard.jsx":
/*!************************************!*\
  !*** ./components/ProjectCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectCard: function() { return /* binding */ ProjectCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Col_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Col!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst ProjectCard = (param)=>{\n    let { imgUrl, title, description } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        size: 12,\n        sm: 6,\n        md: 4,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"proj-imgbx\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imgUrl,\n                    alt: \"our luxury system\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ED\\\\ihemseepro\\\\ihemseepro\\\\components\\\\ProjectCard.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"proj-txtx\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ED\\\\ihemseepro\\\\ihemseepro\\\\components\\\\ProjectCard.jsx\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ED\\\\ihemseepro\\\\ihemseepro\\\\components\\\\ProjectCard.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ED\\\\ihemseepro\\\\ihemseepro\\\\components\\\\ProjectCard.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ED\\\\ihemseepro\\\\ihemseepro\\\\components\\\\ProjectCard.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ED\\\\ihemseepro\\\\ihemseepro\\\\components\\\\ProjectCard.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectCard;\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdENhcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDUTtBQUNmO0FBRXZCLE1BQU1FLGNBQWM7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFO0lBQ3hELHFCQUNFLDhEQUFDTCxrRkFBR0E7UUFBQ00sTUFBTTtRQUFJQyxJQUFJO1FBQUdDLElBQUk7a0JBQ3hCLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlDLEtBQUtUO29CQUFRVSxLQUFJOzs7Ozs7OEJBQ3RCLDhEQUFDSjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNJO3NDQUFJVjs7Ozs7O3NDQUNMLDhEQUFDVztzQ0FBTVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCLEVBQUM7S0FaWUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3g/ZjI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0Q2FyZCA9ICh7IGltZ1VybCwgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbCBzaXplPXsxMn0gc209ezZ9IG1kPXs0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2otaW1nYngnPlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWdVcmx9IGFsdD0nb3VyIGx1eHVyeSBzeXN0ZW0nIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2otdHh0eCc+XHJcbiAgICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XHJcbiAgICAgICAgICA8c3Bhbj57ZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29sPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQ29sIiwiSW1hZ2UiLCJQcm9qZWN0Q2FyZCIsImltZ1VybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzaXplIiwic20iLCJtZCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImg0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectCard.jsx\n"));

/***/ })

});