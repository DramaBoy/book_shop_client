
<template>
<!-- 表单添加信息组件 -->
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i>首页</el-breadcrumb-item>
                <el-breadcrumb-item>首页展示</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
     
    </div>
</template>

<script>
    export default {
        name: 'top',
        data: function(){
            return {
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }}}
</script>
<style>
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