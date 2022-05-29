// ========================================
// スムーススクロール
// ========================================

const Ease = {
  easeInOut: (t) => { return t < 0.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;},
};
const jsSmoothScroll = [].slice.call(document.querySelectorAll('a[href^="#"]'));

jsSmoothScroll.forEach(function (scrollTrigger) {

  scrollTrigger.addEventListener("click", (e) => {
    //デフォルト打ち消し
    e.preventDefault();
    e.stopPropagation();

    const href = scrollTrigger.getAttribute("href");
    const target = document.getElementById(href.replace("#", ""));
    const current = document.documentElement.scrollTop || document.body.scrollTop;

    //スクロール先要素
    const offset = window.pageYOffset + target.getBoundingClientRect().top - 70;
    const startTime = performance.now();

    const loop = function (nowTime) {
      const passTime = nowTime - startTime; //経過時間を取得
      const normalizedTime = passTime / 1000; //durationTime
      if (normalizedTime < 1) {
        window.scrollTo(0, current + (offset - current) * Ease.easeInOut(normalizedTime));
        requestAnimationFrame(loop); //anime実行
      } else {
        window.scrollTo(0, offset);
      }
    };
    requestAnimationFrame(loop); //anime実行
  });
});
// });
// ========================================
// スムースクロール終了
// ========================================

// ========================================
// ヘッダー変形
// ========================================

function FixedAnime() {
  $(window).scroll(function () {
    var headerH = $(".js-header-scroll").outerHeight(true); //headerの高さを取得

    var $header = $(".js-header-scroll");
    var $headerCopy = $(".js-header-copy");
    var $headerLogo = $(".js-header-logo");
    var $headerbottom = $(".js-header-bottom");
    var $headerfc = $(".js-header-fc");

    // header高以上スクロールしたら処理
    if ($(window).scrollTop() > headerH) {
      $header.addClass("is-header_op07_h80_slidein");
      $headerCopy.addClass("is-header_txtNone");
      $headerLogo.addClass("is-header-logo");
      $headerbottom.addClass("is-header-bottom");
      $headerfc.addClass("is-header-fc");

      // $header.removeAttr('data-aos');       //AOS削除
    } else {
      $header.removeClass("is-header_op07_h80_slidein");
      $headerCopy.removeClass("is-header_txtNone");
      $headerLogo.removeClass("is-header-logo");
      $headerbottom.removeClass("is-header-bottom");
      $headerfc.removeClass("is-header-fc");
    }
  });
  /* ウィンドウサイズ860以上の処理を記述 */
  $(window).on("load scroll", function () {
    if (window.matchMedia("(min-width: 860px)").matches) {
      var $logo = $(".js-header-h65-scroll");
      if ($(window).scrollTop() > 200) {
        $logo.addClass("is-header__h65");
      } else {
        $logo.removeClass("is-header__h65");
      }
    }
  });
}
//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
$(window).on("load", function () {
  FixedAnime();
});
// ========================================
// ヘッダー変形 終了
// ========================================

// =========================
// スライドインアニメ
// =========================
function slideInAnime() {
  //動きの指定
  $(".js-fadeIn_shadow").each(function () {
    const elemPos = $(this).offset().top + 100; //要素より100px下
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("is-fadeIn_shadow");
    } else {
      // $(this).removeClass('is-fadeIn_shadow');// 画面外に出たらfadeInというクラス名を外す
    }
  });

  $(".js-fadeIn_shadow_2n").each(function () {
    const elemPos = $(this).offset().top + 100; //要素より100px下
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("is-fadeIn_shadow_2n");
    } else {
      // $(this).removeClass('is-fadeIn_shadow_2n');// 画面外に出たらfadeInというクラス名を外す
    }
  });
}
// スクロール
$(window).scroll(function () {
  slideInAnime();
});

// ロード
$(window).on("load", function () {
  slideInAnime();
});

// =========================
// タイトル Waveアニメーション
// =========================

function waveAnime() {
  //動きの指定
  $(".js-wave").each(function () {
    const elemPos = $(this).offset().top + 50; //要素より50px下
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("is-show__wave");
    } else {
      $(this).removeClass("is-show__wave"); // 画面外に出たらfadeInというクラス名を外す
    }
  });
}
// スクロール
$(window).scroll(function () {
  waveAnime();
});

// ロード
$(window).on("load", function () {
  waveAnime();
});

// =========================
// テキスト BGアニメーション
// =========================
function BgFadeAnime() {
  //=============
  //背景スライドイン
  //=============
  $(".js-bgLRextend_scroll").each(function () {
    const elemPos = $(this).offset().top - 50; //要素より50px下
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    const speed = 1500;
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("is-bgLRextend");
    } else {
      // $(this).removeClass('is-bgLRextend');
    }
  });

  $(".js-bgLRextend_scroll2").each(function () {
    const elemPos = $(this).offset().top - 50; //要素より50px下
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("is-bgLRextend2");
    } else {
      // $(this).removeClass('is-bgLRextend2');
    }
  });
  $(".js-bgLRextend_scroll3").each(function () {
    const elemPos = $(this).offset().top - 50; //要素より50px下
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("is-bgLRextend3");
    } else {
      // $(this).removeClass('is-bgLRextend3');
    }
  });

  //============
  //テキスト出現
  //============
  $(".js-bgShow_txt_scroll").each(function () {
    const elemPos = $(this).offset().top - 50; //要素より50px下
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("is-bgShow");
    } else {
      // $(this).removeClass('is-bgShow');
    }
  });
  $(".js-bgShow_txt_scroll2").each(function () {
    const elemPos = $(this).offset().top - 50; //要素より50px下
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("is-bgShow2");
    } else {
      // $(this).removeClass('is-bgShow');
    }
  });
  $(".js-bgShow_txt_scroll3").each(function () {
    const elemPos = $(this).offset().top - 50; //要素より50px下
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("is-bgShow3");
    } else {
      // $(this).removeClass('is-bgShow');
    }
  });

  //============
  //マーカー
  //============
  $(".js-underL_scroll").each(function () {
    const elemPos = $(this).offset().top - 50; //要素より50px下
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this)
        .delay(750)
        .queue(function () {
          $(this).addClass("is-underL_scroll").dequeue();
        });
    } else {
      // $(this).removeClass('is-underL_scroll');
    }
  });
}
// スクロール
$(window).scroll(function () {
  BgFadeAnime();
});
// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  BgFadeAnime();
});

//FV アニメーション//////////////////////////////////////
function FvBgAnime() {
  // 背景色が伸びて出現（左から右）
  $(".js-bgLRextend").addClass("is-bgLRextend");
  $(".js-bgLRextend2")
    .delay(500)
    .queue(function () {
      $(this).addClass("is-bgLRextend").dequeue();
    });
  // テキスト出現
  $(".js-bgShow_txt").addClass("is-bgShow");
  $(".js-bgShow_txt2")
    .delay(500)
    .queue(function () {
      $(this).addClass("is-bgShow").dequeue();
    });
  //アンダーライン
  $(".js-underL")
    .delay(2000)
    .queue(function () {
      $(this).addClass("is-underL").dequeue();
    });
}
// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  FvBgAnime();
});
