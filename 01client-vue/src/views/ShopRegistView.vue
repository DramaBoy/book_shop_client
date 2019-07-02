<template>
  <div class="hello">
    <!-- 头部导航 -->
    <div class="header">
      <el-row>
        <el-col :span="12">
          <div class="index-link">
            <el-link href="/">首页</el-link>
            <el-link href="/store">书店区</el-link>
            <el-link>书摊区</el-link>
            <el-link>新书</el-link>
            <el-link>在线拍卖</el-link>
            <el-link>艺术品专场</el-link>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="user-info">
            <el-link href="/login">登录/注册</el-link>
            <el-link>消息</el-link>
            <el-link href="/shoppingcar">
              <i class="el-icon-shopping-cart-2"></i>购物车{{$store.state.count}}
            </el-link>
            <el-link href="/settlement">我的订单</el-link>
            <el-link>个人中心</el-link>
            <el-link href="/shopregist">卖家中心</el-link>
            <el-link>客服</el-link>
            <el-link>手机版</el-link>|
            <el-link>送至成都</el-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="head">
      <div class="logo">
        <a href="http://shop.kongfz.com/seller/">
          <img src="../assets/titlered.png" alt="孔夫子旧书网：中国领先的古旧书交易平台">
        </a>
      </div>
      <div class="user_titbg">
        <div class="f_left">
          <i class="el-icon-chat-dot-round"></i>
          微信店铺
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="main">
      <div class="left-menu">
        <div class="left-bar">
          <el-tree
            :data="data"
            node-key="id"
            default-expand-all
            @node-drag-start="handleDragStart"
            @node-drag-enter="handleDragEnter"
            @node-drag-leave="handleDragLeave"
            @node-drag-over="handleDragOver"
            @node-drag-end="handleDragEnd"
            @node-drop="handleDrop"
            draggable
            :allow-drop="allowDrop"
            :allow-drag="allowDrag"
          ></el-tree>
        </div>
      </div>
      <div class="right">
        <div class="apply-container">
          <h1 class="title">金网卖家中心，欢迎您！</h1>
          <p class="detail">仅需5步，即可拥有属于您的孔网店铺</p>
          <div class="navStap">
            <span class="number">1</span>
            <span class="des">选择店铺类型 −</span>
            <span class="number">2</span>
            <span class="des">实名认证 −</span>
            <span class="number">3</span>
            <span class="des">填写店铺信息 −</span>
            <span class="number">4</span>
            <span class="des">上传经营资质 −</span>
            <span class="number">5</span>
            <span class="des">交纳技术服务费</span>
          </div>
          <div class="container">
            <a href="#" class="tan"></a>
            <a href="#" class="shop"></a>
            <a href="#" class="auction"></a>
          </div>
          <div class="regist-box">
            <h3>注册</h3>
            <div class="wrap">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item prop="tel">
                  <el-input v-model="ruleForm.tel" placeholder="手机号"  pattern="/^1\d{10}$/"></el-input>
                </el-form-item>
                <el-form-item prop="seller">
                  <el-input type="text" v-model="ruleForm.seller" placeholder="用户名（昵称），注册后不可更改"></el-input>
                </el-form-item>
                <el-form-item prop="shopName">
                  <el-input type="text" v-model="ruleForm.shopName" placeholder="店铺名，注册后不可更改"></el-input>
                </el-form-item>
                <el-form-item prop="passwd">
                  <el-input v-model.number="ruleForm.passwd" placeholder="设置密码"></el-input>
                </el-form-item>
                <el-button type="primary" @click="shoperRegist">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form>
            </div>
          </div>
          <div class="bottomExplain">
            注：开通金网店铺，一个身份证只能开一家店，开店之后店铺无法注销，申请到正式开通预计需要1-3个工作日。
            <br>&nbsp; &nbsp; &nbsp; 想了解更多开店攻略，请看
            <a
              target="_blank"
              href="http://help.kongfz.com/?act=detail&amp;contentId=103"
            >开店规则必看</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
    <!-- 侧边栏 -->
    <Aside></Aside>
  </div>
</template>

<script>
import net from "../tools/net"; 
import Footer from "../components/Footer";
import Aside from "../components/Aside";

