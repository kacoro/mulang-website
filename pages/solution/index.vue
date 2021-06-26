<template>
  <div class="solution-wrap">
    <div class="banner" :class="{banner2:active==57,banner3:active==58}">
      <div class="banner-bg">
        <template v-if="active == 56">
          <h1>通用园区</h1>
          <p>
            康索特善用技术，从AIoT基建到智能化应用，覆盖校园、园区、小区、楼宇等社会微单元场景，提供包括人车通行、能源管理、支付服务等解决方案，全方位、全天候保障客户生产和运营活动，为人们次提供学习、工作和生活场景的极致体验
          </p>
        </template>
        <template v-else-if="active == 57">
          <h1>城市治理</h1>
          <p>
            康索特善用技术，从AIoT基建、数据服务到智能化应用，覆盖区域公共安全、机关事务管理、智慧监管、疫情防控等城市治理场景，构建基础设施集约智能、信息资源共享开放的智慧化发展体系，打造“深度感知、数据驱动”智慧城市标杆，助力政府治理体系和治理能力现代化。
          </p>
        </template>
        <template v-else>
          <h1>智慧环卫作业云脑</h1>
          <p>
            采用智能终端全方位感知人员、车辆信息作业人员、作业车辆、作业事件智能监管降低监管漏洞，有效控制营运成本
          </p>
        </template>
      </div>
       
    </div>
    <div class="solution-tabs">
         <ul>
             <li :class="{active:active==56}" >
                 <nuxt-link to="/solution?categoryId=56">
                 <img src="/images/solution/yuanqu.png" alt="">
                 <h3>通用园区</h3>
                 </nuxt-link>
             </li>
             <li  :class="{active:active==57}" >
                 <nuxt-link to="/solution?categoryId=57">
                 <img src="/images/solution/chengshi.png" alt="">
                 <h3>城市治理</h3>
                 </nuxt-link>
             </li>
             <li  :class="{active:active==58}">
                 <nuxt-link to="/solution?categoryId=58">
                 <img src="/images/solution/chuangxin.png" alt="">
                 <h3>创新业务</h3>
                 </nuxt-link>
             </li>
         </ul>
    </div>
     <div class="container">
          <div class="solution-text" v-show="active==56">
              <h1 class="blue">广泛赋能</h1>
                 <p>提供从AIoT基建到智能化应用整体解决方案轻量云部署，灵活高效的组件式软硬件产品和解决方案交付能力支持特殊场景、小众需求产品和解决方案定制开发构建全方位、全天候、全流程智能化服务提升客户生产和运营效率，节约30%管理成本</p>
         </div>
         <div class="solution-text"  v-show="active==57">
              <div><h1 class="yellow"  style="display:inline-block">10000+&nbsp;</h1><h5 style="display:inline-block">路IoT数据接入</h5></div>
              <div><h1 class="yellow"  style="display:inline-block">30+&nbsp;</h1><h5 style="display:inline-block">类AI算法调用端云协同</h5></div>
                 <p>提供从AIoT基建、数据服务到智能化应用整体解决方案，构建风险预警、决策响应、协同执法、事件闭环的智能服务体系提升城市治理水平和市民居住体验%管理成本</p>
         </div>
         
         <div class="solution-list" v-show="active==56||active==57">
              <h1 class="blue" >应用场景</h1>
            <ul>
                <li :key="item.id" v-for="item in list">
                    <img :src="item.other.thumb" />
                    <div>
                        <h1>{{item.title}}</h1>
                        <p>{{item.other.note}}</p>
                       
                        <nuxt-link :to="`/solution/${item.id}`" class="button radius">了解更多</nuxt-link>
                    </div>
                </li>
            </ul>
         </div>
         <div v-if="active==58" class="chuangxin">
             <div class="img">
                 <img src="/images/solution/chuangxin.jpg">
             </div>
             
             <div class="chuangxin-section-1">
                 <ul>
                     <li ><dl ><dt>社会价值</dt> <dd >康索特善用技术，通过AIoT赋能企业数字化转型，从分散到汇聚，实现精细化、数字化、网格化、智能化管理，从生产到运营，为企业提供数字智能化高效升级方案</dd></dl></li>
                <li ><dl ><dt>典型案例</dt> <dd >康索特联合中国联通推出的智慧环卫作业云脑，提供车辆作业线路优化、可溯源台账、车辆精细化运营、人员/车辆位置实时监管、远程人车统一指挥，提升资产管理能力、作业路线优化和人员安全服务水平，大幅降低环卫作业成本</dd></dl></li>
                     <li ><dl ><dt>方案亮点</dt> <dd >AI算法对车辆作业路线合理化分配<br>提高资产管理能力<br>完善事件处理机制,提高指挥调度能力</dd></dl></li>

                 </ul>
             </div>
            <div class="chuangxin-section-2">
                <div class="chuangxin-section2__top">
                    <h4>作业服务面积</h4>
                    <h1>4.6万平方公里+</h1>
                </div>
                <ul>
                    <li>
                        <div>
                            <h4>管理人数</h4>
                        <h1>5万+</h1>
                        </div>
                        
                    </li>
                    <li><div>
                        <h4>效率提升</h4>
                        <h1>200%+</h1></div>
                    </li>
                    <li><div>
                        <h4>环卫车辆</h4>
                        <h1>3000+</h1></div>
                    </li>
                    <li><div>
                        <h4>同时在线设备</h4>
                        <h1>10万+</h1></div>
                    </li>
                </ul>
            </div>
            
         </div>
     </div>
    </div>
