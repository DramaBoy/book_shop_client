<template>
    <div>
         <div class="row" id="myVue" v-cloak>
    <div class="col-lg-10 col-lg-offset-1">
      <div class="layui-form">
        <table class="ShopCartTable layui-table">
          <thead>
            <tr>
              <th class="selectLeft">
                <template>
                  <el-checkbox @change="checkedAllBtn(checkedAll)" v-model="checkedAll">全选</el-checkbox>
                </template>
                <span class="selectLeftGoods">商品</span>
              </th>
              <th>品相</th>
              <th>单价</th>
              <th>数量</th>
              <th>邮费</th>
              <th>金额</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <!-- this.goodsList -->
            <tr v-for="(tabledatas,index) in this.goodsList" :key="index">
              <!-- 商品 -->
              <td class="selectLeft check">
                <template>
                  <div class="check-box">
                    <el-checkbox @change="checkedRadioBtn(tabledatas)" v-model=" tabledatas.checked"></el-checkbox>
                  </div>
                </template>
                <span class="goodName">
                  <img class="goodImg" :src="tabledatas.img">
                </span>
                <span class="goodName goodsName">
                  <h2 class="goodname" v-text="tabledatas.alts"></h2>
                  <p class="goodGary">
                    <span>书店：</span>
                    <span v-text="tabledatas.store"></span>
                  </p>
                  <p class="goodGary">
                    <span>发货地：</span>
                    <span v-text="tabledatas.where"></span>
                  </p>
                </span>
              </td>
              <!-- 品相 -->
              <td class="danmoney">{{tabledatas.newdata}}</td>
              <!-- 单价 -->
              <td class="danmoney">{{tabledatas.money | moneyFiler}}</td>
              <!-- 数量 -->
              <td>
                <i @click="goodNum(tabledatas,-1)" class="fa deleteBtn" aria-hidden="1">-</i>
                <input
                  v-model="tabledatas.num"
                  type="text"
                  class="form-control numInput"
                  aria-label="..."
                >
                <i @click="goodNum(tabledatas,1)" class="fa addBtn sumb" aria-hidden="1">+</i>
              </td>
              <!-- 邮费 -->
              <td class="danmoney">{{tabledatas.kuaide | moneyFiler}}</td>
              <!-- 金额 -->
              <td>
                <p class="totalmoney">{{tabledatas.money*tabledatas.num | moneyFiler}}</p>
              </td>
              <td class="gongneng">
                <p class="deletegoods" @click="alertRadio(index)">删除</p>
                <!-- <p @click="alertmovesSavegoods(index)">移到我的收藏</p> -->
                <template v-if="tabledatas.saveandremove">
                  <p @click="tabledatas.saveandremove = 0">加入收藏</p>
                </template>
                <template v-else>
                  <p
                    :class="{'saveCheck':!tabledatas.saveandremove}"
                    @click="tabledatas.saveandremove = 1"
                  >取消收藏</p>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row tablefooter">
          <template>
            <el-checkbox
              style="padding-left:16px"
              @change="checkedAllBtn(checkedAll)"
              v-model="checkedAll"
            >全选</el-checkbox>
          </template>
          <span class="removeMuch" @click="alertMuch">删除选中的商品</span>
          <span class="removeSaves" @click="alertMuchgoods">移到我的收藏</span>

          <span class="servicenum">
            已选择
            <span class="goodsNum">{{goodsNum}}</span>件商品
            <span class="goodsNum">{{serviceNum}}</span>项服务
          </span>
          <span class="totalclassPoin">
            总价：
            <span class="totalMoneyClass">{{totalMoney | moneyFiler}}</span>
          </span>
          <span @click="saveData" class="SettlementBtn">去结算</span>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
