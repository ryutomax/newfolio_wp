        <?php get_header(); ?>

        <main class="l-main">
            <!-- fvのテンプレート呼び出し -->
            <?php get_template_part('template_parts/fvTtl'); ?>

            <!-- パンくずリストのテンプレート呼び出し -->
            <?php get_template_part('template_parts/breadcrumb'); ?>

            <section class="p-contact c-frame_page">
                <div class="p-contact_inner">
                    <div class="p-contact_desc">
                        <p>ご相談・お問い合わせはこちらのフォームをご利用ください.</p>
                    </div>

                    <div class="p-contact_cont">

                        <?php
                            while ( have_posts() ) {
                                the_post();
                                the_content();
                            }
                        ?>

                    </div>
                    <!-- /.p-contact_wrap -->
                </div>
                <!-- /.p-contact_inner -->
            </section>
        </main>

        <?php get_footer(); ?>
