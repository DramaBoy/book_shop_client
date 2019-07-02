<template>
    <div class="topcon">
          <div class="top">
        <ul class="topsome">
          <li>20条</li>
          <li>|</li>
          <li class="changethis" @click="change(0)">综合排序</li>
          <li @click="change(1)">最新上架</li>
          <li @click="change(2)" >价格</li>
          <li @click="change(3)">含运费从低到高</li>
          <li @click="change(4)">品相</li>
          <li @click="change(5)">只看全新</li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
    name:"AboutOtherEnTop",
    data() {
        return {
            
        }
    },
    methods: {
        change(e){
            console.log(e);
           this.$emit('func',e)
        }
    },
    
}
</script>
<style scoped>
a {
  cursor: pointer;
}
li {
  list-style: none;
}
.topcon {
  /* text-align: center; */
  padding-top: 64px;
  width: 1000px;
  height: auto;
  margin: 0 auto;
  /* background-color: red; */
}
 .top {
  width: 100%;
  height: 40px;
  /* background-color: #f8f7f3; */
   background-color: #F8F7F3;
}
.grid-content {
  font-size: 12px;
  color: #666;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.topsome li {
  cursor: pointer;
  font-size: 12px;
  margin-left: 8px;
  padding: 4px;
  height: 40px;
  list-style: none;
  display: inline-block;
  text-align: left;
  line-height: 40px;
}
.topsome li:hover {
  color: #bf7f5f;
}
.changethis {
  color: #bf7f5f;
}
</style>
