<template>
  <div>
    <HeaderTop/>
    <HeaderSearch/>

    <HeaderTitle/>

    <HeaderSecond :tuijian="books[0]"/>

    <BookSort :book="books[1]"/>
    <BookSort :book="books[2]" price/>
    <BookSort :book="books[3]" bgc/>

    <AuctionCompany/>
    <Partners/>
    <Copyright/>
  </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop";
import HeaderSearch from "../components/HeaderSearch";
import HeaderTitle from "../components/HeaderTitle";
import HeaderSecond from "../components/HeaderSecond";
import BookSort from "../components/BookSort";
import AuctionCompany from "../components/AuctionCompany";
import Partners from "../components/Partners";
import Copyright from "../components/Copyright";
import net from "../tools/net";

export default {
  name: "IndexView",
  data() {
    return {
      net: net,
      books: [
        {
          max_title: "",
          title_a: [],
          min_title: "好书推荐",
          booklist: []
        },
        {
          max_title: "旧书",
          title_a: [
            "四部丛刊",
            "商务印书馆",
            "珂罗版",
            "梁启超",
            "十三经清人注",
            "中华书局",
            "唐诗三百首",
            "经眼录",
            "胡适文集"
          ],
          min_title: "国学经典",
          booklist: [],
          right_title: {
            title: "书店推荐",
            shudian: [
              {
                dianming: "通雅轩",
                jieshao: "实体古籍书店，主营国学古籍,线装,文史,艺术类图书。"
              },
              {
                dianming: "墨笺楼商城",
                jieshao:
                  "名人墨迹与书画、线装古籍、陶瓷瓷器、影像老照片、油版雕等多种艺术门类。"
              },
              {
                dianming: "合众书局",
                jieshao: "经营收藏、文史、古旧书籍，品类丰富，特色老店！"
              },
              {
                dianming: "王百玉书店",
                jieshao: "古旧书店，现货实价，优惠促销。"
              },
              {
                dianming: "乐匋书社",
                jieshao: "实体古籍书店，主营古籍、文史、艺术、考古、线装书籍"
              },
              {
                dianming: "国民书店",
                jieshao: "主营艺术类、文史类以及特价折扣图书。"
              },
              {
                dianming: "白洋淀书斋",
                jieshao: "主营各类文史旧书,实物拍图，品种丰富。"
              },
              {
                dianming: "先天下图书城",
                jieshao: "主营新书，品种丰富。"
              }
            ]
          }
        },
        {
          max_title: "新书",
          title_a: [],
          min_title: "新近出版",
          more: "",
          booklist: [],
          right_title: {
            title: "新书销售排行榜",
            shudian: [
              {
                dianming: "通雅轩",
                jieshao: "实体古籍书店，主营国学古籍,线装,文史,艺术类图书。"
              },
              {
                dianming: "墨笺楼商城",
                jieshao:
                  "名人墨迹与书画、线装古籍、陶瓷瓷器、影像老照片、油版雕等多种艺术门类。"
              },
              {
                dianming: "合众书局",
                jieshao: "经营收藏、文史、古旧书籍，品类丰富，特色老店！"
              },
              {
                dianming: "王百玉书店",
                jieshao: "古旧书店，现货实价，优惠促销。"
              },
              {
                dianming: "乐匋书社",
                jieshao: "实体古籍书店，主营古籍、文史、艺术、考古、线装书籍"
              },
              {
                dianming: "国民书店",
                jieshao: "主营艺术类、文史类以及特价折扣图书。"
              },
              {
                dianming: "白洋淀书斋",
                jieshao: "主营各类文史旧书,实物拍图，品种丰富。"
              },
              {
                dianming: "先天下图书城",
                jieshao: "主营新书，品种丰富。"
              }
            ]
          }
        },
        {
          max_title: "旧籍寻踪",
          title_a: [],
          min_title: "史籍掇英",
          more: "",
          booklist: [],
          right_title: {
            title: "书店推荐",
            shudian: [
              {
                dianming: "通雅轩",
                jieshao: "实体古籍书店，主营国学古籍,线装,文史,艺术类图书。"
              },
              {
                dianming: "墨笺楼商城",
                jieshao:
                  "名人墨迹与书画、线装古籍、陶瓷瓷器、影像老照片、油版雕等多种艺术门类。"
              },
              {
                dianming: "合众书局",
                jieshao: "经营收藏、文史、古旧书籍，品类丰富，特色老店！"
              },
              {
                dianming: "王百玉书店",
                jieshao: "古旧书店，现货实价，优惠促销。"
              },
              {
                dianming: "乐匋书社",
                jieshao: "实体古籍书店，主营古籍、文史、艺术、考古、线装书籍"
              },
              {
                dianming: "国民书店",
                jieshao: "主营艺术类、文史类以及特价折扣图书。"
              },
              {
                dianming: "白洋淀书斋",
                jieshao: "主营各类文史旧书,实物拍图，品种丰富。"
              },
              {
                dianming: "先天下图书城",
                jieshao: "主营新书，品种丰富。"
              }
            ]
          }
        }
      ]
    };
  },
  components: {
    HeaderTop,
    HeaderSearch,
    HeaderTitle,
    HeaderSecond,
    BookSort,
    AuctionCompany,
    Partners,
    Copyright
  },
  created() {
    var that = this;
    this.net.post("all", { status: 1 }, function(res) {
      // console.log(res.data);
      // that.books;
      for (let i = 0; i < 12; i++) {
        var obj = {};
        obj.pic_url = res.data[i].pic_url;
        obj.pic_text = res.data[i].book_name;
        obj.pic_author = res.data[i].book_author;
        obj.price = res.data[i].price;
        obj.product_id = res.data[i].product_id;
        that.books[0].booklist.push(obj);
      }
      for (let j = 12; j < 22; j++) {
        var obj1 = {};
        obj1.pic_url = res.data[j].pic_url;
        obj1.pic_text = res.data[j].book_name;
        obj1.pic_author = res.data[j].book_author;
        obj1.price = res.data[j].price;
        obj1.product_id = res.data[j].product_id;
        that.books[1].booklist.push(obj1);
      }
      for (let t = 22; t < 32; t++) {
        var obj2 = {};
        obj2.pic_url = res.data[t].pic_url;
        obj2.pic_text = res.data[t].book_name;
        obj2.pic_author = res.data[t].book_author;
        obj2.price = res.data[t].price;
        obj2.product_id = res.data[t].product_id;
        that.books[2].booklist.push(obj2);
      }
      for (let b = 32; b < 42; b++) {
        var obj3 = {};
        obj3.pic_url = res.data[b].pic_url;
        obj3.pic_text = res.data[b].book_name;
        obj3.pic_author = res.data[b].book_author;
        obj3.price = res.data[b].price;
        obj3.product_id = res.data[b].product_id;
        that.books[3].booklist.push(obj3);
      }
      // console.log(that.books[0]);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
