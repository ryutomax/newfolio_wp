<!--
    prevNextのテンプレートです
-->
    <div class="c-prevNext"><span></span>
        <ul class="c-prevNext_list">
            <li class="c-prevNext_itemPrev">
                <?php previous_post_link('%link', '<span>＜</span>前の記事へ'); ?>
            </li>
            <li class="c-prevNext_itemNext">
                <?php next_post_link('%link', '次の記事へ <span>＞</span>'); ?>
            </li>
        </ul>
    </div>
    <!-- /.c-prevNext -->