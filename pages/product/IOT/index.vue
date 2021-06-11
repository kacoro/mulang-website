<template>
  <div class="product-wrap">
    <div class="banner">
        <div class="banner-bg" >
             <h1>IOT产品</h1>
        </div>
    </div>
    <div class="container">
      <div class="product-content">
        <ul class="product-list">
          <li class="product-list-item" :key="index" v-for=" item,index in list">
            <div>
              <h2>{{item.title}}</h2>
              <div v-html="item.other.note"></div>
            </div>

            <img class="pic" :src="item.other.thumb" />
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
.banner{
    min-height: 240px;
    background: url('/images/product/banner.jpg') no-repeat;
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
}
.banner-bg h1{
    color: #fff;
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
        categoryId: 50,
        identifier: "product",
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

