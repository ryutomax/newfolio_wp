        <?php get_header(); ?>

        <main class="l-main">

            <!-- fvのテンプレート呼び出し -->
            <?php get_template_part('template_parts/fvTtl'); ?>

            <!-- パンくずリストのテンプレート呼び出し -->
            <?php get_template_part('template_parts/breadcrumb'); ?>

            <section class="p-contact c-frame_page">
                <div class="p-contact_inner">
                    <div class="p-contact_ttl c-secTtl">
                        <figure class="p-contact_ttlImg c-secTtl_img"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/ttl_upper/thanks_ttl.png"); ?>" alt="ttl-img"></figure>
                        <h3>
                            <span class="js-wave">送</span>
                            <span class="js-wave">信</span>
                            <span class="js-wave">完</span>
                            <span class="js-wave">了</span>

                        </h3>
                    </div>
                    <!-- /.p-about_ttl -->
                    <div class="p-contact_cont">
                        <div class="p-contact_thanks">
                            <p class="p-contact_thanksTxt">お問い合わせいただきありがとうございます.<br>内容を確認した後、担当者よりご連絡いたします.</p>
                            <p class="p-contact_thanksTxt">また、ご入力されたメールアドレス宛てに完了メールが自動送信されます.ご確認ください.</p>
                        </div>
                        <!-- /.p-complete-txt -->
                        <div class="p-contact_back"><a href="<?php echo esc_url(home_url('/')); ?>">ホームへ戻る</a></div>
                    </div>
                    <!-- /.p-complete-cont -->
                </div>
                <!-- /.p-complete-inner -->
            </section>
        </main>

        <?php get_footer(); ?>