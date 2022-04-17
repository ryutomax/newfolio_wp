<?php get_header(); ?>

<main class="l-main">

    <!-- fvのテンプレート呼び出し -->
    <?php get_template_part('template_parts/fvTtl'); ?>

    <!-- パンくずリストのテンプレート呼び出し -->
    <?php get_template_part('template_parts/breadcrumb'); ?>

    <section class="p-contact c-frame_page">
        <div class="p-contact-inner">
            <div class="p-contact-desc"><p>お問い合わせ内容をご確認ください</p></div>

            <div class="p-contact-cont">

                <?php the_content(); ?>

            </div>
            <!-- /.p-contact-wrap -->
        </div>
        <!-- /.p-contact-inner -->
    </section>

</main>

<?php get_footer(); ?>