<template>
  <div class="headertitle">
    <div class="title lt">
      <ul>
        <li>
          <el-link class="el-link" :underline="false" href="/" target="_blank">
            首页
            <span></span>
          </el-link>
        </li>
        <li>
          <el-link class="el-link" :underline="false" href="/store" target="_blank">
            书店区
            <span></span>
          </el-link>
        </li>
        <li>
          <el-link class="el-link" :underline="false" href="#" target="_blank">
            书摊区
            <span></span>
          </el-link>
        </li>
        <li>
          <el-link class="el-link" :underline="false" href="#" target="_blank">
            新书
            <span></span>
          </el-link>
        </li>
        <li>
          <el-link class="el-link" :underline="false" href="#" target="_blank">
            在线拍卖
            <span></span>
          </el-link>
        </li>
        <li>
          <el-link class="el-link" :underline="false" href="#" target="_blank">
            艺术品专场
            <span></span>
          </el-link>
        </li>
        <li>
          <el-link class="el-link" :underline="false" href="#" target="_blank">
            资讯
            <span></span>
          </el-link>
        </li>
        <li>
          <el-link class="el-link" :underline="false" href="#" target="_blank">
            社区
            <span></span>
          </el-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HearderTitle",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headertitle {
  width: 100%;
  height: 58px;
  display: flex;
}
.title {
  width: 1200px;
  height: 58px;
  margin: auto;
}
.title ul {
  padding-right: 20px;
  margin-right: 50px;
}
.title li {
  float: left;
  margin-right: 32px;
  padding: 0 15px;
  font-size: 16px;
  height: 58px;
  line-height: 58px;
}
.title li:first-of-type {
  padding-left: 4px;
}
.title li .el-link {
  display: block;
  color: #333;
  position: relative;
  font-size: 16px;
}
.title li span {
  display: none;
  width: 100%;
  height: 2px;
  background: #b5aa9a;
  position: absolute;
  left: 0;
  bottom: 10px;
}
.title li:first-of-type span {
  display: block;
}
li .el-link:hover span {
  display: block;
}
</style>
