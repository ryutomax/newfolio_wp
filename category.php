<?php get_header(); ?>

    <main class="l-main">
        <!-- fvのテンプレート呼び出し -->
        <?php get_template_part('template_parts/fvTtl'); ?>

        <!-- パンくずリストのテンプレート呼び出し -->
        <?php get_template_part('template_parts/breadcrumb'); ?>

        <div class="l-cont u-flex">
            <div class="l-cont_main">

                <section class="p-contBlog c-frame_page">
                    <div class="p-contBlog_inner">
                        <div class="p-contBlog_ttl c-secTtl">
                            <figure class="p-contBlog_ttlImg c-secTtl_img"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/ttl_upper/blog-list_ttl.png"); ?>" alt="ttl-img"></figure>
                            <h3>
                                <?php single_cat_title( '', true ); ?>一覧
                            </h3>
                        </div>

                        <ul class="p-contBlog_cards">
                        <?php
                        $paged = get_query_var('paged') ?: 1;  //先頭ページでは 0 が返ってくるので、強制的に 1 をセット

                        $category = get_the_category();
                        $cat_id   = $category[0]->cat_ID;
                        $cat_name = $category[0]->cat_name;
                        $cat_slug = $category[0]->category_nicename;

                        $query_args = array(

                                'orderby' => 'post_date',   //日付順に並び替え
                                'order'=>'DESC',            //上記パラメータについて昇順か降順かを指定
                                'post_status'=> 'publish',  //公開された投稿もしくは固定ページ
                                'post_type'=> 'blog',
                                'category_name'  => $cat_slug ,
                                'posts_per_page'=>6,
                                'paged'=>$paged

                            );
                        $the_query = new WP_Query($query_args);
                        if ( $the_query->have_posts() ) :
                            while ( $the_query->have_posts() ) : $the_query->the_post();

                    ?>
                            <li class="p-contBlog_card">
                                <a  class="p-contBlog_cardInner" href="<?php the_permalink(); ?>">
                                    <div class="p-contBlog_imgWrap">
                                        <figure class="p-contBlog_img c-tag-img js-object-fit">
                                        <?php if ( has_post_thumbnail() ): ?><!-- if文による条件分岐 アイキャッチが有る時-->
                                            <?php the_post_thumbnail( 'thumbnail' ); ?>
                                        <?php else: ?><!-- アイキャッチが無い時-->
                                            <img src="<?php echo get_template_directory_uri();?>/img/blog_thumnail.jpg" alt="アイキャッチがない時の画像です。" />
                                        <?php endif; ?>
                                        </figure>
                                    </div>
                                    <!-- /.p-contBlog_imgWrap -->
                                    <div class="p-contBlog_meta">
                                        <div class="p-contBlog_cat">
                                            <span>
                                                <?php
                                                    $category = get_the_category();
                                                    echo $category[0]->name;
                                                ?>
                                            </span>
                                        </div>
                                        <h3 class="p-contBlog_ttl">
                                        <?php
                                            if(mb_strlen($post->post_title, 'UTF-8')>30){
                                            $title= mb_substr($post->post_title, 0, 30, 'UTF-8');
                                                    echo $title.'・・・';
                                            }else{
                                                    echo $post->post_title;
                                            }
                                        ?>
                                        </h3>
                                        <div class="p-contBlog_date"><time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y-m-d'); ?></time></div>
                                    </div>
                                </a>
                            </li>
                            <?php endwhile; ?>
                            <?php else: ?>
                                <p>準備中のため記事がありません。</p>
                            <?php endif; ?>
                            <?php wp_reset_postdata(); ?>
                        </ul>

                        <!-- ページネーションのテンプレート呼び出し -->
                        <?php get_template_part('template_parts/pagination'); ?>

                    </div>
                    <!-- /.p-contBlog-inner -->
                </section>
            </div>
            <!-- /.l-cont_main -->

            <?php get_sidebar(); ?>

        </div>
        <!-- /.l-cont -->

        <!-- ctaのテンプレート呼び出し -->
        <?php get_template_part('template_parts/cta'); ?>

    </main>


<?php get_footer(); ?>
