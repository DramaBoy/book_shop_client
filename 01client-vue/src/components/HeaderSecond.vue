<template>
  <div class="second">
    <div class="scd w">
      <Fenlei :sort="fenlei[0]"/>
      <Autoplay/>
      <div class="pm-box rt">
        <div class="box-two">
          <a href="#">
            <img
              src="http://localhost:8888/img/t1.jpg"
              alt
            >
          </a>
          <a href="#">
            <img src="http://localhost:8888/img/t2.jpg" alt>
          </a>
        </div>
      </div>
      <Fenlei class="yishu" :sort="fenlei[1]"/>
      <Fenlei class="wenchuang" :sort="fenlei[2]"/>
      <div class="bk rt">
        <p>
          <span>{{tuijian.min_title}}</span>
          <i>/</i>
          <a href="#">更多</a>
        </p>
        <div class="booklist">
          <div class="top">
            <Books v-if="index<6" v-for="(item,index) in tuijian.booklist" :key="index" :list="item" flag/>
          </div>
          <div class="xia">
            <Books v-if="index>5" v-for="(item,index) in tuijian.booklist" :key="index" :list="item" flag/>
          </div>
        </div>
      </div>
      <div class="fuzi rt">
        <p>
          <span>孔夫子新书广场</span>
          <i>/</i>
          <a href="#">进店逛逛</a>
        </p>
        <div class="new-bk">
          <NewBook v-for="(item,index) in 3" :key="index"/>
        </div>
      </div>
      <div class="bar-rule">
        <div class="bar">
          <div class="ad-top">
            <a href="#">
              <img src="http://www.kongfz.com/img/lm.jpg" alt>
            </a>
          </div>
          <div class="ad-mid">
            <a href="#">
              <img src="http://www.kongfz.com/img/mj.png" alt>
            </a>
          </div>
          <div class="ad-mid">
            <a href="#">
              <img src="http://www.kongfz.com/img/mj.png" alt>
            </a>
          </div>
          <div class="ad-mid">
            <a href="#">
              <img src="http://www.kongfz.com/img/mj.png" alt>
            </a>
          </div>
          <div class="ad-mid">
            <a href="#">
              <img src="http://www.kongfz.com/img/mj.png" alt>
            </a>
          </div>
          <div class="ad-mid">
            <a href="#">
              <img src="http://www.kongfz.com/img/mj.png" alt>
            </a>
          </div>
        </div>
        <div class="plat">
          <a href="#">
            <span class="ico lt">#</span>
            古旧书交流中心
            <span class="text">
              <span class="label">预约电话</span>
              <span class="label">010-0000 0000</span>
            </span>
          </a>
        </div>
        <div class="rule">
          <div class="rule-tab">
            <span class="rule-span">
              <a href="#">公告</a>
            </span>
            <span class="rule-span">
              <a href="#">规则</a>
            </span>
            <div class="help">
              <a href="#">帮助与客服</a>
            </div>
          </div>
          <div class="rule-con">
            <ul class="sign-con sign">
              <li>
                <a href="#">
                  <div>关于打击引导私下交易和不规范标示售价及邮费行为的公告</div>
                  <span>[2019-03-19]</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>关于调整书店区收费的公告</div>
                  <span>[2019-02-18]</span>
                </a>
              </li>
            </ul>
            <ul class="sign-con rule-text">
              <li>
                <a href="#">
                  <div>孔夫子旧书网交易流程及超时规则（新）</div>
                  <span>[2017-11-05]</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>孔夫子旧书网关于普通书书品品相规则</div>
                  <span>[2014-03-29]</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="zhuanti">
        <a href="#">
          <img src="http://localhost:8888/img/z1.jpg" alt="">
        </a>
        <a href="#">
          <img src="http://localhost:8888/img/z2.jpg" alt="">
        </a>
        <a href="#">
          <img src="http://localhost:8888/img/z3.jpg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Fenlei from "./smallcomponents/Fenlei";
