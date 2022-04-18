        <?php get_header(); ?>

        <main class="l-main">

            <!-- fvのテンプレート呼び出し -->
            <?php get_template_part('template_parts/fvTtl'); ?>

            <!-- パンくずリストのテンプレート呼び出し -->
            <?php get_template_part('template_parts/breadcrumb'); ?>

            <section class="p-privacy c-frame_page">
                <div class="p-privacy_inner">
                    <div class="p-privacy_cont">
                        <?php the_content(); ?>
                    </div>
                    <!-- /.p-complete-cont -->
                </div>
                <!-- /.p-complete-inner -->
            </section>

            <!-- ctaのテンプレート呼び出し -->
            <?php get_template_part('template_parts/cta'); ?>

        </main>

        <?php get_footer(); ?>