<template>
  <div class="booklist">
    <!-- 头部 -->
    <div class="topheard">
      <Header></Header>
    </div>
    <!-- 详情类容展示开始 -->
    <div class="bodylist">
      <!-- 图书条目展示 -->
      <EntryContent :statuses="datatop"></EntryContent>
      <!-- 列表 -->
      <AboutOtherEnTop @func="getson"></AboutOtherEnTop>
      <!-- 综合排序 -->
      <AboutEntry v-show="index==0" :dataintt="data"></AboutEntry>
      <!-- 最新上架 -->
      <AboutEntry v-show="index==1" :dataintt="money"></AboutEntry>
      <!-- 价格 -->
      <AboutEntry v-show="index==2" :dataintt="money"></AboutEntry>
      <!-- 含运费从低到高 -->
      <AboutEntry v-show="index==3" :dataintt="kuaide"></AboutEntry>
      <!-- 品相 -->
      <AboutEntry v-show="index==4" :dataintt="data"></AboutEntry>
      <!-- 只看全新 -->
      <AboutEntry v-show="index==5" :dataintt="data2"></AboutEntry>
      <!-- 相关推荐 -->
      <AboutOtherEntry></AboutOtherEntry>
      <Footer></Footer>
      <Aside></Aside>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import EntryContent from "../components/EntryContent";
import AboutEntry from "../components/AboutEntry";
import AboutOtherEnTop from "../components/AboutOtherEnTop";
import AboutOtherEntry from "../components/AboutOtherEntry";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import AboutEntrytext from "../components/AboutEntrytext";

import net from "../tools/net";
export default {
  name: "booklist",
  data() {
    return {
      changeone: "",
      data: [],
      data2: [],
      kuaide: [],
      money: [],
      newdata: [],
      datatop: {},
      net: net,
      index: ""
    };
  },
  created() {
    // this.url();
     this.look()
     this.getParams()
     this.showtop();
    this.showdatabook();
    this.showdatabook2();
    this.showdatabook3();
   this.showdatabook1();
  },
    computed:{    
         goodsList(){
            return this.$store.state.id
        }
    },
  methods: {
    look(){
      this.changeone=this.$store.state.id;
      console.log(this.$store.state.id)
    },
    // 获取头部的内容
    showtop() {
      let that = this;
      console.log(that);
      this.net.post(
        "entrycontent",
        {
          title: that.changeone
        },
        res => {
          that.datatop = res.data[0];
        }
      );
    },
    getson(data) {
      this.index = data;
      // console.log(this.index);
    },
        // 综合排序
     showdatabook() {
      let that = this;
      this.net.post(
        "entryorder",
        {
          alts:that.changeone
        },
        res => {
          that.data = res.data;
        }
      );
    },
    showdatabook2() {
      let that = this;
      this.net.post(
        "entryorder",
        {
          alts:that.changeone
        },
        res => {
          var money = res.data;
          function compare(property) {
            //按照数组中的对象属性进行排序
            return function(a, b) {
              var value1 = a[property];
              var value2 = b[property];
              return value1 - value2;
            };
          }
        money.sort(compare("money"));
        that.money = money;
        }
      );
    },
         showdatabook3() {
      let that = this;
      this.net.post(
        "entryorder",
        {
          alts:that.changeone
        },
        res => {
          var kuaide = res.data;
          function compare(property) {
            //按照数组中的对象属性进行排序
            return function(a, b) {
              var value1 = a[property];
              var value2 = b[property];
              return value1 - value2;
            };
          }
      kuaide.sort(compare('kuaide'))
      that.kuaide=kuaide;
        }
      );
    },
  
    // 全新
    showdatabook1() {
      let that = this;
      this.net.post(
        "entryorder1",
        {
          newdata: "全新",
           alts:this.changeone
        },
        res => {
          that.data2 = res.data;
          // console.log(res.data)
        }
      );
    },
       getParams(){
        // 取到路由带过来的参数
        var id = this.$route.params.id
        // 将数据放在当前组件的数据内
        // console.log(id)
        //  this.changeone = id;
        //  console.log(this)
      }
  },
  components: {
    Header,
    EntryContent,
    AboutEntry,
    AboutOtherEnTop,
    AboutOtherEntry,
    AboutEntrytext,
    Footer,
    Aside
  }
};
</script>
<style scoped>
.bodylist {
  width: 1000px;
  height: 1000px;
  margin: 0 auto;
}
</style>