export default {
  name: "ShopRegistView",
  data() {
    return {
      net:net,
      data: [
        {
          id: 1,
          label: "管理店铺",
          children: [
            {
              id: 5,
              label: "申请店铺"
            }
          ]
        },
        {
          id: 2,
          label: "拍卖管理",
          children: [
            {
              id: 6,
              label: "申请拍卖会员"
            }
          ]
        },
        {
          id: 3,
          label: "信誉档案",
          children: [
            {
              id: 7,
              label: "我的信誉"
            },
            {
              id: 8,
              label: "店铺投诉"
            },
            {
              id: 9,
              label: "拍卖投诉"
            },
            {
              id: 10,
              label: "违规信息"
            }
          ]
        },
        {
          id: 4,
          label: "客户服务",
          children: [
            {
              id: 11,
              label: "建议咨询"
            },
            {
              id: 12,
              label: "客服QQ"
            }
          ]
        }
      ],
      ruleForm: {
        tel:"",
        seller: "",
        shopName:"",
        passwd: ""
      },
      rules: {
        tel: [{ required: true, message: '请输入手机号', trigger: "blur" }],
        seller: [{ required: true, message: '请输入用户名', trigger: "blur" }],
        shopName: [{ required: true, message: "请输入店铺名", trigger: "blur" }],
       passwd: [{ required: true, message: '请设置密码', trigger: "blur" }]
      }
    };
  },
  methods: {
    shoperRegist(){
      let that=this;
      this.net.post("shoperRegist",{
        seller:that.ruleForm.seller,
        tel:that.ruleForm.tel,
        passwd:that.ruleForm.passwd,
        book_store:that.ruleForm.shopName,
      },
      (res)=>{
        console.log(res);
      }
      );
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  components: {
    Footer,
    Aside
  },
  created(){
    this.shoperRegist();
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
/* 顶部导航 */
.header {
  height: 36px;
  background: #f7f7f6;
  line-height: 36px;
}
.el-row {
  width: 1200px;
  height: 100%;
  margin-bottom: 20px;
  position: relative;
  margin: 0 auto;
  background: #f7f7f6;
}
.el-col {
  top: 5px;
  height: 36px;
  font-size: 0;
}
.index-link {
  position: relative;
  left: 0;
  float: left;
  height: 36px;
  display: block;
  margin-right: 15px;
}
.el-link {
  height: 14px;
  display: inline-block;
  vertical-align: middle;
  line-height: 12px;
  font-size: 12px;
  cursor: pointer;
  margin: 0 8px;
}
.el-link--inner i {
  color: #8c222c;
  margin-right: 4px;
}
.user-info {
  position: absolute;
}
.head {
  position: relative;
  width: 1200px;
  height: 76px;
  margin: 0 auto;
}
.head .logo {
  width: 200px;
  padding: 20px 0 24px;
  float: left;
}
.head .logo img {
  width: 180px;
  height: 32px;
  vertical-align: middle;
  border: 0;
}
.user_titbg {
  line-height: 40px;
  font-weight: 500;
  font-size: 24px;
  font-family: "Microsoft yahei";
  padding: 20px 0 20px 20px;
  float: right;
}
.f_left {
  margin: 5px 0 0 20px;
  border: 1px solid #e5e5e5;
  padding: 0 10px 0 10px;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}
.f_left i {
  margin-right: 10px;
}
.line {
  width: 100%;
  border-top: 1px solid #dcdcdc;
  margin-bottom: 10px;
}
.main {
  width: 1200px;
  margin: 0 auto;
}
.left-menu {
  width: 170px;
  float: left;
}
.left-bar {
  width: 170px;
  min-height: 20px;
  height: auto;
  position: relative;
  margin-right: 10px;
}
.el-tree {
  border: 1px solid #dcdcdc;
}
.el-tree-node_content {
  background: #c8d2e4;
  position: relative;
}
.right {
  width: 1000px;
  float: right;
  text-align: center;
}
.apply-container .title {
  font-family: "MicrosoftYahei";
  font-size: 24px;
  color: #92a5ca;
  letter-spacing: 0;
  height: 31px;
  line-height: 31px;
  text-align: left;
}
.apply-container .detail {
  margin-top: 40px;
  font-family: "MicrosoftYahei";
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
  height: 19px;
  line-height: 19px;
  text-align: left;
}
.apply-container .navStap {
  text-align: left;
  margin-top: 11px;
}
.apply-container .navStap .number {
  display: inline-block;
  background: #333333;
  text-align: center;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 9px;
  font-family: "MicrosoftYahei";
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
}
.apply-container .navStap .des {
  font-family: "MicrosoftYahei";
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  height: 19px;
  line-height: 19px;
  text-align: center;
  margin-right: 5px;
}
.apply-container .container {
  display: flex;
  flex-direction: row;
  margin-left: 50px;
}
.apply-container .container .tan {
  width: 210px;
  height: 290px;
  position: relative;
  background: url(../assets/tan.png) no-repeat center;
  background-size: 100%;
  padding-top: 150px;
}
.apply-container .container .shop {
  width: 210px;
  height: 290px;
  position: relative;
  background: url(../assets/shop.png) no-repeat center;
  background-size: 100%;
  padding-top: 150px;
  margin: 0 77px;
}
.apply-container .container .auction {
  width: 210px;
  height: 290px;
  position: relative;
  background: url(../assets/auction.png) no-repeat center;
  background-size: 100%;
  padding-top: 150px;
}
.regist-box {
  padding-right: 750px;
}
.regist-box h3 {
  font-size: 30px;
  font-weight: 500;
  color: #666;
}
.wrap {
  width: 400px;
}
.el-form {
  position: relative;
  margin-top: 10px;
}
.agreement {
  margin-top: 12px;
  margin-left: 100px;
  font-size: 12px;
}
input:checked {
  border-color: #e6e6e6;
  background-color: #fff;
}
input {
  position: relative;
  width: 12px;
  height: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  vertical-align: middle;
}
.gray {
  color: #666;
}
.btn{
  margin-top: 35px;
}
.el-button{
  display: inline-block;
  width: 140px;
  margin-left: 110px;
}
.bottomExplain {
  font-family: "MicrosoftYahei";
  font-size: 12px;
  color: #bbbbbb;
  letter-spacing: 0;
  line-height: 22px;
  width: 596px;
  height: 44px;
  margin-bottom: 60px;
  text-align: left;
}
.bottomExplain a {
  color: #2a2a2a;
}
</style>

