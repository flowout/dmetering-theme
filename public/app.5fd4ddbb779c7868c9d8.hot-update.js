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
    jQuery(".swiper a").off("mousedown").on("mousedown", function (e) {
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

  document.documentElement.style.setProperty('--scrollbar-width', window.innerWidth - document.documentElement.clientWidth + 1 + "px");

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

  jQuery('.products-catalog .products-pagination .products-per-page-btns .products-nav .btn').click(function () {
    if (!jQuery(this).hasClass('current')) {
      jQuery('.products-catalog .products-pagination .products-per-page-btns .products-nav .btn.current').removeClass('current');
      jQuery(this).addClass('current');
      let num = jQuery(this).data('value');
      console.log(num);
      jQuery('.products-per-page select').val(num).change();
    }
  });
  const currentNum = jQuery('.products-per-page select').find(":selected").val();
  jQuery('.products-catalog .products-pagination .products-per-page-btns .products-nav .btn.current').removeClass('current');
  jQuery('.products-catalog .products-pagination .products-per-page-btns .products-nav .btn[data-value="' + currentNum + '"]').addClass('current');

  function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
  }

  function getCookie(c_name) {
    var i,
        x,
        y,
        ARRcookies = document.cookie.split(";");

    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");

      if (x == c_name) {
        return unescape(y);
      }
    }
  }

  const gridSetting = getCookie('woo_products_grid');

  if (gridSetting !== undefined) {
    let curr = jQuery('.products-view .products-nav .btn.current').data('value');

    if (curr !== gridSetting) {
      jQuery('.products-view .products-nav .btn.current').removeClass('current');
      jQuery('.products-view .products-nav .btn[data-value="' + gridSetting + '"]').addClass('current');
      let classList = jQuery('.products-catalog .products-grid').attr("class").split(/\s+/);

      for (let i = 0; i < classList.length; i++) {
        if (classList[i] !== 'products-grid') {
          let currClass = classList[i];
          jQuery('.products-catalog .products-grid').removeClass(currClass);
          jQuery('.products-catalog .products-grid').addClass(gridSetting);
        }
      }
    }
  }

  jQuery('.products-view .products-nav .btn').click(function () {
    if (!jQuery(this).hasClass('current')) {
      jQuery('.products-view .products-nav .btn.current').removeClass('current');
      jQuery(this).addClass('current');
      let newVal = jQuery(this).data('value');
      let classList = jQuery('.products-catalog .products-grid').attr("class").split(/\s+/);

      for (let i = 0; i < classList.length; i++) {
        if (classList[i] !== 'products-grid') {
          let curr = classList[i];
          jQuery('.products-catalog .products-grid').removeClass(curr);
          jQuery('.products-catalog .products-grid').addClass(newVal);
          setCookie('woo_products_grid', newVal, 365);
        }
      }
    }
  });
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
/******/ 	__webpack_require__.h = function() { return "9f273dcd89f791f40586"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.5fd4ddbb779c7868c9d8.hot-update.js.map