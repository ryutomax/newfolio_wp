        <?php get_header(); ?>
        <main class="l-main">

            <!-- fvのテンプレート呼び出し -->
            <?php get_template_part('template_parts/fvTtl'); ?>

            <!-- パンくずリストのテンプレート呼び出し -->
            <?php get_template_part('template_parts/breadcrumb'); ?>

            <section class="p-content">
                <div class="p-content-inner">
                    <div class="p-content-head">
                        <div class="p-news-content__ttl-wp c-sec-ttl"><h2><?php the_title(); ?></h2></div>
                        <div class="p-news-content__date-wp">
                            <time datetime="<?php the_time('Y-m-d'); ?>">
                                <?php the_time('Y-m-d'); ?>
                            </time>
                        </div>
                        <!-- /.p-news-content__date-wp -->
                    </div>
                    <!-- /.p-content-head -->
                    <div class="p-news-content__post p-content-post">
                        <?php the_content(); ?>
                    </div>
                    <!-- /.p-content-wrap -->
                </div>
                <!-- /.p-content-inner -->
            </section>
        <?php get_footer(); ?>