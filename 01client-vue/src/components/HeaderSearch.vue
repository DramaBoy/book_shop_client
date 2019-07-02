<template>
  <div class="search">
    <div class="w">
      <div class="lt searchlt">
        <a href="#">
          <img src="../assets/title.png" alt>
        </a>
      </div>
      <div class="rt searchrt">
        <div class="fix">
          <div class="searchForm lt">
            <div class="searchtype">
              <div class="item-type">商品</div>
              <div class="item-type">拍卖</div>
              <div class="item-type">店铺</div>
              <div class="indicator"></div>
            </div>
            <div class="search-put lt">
              <div class="search-status">
                <div class="cur-status">
                  <span class="line"></span>
                  <span>在售</span>
                  <span class="sanjiao"></span>
                </div>
              </div>
              <input type="text" name="searchWord" placeholder="商品名称、作者、出版社、ISBN">
            </div>
            <div class="searchBtn rt">搜索</div>
          </div>
          <div class="search-link lt">
            <a href="#">高级搜索</a>
          </div>
        </div>
        <ul>
          <li>
            <a href="#">中国通史</a>
          </li>
          <li>
            <a href="#">地图</a>
          </li>
          <li>
            <a href="#">儒林外史</a>
          </li>
          <li>
            <a href="#">读库</a>
          </li>
          <li>
            <a href="#">中国国家地理杂志</a>
          </li>
          <li>
            <a href="#">黑胶</a>
          </li>
          <li>
            <a href="#">红楼梦</a>
          </li>
          <li>
            <a href="#">实寄封</a>
          </li>
          <li>
            <a href="#">老照片</a>
          </li>
          <li>
            <a href="#">故宫日历</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  width: 100%;
  height: 100px;
  background: #f2f1ea;
}
.searchlt {
  width: 262px;
  height: 100px;
}
.searchlt a {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.searchlt img {
  display: block;
  width: 100%;
  height: 50%;
}
.searchrt {
  width: auto;
  height: 40px;
  margin-top: 30px;
}
.fix{
    width: auto;
  height: 40px;
}
.searchrt .searchForm {
  width: 688px;
  height: 40px;
  border: 2px solid #8c222c;
  box-sizing: border-box;
  position: relative;
}
.searchForm .searchtype {
  position: absolute;
  top: -26px;
  left: -2px;
  width: 120px;
  height: 24px;
  font-size: 12px;
}
.searchtype .item-type {
  float: left;
  width: 30px;
  height: 24px;
  line-height: 24px;
  margin-right: 10px;
  cursor: pointer;
}
.indicator {
  position: absolute;
  bottom: 0;
  left: 8px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  transition: left 0.5s;
  border-bottom: 5px solid #8c222c;
}
.searchtype .item-type:nth-of-type(1):hover+.indicator{
  left: 16px;
}
.search-put {
  width: 596px;
  position: relative;
  height: 36px;
}
.search-put input {
  width: 596px;
  height: 36px;
  padding: 10px 84px 10px 10px;
  line-height: 18px;
  border: none;
  box-sizing: border-box;
}
input::placeholder {
  font-size: 12px;
}
.search-status {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 101;
  width: 74px;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  cursor: pointer;
}
.cur-status {
  padding-left: 20px;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  text-align: left;
}
.line {
  height: 16px;
  width: 1px;
  position: absolute;
  left: 0;
  top: 10px;
  background-color: #999;
}
.sanjiao {
  position: absolute;
  right: 12px;
  top: 16px;
  border-top: 5px solid #999;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid transparent;
}
.searchBtn {
  width: 88px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: #fff;
  background-color: #8c222c;
  text-align: center;
  cursor: pointer;
}
.search-link {
  width: 35px;
  height: 40px;
  padding-top: 4px;
  line-height: 16px;
  font-size: 12px;
  color: #666;
  text-align: right;
  box-sizing: border-box;
}
.search-link a {
  color: #666;
}
.searchrt ul {
  width: 600px;
  height: 18px;
  line-height: 18px;
  margin-top: 6px;
}
.searchrt ul li {
  float: left;
  margin-right: 16px;
}
.searchrt ul a {
  font-size: 12px;
  color: #7c7c7c;
}
</style>
