<template>
  <div>
    <div class="shop_top_title">
      <div class="shop_top_text">{{dataintt.book_store}}</div>
    </div>
    <div class="nav_top_box">
      <el-row>
        <el-col :span="18">
          <el-dropdown>
            <span class="el-dropdown-link">
              商品分类
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled>金网分类</el-dropdown-item>
              <el-dropdown-item disabled divided>图书</el-dropdown-item>
              <el-dropdown-item>哲学心理学</el-dropdown-item>
              <el-dropdown-item>自然科学</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <a href="#">店铺首页</a>
          <a href="#">全部商品</a>
          <a href="#">最新上架</a>
          <a href="#">店主推荐</a>
          <a href="#">珍本图书</a>
          <a href="#">优惠特价</a>
        </el-col>
        <el-col :span="6">
          <a href="#">
            <i class="el-icon-star-off"></i>
            <span>收藏本店</span>
          </a>
          <a href="#">
            <i class="el-icon-chat-dot-round"></i>
            <span>微信逛本店</span>
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import net from "../tools/net";
export default {
  name: "Bookstoreheader",
  props:{
    dataintt:Array,
    required:true
  },
  data() {
    return {
      restaurants: [],
      state1: "",
      net:net
    };
  },
  methods:{
    datashow(){
      console.log(this.dataintt);     
    }
  },
  created(){
    this.datashow();
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
.nav_top_box .el-row {
  width: 1200px;
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
  color: #fff !important;
  float: left;
  padding: 0 9px 0 12px;
  margin-right: 15px;
  height: 26px;
}
.el-dropdown-link {
  cursor: pointer;
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
</style>
