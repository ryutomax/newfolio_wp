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

            <section class="p-contact c-frame">
                <div class="p-contact-inner">
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
                    <div class="p-contact-cont">
                        <div class="p-contact_thanks">
                            <p>お問い合わせいただきありがとうございます.<br>内容を確認した後、担当者よりご連絡いたします.</p>
                        </div>
                        <!-- /.p-complete-txt -->
                        <div class="p-contact_back"><a href="#">ホームへ戻る</a></div>
                    </div>
                    <!-- /.p-complete-cont -->
                </div>
                <!-- /.p-complete-inner -->
            </section>
        </main>

        <?php get_footer(); ?>