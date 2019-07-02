<template>
  <div class="footer-box">
    <div class="footer-wrap clearfix">
      <div class="copyright-info-box">© 2002-2019 Kongfz.com 孔夫子旧书网 版权所有</div>
      <div class="link-box">
        <a
          class="item"
          target="_blank"
          rel="nofollow"
          href="http://www.kongfz.com/help/aboutus.php"
        >关于孔网</a>
        <a
          class="item"
          target="_blank"
          rel="nofollow"
          href="http://www.kongfz.com/help/lianxi.html"
        >联系我们</a>
        <a class="item" target="_blank" rel="nofollow" href="http://help.kongfz.com/">帮助中心</a>
        <a
          class="item"
          target="_blank"
          rel="nofollow"
          href="http://www.kongfz.com/help/copyright.php"
        >版权隐私</a>
        <a
          class="item"
          target="_blank"
          rel="nofollow"
          href="http://www.kongfz.com/help/guanggao.php"
        >广告业务</a>
        <a
          class="item"
          target="_blank"
          rel="nofollow"
          href="http://www.kongfz.com/help/zhaopin.php"
        >工作机会</a>
        <a class="item" target="_blank" href="https://m.kongfz.com/">移动版</a>
        <a class="item" target="_blank" href="http://book.kongfz.com/">图书目录</a>
        <a class="item" target="_blank" href="http://bq.kongfz.com/">图书标签</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer-box{
    position: relative;
    /* background-color: #fafafa; */
    background: #fff;
    width: 100%;
    height: 50px;
    margin-top: -50px;
    color: #999;
    overflow: hidden;
    
}
.footer-box .footer-wrap{
    width: 1000px;
    height: 50px;
    margin: 0 auto;
    padding: 10px 0 20px;
    border-top: 1px solid #e5e5e5;
}
.footer-box .copyright-info-box{
    float: left;
    width: 300px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
}
.footer-box .link-box{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    text-align: right;
}
.footer-box .link-box .item{
    margin-left: 13px;
    color: #8999a9;
}
</style>

