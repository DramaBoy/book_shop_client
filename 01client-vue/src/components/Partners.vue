<template>
  <div class="partners w">
    <div class="friend-title"  @mouseover="showOn" ref="title">
      <a href="#">合作伙伴</a>
      <a href="#">友情链接</a>
      <a href="#">推荐专题</a>
    </div>
    <div class="friend-link" ref="fix">
      <div class="fix-box">
        <ul>
          <li class="lt" v-for="(item,index) in 25" :key="index">
            <a href="#">人民网读书</a>
          </li>
        </ul>
      </div>
      <div class="fix-box">
        <ul>
          <li class="lt" v-for="(item,index) in 25" :key="index">
            <a href="#">拍卖网站</a>
          </li>
        </ul>
      </div>
      <div class="fix-box">
        <ul>
          <li class="lt" v-for="(item,index) in 35" :key="index">
            <a href="#">图书大全</a>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partners",
  data() {
    return {};
  },
  methods:{
    showOn(){
      this.$nextTick(()=>{
      // console.log(this.$refs.fix,this)
    })
    // e.target.className="now"
    // console.log(666,e.target)
    }
  },
  created(){
    this.$nextTick(()=>{
      // console.log(this.$refs)
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.partners {
  margin-top: 45px;
  margin-bottom: 20px !important;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  box-sizing: border-box;
}
.friend-title {
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #e5e5e5;
  line-height: 35px;
  position: relative;
  top: -2px;
  box-sizing: border-box;
}
.friend-title a {
  display: block;
  float: left;
  padding: 0 10px;
  font-size: 14px;
  border: 1px solid #fff;
  line-height: 32px;
  height: 35px;
  position: relative;
  bottom: -1px;
  left: -1px;
  border-bottom: 1px solid #e5e5e5;
  color: #999;
  box-sizing: border-box;
}
.friend-link {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  margin-top: 10px;
  box-sizing: border-box;
}
.friend-link .fix-box li a {
  display: block;
  white-space: nowrap;
  float: left;
  margin-right: 20px;
  font-size: 12px;
  color: #999;
  line-height: 20px;
}
.friend-link .fix-box{
  display: none;
}
.fix-box:first-of-type{
  display: block;
}
.clear {
  clear: both;
}
.friend-link .fix-box li .now {
  border: 1px solid #e5e5e5;
  border-bottom: 1px solid #fff;
  background: #fff;
  line-height: 32px;
  height: 35px;
}
</style>
