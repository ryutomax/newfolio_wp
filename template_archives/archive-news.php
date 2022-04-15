
<?php get_header(); ?>

<div class="l-cont">
    <main class="l-main">

        <!-- fvのテンプレート呼び出し -->
        <?php get_template_part('template_parts/fvTtl'); ?>

        <!-- パンくずリストのテンプレート呼び出し -->
        <?php get_template_part('template_parts/breadcrumb'); ?>

        <section class="p-contNews c-frame_page">
            <div class="p-contNews_inner">
                <div class="p-contNews_ttl c-secTtl">
                    <figure class="p-contNews_ttlImg c-secTtl_img"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/ttl_upper/news-list_ttl.png"); ?>" alt="ttl-img"></figure>
                    <h3>
                        <span class="js-wave">お</span>
                        <span class="js-wave">知</span>
                        <span class="js-wave">ら</span>
                        <span class="js-wave">せ</span>
                        <span class="js-wave">一</span>
                        <span class="js-wave">覧</span>
                    </h3>
                </div>

                <ul class="p-contNews_list">
                    <?php

                        $paged = get_query_var('paged') ?: 1;  //先頭ページでは 0 が返ってくるので、強制的に 1 をセット
                        $query_args = array(
                                'orderby' => 'post_date',   //日付順に並び替え
                                'order'=>'DESC',            //上記パラメータについて昇順か降順かを指定
                                'post_status'=> 'publish',  //公開された投稿もしくは固定ページ
                                'post_type'=> 'news',
                                'posts_per_page'=>10,
                                'paged'=>$paged
                            );
                        $the_query = new WP_Query($query_args);
                        if ( $the_query->have_posts() ) :
                            while ( $the_query->have_posts() ) : $the_query->the_post();

                    ?>
                    <li class="p-contNews_item">
                        <a class="p-contNews_itemInner" href="<?php the_permalink(); ?>" ontouchstart="">
                            <div class="p-contNews_date">
                                <time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y-m-d'); ?></time>
                            </div>
                            <!-- /.p-contNews_date -->
                            <h3 class="p-contNews_ttl">
                                <?php
                                    if(mb_strlen($post->post_title, 'UTF-8')>30){
                                    $title= mb_substr($post->post_title, 0, 30, 'UTF-8');
                                            echo $title.'・・・';
                                    }else{
                                            echo $post->post_title;
                                    }
                                ?>
                            </h3>
                        </a>
                    </li>
                    <?php endwhile; ?>
                    <?php else: ?>
                        <p>準備中のため記事がありません。</p>
                    <?php endif; ?>
                    <?php wp_reset_postdata(); ?>
                </ul>
            </div>
            <!-- /.p-contNews_inner -->

        </section>

        <!-- ctaのテンプレート呼び出し -->
        <?php get_template_part('template_parts/cta'); ?>
    </main>

</div>

<?php get_footer(); ?>
