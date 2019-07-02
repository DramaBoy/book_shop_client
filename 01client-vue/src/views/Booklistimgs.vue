<template>
  <div>
    <div class="topheard">
      <Header></Header>
    </div>
    <div class="bodylist">
      <h1>{{imgs[0].title}}</h1>
      <div v-for="(item,index) in imgs" :key="index">
       <img :src="item.imgs" alt="" srcset="">
      </div>
      
        
    </div>
    <Footer></Footer>
    <Aside></Aside>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

import net from "../tools/net";
export default {
  name: "Booklistimgs",
  data() {
    return {
      net: net,
      id:"",
      imgs:[],
    };
  },
  components: {
    Header,
    Footer,
    Aside
  },
  created() {
    this.getParams()
    this.getdata();
  },
  methods: {
    getdata(){
        let that=this;
         this.net.post(
          "imgs",
          {
          id:that.id
        },
        (res)=> {
         console.log(res.data)
         that.imgs=res.data;
             
        }
      )
    },
     getParams(){
        // 取到路由带过来的参数
        var id = this.$route.params.id
        // 将数据放在当前组件的数据内
        console.log(id)
         this.id = id;
         console.log(this)
      }
  }
};

</script>
<style scoped>
.bodylist {
  width: 1000px;
  height: auto;
  margin: 30px auto;
}
.bodylist img{
margin: 20px auto;

}
</style>
