<template>
  <div class="hello">
    <!-- 头部 -->
    <div>
      <Header></Header>
    </div>
    <!-- 书店头部 -->
    <div>
      <Bookstoreheader v-show="index==0" :dataintt="data1"></Bookstoreheader>
    </div>
    <!-- 内容主体 -->
    <div class="main-content">
      <div class="main-top">
        <div class="major-function-box">
          <div class="exhibition">
            <ul class="lg-list">
              <li>
                <img :src="datashow.img_bg" alt>
              </li>
              <li>
                <img :src="datashow.img_bg" alt>
              </li>
            </ul>
            <ul class="sm-list">
              <li class="active">
                <img :src="datashow.img_sm" alt>
              </li>
              <li class="active">
                <img :src="datashow.img_sm" alt>
              </li>
            </ul>
          </div>
          <div class="major-function">
            <!-- 基本信息 -->
            <button @click="showData"></button>
            <div class="base-info">
              <div class="title-box">
                <h1 class="title">{{datashow.book_name}}</h1>
                <a href="#" class="tip-off">举报</a>
              </div>
              <p
                class="keywords-lock"
              >{{datashow.book_author}} 著 / {{datashow.publisher}} / {{datashow.publish_time}} / 平装</p>
            </div>
            <div class="price-group">
              <p class="now-price clearfix">
                <span class="title">售价</span>
                <span class="now-price-text-cont">
                  <i class="now-price-icon">￥</i>
                  <i class="now-price-text">{{datashow.sell_price}}</i>
                  <i class="now-price-discount">{{datashow.discount}}折</i>
                </span>
              </p>
              <p class="origin-price clearfix">
                <span class="title">定价</span>
                <span class="origin-price-text">￥{{datashow.price}}</span>
              </p>
              <p class="quality clearfix">
                <span class="title">品相</span>
                <span class="quality-text">
                  <i class="quality-desc-common">{{datashow.phase}}</i>
                </span>
              </p>
            </div>
            <div class="carry">
              <div class="carry-title">
                <span>运费</span>
              </div>
              <div class="carry-cont">
                <div class="send-from">浙江省湖州市&nbsp;&nbsp;&nbsp;&nbsp;至</div>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    请选择
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>北京市</el-dropdown-item>
                    <el-dropdown-item>重庆市</el-dropdown-item>
                    <el-dropdown-item>安徽省</el-dropdown-item>
                    <el-dropdown-item>福建省</el-dropdown-item>
                    <el-dropdown-item>甘肃省</el-dropdown-item>
                    <el-dropdown-item>广东省</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <div class="express-wrapper">快递￥10.00</div>
              </div>
            </div>
            <p class="up-book-date-onsale">
              <span class="up-book-date-title">上书时间</span>
              <span class="up-book-date-time">2019-03-04</span>
            </p>
            <div class="count-check">
              <dl>
                <dt>数量</dt>
                <dd>
                  <div class="count-state state-one">
                    <el-input-number
                      size="mini"
                      v-model="num"
                      @change="handleChange"
                      :min="1"
                      :max="10"
                    ></el-input-number>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="buy-group">
              <el-button type="primary" class="go-buy">立即购买</el-button>
              <!-- @click.once="handleActionsAdd(1) -->
              <el-button type="primary" class="add-cart" icon="el-icon-shopping-cart-2" @click.native.once="handleActionsAdd(1)">加入购物车</el-button>
              <a href="#" class="collect">
                <i class="el-icon-star-off"></i>
                <span>收藏</span>
              </a>
              <a href="#" class="share">
                <i class="el-icon-share"></i>
                <span>分享</span>
              </a>
            </div>
          </div>
        </div>
        <!-- 书店/书摊 -->
        <div class="store-info-wrapper">
          <div class="store-info">
            <div class="store-info-content">
              <div class="clearfix">
                <div class="store-info-name">
                  <a href="#">{{datashow.book_store}}</a>
                </div>
                <div class="store-info-top">
                  <div class="store-content-left">店铺等级</div>
                  <a href="#" class="store-content-right">
                    <i class="el-icon-star-on"></i>
                  </a>
                </div>
                <div class="store-info-top">
                  <div class="store-content-left">资质认证</div>
                  <i class="el-icon-s-custom store-content-right"></i>
                </div>
              </div>
            </div>
            <div class="rate-block">
              <div class="store-info-content score">
                <div class="score_box">
                  <div class="store-content-left score_title">90天平均</div>
                </div>
                <div class="exchange_rate clearfix">
                  <div class="storeIns_content_left">成功完成</div>
                  <a
                    href="http://xinyu.kongfz.com/seller/1947283/"
                    target="_blank"
                    class="storeIns_content_right"
                  >
                    <span class="storeIns_content_reputation">93.13%</span>
                    <span class="sale-count">(2663笔)</span>
                  </a>
                </div>
                <div class="good_rate clearfix">
                  <div class="storeIns_content_left">好评率</div>
                  <a
                    href="http://xinyu.kongfz.com/seller/1947283/"
                    target="_blank"
                    class="storeIns_content_right"
                  >
                    <span class="storeIns_content_reputation">99.78%</span>
                  </a>
                </div>
                <div class="clearfix">
                  <div class="storeIns_content_left">发货时间</div>
                  <a
                    href="http://xinyu.kongfz.com/seller/1947283/"
                    target="_blank"
                    class="storeIns_content_right"
                  >
                    <div class="storeIns_content_reputation reputation">15.46小时</div>
                  </a>
                </div>
              </div>
            </div>
            <div class="store-info-content shop-owner-info">
              <div>
                <div class="shop-owner-left">店主</div>
                <a class="shop-owner-right">{{datashow.shoper}}</a>
              </div>
              <div class="chat-box">
                <div class="store-content-left">联系</div>
                <div class="store-content-right">
                  <a href="#" class="chat">离线留言</a>
                </div>
              </div>
              <div>
                <div class="store-content-left">地址</div>
                <div class="store-content-right">浙江省湖州市德清县</div>
              </div>
            </div>
            <div class="store-info-content store-btn-box">
              <a href="#" class="store-content-btn go-shop">进店逛逛</a>
              <a href="#" class="store-content-btn">收藏店铺</a>
            </div>
          </div>
        </div>
      </div>
      <div class="main-bot">
        <div class="right-block">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="商品详情" name="first">
              <!-- 著录项信息 -->
              <div class="major-info">
                <span class="info-link">图书条目信息</span>
                <div class="classify-link">
                  <span>图书</span>
                  <span>&nbsp;&gt;&nbsp;</span>
                  <a href="#">哲学心理学</a>
                </div>
                <div class="major-info-main">
                  <div class="book-cover">
                    <img :src="datashow.img_m" alt>
                  </div>
                  <div class="major-info-text">
                    <p class="title">
                      <a href="#" class target="_blank">{{datashow.book_name}}</a>
                    </p>
                    <div class="detail-lists clear-fix">
                      <ul class="detail-list1">
                        <li>
                          作者:
                          <a itemprop="author" href="#" target="_blank">{{datashow.book_author}}</a>
                          <span>著</span>
                        </li>
                        <li>
                          出版社:
                          <span>&nbsp;{{datashow.publisher}}</span>
                        </li>
                        <li>
                          出版时间:
                          <span>&nbsp;{{datashow.publish_time}}</span>
                        </li>
                        <li>
                          版次:
                          <span>&nbsp;{{datashow.order_edition}}</span>
                        </li>
                        <li>
                          ISBN:
                          <span>&nbsp;{{datashow.book_number}}</span>
                        </li>
                        <li>
                          定价:
                          <span>&nbsp;{{datashow.price}}</span>
                        </li>
                      </ul>
                      <ul class="detail-list2">
                        <li>
                          装帧:
                          <span class="keywords-define-txt">&nbsp;{{datashow.binding}}</span>
                        </li>
                        <li>
                          开本:
                          <span class="keywords-define-txt">&nbsp;{{datashow.format}}开</span>
                        </li>
                        <li>
                          纸张:
                          <span class="keywords-define-txt">&nbsp;{{datashow.page_style}}</span>
                        </li>
                        <li>
                          页数:
                          <span class="keywords-define-txt">&nbsp;{{datashow.page_number}}页</span>
                        </li>
                        <li>
                          字数:
                          <span class="keywords-define-txt">&nbsp;{{datashow.word_number}}千字</span>
                        </li>
                        <li>
                          丛书:
                          <span class="keywords-define-txt">&nbsp;{{datashow.series}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="brief-intro hidden">
                  <div class="brief-intro-text">
                    <dl>
                      <dt>内容简介：</dt>
                      <dd>
                        <p>{{datashow.content_validity}}</p>
                      </dd>
                    </dl>
                    <dl>
                      <dt>作者简介：</dt>
                      <dd>
                        <p>{{datashow.biogaphy}}</p>
                      </dd>
                    </dl>
                    <dl>
                      <dt>目录：</dt>
                      <dd>
                        <p>
                          导言
                          <br>
                          {{datashow.catalogue}}
                        </p>
                      </dd>
                    </dl>
                  </div>
                </div>
                <p class="open-more">展开全部</p>
              </div>
              <!-- 描述信息 -->
              <div class="book-describe" itemprop="reviewBody">
                <dl>
                  <dt>商品描述： 2010年04月印刷</dt>
                  <dd></dd>
                </dl>
              </div>
              <ul class="figure-info-box" id="figure-info-box">
                <li>
                  <a href="//www.kfzimg.com/G07/M00/B8/7A/qoYBAFx8xhOAOzwWAAEW7Ytpziw386_b.jpg">
                    <img
                      :src="datashow.img_details"
                      title="点击查看原图"
                      type
                      error="0"
                      content
                      :alt="datashow.book_name"
                    >
                    <p style="740px">图1</p>
                  </a>
                </li>
                <!-- <li>
                  <a href="//www.kfzimg.com/G07/M00/95/18/q4YBAFx8xhOAOLMGAAE9qo-E6oc285_b.jpg">
                    <img
                      :src="datashow.img_details"
                      title="点击查看原图"
                      :alt="datashow.book_name"
                      type
                      content
                    >
                  </a>
                  <p>图2</p>
                </li> -->
              </ul>
              <div class="goods-reviews-wrap reviews-wrap" id="goods-reviews"></div>
              <div class="other_special"></div>
              <!-- 相似商品 -->
              <SimilarProducts v-show="index==0" :dataintt="data2"></SimilarProducts>
              <!-- 为你推荐 -->
              <Recommend></Recommend>
            </el-tab-pane>
            <!-- 店铺评价 -->
            <el-tab-pane label="店铺评价" name="second">
              <div class="shop-reviews-wrap" id="shop-reviews">
                <div class="shop-reviews">
                  <div class="filter-area clear-fix">
                    <ul class="review-filter clear-fix">
                      <li class="selected" data-lev="all">
                        <el-radio v-model="radio" label="1">全部</el-radio>
                        <span class="total-count">0</span>
                      </li>
                      <li class data-lev="good">
                        <el-radio v-model="radio" label="2">好评</el-radio>
                        <span class="good-count">0</span>
                      </li>
                      <li class data-lev="common">
                        <el-radio v-model="radio" label="3">中评</el-radio>
                        <span class="common-count">0</span>
                      </li>
                      <li class data-lev="bad">
                        <el-radio v-model="radio" label="4">差评</el-radio>
                        <span class="bad-count">0</span>
                      </li>
                    </ul>
                    <div class="filter-empty selected" data-empty="0">
                      <el-checkbox v-model="checked">有内容</el-checkbox>
                    </div>
                  </div>
                  <div class="shop-reviews-container">
                    <div class="review-container-inner">
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>那五-大字版</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.06.17</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">y***2</li>
                          <li class="marker-rank rank-style-8"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>冯梦龙山歌研究</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.06.02</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">仇***木</li>
                          <li class="marker-rank rank-style-3"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>内科护理学习题集-(副主任护师/主任护师)-高级卫生专业技术资格考试用书</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">书已收到，谢谢！</li>
                          <li class="review-time">2019.06.02</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">蓬***处</li>
                          <li class="marker-rank rank-style-5"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>北欧神话</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.06.03</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">d***n</li>
                          <li class="marker-rank"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>陈东东的诗</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">快递真快，头天定，第二天就收到。也很喜欢这本书！謝謝！</li>
                          <li class="review-time">2019.06.02</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">看***主</li>
                          <li class="marker-rank rank-style-1"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>汉语嵌偶单音词</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.06.16</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">飘***春</li>
                          <li class="marker-rank"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>傅青主女科</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.06.16</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">十***钧</li>
                          <li class="marker-rank"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>农村金融与农村经济协调发展研究</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.06.01</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">星***亮</li>
                          <li class="marker-rank rank-style-3"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>袖珍中国地图册</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.06.04</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">孤***泊</li>
                          <li class="marker-rank rank-style-1"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>基本中国拳法</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.06.01</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">超***拳</li>
                          <li class="marker-rank rank-style-1"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>重逢</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">点赞</li>
                          <li class="review-time">2019.05.31</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">L***X</li>
                          <li class="marker-rank rank-style-5"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>爱看书的插画</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.05.31</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">书***v</li>
                          <li class="marker-rank rank-style-3"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>易经与老子、中国的礼乐风景、文明皇后-胡兰成遗稿集</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评</li>
                          <li class="review-time">2019.05.31</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">花***2</li>
                          <li class="marker-rank rank-style-4"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>滇缅公路</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.05.31</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">书***3</li>
                          <li class="marker-rank rank-style-3"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>城市的精神-全球化时代.城市何以安顿我们-I-(修订本)</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.05.31</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">书***9</li>
                          <li class="marker-rank rank-style-4"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>颈淋巴结清扫术</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.06.15</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">秋***色</li>
                          <li class="marker-rank rank-style-1"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>隔江山色-元代绘画(1279-1368)</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.05.31</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">隐***寂</li>
                          <li class="marker-rank rank-style-6"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>改变西方世界的26个字母</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li
                            class="review-buyer"
                          >好！值得信赖，诚信好书友,(新时代书店)欢迎您常来看看。谢谢！24小时服务电话-13353229499</li>
                          <li class="review-time">2019.06.02</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">高***</li>
                          <li class="marker-rank rank-style-8"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>&lt;&lt;设色山水十开&gt;&gt;&lt;&lt;水图十二段&gt;&gt;-马远-中国美术史.大师原典、陈洪绶-中国美术史.大师原典、金农-中国美术史.大师</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.05.31</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">书***3</li>
                          <li class="marker-rank rank-style-4"></li>
                        </ul>
                      </div>
                      <div class="review-content">
                        <ul class="review-goods">
                          <li class="goods-intro">
                            <i class="title">商品:&nbsp;</i>
                            <span>小学叙事散文教学实践的研究</span>
                          </li>
                          <li class="rank-icon">
                            <i class="iconfont icon-haopingzhongping"></i>
                          </li>
                        </ul>
                        <ul class="review-text">
                          <li class="review-buyer">好评!</li>
                          <li class="review-time">2019.05.31</li>
                        </ul>
                        <ul class="review-marker">
                          <li class="marker-user">李***0</li>
                          <li class="marker-rank rank-style-8"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="pager-wrapper clearfix"></div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="left-block">
          <div class="search-in-store">
            <div class="search-in">
              <form action class="put-box">
                <input type="text" placeholder="搜本店">
                <div class="btn">
                  <i class="el-icon-search"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="category-bar-box">
          <div class="category-bar-title">金网分类</div>
          <div class="category-bar-content">
            <div class="category-bar-content-title">图书</div>
            <ul>
              <li class="special-item">
                <a href="#">哲学心理学</a>
                <i>（3）</i>
              </li>
              <li class="special-item">
                <a href="#">自然科学</a>
                <i>（1）</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 版本权限 -->
    <VersionAuthority></VersionAuthority>
    <!-- 页面底部 -->
    <Footer></Footer>
    <!-- 侧边固定栏 -->
    <Aside></Aside>
  </div>
</template>

<script>
import net from "../tools/net";
import Header from "../components/Header";
import Bookstoreheader from "../components/Bookstoreheader";
import SimilarProducts from "../components/SimilarProducts";
import Recommend from "../components/Recommend";
import VersionAuthority from "../components/VersionAuthority";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
export default {
  name: "书详情页面",
  data() {
    return {
      net: net,
      num: 1,
      id:"",
      activeName: "first",
      input1: "",
      radio: "1",
      checked: true,
      datashow: "",
      data1: [],
      data2: [],
      index: ""
    };
  },
  components: {
    Header,
    Bookstoreheader,
    SimilarProducts,
    Recommend,
    VersionAuthority,
    Footer,
    Aside
  },
   created() {
    this.getParams();
    this.showData();
  },
  methods: {
     getParams(){
        // 取到路由带过来的参数
        var id = this.$route.params.id
        // 将数据放在当前组件的数据内
        console.log(id)
         this.id = id;
         console.log(this)
      },
    showData() {
      let that = this;
      this.net.post(
        "showBook",
        {
          booksName: this.id
        },
        res => {
          console.log(res.data[0]);
          console.log(this);
          // this.id=id;
          this.datashow = res.data[0];
          that.data1 = res.data[0];
          that.data2 = res.data[0];
        }
      );
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(value) {
      console.log(value);
    },
    handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount',n)
    },
    
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,
li,
dl,
dd,
dt,
p {
  list-style: none;
}
a {
  text-emphasis: none;
}
* {
  margin: 0;
  padding: 0;
}
.hello {
  min-height: 100%;
  position: relative;
}
.shop_top_title {
  min-width: 1200px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 46px;
  color: #435348;
  background: url(../assets/greendianzhao_bg@2x.png);
  background-size: 1280px 80px;
}
.nav_top_box {
  min-width: 1200px;
  height: 26px;
  line-height: 26px;
  background-color: #66756b;
}
.el-row {
  /* width: 1000px; */
  margin: 0 auto;
  background-color: #66756b;
}
.el-col {
  height: 26px;
  line-height: 26px;
}
.el-col:first-of-type {
  position: relative;
  float: left;
  font-size: 14px;
}
.el-col:nth-of-type(2) {
  position: relative;
  float: right;
  right: 30px;
}
.el-dropdown {
  border-left: 1px solid #66756b;
  border-right: 1px solid #66756b;
  background-color: #66756b;
  color: #fff;
  float: left;
  padding: 0 9px 0 12px;
  margin-right: 15px;
  height: 26px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #555;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-col:first-of-type > a {
  float: left;
  padding: 0 12px;
  margin-right: 15px;
  height: 26px;
  color: #fff;
  position: relative;
  left: 0;
  top: 1px;
  font-size: 14px;
}
.el-col > a i {
  color: #bfc7c2;
}
.el-col:nth-of-type(2) > a {
  height: 26px;
  padding: 0 12px;
  margin-left: 15px;
  font-size: 12px;
  color: #fff;
  position: relative;
  float: left;
  left: 0;
  top: 0;
}
.main-content {
  width: 1000px;
  margin: 0 auto;
  height: 3760px;
}
.main-top {
  margin-top: 30px;
  padding-bottom: 30px;
}
.major-function-box {
  float: left;
  width: 800px;
}
.exhibition {
  width: 300px;
}
.lg-list {
  position: relative;
  height: 300px;
  line-height: 297px;
  border: 1px solid #e5e5e5;
  text-align: center;
  overflow: hidden;
}
.lg-list li {
  display: block;
  opacity: 1;
  width: 300px;
  height: 300px;
  cursor: pointer;
}
.lg-list li img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.sm-list {
  width: 306px;
  max-height: 100px;
  margin-top: 20px;
  overflow: hidden;
}
.active {
  border: 2px solid #8c228c;
}
.sm-list li {
  float: left;
  width: 46px;
  height: 46px;
  line-height: 40px;
  margin: 0 5px 5px 0;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
}
.sm-list li img {
  height: 46px;
  vertical-align: middle;
}
.major-function {
  width: 460px;
  margin-left: 320px;
  position: relative;
  bottom: 373px;
}
.title-box {
  position: relative;
  overflow: hidden;
  margin-top: -5px;
}
.title-box .title {
  float: left;
  text-align: left;
  font-weight: bolder;
  padding-left: 2px;
  /* display: inline; */
  font-size: 16px;
  line-height: 28px;
  color: #333;
}
.tip-off {
  float: right;
  font-size: 12px;
  color: #bbb;
  margin-top: 5px;
  cursor: pointer;
}
.keywords-lock {
  float: left;
  text-align: left;
  margin-top: 6px;
  font-size: 12px;
  line-height: 16px;
  color: #333;
}
.price-group {
  position: relative;
  background: #f3f0e9;
  margin-top: 32px;
  padding: 7px 0;
  color: #333;
}
.price-group p {
  height: 29px;
  line-height: 29px;
  overflow: hidden;
}
.price-group p .title {
  float: left;
  padding-top: 1px;
  text-align: left;
  font-size: 12px;
  margin: 0 19px 0 10px;
  color: #999;
}
.now-price-text-cont {
  float: left;
}
.now-price-text-cont i {
  float: left;
  font-style: normal;
}
.now-price-icon {
  margin-right: 0;
  padding-top: 1px;
  color: #8c222c;
}
.now-price-text {
  margin-right: 5px;
  font-size: 18px;
  color: #8c222c;
  font-weight: bolder;
}
.now-price-discount {
  margin-top: 6px;
  padding: 0 2px;
  height: 15px;
  line-height: 16px;
  font-size: 12px;
  background: #bf7f5f;
  color: #fff;
  margin-right: 9px;
}
.origin-price {
  height: 29px;
  line-height: 29px;
  overflow: hidden;
}
.quality {
  height: 29px;
  line-height: 29px;
  overflow: hidden;
}
.origin-price-text {
  font-size: 14px;
  text-decoration: line-through;
  float: left;
}
.quality-text {
  float: left;
}
.quality-desc-common {
  font-size: 14px;
  margin-left: 1px;
  font-weight: bolder;
  float: left;
  margin-right: 9px;
  font-style: normal;
}
/* 运费信息 */
.carry {
  display: block;
  margin-top: 8px;
  padding-bottom: 2px;
  border-bottom: 1px solid #e5e5e5;
}
.carry-title {
  display: table-cell;
  white-space: nowrap;
  text-align: left;
  font-size: 12px;
  padding: 0 19px 0 10px;
  color: #999;
}
.carry-cont {
  display: table-cell;
  word-wrap: break-word;
  max-height: 44px;
}
.send-from {
  margin-left: 0;
  position: relative;
  display: inline-block;
  font-size: 12px;
}
.carry-cont .el-dropdown {
  position: relative;
  /* margin-left: -2px; */
  height: 24px;
  cursor: pointer;
  border: none;
  background-color: #fff;
  font-size: 13px;
  color: #555;
  float: right;
  right: 62px;
}
.carry .express-wrapper {
  position: relative;
  /* display: inline-block; */
  float: right;
  left: 90px;
  font-size: 12px;
}
/* 上书时间 */
.up-book-date-onsale {
  height: 35px;
  line-height: 40px;
  font-size: 12px;
}
.up-book-date-title {
  padding-left: 10px;
  color: #999;
  position: relative;
  float: left;
  left: 0;
}
.up-book-date-time {
  margin-left: 20px;
  position: relative;
  left: 0;
  float: left;
}
/* 库存 */
.count-check dl {
  height: 28px;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  position: relative;
  left: -138px;
}
.count-check dl dt {
  line-height: 26px;
  padding: 0 19px 0 10px;
  float: left;
  color: #999;
  vertical-align: middle;
}
.count-check dl dd {
  float: left;
  overflow: hidden;
}
.count-check dl .count-state {
  float: left;
  line-height: 26px;
  margin-left: 0;
  margin-right: 2px;
  color: #8c222c;
}
/* 购买 */
.buy-group {
  position: relative;
  margin-top: 14px;
}
.go-buy {
  float: left;
  overflow: hidden;
  width: 152px;
  border-radius: 2px;
  background-color: #f8f7f3;
  color: #8c222c;
  border: 1px solid #8c222c;
  margin-right: 18px;
}
.add-cart {
  float: left;
  left: 850px;
  width: 160px;
  margin-top: -1px;
  border-radius: 2px;
  color: #fff;
  background-color: #8c222c;
  border-color: #fff;
}
.share {
  position: relative;
  float: right;
  width: 52px;
  height: 40px;
  margin-right: 20px;
  user-select: none;
  color: #a9987f;
}
.collect {
  float: right;
  user-select: none;
  color: #a9987f;
}
.buy-group a {
  display: inline-block;
  height: 40px;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
}
/* 书店/书摊 */
.store-info-wrapper {
  position: relative;
  width: 200px;
  float: right;
}
.store-info {
  position: relative;
  border: 1px solid #e5e5e5;
  padding-bottom: 10px;
  margin-bottom: 0;
  border-top: 2px solid #97a69c;
}
.store-info-content {
  position: relative;
  margin: 20px 12px 0;
  padding-bottom: 10px;
}
.store-info-content > div {
  margin-bottom: 5px;
  height: 30px;
}
.store-info-content .store-info-name {
  font-size: 13px;
  font-weight: bolder;
  float: left;
}
.store-info-content .store-info-name a {
  color: #333;
}
.store-info-top {
  margin-bottom: 2px;
  width: 154px;
  top: 10px;
  position: relative;
  float: left;
}
.shop-owner-info {
  padding-bottom: 0;
}
.store-content-left {
  display: table-cell;
  word-break: keep-all;
  font-size: 12px;
  color: #999;
  padding-right: 10px;
}
.store-content-left > a {
  position: relative;
  width: 14px;
}
.store-content-right {
  display: table-cell;
  word-break: keep-all;
  font-size: 12px;
  position: relative;
  vertical-align: center;
  width: 16px;
}
.el-icon-star-on {
  width: 14px;
  height: 14px;
  color: yellow;
}
.el-icon-s-custom {
  margin-top: 2px;
  margin-right: 6px;
  color: #8999a9;
}
.rate-block {
  display: block;
  position: relative;
  top: 20px;
}
.score {
  margin: 0;
  padding: 10px 12px 5px;
  background-color: #fafafa;
}
.score .score_box {
  margin-bottom: 1px;
  height: 20px;
}
.score .exchange_rate {
  margin-bottom: 0;
}
.score .storeIns_content_left {
  display: table-cell;
  word-break: keep-all;
  font-size: 12px;
  color: #333;
  padding-right: 10px;
}
.storeIns_content_right {
  display: table-cell;
  word-break: keep-all;
  font-size: 12px;
  color: #333;
}
.storeIns_content_reputation {
  font-size: 12px;
  color: #a25c39;
}
/* .reputation {
  position: relative;
  bottom: 17px;
  left: 55px;
} */
.shop-owner-left {
  float: left;
  font-size: 12px;
  color: #999;
  padding-right: 10px;
}
.shop-owner-right {
  float: left;
  padding-top: 2px;
  font-size: 12px;
  margin-top: 1px;
  line-height: 16px;
  max-width: 120px;
  cursor: pointer;
}
.chat-box {
  margin-bottom: 3px;
}
.chat {
  width: 70px;
  height: 20px;
  margin-left: 0;
  line-height: 22px;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
  display: block;
  background: #f8f8f8;
  border: 1px solid #e5e5e5;
  color: #666;
  font-size: 12px;
}
.store-btn-box {
  border: 0;
  padding-bottom: 5px;
  text-align: center;
}
.store-content-btn {
  display: inline-block;
  width: 80px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 12px;
  border-radius: 2px;
  background-color: #f6f7f6;
  border: 1px solid #e5e5e5;
  color: #333;
  cursor: pointer;
}
.go-shop {
  margin-right: 5px;
}
.main-bot {
  position: relative;
  bottom: 260px;
}
/* 右边栏主要信息区 */
.right-block {
  float: right;
  width: 820px;
  position: relative;
}
.el-tab-pane {
  width: 740px;
  position: relative;
  left: 30px;
}
.right-block .el-tab-pane .major-info {
  width: 740px;
  position: relative;
  margin: 25px 0 50px;
  padding-bottom: 18px;
  background-color: #fff;
  border: 3px solid rgba(137, 153, 169, 0.2);
  color: #333;
}
.right-block .el-tab-pane .major-info .info-link {
  position: absolute;
  top: -10px;
  right: 22px;
  width: 110px;
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: bolder;
  background: #fff;
  color: rgba(137, 153, 169, 0.5);
}
.classify-link {
  height: 20px;
  margin: 19px 0 0 22px;
  font-size: 14px;
  text-align: left;
  color: #999;
}
.right-block .el-tab-pane .major-info .major-info-main {
  width: 100%;
  overflow: hidden;
}
.right-block .el-tab-pane .major-info .major-info-main .book-cover {
  float: left;
  margin: 20px 20px 0;
  width: 160px;
  height: 160px;
  text-align: center;
}
.right-block .el-tab-pane .major-info .major-info-main .book-cover img {
  max-width: 160px;
  max-height: 160px;
}
.right-block .el-tab-pane .major-info .major-info-main .major-info-text {
  margin-top: -3px;
}
.right-block .el-tab-pane .major-info .major-info-main .major-info-text .title {
  line-height: 20px;
  font-size: 14px;
  margin: 20px 15px 0 0;
  color: #333;
}
.right-block
  .el-tab-pane
  .major-info
  .major-info-main
  .major-info-text
  .title
  a {
  color: #365899;
}
.right-block
  .el-tab-pane
  .major-info
  .major-info-main
  .major-info-text
  .detail-lists {
  margin-top: 13px;
}
.right-block
  .el-tab-pane
  .major-info
  .major-info-main
  .major-info-text
  .detail-lists
  ul {
  float: left;
  font-size: 12px;
  margin-right: 17px;
  color: #666;
}
.right-block
  .el-tab-pane
  .major-info
  .major-info-main
  .major-info-text
  .detail-lists
  .detail-list1 {
  width: 260px;
}
.right-block .el-tab-pane .brief-intro {
  margin: 10px 17px 0;
  max-height: 440px;
  overflow: hidden;
}
.right-block .el-tab-pane .brief-intro .brief-intro-text {
  overflow: hidden;
  margin-top: -2px;
}
.right-block .el-tab-pane .brief-intro .brief-intro-text dl {
  margin-top: 22px;
  font-size: 13px;
}
.right-block .el-tab-pane .brief-intro .brief-intro-text dl dt {
  height: 22px;
  margin-bottom: 0;
  line-height: 22px;
  font-weight: bolder;
}
.right-block .el-tab-pane .brief-intro .brief-intro-text dl dd {
  line-height: 22px;
}
.right-block .el-tab-pane .major-info .open-more {
  height: 20px;
  cursor: pointer;
  margin-left: 18px;
  color: #365899;
}
.right-block .el-tab-pane .book-describe {
  width: 742px;
  padding-top: 23px;
  padding-bottom: 25px;
}
.right-block .el-tab-pane .book-describe dl {
  color: #333;
}
.right-block .el-tab-pane .book-describe dl dt {
  height: 22px;
  font-size: 16px;
  line-height: 22px;
  font-weight: bolder;
  margin-bottom: 5px;
}
.right-block .el-tab-pane .figure-info-box {
  width: 740px;
  text-align: center;
}
.right-block .el-tab-pane .figure-info-box li {
  display: block;
  padding: 25px 0;
}
.right-block .el-tab-pane .figure-info-box li a {
  display: block;
}
.right-block .el-tab-pane .figure-info-box li a img {
  max-width: 740px;
  margin: 0 auto;
  vertical-align: middle;
}
.right-block .el-tab-pane .figure-info-box li p {
  margin: 0 auto;
  padding-top: 8px;
  color: #666;
  background: #fff;
  text-align: center;
  font-size: 12px;
}
/* 店铺评价 */
.right-block .el-tab-pane .shop-reviews-wrap {
  margin: 25px 0;
}
.right-block .el-tab-pane .shop-reviews-wrap .shop-reviews {
  width: 760px;
  border: 1px solid #e5e5e5;
}
.right-block .el-tab-pane .shop-reviews-wrap .shop-reviews .filter-area {
  overflow: hidden;
  padding-left: 20px;
  color: #333;
  background-color: #f2f6f5;
  border-bottom: solid 1px #e5e5e5;
}
.right-block .el-tab-pane .shop-reviews-wrap .shop-reviews .filter-area ul {
  float: left;
}
.right-block .el-tab-pane .shop-reviews-wrap .shop-reviews .filter-area ul li {
  float: left;
  margin-right: 30px;
  line-height: 35px;
  height: 35px;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
}
.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .filter-area
  ul
  li
  .el-radio {
  position: relative;
  top: 1px;
  display: inline;
  font-size: 16px;
  margin-right: 0;
}
.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .filter-area
  .filter-empty {
  float: right;
  margin-right: 20px;
  height: 35px;
  line-height: 35px;
  font-size: 12px;
  cursor: pointer;
}
.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .filter-area
  .filter-empty
  .el-checkbox {
  position: relative;
  top: -1px;
  display: inline-block;
  font-size: 12px;
  vertical-align: middle;
  margin-right: 0;
}
.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .shop-reviews-container {
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  color: #333;
}
.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .shop-reviews-container
  .review-content {
  margin-top: 18px;
  padding: 0 0 18px 19px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .shop-reviews-container
  .review-content
  ul {
  float: left;
  user-select: none;
  margin-right: 15px;
}

.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .shop-reviews-container
  .review-content
  .review-goods
  .goods-intro {
  float: left;
  width: 167px;
  min-height: 60px;
  overflow: hidden;
  word-break: break-all;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  color: #666;
}
.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .shop-reviews-container
  .review-content
  .review-goods
  .goods-intro
  .title {
  color: #333;
  font-style: normal;
}

.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .shop-reviews-container
  .review-content
  .review-goods
  .rank-icon {
  float: right;
  margin-left: 15px;
  width: 15px;
  height: 15px;
}
.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .shop-reviews-container
  .review-content
  .review-text {
  width: 420px;
  color: #333;
}
.right-block
  .el-tab-pane
  .shop-reviews-wrap
  .shop-reviews
  .shop-reviews-container
  .review-content
  .review-marker {
  float: right;
  width: 80px;
  margin-right: 20px;
  color: #333;
}

/* 左边栏搜索区 */
.left-block {
  float: left;
  width: 180px;
  padding-bottom: 50px;
}
.search-in-store {
  height: 46px;
  margin-bottom: 32px;
}
.search-in {
  left: 159.6px;
  height: 26px;
  background-color: #fafafa;
  border: 1px solid #e5e5e5;
  padding: 5px 10px 9px 9px;
}
.put-box {
  position: relative;
  width: 159px;
  height: 26px;
  font-size: 0;
  background-color: #fff;
  border: 1px solid #ccc;
}
.put-box input {
  width: 135px;
  height: 24px;
  padding: 0 10px;
  line-height: 14px;
  font-size: 12px;
  border: none;
}
.put-box .btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 26px;
  padding: 7px;
  height: 10px;
  line-height: 12px;
  color: #9a958f;
  background-color: #fff;
}
.category-bar-box {
  margin-bottom: 40px;
  position: absolute;
  top: 740px;
  width: 180px;
}
.category-bar-box .category-bar-title {
  height: 38px;
  line-height: 38px;
  padding: 0 10px;
  font-size: 14px;
  border-top: 1px solid #86998d;
  background: #f2f7f5;
  color: #666;
}
.category-bar-content {
  height: 96px;
  padding: 8px 10px 0;
  font-size: 12px;
  color: #333;
}
.category-bar-content-title {
  margin: 10px 0;
  font-size: 12px;
  color: #333;
  font-weight: 700;
}
.category-bar-content ul {
  padding-left: 10px;
}
.category-bar-content ul li {
  font-size: 12px;
  color: #333;
  margin-top: 4px;
}
.category-bar-content a {
  color: #333;
}
.category-bar-content i {
  margin-left: 5px;
  font-style: normal;
  color: #999;
}
</style>
