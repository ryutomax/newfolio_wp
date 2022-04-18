var jqOther = jQuery.noConflict(true);

// ハンバーガーメニュー

jqOther(".js-nav__btn").click(function () {//ボタンがクリックされたら
    jqOther(this).toggleClass('is-btn__active');//ボタン自身に activeクラスを付与し
    jqOther(".js-nav__open").toggleClass('is-menu__open');//ナビゲーションにpanelactiveクラスを付与
});

jqOther("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    jqOther(".js-nav__btn").removeClass('is-btn__active');//ボタンの activeクラスを除去し
    jqOther(".js-nav__open").removeClass('is-menu__open');//ナビゲーションのpanelactiveクラスも除去
});

jqOther(".js-humber").click(function () {
    jqOther(this).toggleClass('is_btnAct');
    jqOther(".js-nav__open").toggleClass('is-menu__open');
});

// ハンバーガーメニュー終了/////////////////////////////////////////////

// IE対応 object-fit ////////////////////////

(function (jqOther) {
    // image bg
    jqOther.fn.imageBg = function () {
        var jqOtherthis = this;
        var imgSrc = jqOtherthis.find('img').attr('src');
        jqOtherthis.find('img').hide();
        jqOtherthis.css({
            backgroundImage: 'url("' + imgSrc + '")'
        });
    }
    //↓実行
    jqOther('.js-object-fit').each(function () {
        jqOther(this).imageBg();
    });
})(jqOther);

// IE対応 object-fit 終了////////////////////////

// ========================================
// アコーディオン実装
// ========================================
jqOther(function(){
    jqOther('.js-accordion_q').click(function() {
        // click要素の次の指定要素
        jqOther(this).next('.js-accordion_a').delay(500).slideToggle(500);

        //Aのアンダーライン
        jqOther('.js-underL_click').delay(1500).addClass('is-underL_click');

        // 指定の子要素を取得(arrowのアニメ)
        jqOther(this).find('.js-arrow').toggleClass('is-arrowActive');

        return false;
    });
});
// ========================================
// アコーディオン実装終了
// ========================================

// ========================================
// タブ切り替え　Skill アニメーション
// ========================================
jqOther(function() {
    // =========================
    // 初期状態
    // =========================
    var index01 = jqOther('.js-tab.is-borderActive').index();
    jqOther('.js-tab-cont').css('display','none');
    jqOther('.js-tab-cont').eq(index01).fadeIn(500);

	jqOther('.js-tab').click(function() {
		var index02 = jqOther('.js-tab').index(this);
		jqOther('.js-tab-cont').css('display','none');
		jqOther('.js-tab-cont').eq(index02).fadeIn(500);

        //imgにactiveクラス追加
        jqOther('.js-tab').find('.js-skillShow_img').addClass('is-skillActive');
        //borderをactiveに
        jqOther(this).addClass('is-borderActive');

        // active状態のものを閉じる(現在のjs-tab以外のjs-tabの子孫要素js-skillShow_imgにおいて)
        jqOther(".js-tab").not(this).find(".js-skillShow_img").removeClass('is-skillActive');

        //open状態のものを閉じる
        jqOther(".js-tab").not(this).removeClass('is-borderActive');
    });
});
// ========================================
// タブ切り替え end
// ========================================

// ========================================
// パンくずリスト<br>削除
// ========================================
jqOther(function() {
    jqOther('.current-item').children('br').remove();
});
// パンくずリスト<br>削除 終了///////////////////////

// ========================================
// top/blog&newsのhoverアニメ
// ========================================
jqOther('.p-notice_blogTtl').hover(function(){

    jqOther('.js-blogFrame').toggleClass('is_frameMove');

});
jqOther('.p-notice_newsTtl').hover(function(){

    jqOther('.js-newsFrame').toggleClass('is_frameMove');

});