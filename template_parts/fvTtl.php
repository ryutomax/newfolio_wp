<?php if(is_page()): ?>

    <?php if( is_page( array('contact','confirm','thanks') ) ): ?>

    <section class="p-fvTtl" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_contact.png"); ?>');">
        <div class="p-fvTtl_inner" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_in_contact.png"); ?>');">

    <?php else: ?>

    <section class="p-fvTtl" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_other.png"); ?>');">
        <div class="p-fvTtl_inner" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_in_other.png"); ?>');">

    <?php endif; ?>

        <?php if( is_page( 'privacy' ) ): ?>

            <h2 class="p-fvTtl_ttl_pp">プライバシー<br class="u-brTb">ポリシー</h2>

        <?php else: ?>

            <h2><?php the_title(); ?></h2>

        <?php endif; ?>
        </div>
        <!-- /.p-fvTtl_inner -->
    </section>

<?php elseif(is_singular() || is_post_type_archive() ): ?>

    <?php if(is_singular('blog') || is_post_type_archive('blog')): ?>

    <section class="p-fvTtl" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_blog.png"); ?>');">
        <div class="p-fvTtl_inner" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_in_blog.png"); ?>');">
            <h2>Blog</h2>

    <?php elseif(is_singular('news') || is_post_type_archive('news')): ?>

    <section class="p-fvTtl" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_news.png"); ?>');">
        <div class="p-fvTtl_inner" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_in_news.png"); ?>');">
            <h2>News</h2>

    <?php endif; ?>

        </div>
        <!-- /.p-fvTtl_inner -->
    </section>

<?php endif; ?>