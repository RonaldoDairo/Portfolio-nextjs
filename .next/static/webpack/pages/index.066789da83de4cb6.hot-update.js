"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/portfolio.js":
/*!*********************************!*\
  !*** ./components/portfolio.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\n\nconst Portfolio = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _profile__WEBPACK_IMPORTED_MODULE_1__.projects.map((param, i)=>{\n            let { name , description , image  } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image,\n                            alt: \"portfolio\",\n                            className: \"img-fluid\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\components\\\\portfolio.js\",\n                            lineNumber: 10,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\components\\\\portfolio.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\components\\\\portfolio.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                    href: \"/something\",\n                                    children: \"Know more\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\components\\\\portfolio.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\components\\\\portfolio.js\",\n                            lineNumber: 15,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\components\\\\portfolio.js\",\n                    lineNumber: 9,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\components\\\\portfolio.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BvcnRmb2xpby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzQztBQUV0QyxNQUFNQyxZQUFZO0lBQ2QscUJBQ0k7a0JBQ1BELGtEQUFZRSxDQUFDLFFBQTRCQztnQkFBM0IsRUFBQ0MsS0FBSSxFQUFFQyxZQUFXLEVBQUVDLE1BQUssRUFBQztZQUNyQyxxQkFDSSw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ1QsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQ0NDLEtBQUtKOzRCQUNMSyxLQUFJOzRCQUNKSCxXQUFVOzs7Ozs7c0NBRVosOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0k7OENBQUlSOzs7Ozs7OENBQ0wsOERBQUNTOzhDQUFHUjs7Ozs7OzhDQUNKLDhEQUFDUztvQ0FBS0MsTUFBSzs4Q0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFLNUM7O0FBTUE7S0ExQk1kO0FBNEJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9ydGZvbGlvLmpzP2FlNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xyXG5cclxuY29uc3QgUG9ydGZvbGlvID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG57cHJvamVjdHMubWFwKCh7bmFtZSwgZGVzY3JpcHRpb24sIGltYWdlfSxpKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInBvcnRmb2xpb1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57bmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb21ldGhpbmdcIj5Lbm93IG1vcmU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgKVxyXG59KVxyXG5cclxufVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87XHJcbiJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsIlBvcnRmb2xpbyIsIm1hcCIsImkiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgzIiwicCIsIkxpbmsiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/portfolio.js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/skills */ \"./components/skills.js\");\n/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/experience */ \"./components/experience.js\");\n/* harmony import */ var _components_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/portfolio */ \"./components/portfolio.js\");\n\n\n\n\n\nconst Index = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-12 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-body bg-secondary text-light\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"ryan-ray-profile2.jpeg\",\n                                        alt: \"images\",\n                                        className: \"img-fluid\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                        lineNumber: 13,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                    lineNumber: 12,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: \" Dairo Valerio\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                            lineNumber: 20,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"FullStack Developer\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                            lineNumber: 21,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\\xe1ndar de las industrias Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\\xe1ndar de las industrias\",\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                            lineNumber: 22,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/hireme\",\n                                            children: \"Hire Me\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card bg-light\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Skills\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skills__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card bg-light\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Experience\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_experience__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-body bg-dark\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-12\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-center text-light\",\n                                        children: \"Portfolio\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_portfolio__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Downloads\\\\postafolioNextJs\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, undefined);\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUNBO0FBQ1E7QUFDRjtBQUNoRCxNQUFNSSxRQUFRLGtCQUNaLDhEQUFDSiwwREFBTUE7OzBCQUVMLDhEQUFDSztnQkFBT0MsV0FBVTswQkFDaEIsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBSUQsV0FBVTs4Q0FDYiw0RUFBQ0U7d0NBQ0NDLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pKLFdBQVU7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDQztvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNLO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNDO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNDOztnREFBRTtnREFLbUQ7Ozs7Ozs7c0RBRXRELDhEQUFDQzs0Q0FBRUMsTUFBSztzREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU81Qiw4REFBQ1I7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0s7a0RBQUc7Ozs7OztrREFFSiw4REFBQ1YsMERBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWIsOERBQUNNO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBSUQsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDSztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDVCw4REFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNbkIsOERBQUNLO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUlELFdBQVU7OENBQ2IsNEVBQUNLO3dDQUFHTCxXQUFVO2tEQUF5Qjs7Ozs7Ozs7Ozs7OENBSzdDLDhEQUFDSCw2REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBN0RaQztBQXVFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2tpbGxzXCI7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gXCIuLi9jb21wb25lbnRzL2V4cGVyaWVuY2VcIjtcclxuaW1wb3J0IFBvcnRmb2xpbyBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3J0Zm9saW9cIjtcclxuY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbiAgPExheW91dD5cclxuICAgIHsvKiBGaXJzdCBTZWN0aW9uICovfVxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBiZy1zZWNvbmRhcnkgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cInJ5YW4tcmF5LXByb2ZpbGUyLmpwZWdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICA8aDE+IERhaXJvIFZhbGVyaW88L2gxPlxyXG4gICAgICAgICAgICAgIDxoMz5GdWxsU3RhY2sgRGV2ZWxvcGVyPC9oMz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhc1xyXG4gICAgICAgICAgICAgICAgeSBhcmNoaXZvcyBkZSB0ZXh0by4gTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vXHJcbiAgICAgICAgICAgICAgICBlc3TDoW5kYXIgZGUgbGFzIGluZHVzdHJpYXMgTG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG9cclxuICAgICAgICAgICAgICAgIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBMb3JlbSBJcHN1bSBoYVxyXG4gICAgICAgICAgICAgICAgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhc3tcIiBcIn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9oaXJlbWVcIj5IaXJlIE1lPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgey8qIFNlY29uZCBTZWN0aW9uICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDE+U2tpbGxzPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1saWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGgxPkV4cGVyaWVuY2U8L2gxPlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyogVGhpcmQgU2VjdGlvbiAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBiZy1kYXJrXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0XCI+UG9ydGZvbGlvPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgPFBvcnRmb2xpby8+XHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJTa2lsbHMiLCJFeHBlcmllbmNlIiwiUG9ydGZvbGlvIiwiSW5kZXgiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsImgzIiwicCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});