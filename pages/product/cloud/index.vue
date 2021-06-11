<template>
  <div class="product-wrap">
    <div class="banner">
      <div class="banner-bg">
        <h1>云端产品</h1>
      </div>
    </div>
    <div class="container">
      <div class="product-content">
        <ul class="product-cloud-list">
          <li
            class="product-cloud-item"
            :key="index"
            v-for="(item, index) in list"
          >
            <div>
              <h2>{{ item.title }}</h2>
              <div v-html="item.other.note"></div>
            </div>
            <div>
              <h4>平台应用</h4>
              <div class="application">
                <ul>
                  <li v-for="id,i in item.other.application.split(',')" :key="i">
                    <div class="img">
                         <img :src="applications[id].other.thumb" v-if="applications[id].other.thumb" />
                    </div>
                    <span class="application-title">{{applications[id].title}}</span>
                  </li>
                </ul>
              </div>
             
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.product-content {
  padding: 0 35px 35px;
}
.banner {
  min-height: 240px;
  background: url("/images/product/banner2.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.banner-bg {
  min-height: 4.9rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-bg h1 {
  color: #fff;
}
/* 产品列表 */
.product-cloud-item{
   padding:80px 1rem ;
   border-bottom: 1px solid #b2b2b2;
}
.product-cloud-item h2{
  color: #19459a;
   border-left: 5px #f3cd1d solid;
   padding-left: 20px;
   margin-bottom: 35px;
}
.product-cloud-item h4{
  color: #19459a;
  margin-top:81px;
  margin-bottom: 17px;
  padding-left: .35rem;
}
.application ul{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.application ul li{
  text-align: center;
      padding-left: .35rem;
    margin-bottom: 20px;
}
@media screen and (max-width: 768px) {
  .application ul li img{
    width: 40px;
  }
  .application ul li .application-title{
    font-size: 12px;
  }
}
</style>

<script>
import { gql } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const listsByIds = gql`
query ListsByIds($ids: String!, $projectIdentifier: String!) {
  listsByIds(ids: $ids, projectIdentifier: $projectIdentifier) {
    id
    title
    projectId
    categoryId
    createdAt
    other
    __typename
  }
}

`
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
      applications: {},
    };
  },

  async asyncData({ app, params }) {
    // console.log(process.env.GRAPHQL_URL)
    let list = [];
    let ids = [];
    let applications = {};
    const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        categoryId: 54,
        identifier: "product",
        page: 1,
      }
    );
    if (status === 200) {
       list = data.lists.lists;
      
      ids = list.map((item) => item.other.application);
    }
    if (ids.length > 0) {
      const { data: data2, status: state2 } = await getGraphqlClient(
        app.context
      ).rawRequest(listsByIds, {
        ids: ids.join(","),
        projectIdentifier: "application",
      });
      if(state2==200){

        
        //将数组转为泛型
         
        data2.listsByIds.forEach(element => {
            applications[element.id] = element
        });
      }
    }
    console.log(list)
    return {
      list: list,
      applications:applications
    };
  },
  methods: {},
};
</script>

