<template>
  <div class="auto rt">
    <el-carousel height="270px" direction="horizontal" indicator-position="none" arrow="never" ref="carousel">
      <el-carousel-item v-for="(item,index) in img" :key="index" name="index">
        <a href="#">
          <img :src="item.url" alt>
        </a>
      </el-carousel-item>
    </el-carousel>
    <ul>
      <li v-for="(item,index) in img" :key="index" @mouseover="change(index)">
        <a href="#">{{item.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Autoplay",
  data() {
    return {
      img: [
        {
          url:
            "http://localhost:8888/img/lubo1.jpg",
          text: "书单：西方视野里的中国文学"
        },
        {
          url:
            "http://localhost:8888/img/lubo2.jpg",
          text: "拍卖：九九典藏湘史专场"
        },
        {
          url:
            "http://localhost:8888/img/lubo3.jpg",
          text: "上新：墨笺楼全场包邮"
        },
        {
          url:
            "http://localhost:8888/img/lubo4.jpg",
          text: "拍卖：青灯黄卷书斋寂"
        },
        {
          url:
            "http://localhost:8888/img/lubo5.jpg",
          text: "书店：钝叟自娱的书摊"
        },
        {
          url:
            "http://localhost:8888/img/lubo6.jpg",
          text: "书店：无若斋古旧书店"
        },
        {
          url:
            "http://localhost:8888/img/lubo7.jpg",
          text: "书单：动物笔记"
        },
        {
          url:
            "http://localhost:8888/img/lubo8.jpg",
          text: "书单：时代杂志百佳英文小说"
        }
      ]
    };
  },
  methods:{
    change(e){
      this.$refs.carousel.setActiveItem(e)
      // console.log(this,e)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.auto{
  width: 1010px;
  height: 270px;
  position: relative;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.auto ul{
  position: absolute;
  right: 20px;
  bottom: 11px;
  width: 160px;
  height: 247px;
  z-index: 99;
}
.auto li {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: left;
  color: #666;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 1px;
  vertical-align: middle;
  background: rgba(255,255,255,.5);
}
.auto li a{
  display: block;
  width: 100%;
  height: 100%;
  color: #666;
  padding-left: 14px;
  padding-right: 14px;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
