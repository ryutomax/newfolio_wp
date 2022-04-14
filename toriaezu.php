
                        <li class="p-contBlog_card">
                            <figure class="p-contBlog__img c-tag-img">
                                <a href="<?php the_permalink(); ?>">
                                    
                                </a>
                                <span class="p-contBlog__cat c-tag-img__tag">
                                    <!-- カテゴリ名のみ取得 ///////////////////////////////////// -->

                                </span>
                            </figure>
                            <div class="p-contBlog__txt">
                                <div class="p-contBlog__date"><time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y-m-d'); ?></time></div>

                                <h3 class="p-contBlog__ttl">
                                    <a href="<?php the_permalink(); ?>">

                                    </a>
                                </h3>

                                <div class="p-contBlog__exc">
                                    <a href="<?php the_permalink(); ?>">
                                        <p>
                                            <!-- 文章のみ取得 /////////////////////////////////////-->
                                            <?php the_excerpt(); ?>

                                        </p>
                                    </a>
                                </div>
                            </div>
                        </li>
