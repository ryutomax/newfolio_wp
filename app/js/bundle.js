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

eval("// // swiper////////////////////////////////\nconst mySwiper = new Swiper('.swiper-container', {\n    speed: 7000,\n    // slidesPerView: 'auto',\n    slidesPerView: 3,   //小数点停止？スライド見切れ\n    loop: true,\n    autoplay: {\n        delay: 0,\n        disableOnInteraction: false,\n        stopOnLastSlide: false,\n    },\n    breakpoints: {\n\t\t1024: {\n\t\t\tslidesPerView: 2,\n\t\t},\n\t\t600: {\n\t\t\tslidesPerView: 1,\n\t\t}\n\t},\n})\n// // swiper 終了////////////////////////////////\n\n// // AOS/////////////////////////////////\n// AOS.init({\n//     once: true,\n// });\n// // AOS 終了////////////////////////////\n\n// スクロールヒント//////////////////////\n\n$(function(){\n    new ScrollHint('.js-scrollable', {\n        applyToParents: true,\n        suggestiveShadow: true,\n        enableOverflowScrolling: true,\n        i18n: {\n            scrollable: 'スクロールできます'\n        }\n    });\n\n});\n\n// スクロールヒント 終了//////////////////////\n\n//# sourceURL=webpack://newfolio/./src/js/modules/plugin.js?");

/***/ }),

/***/ "./src/js/modules/script.js":
/*!**********************************!*\
  !*** ./src/js/modules/script.js ***!
  \**********************************/
