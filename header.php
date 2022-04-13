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
        <link href="https://fonts.googleapis.com/css2?family=Anek+Odia:wght@400;700&family=BIZ+UDGothic:wght@400;700&family=Inconsolata:wght@400;700&family=Noto+Sans+JP:wght@400;700&family=Plus+Jakarta+Sans:wght@400;700&family=Rajdhani:wght@400;700&family=Reggae+One&family=Zen+Maru+Gothic:wght@400;700&display=swap" rel="stylesheet">
        
        <?php wp_head(); ?>

    </head>
    <body <?php body_class(); ?>>

        <?php wp_body_open(); ?>

        <?php if(is_front_page()): ?>
        <header class="l-header-home js-header-scroll u-zindex_10000">
        <?php else: ?>
        <header class="l-header js-header-scroll u-zindex_10000">
        <?php endif; ?>
            <div class="l-header_inner">
                <div class="p-header_top">
                    <?php if(is_front_page()): ?>
                    <div class="p-header_copy-home js-header-copy">
                    <?php else: ?>
                    <div class="p-header_copy js-header-copy">
                    <?php endif; ?>
                        <h1>
                            <span>ふじみ野市でホームページ制作</span>
                            <span>Webサイト制作で集客をサポート</span>
                        </h1>
                    </div>
                    <!-- /.p-header_copy -->
                </div>
                <!-- /.p-header_top -->
                <div class="p-header_bottom js-header-bottom">

                    <h1 class="p-header_logo c-logo js-header-logo">
                        <a href="<?php echo esc_url( home_url('/')); ?>" ontouchstart="">
                        <?php if(is_front_page()): ?>
                        <img src="<?php echo esc_url(get_template_directory_uri() . "/img/logo/logo.png"); ?>" alt="main-logo">
                        <?php else: ?>
                        <img src="<?php echo esc_url(get_template_directory_uri() . "/img/logo/logo_bg.png"); ?>" alt="main-logo">
                        <?php endif; ?>
                        </a>
                    </h1>

                    <nav class="p-header_nav">
                        <ul class="p-header_navList js-nav__open">
                            <?php if(is_front_page()): ?>
                            <li class="p-header_navItem-home js-scroll_about">
                                <a href="#" ontouchstart="">私について</a>
                            </li>
                            <li class="p-header_navItem-home js-scroll_strengths">
                                <a href="#" ontouchstart="">私の強み</a>
                            </li>
                            <li class="p-header_navItem-home js-scroll_service">
                                <a href="#" ontouchstart="">サービス</a>
                            </li>
                            <li class="p-header_navItem-home js-scroll_works">
                                <a href="#" ontouchstart="">制作実績</a>
                            </li>
                            <li class="p-header_navItem-home js-scroll_notice">
                                <a href="#" ontouchstart="">お知らせ</a>
                            </li>

                            <?php else: ?>
                            <li class="p-header_navItem js-header-fc js-scroll_about">
                                <a href="<?php echo esc_url(home_url('/'));?>#about" ontouchstart="">私について</a>
                            </li>
                            <li class="p-header_navItem js-header-fc js-scroll_strengths">
                                <a href="<?php echo esc_url(home_url('/'));?>#strength" ontouchstart="">私の強み</a>
                            </li>
                            <li class="p-header_navItem js-header-fc js-scroll_service">
                                <a href="<?php echo esc_url(home_url('/'));?>#service" ontouchstart="">サービス</a>
                            </li>
                            <li class="p-header_navItem js-header-fc js-scroll_works">
                                <a href="<?php echo esc_url(home_url('/'));?>#works" ontouchstart="">制作実績</a>
                            </li>
                            <li class="p-header_navItem js-header-fc js-scroll_notice">
                                <a href="<?php echo esc_url(home_url('/'));?>#notice" ontouchstart="">お知らせ</a>
                            </li>
                            <?php endif; ?>

                            <li class="p-header_navItem c-btn">
                                <a href="<?php echo esc_url( home_url('/contact')); ?>" ontouchstart="">お問い合わせ</a>
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
