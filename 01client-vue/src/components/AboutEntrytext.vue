<template>
  <div>
    <div class="aboutentry">
      <div class="bodycontent">
        <ul>
          <li class="content" v-for="(item,index) in data" :key="index">
            <div class="one">
              <a href="#" class="hoverthis">
                <img
                  :src="item.img"
                  alt
                   @mouseenter="over" @mouseleave="leave"
                >
              </a>
              <div class="big-img" :style="{display:dontshow}">
                <img
                  :src="item.imgbig"
                  :alt="item.alts"
                >
              </div>
            </div>
            <div class="two">
              <a href="#">{{item.author}}</a>
              <span>{{item.text}}</span>
              <div class="twoohher"></div>
            </div>
            <div class="three">{{item.time}}</div>
            <div class="four">{{item.newdata}}</div>
            <div class="five">
              <div class="top">
                <a href="#">{{item.store}}</a>
                <span></span>
              </div>
              <div class="body">{{item.where}}</div>
              <a href="#">
                <span class="aboutlove"></span>
              </a>
            </div>
            <div class="six">
              <div class="money">
                ￥
                <span>{{item.money}}</span>
              </div>
              <div class="list-con-money">
                <p class="ship-fee">
                  <span class="gray9">快递: ￥ {{item.kuaide}}</span>
                </p>
              </div>
            </div>
            <div class="seven">
              <a href="#" class="con-btn-cart">加入购物车</a>
              <a href="#" class="con-btn-collect">收藏</a>
              <!-- <div class="suc-tip" style="display: none;">
                <span class="iconfont icon-chenggong1"></span>
                <span class="suc-text gray6"></span>
              </div>
              <div class="err-tip">
                <span class="err-text"></span>
              </div> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutEntry",
  data() {
    return {
      data: [{
    img: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_s.jpg",
    imgbig: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_n.jpg",
    alts: "火车上的中国人",
    author: "火车上的中国人 正版 王福春 9787559601940",
    text: "火车上的中国人 当封面与书名不一致时，请以书名信息为准。王福春 9787559601940可开发票",
    time: "2017-08 印刷",
    newdata: "全新",
    store: "北京正品书店",
    where: "河北省廊坊市",
    money: "80.00",
    kuaide: "13.00"
}, {
    img: "http://www.kfzimg.com/G07/M00/B3/13/q4YBAFyt01SAIvb_AAM8THWQrfY992_s.jpg",
    imgbig: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_n.jpg",
    alts: "火车上的中国人",
    author: "火车上的中国人 正版 王福春 9787559601940",
    text: "火车上的中国人 当封面与书名不一致时，请以书名信息为准。王福春 9787559601940可开发票",
    time: "2017-08 印刷",
    newdata: "全新",
    store: "北京正品书店",
    where: "河北省廊坊市",
    money: "80.00",
    kuaide: "13.00"
}, {
    img: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_s.jpg",
    imgbig: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_n.jpg",
    alts: "火车上的中国人",
    author: "火车上的中国人 正版 王福春 9787559601940",
    text: "火车上的中国人 当封面与书名不一致时，请以书名信息为准。王福春 9787559601940可开发票",
    time: "2017-08 印刷",
    newdata: "全新",
    store: "北京正品书店",
    where: "河北省廊坊市",
    money: "80.00",
    kuaide: "13.00"
}, {
    img: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_s.jpg",
    imgbig: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_n.jpg",
    alts: "火车上的中国人",
    author: "火车上的中国人 正版 王福春 9787559601940",
    text: "火车上的中国人 当封面与书名不一致时，请以书名信息为准。王福春 9787559601940可开发票",
    time: "2017-08 印刷",
    newdata: "全新",
    store: "北京正品书店",
    where: "河北省廊坊市",
    money: "80.00",
    kuaide: "13.00"
}, {
    img: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_s.jpg",
    imgbig: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_n.jpg",
    alts: "火车上的中国人",
    author: "火车上的中国人 正版 王福春 9787559601940",
    text: "火车上的中国人 当封面与书名不一致时，请以书名信息为准。王福春 9787559601940可开发票",
    time: "2017-08 印刷",
    newdata: "全新",
    store: "北京正品书店",
    where: "河北省廊坊市",
    money: "80.00",
    kuaide: "13.00"
}, {
    img: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_s.jpg",
    imgbig: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_n.jpg",
    alts: "火车上的中国人",
    author: "火车上的中国人 正版 王福春 9787559601940",
    text: "火车上的中国人 当封面与书名不一致时，请以书名信息为准。王福春 9787559601940可开发票",
    time: "2017-08 印刷",
    newdata: "全新",
    store: "北京正品书店",
    where: "河北省廊坊市",
    money: "80.00",
    kuaide: "13.00"
}, {
    img: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_s.jpg",
    imgbig: "http://www.kfzimg.com/G07/M00/76/8F/q4YBAFz18Y2AT1cPAACSN9iDPUM278_n.jpg",
    alts: "火车上的中国人",
    author: "火车上的中国人 正版 王福春 9787559601940",
    text: "火车上的中国人 当封面与书名不一致时，请以书名信息为准。王福春 9787559601940可开发票",
    time: "2017-08 印刷",
    newdata: "全新",
    store: "北京正品书店",
    where: "河北省廊坊市",
    money: "80.00",
    kuaide: "13.00"
}],
      dontshow: "none"
    };
  },
  methods: {
    over() {
      this.dontshow = "block";
    },
    leave() {
      this.dontshow = "none";
    }
  }
};
</script>
<style scoped>
a {
  cursor: pointer;
}
li {
  list-style: none;
}
.aboutentry {

  width: 1000px;
  height: auto;
  margin: 0 auto;
  /* background-color: red; */
}

