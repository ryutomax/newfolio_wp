var jqOther = jQuery.noConflict(true);

// ========================================
// スムーススクロール
// ========================================
jqOther(function (jqOther) {
    jqOther('.js-scroll_about').on('click',function(){
        const faqTop = jqOther('#about').offset().top;
        jqOther("html,body").animate({scrollTop: faqTop-80},1000);
    });
    jqOther('.js-scroll_strengths').on('click',function(){
        const faqTop = jqOther('#strengths').offset().top;
        jqOther("html,body").animate({scrollTop: faqTop-80},1000);
    });
    jqOther('.js-scroll_service').on('click',function(){
        const faqTop = jqOther('#service').offset().top;
        jqOther("html,body").animate({scrollTop: faqTop-80},1000);
    });
    jqOther('.js-scroll_works').on('click',function(){
        const faqTop = jqOther('#works').offset().top;
        jqOther("html,body").animate({scrollTop: faqTop-80},1000);
    });
    jqOther('.js-scroll_notice').on('click',function(){
        const faqTop = jqOther('#notice').offset().top;
        jqOther("html,body").animate({scrollTop: faqTop-80},1000);
    });
});
// ========================================
// スムースクロール終了
// ========================================

// ========================================
// ヘッダー変形
// ========================================

function FixedAnime() {
    jqOther(window).scroll(function () {
        var headerH = jqOther(".js-header-scroll").outerHeight(true);      //headerの高さを取得

        var jqOtherheader = jqOther('.js-header-scroll');
        var jqOtherheaderCopy = jqOther('.js-header-copy');
        var jqOtherheaderLogo = jqOther('.js-header-logo');
        var jqOtherheaderbottom = jqOther('.js-header-bottom');
        var jqOtherheaderfc = jqOther('.js-header-fc');

        // header高以上スクロールしたら処理
        if (jqOther(window).scrollTop() > headerH) {
        jqOtherheader.addClass('is-header_op07_h80_slidein');
        jqOtherheaderCopy.addClass('is-header_txtNone');
        jqOtherheaderLogo.addClass('is-header-logo');
        jqOtherheaderbottom.addClass('is-header-bottom');
        jqOtherheaderfc.addClass('is-header-fc');

        // jqOtherheader.removeAttr('data-aos');       //AOS削除

        } else {

        jqOtherheader.removeClass('is-header_op07_h80_slidein');
        jqOtherheaderCopy.removeClass('is-header_txtNone');
        jqOtherheaderLogo.removeClass('is-header-logo');
        jqOtherheaderbottom.removeClass('is-header-bottom');
        jqOtherheaderfc.removeClass('is-header-fc');
        }
    });
		/* ウィンドウサイズ860以上の処理を記述 */
    jqOther(window).on('load scroll', function () {
        if (window.matchMedia('(min-width: 860px)').matches) {
            var jqOtherlogo = jqOther('.js-header-h65-scroll');
            if (jqOther(window).scrollTop() > 200) {
                jqOtherlogo.addClass('is-header__h65');
        }else {
            jqOtherlogo.removeClass('is-header__h65');;
        }}
    });
}
//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
jqOther(window).on('load', function () {
	FixedAnime();
});
// ========================================
// ヘッダー変形 終了
// ========================================

// =========================
// スライドインアニメ
// =========================
function slideInAnime(){

    //動きの指定
    jqOther('.js-fadeIn_shadow').each(function(){
        const elemPos = jqOther(this).offset().top + 100;//要素より50px下
        const scroll = jqOther(window).scrollTop();
        const windowHeight = jqOther(window).height();
        if (scroll >= elemPos - windowHeight){
            jqOther(this).addClass('is-fadeIn_shadow');
        } else {
            // jqOther(this).removeClass('is-fadeIn_shadow');// 画面外に出たらfadeInというクラス名を外す
        }
    });

    jqOther('.js-fadeIn_shadow_2n').each(function(){
        const elemPos = jqOther(this).offset().top + 100;//要素より50px下
        const scroll = jqOther(window).scrollTop();
        const windowHeight = jqOther(window).height();
        if (scroll >= elemPos - windowHeight){
            jqOther(this).addClass('is-fadeIn_shadow_2n');
        } else {
            // jqOther(this).removeClass('is-fadeIn_shadow_2n');// 画面外に出たらfadeInというクラス名を外す
        }
    });
}
// スクロール
    jqOther(window).scroll(function (){ slideInAnime();});

// ロード
    jqOther(window).on('load', function(){ slideInAnime();});

// =========================
// タイトル Waveアニメーション
// =========================

