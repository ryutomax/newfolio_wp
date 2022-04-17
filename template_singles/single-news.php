<?php get_header(); ?>
        <main class="l-main">

            <!-- fvのテンプレート呼び出し -->
            <?php get_template_part('template_parts/fvTtl'); ?>

            <!-- パンくずリストのテンプレート呼び出し -->
            <?php get_template_part('template_parts/breadcrumb'); ?>

            <section class="p-singleNews c-frame_page">
                <div class="p-singleNews_inner">
                    <div class="p-singleNews_top">
                        <div class="p-singleNews_ttl c-sec-ttl"><h2><?php the_title(); ?></h2></div>
                        <div class="p-singleNews_date">
                            <time datetime="<?php the_time('Y-m-d'); ?>">
                                <?php the_time('Y-m-d'); ?>
                            </time>
                        </div>
                        <!-- /.p-news-content__date-wp -->
                    </div>
                    <!-- /.p-contact-head -->
                    <div class="p-singleNews_post">
                        <?php the_content(); ?>
                    </div>
                    <!-- /.p-contact-wrap -->

                    <!-- prevNextのテンプレートの呼び出し -->
                    <?php get_template_part('template_parts/prevNext'); ?>

                </div>
                <!-- /.p-contact-inner -->
            </section>
        <!-- ctaのテンプレート呼び出し -->
        <?php get_template_part('template_parts/cta'); ?>

    </main>
<?php get_footer(); ?>