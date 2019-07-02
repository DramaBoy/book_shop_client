<template>
  <div id="ImNoticeWin" class="imNotice-win">
    <div class="item back-top" style="display: block;">
      <el-tooltip class="item" effect="dark" content="返回顶部" placement="left-start">
        <el-button icon="el-icon-arrow-up"></el-button>
        <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100"></el-backtop> -->
      </el-tooltip>
    </div>
    <div class="item feed-back">
      <el-tooltip class="item" effect="dark" content="用户反馈" placement="left-start">
        <el-button icon="el-icon-edit"></el-button>
      </el-tooltip>
    </div>
    <div class="item cart-list" style="display: block;" @click="toshoppingcar">
      <el-tooltip class="item" effect="dark" content="去购物车结算" placement="left-start" >
        <el-button icon="el-icon-shopping-cart-2">
          <el-badge :value="$store.state.count" class="items"></el-badge>
        </el-button>
      </el-tooltip>
    </div>
    <div class="item im-notice" style="display: block;">
      <el-tooltip class="item" effect="dark" content="消息" placement="left-start">
        <el-button icon="el-icon-chat-dot-square"></el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {};
  },
 methods: {
   toshoppingcar(){
      this.$router.push({
        name:'ShoppingCar',
        
      }) 
      console.log(66678888)
   }
 },
};
</script>

<style scoped>
.imNotice-win {
  position: fixed;
  right: 14px;
  bottom: 140px;
  z-index: 10000;
  width: 40px;
}
.el-button {
  border-radius: 0;
}
.el-badge {
  position: relative;
  top: -10px;
  right: 7px;
}
</style>


