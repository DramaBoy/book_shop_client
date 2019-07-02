<template>
    <div class="settlement" >      
         <div >
      <Header></Header>
    </div>
        <div class="content">
          <h1>结算页面</h1> 
        </div>
     <Footer></Footer>
    </div>
  
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
    name:"Settlement",
    data() {
        return {
            
        }
    },
       components: {
    Header,
    Footer,
  },
}
</script>
<style scoped>
.content{
    width: 1000px;
    height: 1000px;
    margin: 20px auto;
    background-color: yellow;
}
</style>
