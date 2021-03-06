<aside class="p-sidebar c-frame_page">
    <div class="p-sidebar_inner">
        <section class="p-sidebar_post">

            <?php if( is_category() || is_post_type_archive('blog') ): ?>
            
            <div class="p-sidebar_postTtl">
                <h3>おすすめ記事</h3>
            </div>
            <!-- /.p-sidebar_postTtl -->
            <ul class="p-sidebar_postList">
                <?php

                    $args = array(
                        'post_type'      => 'blog',
                        'meta_key'       => 'views', // 閲覧数を記録しているカスタムフィールド
                        'order'          => 'DESC',
                        'orderby'        => 'meta_value_num',
                        'posts_per_page' => 3,
                    );

                    $the_query = new WP_Query($args);
                    if($the_query -> have_posts()) :
                ?>

                <li class="p-sidebar_postItem">
                    <a href="<?php the_permalink(); ?>" class="p-sidebar_postInner" ontouchstart="">
                        <div class="p-sidebar_imgWrapper">
                            <figure class="p-sidebar_img">
                                <img src="<?php echo esc_url(get_template_directory_uri() . '/img/blog_thumnail.jpg');?>" alt="thumnail">
                            </figure>
                            <h3 class="p-sidebar_metaTtl">
                            <?php
                                if(mb_strlen($post->post_title, 'UTF-8')>15){
                                $title= mb_substr($post->post_title, 0, 15, 'UTF-8');
                                        echo $title.'•••';
                                }else{
                                        echo $post->post_title;
                                }
                            ?>
                            </h3>
                        </div>
                        <!-- /.p-sidebar_imgWrapper -->
                    </a>
                </li>
                <?php else: ?>
                    <li class="p-sidebar_postItem">
                        <p>該当する記事がありません。</p>
                    </li>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>
            </ul>

            <?php elseif( is_post_type_archive('news') || is_singular('news') ): ?>

            <div class="p-sidebar_postTtl">
                <h3>新着記事</h3>
            </div>
            <!-- /.p-sidebar_postTtl -->
            <ul class="p-sidebar_postList">
                <?php

                    $args = array(
                        'orderby' => 'post_date',   //日付順に並び替え
                        'order'=>'DESC',            //上記パラメータについて昇順か降順かを指定
                        'post_status'=> 'publish',  //公開された投稿もしくは固定ページ
                        'post_type'=> 'blog',
                        'posts_per_page' => 3,
                    );

                    $the_query = new WP_Query($args);
                    if($the_query -> have_posts()) :
                ?>

                <li class="p-sidebar_postItem">
                    <a href="<?php the_permalink(); ?>" class="p-sidebar_postInner" ontouchstart="">
                        <div class="p-sidebar_imgWrapper">
                            <figure class="p-sidebar_img">
                                <img src="<?php echo esc_url(get_template_directory_uri() . '/img/blog_thumnail.jpg');?>" alt="thumnail">
                            </figure>
                            <h3 class="p-sidebar_metaTtl">
                            <?php
                                if(mb_strlen($post->post_title, 'UTF-8')>15){
                                $title= mb_substr($post->post_title, 0, 15, 'UTF-8');
                                        echo $title.'•••';
                                }else{
                                        echo $post->post_title;
                                }
                            ?>
                            </h3>
                        </div>
                        <!-- /.p-sidebar_imgWrapper -->
                    </a>
                </li>
                <?php else: ?>
                    <li class="p-sidebar_postItem">
                        <p>該当する記事がありません。</p>
                    </li>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>
            </ul>

            <?php else: ?>

            <div class="p-sidebar_postTtl">
                <h3>関連記事</h3>
            </div>
            <!-- /.p-sidebar_postTtl -->
            <ul class="p-sidebar_postList">
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
                ?>

                <li class="p-sidebar_postItem">
                    <a href="<?php the_permalink(); ?>" class="p-sidebar_postInner" ontouchstart="">
                        <div class="p-sidebar_imgWrapper">
                            <figure class="p-sidebar_img js-object-fit">
                                <img src="<?php echo esc_url(get_template_directory_uri() . '/img/blog_thumnail.jpg');?>" alt="thumnail">
                            </figure>
                            <h3 class="p-sidebar_metaTtl">
                            <?php
                                if(mb_strlen($post->post_title, 'UTF-8')>15){
                                $title= mb_substr($post->post_title, 0, 15, 'UTF-8');
                                        echo $title.'•••';
                                }else{
                                        echo $post->post_title;
                                }
                            ?>
                            </h3>
                        </div>
                        <!-- /.p-sidebar_imgWrapper -->
                    </a>
                </li>
                <?php else: ?>
                    <li class="p-sidebar_postItem">
                        <p>該当する記事がありません。</p>
                    </li>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>
            </ul>

            <?php endif; ?>

        </section>
        <!-- /.p-sidebar_post -->

        <section class="p-sidebar_cat">
            <div class="p-sidebar_catTtl">
                <h3>カテゴリー</h3>
            </div>
            <!-- /.p-sidebar_catTtl -->
            <ul class="p-sidebar_catList">
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
                <li class="p-sidebar_catItem">
                    <a href="<?php echo get_category_link( $category->term_id ); ?>"><?php echo $category->name; ?></a>
                </li>
            <?php endforeach; ?>
            </ul>
        </section>
        <!-- /.p-sidebar_cat -->
    </div>
    <!-- /.p-sidebar_inner -->
</aside>