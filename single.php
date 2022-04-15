<?php if(is_singular('blog')):?>

    <?php get_template_part( 'template_singles/single-blog', $page->post_name ); ?>

<?php elseif(is_singular('news')):?>

    <?php get_template_part( 'template_singles/single-news', $page->post_name ); ?>

<?php endif; ?>