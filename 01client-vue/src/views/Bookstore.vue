<template>
  <div class="hello">
    <!-- 头部 -->
    <div>
      <HeaderTop></HeaderTop>
    </div>
    <!-- 书店头部 -->
    <div>
      <HeaderSearch></HeaderSearch>
    </div>
    <div>
      <HeaderTitle></HeaderTitle>
    </div>
    <!-- 内容主体  书店轮播图 书店列表 -->
    <Lunbo></Lunbo>


    <div class="store-box">
      <!-- 左边导航栏 -->
      <div class="content-left">
        <div class="shopLeftbar">
          <div class="border_box">
            <div class="allinfo_box gray6">
              <div class="m_t5">1509家书店</div>
              <div class="m_t5">9522家书摊</div>
              <div class="m_t5">987654321种图书</div>
            </div>
            <div class="m_t34">
              <h3>销量排行榜</h3>
              <div id="changeTitleTxt" class="change_text m_t10">
                <ul style="display: block;">
                  <li>
                    <span class="w_num pull-left c_red blod">1.</span>
                    <span class="text_box">
                      <a href="http://shop.kongfz.com/3669/" target="_blank">通雅轩</a>
                    </span>
                  </li>
                  <li>
                    <span class="w_num pull-left c_red blod">2.</span>
                    <span class="text_box">
                      <a href="http://shop.kongfz.com/26986/" target="_blank">一得书苑</a>
                    </span>
                  </li>
                  <li>
                    <span class="w_num pull-left c_red blod">3.</span>
                    <span class="text_box">
                      <a href="http://shop.kongfz.com/180897/" target="_blank">孔龙书社A</a>
                    </span>
                  </li>
                  <li>
                    <span class="w_num pull-left">4.</span>
                    <span class="text_box">
                      <a href="http://shop.kongfz.com/203004/" target="_blank">孔龙文体公司</a>
                    </span>
                  </li>
                  <li>
                    <span class="w_num pull-left">5.</span>
                    <span class="text_box">
                      <a href="http://shop.kongfz.com/198833/" target="_blank">学到老书店</a>
                    </span>
                  </li>
                  <li>
                    <span class="w_num pull-left">6.</span>
                    <span class="text_box">
                      <a href="http://shop.kongfz.com/16354/" target="_blank">需配书院（南京书店）</a>
                    </span>
                  </li>
                  <li>
                    <span class="w_num pull-left">7.</span>
                    <span class="text_box">
                      <a href="http://shop.kongfz.com/241950/" target="_blank">玉璞书屋</a>
                    </span>
                  </li>
                  <li>
                    <span class="w_num pull-left">8.</span>
                    <span class="text_box">
                      <a href="http://shop.kongfz.com/4024/" target="_blank">乐匋书社</a>
                    </span>
                  </li>
                  <li>
                    <span class="w_num pull-left">9.</span>
                    <span class="text_box">
                      <a href="http://shop.kongfz.com/6713/" target="_blank">白洋淀书斋</a>
                    </span>
                  </li>
                  <li>
                    <span class="w_num pull-left">10.</span>
                    <span class="text_box">
                      <a href="http://shop.kongfz.com/239696/" target="_blank">丝绸之路旧书店</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边导航栏 -->

      <div class="content-right" @click="showData">
        <div class="booklist_tit">
          <h3 class="pull-left">特色推荐</h3>
        </div>
        <div class="book-list">
          <div class="book">
            <li v-for="(item,index) in data" :key="index">
              <div class="pic">
                <div @click="bookintroduce(item.id)">
                  <img :src="item.img" onerror="this.src='/img/error.jpg';">
                </div>
              </div>
              <!-- <div @click="imgData(item.id)">{{item.id}}</div> -->
              <div class="book_name">
                <span @click="bookintroduce(item.id)">{{item.name}}</span>
              </div>
              <div class="author">{{item.author}} 著</div>
              <div class="shop_name">
                <a href="http://shop.kongfz.com/163/" target="_blank">{{item.store}}</a>
              </div>
              <div class="price">
                <span style="float: left;width:12px;font-size:14px;color: #bf7f5f;">￥</span>
                {{item.price}}
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="clr"></div>
      <Footer></Footer>
    </div>

    <!-- <img src="../assets/img03.jpg" alt="" srcset=""> -->
  </div>
</template>

