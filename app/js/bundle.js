/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/script */ \"./src/js/modules/script.js\");\n/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_script__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/plugin */ \"./src/js/modules/plugin.js\");\n/* harmony import */ var _modules_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_plugin__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/js/modules/scroll.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_scroll__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n(_modules_script__WEBPACK_IMPORTED_MODULE_0___default());\n(_modules_plugin__WEBPACK_IMPORTED_MODULE_1___default());\n(_modules_scroll__WEBPACK_IMPORTED_MODULE_2___default());\n\n\n//# sourceURL=webpack://newfolio/./src/js/entry.js?");

/***/ }),

/***/ "./src/js/modules/plugin.js":
/*!**********************************!*\
  !*** ./src/js/modules/plugin.js ***!
  \**********************************/
/***/ (() => {

eval("// // swiper////////////////////////////////\nconst mySwiper = new Swiper('.swiper-container', {\n    speed: 7000,\n    // slidesPerView: 'auto',\n    slidesPerView: 3,   //小数点停止？スライド見切れ\n    loop: true,\n    autoplay: {\n        delay: 0,\n        disableOnInteraction: false,\n        stopOnLastSlide: false,\n    },\n    breakpoints: {\n\t\t1024: {\n\t\t\tslidesPerView: 2,\n\t\t},\n\t\t600: {\n\t\t\tslidesPerView: 1,\n\t\t}\n\t},\n})\n// // swiper 終了////////////////////////////////\n\n// スクロールヒント//////////////////////\n\n$(function(){\n    new ScrollHint('.js-scrollable', {\n        applyToParents: true,\n        suggestiveShadow: true,\n        enableOverflowScrolling: true,\n        i18n: {\n            scrollable: 'スクロールできます'\n        }\n    });\n\n});\n\n// スクロールヒント 終了//////////////////////\n\n//# sourceURL=webpack://newfolio/./src/js/modules/plugin.js?");

/***/ }),

/***/ "./src/js/modules/script.js":
/*!**********************************!*\
  !*** ./src/js/modules/script.js ***!
  \**********************************/