import Autoplay from "./smallcomponents/Autoplay";
import Books from "./smallcomponents/Books";
import NewBook from "./smallcomponents/NewBook";
import net from "../tools/net";
export default {
  name: "HeaderSecond",
  data() {
    return {
      fenlei: [
        {
          title: "图书",
          new: "最新上书",
          list: [
            {
              title: ["线装古籍", "民国旧书"]
            },
            {
              title: ["期刊", "报纸", "外文原版"]
            },
            {
              title: ["国学古籍", "收藏鉴赏"]
            },
            {
              title: ["小说", "文学", "语言文字"]
            },
            {
              title: ["历史", "地理", "艺术"]
            },
            {
              title: ["政治", "法律", "军事"]
            },
            {
              title: ["哲学", "心理", "宗教"]
            },
            {
              title: ["经济", "社科", "综合"]
            },
            {
              title: ["童书", "生活", "体育"]
            },
            {
              title: ["工程技术", "互联网"]
            },
            {
              title: ["自然科学", "医药卫生"]
            },
            {
              title: ["教材", "教辅", "考试"]
            },
            {
              title: ["红色文献", "签名本"]
            }
          ]
        },
        {
          title: "艺术品与收藏",
          new: "",
          list: [
            {
              title: ["名人墨迹", "名人字画"]
            },
            {
              title: ["古旧地图", "照片影像"]
            },
            {
              title: ["连环画", "版画宣传画"]
            },
            {
              title: ["邮票税票", "钱币"]
            },
            {
              title: ["碑帖印谱", "文房雅玩"]
            },
            {
              title: ["玉石金银木器", "漆器"]
            },
            {
              title: ["陶器瓷器", "工艺品"]
            },
            {
              title: ["红色收藏", "收藏杂项"]
            }
          ]
        },
        {
          title: "文创与周边",
          new: "",
          list: [
            {
              title: ["笔墨", "纸本", "卡片"]
            },
            {
              title: ["日历", "包装"]
            },
            {
              title: ["器皿", "摆件挂画"]
            },
            {
              title: ["动漫影视周边"]
            }
          ]
        }
      ],
      net: net
    };
  },
  components: {
    Fenlei,
    Autoplay,
    Books,
    NewBook
  },
  methods: {
    show() {
      this.net.post("show", {kind:"小说"}, function(res) {
        console.log(res);
      });
    }
  },
  props:{
    tuijian:Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.second {
  width: 100%;
  background: rgb(247, 247, 246);
}
.scd {
  position: relative;
  height: 100%;
}
.pm-box {
  width: 1010px;
  height: 52px;
  padding-top: 10px;
  box-sizing: border-box;
}
.box-two {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0;
  line-height: 0;
}
.box-two a {
  display: block;
  width: 504px;
  max-height: 40px;
  margin-bottom: 2px;
  overflow: hidden;
}
.box-two a img {
  width: 100%;
}
.yishu {
  position: absolute;
  top: 439px;
  left: 0;
}
.wenchuang {
  position: absolute;
  top: 727px;
  left: 0;
}
.bk {
  width: 1000px;
  height: 610px;
  position: relative;
}
.bk p {
  width: 100%;
  height: 22px;
  line-height: 22px;
  margin-bottom: 25px;
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
  padding-bottom: 34px;
  box-sizing: border-box;
  text-align: left;
}
.bk p span {
  font-size: 18px;
  font-weight: 700;
  margin-right: 5px;
}
.bk p i {
  font-style: normal;
  font-size: 18px;
  color: #999;
  font-weight: 400;
  margin-right: 5px;
}
.bk p a {
  font-size: 12px;
  color: #0057a0;
}
.bk .booklist {
  width: 1010px;
  height: 550px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.booklist .top {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
}
.booklist .xia {
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.fuzi {
  width: 1000px;
  height: 511px;
  position: relative;
  margin-top: 20px;
}
.fuzi p {
  width: 100%;
  height: 22px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 34px;
  text-align: left;
  box-sizing: border-box;
}
.fuzi p span {
  font-size: 18px;
  font-weight: 700;
  margin-right: 5px;
}
.fuzi p i {
  font-style: normal;
  font-size: 18px;
  color: #999;
  font-weight: 400;
  margin-right: 5px;
}
.fuzi p a {
  font-size: 12px;
  color: #0057a0;
}
.fuzi .new-bk {
  width: 100%;
  height: 456px;
  display: flex;
  justify-content: space-between;
}
.bar-rule {
  position: absolute;
  top: 890px;
  left: 0;
  width: 180px;
  height: 520px;
}
.bar-rule .bar {
  width: 100%;
  height: 283px;
  margin-top: 16px;
}
.bar-rule .bar .ad-top {
  height: 56px;
  overflow: hidden;
}
.bar .ad-top a {
  display: block;
  position: relative;
  font-size: 0;
}
.bar .ad-top img {
  width: 100%;
}
.bar .ad-mid {
  margin-top: 10px;
  overflow: hidden;
}
.bar .ad-mid a {
  display: block;
  position: relative;
  font-size: 0;
}
.bar .ad-mid img {
  width: 100%;
}
.bar-rule .plat {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  margin-top: 16px;
}
.plat a {
  display: block;
  width: 100%;
  line-height: 22px;
  border-bottom: solid 1px #e5e5e5;
  padding: 6px 0;
  font-size: 15px;
  text-align: left;
  color: #333;
  border-top: solid 1px #e5e5e5;
  box-sizing: border-box;
}
.plat .ico {
  display: block;
  margin-right: 12px;
  margin-left: 10px;
  color: #673b1c;
  font-size: 26px;
}
.plat .text {
  display: block;
  padding-left: 38px;
  box-sizing: border-box;
}
.plat .text .label {
  height: 14px;
  font-size: 12px;
  line-height: 14px;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.bar-rule .rule {
  width: 180px;
  height: 163px;
}
.rule .rule-tab {
  width: 100%;
  height: 37px;
  color: #222;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rule .rule-tab .rule-span a {
  color: #222;
  display: inline-block;
}
.rule-span:first-of-type a {
  border-bottom: 1px solid #9e100e;
}
.rule .help a {
  color: #222;
  display: inline-block;
}
.rule .rule-con {
  width: 180px;
  height: 126px;
  background-color: #fff;
  padding: 10px 8px;
  box-sizing: border-box;
}
.rule-con .sign-con {
  width: 164px;
}
.sign-con li {
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  padding-left: 2px;
  text-align: left;
  box-sizing: border-box;
}
.sign-con li a {
  display: inline-block;
  color: #666;
  font-size: 12px;
}
.sign-con a div {
  width: 164px;
  height: 32px;
  line-height: 16px;
  overflow: hidden;
}
.sign-con span {
  color: #999;
}
.rule-con li a:hover {
  color: #8c222c !important;
}
/* .sign{
  display: none;
}*/
.rule-text{
  display: none;
} 
.clear{
  clear: both;
}
.zhuanti{
  width: 100%;
  height: 200px;
  padding-bottom: 40px;
  margin-top: 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.zhuanti a{
  display: block;
  width: 390px;
  font-size: 0;
}
.zhuanti a img{
  width: 100%;
  vertical-align: middle;
}

</style>
