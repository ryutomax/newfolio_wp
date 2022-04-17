<!--
// ページネーションのテンプレートです
-->

                    <div class="c-pagination">

                        <?php
                            the_posts_pagination(
                                array(
                                    'mid_size'      => '0', // 現在ページの左右に表示するページ番号の数
                                    'prev_next'     => true, // 「前へ」「次へ」のリンクを表示する場合はtrue
                                    'prev_text'     => __( '前へ'), // 「前へ」リンクのテキスト
                                    'next_text'     => __( '次へ'), // 「次へ」リンクのテキスト
                                    'type'          => 'list', // 戻り値の指定 (plain/list)
                                )
                            );
                        ?>

                    </div>
                    <!-- /.c-pagination  -->