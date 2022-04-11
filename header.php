<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="">
        <meta name="description" content="">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=BIZ+UDGothic:wght@400;700&family=Noto+Sans+JP:wght@400;700&family=Reggae+One&family=Zen+Maru+Gothic:wght@400;700&display=swap" rel="stylesheet">
        
        <link rel="stylesheet" href="https://unpkg.com/scroll-hint@latest/css/scroll-hint.css">

        <?php wp_head(); ?>

    </head>
    <body <?php body_class(); ?>>

        <?php wp_body_open(); ?>

        <header class="l-header js-header-scroll u-zindex_10000">
            <div class="l-header_inner">
                <div class="p-header_top">
                    <div class="p-header_copy js-header-copy">
                        <h1>
                            <span>ふじみ野市でホームページ制作</span>
                            <span>Webサイト制作で集客をサポート</span>
                        </h1>
                    </div>
                    <!-- /.p-header_copy -->
                </div>
                <!-- /.p-header_top -->
                <div class="p-header_bottom js-header-bottom">
                    <h1 class="p-header_logo c-logo js-header-logo"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/logo.png"); ?>" alt="main-logo"></h1>
                    <nav class="p-header_nav">
                        <ul class="p-header_navList js-nav__open">
                            <li class="p-header_navItem">
                                <a href="/" ontouchstart="">ホーム</a>
                            </li>
                            <li class="p-header_navItem">
                                <a href="/" ontouchstart="">私について</a>
                            </li>
                            <li class="p-header_navItem">
                                <a href="/" ontouchstart="">私の強み</a>
                            </li>
                            <li class="p-header_navItem">
                                <a href="/" ontouchstart="">サービス</a>
                            </li>
                            <li class="p-header_navItem">
                                <a href="/" ontouchstart="">お知らせ</a>
                            </li>
                            <li class="p-header_navItem c-btn">
                                <a href="/" ontouchstart="">お問い合わせ</a>
                            </li>
                        </ul>
                        <div class="p-header_navBtn js-humber u-zindex_1000">
                            <span></span>
                            <span>Menu</span>
                            <span></span>
                            <span>Close</span>
                        </div>
                    </nav>
                    <!-- /.l-header_logo -->
                </div>
                <!-- /.l-header_bottom -->

            </div>
            <!-- /.l-header_inner -->
        </header>
