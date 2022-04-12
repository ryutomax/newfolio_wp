        <?php get_header(); ?>

        <main class="l-main">
            <section class="p-fvTtl" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_other.png"); ?>');">
                <div class="p-fvTtl_inner" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . "/img/top/top_in_other.png"); ?>');">
                    <h2><?php the_title(); ?></h2>
                </div>
                <!-- /.p-fvTtl_inner -->
            </section>


            <div class="p-content__breadcrumb c-breadcrumb">
                <div class="c-breadcrumb-inner">
                    <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
                        <?php
                            if(function_exists('bcn_display')){
                                bcn_display();
                            }
                        ?>
                    </div>
                </div>
            </div>

            <section class="p-activity c-frame">
                <div class="p-activity_inner">
                    <div class="p-notice_ttl c-secTtl">
                        <figure class="p-notice_ttlImg c-secTtl_img"><img src="<?php echo esc_url(get_template_directory_uri() . "/img/ttl_upper/ap_img.png"); ?>" alt="ttl-img"></figure>
                        <h3>
                            <span class="js-wave">活</span>
                            <span class="js-wave">動</span>
                            <span class="js-wave">方</span>
                            <span class="js-wave">針</span>
                        </h3>
                    </div>
                    <!-- /.p-notice_ttl -->
                    <div class="p-activity_cont">
                        <div class="p-activity_txts">
                            <p class="p-activity_txt"><span>私</span>は自転車がとても大好きです.それは時間や渋滞等に巻き込まれずに、気の身気のまま移動することができるからというのが大きいです.自転車は自由の象徴だと思うのです.</p>
                            <p class="p-activity_txt"><span>自</span>転車はペダルを漕ぐと後輪が回転し始め、同時に前輪が動き始めて自転車自体が前へ進みます.これは私（わたし）とお取引先（あなた）の関係に通じる部分があると考えています.HP制作を通じ、自転車の前後ホイールのように足並みを揃えてわたしとあなたは動き出し、目標へと前進できると私は思っています.</p>
                            <p class="p-activity_txt"><span>二</span>つのホイールが同時に回転し前進する自転車のように、私（わたし）とお取引先（あなた）がHP制作を介して共により前へ、良い方向へ進んで行ければと心から思いながら日々活動しております.</p>
                        </div>
                        <!-- /.p-activity_txts -->
                        <figure class="p-activity_img">
                            <img src="<?php echo esc_url(get_template_directory_uri() . "/img/cycle/cycle_img.png"); ?>" alt="cycle">
                        </figure>
                    </div>
                    <!-- /.p-activity_cont -->
                </div>
                <!-- /.p-activity_inner -->
            </section>
        </main>

        <?php get_footer(); ?>