.grid-content {
  font-size: 12px;
  color: #666;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.bodycontent .content {
  line-height: 20px;
  padding-top: 30px;
  /* padding: 20px; */
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  min-height: 116px;
}
.content .one {
  margin-left: 10px;
  position: relative;
  float: left;
  width: 80px;
  height: 80px;
  line-height: 78px;
  border: 1px solid #e5e5e5;
  text-align: center;
  margin-right: 18px;
  font-size: 0;
}
.content .one a {
  background-color: transparent;
  color: #4395ff;
}
.content .one img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  line-height: 78px;

  text-align: center;
}
.content .one .big-img {
  /* display: none; */
  position: absolute;
  top: 0;
  left: 88px;
  z-index: 100000;
  width: 300px;
  height: 300px;
  line-height: 298px;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 0 2px #e5e5e5;
  font-size: 0;
}
/* .content .hoverthis:hover .big-img{
    display: block;
} */
.one .big-img {
  /* max-width: 100%;
    max-height: 100%; */
  vertical-align: middle;
}
.two {
  float: left;
  width: 185px;
  margin-right: 40px;
  display: block;
}
.two a {
  display: block;
  font-style: normal;
  font-size: 14px;
  color: #365899;
}
.two span {
  display: block;
  font-size: 12px;
  color: #a57f6d;
  line-height: 18px;
}
.two .twoohher {
  display: none;
  margin-bottom: 5px;
  line-height: 20px;
  margin-top: 10px;
  font-family: Helvetica, Arial, Microsoft YaHei, sans-serif;
  font-size: 14px;
  color: #333;
}
.three {
  float: left;
  width: 90px;
  min-height: 2px;
  font-size: 12px;
  margin-right: 17px;
  color: #333;
}
.four {
  float: left;
  width: 74px;
  text-align: center;
  margin-right: 21px;
  font-size: 12px;
  font-weight: 700;
  color: #bf7f5f !important;
}
.five {
  float: left;
  width: 142px;
  display: block;
}
.five .top {
  height: 22px;
  width: 142px;
  /* text-align: center; */
  line-height: 22px;
  font-size: 12px;
  color: #666;
  background-color: #fff;
}
.five .top a {
  color: #666;
}
.five .top span {
  position: relative;
  top: 1px;
  cursor: pointer;
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url("../assets/massage.png") no-repeat;
}
.five .body {
  color: #999;
  font-size: 12px;
}
/* class="aboutlove" */
.five .aboutlove {
  display: inline-block;
  width: 45px;
  height: 20px;
  /* background-color: red; */
  background: -webkit-image-set(
      url(../assets/level.png) 1x,
      url(../assets/level2.png) 2x
    )
    no-repeat;
}
.six {
  float: left;
  width: 150px;
  text-align: right;
  display: block;
}
.six .money {
  font-size: 16px;
  color: #8c222c;
  text-align: right;
  line-height: 20px;
}
.six .list-con-money {
  font-size: 12px;
  color: #999 !important;
}
.seven{
      float: right;
    width: 100px;
    text-align: center;
}
.seven .con-btn-cart{
  font-weight: bold;
      display: block;
    width: 80px;
    height: 26px;
    line-height: 24px;
    border-radius: 2px;
    margin: 0 auto;
    background: #fff;
    font-size: 12px;
    text-align: center;
    color: #bf7f5f;
    border: 1px solid #dfbfaf;
}
.seven .con-btn-collect{
      display: block;
    width: 80px;
    height: 26px;
    line-height: 24px;
    border-radius: 2px;
    margin: 8px auto 0;
    background: #fff;
    font-size: 12px;
    text-align: center;
    color: #a9987f;
    border: 1px solid #dad4cc;
}
/* #F8F7F3 */
</style>
