// ========================================
// スムーススクロール
// ========================================

const Ease = {
  easeInOut: (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
};
const jsSmoothScroll = [].slice.call(document.querySelectorAll('a[href^="#"]'));

jsSmoothScroll.forEach(function (scrollTrigger) {
  scrollTrigger.addEventListener("click", (e) => {
    //デフォルト打ち消し
    e.preventDefault();
    e.stopPropagation();

    const href = scrollTrigger.getAttribute("href");
    const target = document.getElementById(href.replace("#", ""));
    const current =
      document.documentElement.scrollTop || document.body.scrollTop;

    //スクロール先要素
    const offset = window.pageYOffset + target.getBoundingClientRect().top - 70;
    const startTime = performance.now();

    const loop = function (nowTime) {
      const passTime = nowTime - startTime; //経過時間を取得
      const normalizedTime = passTime / 1000; //durationTime
      if (normalizedTime < 1) {
        window.scrollTo(
          0,
          current + (offset - current) * Ease.easeInOut(normalizedTime)
        );
        requestAnimationFrame(loop); //anime実行
      } else {
        window.scrollTo(0, offset);
      }
    };
    requestAnimationFrame(loop); //anime実行
  });
});
// ========================================
// スムースクロール終了
// ========================================

// ========================================
// ヘッダー変形
// ========================================

window.addEventListener('scroll', () => {
  const headerH = document.getElementsByClassName("js-header-scroll")[0].clientHeight; //headerの高さを取得
  const scrollH = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var header = document.getElementsByClassName("js-header-scroll")[0];
  var headerCopy = document.getElementsByClassName("js-header-copy")[0];
  var headerLogo = document.getElementsByClassName("js-header-logo")[0];
  var headerBottom = document.getElementsByClassName("js-header-bottom")[0];
  var headerColors = document.getElementsByClassName("js-header-fc");

  header.classList.toggle("is-header_op07_h80_slidein", scrollH > headerH);
  headerCopy.classList.toggle("is-header_txtNone", scrollH > headerH);
  headerLogo.classList.toggle("is-header-logo", scrollH > headerH);
  headerBottom.classList.toggle("is-header-bottom", scrollH > headerH);
  Array.prototype.forEach.call(headerColors, (headerColor) => {
    headerColor.classList.toggle("is-header-color", scrollH > headerH);
  });
});
// ========================================
// ヘッダー変形 終了
// ========================================

// =========================
// スライドインアニメ
// =========================
const windowHeight = window.innerHeight; // 現在のブラウザの高さ
const scroll = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  const slideInTarget = [].slice.call(document.querySelectorAll(".js-fadeIn_shadow"));
  const slideInTarget2 = [].slice.call(document.querySelectorAll(".js-fadeIn_shadow_2n"));

  for (let i = 0; i < slideInTarget.length; i++) {
    const rect = slideInTarget[i].getBoundingClientRect().top;
    const offset = rect + scroll;
    if (scroll > offset - windowHeight + 150) {
      slideInTarget[i].classList.add("is-fadeIn_shadow");
    }
  }
  for (let i = 0; i < slideInTarget2.length; i++) {
    const rect = slideInTarget2[i].getBoundingClientRect().top;
    const offset = rect + scroll;
    if (scroll > offset - windowHeight + 150) {
      slideInTarget2[i].classList.add("is-fadeIn_shadow_2n");
    }
  }

  // =========================
  // タイトル Waveアニメーション
  // =========================

  const waveTarget = [].slice.call(document.querySelectorAll(".js-wave"));

  for (let i = 0; i < waveTarget.length; i++) {
    const rect = waveTarget[i].getBoundingClientRect().top;
    const offset = rect + scroll;

    if (scroll > offset - windowHeight + 150) {
      waveTarget[i].classList.add("is-show__wave");
    } else {
      waveTarget[i].classList.remove("is-show__wave");
    }
  }
  // =========================
  // テキスト BGアニメーション
  // =========================
  // =============
  // 背景スライドイン
  // =============
  const bgLRextendTarget = [].slice.call(document.querySelectorAll(".js-bgLRextend_scroll"));
  const bgLRextend2Target = [].slice.call(document.querySelectorAll(".js-bgLRextend_scroll2"));
  const bgLRextend3Target = [].slice.call(document.querySelectorAll(".js-bgLRextend_scroll3"));

  for (let i = 0; i < bgLRextendTarget.length; i++) {
    const rect = bgLRextendTarget[i].getBoundingClientRect().top;
    const offset = rect + scroll;
    if (scroll > offset - windowHeight - 50) {
      bgLRextendTarget[i].classList.add("is-bgLRextend");
    }
  }
  for (let i = 0; i < bgLRextend2Target.length; i++) {
    const rect = bgLRextend2Target[i].getBoundingClientRect().top;
    const offset = rect + scroll;
    if (scroll > offset - windowHeight - 50) {
      bgLRextend2Target[i].classList.add("is-bgLRextend2");
    }
  }
  for (let i = 0; i < bgLRextend3Target.length; i++) {
    const rect = bgLRextend3Target[i].getBoundingClientRect().top;
    const offset = rect + scroll;
    if (scroll > offset - windowHeight - 50) {
      bgLRextend3Target[i].classList.add("is-bgLRextend3");
    }
  }
  // ============
  // テキスト出現
  // ============
  const bgShowTxtTarget = [].slice.call(document.querySelectorAll(".js-bgShow_txt_scroll"));
  const bgShowTxt2Target = [].slice.call(document.querySelectorAll(".js-bgShow_txt_scroll2"));
  const bgShowTxt3Target = [].slice.call(document.querySelectorAll(".js-bgShow_txt_scroll3"));

  for (let i = 0; i < bgShowTxtTarget.length; i++) {
    const rect = bgShowTxtTarget[i].getBoundingClientRect().top;
    const offset = rect + scroll;

    if (scroll > offset - windowHeight - 50) {
      bgShowTxtTarget[i].classList.add("is-bgShow");
    }
  }
  for (let i = 0; i < bgShowTxt2Target.length; i++) {
    const rect = bgShowTxt2Target[i].getBoundingClientRect().top;
    const offset = rect + scroll;

    if (scroll > offset - windowHeight - 50) {
      bgShowTxt2Target[i].classList.add("is-bgShow2");
    }
  }
  for (let i = 0; i < bgShowTxt3Target.length; i++) {
    const rect = bgShowTxt3Target[i].getBoundingClientRect().top;
    const offset = rect + scroll;

    if (scroll > offset - windowHeight - 50) {
      bgShowTxt3Target[i].classList.add("is-bgShow3");
    }
  }

  //============
  //マーカー
  //============
  const underLTarget = [].slice.call(document.querySelectorAll(".js-underL_scroll"));
  for (let i = 0; i < underLTarget.length; i++) {
    const rect = underLTarget[i].getBoundingClientRect().top;
    const offset = rect + scroll;
    if (scroll > offset - windowHeight - 50) {
      const delayFunc = () => {underLTarget[i].classList.add("is-underL_scroll")}
      setTimeout(delayFunc, 750);
    }
  }
});

