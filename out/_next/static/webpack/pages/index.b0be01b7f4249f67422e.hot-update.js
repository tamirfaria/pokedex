self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/body/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/body/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body.module.scss */ "./src/pages/body/body.module.scss");
/* harmony import */ var _body_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_body_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Lucas Tamir\\Documents\\Pessoal\\pokedex\\src\\pages\\body\\index.tsx",
    _this = undefined;





var Body = function Body(props) {
  var pokemons = props.pokemons;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cards),
      children: pokemons.map(function (pokemon) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_body_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContent),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/pokemon/".concat(pokemon.entry_number),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [pokemon.entry_number, " - ", pokemon.pokemon_species.name]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)
        }, pokemon.entry_number, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_c = Body;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Body);

var _c;

$RefreshReg$(_c, "Body");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2JvZHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkJvZHkiLCJwcm9wcyIsInBva2Vtb25zIiwic3R5bGVzIiwibWFwIiwicG9rZW1vbiIsImVudHJ5X251bWJlciIsInBva2Vtb25fc3BlY2llcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTs7QUFvQkEsSUFBTUEsSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBLE1BQ3RDQyxRQURzQyxHQUN6QkQsS0FEeUIsQ0FDdENDLFFBRHNDO0FBRTlDLHNCQUNFO0FBQVMsYUFBUyxFQUFFQyxvRUFBcEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsZ0VBQWhCO0FBQUEsZ0JBQ0dELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSw0QkFDWjtBQUFLLG1CQUFTLEVBQUVGLCtEQUFoQjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUEsc0VBQWhCO0FBQUEsbUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxxQkFBY0UsT0FBTyxDQUFDQyxZQUF0QixDQUFWO0FBQUEscUNBQ0U7QUFBQSx1Q0FDRTtBQUFBLDZCQUFJRCxPQUFPLENBQUNDLFlBQVosU0FBNkJELE9BQU8sQ0FBQ0UsZUFBUixDQUF3QkMsSUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBa0NILE9BQU8sQ0FBQ0MsWUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWTtBQUFBLE9BQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBbkJEOztLQUFNTixJOztBQXFCTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMGJlMDFiN2Y0MjQ5ZjY3NDIyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAndHlwZXMvcG9rZW1vbnMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JvZHkubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yLycpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHBva2Vtb25zT2JqZWN0KSA9PiB7XHJcbiAgICAgIHJldHVybiBwb2tlbW9uc09iamVjdC5wb2tlbW9uX2VudHJpZXNcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb2tlbW9uc1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgQm9keTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcG9rZW1vbnMgfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9PlxyXG4gICAgICAgIHtwb2tlbW9ucy5tYXAoKHBva2Vtb24pID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0ga2V5PXtwb2tlbW9uLmVudHJ5X251bWJlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9rZW1vbi8ke3Bva2Vtb24uZW50cnlfbnVtYmVyfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntwb2tlbW9uLmVudHJ5X251bWJlcn0gLSB7cG9rZW1vbi5wb2tlbW9uX3NwZWNpZXMubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==