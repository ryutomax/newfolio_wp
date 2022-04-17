        <?php get_header(); ?>

        <main class="l-main">

            <!-- fvのテンプレート呼び出し -->
            <?php get_template_part('template_parts/fvTtl'); ?>

            <!-- パンくずリストのテンプレート呼び出し -->
            <?php get_template_part('template_parts/breadcrumb'); ?>

            <section class="p-activity c-frame_page">
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
                            <p class="p-activity_txt"><span>私</span>は、自転車がとても大好きです.それは時間や渋滞等に囚われず、気の身気のまま移動することができる自由の象徴であるから、そして風を感じながらも自分と向き合う時間が取れるからです.</p>
                            <p class="p-activity_txt"><span>今</span>は、自転車に劣らないほどWeb制作が大好きです.自分から何かを生み出す、そしてそれが首尾良くいった時の喜びはこの上ないものがあります.生み出す時は自分と向き合い、そして人が喜ぶものが作ることができる.そこに人生を賭ける価値が大いにあると感じています。</p>
                            <p class="p-activity_txt"><span>自</span>転車はペダルを漕ぐと後輪が回転し始め、同時に前輪が動き始めて自転車自体が前へ進みます.これは私（わたし）とクライアント様（あなた）の関係に通じる部分があると考えています.Web制作を通じ、自転車の前後ホイールのように足並みを揃えてわたしとあなたは動き出し、目標へと前進できると私は思っています.</p>
                            <p class="p-activity_txt"><span>二</span>つのホイールが同時に回転し前進する自転車のように、私（わたし）とクライアント様（あなた）がWeb制作を介して共により前へ、良い方向へ進んで行ければと心から思いながら日々活動しております.</p>
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

            <!-- ctaのテンプレート呼び出し -->
            <?php get_template_part('template_parts/cta'); ?>

        </main>

        <?php get_footer(); ?>