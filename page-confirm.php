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
            <div class="p-contact-desc"><p>お問い合わせ内容をご確認ください</p></div>

            <div class="p-contact-cont">

                <?php the_content(); ?>

            </div>
            <!-- /.p-content-wrap -->
        </div>
        <!-- /.p-content-inner -->
    </section>

</main>

<?php get_footer(); ?>