"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.esm.js");
var _import$meta$webpackH;

 // Import Bootstrap


/**
 * app.main
 */

const main = async err => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
      speed: 400,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: ".swiper-dots",
        clickable: true
      }
    });
  } // application code

};
/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */


(0,_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__.domReady)(main);
(_import$meta$webpackH = module.hot) === null || _import$meta$webpackH === void 0 ? void 0 : _import$meta$webpackH.accept(main);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "562d63ed53b61b4e4c81"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.9179db7b3c7edc362aa9.hot-update.js.map