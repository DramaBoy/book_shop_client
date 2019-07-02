<template>
  <div class="special-intro">
    <div class="book_list_box">
      <p class="book_list_title">为你推荐</p>
      <ul class="clearfix">
        <li v-for="(items,index) in msg" :key="index">
          <div class="pic">
            <a href="#">
              <img :src="items.pic">
            </a>
          </div>
          <div class="book_name">
            <a href="#">{{items.name}}</a>
          </div>
          <div class="shop_name">{{items.shopName}}</div>
          <div class="price">
            <span class="price-icon">￥</span>
            {{items.price}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      msg: [
        {
          pic:
            "//www.kfzimg.com/G07/M00/83/A5/q4YBAFvmOzOAQN_YAAIo_gROhiw018_s.jpg",
          name:
            "密宗手写古抄本    古函盒装  共66贴   后宇多天皇1278年弘安四年敬书秘藏    真言宗弘法大师    不动明王爱染明王孔雀明王，虚空藏求闻持法，七星如意轮观音，白衣观音，文殊法，大黑天，弁才天，伎艺天，欢喜天法，诃利帝天，梵天，帝释天，四大天王，深沙大将，五大虚空藏，药王菩萨，大自在天，",
          shopName: "龙泉",
          price: "25000.00"
        },
        {
          pic:
            "//www.kfzimg.com/G06/M00/2B/4F/p4YBAFqzm9WAL2lnAACCIgH-ANo241_s.jpg",
          name: "史记（精装本全六册）",
          shopName: "[汉]司马迁 著",
          price: "3200.00"
        },
        {
          pic:
            "//www.kfzimg.com/G00/M00/11/B3/ooYBAFaXh3aAXJc6AABsmoQn_Go321_s.jpg",
          name: "上海译文出版社 译文名著典藏  （18种26册合售 书目详见描述）",
          shopName: "莎士比亚  等",
          price: "2900.00"
        },
        {
          pic:
            "//www.kfzimg.com/G07/M00/10/83/q4YBAFw0Dd2ATp-IAAGfpSSZPro239_s.jpg",
          name: "鲁迅全集（2005最新修订版）",
          shopName: "鲁迅  著",
          price: "600.00"
        },
        {
          pic:
            "//www.kfzimg.com/G05/M00/B4/C5/p4YBAFhgZd2AIJAIAABGQo46jwM106_s.jpg",
          name:
            "王家成草药接骨经验      陕西商洛地区中西医结合经验交流会 全国四、五届人大代表王家成汇集秦岭山区接骨经验用药、草药附图  59页大16开  陕西名老草医",
          shopName: "陕西商洛地区中西医结合经验交流会",
          price: "39.11"
        },
        {
          pic:
            "//www.kfzimg.com/G00/M00/71/A1/ooYBAFZeyOKAIgNuAAWo4I4DPgY088_s.jpg",
          name: "文革瓷器人民公社好花瓷茶壶一把",
          shopName: "不详",
          price: "60.00"
        },
        {
          pic:
            "http://shopimg.kongfz.com.cn/20130621/218935/218935xEtwK0_s.jpg",
          name:
            "279.人民日报1955年9月28日，十大元帅授衔+照片9张（缺林*）等，规格4开6版.85品。",
          shopName: "不详",
          price: "1500.00"
        },
        {
          pic:
            "//www.kfzimg.com/G07/M00/C1/C8/qoYBAFvnm0OAJ1e8AAFhdSPu-xI634_s.jpg",
          name: "老砚台、瓜纹端砚",
          shopName: "",
          price: "280.00"
        },
        {
          pic:
            "//www.kfzimg.com/G06/M00/64/F2/p4YBAFpeCJWATFR5AAOZfi3QZgQ772_s.jpg",
          name:
            "清代道光庚寅仲秋地理阴阳合繤上下卷一册 元空妙用九星 辅星水法辨伪 长生水法辨伪 紫白赋 四十八局安排先后掌诀式",
          shopName: "不详",
          price: "120.00"
        },
        {
          pic:
            "//www.kfzimg.com/G07/M00/A7/21/qoYBAFwtXi-AGm71AAOLKkTVTPE666_s.jpg",
          name: "《大闹天宫》全彩连环画 50开小精，",
          shopName: "知新社",
          price: "120.00"
        },
        {
          pic:
            "//www.kfzimg.com/G07/M00/96/13/q4YBAFxILeSAHarNAAKrkhrS_3g031_s.jpg",
          name:
            "新东方IELTS剑桥雅思真题精讲45678910111213全套8本 周成刚剑4剑5剑6剑7剑8剑9剑10剑11剑12剑13真题剖析 雅思考试听读写说技巧",
          shopName: "周成刚  主编",
          price: "80.00"
        },
        {
          pic:
            "//www.kfzimg.com/W03/2f/7d/2f7dae70f5118e0539212aea2f31207a_s.jpg",
          name:
            "鲁迅全集（1981年版布面精装 一版一印）（第1.2.3.4.5.6.7.8.9.10.11.13.14）共计13本合售  全16本 少第12.15.16（均以图为准）",
          shopName: "鲁迅",
          price: "600.00"
        },
        {
          pic:
            "//www.kfzimg.com/G07/M00/3A/B7/q4YBAFv6YniAJGAaAAEhBjkzSDM840_s.jpg",
          name:
            "脂砚斋重评石头记甲戌本（线装一函四册，纪念曹雪芹逝世240周年特制）",
          shopName: "曹雪芹",
          price: "3150.00"
        },
        {
          pic:
            "//www.kfzimg.com/G06/M00/3A/FF/p4YBAFp1uO6ADN6PAALDCLHfIb8107_s.jpg",
          name: "英雄616钢笔，上海总厂产品",
          shopName: "不详",
          price: "9.00 "
        },
        {
          pic:
            "//www.kfzimg.com/G07/M00/A0/64/qoYBAFva2Y-AbivSAAGuDf_kyS4585_s.jpg",
          name: "周恩来画册",
          shopName: "中共中央文献研究室",
          price: "120.00"
        },
        {
          pic:
            "//www.kfzimg.com/G07/M00/56/38/qoYBAFwc18eAAQDPAAFFOSbVOWc560_s.jpg",
          name:
            "植物图鉴 彩图《WILD FLOWERS OF THE WAYSIDE AND WOODLAND》【英文精装古董书】近四百幅精美插图【货号K0011】",
          shopName: "不详",
          price: "320.00"
        },
        {
          pic:
            "//www.kfzimg.com/G06/M00/E3/C6/p4YBAFuzECiAHQSeAAFbW73OMbk247_s.jpg",
          name: "铜元",
          shopName: "",
          price: "10.00"
        },
        {
          pic:
            "//www.kfzimg.com/G07/M00/76/F2/qoYBAFxEYGOAWWDHAARo6X8sb9o482_s.jpg",
          name: "伏魔战记",
          shopName: "萩原一至",
          price: "20.00"
        },
        {
          pic:
            "//www.kfzimg.com/G06/M00/B6/2E/p4YBAFsDg4qASOuKAACH7cxYbPc126_s.jpg",
          name: "武松打虎（年画）",
          shopName: "如图",
          price: "30.00"
        },
        {
          pic:
            "//www.kfzimg.com/G07/M00/99/55/qoYBAFw4sLKAchkIAAGbMHQdjj8537_s.jpg",
          name: "手臂录双手刀剑法全集",
          shopName: "韦双翔",
          price: "35.00"
        }
      ]
    };
  }
};
</script>

