<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="username" placeholder="username">                
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="password" @keyup.enter.native="submitForm('ruleForm')">
                   </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="login" class="login">登录</el-button>
                </div>
                <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
            </el-form>
        </div>
    </div>
</template>

<script>
import net from "../../tools/net";
    export default {
        data(){
            return {      
            username: '黄金屋',
            password: '123123',
            net:net,
            }
        },
        methods: {
    login() {
      let that=this;
      // 以post联网获取服务器数据 localhost:8888/login
      this.net.post(
        "seller",
        {
          name: this.username,
          passwd: this.password
        },
        function(res) {
            if(res.data.code==1){
                alert(res.data.msg);
            }else if(res.data.code==2){
                       alert(res.data.msg);
            }else{
                console.log(res.data.msg);
                 that.$router.push('/home');
            }
        }
      )
    }
  }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../../assets/img/login-bg.jpg);
        background-size: 100%;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #8C222C;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
    .login{
        background-color: #8C222C;
        border-color:#8C222C;
    }
</style>