// ========================================
// FV アニメーション
// ========================================
window.addEventListener('load', () => {
  const bgLRextendTarget = [].slice.call(document.querySelectorAll(".js-bgLRextend"));
  const bgLRextend2Target = [].slice.call(document.querySelectorAll(".js-bgLRextend2"));
  for (let i = 0; i < bgLRextendTarget.length; i++) {
    bgLRextendTarget[i].classList.add("is-bgLRextend");
    setTimeout(() => {bgLRextend2Target[i].classList.add("is-bgLRextend")}, 500);
  }
  // テキスト出現
  const bgShowTxtTarget = [].slice.call(document.querySelectorAll(".js-bgShow_txt"));
  const bgShowTxt2Target = [].slice.call(document.querySelectorAll(".js-bgShow_txt2"));
  for (let i = 0; i < bgShowTxtTarget.length; i++) {
    bgShowTxtTarget[i].classList.add("is-bgShow");
    setTimeout(() => {bgShowTxt2Target[i].classList.add("is-bgShow")}, 500);
  }
  //アンダーライン
  const underLTarget = [].slice.call(document.querySelectorAll(".js-underL"));
  for (let i = 0; i < underLTarget.length; i++) {
    setTimeout(() => {underLTarget[i].classList.add("is-underL")}, 2000);
  }
});