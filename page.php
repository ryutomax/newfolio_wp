
<?php if(is_page('contact')):?>

    <?php get_template_part( 'template_pages/page-contact', $page->post_name ); ?>

<?php elseif(is_page('confirm')):?>

    <?php get_template_part( 'template_pages/page-confirm', $page->post_name ); ?>

<?php elseif(is_page('thanks')):?>

    <?php get_template_part( 'template_pages/page-thanks', $page->post_name ); ?>

<?php elseif(is_page('service')):?>

    <?php get_template_part( 'template_pages/page-service', $page->post_name ); ?>

<?php elseif(is_page('privacy')):?>

    <?php get_template_part( 'template_pages/page-privacy', $page->post_name ); ?>

<?php elseif(is_page('profile')):?>

    <?php get_template_part( 'template_pages/page-profile', $page->post_name ); ?>

<?php endif; ?>