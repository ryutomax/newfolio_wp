// // swiper////////////////////////////////
const mySwiper = new Swiper('.swiper-container', {
    speed: 7000,
    // slidesPerView: 'auto',
    slidesPerView: 3,   //小数点停止？スライド見切れ
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        stopOnLastSlide: false,
    },
    breakpoints: {
		1024: {
			slidesPerView: 2,
		},
		600: {
			slidesPerView: 1,
		}
	},
})
// // swiper 終了////////////////////////////////

// // AOS/////////////////////////////////
// AOS.init({
//     once: true,
// });
// // AOS 終了////////////////////////////

// スクロールヒント//////////////////////

$(function(){
    new ScrollHint('.js-scrollable', {
        applyToParents: true,
        suggestiveShadow: true,
        enableOverflowScrolling: true,
        i18n: {
            scrollable: 'スクロールできます'
        }
    });

});

// スクロールヒント 終了//////////////////////