</template>

<style scoped>
.chuangxin-section-2 {
    max-width: 967px;
    padding: 0px;
    box-sizing: border-box;
    text-align: center;
    margin:0 auto;
    margin-bottom: 1rem;
}
.chuangxin-section2__top{
    background: #e9c62c;
    padding: 24px 0;
    margin: 5px ;
    color: #184290;
}
.chuangxin-section-2 h1{ margin-top: .5em;}
.chuangxin-section-2 ul{
    display: flex;
    flex-wrap: wrap;
}
.chuangxin-section-2 ul li{
   
    width: 50%;
}
.chuangxin-section-2 ul li div{
    margin: 5px ; background: #19459a;
     padding: 24px 0;
     color: #e9c62c;
}
.chuangxin-section-2 ul h4{color: #fff;}


.chuangxin-section-1 ul{ display: flex; flex-direction: column; padding-top: .9rem;padding-left:40px;}
.chuangxin-section-1 li{ display: flex; align-items: center; position: relative; padding-bottom: .9rem;}
.chuangxin-section-1 ul li{}
.chuangxin-section-1 dl{ display: flex; flex: 1;}
.chuangxin-section-1 dt{  font-size: 40px;color: #f3cd1d;    white-space: nowrap;
    font-weight: bold; padding-right: .6rem; position: relative;}
    .chuangxin-section-1 dt::before {
    content: "⚬";
    color: #f3cd1d;
    font-weight: bold;
    /* font-size: 40px; */
    position: absolute;
    left: -1em;
}
    .chuangxin-section-1 dd{font-size: 18px; color: #184290; line-height: 1.5;}


@media screen and (max-width :1280px) {
  .chuangxin-section-1 dd{font-size: 16px; }
   .chuangxin-section-1 dt {font-size: 32px;}

 }
    @media screen and (max-width :768px) {
        .chuangxin-section-1 ul {padding-left: 14px;}
        .chuangxin-section-1 dd{font-size: 14px; }
   .chuangxin-section-1 dt {font-size: 24px;}
   /* .chuangxin-section-1 dt::before {font-size: 24px;} */

    }
    @media screen and (max-width :414px) {
        .chuangxin-section-1 ul {padding-left: 12px;}
        .chuangxin-section-1 dd{font-size: 12px; }
  .chuangxin-section-1 dt {font-size: 16px;}
   /* .chuangxin-section-1 dt::before {font-size: 16px;} */
    }
     @media screen and (max-width :320px) {
         
       .chuangxin-section-1 ul {padding-left: 12px;}
       .chuangxin-section-1 dd{font-size: 12px; }
         .chuangxin-section-1 dt {font-size: 14px;}
     }
   

.chuangxin{
   
    
}
.chuangxin .img{
    text-align: center;
    max-width: 100%;
}
.chuangxin .img img{
    max-width: 100%;
}
.banner {
  min-height: 240px;
  background: url("/images/solution/banner.jpg") no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.banner2 {
  background: url("/images/solution/banner2.jpg") no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.banner3 {
  background: url("/images/solution/banner3.jpg") no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.banner-bg {
  min-height: 4.9rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.banner-bg h1 {
  color: #fff;
  font-size: 40px;
  padding-bottom: 25px;
}
.banner-bg p {
  color: #fff;
  font-size: 0.18rem;
  text-align: center;
  max-width: 834px;
  line-height: 24px;
}
@media screen and (max-width: 1024px) {
  .banner-bg p {
    max-width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
}
.solution-tabs {
  max-width: 1458px;
  margin: 0 auto;
  padding-top: 52px;
  padding-bottom: 30px;
}
.solution-tabs ul {
  display: flex;
}
.solution-tabs ul li {
  background: #e8ecf5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  opacity: 0.5;
  padding-bottom: 30px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.solution-tabs ul li a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.solution-tabs ul li img {
  margin-top: -17%;
  max-width: 100%;
   transition:all .3s ease-in-out ;
   transform: translateY(5%);
}
.solution-tabs ul li h3 {
  color: #19459a;
   transition:all .3s ease-in-out ;
}
.solution-tabs ul li.active,
.solution-tabs ul li:hover {
  background: #e9c62c;
  color: #19459a;
  opacity: 1;
}
.solution-tabs ul li.active img,.solution-tabs ul li:hover img {
    transform: translateY(-5%);
   
}
.solution-tabs ul li.active h3,.solution-tabs ul li:hover h3 {
    transform: translateY(-50%);
}
.solution-text {
  max-width: 900px;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  padding: 30px;
  padding-bottom: 0.8rem;
}
.solution-text p {
  padding-top: 20px;
  font-size: 18px;
}
.solution-list {
}
.solution-list h1 {
  text-align: center;
  padding-bottom: 46px;
}
.solution-list ul li {
  padding: 40px;
  background: #19459a;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.solution-list ul li h1 {
  text-align: left;
}
.solution-list ul li div {
  width: 50%;
}
.solution-list ul li p {
  margin-bottom: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.solution-list ul li img {
  width: 50%;
  padding-right: 0.4rem;
}
@media screen and (max-width:640px) {
  .solution-list ul li{padding:30px 15px; font-size: 12px;flex-wrap: wrap;}
  .solution-list ul li img{width: 100%;}
  .solution-list ul li div{width: 100%;
 
  }
    .solution-list ul li  p{margin-bottom: 15px;font-size: 12px;}
  .solution-list ul li h1{padding:15px 0}
}
</style>


<script>
import { gql } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
  query Lists($categoryId: Int, $identifier: String!) {
    lists(categoryId: $categoryId, identifier: $identifier) {
      lists {
        id
        title
        projectId
        categoryId
        createdAt
        other
        __typename
      }
      total
      limit
      page
      totalPage
      hasMore
      __typename
    }
  }
`;

export default {
  name: "solution",

  data() {
    return {
      active: 56,
      list: [],
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to.query.categoryId);
    let categoryId = to.query.categoryId || 56;
    categoryId =
      typeof categoryId == "string" ? parseInt(categoryId) : categoryId;
    this.change(categoryId);
    next();
  },
  async asyncData({ app, params, query: q }) {
    console.log(params, q);
    let categoryId = q?.categoryId || 56;
    categoryId =
      typeof categoryId == "string" ? parseInt(categoryId) : categoryId;

    console.log(categoryId);

    const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        categoryId: categoryId,
        identifier: "solution",
        page: 1,
      }
    );
    if (status === 200) {
      return {
        list: data.lists.lists,
        active: categoryId,
      };
    }
  },
  methods: {
    async change(active) {
      this.active = active;
      const { data } = await getGraphqlClient().rawRequest(query, {
        categoryId: active,
        identifier: "solution",
        page: 1,
      });
      if (data.lists) {
        this.list = data.lists.lists;
      }
    },
  },
};
</script>