/***/ (() => {

eval("// ハンバーガーメニュー\n\n$(\".js-nav__btn\").click(function () {//ボタンがクリックされたら\n    $(this).toggleClass('is-btn__active');//ボタン自身に activeクラスを付与し\n    $(\".js-nav__open\").toggleClass('is-menu__open');//ナビゲーションにpanelactiveクラスを付与\n});\n\n$(\"#g-nav a\").click(function () {//ナビゲーションのリンクがクリックされたら\n    $(\".js-nav__btn\").removeClass('is-btn__active');//ボタンの activeクラスを除去し\n    $(\".js-nav__open\").removeClass('is-menu__open');//ナビゲーションのpanelactiveクラスも除去\n});\n\n$(\".js-humber\").click(function () {\n    $(this).toggleClass('is_btnAct');\n    $(\".js-nav__open\").toggleClass('is-menu__open');\n});\n\n// ハンバーガーメニュー終了/////////////////////////////////////////////\n\n// IE対応 object-fit ////////////////////////\n\n(function ($) {\n    // image bg\n    $.fn.imageBg = function () {\n        var $this = this;\n        var imgSrc = $this.find('img').attr('src');\n        $this.find('img').hide();\n        $this.css({\n            backgroundImage: 'url(\"' + imgSrc + '\")'\n        });\n    }\n    //↓実行\n    $('.js-object-fit').each(function () {\n        $(this).imageBg();\n    });\n})(jQuery);\n\n// IE対応 object-fit 終了////////////////////////\n\n// ========================================\n// アコーディオン実装\n// ========================================\n$(function(){\n    $('.js-accordion_q').click(function() {\n        // click要素の次の指定要素\n        $(this).next('.js-accordion_a').delay(500).slideToggle(500);\n\n        //Aのアンダーライン\n        $('.js-underL_click').delay(1500).addClass('is-underL_click');\n\n        // 指定の子要素を取得(arrowのアニメ)\n        $(this).find('.js-arrow').toggleClass('is-arrowActive');\n\n        return false;\n    });\n});\n// ========================================\n// アコーディオン実装終了\n// ========================================\n\n// ========================================\n// タブ切り替え　Skill アニメーション\n// ========================================\n$(function() {\n    // =========================\n    // 初期状態\n    // =========================\n    var index01 = $('.js-tab.is-borderActive').index();\n    $('.js-tab-cont').css('display','none');\n    $('.js-tab-cont').eq(index01).fadeIn(500);\n\n\t$('.js-tab').click(function() {\n\t\tvar index02 = $('.js-tab').index(this);\n\t\t$('.js-tab-cont').css('display','none');\n\t\t$('.js-tab-cont').eq(index02).fadeIn(500);\n\n        //imgにactiveクラス追加\n        $('.js-tab').find('.js-skillShow_img').addClass('is-skillActive');\n        //borderをactiveに\n        $(this).addClass('is-borderActive');\n\n        // active状態のものを閉じる(現在のjs-tab以外のjs-tabの子孫要素js-skillShow_imgにおいて)\n        $(\".js-tab\").not(this).find(\".js-skillShow_img\").removeClass('is-skillActive');\n\n        //open状態のものを閉じる\n        $(\".js-tab\").not(this).removeClass('is-borderActive');\n    });\n});\n// ========================================\n// タブ切り替え end\n// ========================================\n\n// ========================================\n// パンくずリスト<br>削除\n// ========================================\n$(function() {\n    $('.current-item').children('br').remove();\n});\n// パンくずリスト<br>削除 終了///////////////////////\n\n// ========================================\n// top/blog&newsのhoverアニメ\n// ========================================\n$('.p-notice_blogTtl').hover(function(){\n\n    $('.js-blogFrame').toggleClass('is_frameMove');\n\n});\n$('.p-notice_newsTtl').hover(function(){\n\n    $('.js-newsFrame').toggleClass('is_frameMove');\n\n});\n\n//# sourceURL=webpack://newfolio/./src/js/modules/script.js?");

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ (() => {

eval("// ========================================\n// スムーススクロール\n// ========================================\n$(function ($) {\n    $('.js-news').on('click',function(){\n        const faqTop = $('.p-news').offset().top;\n        $(\"html,body\").animate({scrollTop: faqTop-80},1000);\n    });\n    $('.js-recipe').on('click',function(){\n        const faqTop = $('.p-recipe').offset().top;\n        $(\"html,body\").animate({scrollTop: faqTop-80},1000);\n    });\n    $('.js-products').on('click',function(){\n        const faqTop = $('.p-products').offset().top;\n        $(\"html,body\").animate({scrollTop: faqTop-80},1000);\n    });\n});\n// ========================================\n// スムースクロール終了\n// ========================================\n\n\n\n// ========================================\n// ヘッダー変形\n// ========================================\n\nfunction FixedAnime() {\n    $(window).scroll(function () {\n        var headerH = $(\".js-header-scroll\").outerHeight(true);      //headerの高さを取得\n\n        var $header = $('.js-header-scroll');\n        var $headerCopy = $('.js-header-copy');\n        var $headerLogo = $('.js-header-logo');\n        var $headerbottom = $('.js-header-bottom');\n        var $headerfc = $('.js-header-fc');\n\n        // header高以上スクロールしたら処理\n        if ($(window).scrollTop() > headerH) {\n        $header.addClass('is-header_op07_h80_slidein');\n        $headerCopy.addClass('is-header_txtNone');\n        $headerLogo.addClass('is-header-logo');\n        $headerbottom.addClass('is-header-bottom');\n        $headerfc.addClass('is-header-fc');\n\n        // $header.removeAttr('data-aos');       //AOS削除\n\n        } else {\n\n        $header.removeClass('is-header_op07_h80_slidein');\n        $headerCopy.removeClass('is-header_txtNone');\n        $headerLogo.removeClass('is-header-logo');\n        $headerbottom.removeClass('is-header-bottom');\n        $headerfc.removeClass('is-header-fc');\n        }\n    });\n\t\t/* ウィンドウサイズ860以上の処理を記述 */\n    $(window).on('load scroll', function () {\n        if (window.matchMedia('(min-width: 860px)').matches) {\n            var $logo = $('.js-header-h65-scroll');\n            if ($(window).scrollTop() > 200) {\n                $logo.addClass('is-header__h65');\n        }else {\n            $logo.removeClass('is-header__h65');;\n        }}\n    });\n}\n//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ\n$(window).on('load', function () {\n\tFixedAnime();\n    // var $header = $('.js-header-scroll');\n    // var $headerCopy = $('.js-header-copy');\n    // var $headerLogo = $('.js-header-logo');\n    // var $headerbottom = $('.js-header-bottom');\n    // var $headerfc = $('.js-header-fc');\n\n    // $header.addClass('is-header_op07_h80_slidein');\n    // $headerCopy.addClass('is-header_txtNone');\n    // $headerLogo.addClass('is-header-logo');\n    // $headerbottom.addClass('is-header-bottom');\n    // $headerfc.addClass('is-header-fc');\n});\n\n// ========================================\n// ヘッダー変形 終了\n// ========================================\n\n// タイトル Waveアニメーション////////////////////////////////\n\nfunction waveAnime(){\n\n    //動きの指定\n    $('.js-wave').each(function(){\n        const elemPos = $(this).offset().top + 50;//要素より50px下\n        const scroll = $(window).scrollTop();\n        const windowHeight = $(window).height();\n        if (scroll >= elemPos - windowHeight){\n            $(this).addClass('is-show__wave');\n        } else {\n            $(this).removeClass('is-show__wave');// 画面外に出たらfadeInというクラス名を外す\n        }\n    });\n}\n// スクロール\n    $(window).scroll(function (){ waveAnime();});\n\n// ロード\n    $(window).on('load', function(){ waveAnime();});\n\n// テキスト BGアニメーション////////////////////////////////\nfunction BgFadeAnime(){\n\n    //=============\n    //背景スライドイン\n    //=============\n    $('.js-bgLRextend_scroll').each(function(){\n        const elemPos = $(this).offset().top - 50;//要素より50px下\n        const scroll = $(window).scrollTop();\n        const windowHeight = $(window).height();\n        const speed = 1500;\n        if (scroll >= elemPos - windowHeight){\n            $(this).addClass('is-bgLRextend');\n        } else {\n            $(this).removeClass('is-bgLRextend');\n        }\n    });\n\n    $('.js-bgLRextend_scroll2').each(function(){\n        const elemPos = $(this).offset().top - 50;//要素より50px下\n        const scroll = $(window).scrollTop();\n        const windowHeight = $(window).height();\n        if (scroll >= elemPos - windowHeight){\n            $(this).addClass('is-bgLRextend2');\n        } else {\n            $(this).removeClass('is-bgLRextend2');\n        }\n    });\n    $('.js-bgLRextend_scroll3').each(function(){\n        const elemPos = $(this).offset().top - 50;//要素より50px下\n        const scroll = $(window).scrollTop();\n        const windowHeight = $(window).height();\n        if (scroll >= elemPos - windowHeight){\n            $(this).addClass('is-bgLRextend3');\n        } else {\n            $(this).removeClass('is-bgLRextend3');\n        }\n    });\n\n    //============\n    //テキスト出現\n    //============\n    $('.js-bgShow_txt_scroll').each(function(){\n        const elemPos = $(this).offset().top + 50;//要素より50px下\n        const scroll = $(window).scrollTop();\n        const windowHeight = $(window).height();\n        if (scroll >= elemPos - windowHeight){\n            $(this).addClass('is-bgShow');\n        } else {\n            $(this).removeClass('is-bgShow');\n        }\n    });\n    $('.js-bgShow_txt_scroll2').each(function(){\n        const elemPos = $(this).offset().top + 50;//要素より50px下\n        const scroll = $(window).scrollTop();\n        const windowHeight = $(window).height();\n        if (scroll >= elemPos - windowHeight){\n            $(this).addClass('is-bgShow');\n        } else {\n            $(this).removeClass('is-bgShow');\n        }\n    });\n    $('.js-bgShow_txt_scroll3').each(function(){\n        const elemPos = $(this).offset().top + 50;//要素より50px下\n        const scroll = $(window).scrollTop();\n        const windowHeight = $(window).height();\n        if (scroll >= elemPos - windowHeight){\n            $(this).addClass('is-bgShow');\n        } else {\n            $(this).removeClass('is-bgShow');\n        }\n    });\n\n    //============\n    //マーカー\n    //============\n    $('.js-underL_scroll').each(function(){\n        const elemPos = $(this).offset().top + 50;//要素より50px下\n        const scroll = $(window).scrollTop();\n        const windowHeight = $(window).height();\n        if (scroll >= elemPos - windowHeight){\n            $(this).delay(1500).queue(function() {\n                $(this).addClass('is-underL_scroll').dequeue();\n            });\n        } else {\n            $(this).removeClass('is-underL_scroll');\n        }\n    });\n\n}\n// スクロール\n$(window).scroll(function (){ BgFadeAnime(); });\n// 画面が読み込まれたらすぐに動かしたい場合の記述\n$(window).on('load', function(){ BgFadeAnime(); });\n\n\n//FV アニメーション//////////////////////////////////////\nfunction FvBganime(){\n    // 背景色が伸びて出現（左から右）\n    $('.js-bgLRextend').addClass('is-bgLRextend');\n    $('.js-bgLRextend2').delay(500).queue(function() {\n        $(this).addClass('is-bgLRextend').dequeue();\n    });\n    // テキスト出現\n    $('.js-bgShow_txt').addClass('is-bgShow');\n    $('.js-bgShow_txt2').delay(500).queue(function() {\n        $(this).addClass('is-bgShow').dequeue();\n    });\n    //アンダーライン\n    $('.js-underL').delay(2000).queue(function() {\n        $(this).addClass('is-underL').dequeue();\n    });\n}\n// 画面が読み込まれたらすぐに動かしたい場合の記述\n$(window).on('load', function(){ FvBganime(); });\n\n//# sourceURL=webpack://newfolio/./src/js/modules/scroll.js?");

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