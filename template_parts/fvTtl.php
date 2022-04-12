<?php if(is_page()): ?>

    <?php if( is_page( array('contact','confirm','thanks') ) ): ?>
    <section class="p-fvTtl" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_contact.png"); ?>');">
        <div class="p-fvTtl_inner" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_in_contact.png"); ?>');">

    <?php else: ?>
    <section class="p-fvTtl" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_other.png"); ?>');">
        <div class="p-fvTtl_inner" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_in_other.png"); ?>');">
    <?php endif; ?>

            <h2><?php the_title(); ?></h2>
        </div>
        <!-- /.p-fvTtl_inner -->
    </section>

<?php endif; ?>