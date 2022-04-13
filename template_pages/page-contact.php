        <?php get_header(); ?>

        <main class="l-main">
            <!-- fvのテンプレート呼び出し -->
            <?php get_template_part('template_parts/fvTtl'); ?>

            <!-- パンくずリストのテンプレート呼び出し -->
            <?php get_template_part('template_parts/breadcrumb'); ?>

            <section class="p-contact c-frame_page">
                <div class="p-contact-inner">
                    <div class="p-contact-desc">
                        <p>ご相談・お問い合わせはこちらのフォームをご利用ください.</p>
                    </div>

                    <div class="p-contact-cont">

                        <?php
                            while ( have_posts() ) {
                                the_post();
                                the_content();
                            }
                        ?>

                    </div>
                    <!-- /.p-content-wrap -->
                </div>
                <!-- /.p-content-inner -->
            </section>
        </main>

        <?php get_footer(); ?>
