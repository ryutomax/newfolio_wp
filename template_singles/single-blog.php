<?php get_header(); ?>
<main class="l-main">

    <!-- fvのテンプレート呼び出し -->
    <?php get_template_part('template_parts/fvTtl'); ?>

    <!-- パンくずリストのテンプレート呼び出し -->
    <?php get_template_part('template_parts/breadcrumb'); ?>

    <div class="l-cont u-flex">
        <div class="l-cont_main">

            <section class="p-singleBlog c-frame_page">

                <div class="p-singleBlog_inner">
                    <div class="p-singleBlog_top">
                        <div class="p-singleBlog_cat">
                            <span>
                                <?php
                                    $category = get_the_category();
                                    echo $category[0]->name;
                                ?>
                            </span>
                        </div>
                        <!-- /.p-singleBlog_cat -->
                        <div class="p-singleBlog_ttl c-sec-ttl">
                            <h1><?php the_title(); ?></h1>
                        </div>
                        <!-- /.p-singleBlog_ttl -->
                        <div class="p-singleBlog_date">
                            <time datetime="<?php the_time('Y-m-d'); ?>">
                                <?php the_time('Y-m-d'); ?>
                            </time>
                        </div>
                        <!-- /.p-singleBlog_date -->
                    </div>
                    <!-- /.p-singleBlog_top -->

                    <figure class="p-singleBlog_thumnail js-object-fit">
                    <?php if ( has_post_thumbnail() ): ?><!-- if文による条件分岐 アイキャッチが有る時-->
                        <?php the_post_thumbnail( 'thumbnail' ); ?>
                    <?php else: ?><!-- アイキャッチが無い時-->
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/img/blog_thumnail.jpg'); ?>" alt="アイキャッチがない時の画像です。" />
                    <?php endif; ?>
                    </figure>

                    <div class="p-singleBlog_post c-content_post">
                        <?php the_content(); ?>
                    </div>
                    <!-- /.p-content-wrap -->
                </div>
                <!-- /.p-singleBlog_inner -->
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