<?php get_header(); ?>

<div class="p-content__breadcrumb c-breadcrumb">
    <div class="c-breadcrumb-inner">
        <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
            <?php
                if(function_exists('bcn_display')){

                    bcn_display();
                }
            ?>
        </div>
        <!-- <p class="c-breadcrumb-main">ホーム＞ブログ</p> -->
    </div>
</div>
<div class="u-flex l-sidebr">
    <main class="l-main-side">
        <article class="p-blog-content">
            <div class="p-blog-content__inner">
                <li class="p-blog-content__cat-tag c-cat-tag">
                    <p>
                    <?php
                        $category = get_the_category();
                        echo $category[0]->name;
                    ?>
                    </p>
                </li>
                <div class="p-blog-content__ttl c-sec-ttl"><h2><?php the_title(); ?></h2></div>
                <div class="p-blog-content__date"><time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y-m-d'); ?></time></div>

                <div class="p-blog-content__post">
                    <?php the_content(); ?>

                </div>
                <!-- /.p-content-wrap -->
            </div>
            <!-- /.p-content-inner -->
        </article>
        <section class="p-recommend">
            <div class="p-recommend-inner">
                <div class="p-recommend-ttl"><p>おすすめの記事</p></div>
                <div class="p-recommend-post-wp">
                    <ul class="p-recommend-list-wp">

                        <?php
                            $query_args = array(
                                    'orderby' => 'post_date',
                                    'post_status'=> 'publish',
                                    'post_type'=> 'blog',
                                    'tag'=> 'pickup',
                                    'order'=>'DESC',
                                    'posts_per_page'=>3,
                                    'paged'=>$paged

                                );
                            $the_query = new WP_Query($query_args);
                            if ( $the_query->have_posts() ) :
                                while ( $the_query->have_posts() ) : $the_query->the_post();

                        ?>
                        <li class="p-recommend-item-wp">
                            <figure class="p-recommend__thumnail-wp c-tag-img"><a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('thumbnail'); ?></a>
                                <span class="p-content__cat-wp c-tag-img__tag">
                                    <?php
                                        $category = get_the_category();
                                        echo $category[0]->name;
                                    ?>
                                </span>
                            </figure>
                            <div class="p-recommend-txt">
                                <div class="p-recommend__date-wp"><time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y-m-d'); ?></time></div>
                                <h3 class="p-recommend__ttl-wp">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php
                                            if(mb_strlen($post->post_title, 'UTF-8')>40){
                                            $title= mb_substr($post->post_title, 0, 40, 'UTF-8');
                                                    echo $title.'……';
                                            }else{
                                                    echo $post->post_title;
                                            }
                                        ?>
                                    </a>
                                </h3>
                            </div>
                        </li>

                        <?php endwhile; ?>
                        <?php else: ?>
                            <p>記事がありません。</p>
                        <?php endif; ?>
                        <?php wp_reset_postdata(); ?>
                    </ul>

                </div>
            </div>
            <!-- /.l-recommend-inner -->
        </section>

    </main>
    <aside class="p-sidebar">
        <div class="p-sidebar-inner">
            <div class="p-sidebar-section">
                <div class="p-sidebar-section__ttl"><p>関連記事</p></div>
                <ul class="p-sidebar-section__list-wp">
                    <?php

                    $categ = get_the_category($post->ID);
                    $catID = array();

                    foreach($categ as $cat){
                        array_push($catID, $cat -> cat_ID);
                    }

                    $args = array(
                        'post__not_in' => array($post->ID),
                        'category__in' => $catID,
                        'posts_per_page' => 3,
                        'orderby' => 'rand'
                    );

                    $the_query = new WP_Query($args);
                    if($the_query -> have_posts()) :
                    while($the_query -> have_posts()) : $the_query -> the_post();
                    ?>

                    <li class="p-sidebar-section__item-wp">
                        <figure class="p-sidebar__thumnail-wp"><a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('thumbnail'); ?></a>

                        <h3 class="p-sidebar__ttl-wp">
                            <a href="<?php the_permalink(); ?>">
                                <?php
                                    if(mb_strlen($post->post_title, 'UTF-8')>40){
                                    $title= mb_substr($post->post_title, 0, 40, 'UTF-8');
                                            echo $title.'・・・';
                                    }else{
                                            echo $post->post_title;
                                    }
                                ?>
                            </a>
                        </h3>
                    </li>
                    <?php endwhile; ?>
                    <?php else: ?>
                        <p>記事がありません。</p>
                    <?php endif; ?>
                    <?php wp_reset_postdata(); ?>
                </ul>
            </div>
            <!-- /.l-sidebar-section -->
            <div class="p-sidebar-section">
                <div class="p-sidebar-section__ttl"><p>カテゴリー</p></div>
                <ul class="p-sidebar-section__list-wp">
                    <?php
                        // 親カテゴリーのものだけを一覧で取得
                        $args = array(
                            'parent' => 0,
                            'orderby' => 'term_order',
                            'order' => 'ASC'
                        );
                        $categories = get_categories( $args );
                    ?>
                    <?php foreach( $categories as $category ) : ?>
                        <li class="p-sidebar-section__cat-wp">
                            <a href="<?php echo get_category_link( $category->term_id ); ?>">
                                ・<?php echo $category->name; ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <!-- /.l-sidebar-section -->
        </div>
        <!-- /.l-sidebar-inner -->
    </aside>
</div>
<section class="p-cta">
    <div class="p-cta-inner">
        <div class="p-cta_contact" style="background-image: url(<?php echo get_template_directory_uri();?>/img/cta@2x.png);">
            <div class="p-cta__copy"><p>まずは無料で資料請求から</p></div>
            <a class="p-cta__btn c-btn" href="/contact/"><p>資料請求</p></a>
            <div class="p-cta_link"><a href="/contact/">お問い合わせ</a></div>
        </div>
        <!-- /.p-cta_contact -->
        <div class="p-cta_tel">
            <div class="p-cta_tel-inner">
                <div class="p-cta_tel-txt"><p>お電話でのお問い合わせはこちら</p></div>
                <div class="p-cta_tel-number"><a href="tel:0123456789">0123-456-7890</a></div>
                <div class="p-cta_tel-time"><time>平日 08:00~20:00</time></div>
            </div>
            <!-- /.p-cta_tel-inner -->
        </div>
        <!-- /.p-cta_tel -->
    </div>
    <!-- /.p-cta-inner -->
</section>

<?php get_footer(); ?>