<script>
// import net from "../tools/net";
import HeaderTop from "../components/HeaderTop";
import HeaderSearch from "../components/HeaderSearch";
import Lunbo from "../components/Lunbo";
import HeaderTitle from "../components/HeaderTitle";
// import Book from "../components/Book";
import net from "../tools/net";
import Footer from "../components/Footer";
// import Autoplay from "../components/smallcomponents/Autoplay";

export default {
  name: "Bookstore",
  data() {
    return {
      data: [],
      // imgs:[],
      form: {
        name: "",
        date: "",
        address: ""
      },
      idx: -1,
      net: net
    };
  },
  components: {
    HeaderTop,
    HeaderSearch,
    Lunbo,
    HeaderTitle,
    Footer

    // Book
  },
  // 生命周期函数，自动触发showData方法
  created() {
    this.showData();
    // this.imgData();
  },
  // beforeUpdate() {
  //   this.imgData();
  // },
  methods: {
    showData() {
      let that = this;
      console.log(that);
      this.net.post(
        "show",
        {
          kind: "小说"
        },
        res => {
          // let data=that.bookdata[0];
          for (let i = 0; i < res.data.length; i++) {
            let obj = {};
            // let id="";
            obj.id = res.data[i].product_id;
            obj.name = res.data[i].book_name;
            obj.author = res.data[i].book_author;
            obj.time = res.data[i].publish_time;
            obj.appearance = res.data[i].phase;
            obj.price = res.data[i].price;
            obj.inventory = res.data[i].number;
            obj.store = res.data[i].book_store;
            obj.img = res.data[i].img;
            that.data.push(obj);
          }
          console.log(res.data);
        }
      );
      
    },
    bookintroduce(e){
      console.log(this)
      console.log(e)
      this.$router.push({name:'BookListView',params:{id:e}})
    }
  }
};
</script>


<style>
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
  list-style: none;
}
.store-box {
  width: 1200px;
  margin: 0 auto;
}
.content-left {
  width: 180px;
  /* height: 1100px; */
  padding-bottom: 50px;
  float: left;

  /* background-color: brown; */
}
.shopLeftbar h3 {
  margin-top: 18px;
  font-size: 18px;
  line-height: 36px;
  height: 40px;
  overflow: hidden;
  padding-left: 10px;
  border-bottom: 1px solid #e5e5e5;
}
.change_text {
  margin-top: 18px;
}
.change_text li {
  font-size: 12px;
  line-height: 20px;
  height: 20px;
  overflow: hidden;
  margin-bottom: 5px;
  padding-right: 10px;
}
.change_text .w_num {
  width: 23px;
  text-align: right;
  margin-right: 8px;
  font-size: 12px;
  float: left;
}
/* .pull-left {
    float: left!important;
} */
.c_red {
  color: #8c222c;
}
.change_text li a {
  display: block;
  width: 100%;
  word-break: break-all;
  color: #333;
}

.content-right {
  width: 1020px;
  /* height: 1100px; */
  float: left;
  background-color: white;
  /* border-left: 1px solid #ccc; */

}
/* .book-list {
  display: flex;
  flex-wrap: wrap;
 
  justify-content: space-around;
} */
.booklist_tit {
  border-bottom: 1px solid #ccc;
  line-height: 48px;
}
.pull-left {
  font-size: 22px;
}
.book-list {
  margin-top: 25px;
}
.book-list li {
  float: left;
  width: 130px;
  height: 218px;
  margin-left: 42px;
  margin-bottom: 37px;
  line-height: 20px;
  /* word-break: break-all; */
}
.book-list li .pic div {
  display: block;
  width: 128px;
  height: 128px;
  line-height: 124px;
  border: 1px solid #e5e5e5;
  text-align: center;
}
.book-list li .pic div img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.book-list li .book_name {
  overflow: hidden;
}
.book-list li .book_name span {
  font-size: 12px;
  max-height: 40px;
  line-height: 20px;
  overflow: hidden;
  margin-top: 5px;
  color: #333;
}
.book-list li .shop_name {
  height: 20px;
  color: #8999a9;
  overflow: hidden;
}
.book-list li .shop_name a {
  color: #8999a9;
}
.shop_booklist1 .book_list li .price {
  position: absolute;
  left: 0;
  bottom: 0;
  color: #bf7f5f;
  font-size: 16px;
  margin-top: 5px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.clr{
  clear: both;
}
</style>
