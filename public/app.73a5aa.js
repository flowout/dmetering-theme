"use strict";(self.webpackChunksage=self.webpackChunksage||[]).push([[143],{683:function(t,e,r){var s=r(194),o=(r(169),r(567));const c=async t=>{if(t&&console.error(t),document.querySelector(".swiper")&&o(".swiper a").off("mousedown").on("mousedown",(function(t){t.preventDefault(),t.stopImmediatePropagation()})),document.querySelector(".hero-slider")&&new Swiper(".hero-slider",{speed:400,effect:"fade",fadeEffect:{crossFade:!0},slidesPerView:1,loop:!0,pagination:{el:".swiper-dots",clickable:!0}}),document.documentElement.style.setProperty("--scrollbar-width",window.innerWidth-document.documentElement.clientWidth+1+"px"),document.querySelector(".products-slider")&&document.querySelectorAll(".products-slider").forEach((t=>{let e=t.querySelector(".slider"),r=t.querySelector(".slider__navigation-next"),s=t.querySelector(".slider__navigation-prev");new Swiper(e,{speed:400,slidesPerView:"auto",loop:!1,shortSwipes:!1,navigation:{nextEl:r,prevEl:s}})})),o(".products-catalog .products-pagination").length){o(".products-catalog .products-pagination .products-per-page-btns .products-nav .btn").click((function(){if(!o(this).hasClass("current")){o(".products-catalog .products-pagination .products-per-page-btns .products-nav .btn.current").removeClass("current"),o(this).addClass("current");let t=o(this).data("value");console.log(t),o(".products-per-page select").val(t).change()}}));const t=o(".products-per-page select").find(":selected").val();o(".products-catalog .products-pagination .products-per-page-btns .products-nav .btn.current").removeClass("current"),o('.products-catalog .products-pagination .products-per-page-btns .products-nav .btn[data-value="'+t+'"]').addClass("current")}function e(t,e,r){var s=new Date;s.setDate(s.getDate()+r);var o=escape(e)+(null==r?"":"; expires="+s.toUTCString());document.cookie=t+"="+o}if(o(".products-view").length){const t=function(t){var e,r,s,o=document.cookie.split(";");for(e=0;e<o.length;e++)if(r=o[e].substr(0,o[e].indexOf("=")),s=o[e].substr(o[e].indexOf("=")+1),"woo_products_grid"==(r=r.replace(/^\s+|\s+$/g,"")))return unescape(s)}();if(void 0!==t&&o(".products-view .products-nav .btn.current").data("value")!==t){o(".products-view .products-nav .btn.current").removeClass("current"),o('.products-view .products-nav .btn[data-value="'+t+'"]').addClass("current");let e=o(".products-catalog .products-grid").attr("class").split(/\s+/);for(let r=0;r<e.length;r++)if("products-grid"!==e[r]){let s=e[r];o(".products-catalog .products-grid").removeClass(s),o(".products-catalog .products-grid").addClass(t)}}o(".products-view .products-nav .btn").click((function(){if(!o(this).hasClass("current")){o(".products-view .products-nav .btn.current").removeClass("current"),o(this).addClass("current");let t=o(this).data("value"),r=o(".products-catalog .products-grid").attr("class").split(/\s+/);for(let s=0;s<r.length;s++)if("products-grid"!==r[s]){let c=r[s];o(".products-catalog .products-grid").removeClass(c),o(".products-catalog .products-grid").addClass(t),e("woo_products_grid",t,365)}}})),o(".open-search-btn").click((function(t){console.log("click");let e=o(this).next();e.hasClass("active")?e.removeClass("active"):(e.addClass("active"),e.find("input").focus())}))}};(0,s.domReady)(c)},190:function(){},567:function(t){t.exports=window.jQuery}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[329],(function(){return e(683),e(190)})),t.O()}]);