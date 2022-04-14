<aside class="p-sidebar c-frame_page">
    <div class="p-sidebar_inner">
        <section class="p-sidebar_relation">
            <div class="p-sidebar_relationTtl">
                <h3>関連記事</h3>
            </div>
            <!-- /.p-sidebar_relationTtl -->
            <ul class="p-sidebar_relationList">
                <?php
                    $paged = get_query_var('paged') ?: 1;  //先頭ページでは 0 が返ってくるので、強制的に 1 をセット

                    $query_args = array(
                        'orderby' => 'post_date',   //日付順に並び替え
                        'order'=>'DESC',            //上記パラメータについて昇順か降順かを指定
                        'post_status'=> 'publish',  //公開された投稿もしくは固定ページ
                        'post_type'=> 'blog',
                        'posts_per_page'=>3,
                        'paged'=>$paged
                    );

                    $the_query = new WP_Query($query_args);
                        if ( $the_query->have_posts() ) :
                        while ( $the_query->have_posts() ) : $the_query->the_post();
                ?>
                <li class="p-sidebar_relationItem">
                    <a href="<?php the_permalink(); ?>" class="p-sidebar_relationInner" ontouchstart="">
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
                <?php endwhile; ?>
                <?php else: ?>
                    <p>準備中のため記事がありません。</p>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>
            </ul>
        </section>
        <!-- /.p-sidebar_relation -->

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