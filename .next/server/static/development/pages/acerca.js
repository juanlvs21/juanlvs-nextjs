module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SideBar.js":
/*!*******************************!*\
  !*** ./components/SideBar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/juanl/Proyectos/React/portafolio/components/SideBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class SideBar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    // Ancho credits
    const sidebar = document.querySelector('.sidebar');
    const credits = document.querySelector('.credits');
    credits.style.width = `${sidebar.clientWidth}px`;
  }

  render() {
    const year = new Date().getFullYear();
    console.log;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("aside", {
      className: "jsx-667393261" + " " + "sidebar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-667393261" + " " + "text-center title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("img", {
      src: "/static/img/avatar.jpg",
      alt: "Juan Villarroel",
      className: "jsx-667393261" + " " + "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("h4", {
      className: "jsx-667393261",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Juan Villarroel"), __jsx("span", {
      className: "jsx-667393261",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Desarrollador Web")), __jsx("div", {
      className: "jsx-667393261" + " " + "mt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("ul", {
      className: "jsx-667393261" + " " + "nav flex-column text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-667393261" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-667393261" + " " + ('nav-link ' + (this.props.route == '/' ? 'active' : ' ') || false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Inicio"))), __jsx("li", {
      className: "jsx-667393261" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/acerca",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-667393261" + " " + ('nav-link ' + (this.props.route == '/acerca' ? 'active' : ' ') || false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "\xBFQuien soy?"))), __jsx("li", {
      className: "jsx-667393261" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/certificaciones",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-667393261" + " " + ('nav-link ' + (this.props.route == '/certificaciones' ? 'active' : ' ') || false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Certificaciones"))), __jsx("li", {
      className: "jsx-667393261" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/contacto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-667393261" + " " + ('nav-link ' + (this.props.route == '/contacto' ? 'active' : ' ') || false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Contacto"))))), __jsx("div", {
      className: "jsx-667393261" + " " + "credits text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-667393261",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, year, " \xA9 Todos los derechos reservados"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "667393261",
      __self: this
    }, ".sidebar.jsx-667393261{height:100vh;color:#fff;background-color:#00a78c;}.avatar.jsx-667393261{margin:20px;width:40%;border-radius:50%;}.title.jsx-667393261 h4.jsx-667393261{font-weight:bold;}.nav.jsx-667393261 a.jsx-667393261{color:#fff;}.nav-item.jsx-667393261 .active.jsx-667393261{background-color:#ffffff21;margin:5px 10%;font-weight:800;border-radius:20px;height:40px;}.nav-link.jsx-667393261:hover{font-weight:800;}.credits.jsx-667393261{position:fixed;bottom:0;padding:5px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW5sL1Byb3llY3Rvcy9SZWFjdC9wb3J0YWZvbGlvL2NvbXBvbmVudHMvU2lkZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRm9CLEFBRzBCLEFBTUQsQUFLSyxBQUdOLEFBR2dCLEFBT1gsQUFHRCxXQVpqQixDQVJZLENBTkMsRUEyQkYsQ0FIWCxDQWJBLEtBSm9CLEVBTk8sQUEyQlIsR0FYRixhQVRqQixDQXFCQSxDQVhrQixPQWZsQixTQWdCcUIsbUJBQ1AsWUFDZCIsImZpbGUiOiIvaG9tZS9qdWFubC9Qcm95ZWN0b3MvUmVhY3QvcG9ydGFmb2xpby9jb21wb25lbnRzL1NpZGVCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIEFuY2hvIGNyZWRpdHNcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAgIGNvbnN0IGNyZWRpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlZGl0cycpXG4gICAgY3JlZGl0cy5zdHlsZS53aWR0aCA9IGAke3NpZGViYXIuY2xpZW50V2lkdGh9cHhgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnNvbGUubG9nXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRpdGxlXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2F2YXRhci5qcGdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICBhbHQ9XCJKdWFuIFZpbGxhcnJvZWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoND5KdWFuIFZpbGxhcnJvZWw8L2g0PlxuICAgICAgICAgICAgPHNwYW4+RGVzYXJyb2xsYWRvciBXZWI8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGZsZXgtY29sdW1uIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICduYXYtbGluayAnICsgKHRoaXMucHJvcHMucm91dGUgPT0gJy8nID8gJ2FjdGl2ZScgOiAnICcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSW5pY2lvXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjZXJjYVwiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAnbmF2LWxpbmsgJyArXG4gICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMucm91dGUgPT0gJy9hY2VyY2EnID8gJ2FjdGl2ZScgOiAnICcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgwr9RdWllbiBzb3k/XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NlcnRpZmljYWNpb25lc1wiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAnbmF2LWxpbmsgJyArXG4gICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMucm91dGUgPT0gJy9jZXJ0aWZpY2FjaW9uZXMnID8gJ2FjdGl2ZScgOiAnICcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2VydGlmaWNhY2lvbmVzXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RvXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICduYXYtbGluayAnICtcbiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5yb3V0ZSA9PSAnL2NvbnRhY3RvJyA/ICdhY3RpdmUnIDogJyAnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3RvXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWRpdHMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPnt5ZWFyfSDCqSBUb2RvcyBsb3MgZGVyZWNob3MgcmVzZXJ2YWRvczwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE3OGM7XG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICMxMDYzMzk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2IGEge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtaXRlbSAuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWxpbmsgOmhvdmVyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jcmVkaXRzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhclxuIl19 */\n/*@ sourceURL=/home/juanl/Proyectos/React/portafolio/components/SideBar.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./layouts/Default.js":
/*!****************************!*\
  !*** ./layouts/Default.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SideBar */ "./components/SideBar.js");