<style scoped>
.special-intro {
  padding-top: 23px;
  padding-bottom: 25px;
}
.book_list_box {
  width: 790px;
  overflow: hidden;
}
.special-intro .book_list_title {
  font-size: 16px;
  color: #333;
  margin-top: 0;
  padding-bottom: 21px;
  border-bottom: none;
  line-height: 24px;
}
.book_list_box ul {
  margin-right: -35px;
}
.book_list_box ul li {
  margin: 0 22.5px 30px 0;
  width: 130px;
  position: relative;
  float: left;
  height: 218px;
  line-height: 20px;
}
.book_list_box ul li .pic a {
  display: block;
  width: 128px;
  height: 128px;
  line-height: 124px;
  border: 1px solid #e5e5e5;
  text-align: center;
  font-size: 0;
}
.book_list_box ul li .pic a img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.book_list_box ul li .book_name {
  font-size: 12px;
  max-height: 40px;
  line-height: 20px;
  overflow: hidden;
  margin-top: 5px;
}
.book_list_box ul li .book_name a {
  color: #333;
}
.book_list_box ul li .shop_name {
  height: 20px;
  color: #999;
  overflow: hidden;
  font-size: 12px;
}
.book_list_box ul li .price {
  position: absolute;
  left: 0;
  bottom: 0;
  color: #bf7f5f;
  font-size: 16px;
  margin-top: 5px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.book_list_box ul li .price .price-icon {
  float: left;
  width: 12px;
  font-size: 14px;
  color: #bf7f5f;
}
</style>

