        <?php get_header(); ?>

        <main class="l-main">

            <section class="p-fvTtl" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_other.png"); ?>');">
                <div class="p-fvTtl_inner" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_in_other.png"); ?>');">
                    <h2><?php the_title(); ?></h2>
                </div>
                <!-- /.p-fvTtl_inner -->
            </section>


            <div class="p-content__breadcrumb c-breadcrumb">
                <div class="c-breadcrumb-inner">
                    <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
                        <?php
                            if(function_exists('bcn_display')){
                                bcn_display();
                            }
                        ?>
                    </div>
                </div>
            </div>

            <section class="p-flow c-frame_page">
                <div class="p-flow_inner">
                    <div class="p-flow_ttl c-secTtl">
                        <figure class="p-flow_ttlImg c-secTtl_img"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/ttl_upper/flow_ttl.png"); ?>" alt="ttl-img"></figure>
                        <h3>
                            <span class="js-wave">制</span>
                            <span class="js-wave">作</span>
                            <span class="js-wave">の</span>
                            <span class="js-wave">流</span>
                            <span class="js-wave">れ</span>
                        </h3>
                    </div>
                    <!-- /.p-notice_ttl -->
                    <div class="p-flow_cont">
                        <ul class="p-flow_list">
                            <li class="p-flow_item">
                                <figure class="p-flow_img js-object-fit">
                                    <img src="<?php echo esc_url(get_template_directory_uri() . "/img/flow/flow_contact.jpg"); ?>" alt="お問い合わせ">
                                </figure>
                                <div class="p-flow_wrapper">
                                    <h4 class="p-flow_itemTtl">お問い合わせ</h4>
                                    <div class="p-flow_txt">
                                        <p>お問い合わせフォームよりご連絡ください.ご気軽にお問い合わせください.<br>※2日以内に返信いたします.</p>
                                    </div>
                                    <!-- /.p-flow_txt -->
                                    <div class="p-flow_btn c-btn">
                                        <a href="/contact" ontouchstart="">お問い合わせ</a>
                                    </div>
                                    <div class="p-flow_bgTxt"><p>Contact</p></div>
                                </div>
                                <!-- /.p-flow_txt -->
                            </li>
                            <li class="p-flow_item">
                                <figure class="p-flow_img js-object-fit"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/flow/flow_hearing.jpg"); ?>" alt="ヒアリング"></figure>
                                <div class="p-flow_wrapper">
                                    <h4 class="p-flow_itemTtl">ヒアリング</h4>
                                    <div class="p-flow_txt">
                                        <p>お問い合わせの情報を基に、イメージや目的などをヒアリングし、大まかなレイアウトなどを決め、見積もりを出します.<br>基本的にリモートでの対応とさせていただきます.</p>
                                    </div>
                                    <!-- /.p-flow_txt -->
                                    <div class="p-flow_bgTxt"><p>Hearing</p></div>
                                </div>
                            </li>
                            <li class="p-flow_item">
                                <figure class="p-flow_img js-object-fit"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/flow/flow_contract.jpg"); ?>" alt="契約"></figure>
                                <div class="p-flow_wrapper">
                                    <h4 class="p-flow_itemTtl">ご契約</h4>
                                    <div class="p-flow_txt">
                                        <p>基本的に業務委託契約という形で契約をお願いをしております.<br>また、リモートでお手続き可能な電子署名サービスを用いた契約を推奨させていただいております.</p>
                                    </div>
                                    <!-- /.p-flow_txt -->
                                    <div class="p-flow_bgTxt"><p>Contract</p></div>
                                </div>
                            </li>
                            <li class="p-flow_item">
                                <figure class="p-flow_img js-object-fit"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/flow/flow_coding.jpg"); ?>" alt="制作・修正"></figure>
                                <div class="p-flow_wrapper">
                                    <h4 class="p-flow_itemTtl">制作・修正</h4>
                                    <div class="p-flow_txt">
                                        <p>ご契約後、ヒアリングで得たご希望をもとに認識を合わせ、修正を加えながら意向に合った制作を進めさせていただきます.<br>制作中も不安を感じないように、こまめに進捗ご連絡します.</p>
                                    </div>
                                    <!-- /.p-flow_txt -->
                                    <div class="p-flow_bgTxt"><p>Product</p></div>
                                </div>
                            </li>
                            <li class="p-flow_item">
                                <figure class="p-flow_img js-object-fit"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/flow/flow_support.jpg"); ?>" alt="サポート"></figure>
                                <div class="p-flow_wrapper">
                                    <h4 class="p-flow_itemTtl">納品・サポート</h4>
                                    <div class="p-flow_txt">
                                        <p>実装したサイトをご確認いただき、修正がなければ納品となります.納品日から1ヶ月間は無償で不具合の修正等対応いたします.<br>ご気軽にご相談ください！！</p>
                                    </div>
                                    <!-- /.p-flow_txt -->
                                    <div class="p-flow_bgTxt"><p>Support</p></div>
                                </div>
                                <!-- /.p-flow_txt -->
                            </li>
                        </ul>
                    </div>
                    <!-- /.p-activity_cont -->
                </div>
                <!-- /.p-activity_inner -->
            </section>

            <!-- ctaのテンプレート呼び出し -->
            <?php get_template_part('template_parts/cta'); ?>

        </main>

        <?php get_footer(); ?>