/* harmony import */ var _static_css_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/css/nprogress.css */ "./static/css/nprogress.css");
/* harmony import */ var _static_css_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_css_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/juanl/Proyectos/React/portafolio/layouts/Default.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // Components

 // Styles

 // Nprogress

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done());
class Default extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    if (false) {}
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-3094227809",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, this.props.title, " | Juan Villarroel")), __jsx("div", {
      className: "jsx-3094227809" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3094227809" + " " + "col-md-3 sin-padding",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(_components_SideBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      route: this.props.route,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3094227809" + " " + "col-md-9 sin-padding scroll-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3094227809",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, this.props.children))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3094227809",
      __self: this
    }, "body{overflow:hidden;}.sin-padding.jsx-3094227809{padding:0px !important;}.scroll-container.jsx-3094227809{height:100vh;overflow-y:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW5sL1Byb3llY3Rvcy9SZWFjdC9wb3J0YWZvbGlvL2xheW91dHMvRGVmYXVsdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q29CLEFBRzZCLEFBR08sQUFHVixhQUNLLEdBTnBCLE9BR0EsUUFJQSIsImZpbGUiOiIvaG9tZS9qdWFubC9Qcm95ZWN0b3MvUmVhY3QvcG9ydGFmb2xpby9sYXlvdXRzL0RlZmF1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlQmFyJ1xuXG4vLyBTdHlsZXNcbmltcG9ydCAnLi4vc3RhdGljL2Nzcy9ucHJvZ3Jlc3MuY3NzJ1xuXG4vLyBOcHJvZ3Jlc3NcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCB1cmwgPT4ge1xuICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YClcbiAgTlByb2dyZXNzLnN0YXJ0KClcbn0pXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBqUXVlcnlcbiAgICAgIHJlcXVpcmUoJ2pxdWVyeScpXG4gICAgICAvLyBCb290c3RyYXBcbiAgICAgIHJlcXVpcmUoJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycpXG4gICAgICByZXF1aXJlKCdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlJylcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLnRpdGxlfSB8IEp1YW4gVmlsbGFycm9lbDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIHNpbi1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8U2lkZUJhciByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05IHNpbi1wYWRkaW5nIHNjcm9sbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2luLXBhZGRpbmcge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY3JvbGwtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/juanl/Proyectos/React/portafolio/layouts/Default.js */"));
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/acerca.js":
/*!*************************!*\
  !*** ./pages/acerca.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Default */ "./layouts/Default.js");
