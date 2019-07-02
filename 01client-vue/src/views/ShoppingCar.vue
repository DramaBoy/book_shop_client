<template>
    <div class="shoppingcar">
         <div >
      <Header></Header>
    </div>
        <div class="content">
            <ShoppingCarson :shopcar="datanew"></ShoppingCarson>
        </div>
     <Footer></Footer>
    </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingCarson from "../components/ShoppingCarson";
import net from "../tools/net";
export default {
    name:"ShoppingCar",
    data() {
        return {
            net:net,
            datanew:[]
        }
    },
    created() {
        this.showdata();
        this.setdata()
    },
    methods: {
        setdata(){
            console.log(this)
        },
        // 获取购物车里面的数据，传入id值
        showdata(){
         let that = this;
      console.log(that);
      this.net.post(
        "shoppingcar",
        {
         id:2
        },
        res=>{
            // console.log(this)
           console.log(res.data)
            that.datanew=res.data
        }
      );
        }
    },
    components: {
    Header,
    Footer,
    ShoppingCarson
  },
}
</script>
<style scoped>
.content{
    width: 1000px;
    height: 1000px;
    margin: 20px auto;
    /* background-color: yellow; */
}

</style>
