import {domReady} from '@roots/sage/client';

// Import Bootstrap
import 'bootstrap';

/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  if (document.querySelector('.swiper')) {
    $(".swiper a").off("mousedown").on("mousedown", function (e) { e.preventDefault(); e.stopImmediatePropagation(); });
  }
  
  // application code
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
        clickable: true,
      },
    });
  }

  document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth + 1) + "px");

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
          prevEl: navPrev,
        },
      });
    });
  }

  if ($('.products-catalog .products-pagination').length) { 
    $('.products-catalog .products-pagination .products-per-page-btns .products-nav .btn').click(function() {
      if (!$(this).hasClass('current')) {
        $('.products-catalog .products-pagination .products-per-page-btns .products-nav .btn.current').removeClass('current');
        $(this).addClass('current');
        let num = $(this).data('value');
        console.log(num);
        $('.products-per-page select').val(num).change();
      }
    });

    const currentNum = $('.products-per-page select').find(":selected").val();
    $('.products-catalog .products-pagination .products-per-page-btns .products-nav .btn.current').removeClass('current');
    $('.products-catalog .products-pagination .products-per-page-btns .products-nav .btn[data-value="' + currentNum + '"]').addClass('current');
  }

  $('.open-search-btn').click(function (e) {
    console.log('click');
    let search = $(this).next();
    if (!search.hasClass('active')) {
      search.addClass('active');
      search.find('input').focus();
    }
    else {
      search.removeClass('active');
    }
  })

  function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
  }

  function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
        return unescape(y);
      }
    }
  }

  if ($('.products-view').length) {
    const gridSetting = getCookie('woo_products_grid');
    if (gridSetting !== undefined) {
      let curr = $('.products-view .products-nav .btn.current').data('value');
      if (curr !== gridSetting) {
        $('.products-view .products-nav .btn.current').removeClass('current');
        $('.products-view .products-nav .btn[data-value="' + gridSetting + '"]').addClass('current');
        let classList = $('.products-catalog .products-grid').attr("class").split(/\s+/);
        for (let i = 0; i < classList.length; i++) {
          if (classList[i] !== 'products-grid') {
            let currClass = classList[i];
            $('.products-catalog .products-grid').removeClass(currClass);
            $('.products-catalog .products-grid').addClass(gridSetting);
          }
        }
      }
    }

    $('.products-view .products-nav .btn').click(function () {
      if (!$(this).hasClass('current')) {
        $('.products-view .products-nav .btn.current').removeClass('current');
        $(this).addClass('current');
        let newVal = $(this).data('value');
        let classList = $('.products-catalog .products-grid').attr("class").split(/\s+/);
        for (let i = 0; i < classList.length; i++) {
          if (classList[i] !== 'products-grid') {
            let curr = classList[i];
            $('.products-catalog .products-grid').removeClass(curr);
            $('.products-catalog .products-grid').addClass(newVal);
            setCookie('woo_products_grid', newVal, 365);
          }
        }
      }
    });
  }
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);
