"use strict";

//----------------------------------------------------------------------
//  モジュール読み込み
//----------------------------------------------------------------------
const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");

const plumber = require("gulp-plumber");
const sassGlob = require("gulp-sass-glob-use-forward");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const cleancss = require("gulp-clean-css");
const media = require("gulp-group-css-media-queries");
const gulpPostcss = require('gulp-postcss');
const cssDeclarationSorter = require('css-declaration-sorter');

const bs = require("browser-sync");

//----------------------------------------------------------------------
//  関数定義
//----------------------------------------------------------------------
function compile(done) {
    src(
        "./scss/**/*.scss",
        )
        .pipe(plumber())                   // watch中にエラーが発生してもwatchが止まらないようにする
        .pipe(sassGlob())                  // glob機能を使って@useや@forwardを省略する
        .pipe(sass(
            {
                includePaths: ['./scss/']
            }
        ))                                 // sassコンパイル
        .pipe(autoprefixer({
            cascade: false
        }))                                // ベンダープレフィック自動付与(sass後)
        .pipe(gulpPostcss(
            [cssDeclarationSorter({
                    order: 'smacss'
                })]
        ))                                 //css整列
        .pipe(media())                     // メディアクエリ統合
        .pipe(dest("./css_origin/"));

    done();
}

function min(done) {
    src(
        "./css_origin/*.css",
        )
        .pipe(plumber())                   // watch中にエラーが発生してもwatchが止まらないようにする
        .pipe(cleancss())                  // 圧縮 コードの不要なインデントや改行を削除
        .pipe(dest("./css_min/"));

    done();
}
//----------------------------------------------------------------------
//  watch関数定義
//----------------------------------------------------------------------
function watchTask(done) {
    // watch( "監視したいファイル(またはフォルダ)を指定" , 処理 );
    watch("./scss/**/*.scss" , series(compile,min));
}
exports.watch = series(watchTask);

// ========================================
// ローカル自動ロード
// ========================================
// function bsInit(done) {
//     bs.init({
//         proxy: "localhost:10018",       // ローカルにある「Site Domain」に合わせる
//         notify: false,                  // ブラウザ更新時に出てくる通知を非表示にする
//         open: "external",               // ローカルIPアドレスでサーバを立ち上げる
//     });

//         done();
//     }

//     function bsReload(done) {
//         bs.reload();

//         done();
//     }

//     function watchTask(done) {
//         watch(["./**", "!./*.css"], series(bsReload));    //	監視対象とするパスはお好みで
//     }
//     exports.bs = series(bsInit, bsReload, watchTask);


// ========================================
// img最適化
// ========================================

// //----------------------------------------------------------------------
// //  モジュール読み込み
// //----------------------------------------------------------------------

const imageMin = require("gulp-imagemin");              // npm i -D gulp-imagemin@7.1.0
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const changed = require("gulp-changed");

// //----------------------------------------------------------------------
// //  関数定義
// //----------------------------------------------------------------------
function imagemin(done) {
    src("./img_origin/*")
    .pipe(changed("./img/"))
    .pipe(
        imageMin([
            pngquant({
                quality: [0.6, 0.7],
                speed: 1,
            }),
            mozjpeg({ quality: 65 }),
            imageMin.svgo(),
            imageMin.optipng(),
            imageMin.gifsicle({ optimizationLevel: 3 }),
        ])
    )
    .pipe(dest("./img/"));

    done();
}

// // //----------------------------------------------------------------------
// // //  タスク定義
// // //----------------------------------------------------------------------
exports.imgin = imagemin;

// /************************************************************************/
// /*  END OF FILE                                                         */
// /************************************************************************/