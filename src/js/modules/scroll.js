// ========================================
// スムーススクロール
// ========================================
$(function ($) {
    $('.js-scroll_about').on('click',function(){
        const faqTop = $('#about').offset().top;
        $("html,body").animate({scrollTop: faqTop-80},1000);
    });
    $('.js-scroll_strengthse').on('click',function(){
        const faqTop = $('#strength').offset().top;
        $("html,body").animate({scrollTop: faqTop-80},1000);
    });
    $('.js-scroll_service').on('click',function(){
        const faqTop = $('#service').offset().top;
        $("html,body").animate({scrollTop: faqTop-80},1000);
    });
    $('.js-scroll_works').on('click',function(){
        const faqTop = $('#works').offset().top;
        $("html,body").animate({scrollTop: faqTop-80},1000);
    });
    $('.js-scroll_notice').on('click',function(){
        const faqTop = $('#notice').offset().top;
        $("html,body").animate({scrollTop: faqTop-80},1000);
    });
});
// ========================================
// スムースクロール終了
// ========================================



// ========================================
// ヘッダー変形
// ========================================

function FixedAnime() {
    $(window).scroll(function () {
        var headerH = $(".js-header-scroll").outerHeight(true);      //headerの高さを取得

        var $header = $('.js-header-scroll');
        var $headerCopy = $('.js-header-copy');
        var $headerLogo = $('.js-header-logo');
        var $headerbottom = $('.js-header-bottom');
        var $headerfc = $('.js-header-fc');

        // header高以上スクロールしたら処理
        if ($(window).scrollTop() > headerH) {
        $header.addClass('is-header_op07_h80_slidein');
        $headerCopy.addClass('is-header_txtNone');
        $headerLogo.addClass('is-header-logo');
        $headerbottom.addClass('is-header-bottom');
        $headerfc.addClass('is-header-fc');

        // $header.removeAttr('data-aos');       //AOS削除

        } else {

        $header.removeClass('is-header_op07_h80_slidein');
        $headerCopy.removeClass('is-header_txtNone');
        $headerLogo.removeClass('is-header-logo');
        $headerbottom.removeClass('is-header-bottom');
        $headerfc.removeClass('is-header-fc');
        }
    });
		/* ウィンドウサイズ860以上の処理を記述 */
    $(window).on('load scroll', function () {
        if (window.matchMedia('(min-width: 860px)').matches) {
            var $logo = $('.js-header-h65-scroll');
            if ($(window).scrollTop() > 200) {
                $logo.addClass('is-header__h65');
        }else {
            $logo.removeClass('is-header__h65');;
        }}
    });
}
//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
$(window).on('load', function () {
	FixedAnime();
    // var $header = $('.js-header-scroll');
    // var $headerCopy = $('.js-header-copy');
    // var $headerLogo = $('.js-header-logo');
    // var $headerbottom = $('.js-header-bottom');
    // var $headerfc = $('.js-header-fc');

    // $header.addClass('is-header_op07_h80_slidein');
    // $headerCopy.addClass('is-header_txtNone');
    // $headerLogo.addClass('is-header-logo');
    // $headerbottom.addClass('is-header-bottom');
    // $headerfc.addClass('is-header-fc');
});

// ========================================
// ヘッダー変形 終了
// ========================================

// =========================
// スライドインアニメ
// =========================
function slideInAnime(){

    //動きの指定
    $('.js-fadeIn_shadow').each(function(){
        const elemPos = $(this).offset().top + 100;//要素より50px下
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('is-fadeIn_shadow');
        } else {
            // $(this).removeClass('is-fadeIn_shadow');// 画面外に出たらfadeInというクラス名を外す
        }
    });

    $('.js-fadeIn_shadow_2n').each(function(){
        const elemPos = $(this).offset().top + 100;//要素より50px下
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('is-fadeIn_shadow_2n');
        } else {
            // $(this).removeClass('is-fadeIn_shadow_2n');// 画面外に出たらfadeInというクラス名を外す
        }
    });
}
// スクロール
    $(window).scroll(function (){ slideInAnime();});

// ロード
    $(window).on('load', function(){ slideInAnime();});

// =========================
// タイトル Waveアニメーション
// =========================

function waveAnime(){

    //動きの指定
    $('.js-wave').each(function(){
        const elemPos = $(this).offset().top + 50;//要素より50px下
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('is-show__wave');
        } else {
            $(this).removeClass('is-show__wave');// 画面外に出たらfadeInというクラス名を外す
        }
    });
}
// スクロール
    $(window).scroll(function (){ waveAnime();});

// ロード
    $(window).on('load', function(){ waveAnime();});

// =========================
// テキスト BGアニメーション
// =========================
function BgFadeAnime(){

    //=============
    //背景スライドイン
    //=============
    $('.js-bgLRextend_scroll').each(function(){
        const elemPos = $(this).offset().top - 50;//要素より50px下
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        const speed = 1500;
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('is-bgLRextend');
        } else {
            $(this).removeClass('is-bgLRextend');
        }
    });

    $('.js-bgLRextend_scroll2').each(function(){
        const elemPos = $(this).offset().top - 50;//要素より50px下
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('is-bgLRextend2');
        } else {
            $(this).removeClass('is-bgLRextend2');
        }
    });
    $('.js-bgLRextend_scroll3').each(function(){
        const elemPos = $(this).offset().top - 50;//要素より50px下
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('is-bgLRextend3');
        } else {
            $(this).removeClass('is-bgLRextend3');
        }
    });

    //============
    //テキスト出現
    //============
    $('.js-bgShow_txt_scroll').each(function(){
        const elemPos = $(this).offset().top + 50;//要素より50px下
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('is-bgShow');
        } else {
            $(this).removeClass('is-bgShow');
        }
    });
    $('.js-bgShow_txt_scroll2').each(function(){
        const elemPos = $(this).offset().top + 50;//要素より50px下
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('is-bgShow');
        } else {
            $(this).removeClass('is-bgShow');
        }
    });
    $('.js-bgShow_txt_scroll3').each(function(){
        const elemPos = $(this).offset().top + 50;//要素より50px下
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('is-bgShow');
        } else {
            $(this).removeClass('is-bgShow');
        }
    });

    //============
    //マーカー
    //============
    $('.js-underL_scroll').each(function(){
        const elemPos = $(this).offset().top + 50;//要素より50px下
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).delay(1500).queue(function() {
                $(this).addClass('is-underL_scroll').dequeue();
            });
        } else {
            $(this).removeClass('is-underL_scroll');
        }
    });

}
// スクロール
$(window).scroll(function (){ BgFadeAnime(); });
// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){ BgFadeAnime(); });


//FV アニメーション//////////////////////////////////////
function FvBganime(){
    // 背景色が伸びて出現（左から右）
    $('.js-bgLRextend').addClass('is-bgLRextend');
    $('.js-bgLRextend2').delay(500).queue(function() {
        $(this).addClass('is-bgLRextend').dequeue();
    });
    // テキスト出現
    $('.js-bgShow_txt').addClass('is-bgShow');
    $('.js-bgShow_txt2').delay(500).queue(function() {
        $(this).addClass('is-bgShow').dequeue();
    });
    //アンダーライン
    $('.js-underL').delay(2000).queue(function() {
        $(this).addClass('is-underL').dequeue();
    });
}
// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){ FvBganime(); });