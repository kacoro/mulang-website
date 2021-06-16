<template>
  <div class="product-wrap">
    <div class="banner" :class="{banner2:categoryId==54}">
      <div class="banner-bg">
        <h1 v-if="categoryId ==50">IOT产品</h1>
        <h1 v-else>云端产品</h1>
      </div>
    </div>
    <div class="container">
      <div class="product-content" v-if="list" >
        <ul class="product-list" v-if="categoryId == 50">
          <li
            class="product-list-item"
            :key="index"
            v-for="(item, index) in list"
          >
            <div>
              <h2>{{ item.title }}</h2>
              <div v-html="item.other.note"></div>
            </div>

            <img class="pic" v-if="item.other" :src="item.other.thumb" />
          </li>
        </ul>
        <ul class="product-cloud-list" v-if="categoryId == 54">
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
  background: url("/images/product/banner.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.banner2{
  background: url("/images/product/banner2.jpg") no-repeat;
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
  border-left:5px solid #f3cd1d;
  padding-left: 1em;
}

/* 其他系列 */
.other-series h1 {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: #19459a;
  padding: 40px 0 30px;
}
.other-series h2 {
  font-size: 0.4rem;
  text-align: center;
  color: #fff;
  bottom: 0.55rem;
  width: 100%;
  position: absolute;
  transition: color, bottom 0.3s ease;
}
.other-series-list li:hover h2 {
  bottom: 0.6rem;
  color: #f3cd1d;
}
.other-series-list {
  display: flex;
  margin-bottom: 54px;
  flex-wrap: wrap;
}
.other-series-list li {
  background: #080505;
  font-size: 0;
  overflow: hidden;
  width: 20%;
  position: relative;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .other-series-list li {
    width: 33.33%;
  }
}
.other-series-list .pic {
  width: 100%;
  vertical-align: bottom;
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
`;
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
      categoryId: 50,
      list: [],
      applications: {},
    };
  },
  beforeRouteUpdate(to, from, next) {
    
    let categoryId = to.query?.categoryId || 50;
    categoryId =
      typeof categoryId == "string" ? parseInt(categoryId) : categoryId;
    console.log(categoryId)
    this.change(categoryId);
    next();
  },
  async asyncData({ app, params, query: q }) {
    // console.log(process.env.GRAPHQL_URL)
    let categoryId = q?.categoryId || 50;
    categoryId = typeof categoryId == "string" ? parseInt(categoryId) : categoryId;
    let list = [];
    let ids = [];
    let applications = {};

    const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        categoryId: categoryId,
        identifier: "product",
        page: 1,
      }
    );
    if (status === 200) {
      list = data.lists.lists;
      ids = list.map((item) => item.other?.application);
      ids = Array.from(new Set(ids));
    }
    if (ids.length > 0) {
      const { data: data2, status: state2 } = await getGraphqlClient(
        app.context
      ).rawRequest(listsByIds, {
        ids: ids.join(","),
        projectIdentifier: "application",
      });
      if (state2 == 200) {
        //将数组转为泛型

        data2.listsByIds.forEach((element) => {
          applications[element.id] = element;
        });
      }
    }
    return {
      list: list,
      applications: applications,categoryId
    };
  },
  methods: {
    async change(categoryId) {
      
      let list = [];
      let ids = [];
      let applications = {};
      const { data } = await getGraphqlClient().rawRequest(query, {
        categoryId: categoryId,
        identifier: "product",
        page: 1,
      });
      if (data.lists) {

        list = data.lists.lists;
        console.log(list)
        ids = list.map((item) => item.other.application);
        ids = Array.from(new Set(ids));
      }
      if (ids.length > 0) {
        const { data: data2, status: state2 } =
          await getGraphqlClient().rawRequest(listsByIds, {
            ids: ids.join(","),
            projectIdentifier: "application",
          });
        if (data2.listsByIds) {
          //将数组转为泛型

          data2.listsByIds.forEach((element) => {
            applications[element.id] = element;
          });
        }
      }

      this.list = list;
       this.categoryId = categoryId;
      this.applications = applications;
    },
  },
};
</script>

