
<template>
<!-- 表单添加信息组件 -->
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i>产品列表</el-breadcrumb-item>
                <el-breadcrumb-item>产品添加</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form"  label-width="80px">
                    <el-form-item label="书名">
                        <el-input v-model="name"></el-input>
                    </el-form-item>
                    <el-form-item label="作者">
                        <el-input v-model="author"></el-input>
                    </el-form-item>
                    <el-form-item label="书店">
                        <el-input v-model="store"></el-input>
                    </el-form-item>
                    <el-form-item label="价格">
                        <el-input v-model="price"></el-input>
                    </el-form-item>
                    <el-form-item label="卖价">
                        <el-input v-model="sellprice"></el-input>
                    </el-form-item>   
                    <el-form-item label="库存">
                        <el-input v-model="inventory"></el-input>
                    </el-form-item>    
                    <el-form-item label="出版社">
                        <el-input v-model="publicone"></el-input>
                    </el-form-item>     
                     <el-form-item label="出版时间">
                        <el-input v-model="time"></el-input>
                    </el-form-item>               
                       <!-- <el-form-item label="出版时间" >
                        <el-col :span="11" class="like">
                            <el-date-picker type="date" placeholder="选择日期" v-model="time" style="width: 100%;"></el-date-picker>
                        </el-col> -->
                     <el-form-item label="品相">
                        <el-input v-model="appearance"></el-input>
                    </el-form-item> 
                    <!-- <el-form-item label="品相" >
                        <el-select v-model="appearance" placeholder="请选择" class="like">
                            <el-option key="five" label="八五" value="bbk"></el-option>
                            <el-option key="all" label="全" value="xtc"></el-option>
                            <el-option key="nine" label="九" value="imoo"></el-option>
                            <el-option key="new" label="全新" value="imoo"></el-option>
                        </el-select>
                    </el-form-item> -->
                        <el-form-item label="类型">
                        <el-input v-model="kinds"></el-input>
                    </el-form-item>
                      <el-form-item label="页数">
                        <el-input v-model="pagenumber"></el-input>
                    </el-form-item> 
                    <el-form-item label="描述">
                        <el-input type="textarea" rows="5" v-model="text"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>
import net from "../../tools/net";
    export default {
        name: 'baseform',
        data(){
            return {        
          name: "",
          author: "",
          store:"",
          price:"",
          sellprice:"",
          inventory:"",
          publicone:"",
          time:"",
          appearance:"",
          kinds:"",
          pagenumber:"",
          text:"",
          net: net
                }
            },
        
        methods: {
            onSubmit() {
                 let that=this;
                 this.net.post(
                  "add",
                  {
          book_name: this.name,
          book_author: this.author,
          book_store:this.store,
          price: this.price,
          sell_price:this.sellprice,
          number:this.inventory,
          publisher:this.publicone,
          publish_time: this.time,
          phase:this.appearance,
          kind:this.kinds,
          page_number: this.pagenumber,
          information: this.text,
        },
        function(res) {
            // alert("提交成功！")
            that.$router.push('/products');
          console.log(res);
        }
      ); 

               
            }
        }
    }
</script>
<style>

</style>
