"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[13].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[13].use[4]!./resources/styles/app.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n/** Import theme styles */\nbody {\n  font-family: \"Inter\", sans-serif;\n  color: #000;\n}\n.header-top {\n  background-color: #f4f4f4;\n  padding: 4px 0;\n  color: #333;\n}\n.header-top img {\n  margin-left: 20px;\n}\n.header-middle {\n  background-color: #333;\n  color: #f8f8f8;\n  padding: 18px 0;\n}\n.header-middle .nav-search .input-group-text {\n  background-color: white;\n  padding: 8px 4px 8px 16px;\n}\n.header-middle .nav-search input {\n  border-left: 0;\n  padding-left: 0;\n}\nbody#tinymce {\n  margin: 12px !important;\n}", "",{"version":3,"sources":["webpack://./resources/styles/app.scss","webpack://./resources/styles/common/_global.scss","webpack://./resources/styles/common/_variables.scss","webpack://./resources/styles/layouts/_header.scss","webpack://./resources/styles/layouts/_tinymce.scss"],"names":[],"mappings":";AAEA;;;;;EAAA;AAQA,yBAAA;ACRA;EACE,gCAAA;EACA,WCGM;AFIR;AGXA;EACE,yBAAA;EACA,cAAA;EACA,WDGO;AFWT;AGZE;EACE,iBAAA;AHcJ;AGVA;EACE,sBDLO;ECMP,cDVc;ECWd,eAAA;AHaF;AGVI;EACE,uBAAA;EACA,yBAAA;AHYN;AGTI;EACE,cAAA;EACA,eAAA;AHWN;AIlCA;EACE,uBAAA;AJqCF","sourcesContent":["@import \"common/variables\";\n\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n// @import \"~some-node-module\";\n\n/** Import theme styles */\n@import \"common/global\";\n@import \"components/buttons\";\n@import \"components/forms\";\n@import \"layouts/header\";\n@import \"layouts/sidebar\";\n@import \"layouts/footer\";\n@import \"layouts/pages\";\n@import \"layouts/posts\";\n@import \"layouts/tinymce\";\n","@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n\nbody {\n  font-family: \"Inter\", sans-serif;\n  color: $black;\n}\n","$white: #fff;\n$white-smoke: #f4f4f4;\n$white-smoke-2: #f8f8f8;\n$gray: #bfbfbf;\n$dark-gray: #9e9e9e;\n$dark: #212121;\n$dark-1: #333;\n$black: #000;\n$blue-0: #e6eff8;\n$blue-1: #d8e4ec;\n$blue-4: #4b75a0;\n$blue-2: #649bd2;\n$blue-3: #3075b0;\n$blue-5: #265985;\n$yellow-0: #f0eee8;\n$yellow-1: #fff4e3;\n$yellow-2: #ff9500;\n$green: #64BE73;\n$green-1: #CBEDD1;\n$green-2: #26852f;\n$green-hover: rgba(145, 217, 100, 0.5);\n$red: #DB2427;\n$focus-box-shadow: rgba(48, 117, 176, 0.8);\n\n$dot-width: 10px !default;\n$dot-height: 10px !default;\n$dot-radius: $dot-width * 0.5 !default;\n\n$dot-color: $dark-gray !default;\n$dot-bg-color: $dot-color !default;\n$dot-before-color: $dot-color !default;\n$dot-after-color: $dot-color !default;\n\n$dot-spacing: $dot-width + $dot-width * 0.5 !default;\n\n$container-max-widths: (\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200,\n  xxl: 1400px\n) !default;\n\n$container-padding-x: 48px !default;",".header-top {\n  background-color: $white-smoke;\n  padding: 4px 0;\n  color: $dark-1;\n\n  img {\n    margin-left: 20px;\n  }\n}\n\n.header-middle {\n  background-color: $dark-1;\n  color: $white-smoke-2;\n  padding: 18px 0;\n\n  .nav-search {\n    .input-group-text {\n      background-color: white;\n      padding: 8px 4px 8px 16px;\n    }\n\n    input {\n      border-left: 0;\n      padding-left: 0;\n    }\n  }\n}\n","body#tinymce {\n  margin: 12px !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "04f47b5ebeb2039daf2d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.ff898d908ad04a334693.hot-update.js.map