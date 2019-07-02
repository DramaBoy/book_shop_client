<template>
  <div class="fenlei lt">
    <div class="list-group">
      <div class="item-header">
          <a href="#" class="title lt">{{sort.title}}</a>
          <a href="#" class="label rt" v-if="sort.new">{{sort.new}}</a>
      </div>
      <div class="list-item" v-for="(item,index) in sort.list" :key="index">
          <div class="item-text">
              <div class="text">
                  <a href="#">{{item.title[0]}}</a>
                  <span>/</span>
                  <a href="#">{{item.title[1]}}</a>
                  <span v-if="sort.list[index].title.length==3">/</span>
                  <a href="#" v-if="sort.list[index].title.length==3">{{item.title[2]}}</a>
              </div>
              <i class="el-icon-arrow-right"></i>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fenlei",
  data() {
    return {
      msg:''
    };
  },
  props:{
    sort:Object
  },
  // created(){
  //   this.msg=this.props.fenlei;
  //   console.log("6666")
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fenlei {
  width: 180px;
  height: auto;
  background-color: #f7f7f6;
}
.list-group .item-header{
    height: 36px;
    line-height: 36px;
    padding: 0 19px;
    border: 1px solid #8c222c;
    background-color: #8c222c;
    box-sizing: border-box;
}
.item-header .title{
    display: block;
    height: 34px;
    line-height: 34px;
    font-weight: 700;
    color: #fff;
    font-size: 15px;
}
.item-header .label{
    display: block;
    height: 26px;
    line-height: 34px;
    color: #d6d6d6;
    font-size: 12px;
}
.list-item{
    position: relative;
    padding: 0 19px;
    height: 32px;
    line-height: 31px;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
    margin-bottom: -1px;
    box-sizing: border-box;
    text-align: left;
}
.list-item a{
    color: #333;
    font-size: 13px;
}
.list-item .text a:hover{
  color: #8c222c;
  text-decoration: underline;
}
.list-item i{
    font-style: normal;
    color: #cfc8c4;
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
