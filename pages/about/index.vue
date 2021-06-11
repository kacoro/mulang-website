<template>
  <div class="news-detail">
    <div class="banner">
      <div class="banner-bg">
        <div class="border-title border-title2">
          <h2>Company Introduction</h2>
          <h2>企业介绍</h2>
        </div>
        <div class="banner-content">
          <p>
            康索特成立于2006年10月，作为业内领先的AIoT产品和解决方案提供商，端云协同应用能力是康索特的核心优势，也是人工智能和物联网产生价值的关键。
          </p>
          <p>
            我们专注于通用园区和城市治理领域，连接数据、算法及应用，为客户提供领先的AIoT软硬件产品和智能化应用解决方案。
          </p>
        </div>
      </div>
    </div>
    <div class="about-section-1">
      <div class="about-section-1-left">
        <div>人工智能&物联网跨界创新<br>华为基因，十六年的懂行团队。</div>
        
      </div>
      <div class="about-section-1-right">
        <ul>
          <li>
              <dl><dt>使命</dt>
        <dd>普惠AI应用，<br />让美好生活触手可及。</dd></dl>
          </li>
          <li>
              <dl><dt>愿景</dt>
        <dd>成为全球领先的AIoT产品和<br />解决方案提供商</dd></dl>
          </li>
          <li>
              <dl><dt>价值观</dt>
        <dd>善用技术，达人达己</dd></dl>
          </li>
        </ul>
        
        
        
        
      </div>
    </div>
    <div>
      <img src="/images/about/jincheng.jpg" width="100%" />
    </div>
    <div class="container">
      <div class="about-section-parner">
        <div class="border-title">
          <h2>Cooperative Partner</h2>
          <h2>生态伙伴</h2>
        </div>
        <div class="img"><img src="/images/about/partner.jpg" /></div>
      </div>
    </div>
    <div class="success-case">
      康索特通用园区与城市治理解决方案服务超过
      <dl class="cusumer">
        <dt>1700+</dt>
        <dd>家企事业单位</dd>
        <dt>200+</dt>
        <dd>所高校</dd>
        <dt>4000+</dt>
        <dd>所中小幼学校</dd>
      </dl>
      <div class="success-case-content">
        <div class="success-case-content-left">
          <div class="success-case-title"><span>企事业单位</span></div>
          <ul>
            <li v-for="(item, index) in companys" :key="index">{{ item }}</li>
            <li>...</li>
          </ul>
        </div>
        <div class="success-case-content-right">
          <div class="success-case-title"><span>高校</span></div>
          <ul>
            <li v-for="(item, index) in schools" :key="index">{{ item }}</li>
            <li>...</li>
          </ul>
        </div>
      </div>
      <div class="success-case-content">
        <div class="success-case-content-left">
          <div class="success-case-title"><span>政府机关</span></div>
          <ul>
            <li v-for="(item, index) in govs" :key="index">{{ item }}</li>
            <li>...</li>
          </ul>
        </div>
        <div class="success-case-content-right">
          <div class="success-case-title"><span>中小幼学校</span></div>
          <ul>
            <li v-for="(item, index) in midSchools" :key="index">{{ item }}</li>
            <li>...</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="about-honnor">
      <img src="/images/about/honnor.png" width="100%" />
    </div>
  </div>
