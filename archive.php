<?php if(is_post_type_archive('blog')):?>

    <?php get_template_part( 'template_archives/archive-blog', $page->post_name ); ?>

<?php elseif(is_post_type_archive('news')):?>

    <?php get_template_part( 'template_archives/archive-news', $page->post_name ); ?>

<?php endif; ?>