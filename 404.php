<?php get_header(); ?>

<div class="l-cont">
    <main class="l-main">
        <!-- fvのテンプレート呼び出し -->
        <?php get_template_part('template_parts/fvTtl'); ?>

        <!-- パンくずリストのテンプレート呼び出し -->
        <?php get_template_part('template_parts/breadcrumb'); ?>

        <section class="p-404">
            <div class="p-404_inner">
                <p class="p-404_txt">申し訳ありません。</p>
                <p class="p-404_txt">お探しのページはありません。</p>
                <p class="p-404_link"><a href="/#/">ホーム</a>戻る</p>
            </div>
        </section>

        <!-- ctaのテンプレート呼び出し -->
        <?php get_template_part('template_parts/cta'); ?>

    </main>
</div>

<?php get_footer(); ?>