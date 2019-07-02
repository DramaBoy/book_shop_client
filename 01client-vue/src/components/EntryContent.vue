<template>
  <div class="content">
    <div class="entry" :style="{height: entryheight+'px'}">
      <h1>{{statuses.title}}</h1>
      <div class="contentlist">
        <el-container height="290px">
          <el-aside width="200px" class="left" :style="{height: elheight+'px'}">
            <el-container>
              <el-main width="100px" class="imgone">
                <a :href="statuses.title_img">
                  <img :alt="statuses.title" :src="statuses.title_img">
                </a>
              </el-main>
              <el-header style="height:10px">
                <a href="#">
                  <div class="dou">豆</div>
                  <div class="star">
                    <span></span>
                  </div>
                </a>
              </el-header>
              <el-header>
                <div class="share">
                  <span>分享</span>
                  <div class="others">
                    <a href="#" title="分享到微信">
                      <span></span>
                    </a>
                    <a href="#" title="分享到新浪微博">
                      <span class="sina"></span>
                    </a>
                    <a href="#" title="分享到qq好友">
                      <span class="qq"></span>
                    </a>
                    <a href="#" title="分享到豆瓣网">
                      <span class="douban"></span>
                    </a>
                  </div>
                </div>
              </el-header>
            </el-container>
          </el-aside>
          <!-- height: 900px; -->
          <el-aside width="500px" class="main" :style="{height: mainheight+'px'}" >
            <el-container>
              <el-header class="top" height="154px">
                <el-container>
                  <el-main width="250px" class="left">
                    <div class="author">
                      作者：
                      <a href="#">{{statuses.author}}</a>著
                    </div>
                    <div class="products">出版社：{{statuses.products}}</div>
                    <div class="time">出版时间：{{statuses.time}}</div>
                    <div class="whichone">版次：{{statuses.whichone}}</div>
                    <div class="Serial_number">ISBN：{{statuses.Serial_number}}</div>
                    <div class="price">定价：{{statuses.price}}</div>
                    <div class="binding">装帧：{{statuses.binding}}</div>
                  </el-main>
                  <el-main width="250px" class="right">
                    <div>开本：{{statuses.kaiben}}</div>
                    <div>纸张：{{statuses.zhizhang}}</div>
                    <div>页数：{{statuses.yeshu}}</div>
                    <div>字数：{{statuses.zishu}}</div>
                    <div>
                      分类：
                      <a href="#">文学</a>
                    </div>
                    <div  @click="gotoimgs()" class="gotoimgs">
                      <!-- <a href="#" class="imgthat"> -->
                        <span class="imgthis"></span>
                        {{statuses.imglist}}
                      <!-- </a> -->
                    </div>
                  </el-main>
                </el-container>
              </el-header>
              <el-header class="bottom" height="122px">
                <!-- 1改 -->
                <div class="text" v-show="open">
                  <ul>
                    <li>{{statuses.content}}</li>
                  </ul>
                  <a @click="show">
                    <span class="more"></span>查看详情
                  </a>
                </div>
                <!-- 2改 -->
                <div class="textother" v-show="close">
                  <ul>
                      <li>
                      <h5>内容简介:</h5><br>
                      {{statuses.content}}
                    </li>
                    <li>
                      <h5>作者简介：</h5><br>
                      {{statuses.aboutauthor}}
                    </li>
                    <li>
                      <h5>获奖记录 </h5>
                      {{statuses.aboutprice}}
                    </li>
                  </ul>
                  <a @click="showover">
                    <span class="more"></span>收起
                  </a>
                </div>
              </el-header>
            </el-container>
          </el-aside>
          <el-aside width="260px" class="right" :style="{height: elheight+'px'}">
            <el-container>
              <el-header class="other-title" height="36px">
                <span>相关分类</span>
              </el-header>
              <el-header class="other-content" height="200px">
                <el-container>
                  <el-main width="250px" class="left" height="193px">
                    <div>
                      <a href="#">{{statuses.mingjiazuopin}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.chinajindais}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.chinadandai}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.shici}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.xiqun}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.minjian}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.wenxue}}</a>
                    </div>
                  </el-main>
                  <el-main width="250px" class="right">
                    <div>
                      <a href="#">{{statuses.chinagudai}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.chinaxiand}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.worldwenx}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.sanwen}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.jishi}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.wenxuepingjia}}</a>
                    </div>
                    <div>
                      <a href="#">{{statuses.youngwenxue}}</a>
                    </div>
                  </el-main>
                </el-container>
              </el-header>
            </el-container>
          </el-aside>
           <!-- <div class="content">
        <div class="contentwords">

        </div>
    </div> -->
        </el-container>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EntryContent",
   props: {
   statuses: Object,
   required: true
  },
  data() {
    return {
      elheight:290,
      mainheight:291,
      entryheight:370,
       open:true,
        close:false,
      restaurants: []
    };
  },

  methods: {
    show() {
      this.entryheight=850;
      this.mainheight=900;
      this.elheight=500;
       this.open=false;
      this.close=true;
    },
    showover(){
        this.entryheight=370;
        this.mainheight=291;
        this.elheight=290;
         this.open=true;
         this.close=false;
    },
    gotoimgs(){
      this.$router.push({
        name:'Booklistimgs',
        params:{
         id: this.statuses.id
        }
      })
    },
   
    },
   
  
};
</script>
<style scoped>
/* .contentwords{
    width: 460px;
    height: 440px;
    background-color: red;
    margin: 143px 0px 0px -763px ;
    z-index: 900;
} */
.entry {
  width: 100%;
  /* 1 */
  /* height: 370px; */
  /* 2 */
  /* height: 750px; */
  background-color: white;
  margin-top: 20px;
}
.gotoimgs{
  cursor: pointer;
}
h1 {
  width: 100%;
  height: 26px;
  font-size: 20px;
  display: inline-block;
  color: #000;
  margin: 26px 0 26px -797px;
  /* margin: 26px 0 26px 16px; */
  line-height: 26px;
  color: #333;
  padding-left: 20px;
}
h5{
      font-size: 13px;
    /* margin-bottom: 0px; */
    color: #333!important;
}
.contentlist {
  width: 100%;
  height: 290px;
}
/* 内容 */
a {
  color: #365899;
}
a:hover {
  /* color: #365899; */
  color: #8c222c;
}
.left {
  background-color: white;
}
.left .imgone {
  position: relative;
}
.left img {
  width: 160px;
  height: 150px;
  line-height: 158px;
  text-align: center;
  font-size: 0;
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  margin-top: -21px;
  margin-bottom: 4px;
}
.left .dou {
  margin-left: 22px;
  float: left;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  background-color: #575957;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.left .star {
  float: left;
  width: 90px;
  height: 20px;
  line-height: 18px;
  font-size: 12px;
  margin-left: -2px;
  border-radius: 3px;
  border: 1px solid #bbbcbb;
  border-left: none;
  padding-left: 7px;
  padding-right: 5px;
}
.left .star span {
  display: inline-block;
  vertical-align: middle;
  width: 55px;
  height: 11px;
  margin-top: -3px;
  zoom: 1;
  background: -webkit-image-set(
      url("../assets/icon-rating.png") 1x,
      url(../assets/icon-rating-2x.png) 2x
    )
    no-repeat;
}
.share {
  height: 34px;
  color: #999;
  font-size: 12px;
  margin-top: 16px;
  position: relative;
}
.share span {
  width: 34px;
  /* margin-left: -143px; */
  display: inline-block;
  height: 22px;
  line-height: 22px;
  vertical-align: top;
  color: #999;
  font-size: 12px;
  /* box-sizing: border-box; */
  position: absolute;
  top: 0px;
  left: 0px;
}
.share .others {
  width: 100px;
  position: absolute;
  top: 4px;
  left: 34px;
  /* display: inline-block; */
  height: 22px;
  line-height: 22px;
  margin-left: 6px;
  background: #fff;
  overflow: hidden;
}
.share .others .sina {
  position: absolute;
  top: 0px;
  left: 26px;
  background-position: 0px -103px;
}
.share .others .qq {
  position: absolute;
  top: 0px;
  left: 52px;
  background-position: 0px -2650px;
}
.share .others .douban {
  position: absolute;
  top: 0px;
  left: 78px;
  background-position: 0px -467px;
}
.share .others span {
  width: 22px;
  height: 22px;
  /* background-color: red; */
  background: url("../assets/icons.png") no-repeat;
  background-position: 0px -1611px;
}

