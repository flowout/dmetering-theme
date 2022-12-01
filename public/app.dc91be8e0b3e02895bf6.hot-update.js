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
  } // application code


  if (document.querySelector('.hero-slider')) {
    const swiper = new Swiper('.hero-slider', {
      speed: 400,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-dots",
        clickable: true
      }
    });
  }

  if (document.querySelector('.products-slider')) {
    let allSliders = document.querySelectorAll('.products-slider');
    allSliders.forEach(sliderWrapper => {
      let slider = sliderWrapper.querySelector(".slider");
      let navNext = sliderWrapper.querySelector(".slider__navigation-next");
      let navPrev = sliderWrapper.querySelector(".slider__navigation-prev");
      const swiper = new Swiper(slider, {
        speed: 400,
        slidesPerView: 'auto',
        loop: false,
        shortSwipes: false,
        watchSlideProgress: true,
        navigation: {
          nextEl: navNext,
          prevEl: navPrev
        }
      });
    });
  }
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
/******/ 	__webpack_require__.h = function() { return "007218f1837728138878"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.dc91be8e0b3e02895bf6.hot-update.js.map