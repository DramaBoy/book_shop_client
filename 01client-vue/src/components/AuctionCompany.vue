<template>
  <div class="company w">
    <div class="company-title">
      <h3>拍卖公司联盟</h3>
      <i>/</i>
      <a href="#">更多</a>
    </div>
    <div class="company-logo">
      <ul>
        <li>
          <div>北京地区</div>
        </li>
        <li v-for="(item,index) in pm_url" :key="index">
          <a href="#">
            <img :src="item" alt>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <div>其他地区</div>
        </li>
        <li v-for="(item,index) in pm_url2" :key="index">
          <a href="#">
            <img :src="item" alt>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuctionCompany",
  data() {
    return {
      pm_url: [
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img11.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img0.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img1.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img2.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img3.png?v=1.1",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img7.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img5.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img6.jpg?v=1.2",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img8.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img9.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img10.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img4.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img27.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img29.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img30.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img31.png?v=1.1"
      ],
      pm_url2: [
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img25.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img12.png?v=1.1",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img13.png?v=1.1",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img14.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img17.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img21.png",
        'http://www.kongfz.com/static/kfz-pmCompany/pm_img20.png',
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img22.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img23.jpg",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img24.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img26.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img19.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img15.png",
        "http://www.kongfz.com/static/kfz-pmCompany/pm_img28.png"
      ]
    };
  }
};
</script>

<style scoped>
.company {
  padding-top: 56px;
  overflow: hidden;
  box-sizing: border-box;
}
.company-title {
  width: 100%;
  height: 22px;
  line-height: 22px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 34px;
  box-sizing: border-box;
}
.company-title h3 {
  display: inline;
  font-size: 18px;
  top: 12px;
  left: 20px;
  color: #333;
  font-weight: 700;
}
.company-title i {
  font-size: 16px;
  color: #999;
  font-weight: 400;
  margin: 0 4px;
}
.company-title a {
  font-size: 12px;
  color: #0057a0;
}
.company-logo {
  width: 100%;
  text-align: justify;
  margin-bottom: 50px;
}
.company-logo ul {
  width: 100%;
  height: 150px;
}
.company-logo ul li {
  float: left;
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 20px;
}
.company-logo ul li div {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #aa987d;
  background: #f3f0e9;
}
.company-logo ul li img {
  width: 100%;
  vertical-align: middle;
}
</style>


