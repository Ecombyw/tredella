"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/common/dropdowns/dropdown-menu.jsx":
/*!***********************************************************!*\
  !*** ./src/components/common/dropdowns/dropdown-menu.jsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _configs_theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/configs/theme/theme */ \"(app-pages-browser)/./src/configs/theme/theme.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Menu/Menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaUser!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DropdownMenu = (param)=>{\n    let { ariaControlLabel = \"account\", menuButton, menuButtonIcon, menuButtonSxProps, menuDataArray = [\n        {\n            menuItem: \"component\",\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaUser, {}, void 0, false, {\n                fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                lineNumber: 23,\n                columnNumber: 18\n            }, undefined),\n            handleOnClick: ()=>console.log(\"onClick\"),\n            componentStyles: {\n                border: \"1px solid red\"\n            }\n        },\n        {\n            title: \"Profile\",\n            listItemIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaUser, {}, void 0, false, {\n                fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                lineNumber: 29,\n                columnNumber: 21\n            }, undefined),\n            handleOnClick: ()=>console.log(\"onClick\"),\n            menuItemStyles: {\n                border: \"1px solid red\"\n            }\n        },\n        {\n            menuItem: \"divider\"\n        }\n    ] } = param;\n    _s();\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    const renderMenuItem = (item, index)=>{\n        const { menuItem = \"list-item\", listItemIcon, listItemIconAvatar = false, title = \"\", handleOnClick = undefined, menuItemStyles = {}, componentStyles = {} } = item;\n        switch(menuItem){\n            case \"list-item\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sx: {\n                        mb: 1,\n                        display: \"flex\",\n                        gap: \"10px\",\n                        color: _configs_theme_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].palette.textColor.secondary,\n                        fontWeight: \"500\",\n                        fontSize: \"16px\",\n                        lineHeight: \"30px\",\n                        letterSpacing: \"0.12px\",\n                        ...menuItemStyles\n                    },\n                    onClick: ()=>{\n                        handleOnClick();\n                        handleClose();\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            sx: {\n                                width: \"30px\"\n                            },\n                            children: listItemIconAvatar ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                sx: {\n                                    width: 28,\n                                    height: 28,\n                                    border: \"1px solid \".concat(_configs_theme_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].palette.borderColor.primary),\n                                    bgcolor: \"white\"\n                                },\n                                children: listItemIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined) : listItemIcon\n                        }, void 0, false, {\n                            fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined),\n                        title\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined);\n            case \"component\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    sx: {\n                        ...componentStyles,\n                        pb: 1\n                    },\n                    children: item === null || item === void 0 ? void 0 : item.component\n                }, index, false, {\n                    fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, undefined);\n            case \"divider\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    sx: {\n                        ...componentStyles\n                    },\n                    variant: \"fullWidth\"\n                }, index, false, {\n                    fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, undefined);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                onClick: handleClick,\n                size: \"small\",\n                sx: {\n                    ...menuButtonSxProps\n                },\n                \"aria-controls\": open ? \"\".concat(ariaControlLabel, \"-menu\") : undefined,\n                \"aria-haspopup\": \"true\",\n                \"aria-expanded\": open ? \"true\" : undefined,\n                children: menuButton || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"circular\",\n                    sx: {\n                        width: 36,\n                        height: 36,\n                        backgroundColor: \"transparent\"\n                    },\n                    children: menuButtonIcon || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaUser, {\n                        color: open ? _configs_theme_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].palette.backgroundColor.primary : _configs_theme_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].palette.backgroundColor.secondary\n                    }, void 0, false, {\n                        fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                        lineNumber: 143,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                    lineNumber: 134,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                anchorEl: anchorEl,\n                id: \"\".concat(ariaControlLabel, \"-menu\"),\n                open: open,\n                onClose: handleClose,\n                PaperProps: {\n                    elevation: 0,\n                    sx: {\n                        overflow: \"visible\",\n                        filter: \"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))\",\n                        minWidth: \"200px\",\n                        padding: \"12px 12px 6px 12px\",\n                        mt: 2.5,\n                        \"& .MuiAvatar-root\": {\n                            width: 32,\n                            height: 32,\n                            ml: -0.5,\n                            mr: 1\n                        },\n                        \"&::before\": {\n                            content: '\"\"',\n                            display: \"block\",\n                            position: \"absolute\",\n                            top: 0,\n                            right: 14,\n                            width: 10,\n                            height: 10,\n                            bgcolor: \"background.paper\",\n                            transform: \"translateY(-50%) rotate(45deg)\",\n                            zIndex: 0\n                        },\n                        \"@media(min-width:768px)\": {\n                            padding: \"14px 14px 8px 14px\",\n                            width: \"200px\"\n                        }\n                    }\n                },\n                transformOrigin: {\n                    horizontal: \"right\",\n                    vertical: \"top\"\n                },\n                anchorOrigin: {\n                    horizontal: \"right\",\n                    vertical: \"bottom\"\n                },\n                children: menuDataArray === null || menuDataArray === void 0 ? void 0 : menuDataArray.map(renderMenuItem)\n            }, void 0, false, {\n                fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DropdownMenu, \"+aMDa7FPcESUyQDF1vq0RSMn4/k=\");\n_c = DropdownMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownMenu);\nvar _c;\n$RefreshReg$(_c, \"DropdownMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9kcm9wZG93bnMvZHJvcGRvd24tbWVudS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDMEM7QUFTbkI7QUFDRztBQUNlO0FBRXpDLE1BQU1VLGVBQWU7UUFBQyxFQUNwQkMsbUJBQW1CLFNBQVMsRUFDNUJDLFVBQVUsRUFDVkMsY0FBYyxFQUNkQyxpQkFBaUIsRUFDakJDLGdCQUFnQjtRQUNkO1lBQ0VDLFVBQVU7WUFDVkMseUJBQVcsOERBQUNSLGlGQUFNQTs7Ozs7WUFDbEJTLGVBQWUsSUFBTUMsUUFBUUMsR0FBRyxDQUFDO1lBQ2pDQyxpQkFBaUI7Z0JBQUVDLFFBQVE7WUFBZ0I7UUFDN0M7UUFDQTtZQUNFQyxPQUFPO1lBQ1BDLDRCQUFjLDhEQUFDZixpRkFBTUE7Ozs7O1lBQ3JCUyxlQUFlLElBQU1DLFFBQVFDLEdBQUcsQ0FBQztZQUNqQ0ssZ0JBQWdCO2dCQUFFSCxRQUFRO1lBQWdCO1FBQzVDO1FBQ0E7WUFDRU4sVUFBVTtRQUNaO0tBQ0QsRUFDRjs7SUFDQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR25CLHFEQUFjLENBQUM7SUFDL0MsTUFBTXFCLE9BQU9DLFFBQVFKO0lBRXJCLE1BQU1LLGNBQWMsQ0FBQ0M7UUFDbkJMLFlBQVlLLE1BQU1DLGFBQWE7SUFDakM7SUFFQSxNQUFNQyxjQUFjO1FBQ2xCUCxZQUFZO0lBQ2Q7SUFFQSxNQUFNUSxpQkFBaUIsQ0FBQ0MsTUFBTUM7UUFDNUIsTUFBTSxFQUNKckIsV0FBVyxXQUFXLEVBQ3RCUSxZQUFZLEVBQ1pjLHFCQUFxQixLQUFLLEVBQzFCZixRQUFRLEVBQUUsRUFDVkwsZ0JBQWdCcUIsU0FBUyxFQUN6QmQsaUJBQWlCLENBQUMsQ0FBQyxFQUNuQkosa0JBQWtCLENBQUMsQ0FBQyxFQUNyQixHQUFHZTtRQUVKLE9BQVFwQjtZQUNOLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNULG9JQUFRQTtvQkFFUGlDLElB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QWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Ryb3Bkb3ducy9kcm9wZG93bi1tZW51LmpzeD9kNTI5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIkAvY29uZmlncy90aGVtZS90aGVtZVwiO1xyXG5pbXBvcnQge1xyXG4gIEF2YXRhcixcclxuICBCb3gsXHJcbiAgRGl2aWRlcixcclxuICBJY29uQnV0dG9uLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBNZW51LFxyXG4gIE1lbnVJdGVtLFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFVc2VyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xyXG5cclxuY29uc3QgRHJvcGRvd25NZW51ID0gKHtcclxuICBhcmlhQ29udHJvbExhYmVsID0gXCJhY2NvdW50XCIsXHJcbiAgbWVudUJ1dHRvbixcclxuICBtZW51QnV0dG9uSWNvbixcclxuICBtZW51QnV0dG9uU3hQcm9wcyxcclxuICBtZW51RGF0YUFycmF5ID0gW1xyXG4gICAge1xyXG4gICAgICBtZW51SXRlbTogXCJjb21wb25lbnRcIixcclxuICAgICAgY29tcG9uZW50OiA8RmFVc2VyIC8+LFxyXG4gICAgICBoYW5kbGVPbkNsaWNrOiAoKSA9PiBjb25zb2xlLmxvZyhcIm9uQ2xpY2tcIiksXHJcbiAgICAgIGNvbXBvbmVudFN0eWxlczogeyBib3JkZXI6IFwiMXB4IHNvbGlkIHJlZFwiIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJQcm9maWxlXCIsXHJcbiAgICAgIGxpc3RJdGVtSWNvbjogPEZhVXNlciAvPixcclxuICAgICAgaGFuZGxlT25DbGljazogKCkgPT4gY29uc29sZS5sb2coXCJvbkNsaWNrXCIpLFxyXG4gICAgICBtZW51SXRlbVN0eWxlczogeyBib3JkZXI6IFwiMXB4IHNvbGlkIHJlZFwiIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtZW51SXRlbTogXCJkaXZpZGVyXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pID0+IHtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTWVudUl0ZW0gPSAoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbWVudUl0ZW0gPSBcImxpc3QtaXRlbVwiLFxyXG4gICAgICBsaXN0SXRlbUljb24sXHJcbiAgICAgIGxpc3RJdGVtSWNvbkF2YXRhciA9IGZhbHNlLFxyXG4gICAgICB0aXRsZSA9IFwiXCIsXHJcbiAgICAgIGhhbmRsZU9uQ2xpY2sgPSB1bmRlZmluZWQsXHJcbiAgICAgIG1lbnVJdGVtU3R5bGVzID0ge30sXHJcbiAgICAgIGNvbXBvbmVudFN0eWxlcyA9IHt9LFxyXG4gICAgfSA9IGl0ZW07XHJcblxyXG4gICAgc3dpdGNoIChtZW51SXRlbSkge1xyXG4gICAgICBjYXNlIFwibGlzdC1pdGVtXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIG1iOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dENvbG9yLnNlY29uZGFyeSxcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMTJweFwiLFxyXG4gICAgICAgICAgICAgIC4uLm1lbnVJdGVtU3R5bGVzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlT25DbGljaygpO1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgIHtsaXN0SXRlbUljb25BdmF0YXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjgsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5ib3JkZXJDb2xvci5wcmltYXJ5fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bGlzdEl0ZW1JY29ufVxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIGxpc3RJdGVtSWNvblxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSBcImNvbXBvbmVudFwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IHN4PXt7IC4uLmNvbXBvbmVudFN0eWxlcywgcGI6IDEgfX0+XHJcbiAgICAgICAgICAgIHtpdGVtPy5jb21wb25lbnR9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSBcImRpdmlkZXJcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPERpdmlkZXJcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3g9e3sgLi4uY29tcG9uZW50U3R5bGVzIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmdWxsV2lkdGhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIHN4PXt7IC4uLm1lbnVCdXR0b25TeFByb3BzIH19XHJcbiAgICAgICAgYXJpYS1jb250cm9scz17b3BlbiA/IGAke2FyaWFDb250cm9sTGFiZWx9LW1lbnVgIDogdW5kZWZpbmVkfVxyXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gXCJ0cnVlXCIgOiB1bmRlZmluZWR9XHJcbiAgICAgID5cclxuICAgICAgICB7bWVudUJ1dHRvbiB8fCAoXHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjaXJjdWxhclwiXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDM2LFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMzYsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttZW51QnV0dG9uSWNvbiB8fCAoXHJcbiAgICAgICAgICAgICAgPEZhVXNlclxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJhY2tncm91bmRDb2xvci5wcmltYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmRDb2xvci5zZWNvbmRhcnlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgaWQ9e2Ake2FyaWFDb250cm9sTGFiZWx9LW1lbnVgfVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgZWxldmF0aW9uOiAwLFxyXG4gICAgICAgICAgc3g6IHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMHB4IDJweCA4cHggcmdiYSgwLDAsMCwwLjMyKSlcIixcclxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMnB4IDEycHggNnB4IDEycHhcIixcclxuICAgICAgICAgICAgbXQ6IDIuNSxcclxuICAgICAgICAgICAgXCImIC5NdWlBdmF0YXItcm9vdFwiOiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMyLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMzIsXHJcbiAgICAgICAgICAgICAgbWw6IC0wLjUsXHJcbiAgICAgICAgICAgICAgbXI6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiJjo6YmVmb3JlXCI6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxNCxcclxuICAgICAgICAgICAgICB3aWR0aDogMTAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpXCIsXHJcbiAgICAgICAgICAgICAgekluZGV4OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkBtZWRpYShtaW4td2lkdGg6NzY4cHgpXCI6IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE0cHggMTRweCA4cHggMTRweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IGhvcml6b250YWw6IFwicmlnaHRcIiwgdmVydGljYWw6IFwidG9wXCIgfX1cclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgaG9yaXpvbnRhbDogXCJyaWdodFwiLCB2ZXJ0aWNhbDogXCJib3R0b21cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge21lbnVEYXRhQXJyYXk/Lm1hcChyZW5kZXJNZW51SXRlbSl9XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bk1lbnU7XHJcbiJdLCJuYW1lcyI6WyJ0aGVtZSIsIkF2YXRhciIsIkJveCIsIkRpdmlkZXIiLCJJY29uQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTWVudSIsIk1lbnVJdGVtIiwiUmVhY3QiLCJGYVVzZXIiLCJEcm9wZG93bk1lbnUiLCJhcmlhQ29udHJvbExhYmVsIiwibWVudUJ1dHRvbiIsIm1lbnVCdXR0b25JY29uIiwibWVudUJ1dHRvblN4UHJvcHMiLCJtZW51RGF0YUFycmF5IiwibWVudUl0ZW0iLCJjb21wb25lbnQiLCJoYW5kbGVPbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudFN0eWxlcyIsImJvcmRlciIsInRpdGxlIiwibGlzdEl0ZW1JY29uIiwibWVudUl0ZW1TdHlsZXMiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwidXNlU3RhdGUiLCJvcGVuIiwiQm9vbGVhbiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJyZW5kZXJNZW51SXRlbSIsIml0ZW0iLCJpbmRleCIsImxpc3RJdGVtSWNvbkF2YXRhciIsInVuZGVmaW5lZCIsInN4IiwibWIiLCJkaXNwbGF5IiwiZ2FwIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dENvbG9yIiwic2Vjb25kYXJ5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJDb2xvciIsInByaW1hcnkiLCJiZ2NvbG9yIiwicGIiLCJ2YXJpYW50Iiwic2l6ZSIsImFyaWEtY29udHJvbHMiLCJhcmlhLWhhc3BvcHVwIiwiYXJpYS1leHBhbmRlZCIsImJhY2tncm91bmRDb2xvciIsImlkIiwib25DbG9zZSIsIlBhcGVyUHJvcHMiLCJlbGV2YXRpb24iLCJvdmVyZmxvdyIsImZpbHRlciIsIm1pbldpZHRoIiwicGFkZGluZyIsIm10IiwibWwiLCJtciIsImNvbnRlbnQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwidHJhbnNmb3JtIiwiekluZGV4IiwidHJhbnNmb3JtT3JpZ2luIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiYW5jaG9yT3JpZ2luIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/dropdowns/dropdown-menu.jsx\n"));

/***/ })

});