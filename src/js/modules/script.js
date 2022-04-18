// ハンバーガーメニュー

$(".js-nav__btn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('is-btn__active');//ボタン自身に activeクラスを付与し
    $(".js-nav__open").toggleClass('is-menu__open');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".js-nav__btn").removeClass('is-btn__active');//ボタンの activeクラスを除去し
    $(".js-nav__open").removeClass('is-menu__open');//ナビゲーションのpanelactiveクラスも除去
});

$(".js-humber").click(function () {
    $(this).toggleClass('is_btnAct');
    $(".js-nav__open").toggleClass('is-menu__open');
});

// ハンバーガーメニュー終了/////////////////////////////////////////////

// IE対応 object-fit ////////////////////////

(function ($) {
    // image bg
    $.fn.imageBg = function () {
        var $this = this;
        var imgSrc = $this.find('img').attr('src');
        $this.find('img').hide();
        $this.css({
            backgroundImage: 'url("' + imgSrc + '")'
        });
    }
    //↓実行
    $('.js-object-fit').each(function () {
        $(this).imageBg();
    });
})($);

// IE対応 object-fit 終了////////////////////////

// ========================================
// アコーディオン実装
// ========================================
$(function(){
    $('.js-accordion_q').click(function() {
        // click要素の次の指定要素
        $(this).next('.js-accordion_a').delay(500).slideToggle(500);

        //Aのアンダーライン
        $('.js-underL_click').delay(1500).addClass('is-underL_click');

        // 指定の子要素を取得(arrowのアニメ)
        $(this).find('.js-arrow').toggleClass('is-arrowActive');

        return false;
    });
});
// ========================================
// アコーディオン実装終了
// ========================================

// ========================================
// タブ切り替え　Skill アニメーション
// ========================================
$(function() {
    // =========================
    // 初期状態
    // =========================
    var index01 = $('.js-tab.is-borderActive').index();
    $('.js-tab-cont').css('display','none');
    $('.js-tab-cont').eq(index01).fadeIn(500);

	$('.js-tab').click(function() {
		var index02 = $('.js-tab').index(this);
		$('.js-tab-cont').css('display','none');
		$('.js-tab-cont').eq(index02).fadeIn(500);

        //imgにactiveクラス追加
        $('.js-tab').find('.js-skillShow_img').addClass('is-skillActive');
        //borderをactiveに
        $(this).addClass('is-borderActive');

        // active状態のものを閉じる(現在のjs-tab以外のjs-tabの子孫要素js-skillShow_imgにおいて)
        $(".js-tab").not(this).find(".js-skillShow_img").removeClass('is-skillActive');

        //open状態のものを閉じる
        $(".js-tab").not(this).removeClass('is-borderActive');
    });
});
// ========================================
// タブ切り替え end
// ========================================

// ========================================
// パンくずリスト<br>削除
// ========================================
$(function() {
    $('.current-item').children('br').remove();
});
// パンくずリスト<br>削除 終了///////////////////////

// ========================================
// top/blog&newsのhoverアニメ
// ========================================
$('.p-notice_blogTtl').hover(function(){

    $('.js-blogFrame').toggleClass('is_frameMove');

});
$('.p-notice_newsTtl').hover(function(){

    $('.js-newsFrame').toggleClass('is_frameMove');

});