var _jsxFileName = "/home/juanl/Proyectos/React/portafolio/pages/acerca.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // Layout



const acerca = ({
  url
}) => {
  // const data = [{x: '2016-12-25', y: 20}, {x: '2016-12-26', y: 10}]
  const data = {
    labels: ['HTML', 'JavaScript', 'ReactJS', 'Angular', 'VueJS', 'ExpressJS', 'Django', 'Laravel'],
    datasets: [{
      label: 'Conocimientos (Porcentaje)',
      backgroundColor: '#00a78c',
      borderColor: '#004b50',
      borderWidth: 1,
      hoverBackgroundColor: '#004a4f',
      hoverBorderColor: '#8bc34a',
      data: [90, 90, 70, 60, 70, 60, 40, 50, 100, 0]
    }]
  };
  return __jsx(_layouts_Default__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "\xBFQuien soy?",
    route: url.pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3358295722" + " " + "about-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3358295722" + " " + "row pt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3358295722" + " " + "col text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3358295722",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "\xBFQui\xE9n soy?"))), __jsx("div", {
    className: "jsx-3358295722" + " " + "row text mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3358295722" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-3358295722",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Soy Juan Villarroel, venezolano estudiante de Licenciatura en Inform\xE1tica. Siempre he tenido como h\xE1bitat natural el entorno de la programaci\xF3n web, tanto a nivel informativo como laboral. En el transcurso de mi carrera universitaria siempre he buscado informaci\xF3n adicional relacionada al dise\xF1o web, he realizado varios proyectos por hobbie. Adicionalmente poseo conocimientos pr\xE1cticos en el uso de Photoshop siendo un gran apoyo en el dise\xF1o de alg\xFAn proyecto. Me considero una persona con compromiso, y por poner mucho empe\xF1o en las cosas hago, programar para mi se vuelve entretenido, me divierte, me emociona. Es por eso que cuando se trata de programar siempre doy el 200% de mi y as\xED enfrentar todas las dificultades al momento de proponerme algo."))), __jsx("div", {
    className: "jsx-3358295722" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3358295722" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3358295722" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3358295722" + " " + "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["HorizontalBar"], {
    options: {
      responsive: true
    },
    height: 100,
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3358295722",
    __self: undefined
  }, ".text.jsx-3358295722 p.jsx-3358295722{text-align:justify;}.about-container.jsx-3358295722{background-image:url(/static/img/tools.png);background-size:cover;background-position:center;background-repeat:no-repeat;color:#fff;height:100vh;padding:0px 30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW5sL1Byb3llY3Rvcy9SZWFjdC9wb3J0YWZvbGlvL3BhZ2VzL2FjZXJjYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RWtCLEFBRzhCLEFBR3lCLG1CQUY5Qyx5QkFHd0Isc0JBQ0ssMkJBQ0MsNEJBQ2pCLFdBQ0UsYUFDSSxpQkFDbkIiLCJmaWxlIjoiL2hvbWUvanVhbmwvUHJveWVjdG9zL1JlYWN0L3BvcnRhZm9saW8vcGFnZXMvYWNlcmNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtIb3Jpem9udGFsQmFyfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXG5cbi8vIExheW91dFxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0RlZmF1bHQnXG5cbmNvbnN0IGFjZXJjYSA9ICh7dXJsfSkgPT4ge1xuICAvLyBjb25zdCBkYXRhID0gW3t4OiAnMjAxNi0xMi0yNScsIHk6IDIwfSwge3g6ICcyMDE2LTEyLTI2JywgeTogMTB9XVxuICBjb25zdCBkYXRhID0ge1xuICAgIGxhYmVsczogW1xuICAgICAgJ0hUTUwnLFxuICAgICAgJ0phdmFTY3JpcHQnLFxuICAgICAgJ1JlYWN0SlMnLFxuICAgICAgJ0FuZ3VsYXInLFxuICAgICAgJ1Z1ZUpTJyxcbiAgICAgICdFeHByZXNzSlMnLFxuICAgICAgJ0RqYW5nbycsXG4gICAgICAnTGFyYXZlbCdcbiAgICBdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQ29ub2NpbWllbnRvcyAoUG9yY2VudGFqZSknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDBhNzhjJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDA0YjUwJyxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiAnIzAwNGE0ZicsXG4gICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICcjOGJjMzRhJyxcbiAgICAgICAgZGF0YTogWzkwLCA5MCwgNzAsIDYwLCA3MCwgNjAsIDQwLCA1MCwgMTAwLCAwXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIsK/UXVpZW4gc295P1wiIHJvdXRlPXt1cmwucGF0aG5hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDE+wr9RdWnDqW4gc295PzwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0IG10LTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFNveSBKdWFuIFZpbGxhcnJvZWwsIHZlbmV6b2xhbm8gZXN0dWRpYW50ZSBkZSBMaWNlbmNpYXR1cmEgZW5cbiAgICAgICAgICAgICAgSW5mb3Jtw6F0aWNhLiBTaWVtcHJlIGhlIHRlbmlkbyBjb21vIGjDoWJpdGF0IG5hdHVyYWwgZWwgZW50b3JubyBkZVxuICAgICAgICAgICAgICBsYSBwcm9ncmFtYWNpw7NuIHdlYiwgdGFudG8gYSBuaXZlbCBpbmZvcm1hdGl2byBjb21vIGxhYm9yYWwuIEVuIGVsXG4gICAgICAgICAgICAgIHRyYW5zY3Vyc28gZGUgbWkgY2FycmVyYSB1bml2ZXJzaXRhcmlhIHNpZW1wcmUgaGUgYnVzY2Fkb1xuICAgICAgICAgICAgICBpbmZvcm1hY2nDs24gYWRpY2lvbmFsIHJlbGFjaW9uYWRhIGFsIGRpc2XDsW8gd2ViLCBoZSByZWFsaXphZG9cbiAgICAgICAgICAgICAgdmFyaW9zIHByb3llY3RvcyBwb3IgaG9iYmllLiBBZGljaW9uYWxtZW50ZSBwb3NlbyBjb25vY2ltaWVudG9zXG4gICAgICAgICAgICAgIHByw6FjdGljb3MgZW4gZWwgdXNvIGRlIFBob3Rvc2hvcCBzaWVuZG8gdW4gZ3JhbiBhcG95byBlbiBlbCBkaXNlw7FvXG4gICAgICAgICAgICAgIGRlIGFsZ8O6biBwcm95ZWN0by4gTWUgY29uc2lkZXJvIHVuYSBwZXJzb25hIGNvbiBjb21wcm9taXNvLCB5IHBvclxuICAgICAgICAgICAgICBwb25lciBtdWNobyBlbXBlw7FvIGVuIGxhcyBjb3NhcyBoYWdvLCBwcm9ncmFtYXIgcGFyYSBtaSBzZSB2dWVsdmVcbiAgICAgICAgICAgICAgZW50cmV0ZW5pZG8sIG1lIGRpdmllcnRlLCBtZSBlbW9jaW9uYS4gRXMgcG9yIGVzbyBxdWUgY3VhbmRvIHNlXG4gICAgICAgICAgICAgIHRyYXRhIGRlIHByb2dyYW1hciBzaWVtcHJlIGRveSBlbCAyMDAlIGRlIG1pIHkgYXPDrSBlbmZyZW50YXIgdG9kYXNcbiAgICAgICAgICAgICAgbGFzIGRpZmljdWx0YWRlcyBhbCBtb21lbnRvIGRlIHByb3BvbmVybWUgYWxnby5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxIb3Jpem9udGFsQmFyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7cmVzcG9uc2l2ZTogdHJ1ZX19XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRleHQgcCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgfVxuICAgICAgICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWcvdG9vbHMucG5nKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY2VyY2FcbiJdfQ== */\n/*@ sourceURL=/home/juanl/Proyectos/React/portafolio/pages/acerca.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (acerca);

/***/ }),

/***/ "./static/css/nprogress.css":
/*!**********************************!*\
  !*** ./static/css/nprogress.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/acerca.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/juanl/Proyectos/React/portafolio/pages/acerca.js */"./pages/acerca.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=acerca.js.map