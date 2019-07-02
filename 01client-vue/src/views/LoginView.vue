<template>
  <div class="logincon">
    <div class="top">
      <div class="head">
        <router-link class="link lt" to="/">
          <img src="../assets/logo.png" alt>
        </router-link>
        <router-link class="rt" to>给新版提建议</router-link>
      </div>
    </div>

    <div class="content w">
      <div class="login">
        <h1>登录</h1>
        <el-row class="el">
          <el-col :span="7">
            <div class="yan"><a href="#" class="rt">手机验证码登录</a></div>
          </el-col>
        </el-row>

        <el-row class="el">
          <el-col :span="7">
            <el-input v-model="username" placeholder="用户名/手机号"></el-input>
          </el-col>
        </el-row>

        <el-row class="el">
          <el-col :span="7">
            <el-input v-model="passwd" type="password" placeholder="密码"></el-input>
          </el-col>
        </el-row>

        <el-row class="el xieyi">
          <el-col :span="7">
            <el-checkbox v-model="checked" class="check lt" fill="#666">
              <span class="check">下次自动登录</span>
            </el-checkbox>
            <span class="rt"><el-link class="wj" href="#">忘记密码</el-link></span>
          </el-col>
        </el-row>

        <el-row class="el">
          <el-col :span="7">
            <el-button class="btn" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="gray">
        <div class="info">
          <span>还没有此网账号</span>
          <router-link class="login-link" to="/register">快速注册</router-link>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="foot">
        <div class="gray lt">© 2002-2017 Kongfz.com 孔夫子旧书网 版权所有</div>
        <div class="link-box">
          <el-link class="item" href="#" target="_blank" :underline="false">关于孔网</el-link>
          <el-link class="item" href="#" target="_blank" :underline="false">联系我们</el-link>
          <el-link class="item" href="#" target="_blank" :underline="false">帮助中心</el-link>
          <el-link class="item" href="#" target="_blank" :underline="false">版权隐私</el-link>
          <el-link class="item" href="#" target="_blank" :underline="false">广告业务</el-link>
          <el-link class="item" href="#" target="_blank" :underline="false">工作机会</el-link>
          <el-link class="item" href="#" target="_blank" :underline="false">移动版</el-link>
          <el-link class="item" href="#" target="_blank" :underline="false">图书目录</el-link>
          <el-link class="item" href="#" target="_blank" :underline="false">图书标签</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import net from "../tools/net";
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      passwd: "",
      net: net,
      checked: true
    };
  },
  methods: {
    login: function() {
      console.log("登录提交");
      // 以post联网获取服务器数据 localhost:8888/login
      if (this.username && this.passwd) {
        this.net.post(
          "login",
          {
            username: this.username,
            passwd: this.passwd
          },
          function(res) {
            console.log(res.data);
            if(res.data.code===1){
                window.location.href="/"
            }else if(res.data.code==2){
              window.alert("密码错误，请重新输入！")
            }else{
              window.alert("用户不存在，请注册新用户!")
            }
          }
        );
      }else{
        window.alert("请输入正确的用户名与密码！")
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logincon {
  position: relative;
  height: 754px;
  width: 100%;
  overflow: hidden;
  background: #f7f7f6 !important;
}
.top {
  height: 78px;
  border-bottom: 1px solid #ccc;
}
.head {
  width: 980px;
  margin: 0 auto;
}
.head .link {
  margin-top: 20px;
  font-size: 0;
}
.head .rt {
  font-size: 12px;
  color: #bbb;
  margin-top: 56px;
}
.content {
  position: relative;
  padding-bottom: 30px;
}
.content .login {
  padding-left: 150px;
  padding-top: 50px;
}
.content .login h1 {
  font-size: 30px;
  font-weight: 500;
  color: #666;
}
.content .login .el {
  margin-top: 14px;
}
.content .login .yan a{
    color: #666;
    font-size: 12px;
}
.content .login .xieyi {
  margin-top: 20px;
  color: #666 !important;
}
.content .login .check {
  font-size: 12px !important;
  color: #999 !important;
}
.content .xieyi .wj {
    font-size: 12px;
    color: #999;
}
.content .login .btn {
  width: 100%;
  background: #7b111b;
  color: #fff;
}

.content .gray {
  position: absolute;
  top: 50px;
  left: 750px;
  background: #eee;
  width: 100%;
}
.content .gray .info {
  padding: 7px 20px;
  line-height: 30px;
  font-size: 16px;
  color: #999;
}
.content .info span {
  margin-right: 15px;
}
.content .info .login-link {
  color: #365899;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 30px;
  border-top: 1px solid #e5e5e5;
  color: #666;
  z-index: 10;
  overflow: hidden;
}
.footer .foot {
  width: 980px !important;
  margin: 0 auto;
  height: 30px;
  line-height: 30px;
}
.footer .foot .gray {
  width: 390px;
  font-size: 12px;
  color: #999999;
  text-align: left;
}
.footer .foot .link-box {
  text-align: right;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.footer .link-box .item {
  margin-left: 13px;
  color: #8999a9;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
</style>
