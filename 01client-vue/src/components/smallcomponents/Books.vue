<template>
  <div class="book">
    <div class="item">
      <span class="item-img" @click="tobooklist">
        <img :src="list.pic_url" :alt="list.pic_text">
      </span>
      <div class="layer">
        <a href="#" @click.prevent="tobooklist">
          <div class="layer-inner">鼠标移动至书图片的书详情</div>
        </a>
      </div>
      <a href="#" class="book-text" ref="booktext">{{list.pic_text}}</a>
      <a
        href="#"
        class="book-author"
        ref="author"
        :title="list.pic_text"
        @click="tobooklist()"
      >{{list.pic_author}}</a>
      <div class="price">
        <div ref="price">
          <i>
            <span class="lt">￥</span>
            {{list.price}}
          </i>
          <span class="lt">起</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Books",
  data() {
    return {
      msg: ""
    };
  },
  props: {
    list: Object,
    flag: Boolean
  },
  methods: {
    setWH() {
      this.$nextTick(() => {
        this.$refs.booktext.style.width = "140px";
        this.$refs.booktext.style.height = "40px";
        this.$refs.author.style.width = "140px";
        this.$refs.price.style.width = "140px";
      });
    },
    tobooklist() {
      console.log(this.list.product_id)
      let id =this.list.product_id;
       this.$store.dispatch("actionsCount",id)
         this.$router.push({
        name:'BookListView',
        params:{
         id: this.list.product_id
        }
      })
    }
  },
  created() {
    if (!this.flag) {
      this.setWH();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book {
  position: relative;
  width: 140px;
  height: 234px;
  margin-bottom: 40px;
}
.item {
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 22px;
}
.item-img {
  display: block;
  width: 140px;
  height: 140px;
  text-align: center;
  line-height: 140px;
  margin-bottom: 4px;
  font-size: 0;
}
.item-img img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  font-size: 0;
  vertical-align: middle;
}
.layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 140px;
  height: 140px;
}
.layer a {
  display: block;
  width: 100%;
  height: 100%;
}
.layer .layer-inner {
  display: none;
  position: absolute;
  width: 272px;
  max-width: 108px;
  border: 1px solid #e5e5e5;
  background: #fff;
  overflow: hidden;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
  text-align: justify;
  padding: 4px 6px;
  line-height: 20px;
}
.book-text {
  display: block;
  width: 98px;
  font-size: 12px;
  color: #333;
  word-break: break-all;
  max-height: 40px;
  line-height: 20px;
  overflow: hidden;
  margin: 0 auto;
}
.book-text:hover {
  color: #8c222c;
}
.book-author:hover {
  color: #8c222c;
}
.book-author {
  display: block;
  width: 98px;
  height: 22px;
  text-align: left;
  overflow: hidden;
  margin: 0 auto;
  color: #999;
  font-size: 12px;
}
.price {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  font-size: 16px;
  color: #bf7f5f;
}
.price div {
  width: 98px;
  margin: 0 auto;
  line-height: 22px;
}
.price i {
  float: left;
  font-style: normal;
  margin-right: 3px;
  line-height: 22px;
}
.price i span {
  font-size: 14px;
  color: #bf7f5f;
}
.price span {
  color: #bbb;
  font-size: 12px;
}
</style>
