<template>
  <div class="booksort" ref="sort">
    <div class="ancient-box w">
      <div class="ancient-title">
        <div class="big-title">
          <ul>
            <span>{{book.max_title}}</span>
            <li v-for="(item,index) in book.title_a" :key="index">
              <a href="#">{{item}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ancient-left lt">
        <p class="min-title">
          <span>
            {{book.min_title}}
            <i>/</i>
            <a href="#">更多</a>
          </span>
        </p>
        <div class="book-list">
          <Books v-for="(item,index) in book.booklist" :key="index" :list="item"/>
        </div>
      </div>
      <div class="ancient-right lt">
        <p class="list-title">
          <span>
            <b>{{book.right_title.title}}</b>
            <i v-if="price">/</i>
            <a v-if="price" href="#">更多</a>
          </span>
        </p>
        <ul>
          <li v-for="(item,index) in book.right_title.shudian" :key="index">
            <div class="lt">
              <span class="ico"></span>
            </div>
            <div class="text-box">
              <a href="#">{{item.dianming}}</a>
              <span class="rt price-color" v-if="price">
                <i>
                  <span>￥</span>24.75
                </i>
                <span>起</span>
              </span>
            </div>
            <p class="text-list">{{item.jieshao}}</p>
            <p class="underline"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Books from "@/components/smallcomponents/Books";
export default {
  name: "BookSort",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Books
  },
  props: {
    book: Object,
    price: Boolean,
    bgc: Boolean
  },
  created() {
    if (this.bgc) {
      this.$nextTick(() => {
        this.$refs.sort.style.backgroundColor = "#f7f7f6";
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.booksort {
  width: 100%;
  height: 675px;
  background-color: #fff;
}
.ancient-box {
  padding-top: 30px;
  padding-bottom: 22px;
  box-sizing: border-box;
}
.big-title {
  height: 44px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  margin-bottom: 25px;
  box-sizing: border-box;
}
.big-title ul {
  display: inline-block;
  word-break: break-all;
  white-space: normal;
  width: 100%;
  text-align: left;
}
.big-title ul span {
  line-height: 30px;
  font-size: 30px;
  color: #333;
  display: inline-block;
  margin-right: 20px;
  padding-bottom: 14px;
  font-weight: 700;
  box-sizing: border-box;
}
.big-title ul li {
  display: inline-block;
}
.big-title li a {
  display: inline-block;
  height: 40px;
  line-height: 45px;
  padding: 0 5px;
  font-size: 14px;
  color: #365899;
  box-sizing: border-box;
}
.big-title li a:hover {
  color: #8c222c;
}
.ancient-left {
  width: 840px;
}
.ancient-left .min-title {
  font-size: 18px;
  height: 20px;
  color: #ccc;
  margin-bottom: 25px;
  line-height: 22px;
  text-align: left;
}
.min-title span {
  color: #333;
  font-weight: 700;
}
.min-title span i {
  font-style: normal;
  font-size: 18px;
  color: #999;
  font-weight: 400;
  margin-right: 4px;
}
.min-title span a {
  font-size: 12px;
  color: #0d55a5;
  font-weight: 400;
}
.min-title span a:hover {
  color: #8c222c;
}
.ancient-left .book-list {
  width: 840px;
  height: 509px;
  text-align: justify;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ancient-left .book-list > div {
  margin-right: 20px;
}
.ancient-right {
  width: 359px;
}
.ancient-right .list-title {
  font-size: 18px;
  line-height: 22px;
  height: 20px;
  color: #ccc;
  margin-bottom: 20px;
  padding-left: 20px;
  text-align: left;
}
.ancient-right .list-title span {
  color: #333;
}
.ancient-right .list-title span i {
  color: #999;
  font-size: 16px;
  margin: 0 4px;
}
.ancient-right .list-title span a{
  font-size: 12px;
  color: #0d55a5;
}
.ancient-right ul {
  margin-top: 15px;
  border-left: 1px solid #e5e5e5;
  padding-left: 20px;
  height: 494px;
  overflow: hidden;
  box-sizing: border-box;
}
.ancient-right ul li {
  height: 65px;
}
.ancient-right li .lt span {
  display: block;
  float: left;
  width: 5px;
  height: 5px;
  line-height: 14px;
  margin-right: 10px;
  margin-top: 6px;
  background-color: #c97;
}
.ancient-right li .text-box {
  height: 24px;
  text-align: left;
  overflow: hidden;
  zoom: 1;
}
.ancient-right li .text-box a {
  display: inline-block;
  font-size: 14px;
  color: #333;
  position: relative;
  top: -4px;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ancient-right li .text-box a:hover {
  color: #8c222c;
}
.ancient-right .text-box .price-color {
  color: #a87;
  position: relative;
  top: -2px;
  line-height: 20px;
}
.ancient-right .text-box .price-color i {
  font-style: normal;
  font-size: 14px;
  float: left;
}
.ancient-right .price-color i span {
  width: 12px;
  font-size: 12px;
  line-height: 22px;
  color: #bf7f5f;
}
.ancient-right .price-color span {
  float: left;
  font-size: 12px;
  margin-left: 2px;
}
.ancient-right ul .text-list {
  font-size: 12px;
  color: #999;
  height: 15px;
  line-height: 15px;
  overflow: hidden;
  margin-left: 15px;
  text-align: left;
}
.ancient-right ul .underline {
  width: 100%;
  height: 1px;
  border-top: 1px solid #e5e5e5;
  margin-top: 12px;
  box-sizing: border-box;
}
a:hover {
  color: #8c222c;
}
</style>
