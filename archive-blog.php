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
                                <span class="js-wave">ブ</span>
                                <span class="js-wave">ロ</span>
                                <span class="js-wave">グ</span>
                                <span class="js-wave">一</span>
                                <span class="js-wave">覧</span>
                            </h3>
                        </div>

                        <ul class="p-contBlog_cards">
                            <li class="p-contBlog_card">
                                <a  class="p-contBlog_cardInner" href="<?php the_permalink(); ?>">
                                    <div class="p-contBlog_imgWrap">
                                        <figure class="p-contBlog_img c-tag-img js-object-fit">
                                            <img src="<?php echo esc_url(get_template_directory_uri() . '/img/blog_thumnail.jpg');?>" alt="アイキャッチがない時の画像です。" />
                                        </figure>
                                    </div>
                                    <!-- /.p-contBlog_imgWrap -->
                                    <div class="p-contBlog_meta">
                                        <div class="p-contBlog_cat"><span>カテゴリ</span></div>
                                        <h3 class="p-contBlog_ttl">ブログタイトル</h3>
                                        <div class="p-contBlog_date"><time datetime="<?php the_time('Y-m-d'); ?>">2022.2.22</time></div>
                                    </div>
                                </a>
                            </li>
                            <li class="p-contBlog_card">
                                <a  class="p-contBlog_cardInner" href="<?php the_permalink(); ?>">
                                    <div class="p-contBlog_imgWrap">
                                        <figure class="p-contBlog_img c-tag-img js-object-fit">
                                            <img src="<?php echo esc_url(get_template_directory_uri() . '/img/blog_thumnail.jpg');?>" alt="アイキャッチがない時の画像です。" />
                                        </figure>
                                    </div>
                                    <!-- /.p-contBlog_imgWrap -->
                                    <div class="p-contBlog_meta">
                                        <div class="p-contBlog_cat c-tag-img_tag"><span>カテゴリ</span></div>
                                        <h3 class="p-contBlog_ttl">ブログタイトル</h3>
                                        <div class="p-contBlog_date"><time datetime="<?php the_time('Y-m-d'); ?>">2022.2.22</time></div>
                                    </div>
                                </a>
                            </li>
                            <li class="p-contBlog_card">
                                <a  class="p-contBlog_cardInner" href="<?php the_permalink(); ?>">
                                    <div class="p-contBlog_imgWrap">
                                        <figure class="p-contBlog_img c-tag-img js-object-fit">
                                            <img src="<?php echo esc_url(get_template_directory_uri() . '/img/blog_thumnail.jpg');?>" alt="アイキャッチがない時の画像です。" />
                                        </figure>
                                    </div>
                                    <!-- /.p-contBlog_imgWrap -->
                                    <div class="p-contBlog_meta">
                                        <div class="p-contBlog_cat c-tag-img_tag"><span>カテゴリ</span></div>
                                        <h3 class="p-contBlog_ttl">ブログタイトル</h3>
                                        <div class="p-contBlog_date"><time datetime="<?php the_time('Y-m-d'); ?>">2022.2.22</time></div>
                                    </div>
                                </a>
                            </li>
                            <li class="p-contBlog_card">
                                <a  class="p-contBlog_cardInner" href="<?php the_permalink(); ?>">
                                    <div class="p-contBlog_imgWrap">
                                        <figure class="p-contBlog_img c-tag-img js-object-fit">
                                            <img src="<?php echo esc_url(get_template_directory_uri() . '/img/blog_thumnail.jpg');?>" alt="アイキャッチがない時の画像です。" />
                                        </figure>
                                    </div>
                                    <!-- /.p-contBlog_imgWrap -->
                                    <div class="p-contBlog_meta">
                                        <div class="p-contBlog_cat c-tag-img_tag"><span>カテゴリ</span></div>
                                        <h3 class="p-contBlog_ttl">ブログタイトル</h3>
                                        <div class="p-contBlog_date"><time datetime="<?php the_time('Y-m-d'); ?>">2022.2.22</time></div>
                                    </div>
                                </a>
                            </li>
                            <li class="p-contBlog_card">
                                <a  class="p-contBlog_cardInner" href="<?php the_permalink(); ?>">
                                    <div class="p-contBlog_imgWrap">
                                        <figure class="p-contBlog_img c-tag-img js-object-fit">
                                            <img src="<?php echo esc_url(get_template_directory_uri() . '/img/blog_thumnail.jpg');?>" alt="アイキャッチがない時の画像です。" />
                                        </figure>
                                    </div>
                                    <!-- /.p-contBlog_imgWrap -->
                                    <div class="p-contBlog_meta">
                                        <div class="p-contBlog_cat c-tag-img_tag"><span>カテゴリ</span></div>
                                        <h3 class="p-contBlog_ttl">ブログタイトル</h3>
                                        <div class="p-contBlog_date"><time datetime="<?php the_time('Y-m-d'); ?>">2022.2.22</time></div>
                                    </div>
                                </a>
                            </li>
                            <li class="p-contBlog_card">
                                <a  class="p-contBlog_cardInner" href="<?php the_permalink(); ?>">
                                    <div class="p-contBlog_imgWrap">
                                        <figure class="p-contBlog_img c-tag-img js-object-fit">
                                            <img src="<?php echo esc_url(get_template_directory_uri() . '/img/blog_thumnail.jpg');?>" alt="アイキャッチがない時の画像です。" />
                                        </figure>
                                    </div>
                                    <!-- /.p-contBlog_imgWrap -->
                                    <div class="p-contBlog_meta">
                                        <div class="p-contBlog_cat c-tag-img_tag"><span>カテゴリ</span></div>
                                        <h3 class="p-contBlog_ttl">ブログタイトル</h3>
                                        <div class="p-contBlog_date"><time datetime="<?php the_time('Y-m-d'); ?>">2022.2.22</time></div>
                                    </div>
                                </a>
                            </li>
                        </ul>
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
