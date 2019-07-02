<template>
  <div class="footer">
    <div class="footer-wrap w">
      <div class="cpyrt lt">© 2002-2019 Kongfz.com 黄金屋旧书网 版权所有</div>
      <div class="link-box">
        <el-link class="item" href="#" target="_blank" :underline="false">关于孔网</el-link>
        <el-link class="item" href="#" target="_blank" :underline="false">联系我们</el-link>
        <el-link class="item" href="#" target="_blank" :underline="false">帮助中心</el-link>
        <el-link class="item" href="#" target="_blank" :underline="false">版权隐私</el-link>
        <el-link class="item" href="#" target="_blank" :underline="false">广告业务</el-link>
        <el-link class="item" href="#" target="_blank" :underline="false">工作机会</el-link>
        <el-link class="item" href="#" target="_blank" :underline="false">移动版</el-link>
        <el-link class="item" href="#" target="_blank" :underline="false">图书目录</el-link>
        <el-link class="item" href="#" target="_blank" :underline="false">图书标签</el-link>
      </div>
      <div class="lince">
        <span class="text">京ICP证041501号</span>
        <span class="split">|</span>
        <el-link class="text" href="#" target="_blank" :underline="false">
          <img src="http://www.kongfz.com/img/beian.png" alt>
          <span>京公网安备 11010502035846号</span>
        </el-link>
        <span class="split">|</span>
        <el-link class="text" href="#" target="_blank" :underline="false">出版物经营许可证</el-link>
        <span class="split">|</span>
        <el-link class="text" href="#" target="_blank" :underline="false">企业营业执照</el-link>
        <span class="split">|</span>
        <span class="text">违法和不良信息举报电话：010-64755951， 举报邮箱 shenhe@kongfz.com</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Copyright",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: relative;
  width: 100%;
  height: 70px;
  color: #999;
  background-color: #fff;
  overflow: hidden;
}
.footer-wrap {
  height: 70px;
  margin: 0 auto;
  padding: 10px 0 20px;
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.footer-wrap .cpyrt {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.footer-wrap .link-box {
  text-align: right;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.footer-wrap .link-box .item {
  margin-left: 13px;
  color: #8999a9;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.footer-wrap .link-box .item:hover {
  color: #333;
}
.lince {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.lince .text {
  color: #999;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.lince .split {
  margin: 4px;
  color: #e5e5e5;
}
.lince .text img {
  width: 13px;
  margin-right: 5px;
  vertical-align: middle;
}
</style>
