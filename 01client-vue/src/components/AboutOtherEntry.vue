<template>
  <div class="others">
    <div class="top">
      <span>好书推荐</span>
      <i>/</i>
      <a href="#" target="_blank">更多</a>
    </div>
    <div class="content">
        <span class="children" v-for="(item,index) in data" :key="index">
            <a href="">
                <div class="imgs"><img :src="item.imgs" :alt="item.alts"></div>
            </a>
            <a href="#" class="title">{{item.title}}</a>
            <div class="author">{{item.author}}</div>
            <div class="price">
                <i><span >￥</span>{{item.price}}</i>
                      <span>起</span>
                    </div>
        </span>

    </div>
  </div>
</template>
<script>
export default {
  name: "AboutOtherEntry",
  data() {
    return {
        data:[{
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/8b01/8b012b654e191a384a30ba1710661a1d_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}, {
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/8b01/8b012b654e191a384a30ba1710661a1d_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}, {
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/a29f/a29f7171a0b2ba95d87b90ec8e0808be_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}, {
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/763c/763c3ec6f1f4e004c103f33c7c5c4d93_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}, {
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/8b01/8b012b654e191a384a30ba1710661a1d_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}, {
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/8b01/8b012b654e191a384a30ba1710661a1d_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}, {
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/8b01/8b012b654e191a384a30ba1710661a1d_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
},{
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/8b01/8b012b654e191a384a30ba1710661a1d_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}, {
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/8b01/8b012b654e191a384a30ba1710661a1d_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}, {
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/a29f/a29f7171a0b2ba95d87b90ec8e0808be_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}, {
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/763c/763c3ec6f1f4e004c103f33c7c5c4d93_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}, {
    imgs: "http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/8b01/8b012b654e191a384a30ba1710661a1d_0_1_300_300.jpg",
    alts: "火车上的中国人",
    title: "修道院纪事",
    author: "[葡萄牙]若泽.萨拉马戈  著",
    price: "32.64"
}]
    };
  }
};
</script>
<style scoped>
.others {
  height: auto;
  /* background-color: red; */
  width: 100%;
  margin-top: 70px;
  margin-bottom: 156px;
}
.top {
  font-size: 14px;
  margin-bottom: 26px;
  padding-left: 20px;
  color: #333 !important;
}
.top span {
  font-size: 18px;
  color: #333;
}
.top i {
  font-family: "Microsoft YaHei";
  font-size: 16px;
  color: #999;
  font-weight: 400;
}
.top a {
  font-size: 12px;
  color: #365899;
  background-color: transparent;
  line-height: 22px;
  -webkit-font-smoothing: antialiased;
  margin-left: 8px;
}
.content{
    width: 100%;
    height: 520px;
    overflow: hidden;
    line-height: 0;
    font-size: 1px;
    text-align: justify;
    text-align-last: justify;
        color: #333;
       
}
.content .children{
    /* margin-left: 10px; */
    padding: 0px 11px;
    line-height: 0;
    font-size: 1px;
    text-align: justify;
    text-align-last: justify;
     position: relative;
    display: inline-block;
    width: 144px;
    height: 234px;
    vertical-align: top;
    margin-bottom: 40px;
}
.content .imgs{
        display: block;
    width: 140px;
    height: 140px;
    margin: 0 auto 8px;
    text-align: center;
    text-align-last: center;
    line-height: 140px;
    font-size: 0;
}
.content .imgs img{
        display: inline-block;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
}
.content .title{
        display: block;
    width: 97px;
    margin: 0 auto;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    text-align-last: left;
    overflow: hidden;
        max-height: 40px;
    height: auto;
        color: #333!important;
}
.content .author{
        display: block;
    width: 97px;
    height: 22px;
    margin: 0 auto;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    text-align-last: left;
    overflow: hidden;
    color: #999!important;
}
.content .price{
        text-align: left;
    text-align-last: left;
    position: absolute;
    left: 23px;
    bottom: 0;
    font-size: 16px;
    line-height: 16px;
    color: #bf7f5f;
    width: 97px;
}
.content .price i{
        float: left;
        margin-right: 2px;
    height: 16px;
}
.price i span{
        height: 12px;
}
</style>
