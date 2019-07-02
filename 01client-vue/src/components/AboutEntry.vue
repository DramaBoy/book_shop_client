<template>
  <div>
    <div class="aboutentry">
      <div class="bodycontent">
        <ul>
          <li class="content" v-for="(item,index) in dataintt" :key="index">
            <div class="one" @click="tobook(item.id)">
              <a class="hoverthis">
                 <!-- @mouseenter="over(index)" @mouseleave="leave(index) -->
                <img
                  :src="item.img"
                  alt
                   @mouseenter="over(index)" @mouseleave="leave(index)"
                   
                >
              </a>
              <div class="big-img" v-show="ok==index">
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
  <span class="aboutlove" :style="{backgroundPosition:item.size}"></span>
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
                <!-- <p class="ship-fee">  <span class="gray9">挂号印刷品: ￥ {{item.guahao}}</span></p> -->
              </div>
            </div>
            <div class="seven">
              <a href="#" class="con-btn-cart" @click.once="handleActionsAdd(item)">加入购物车</a>
              <a href="#" class="con-btn-collect">收藏</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import net from "../tools/net";
export default {
  name: "AboutEntry",
   // 接受父组件的值
  props: {
   dataintt: Array,
   required: true
  },
  data() {
    return {
      // dataintt:[],
      net:net,
      ok:"-1"
    };
  },
  methods: {
    over(e) {
      // console.log(this.dataintt[0].id)
      this.ok = e;
    },
    leave(e) {
      this.ok = "-1";
    },
    
    handleActionsAdd(item){
      this.$store.dispatch('actionsAddCount',1)
      var data={
         id:item.id,
         img:item.img,
         alts:item.alts,
         newdata:item.newdata,
         store:item.store,
         where:item.where,
         money:item.money,
         kuaide:item.kuaide,
         checked:item.checked,
         saveandremove:item.saveandremove,
         type:item.type,
         num:item.num
       }
      this.$store.commit("addGoods",data)     
    },
    tobook(index){
      console.log(index)
      // this.dataintt.id
      this.$router.push({
        name:'BookView',
        params:{
         id: index
        }
      })
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
  cursor: pointer;
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
  /* background: -webkit-image-set(
      url(../assets/level.png) 1x,
      url(../assets/level2.png) 2x
    )
    no-repeat; */
    background: url("../assets/level.png") no-repeat;
    /* background-position: 0px 12px; */
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