/* 中间部分内容区域 */
.main {
  /* 2改 */
  /* height: 900px; */
  margin-left: 20px;
  margin-right: 20px;

  /* background-color: yellowgreen; */
}
/* .main .top{
        background-color: skyblue;
    } */
.main .top .left {
  text-align: left;
  text-decoration: none;
  word-break: break-all;
  color: #333;
  /* color: #365899; */
  line-height: 20px;
  font-size: 12px;
  height: 154px;
  padding: 0;
  /* background-color: deeppink; */
}
.main .top .right {
  text-align: left;
  text-decoration: none;
  word-break: break-all;
  /* color: #365899; */
  color: #666;
  line-height: 20px;
  font-size: 12px;
  height: 154px;
  padding: 0;
  /* background-color: skyblue; */
}
.main .right .imgthis {
  display: inline-block;
  height: 20px;
  width: 20px;
  /* background-color: red; */
  background: url("../assets/icons.png") no-repeat;
  background-position: 0 -2284px;
}
.right .imgthat:hover .imgthis {
  background: url("../assets/icons.png") no-repeat;
  background-position: 0 -2699px;
}
.top .left div {
  width: 144px;
}
.main .top .right {
  height: 154px;
  padding: 0;
  /* background-color: yellow; */
}
.main .bottom {
  /* 2改 */
  /* height: 500px */
  background-color: white;
}
.main .text {
  position: relative;
}
.main .text .more {
  width: 10px;
  height: 10px;
  display: inline-block;
  background: url("../assets/sprite.png") no-repeat;
  background-position: -38px -47px;
}
.main .textother {
  position: relative;
}
.main .textother .more {
  width: 10px;
  height: 10px;
  display: inline-block;
  background: url("../assets/sprite.png") no-repeat;
  background-position: -38px -61px;
}
.bottom .textother ul{
    margin-bottom: 20px;
  font-size: 13px;
    word-wrap: break-word;
  text-align: left;
   max-height: 100px;
  /* overflow: hidden; */
  color: #333 !important;
  padding: 0;
  list-style: none;
  overflow-wrap: break-word;
  line-height: 20px;
  display: list-item;
  position: absolute;
  top: -10px;
  left: 0px;
}
.main .textother a{
  cursor: pointer;
  position: absolute;
  top: 578px;
  left: 0px;
}
/* #365899 */
.main .text ul {
  max-height: 100px;
  overflow: hidden;
  color: #333 !important;
  font-size: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-wrap: break-word;
  line-height: 20px;
  display: list-item;
  position: absolute;
  top: -10px;
  left: 0px;
}
.main .text a {
  cursor: pointer;
  position: absolute;
  top: 70px;
  left: 0px;
}
/* 右侧内容 */
.right {
  background-color: white;
}
.right .other-title {
  text-align: left;
  font-size: 14px;
  color: #333 !important;
  height: 28px;
  /* background-color: deeppink; */
  position: relative;
  padding-bottom: 6px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 10px;
}
.right .other-title span {
  position: absolute;
  top: -10px;
  left: 0;
}
.right .other-content {
  position: relative;
  margin-top: 0px;
  height: 200px;
  padding: 0;
  /* background-color: lightpink; */
  color: #365899;
  font-size: 12px;
  /* float: left; */
  max-width: 108px;
  word-break: keep-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  text-align-last: left;
  line-height: 15px;
}
.right .other-content div {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 120px;
  height: 19px;
  margin-bottom: 4px;
  font-size: 12px;
  display: block;
  text-align: left;
  text-align-last: left;
  overflow: hidden;
}
.right .other-content .left {
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 0;
  display: inline-block;
  height: 193px;
  /* background-color: red; */
}
.right .other-content .right {
  position: absolute;
  top: 0px;
  left: 137px;
  /* margin-left:  */
  width: 120px;
  padding: 0;
  display: inline-block;
  height: 193px;
  /* background-color: skyblue; */
}
</style>
<style>
.el-header,
.el-footer {
  /* background-color: #B3C0D1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* 1 */
  /* height: 500px; */
  height: 290px;
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}
</style>
