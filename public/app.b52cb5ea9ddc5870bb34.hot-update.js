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
    /*
    let allLinks = document.querySelectorAll('.swiper a');
    allLinks.forEach(link => {
      link.removeEventListener("mousedown").addEventListent("mousedown", function (e) {
        e.preventDefault(); e.stopImmediatePropagation();
      });
    });*/
    jQuery(".swiper").find("a").off("mousedown").on("mousedown", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
    });
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
/******/ 	__webpack_require__.h = function() { return "6d8ec6af3b6bed7d9ace"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.b52cb5ea9ddc5870bb34.hot-update.js.map