</template>
<style scoped>
.about-section-1 {
  display: flex;
}
.about-section-1-left{ width:60%;display: flex; flex-direction: column; justify-content: center; align-items: center;}
.about-section-1-left div{font-size: 55px; color: #184290; font-weight: bold; text-align: center;}
.about-section-1-right{ width:40%}
 
.about-section-1-right ul{ display: flex; flex-direction: column; padding-top: 1rem;padding-left:40px;}
.about-section-1-right li{ height: 67px; display: flex; align-items: center; position: relative; padding-bottom: 1rem;}
.about-section-1-right ul li::before {
    content: "⚬";
    color: #f3cd1d;
    font-weight: bold;
    font-size: 40px;
    position: absolute;
    left: -1em;
}
.about-section-1-right dl{ display: flex;align-items: center; flex: 1;}
.about-section-1-right dt{ width: 30%; font-size: 40px;color: #f3cd1d;
    font-weight: bold;}
    .about-section-1-right dd{font-size: 18px; color: #184290;}


@media screen and (max-width :1280px) {
  .about-section-1-right dd{font-size: 16px; }
   .about-section-1-right dt {font-size: 32px;}
   .about-section-1-left div{font-size: 40px;}

 }
    @media screen and (max-width :768px) {
        .about-section-1-right dd{font-size: 14px; }
   .about-section-1-right dt {font-size: 24px;}
   .about-section-1-right ul li::before {font-size: 24px;}
   .about-section-1-left div{font-size: 28px;}

    }
    @media screen and (max-width :414px) {
        .about-section-1-right dd{font-size: 12px; }
   .about-section-1-right dt {font-size: 16px;}
   .about-section-1-right ul li::before {font-size: 16px;}
   .about-section-1-left div{font-size: 16px;}
    }
     @media screen and (max-width :320px) {
       .about-section-1-right ul {padding-left: 12px;}
        .about-section-1-right dd{font-size: 12px; }
   .about-section-1-right dt {font-size: 14px;}
   .about-section-1-right ul li::before {font-size: 14px;}
   .about-section-1-left div{font-size: 14px;}
    }

.about-section-1 .success-case {
  max-width: 1486px;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.about-honnor {
  margin-bottom: 1rem;
}
.success-case{
  padding: 15px;
  box-sizing: border-box;
}
.success-case dl {
  padding-top: 30px;
}
.success-case dt {
  font-size: 30px;
  display: inline-block;
  color: #f3cd1d;
  font-weight: bold;
}
.success-case dd {
  font-size: 24px;
  display: inline-block;
  margin-right: 20px;
  color: #184290;
  font-weight: bold;
}

.success-case-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.success-case-content-left,
.success-case-content-right {
  max-width: 594px;
}
@media screen and (max-width :1280px) {
   .success-case-content-left,
.success-case-content-right {
  padding: 20px;
  box-sizing: border-box;
  width: 50%;
}
 }
  @media screen and (max-width :768px) {
    .success-case-content{
      justify-content: center;
    }
       .success-case-content-left,
.success-case-content-right{
  padding: 0;
  width: 100%;
}
    }
.success-case-title {
  text-align: center;
  position: relative;
  height: 28px;
  line-height: 28px;
  margin-bottom: 35px;
  margin-top: 35px;
}
.success-case-title::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 3px;
  background: #f3cd1d;
  top: 50%;
  left: 0;
  right: 0;
  margin-top: -1.5px;
}
.success-case-title span {
  position: relative;
  z-index: 1;
  display: inline-block;
  background: #fff;
  font-size: 28px;
  padding: 0 25px;
  color: #184290;
  font-weight: bold;
}
.success-case-content ul {
  display: flex;
  flex-wrap: wrap;
}
.success-case-content ul li {
  width: 25%;
  font-size: 12px;
  margin-bottom: 14px;
  padding: 0 10px;
  box-sizing: border-box;
}
.banner {
  min-height: 320px;
  background: url("/images/about/banner.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.banner-content {
  margin-top: 0.7rem;
}
.banner-content p {
  padding-bottom: 20px;
}
.about-section-parner {
  position: relative;
  text-align: center;
}
.about-section-parner .img {
  box-sizing: border-box;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
}
.about-section-parner img {
  max-width: 100%;
}
.about-section-parner .border-title {
  position: absolute;
  right: 0;
}
.banner-bg {
  max-width: 1420px;
  box-sizing: border-box;
  padding: 15px;
  margin: 0 auto;
  position: relative;
  min-height: 5rem;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
}

.border-title {
  border-left: 10px solid #f3cd1d;
  padding-left: 20px;
  color: #184290;
  text-align: left;
}
.border-title2 h2 {
  color: #fff;
}
.border-title h2 {
}

.banner-bg p {
  color: #fff;
  font-size: 0.18rem;
  max-width: 1342px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

<script>
import { gql, rawRequest } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
  query Posts($limit: Int!) {
    posts(limit: $limit) {
      posts {
        id
        text
        textSnippet
        title
        createdAt
      }
      hasMore
    }
  }
`;

// import posts from '~/apollo/queries/posts'

export default {
  name: "Search",
  data() {
    return {
      schools: [
        "深圳大学",
        "长沙理工",
        "中山大学",
        "南通科技学院",
        "天津海运职业学院",
        "毕节职业技术学院",
        "哈尔滨幼儿师专",
        "娄底职业技术学院",
        "新疆轻工职业技术学院",
        "毕节幼儿师范高等专科学校",
        "国防大学",
        "黑河学院",
        "云南国土资源学校",
        "信息工程大学",
        "楚雄师范学院",
        "泰州技师学院",
        "云南农业职业学院",
        "云南工程职业学院",
        "昆明工业职业学校",
        "昆明卫生职业学校",
        "吉林工商职业学院",
        "云南体育运动学院",
        "云南冶金学校",
        "牡丹江技师学院",
        "镇江信息中专",
        "吉林工程职业学院",
        "铁岭卫生职业学院",
        "泰州机电学院",
        "常州工贸职业学院",
        "盐城外国语学院",
        "山西医科大学晋祠学院",
      ],
      midSchools: [
        "吉林省实验中学",
        "东岳中学",
        "绵阳三中",
        "南充一中",
        "乌拉特前旗三中",
        "锡林浩特市第六中学",
        "哈尔滨市第九中学",
        "中实中学",
        "大众中学",
        "东风第一小学",
        "老鸦小学",
        "五福镇小学",
        "大仪小学",
        "宏德小学",
        "先锋小学",
        "育源小学",
        "中小幼学校",
        "春田幼儿园",
        "紫竹街幼儿园",
        "金太阳幼儿中心",
        "蓝精灵幼儿园",
        "凤仪幼儿园",
        "高坪区实验幼儿园",
        "常州航空幼儿园",
        "天池阳和幼儿园",
        "育源幼儿园",
        "内江宋庆龄幼儿园",
        "春雷幼儿园",
        "王家镇小学",
        "五星小学",
        "梅家镇小学",
      ],
      companys: [
        "茅台集团",
        "南通礼德铝业",
        "乌海化工",
        "喀什石油基地",
        "蒲城电业局",
        "哈密徐矿集团",
        "哈密太老矿业有限公司",
        "青岛人工智能会客厅",
        "华润置地",
        "东方希望有色金属",
        "中粮油脂冶炼公司",
        "泰州茂业百货",
        "吉安市永丰县检察院",
        "惠州贝斯特物流有限公司",
        "惠州金明环保科技",
        "吉林舒兰起重机厂",
        "哈密国投能源",
        "京东商城",
        "修正药业",
        "保定唐县隆昌假日酒店",
        "山西吕梁煤矿",
        "连云港豪森药业",
        "哈密国网能源",
        "扬州恒远集团",
        "锦州交通银行",
        "亚历山大医院",
        "乌鲁木齐军区总医院",
        "山东信发铝业集团",
        "新疆都市消费晨报",
        "国泰新华企业园区",
        "哈密南湖电厂",
        "今麦郎食品公司",
        "随州全力机械集团",
        "比亚迪汽车",
        "天津中汽",
      ],
      govs: [
        "龙华区政府",
        "白山市人民政府",
        "神龙架政府",
        "阜新市中级人民法院",
        "吉林司法厅",
        "塔城公安局",
        "恩施公安局",
        "乌苏地税局",
        "郑州市食品药品监督管理局",
        "呼伦贝尔地税局",
        "牡丹江农行",
        "台州体育局",
        "吉林省舒兰市精神病医院",
        "延吉市邮政局",
        "山西省电视台",
        "吉安市永丰县检察院",
        "贵阳女子强制隔离戒毒所",
        "湖南省戒毒管理局",
        "湖南女子强制隔离戒毒所",
        "白泥湖强制隔离戒毒所",
        "新开铺强制隔离戒毒所",
        "黎托强制隔离戒毒所",
        "白马垅强制隔离戒毒所",
        "长春女子监狱",
        "长春监狱",
        "湖北咸宁监狱",
        "武汉琴断口监狱",
        "吉林省监狱管理局",
        "四平石岭子监狱",
        "辽源东丰监狱",
        "通化梅河口监狱",
      ],
    };
  },

  async asyncData({ app, params }) {
    // console.log(process.env.GRAPHQL_URL)
    // const { data, status } = await getGraphqlClient(app.context).rawRequest(
    //   query,
    //   {
    //     limit: 4,
    //   }
    // );
    // if (status === 200) {
    //   return {
    //     posts: data.posts,
    //     hasMore: data.hasMore,
    //   };
    // }
  },
  methods: {
    change() {},
    formateDay(day) {
      return this.$dayjs(day).format("MM/DD");
    },
  },
};
</script>

