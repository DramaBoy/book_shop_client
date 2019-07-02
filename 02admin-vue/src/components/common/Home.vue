<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <div class="sa">
                       <!-- 内容部分 -->
     <el-row>
  <el-col :span="8"><div class="grid-content bg-purple">
      <img src="http://www.kfzimg.com/G07/M00/0C/36/q4YBAFz3kmOAMkPbAACYLA0c3kg775_n.jpg" alt="">
      <div class="all">
<span>董启章签名《衣魚簡史：董啟章中短篇小說</span>
      <p>精選董啟章中短篇小說13篇</p>
      </div>
      
      </div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light">
      <img src="http://www.kfzimg.com/G07/M00/01/34/q4YBAFzvuICAcFYQAACLTtOCHBA915_n.jpg" alt="">
          <div class="all">
<span>董启章签名《衣魚簡史：董啟章中短篇小說</span>
      <p>精選董啟章中短篇小說13篇</p>
      </div>
      </div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">
      <img src="http://www.kfzimg.com/G07/M00/00/1C/q4YBAFzvtCaAHxH2AADV_TYG9o8216_n.jpg" alt="">
         <div class="all">
<span>董启章签名《衣魚簡史：董啟章中短篇小說</span>
      <p>精選董啟章中短篇小說13篇</p>
      </div>
      </div></el-col>
</el-row>
                </div>
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vTags from './Tags.vue';
    import bus from './bus';
    export default {
        data(){
            return {
                tagsList: [],
                collapse: false
            }
        },
        components:{
            vHead, vSidebar, vTags
        },
        created(){
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })

            // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
            bus.$on('tags', msg => {
                let arr = [];
                for(let i = 0, len = msg.length; i < len; i ++){
                    msg[i].name && arr.push(msg[i].name);
                }
                this.tagsList = arr;
            })
        }
    }
</script>
<style >
   .el-row {
    margin-bottom: 20px;
    
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
    /* margin-right: 2px; */
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #fff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
   .grid-content img{
       width: 98%;
       height: 80%;
   }
   .grid-content span{
       font-size: 14px;
    color: #333;
    text-align: justify;
   }
   .grid-content p{
       font-size: 12px;
    line-height: 20px;
    margin-top: 10px;
    color: #666;
    overflow: hidden;
   }
   .grid-content .all{
       margin-left: 20px;
   }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>