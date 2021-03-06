<?php get_header(); ?>
    <main class="l-main">

        <!-- fvのテンプレート呼び出し -->
        <?php get_template_part('template_parts/fvTtl'); ?>

        <!-- パンくずリストのテンプレート呼び出し -->
        <?php get_template_part('template_parts/breadcrumb'); ?>

        <div class="l-cont u-flex">
            <div class="l-cont_main">
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
                        <!-- /.p-singleNews_top -->

                        <figure class="p-singleNews_thumnail c-postThumnail js-object-fit">

                        <?php if ( has_post_thumbnail() ): ?><!-- if文による条件分岐 アイキャッチが有る時-->
                            <?php the_post_thumbnail( 'thumbnail' ); ?>
                        <?php else: ?><!-- アイキャッチが無い時-->
                            <img src="<?php echo esc_url( get_template_directory_uri() . '/img/blog_thumnail.jpg'); ?>" alt="アイキャッチがない時の画像です。" />
                        <?php endif; ?>

                        </figure>

                        <div class="p-singleNews_post c-postCont">
                            <?php the_content(); ?>
                        </div>
                        <!-- /.p-singleNews_post -->

                        <!-- prevNextのテンプレートの呼び出し -->
                        <?php get_template_part('template_parts/prevNext'); ?>

                    </div>
                    <!-- /.p-singleNews_inner -->
                </section>
            </div>
            <!-- /.l-cont_main -->

            <?php get_sidebar(); ?>

        </div>
        <!-- /.l-cont -->

        <!-- ctaのテンプレート呼び出し -->
        <?php get_template_part('template_parts/cta'); ?>

    </main>
<?php get_footer(); ?>