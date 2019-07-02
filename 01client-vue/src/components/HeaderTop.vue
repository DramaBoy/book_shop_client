<template>
  <div class="headerTop">
    <div class="w">
      <div class="lt">
        <span class="lt">网罗天下图书</span>
        <span class="lt">传承中华文明</span>
      </div>
      <div class="headerRight rt">
        <div class="right">
          <span class="lt">
            <router-link class="link" to="/login">登录/注册</router-link>
            <div class="group">
              <a href="#">
                <img src="http://user.kongfz.com/data/member_pic/8464/7088464.jpg" alt>
              </a>
              <i>账号管理</i>
              <i>|</i>
              <i>退出</i>
            </div>
          </span>
          <span class="lt">
            <router-link to class="link">消息</router-link>
          </span>
          <span class="lt">
            <router-link to="/shoppingcar" class="link">
              <i class="el-icon-shopping-cart-2"></i>购物车
            </router-link>
            <div class="shopCar">
              <div class="carIco">
                <i class="el-icon-shopping-cart-2"></i>
              </div>
              <div class="tip">您的购物车是空的，快去挑点好书放进来吧。</div>
            </div>
          </span>
          <span class="lt">
            <router-link to="" class="link">我的订单</router-link>
          </span>
          <span class="lt">
            <router-link to class="link">个人中心</router-link>
            <div class="user">
              <ul>
                <li>
                  <div>店铺</div>
                  <a href="#">我的订单</a>
                  <a href="#">收藏</a>
                </li>
                <li>
                  <div>拍卖</div>
                  <a href="#">拍卖交易</a>
                  <a href="#">我的竞拍</a>
                  <a href="#">收藏</a>
                </li>
                <li>
                  <div></div>
                  <a href="#">我的好友</a>
                  <a href="#">账户</a>
                </li>
              </ul>
            </div>
          </span>
          <span class="lt">
            <router-link to="/shopregist" class="link">卖家中心</router-link>
            <div class="sellerCenter">
              <ul>
                <li>
                  <div>店铺</div>
                  <a href="#">免费开书摊</a>
                  <a href="#">申请开店</a>
                </li>
                <li>
                  <div>拍卖</div>
                  <a href="#">申请拍卖会员</a>
                </li>
              </ul>
            </div>
          </span>
          <span class="lt">
            <router-link to class="link">客服</router-link>
            <div class="kefu">
              <a href="#">帮助中心</a>
              <div class="kefutime">9:00-20:30</div>
              <a href="#">在线留言</a>
              <div class="kefucall">
                客服电话
                <i>(8:00-21:00)</i>
                <div>010-12345678</div>
                <div>010-12345678</div>
              </div>
              <div class="kefucall">
                纠纷处理
                <i>(9:00-18:00)</i>
                <div>010-12345678</div>
              </div>
              <div class="kefucall">
                图书审核
                <i>(9:00-18:00)</i>
                <div>010-12345678</div>
              </div>
              <div class="kefucall">
                <a href="#">客服QQ</a>
              </div>
              <div class="kefucall">
                <a href="#">监督与建议</a>
              </div>
            </div>
          </span>
          <span class="lt">
            <router-link to class="link">手机版</router-link>
            <div class="phoneApp">
              <div class="text">APP客户端</div>
              <img src="http://www.kongfz.com/static/kfz-navHeader/app.jpg" alt>
              <div class="tip">iOS • Android</div>
            </div>
          </span>
          <span class="lt">|</span>
          <span class="lt">
            <router-link to class="link">送至 四川</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerTop {
  width: 100%;
  min-width: 1200px;
  height: 36px;
  background-color: #8c222c;
  font-size: 12px;
  text-align: center;
}

.headerTop span {
  display: block;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  color: #e2c8ca;
}
.headerRight {
  position: relative;
}
.headerRight .right > span:hover {
  background-color: rgb(123, 17, 27);
}
.headerRight .right > span:hover .link {
  text-decoration: underline;
  color: #fff;
}
.headerRight .right > span {
  position: relative;
}
.headerRight .right .link {
  color: #e2c8ca;
}
.group {
  display: none !important;
  position: absolute;
  width: 166px;
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-top: none;
  color: #000;
  background-color: #fff;
  top: 36px;
  right: 0;
  z-index: 9999;
}
.group i {
  font-style: normal;
  margin: 0 4px;
}
.group img {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.shopCar {
  display: none;
  position: absolute;
  width: 272px;
  padding: 10px 16px;
  box-sizing: border-box;
  padding-top: 10px;
  background-color: #fff;
  position: absolute;
  top: 36px;
  left: 0px;
  z-index: 9999;
}
.shopCar .carIco {
  display: block;
  width: 30px;
  height: 30px;
  margin: 4px auto 10px;
  font-size: 30px !important;
}
.shopCar .carIco i {
  color: #ccc;
}
.shopCar .tip {
  line-height: 20px;
  color: #666;
}
.user {
  display: none;
  position: absolute;
  width: 80px;
  top: 36px;
  left: 0px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #fff;
  z-index: 9999;
}
.user li {
  margin-bottom: 9px;
}
.user li a {
  display: block;
  width: 100%;
  height: 24px;
  text-decoration: none;
  color: #333;
}
.user li div:first-of-type {
  width: 50px;
  margin: 0 auto 4px;
  line-height: 20px;
  font-size: 12px;
  color: #999;
  border-bottom: 1px solid #e5e5e5;
}
.sellerCenter {
  display: none;
  position: absolute;
  width: 100px;
  top: 36px;
  left: 0px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #fff;
  padding-top: 10px;
  z-index: 9999;
}
.sellerCenter li {
  margin-bottom: 9px;
}
.sellerCenter li a {
  display: block;
  width: 100%;
  height: 24px;
  text-decoration: none;
  color: #333;
}
.sellerCenter li div {
  width: 70px;
  margin: 0 auto 4px;
  line-height: 20px;
  font-size: 12px;
  color: #999;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.kefu {
  display: none;
  position: absolute;
  width: 155px;
  line-height: 20px !important;
  padding: 15px 0;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  color: #666;
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 9999;
}
.kefu > a {
  display: block;
  width: 125px;
  height: 32px;
  line-height: 32px;
  border-radius: 2px;
  background-color: #f8f7f3;
  border: 1px solid #e5e5e5;
  text-align: center;
  color: #333;
  font-size: 12px;
  margin: 0 auto;
  text-decoration: none;
}
.kefu .kefutime {
  font-size: 12px;
  color: #9c9c9c;
  margin-top: 14px;
}
.kefu .kefucall {
  margin-bottom: 16px;
  margin-top: 17px;
}
.kefu .kefucall i {
  font-style: normal;
  color: #9c9c9c;
}
.kefucall a {
  color: #333;
  text-decoration: none;
}
.phoneApp {
  display: none;
  position: absolute;
  width: 202px;
  height: 214px;
  padding: 10px 26px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #fff;
  box-sizing: border-box;
  line-height: 20px !important;
  top: 36px;
  left: -70px;
  z-index: 9999;
}
.phoneApp .text {
  height: 20px;
  margin-bottom: 6px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: #999;
}
.phoneApp img {
  width: 150px;
  height: 150px;
}
.phoneApp .tip {
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  color: #999;
}
.headerRight .right > span:hover > div {
  display: block;
}
</style>
