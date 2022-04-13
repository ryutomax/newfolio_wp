
<?php get_header(); ?>

<div class="l-cont">
    <main class="l-main">

        <!-- fvのテンプレート呼び出し -->
        <?php get_template_part('template_parts/fvTtl'); ?>

        <!-- パンくずリストのテンプレート呼び出し -->
        <?php get_template_part('template_parts/breadcrumb'); ?>

        <section class="p-content c-frame_page">
            <div class="p-content-inner">
                <div class="p-about_ttl c-secTtl">
                    <figure class="p-about_ttlImg c-secTtl_img"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/ttl_upper/news-list_ttl.png"); ?>" alt="ttl-img"></figure>
                    <h3>
                        <span class="js-wave">お</span>
                        <span class="js-wave">知</span>
                        <span class="js-wave">ら</span>
                        <span class="js-wave">せ</span>
                        <span class="js-wave">一</span>
                        <span class="js-wave">覧</span>
                    </h3>
                </div>

                <div class="p-content-wrap">
                    <ul class="p-content__list-wp">
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

                        <li class="p-content__item-wp">
                            <figure class="p-content__img-wp c-tag-img">
                                <a href="<?php the_permalink(); ?>">
                                    <?php if ( has_post_thumbnail() ): ?><!-- if文による条件分岐 アイキャッチが有る時-->
                                    <?php the_post_thumbnail( 'thumbnail' ); ?>
                                    <?php else: ?><!-- アイキャッチが無い時-->
                                    <img src="<?php echo get_template_directory_uri();?>/img/noimage.png" alt="アイキャッチがない時の画像です。" />
                                    <?php endif; ?>
                                </a>
                                <span class="p-content__cat-wp c-tag-img__tag">
                                    <!-- カテゴリ名のみ取得 ///////////////////////////////////// -->
                                <?php
                                    $category = get_the_category();
                                    echo $category[0]->name;
                                ?>

                                </span>
                            </figure>
                            <div class="p-content__txt-wp">
                                <div class="p-content__date-wp"><time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y-m-d'); ?></time></div>

                                <h3 class="p-content__ttl-wp">
                                    <a href="<?php the_permalink(); ?>">
                                    <?php
                                        if(mb_strlen($post->post_title, 'UTF-8')>30){
                                        $title= mb_substr($post->post_title, 0, 30, 'UTF-8');
                                                echo $title.'・・・';
                                        }else{
                                                echo $post->post_title;
                                        }
                                    ?>
                                    </a>
                                </h3>

                                <div class="p-content__exc-wp">
                                    <a href="<?php the_permalink(); ?>">
                                        <p>
                                            <!-- 文章のみ取得 /////////////////////////////////////-->
                                            <?php the_excerpt(); ?>

                                        </p>
                                    </a>
                                </div>
                            </div>
                        </li>

                        <?php endwhile; ?>
                        <?php else: ?>
                            <p>準備中のため記事がありません。</p>
                        <?php endif; ?>
                        <?php wp_reset_postdata(); ?>
                    </ul>
                </div>
                <!-- /.p-content-wrap -->
            </div>
            <!-- /.p-content-inner -->

        </section>

        <!-- ctaのテンプレート呼び出し -->
        <?php get_template_part('template_parts/cta'); ?>
    </main>

</div>

<?php get_footer(); ?>
