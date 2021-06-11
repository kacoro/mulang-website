<template>
    <div class="solution-wrap">
        <div class="banner">
        <div class="banner-bg" >
             <h1>通用园区</h1>
             <p>康索特善用技术，从AIoT基建到智能化应用，覆盖校园、园区、小区、楼宇等社会微单元场景，提供包括人车通行、能源管理、支付服务等解决方案，全方位、全天候保障客户生产和运营活动，为人们次提供学习、工作和生活场景的极致体验</p>
        </div>
    </div>
    <div class="solution-tabs">
         <ul>
             <li :class="{active:active==56}" @click="change(56)">
                 <img src="/images/solution/yuanqu.png" alt="">
                 <h3>通用园区</h3>
             </li>
             <li  :class="{active:active==57}" @click="change(57)">
                 <img src="/images/solution/chengshi.png" alt="">
                 <h3>城市治理</h3>
             </li>
             <li  :class="{active:active==58}" @click="change(58)">
                 <img src="/images/solution/chuangxin.png" alt="">
                 <h3>创新业务</h3>
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
         <div class="solution-list">
              <h1 class="blue" v-show="active==56||active==57">应用场景</h1>
            <ul>
                <li :key="item.id" v-for="item in list">
                    <img :src="item.other.thumb" />
                    <div>
                        <h1>{{item.title}}</h1>
                        <p>{{item.other.note}}</p>
                       
                        <nuxt-link :to="`/solution/content/${item.id}`" class="button radius">了解更多</nuxt-link>
                    </div>
                </li>
            </ul>
         </div>
         
     </div>
    </div>
</template>

<style scoped>
.banner{
    min-height: 240px;
    background: url('/images/solution/banner.jpg') no-repeat;
     background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
}
.banner-bg{
    min-height: 4.9rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.banner-bg h1{
    color: #fff;
    font-size: 40px;
    padding-bottom: 25px;
}
.banner-bg p{
    color: #fff;
    font-size: .18rem;
    text-align: center;
    max-width: 834px;
    line-height: 24px;
    
}
@media screen and (max-width :1024px) {
    .banner-bg p{
        max-width: 100%;
        padding:0 15px;
        box-sizing: border-box;
    }
}
.solution-tabs{
    max-width: 1458px;
    margin: 0 auto;
    padding-top: 52px;
    padding-bottom: 30px;
}
.solution-tabs ul{
    display: flex;
}
.solution-tabs ul li{
    background: #e8ecf5;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%;
    opacity: .5;
    padding-bottom: 30px;
    cursor: pointer;
    transition:all .5s ease;
}
.solution-tabs ul li img{
    margin-top: -17%;
    max-width: 100%;
}
.solution-tabs ul li h2{
    
}
.solution-tabs ul li.active,.solution-tabs ul li:hover{
    background: #e9c62c;
    color: #19459a;
    opacity:1
}
.solution-tabs ul li.active img{
    
}
.solution-text{
    max-width: 900px;
    box-sizing: border-box;
    text-align: center;
    margin: 0 auto;
    padding: 30px;
    padding-bottom: .8rem;
}
.solution-text p{
    padding-top: 20px;
    font-size: 18px;
}
.solution-list{

}
.solution-list h1{
    text-align: center;
    padding-bottom: 46px;
}
.solution-list ul li{
    padding:40px;
    background: #19459a;
    margin-bottom: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.solution-list ul li h1{
    text-align: left;
}
.solution-list ul li div{
    width: 50%;
}
.solution-list ul li p{
    
    margin-bottom: 50px;
    overflow: hidden;text-overflow: ellipsis; display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;
}
.solution-list ul li img{
    width: 50%;
    padding-right:.4rem
}
</style>


<script>
import {gql} from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
  query Lists( $categoryId: Int, $identifier: String!) {
    lists(
       
        categoryId: $categoryId
        identifier: $identifier
    ) {
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
      active:56,
      list:[],
      
    };
  },

  async asyncData({ app, params }) {
    // console.log(process.env.GRAPHQL_URL)

    const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        categoryId: 56,
        identifier: "solution",
        page: 1
      }
    );
    if (status === 200) {
      return {
          list:data.lists.lists
      };
    }
  },
  methods: {
    async change(active){
        this.active = active
        const { data } = await getGraphqlClient().rawRequest(
        query,
        {
            categoryId: active,
            identifier: "solution",
            page: 1
        }
        );
        if (data.lists) {
            this.list=data.lists.lists
       
        }
    },
    
  },
};
</script>

