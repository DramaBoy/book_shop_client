<template>
  <div class="newbook">
      <div class="item-img">
          <a href="#">
              <img src="http://www.kfzimg.com/G07/M00/41/72/q4YBAFz90KiAY9nCAADCRmcUXns347_n.jpg" alt="">
          </a>
      </div>
      <div class="item-con">
          <div class="item-title">
              <a href="#">签名《铸以代刻：十九世纪中文印刷变局》</a>
          </div>
          <div class="item-dis">
一部描绘文化转型细节的长卷，研究近代中国西式出版印刷从落地到成熟过程的精细之作
          </div>
          <div class="tag">
              <span>
                  签名
                  <div class="jiao">
                      <div class="jiao-inner"></div>
                  </div>
              </span>
          </div>
          <div class="item-bottom">
              <div class="lt">
                  <span>￥</span>78
                  <span>包邮</span>
              </div>
              <div class="rt">
                  <div class="btn">立即抢购</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Books",
  data() {
    return {
      msg: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newbook{
    width: 322px;
    height: 434px;
    border: 1px solid #e5e5e5;
    background: #fff;
    box-sizing: border-box;
}
.item-img{
    width: 100%;
    height: 240px;
}
.item-img a {
    display: block;
    width: 100%;
    height: 100%;
}
.item-img img{
    width: 100%;
    height: 100%;
}
.item-con{
    width: 278px;
    margin: 0 auto;
}
.item-title{
    padding-top: 12px;
    height: 34px;
    overflow: hidden;
    box-sizing: border-box;
}
.item-title a{
    color: #333;
}
.item-dis{
    font-size: 12px;
    color: #666;
    margin-top: 6px;
    height: 36px;
    line-height: 18px;
    text-align: left;
    overflow: hidden;
}
.tag{
    width: 100%;
    height: 36px;
    margin-top: 10px;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
    box-sizing: border-box;
}
.tag span {
    position: relative;
    float: left;
    font-size: 12px;
    line-height: 13px;
    height: 24px;
    border: 1px solid #dfc49b;
    padding: 5px 6px;
    color: #C28F42;
    margin-right: 9px;
    margin-bottom: 12px;
    box-sizing: border-box;
}
.tag .jiao{
    width: 0;
    height: 0;
    border-bottom: 6px solid #dfc49b;
    border-left: 6px solid transparent;
    position: absolute;
    right: -1px;
    bottom: -1px;
    box-sizing: border-box;
}
.jiao .jiao-inner{
    width: 0;
    height: 0;
    border-bottom: 5px solid #fdfbfc;
    border-left: 5px solid transparent;
    position: absolute;
    right: 0;
    bottom: -6px;
    box-sizing: border-box;
}
.item-bottom{
    width: 100%;
    box-sizing: border-box;
}
.item-bottom .lt{
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    color: #8c222c;
    margin-top: 20px;
}
.item-bottom .lt span:first-of-type{
    font-size: 16px;
    margin-left: 4px;
}
.item-bottom .lt span:last-of-type{
    font-size: 12px;
    margin-left: 4px;
}
.item-bottom .rt{
    position: relative;
}
.item-bottom .rt .btn{
    display: block;
    width: 112px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #8c222c;
    font-size: 14px;
    color: #fff;
    margin-top: 20px;
    border-radius: 2px;
    cursor: pointer;
}
</style>
