"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/login/page",{

/***/ "(app-pages-browser)/./src/lib/redux/reducer.js":
/*!**********************************!*\
  !*** ./src/lib/redux/reducer.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateReducer: function() { return /* binding */ generateReducer; },\n/* harmony export */   getReducer: function() { return /* binding */ getReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n// Generates a Redux slice with a given name and state key\nconst generateReducer = (name, key)=>{\n    // Create a slice with an initial state and a setData reducer\n    const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n        name,\n        initialState: {\n            [key]: null\n        },\n        reducers: {\n            // Action to set data in the state for the specified key\n            setData: (state, action)=>{\n                state[key] = action.payload;\n            }\n        }\n    });\n    // Return both reducer and actions from the slice\n    return {\n        reducer: slice.reducer,\n        actions: slice.actions\n    };\n};\n// Gets the setData action creator for a dynamically generated reducer\nconst getReducer = (name, key)=>{\n    const { actions } = generateReducer(name, key);\n    return actions.setData;\n}; // Example usage:\n // const userSetData = getSetDataAction('user', 'userData');\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvcmVkdXgvcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsMERBQTBEO0FBQ25ELE1BQU1DLGtCQUFrQixDQUFDQyxNQUFNQztJQUNwQyw2REFBNkQ7SUFDN0QsTUFBTUMsUUFBUUosNkRBQVdBLENBQUM7UUFDeEJFO1FBQ0FHLGNBQWM7WUFBRSxDQUFDRixJQUFJLEVBQUU7UUFBSztRQUM1QkcsVUFBVTtZQUNSLHdEQUF3RDtZQUN4REMsU0FBUyxDQUFDQyxPQUFPQztnQkFDZkQsS0FBSyxDQUFDTCxJQUFJLEdBQUdNLE9BQU9DLE9BQU87WUFDN0I7UUFDRjtJQUNGO0lBRUEsaURBQWlEO0lBQ2pELE9BQU87UUFBRUMsU0FBU1AsTUFBTU8sT0FBTztRQUFFQyxTQUFTUixNQUFNUSxPQUFPO0lBQUM7QUFDMUQsRUFBRTtBQUVGLHNFQUFzRTtBQUMvRCxNQUFNQyxhQUFhLENBQUNYLE1BQU1DO0lBQy9CLE1BQU0sRUFBRVMsT0FBTyxFQUFFLEdBQUdYLGdCQUFnQkMsTUFBTUM7SUFDMUMsT0FBT1MsUUFBUUwsT0FBTztBQUN4QixFQUFFLENBRUYsaUJBQWlCO0NBQ2pCLDREQUE0RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL3JlZHV4L3JlZHVjZXIuanM/YWVlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG4vLyBHZW5lcmF0ZXMgYSBSZWR1eCBzbGljZSB3aXRoIGEgZ2l2ZW4gbmFtZSBhbmQgc3RhdGUga2V5XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJlZHVjZXIgPSAobmFtZSwga2V5KSA9PiB7XHJcbiAgLy8gQ3JlYXRlIGEgc2xpY2Ugd2l0aCBhbiBpbml0aWFsIHN0YXRlIGFuZCBhIHNldERhdGEgcmVkdWNlclxyXG4gIGNvbnN0IHNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZSxcclxuICAgIGluaXRpYWxTdGF0ZTogeyBba2V5XTogbnVsbCB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgLy8gQWN0aW9uIHRvIHNldCBkYXRhIGluIHRoZSBzdGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBrZXlcclxuICAgICAgc2V0RGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzdGF0ZVtrZXldID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyBSZXR1cm4gYm90aCByZWR1Y2VyIGFuZCBhY3Rpb25zIGZyb20gdGhlIHNsaWNlXHJcbiAgcmV0dXJuIHsgcmVkdWNlcjogc2xpY2UucmVkdWNlciwgYWN0aW9uczogc2xpY2UuYWN0aW9ucyB9O1xyXG59O1xyXG5cclxuLy8gR2V0cyB0aGUgc2V0RGF0YSBhY3Rpb24gY3JlYXRvciBmb3IgYSBkeW5hbWljYWxseSBnZW5lcmF0ZWQgcmVkdWNlclxyXG5leHBvcnQgY29uc3QgZ2V0UmVkdWNlciA9IChuYW1lLCBrZXkpID0+IHtcclxuICBjb25zdCB7IGFjdGlvbnMgfSA9IGdlbmVyYXRlUmVkdWNlcihuYW1lLCBrZXkpO1xyXG4gIHJldHVybiBhY3Rpb25zLnNldERhdGE7XHJcbn07XHJcblxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG4vLyBjb25zdCB1c2VyU2V0RGF0YSA9IGdldFNldERhdGFBY3Rpb24oJ3VzZXInLCAndXNlckRhdGEnKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZ2VuZXJhdGVSZWR1Y2VyIiwibmFtZSIsImtleSIsInNsaWNlIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJzZXREYXRhIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVkdWNlciIsImFjdGlvbnMiLCJnZXRSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/redux/reducer.js\n"));

/***/ })

});