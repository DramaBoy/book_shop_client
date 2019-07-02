<template>
  <div class="box">
    <!-- 头部导航 -->
    <div class="header">
      <el-row>
        <el-col :span="12">
          <div class="index-link">
            <el-link href="/">首页</el-link>
            <el-link href="/store">书店区</el-link>
            <el-link>书摊区</el-link>
            <el-link>新书</el-link>
            <el-link>在线拍卖</el-link>
            <el-link>艺术品专场</el-link>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="user-info">
            <el-link href="/login">登录/注册</el-link>
            <el-link>消息</el-link>
            <el-link href="/shoppingcar">
              <i class="el-icon-shopping-cart-2"></i>购物车{{$store.state.count}}
            </el-link>
            <el-link href="/settlement">我的订单</el-link>
            <el-link>个人中心</el-link>
            <el-link href="/shopregist">卖家中心</el-link>
            <el-link>客服</el-link>
            <el-link>手机版</el-link>|
            <el-link>送至成都</el-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 顶部搜索 -->
    <div class="search">
      <el-row>
        <el-col :span="12">
          <a href>
            <img src="../assets/titleg.png" alt>
          </a>
        </el-col>
        <el-col :span="12">
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="商品名称、作者、出版社、IBSN"
            :trigger-on-focus="false"
            @select="handleSelect"
          >
          </el-autocomplete>
            <div class="btn">搜金网</div>
            <div class="store-btn">搜本店</div>
            <div class="search-link">
              <a href="">高级搜索</a>
            </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
      return {
        restaurants: [],
        state1: ''
      };
    },
   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
}
.header {
  height: 36px;
  background: #f7f7f6;
  line-height: 36px;
}
.el-row {
  width: 1200px;
  height: 100%;
  margin-bottom: 20px;
  position: relative;
  margin: 0 auto;
  background: #f7f7f6;
}
.el-col {
  top: 4px;
  height: 36px;
  font-size: 0;
}
.index-link {
  position: relative;
  left: 0;
  float: left;
  height: 36px;
  display: block;
  margin-right: 15px;
}
.el-link {
  height: 14px;
  display: inline-block;
  vertical-align: middle;
  line-height: 12px;
  font-size: 12px;
  /* color: #8c222c; */
  cursor: pointer;
  margin: 0 8px;
}
.el-link--inner i {
  color: #8c222c;
  margin-right: 4px;
}
.user-info {
  position: absolute;
}

.search {
  width: 100%;
  height: 50px;
  padding: 8px 0 9px;
  border-top: 1px solid #eee;
  background-color: #f7f7f6;
}
.el-col > a {
  text-decoration: none;
  position: absolute;
  left: 126px;
  top: 8px;
  float: left;
  display: block;
  /* width: 32px;
  height: 32px;
  line-height: 27px; */
  font-size: 0;
}
.search img {
  /* width: 32px;
  height: 32px; */
  width: 170px;
  height: 50px;
  margin-left: 100px;
}
.el-autocomplete{
  /* width: auto;
  height: 32px;
  float: right; */
  position: relative;
  float: left;
  width: 372px;
  height: 40px;
  border: 1px solid #8c222c;
}
.el-input{
  float: left;
  position: relative;
  width: 299px;
  height: 28px;
  /* background-color: #fff; */
}
.el-input .el-input__inner{
  color: #999;
  font-size: 12px;
  background-color: #f7f7f6;
  width: 299px;
  height: 32px;
  padding: 6px;
  line-height: 18px;
  border: none;
}
.btn{
  position: relative;
  float: left;
  right: 75px;
  top: 3px;
  width: 71px;
  height: 36px;
  padding-left: 1px;
  line-height: 36px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  border-radius: 0;
  background-color: #8c222c;
  cursor: pointer;
}
.store-btn{
  float: left;
  width: 72px;
  height: 40px;
  margin-left: -68px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  border-radius: 0;
  border: 1px solid #8c222c;
  background-color: #f7f7f6;
  cursor: pointer;
}
.search-link{
  float: left;
  width: 35px;
  height: 32px;
  padding-top: 2px;
  line-height: 20px;
  font-size: 12px;
  color: #666;
  text-align: right;
}
.search-link > a {
  color: #666;
}
</style>


