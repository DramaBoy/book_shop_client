<template>
  <div class="special-intro">
    <div class="book_list_box">
      <p class="book_list_title">相似商品</p>
      <ul class="clearfix">
        <!-- <li v-for="(items,index) in msg" :key="index"> -->
        <li>
          <div class="pic">
            <a href="#">
              <img :src="dataintt.like_img" alt>
            </a>
          </div>
          <div class="book_name">
            <a href="#">{{dataintt.book_name}}</a>
          </div>
          <div class="shop_name">{{dataintt.book_author}}</div>
          <div class="price">
            <span class="price-icon">￥</span>
            {{dataintt.sell_price}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import net from "../tools/net";
export default {
  name: "SimilarProducts",
  props: {
    dataintt: Array,
    required: true
  },
  data() {
    return {
      restaurants: [],
      state1: "",
      net: net
      //   msg:[
      //       {pic:"//www.kfzimg.com/G07/M00/A4/C1/q4YBAFvziIOAQx-UAAJ816pFxQY290_s.jpg",name:"知识论",shopName:"夏先良 著",price:"10.00"},
      //       {pic:"//www.kfzimg.com/W03/3c/5c/3c5cfd1e99250f7d8316d38d035004d4_s.jpg",name:"知识论",shopName:"美 齐硕姆",price:"15.00"},
      //       {pic:"//www.kfzimg.com/G07/M00/60/25/q4YBAFyOWKyAZcL2AAAXXe0NwuQ831_s.jpg",name:"知识论",shopName:"胡军 著",price:"41.39"},
      //       {pic:"//www.kfzimg.com/G06/M00/76/D3/qIYBAFvNSQWACO1nAARP-C_UbBs254_s.jpg",name:"知识论",shopName:"金岳霖 著",price:"30.00"},
      //       {pic:"//www.kfzimg.com/G05/M00/A4/2F/p4YBAFfANfqAc9sFAAFrBDMgUcI635_s.jpg",name:"知识论",shopName:"金岳霖",price:"30.00"},
      //       {pic:"//www.kfzimg.com/G01/M00/34/5D/o4YBAFRAfI-AdSs0AABqahBhkBs399_s.jpg",name:"知识论",shopName:"胡军",price:"30.00"},
      //       {pic:"//www.kfzimg.com/G07/M00/4B/B2/qoYBAFyMZ5WAKo6zAALNf8kzzq8617_s.jpg",name:"知识论",shopName:"美 齐硕姆",price:"6.00"},
      //       {pic:"//www.kfzimg.com/G06/M00/07/FD/p4YBAFsl3VCAONscAAKb_-F0up8864_s.jpg",name:"知识论",shopName:"何秀煌 著",price:"120.00"},
      //       {pic:"//www.kfzimg.com/G06/M00/A9/30/p4YBAFuw55yACuj8AALNe95atjk052_s.jpg",name:"知识论",shopName:"金岳霖 著",price:"90.00"},
      //       {pic:"//www.kfzimg.com/G07/M00/E5/00/q4YBAFw-iVaAVdYKAABryC6273A984_s.jpg",name:"知识论",shopName:"知识论",price:"45.00"}
      //   ]
    };
  },
  methods: {
    datashow() {
      console.log(this.dataintt);
    }
  },
  created() {
    this.datashow();
  }
};
</script>
<style scoped>
.special-intro {
  padding-top: 23px;
  padding-bottom: 25px;
}
.book_list_box {
  width: 790px;
  overflow: hidden;
}
.special-intro .book_list_title {
  font-size: 16px;
  color: #333;
  margin-top: 0;
  padding-bottom: 21px;
  border-bottom: none;
  line-height: 24px;
}
.book_list_box ul {
  margin-right: -35px;
}
.book_list_box ul li {
  margin: 0 22.5px 30px 0;
  width: 130px;
  position: relative;
  float: left;
  height: 218px;
  line-height: 20px;
}
.book_list_box ul li .pic a {
  display: block;
  width: 128px;
  height: 128px;
  line-height: 124px;
  border: 1px solid #e5e5e5;
  text-align: center;
  font-size: 0;
}
.book_list_box ul li .pic a img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.book_list_box ul li .book_name {
  font-size: 12px;
  max-height: 40px;
  line-height: 20px;
  overflow: hidden;
  margin-top: 5px;
}
.book_list_box ul li .book_name a {
  color: #333;
}
.book_list_box ul li .shop_name {
  height: 20px;
  color: #999;
  overflow: hidden;
  font-size: 12px;
}
.book_list_box ul li .price {
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
.book_list_box ul li .price .price-icon {
  float: left;
  width: 12px;
  font-size: 14px;
  color: #bf7f5f;
}
</style>
