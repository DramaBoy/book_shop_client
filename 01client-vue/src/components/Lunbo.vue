<template>
  <div class="block">
    <el-carousel trigger="click" height="270px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Lunbo",
  data() {
    return {
      imgs: [
        // "http://localhost:8080/img/img00.aa5b669c.jpg",
        // "http://localhost:8080/img/img01.99f93676.jpg",
        // "http://localhost:8080/img/img02.62c685f3.jpg",
        // "http://localhost:8080/img/img03.48868092.jpg"
        "http://img0.kfzimg.com/operation/99/f9/99f93676e021a580b21a38929eb6adf2.jpg",
        "http://img0.kfzimg.com/operation/aa/5b/aa5b669cfc94f95c1d21a2c4415aec51.jpg",
        "http://img0.kfzimg.com/operation/57/be/57be42ee4a05743139fe0b75e9936880.jpg",

        // "../img/img01.jpg",
        // "../img/img02.jpg",
        // "../assets/img00.jpg",
        // "../assets/img01.jpg",
        // "../assets/img02.jpg",
        // "../assets/img03.jpg",
      ]
    };
  }
};
</script>


<style>
.el-carousel__item img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>