function waveAnime(){

    //動きの指定
    jqOther('.js-wave').each(function(){
        const elemPos = jqOther(this).offset().top + 50;//要素より50px下
        const scroll = jqOther(window).scrollTop();
        const windowHeight = jqOther(window).height();
        if (scroll >= elemPos - windowHeight){
            jqOther(this).addClass('is-show__wave');
        } else {
            jqOther(this).removeClass('is-show__wave');// 画面外に出たらfadeInというクラス名を外す
        }
    });
}
// スクロール
    jqOther(window).scroll(function (){ waveAnime();});

// ロード
    jqOther(window).on('load', function(){ waveAnime();});

// =========================
// テキスト BGアニメーション
// =========================
function BgFadeAnime(){

    //=============
    //背景スライドイン
    //=============
    jqOther('.js-bgLRextend_scroll').each(function(){
        const elemPos = jqOther(this).offset().top - 50;//要素より50px下
        const scroll = jqOther(window).scrollTop();
        const windowHeight = jqOther(window).height();
        const speed = 1500;
        if (scroll >= elemPos - windowHeight){
            jqOther(this).addClass('is-bgLRextend');
        } else {
            jqOther(this).removeClass('is-bgLRextend');
        }
    });

    jqOther('.js-bgLRextend_scroll2').each(function(){
        const elemPos = jqOther(this).offset().top - 50;//要素より50px下
        const scroll = jqOther(window).scrollTop();
        const windowHeight = jqOther(window).height();
        if (scroll >= elemPos - windowHeight){
            jqOther(this).addClass('is-bgLRextend2');
        } else {
            jqOther(this).removeClass('is-bgLRextend2');
        }
    });
    jqOther('.js-bgLRextend_scroll3').each(function(){
        const elemPos = jqOther(this).offset().top - 50;//要素より50px下
        const scroll = jqOther(window).scrollTop();
        const windowHeight = jqOther(window).height();
        if (scroll >= elemPos - windowHeight){
            jqOther(this).addClass('is-bgLRextend3');
        } else {
            jqOther(this).removeClass('is-bgLRextend3');
        }
    });

    //============
    //テキスト出現
    //============
    jqOther('.js-bgShow_txt_scroll').each(function(){
        const elemPos = jqOther(this).offset().top + 50;//要素より50px下
        const scroll = jqOther(window).scrollTop();
        const windowHeight = jqOther(window).height();
        if (scroll >= elemPos - windowHeight){
            jqOther(this).addClass('is-bgShow');
        } else {
            jqOther(this).removeClass('is-bgShow');
        }
    });
    jqOther('.js-bgShow_txt_scroll2').each(function(){
        const elemPos = jqOther(this).offset().top + 50;//要素より50px下
        const scroll = jqOther(window).scrollTop();
        const windowHeight = jqOther(window).height();
        if (scroll >= elemPos - windowHeight){
            jqOther(this).addClass('is-bgShow');
        } else {
            jqOther(this).removeClass('is-bgShow');
        }
    });
    jqOther('.js-bgShow_txt_scroll3').each(function(){
        const elemPos = jqOther(this).offset().top + 50;//要素より50px下
        const scroll = jqOther(window).scrollTop();
        const windowHeight = jqOther(window).height();
        if (scroll >= elemPos - windowHeight){
            jqOther(this).addClass('is-bgShow');
        } else {
            jqOther(this).removeClass('is-bgShow');
        }
    });

    //============
    //マーカー
    //============
    jqOther('.js-underL_scroll').each(function(){
        const elemPos = jqOther(this).offset().top + 50;//要素より50px下
        const scroll = jqOther(window).scrollTop();
        const windowHeight = jqOther(window).height();
        if (scroll >= elemPos - windowHeight){
            jqOther(this).delay(1500).queue(function() {
                jqOther(this).addClass('is-underL_scroll').dequeue();
            });
        } else {
            jqOther(this).removeClass('is-underL_scroll');
        }
    });

}
// スクロール
jqOther(window).scroll(function (){ BgFadeAnime(); });
// 画面が読み込まれたらすぐに動かしたい場合の記述
jqOther(window).on('load', function(){ BgFadeAnime(); });


//FV アニメーション//////////////////////////////////////
function FvBganime(){
    // 背景色が伸びて出現（左から右）
    jqOther('.js-bgLRextend').addClass('is-bgLRextend');
    jqOther('.js-bgLRextend2').delay(500).queue(function() {
        jqOther(this).addClass('is-bgLRextend').dequeue();
    });
    // テキスト出現
    jqOther('.js-bgShow_txt').addClass('is-bgShow');
    jqOther('.js-bgShow_txt2').delay(500).queue(function() {
        jqOther(this).addClass('is-bgShow').dequeue();
    });
    //アンダーライン
    jqOther('.js-underL').delay(2000).queue(function() {
        jqOther(this).addClass('is-underL').dequeue();
    });
}
// 画面が読み込まれたらすぐに動かしたい場合の記述
jqOther(window).on('load', function(){ FvBganime(); });