export default {
    name:"ShoppingCarson",
    props(){
      shopcar:Array;
      required: 1
    },
    data() {
        return {
       /*数据源*/
      userBuyData: [], //用户购买数据

      /*默认选择标签*/
      checkedAll: 0, //全选状态
      stopDelete: "", //定时器id(用于清空定时器)
      activeName: "支付平台",

      /*关键字段初始化*/
      goodNums: 0, //商品或者服务总数
      totalMoney: 0, //总价格
      saveandremove: 1, //收藏和取消收藏的状态
      goodsNum: 0, //商品的数量
      serviceNum: 0 //服务的数量
        }
    },
     computed:{    
         goodsList(){
            return this.$store.state.goodsList
        }
    },
    created() {
      this.look();
    },
      methods: {
        look(){
          // this.goodsList=this.goodsList;
          // state.goodsList
          console.log(this.goodsList)
        },
    /*商品数量增加减少函数*/
    goodNum: function(item, way) {
      if (way == 1) {
        item.num++;
        this.countTotalMoney();
      } else {
        if (item.num < 2) {
          item.num = 1;
        } else {
          item.num--;
          this.countTotalMoney();
        }
      }
    },
    /*单选函数*/
    checkedRadioBtn: function(tabledatas) {
      console.log(tabledatas)
      this.countTotalMoney();
      /*单选计算商品或服务数量*/
      if (tabledatas.type == "商品" && tabledatas.checked == 1) {
        this.goodsNum += 1;
      } else if (tabledatas.type == "服务" && tabledatas.checked == 1) {
        this.serviceNum += 1;
      } else if (tabledatas.type == "商品" && tabledatas.checked == 0) {
        this.goodsNum -= 1;
      } else if (tabledatas.type == "服务" && tabledatas.checked == 0) {
        this.serviceNum -= 1;
      } else {
        console.log("未知错误！");
      }
    },
    /*全选函数*/
    checkedAllBtn: function(checkedAll) {
      var _this = this;
      // console.log(this.goodsList);
      /*全选计算商品或服务数量*/
      if (checkedAll == 1) {
        for (let x in this.goodsList) {
          this.goodsList[x].checked = 1;
          if (this.goodsList[x].type == "商品") {
            _this.goodsNum += 1;
          } else if (this.goodsList[x].type == "服务") {
            _this.serviceNum += 1;
          }
        }
      } else {
        for (let y in this.goodsList) {
          this.goodsList[y].checked = 0;
          this.goodsNum = 0;
          this.serviceNum = 0;
        }
      }
      this.countTotalMoney();
    },
    /*删除单个选中函数*/
    deletegoods: function(index) {
      console.log(index);
      this.goodsList.splice(index, 1);
      this.countTotalMoney();
    },
    /*删除多个选中函数*/
    deleteSelectAll: function() {
      for (var i = this.goodsList.length - 1; i >= 0; i--) {
        if (this.goodsList[i].checked == 1) {
          this.goodsList.splice(i, 1);
        }
      }
      this.countTotalMoney();
    },
    /*单个移到收藏*/
    movesSave: function(index) {
      this.goodsList.splice(index, 1);
    },
    /*多个商品移动函数*/
    saveSelectAll: function() {
      for (var i = 0; i <= this.goodsList.length; i++) {
        if (this.goodsList[i].checked == 1) {
          console.log(this.goodsList[i]);
          this.stopDelete = setTimeout(function() {
            this.deleteSelectAll();
            clearInterval(this.stopDelete);
          }, 10);
        }
      }
    },
    /*计算商品总价函数*/
    countTotalMoney: function() {
      var _this = this;
      _this.totalMoney = 0;
      this.goodsList.forEach(function(item, index) {
        if (item.checked == 1) {
          _this.totalMoney += item.num * item.money+item.kuaide;
        }
      });
    },
    /*保存购买数据*/
    saveData: function() {
      var _this = this;
      _this.userBuyData.length = 0;
      this.goodsList.forEach(function(item, index) {
        if (item.checked == 1) {
          window.location.href =
            "/settlement";
        }
      });
    },

    /*提示删除单个商品*/
    alertRadio: function(index) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定删除",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
            callback: this.deletegoods(index)
          });
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "已取消删除"
          });
        });
    },
    /*提示多个删除函数*/
    alertMuch: function() {
      this.$confirm("此操作将永久删除已选择商品或服务, 是否继续?", "提示", {
        confirmButtonText: "确定删除",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
            callback: this.deleteSelectAll()
          });
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "已取消删除"
          });
        });
    },

    /*提示单个商品移动到收藏函数*/
    alertmovesSavegoods: function(index) {
      this.$confirm("此操作将已选择商品或服务移到我的收藏, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "收藏成功!",
            callback: this.movesSave(index)
          });
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "已取消!"
          });
        });
    },
    /*提示收藏多个商品函数*/
    alertMuchgoods: function() {
      this.$confirm("此操作将已选择商品或服务移到我的收藏, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "收藏成功!",
            callback: this.saveSelectAll()
          });
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "已取消!"
          });
        });
    }
  },
  /*金额过滤器*/
  filters: {
    moneyFiler: function(value) {
      return "￥" + value.toFixed(2);
    }
  }
}
</script>
<style scoped>
/*nav*/
.layui-form{
 width: 1000px;
}
.ShopCartTable {
  padding:0px;
  width: 1000px;
    margin: 0 auto;
    margin-top: 60px;
  }
  .toper_nav {
    background: white;
    border-bottom: 1px solid #dedede;
  }
  .toper_btm_nav,
  .toper_nav {
    float: left;
  }
  .logoTit {
    margin-left: 20px;
  }
  .col-xs-1,
  .col-sm-1,
  .col-md-1,
  .col-lg-1,
  .col-xs-2,
  .col-sm-2,
  .col-md-2,
  .col-lg-2,
  .col-xs-3,
  .col-sm-3,
  .col-md-3,
  .col-lg-3,
  .col-xs-4,
  .col-sm-4,
  .col-md-4,
  .col-lg-4,
  .col-xs-5,
  .col-sm-5,
  .col-md-5,
  .col-lg-5,
  .col-xs-6,
  .col-sm-6,
  .col-md-6,
  .col-lg-6,
  .col-xs-7,
  .col-sm-7,
  .col-md-7,
  .col-lg-7,
  .col-xs-8,
  .col-sm-8,
  .col-md-8,
  .col-lg-8,
  .col-xs-9,
  .col-sm-9,
  .col-md-9,
  .col-lg-9,
  .col-xs-10,
  .col-sm-10,
  .col-md-10,
  .col-lg-10,
  .col-xs-11,
  .col-sm-11,
  .col-md-11,
  .col-lg-11,
  .col-xs-12,
  .col-sm-12,
  .col-md-12,
  .col-lg-12 {
    padding-right: 0px;
    padding-left: 0px;
  }
  /*tooper*/
  .layui-tab-title {
    border-bottom: 0px;
  }
  .layui-tab-title li {
    color: white;
    margin-top: -5px;
    margin-right: 50px;
    vertical-align: inherit;
  }
  .toper_btm_nav {
    height: 45px;
    background: #05226c;
  }
  .layui-tab-brief > .layui-tab-title .layui-this {
    border-radius: 15px;
    color: #05226c;
    height: 35px;
    background: white;
    padding-bottom: 5px;
  }
  .layui-tab-title .layui-this:after {
    height: 38px;
    line-height: 38px;
  }
  .toper_btm {
    line-height: 18px;
  }
  .toper_btm img {
    margin-top: 15px;
  }
  .erweimaImg {
    float: right;
  }
  .erweimaCont {
    margin-left: -8px;
    font-size: 12px;
  }
  .toper_tit {
    font-size: 16px;
    font-weight: bold;
  }
  /*content*/
  .ShopCartTable {
    text-align: center;
    width: 100%;
    margin-top: 20px;
  }
  .ShopCartTable thead tr {
    width: 1000px;
    background-color: #f3f3f3;
    border: 1px solid #e9e9e9;
    height: 32px;
    line-height: 32px;
    font-weight: 200;
  }
  .ShopCartTable th {
    text-align: center;
    border: 0px;
    color: #999999;
    font-weight: 200;
  }
  .ShopCartTable td {
    border: 0px;
    border-bottom: 1px solid #ededed;
    padding: 10px 0;
  }
  .goodImg {
    width: 100px;
    height: 100px;
    padding: 5px;
    border: 1px solid #dedede;
  }
  .addBtn .deleteBtn {
    color: #999999;
    font-size: 12px;
    margin-top: 5px;
  }
  .deleteBtn {
    display: inline-block;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ededed;
    padding: 0px 5px;
    border-right: 0px;
  }
  .addBtn {
    margin-left: -4px;
    display: inline-block;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ededed;
    padding: 0px 5px;
    border-left: 0px;
  }
  .numInput {
    width: 50px;
    height: 30px;
    margin-left: -4px;
    border: 1px solid #ededed;
    text-align: center;
    margin-top: -5px;
    position: relative;
  }
  .selectInput {
    width: 50px;
  }
  .selectLeftGoods {
    margin-left: 40px;
  }
  .goodName {
    display: inline-block;
  }
  .goodsName {
    margin-left: 10px;
  }
  .goodGary {
    color: #999999;
    text-align: left;
  }
  .goodname {
    font-language-override: 16px;
  }
  .danmoney {
    color: #999999;
  }
  .totalmoney {
    font-size: 14px;
    font-weight: bold;
  }
  .SettlementBtn {
    height: 50px;
    width: 100px;
    color: white;
    background: #209ceb;
    display: inline-block;
    text-align: center;
    float: right;
    position: relative;
    font-size: 18px;
    margin-top: -1px;
    cursor: pointer;
  }
  .totalclassPoin {
    color: #999999;
    position: absolute;
    right: 500px;
  }
  .servicenum {
    position: absolute;
    right: 40%;
    color: #999999;
  }
  .removeMuch {
    position: absolute;
    left: 500px;
    cursor: pointer;
    color: #999999;
  }
  .removeSaves {
    position: absolute;
    left:650px;
    cursor: pointer;
    color: #999999;
  }
  .deletegoods {
    color: #999999;
    cursor: pointer;
  }
  .ShopCartTable .selectLeft {
    text-align: left;
    
  }
  .el-checkbox__input {
    margin-right: 20px;
  }
  .el-checkbox__label {
    margin-left: -20px;
    color: #999999;
    font-weight: normal;
  }
  
  .gongneng p {
    cursor: pointer;
    color: #999999;
  }
  .gongneng .saveCheck {
    color: red;
  }
  .tablefooter {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border: 1px solid #ededed;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .totalMoneyClass {
    color: red;
    font-weight: 500;
    font-size: 20px;
  }
  .goodsNum {
    color: red;
  }
  .is-null {
    font-weight: 500;
    color: #ccc;
    height: 300px;
  }
  td.is-null {
    border: 0px;
  }
  .sumb {
  font-style: normal
 }

 .check{
   display: flex
 }

 .check-box{
   padding-right: 20px;
   padding-left: 10px;
   padding-top: 30px;
 }



</style>
