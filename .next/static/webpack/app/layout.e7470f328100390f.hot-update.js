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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _configs_theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/configs/theme/theme */ \"(app-pages-browser)/./src/configs/theme/theme.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Divider,IconButton,ListItemIcon,Menu,MenuItem!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Menu/Menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaUser!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DropdownMenu = (param)=>{\n    let { ariaControlLabel = \"account\", menuButton, menuButtonIcon, menuButtonSxProps, menuDataArray = [\n        {\n            menuItem: \"component\",\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaUser, {}, void 0, false, {\n                fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                lineNumber: 23,\n                columnNumber: 18\n            }, undefined),\n            handleOnClick: ()=>console.log(\"onClick\"),\n            componentStyles: {\n                border: \"1px solid red\"\n            }\n        },\n        {\n            title: \"Profile\",\n            listItemIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaUser, {}, void 0, false, {\n                fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                lineNumber: 29,\n                columnNumber: 21\n            }, undefined),\n            handleOnClick: ()=>console.log(\"onClick\"),\n            menuItemStyles: {\n                border: \"1px solid red\"\n            }\n        },\n        {\n            menuItem: \"divider\"\n        }\n    ] } = param;\n    _s();\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    const renderMenuItem = (item, index)=>{\n        const { menuItem = \"list-item\", listItemIcon, listItemIconAvatar = false, title = \"\", handleOnClick = undefined, menuItemStyles = {}, componentStyles = {} } = item;\n        switch(menuItem){\n            case \"list-item\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sx: {\n                        mb: 1,\n                        display: \"flex\",\n                        gap: \"10px\",\n                        color: _configs_theme_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].palette.textColor.secondary,\n                        fontWeight: \"500\",\n                        fontSize: \"16px\",\n                        lineHeight: \"30px\",\n                        letterSpacing: \"0.12px\",\n                        ...menuItemStyles\n                    },\n                    onClick: ()=>{\n                        handleOnClick();\n                        handleClose();\n                    },\n                    children: [\n                        listItemIconAvatar ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            sx: {\n                                width: 28,\n                                height: 28,\n                                border: \"1px solid \".concat(_configs_theme_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].palette.borderColor.primary),\n                                bgcolor: \"white\"\n                            },\n                            children: listItemIcon\n                        }, void 0, false, {\n                            fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 15\n                        }, undefined) : listItemIcon,\n                        title\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined);\n            case \"component\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    sx: {\n                        ...componentStyles,\n                        pb: 1\n                    },\n                    children: item === null || item === void 0 ? void 0 : item.component\n                }, index, false, {\n                    fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, undefined);\n            case \"divider\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    sx: {\n                        ...componentStyles\n                    },\n                    variant: \"fullWidth\"\n                }, index, false, {\n                    fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, undefined);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                onClick: handleClick,\n                size: \"small\",\n                sx: {\n                    ...menuButtonSxProps\n                },\n                \"aria-controls\": open ? \"\".concat(ariaControlLabel, \"-menu\") : undefined,\n                \"aria-haspopup\": \"true\",\n                \"aria-expanded\": open ? \"true\" : undefined,\n                children: menuButton || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    variant: \"circular\",\n                    sx: {\n                        width: 34,\n                        height: 34,\n                        // bgcolor: theme.palette.backgroundColor.main,\n                        backgroundColor: \"transparent\"\n                    },\n                    children: menuButtonIcon || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaUser, {\n                        color: _configs_theme_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].palette.backgroundColor.primary\n                    }, void 0, false, {\n                        fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                        lineNumber: 141,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                    lineNumber: 131,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Divider_IconButton_ListItemIcon_Menu_MenuItem_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                anchorEl: anchorEl,\n                id: \"\".concat(ariaControlLabel, \"-menu\"),\n                open: open,\n                onClose: handleClose,\n                PaperProps: {\n                    elevation: 0,\n                    sx: {\n                        overflow: \"visible\",\n                        filter: \"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))\",\n                        minWidth: \"200px\",\n                        padding: \"12px 12px 6px 12px\",\n                        mt: 2.5,\n                        \"& .MuiAvatar-root\": {\n                            width: 32,\n                            height: 32,\n                            ml: -0.5,\n                            mr: 1\n                        },\n                        \"&::before\": {\n                            content: '\"\"',\n                            display: \"block\",\n                            position: \"absolute\",\n                            top: 0,\n                            right: 14,\n                            width: 10,\n                            height: 10,\n                            bgcolor: \"background.paper\",\n                            transform: \"translateY(-50%) rotate(45deg)\",\n                            zIndex: 0\n                        },\n                        \"@media(min-width:768px)\": {\n                            padding: \"14px 14px 8px 14px\",\n                            width: \"200px\"\n                        }\n                    }\n                },\n                transformOrigin: {\n                    horizontal: \"right\",\n                    vertical: \"top\"\n                },\n                anchorOrigin: {\n                    horizontal: \"right\",\n                    vertical: \"bottom\"\n                },\n                children: menuDataArray === null || menuDataArray === void 0 ? void 0 : menuDataArray.map(renderMenuItem)\n            }, void 0, false, {\n                fileName: \"D:\\\\outsource\\\\tredella\\\\src\\\\components\\\\common\\\\dropdowns\\\\dropdown-menu.jsx\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DropdownMenu, \"+aMDa7FPcESUyQDF1vq0RSMn4/k=\");\n_c = DropdownMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownMenu);\nvar _c;\n$RefreshReg$(_c, \"DropdownMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9kcm9wZG93bnMvZHJvcGRvd24tbWVudS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDMEM7QUFTbkI7QUFDRztBQUNlO0FBRXpDLE1BQU1VLGVBQWU7UUFBQyxFQUNwQkMsbUJBQW1CLFNBQVMsRUFDNUJDLFVBQVUsRUFDVkMsY0FBYyxFQUNkQyxpQkFBaUIsRUFDakJDLGdCQUFnQjtRQUNkO1lBQ0VDLFVBQVU7WUFDVkMseUJBQVcsOERBQUNSLGlGQUFNQTs7Ozs7WUFDbEJTLGVBQWUsSUFBTUMsUUFBUUMsR0FBRyxDQUFDO1lBQ2pDQyxpQkFBaUI7Z0JBQUVDLFFBQVE7WUFBZ0I7UUFDN0M7UUFDQTtZQUNFQyxPQUFPO1lBQ1BDLDRCQUFjLDhEQUFDZixpRkFBTUE7Ozs7O1lBQ3JCUyxlQUFlLElBQU1DLFFBQVFDLEdBQUcsQ0FBQztZQUNqQ0ssZ0JBQWdCO2dCQUFFSCxRQUFRO1lBQWdCO1FBQzVDO1FBQ0E7WUFDRU4sVUFBVTtRQUNaO0tBQ0QsRUFDRjs7SUFDQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR25CLHFEQUFjLENBQUM7SUFDL0MsTUFBTXFCLE9BQU9DLFFBQVFKO0lBRXJCLE1BQU1LLGNBQWMsQ0FBQ0M7UUFDbkJMLFlBQVlLLE1BQU1DLGFBQWE7SUFDakM7SUFFQSxNQUFNQyxjQUFjO1FBQ2xCUCxZQUFZO0lBQ2Q7SUFFQSxNQUFNUSxpQkFBaUIsQ0FBQ0MsTUFBTUM7UUFDNUIsTUFBTSxFQUNKckIsV0FBVyxXQUFXLEVBQ3RCUSxZQUFZLEVBQ1pjLHFCQUFxQixLQUFLLEVBQzFCZixRQUFRLEVBQUUsRUFDVkwsZ0JBQWdCcUIsU0FBUyxFQUN6QmQsaUJBQWlCLENBQUMsQ0FBQyxFQUNuQkosa0JBQWtCLENBQUMsQ0FBQyxFQUNyQixHQUFHZTtRQUVKLE9BQVFwQjtZQUNOLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNULG9JQUFRQTtvQkFFUGlDLElBQUk7d0JBQ0ZDLElBQUk7d0JBQ0pDLFNBQVM7d0JBQ1RDLEtBQUs7d0JBQ0xDLE9BQU81Qyw0REFBS0EsQ0FBQzZDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTO3dCQUN4Q0MsWUFBWTt3QkFDWkMsVUFBVTt3QkFDVkMsWUFBWTt3QkFDWkMsZUFBZTt3QkFDZixHQUFHMUIsY0FBYztvQkFDbkI7b0JBQ0EyQixTQUFTO3dCQUNQbEM7d0JBQ0FnQjtvQkFDRjs7d0JBRUNJLG1DQUNDLDhEQUFDckMsb0lBQU1BOzRCQUNMdUMsSUFBSTtnQ0FDRmEsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUmhDLFFBQVEsYUFBK0MsT0FBbEN0Qiw0REFBS0EsQ0FBQzZDLE9BQU8sQ0FBQ1UsV0FBVyxDQUFDQyxPQUFPO2dDQUN0REMsU0FBUzs0QkFDWDtzQ0FFQ2pDOzs7Ozt3Q0FHSEE7d0JBRUREOzttQkEvQkljOzs7OztZQW1DWCxLQUFLO2dCQUNILHFCQUNFLDhEQUFDbkMsb0lBQUdBO29CQUFhc0MsSUFBSTt3QkFBRSxHQUFHbkIsZUFBZTt3QkFBRXFDLElBQUk7b0JBQUU7OEJBQzlDdEIsaUJBQUFBLDJCQUFBQSxLQUFNbkIsU0FBUzttQkFEUm9COzs7OztZQUtkLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNsQyxvSUFBT0E7b0JBRU5xQyxJQUFJO3dCQUFFLEdBQUduQixlQUFlO29CQUFDO29CQUN6QnNDLFNBQVE7bUJBRkh0Qjs7Ozs7WUFNWDtnQkFDRSxPQUFPO1FBQ1g7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2pDLG9JQUFVQTtnQkFDVGdELFNBQVNyQjtnQkFDVDZCLE1BQUs7Z0JBQ0xwQixJQUFJO29CQUFFLEdBQUcxQixpQkFBaUI7Z0JBQUM7Z0JBQzNCK0MsaUJBQWVoQyxPQUFPLEdBQW9CLE9BQWpCbEIsa0JBQWlCLFdBQVM0QjtnQkFDbkR1QixpQkFBYztnQkFDZEMsaUJBQWVsQyxPQUFPLFNBQVNVOzBCQUU5QjNCLDRCQUNDLDhEQUFDWCxvSUFBTUE7b0JBQ0wwRCxTQUFRO29CQUNSbkIsSUFBSTt3QkFDRmEsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUiwrQ0FBK0M7d0JBQy9DVSxpQkFBZ0I7b0JBQ2xCOzhCQUVDbkQsZ0NBQ0MsOERBQUNKLGlGQUFNQTt3QkFBQ21DLE9BQU81Qyw0REFBS0EsQ0FBQzZDLE9BQU8sQ0FBQ21CLGVBQWUsQ0FBQ1IsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNNUQsOERBQUNsRCxvSUFBSUE7Z0JBQ0hvQixVQUFVQTtnQkFDVnVDLElBQUksR0FBb0IsT0FBakJ0RCxrQkFBaUI7Z0JBQ3hCa0IsTUFBTUE7Z0JBQ05xQyxTQUFTaEM7Z0JBQ1RpQyxZQUFZO29CQUNWQyxXQUFXO29CQUNYNUIsSUFBSTt3QkFDRjZCLFVBQVU7d0JBQ1ZDLFFBQVE7d0JBQ1JDLFVBQVU7d0JBQ1ZDLFNBQVM7d0JBQ1RDLElBQUk7d0JBQ0oscUJBQXFCOzRCQUNuQnBCLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JvQixJQUFJLENBQUM7NEJBQ0xDLElBQUk7d0JBQ047d0JBQ0EsYUFBYTs0QkFDWEMsU0FBUzs0QkFDVGxDLFNBQVM7NEJBQ1RtQyxVQUFVOzRCQUNWQyxLQUFLOzRCQUNMQyxPQUFPOzRCQUNQMUIsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkcsU0FBUzs0QkFDVHVCLFdBQVc7NEJBQ1hDLFFBQVE7d0JBQ1Y7d0JBQ0EsMkJBQTJCOzRCQUN6QlQsU0FBUzs0QkFDVG5CLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBQ0E2QixpQkFBaUI7b0JBQUVDLFlBQVk7b0JBQVNDLFVBQVU7Z0JBQU07Z0JBQ3hEQyxjQUFjO29CQUFFRixZQUFZO29CQUFTQyxVQUFVO2dCQUFTOzBCQUV2RHJFLDBCQUFBQSxvQ0FBQUEsY0FBZXVFLEdBQUcsQ0FBQ25EOzs7Ozs7OztBQUk1QjtHQWhMTXpCO0tBQUFBO0FBa0xOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9kcm9wZG93bnMvZHJvcGRvd24tbWVudS5qc3g/ZDUyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCJAL2NvbmZpZ3MvdGhlbWUvdGhlbWVcIjtcclxuaW1wb3J0IHtcclxuICBBdmF0YXIsXHJcbiAgQm94LFxyXG4gIERpdmlkZXIsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTWVudSxcclxuICBNZW51SXRlbSxcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZhVXNlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcclxuXHJcbmNvbnN0IERyb3Bkb3duTWVudSA9ICh7XHJcbiAgYXJpYUNvbnRyb2xMYWJlbCA9IFwiYWNjb3VudFwiLFxyXG4gIG1lbnVCdXR0b24sXHJcbiAgbWVudUJ1dHRvbkljb24sXHJcbiAgbWVudUJ1dHRvblN4UHJvcHMsXHJcbiAgbWVudURhdGFBcnJheSA9IFtcclxuICAgIHtcclxuICAgICAgbWVudUl0ZW06IFwiY29tcG9uZW50XCIsXHJcbiAgICAgIGNvbXBvbmVudDogPEZhVXNlciAvPixcclxuICAgICAgaGFuZGxlT25DbGljazogKCkgPT4gY29uc29sZS5sb2coXCJvbkNsaWNrXCIpLFxyXG4gICAgICBjb21wb25lbnRTdHlsZXM6IHsgYm9yZGVyOiBcIjFweCBzb2xpZCByZWRcIiB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUHJvZmlsZVwiLFxyXG4gICAgICBsaXN0SXRlbUljb246IDxGYVVzZXIgLz4sXHJcbiAgICAgIGhhbmRsZU9uQ2xpY2s6ICgpID0+IGNvbnNvbGUubG9nKFwib25DbGlja1wiKSxcclxuICAgICAgbWVudUl0ZW1TdHlsZXM6IHsgYm9yZGVyOiBcIjFweCBzb2xpZCByZWRcIiB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWVudUl0ZW06IFwiZGl2aWRlclwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck1lbnVJdGVtID0gKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1lbnVJdGVtID0gXCJsaXN0LWl0ZW1cIixcclxuICAgICAgbGlzdEl0ZW1JY29uLFxyXG4gICAgICBsaXN0SXRlbUljb25BdmF0YXIgPSBmYWxzZSxcclxuICAgICAgdGl0bGUgPSBcIlwiLFxyXG4gICAgICBoYW5kbGVPbkNsaWNrID0gdW5kZWZpbmVkLFxyXG4gICAgICBtZW51SXRlbVN0eWxlcyA9IHt9LFxyXG4gICAgICBjb21wb25lbnRTdHlsZXMgPSB7fSxcclxuICAgIH0gPSBpdGVtO1xyXG5cclxuICAgIHN3aXRjaCAobWVudUl0ZW0pIHtcclxuICAgICAgY2FzZSBcImxpc3QtaXRlbVwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBtYjogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBnYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHRDb2xvci5zZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjEycHhcIixcclxuICAgICAgICAgICAgICAuLi5tZW51SXRlbVN0eWxlcyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGhhbmRsZU9uQ2xpY2soKTtcclxuICAgICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGlzdEl0ZW1JY29uQXZhdGFyID8gKFxyXG4gICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOCxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOCxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5ib3JkZXJDb2xvci5wcmltYXJ5fWAsXHJcbiAgICAgICAgICAgICAgICAgIGJnY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xpc3RJdGVtSWNvbn1cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBsaXN0SXRlbUljb25cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSBcImNvbXBvbmVudFwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IHN4PXt7IC4uLmNvbXBvbmVudFN0eWxlcywgcGI6IDEgfX0+XHJcbiAgICAgICAgICAgIHtpdGVtPy5jb21wb25lbnR9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSBcImRpdmlkZXJcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPERpdmlkZXJcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3g9e3sgLi4uY29tcG9uZW50U3R5bGVzIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmdWxsV2lkdGhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIHN4PXt7IC4uLm1lbnVCdXR0b25TeFByb3BzIH19XHJcbiAgICAgICAgYXJpYS1jb250cm9scz17b3BlbiA/IGAke2FyaWFDb250cm9sTGFiZWx9LW1lbnVgIDogdW5kZWZpbmVkfVxyXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gXCJ0cnVlXCIgOiB1bmRlZmluZWR9XHJcbiAgICAgID5cclxuICAgICAgICB7bWVudUJ1dHRvbiB8fCAoXHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjaXJjdWxhclwiXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDM0LFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMzQsXHJcbiAgICAgICAgICAgICAgLy8gYmdjb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kQ29sb3IubWFpbixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttZW51QnV0dG9uSWNvbiB8fCAoXHJcbiAgICAgICAgICAgICAgPEZhVXNlciBjb2xvcj17dGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kQ29sb3IucHJpbWFyeX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgIGlkPXtgJHthcmlhQ29udHJvbExhYmVsfS1tZW51YH1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIFBhcGVyUHJvcHM9e3tcclxuICAgICAgICAgIGVsZXZhdGlvbjogMCxcclxuICAgICAgICAgIHN4OiB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgZmlsdGVyOiBcImRyb3Atc2hhZG93KDBweCAycHggOHB4IHJnYmEoMCwwLDAsMC4zMikpXCIsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweCAxMnB4IDZweCAxMnB4XCIsXHJcbiAgICAgICAgICAgIG10OiAyLjUsXHJcbiAgICAgICAgICAgIFwiJiAuTXVpQXZhdGFyLXJvb3RcIjoge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICAgICAgICAgIG1sOiAtMC41LFxyXG4gICAgICAgICAgICAgIG1yOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIiY6OmJlZm9yZVwiOiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICByaWdodDogMTQsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKVwiLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJAbWVkaWEobWluLXdpZHRoOjc2OHB4KVwiOiB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxNHB4IDE0cHggOHB4IDE0cHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyBob3Jpem9udGFsOiBcInJpZ2h0XCIsIHZlcnRpY2FsOiBcInRvcFwiIH19XHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IGhvcml6b250YWw6IFwicmlnaHRcIiwgdmVydGljYWw6IFwiYm90dG9tXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHttZW51RGF0YUFycmF5Py5tYXAocmVuZGVyTWVudUl0ZW0pfVxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25NZW51O1xyXG4iXSwibmFtZXMiOlsidGhlbWUiLCJBdmF0YXIiLCJCb3giLCJEaXZpZGVyIiwiSWNvbkJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIk1lbnUiLCJNZW51SXRlbSIsIlJlYWN0IiwiRmFVc2VyIiwiRHJvcGRvd25NZW51IiwiYXJpYUNvbnRyb2xMYWJlbCIsIm1lbnVCdXR0b24iLCJtZW51QnV0dG9uSWNvbiIsIm1lbnVCdXR0b25TeFByb3BzIiwibWVudURhdGFBcnJheSIsIm1lbnVJdGVtIiwiY29tcG9uZW50IiwiaGFuZGxlT25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnRTdHlsZXMiLCJib3JkZXIiLCJ0aXRsZSIsImxpc3RJdGVtSWNvbiIsIm1lbnVJdGVtU3R5bGVzIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsInVzZVN0YXRlIiwib3BlbiIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwicmVuZGVyTWVudUl0ZW0iLCJpdGVtIiwiaW5kZXgiLCJsaXN0SXRlbUljb25BdmF0YXIiLCJ1bmRlZmluZWQiLCJzeCIsIm1iIiwiZGlzcGxheSIsImdhcCIsImNvbG9yIiwicGFsZXR0ZSIsInRleHRDb2xvciIsInNlY29uZGFyeSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwib25DbGljayIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyQ29sb3IiLCJwcmltYXJ5IiwiYmdjb2xvciIsInBiIiwidmFyaWFudCIsInNpemUiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1oYXNwb3B1cCIsImFyaWEtZXhwYW5kZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpZCIsIm9uQ2xvc2UiLCJQYXBlclByb3BzIiwiZWxldmF0aW9uIiwib3ZlcmZsb3ciLCJmaWx0ZXIiLCJtaW5XaWR0aCIsInBhZGRpbmciLCJtdCIsIm1sIiwibXIiLCJjb250ZW50IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsInRyYW5zZm9ybSIsInpJbmRleCIsInRyYW5zZm9ybU9yaWdpbiIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImFuY2hvck9yaWdpbiIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/dropdowns/dropdown-menu.jsx\n"));

/***/ })

});