/***/ (() => {

eval("// ハンバーガーメニュー\n\n$(\".js-nav__btn\").click(function () {//ボタンがクリックされたら\n    $(this).toggleClass('is-btn__active');//ボタン自身に activeクラスを付与し\n    $(\".js-nav__open\").toggleClass('is-menu__open');//ナビゲーションにpanelactiveクラスを付与\n});\n\n$(\"#g-nav a\").click(function () {//ナビゲーションのリンクがクリックされたら\n    $(\".js-nav__btn\").removeClass('is-btn__active');//ボタンの activeクラスを除去し\n    $(\".js-nav__open\").removeClass('is-menu__open');//ナビゲーションのpanelactiveクラスも除去\n});\n\n$(\".js-humber\").click(function () {\n    $(this).toggleClass('is_btnAct');\n    $(\".js-nav__open\").toggleClass('is-menu__open');\n});\n\n// ハンバーガーメニュー終了/////////////////////////////////////////////\n\n// IE対応 object-fit ////////////////////////\n\n(function ($) {\n    // image bg\n    $.fn.imageBg = function () {\n        var $this = this;\n        var imgSrc = $this.find('img').attr('src');\n        $this.find('img').hide();\n        $this.css({\n            backgroundImage: 'url(\"' + imgSrc + '\")'\n        });\n    }\n    //↓実行\n    $('.js-object-fit').each(function () {\n        $(this).imageBg();\n    });\n})($);\n\n// IE対応 object-fit 終了////////////////////////\n\n// ========================================\n// アコーディオン実装\n// ========================================\n$(function(){\n    $('.js-accordion_q').click(function() {\n        // click要素の次の指定要素\n        $(this).next('.js-accordion_a').delay(500).slideToggle(500);\n\n        //Aのアンダーライン\n        $('.js-underL_click').delay(1500).addClass('is-underL_click');\n\n        // 指定の子要素を取得(arrowのアニメ)\n        $(this).find('.js-arrow').toggleClass('is-arrowActive');\n\n        return false;\n    });\n});\n// ========================================\n// アコーディオン実装終了\n// ========================================\n\n// ========================================\n// タブ切り替え　Skill アニメーション\n// ========================================\n$(function() {\n    // =========================\n    // 初期状態\n    // =========================\n    var index01 = $('.js-tab.is-borderActive').index();\n    $('.js-tab-cont').css('display','none');\n    $('.js-tab-cont').eq(index01).fadeIn(500);\n\n\t$('.js-tab').click(function() {\n\t\tvar index02 = $('.js-tab').index(this);\n\t\t$('.js-tab-cont').css('display','none');\n\t\t$('.js-tab-cont').eq(index02).fadeIn(500);\n\n        //imgにactiveクラス追加\n        $('.js-tab').find('.js-skillShow_img').addClass('is-skillActive');\n        //borderをactiveに\n        $(this).addClass('is-borderActive');\n\n        // active状態のものを閉じる(現在のjs-tab以外のjs-tabの子孫要素js-skillShow_imgにおいて)\n        $(\".js-tab\").not(this).find(\".js-skillShow_img\").removeClass('is-skillActive');\n\n        //open状態のものを閉じる\n        $(\".js-tab\").not(this).removeClass('is-borderActive');\n    });\n});\n// ========================================\n// タブ切り替え end\n// ========================================\n\n// ========================================\n// パンくずリスト<br>削除\n// ========================================\n$(function() {\n    $('.current-item').children('br').remove();\n});\n// パンくずリスト<br>削除 終了///////////////////////\n\n// ========================================\n// top/blog&newsのhoverアニメ\n// ========================================\nconst elements = document.getElementsByClassName('js-noticeTtl__hover');\nconst elements2 = document.getElementsByClassName('js-noticeTtl__hover2');\nArray.prototype.forEach.call(elements, (element) => {\n    element.addEventListener('mouseover', () => {\n        document.getElementsByClassName('js-noticeFrame')[0].classList.add('is_frameMove');\n    });\n\n    element.addEventListener('mouseleave', () => {\n        document.getElementsByClassName('js-noticeFrame')[0].classList.remove('is_frameMove');\n    });\n});\n\nArray.prototype.forEach.call(elements2, (element2) => {\n    element2.addEventListener('mouseover', () => {\n        document.getElementsByClassName('js-noticeFrame2')[0].classList.add('is_frameMove');\n    });\n    element2.addEventListener('mouseleave', () => {\n        document.getElementsByClassName('js-noticeFrame2')[0].classList.remove('is_frameMove');\n    });\n});\n\n//# sourceURL=webpack://newfolio/./src/js/modules/script.js?");

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ (() => {

eval("// ========================================\n// スムーススクロール\n// ========================================\n\nconst Ease = {\n  easeInOut: (t) => {\n    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;\n  },\n};\nconst jsSmoothScroll = [].slice.call(document.querySelectorAll('a[href^=\"#\"]'));\n\njsSmoothScroll.forEach(function (scrollTrigger) {\n  scrollTrigger.addEventListener(\"click\", (e) => {\n    //デフォルト打ち消し\n    e.preventDefault();\n    e.stopPropagation();\n\n    const href = scrollTrigger.getAttribute(\"href\");\n    const target = document.getElementById(href.replace(\"#\", \"\"));\n    const current =\n      document.documentElement.scrollTop || document.body.scrollTop;\n\n    //スクロール先要素\n    const offset = window.pageYOffset + target.getBoundingClientRect().top - 70;\n    const startTime = performance.now();\n\n    const loop = function (nowTime) {\n      const passTime = nowTime - startTime; //経過時間を取得\n      const normalizedTime = passTime / 1000; //durationTime\n      if (normalizedTime < 1) {\n        window.scrollTo(\n          0,\n          current + (offset - current) * Ease.easeInOut(normalizedTime)\n        );\n        requestAnimationFrame(loop); //anime実行\n      } else {\n        window.scrollTo(0, offset);\n      }\n    };\n    requestAnimationFrame(loop); //anime実行\n  });\n});\n// ========================================\n// スムースクロール終了\n// ========================================\n\n// ========================================\n// ヘッダー変形\n// ========================================\n\nwindow.addEventListener('scroll', () => {\n  const headerH = document.getElementsByClassName(\"js-header-scroll\")[0].clientHeight; //headerの高さを取得\n  const scrollH = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;\n  var header = document.getElementsByClassName(\"js-header-scroll\")[0];\n  var headerCopy = document.getElementsByClassName(\"js-header-copy\")[0];\n  var headerLogo = document.getElementsByClassName(\"js-header-logo\")[0];\n  var headerBottom = document.getElementsByClassName(\"js-header-bottom\")[0];\n  var headerColors = document.getElementsByClassName(\"js-header-fc\");\n\n  header.classList.toggle(\"is-header_op07_h80_slidein\", scrollH > headerH);\n  headerCopy.classList.toggle(\"is-header_txtNone\", scrollH > headerH);\n  headerLogo.classList.toggle(\"is-header-logo\", scrollH > headerH);\n  headerBottom.classList.toggle(\"is-header-bottom\", scrollH > headerH);\n  Array.prototype.forEach.call(headerColors, (headerColor) => {\n    headerColor.classList.toggle(\"is-header-color\", scrollH > headerH);\n  });\n});\n// ========================================\n// ヘッダー変形 終了\n// ========================================\n\n// =========================\n// スライドインアニメ\n// =========================\nconst windowHeight = window.innerHeight; // 現在のブラウザの高さ\nconst scroll = window.pageYOffset || document.documentElement.scrollTop;\n\nwindow.addEventListener(\"scroll\", () => {\n  const slideInTarget = [].slice.call(document.querySelectorAll(\".js-fadeIn_shadow\"));\n  const slideInTarget2 = [].slice.call(document.querySelectorAll(\".js-fadeIn_shadow_2n\"));\n\n  for (let i = 0; i < slideInTarget.length; i++) {\n    const rect = slideInTarget[i].getBoundingClientRect().top;\n    const offset = rect + scroll;\n    if (scroll > offset - windowHeight + 150) {\n      slideInTarget[i].classList.add(\"is-fadeIn_shadow\");\n    }\n  }\n  for (let i = 0; i < slideInTarget2.length; i++) {\n    const rect = slideInTarget2[i].getBoundingClientRect().top;\n    const offset = rect + scroll;\n    if (scroll > offset - windowHeight + 150) {\n      slideInTarget2[i].classList.add(\"is-fadeIn_shadow_2n\");\n    }\n  }\n\n  // =========================\n  // タイトル Waveアニメーション\n  // =========================\n\n  const waveTarget = [].slice.call(document.querySelectorAll(\".js-wave\"));\n\n  for (let i = 0; i < waveTarget.length; i++) {\n    const rect = waveTarget[i].getBoundingClientRect().top;\n    const offset = rect + scroll;\n\n    if (scroll > offset - windowHeight + 150) {\n      waveTarget[i].classList.add(\"is-show__wave\");\n    } else {\n      waveTarget[i].classList.remove(\"is-show__wave\");\n    }\n  }\n  // =========================\n  // テキスト BGアニメーション\n  // =========================\n  // =============\n  // 背景スライドイン\n  // =============\n  const bgLRextendTarget = [].slice.call(document.querySelectorAll(\".js-bgLRextend_scroll\"));\n  const bgLRextend2Target = [].slice.call(document.querySelectorAll(\".js-bgLRextend_scroll2\"));\n  const bgLRextend3Target = [].slice.call(document.querySelectorAll(\".js-bgLRextend_scroll3\"));\n\n  for (let i = 0; i < bgLRextendTarget.length; i++) {\n    const rect = bgLRextendTarget[i].getBoundingClientRect().top;\n    const offset = rect + scroll;\n    if (scroll > offset - windowHeight - 50) {\n      bgLRextendTarget[i].classList.add(\"is-bgLRextend\");\n    }\n  }\n  for (let i = 0; i < bgLRextend2Target.length; i++) {\n    const rect = bgLRextend2Target[i].getBoundingClientRect().top;\n    const offset = rect + scroll;\n    if (scroll > offset - windowHeight - 50) {\n      bgLRextend2Target[i].classList.add(\"is-bgLRextend2\");\n    }\n  }\n  for (let i = 0; i < bgLRextend3Target.length; i++) {\n    const rect = bgLRextend3Target[i].getBoundingClientRect().top;\n    const offset = rect + scroll;\n    if (scroll > offset - windowHeight - 50) {\n      bgLRextend3Target[i].classList.add(\"is-bgLRextend3\");\n    }\n  }\n  // ============\n  // テキスト出現\n  // ============\n  const bgShowTxtTarget = [].slice.call(document.querySelectorAll(\".js-bgShow_txt_scroll\"));\n  const bgShowTxt2Target = [].slice.call(document.querySelectorAll(\".js-bgShow_txt_scroll2\"));\n  const bgShowTxt3Target = [].slice.call(document.querySelectorAll(\".js-bgShow_txt_scroll3\"));\n\n  for (let i = 0; i < bgShowTxtTarget.length; i++) {\n    const rect = bgShowTxtTarget[i].getBoundingClientRect().top;\n    const offset = rect + scroll;\n\n    if (scroll > offset - windowHeight - 50) {\n      bgShowTxtTarget[i].classList.add(\"is-bgShow\");\n    }\n  }\n  for (let i = 0; i < bgShowTxt2Target.length; i++) {\n    const rect = bgShowTxt2Target[i].getBoundingClientRect().top;\n    const offset = rect + scroll;\n\n    if (scroll > offset - windowHeight - 50) {\n      bgShowTxt2Target[i].classList.add(\"is-bgShow2\");\n    }\n  }\n  for (let i = 0; i < bgShowTxt3Target.length; i++) {\n    const rect = bgShowTxt3Target[i].getBoundingClientRect().top;\n    const offset = rect + scroll;\n\n    if (scroll > offset - windowHeight - 50) {\n      bgShowTxt3Target[i].classList.add(\"is-bgShow3\");\n    }\n  }\n\n  //============\n  //マーカー\n  //============\n  const underLTarget = [].slice.call(document.querySelectorAll(\".js-underL_scroll\"));\n  for (let i = 0; i < underLTarget.length; i++) {\n    const rect = underLTarget[i].getBoundingClientRect().top;\n    const offset = rect + scroll;\n    if (scroll > offset - windowHeight - 50) {\n      const delayFunc = () => {underLTarget[i].classList.add(\"is-underL_scroll\")}\n      setTimeout(delayFunc, 750);\n    }\n  }\n});\n\n// ========================================\n// FV アニメーション\n// ========================================\nwindow.addEventListener('load', () => {\n  const bgLRextendTarget = [].slice.call(document.querySelectorAll(\".js-bgLRextend\"));\n  const bgLRextend2Target = [].slice.call(document.querySelectorAll(\".js-bgLRextend2\"));\n  for (let i = 0; i < bgLRextendTarget.length; i++) {\n    bgLRextendTarget[i].classList.add(\"is-bgLRextend\");\n    setTimeout(() => {bgLRextend2Target[i].classList.add(\"is-bgLRextend\")}, 500);\n  }\n  // テキスト出現\n  const bgShowTxtTarget = [].slice.call(document.querySelectorAll(\".js-bgShow_txt\"));\n  const bgShowTxt2Target = [].slice.call(document.querySelectorAll(\".js-bgShow_txt2\"));\n  for (let i = 0; i < bgShowTxtTarget.length; i++) {\n    bgShowTxtTarget[i].classList.add(\"is-bgShow\");\n    setTimeout(() => {bgShowTxt2Target[i].classList.add(\"is-bgShow\")}, 500);\n  }\n  //アンダーライン\n  const underLTarget = [].slice.call(document.querySelectorAll(\".js-underL\"));\n  for (let i = 0; i < underLTarget.length; i++) {\n    setTimeout(() => {underLTarget[i].classList.add(\"is-underL\")}, 2000);\n  }\n});\n\n//# sourceURL=webpack://newfolio/./src/js/modules/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/entry.js");
/******/ 	
/******/ })()
;