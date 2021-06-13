<template>
  <div class="news-wrap">
    <div class="banner">
      <div class="banner-bg">
        <h1>新闻中心</h1>
      </div>
    </div>
    <div class="container">
      <ul class="news-list">
        <template v-for="(item) in list">
          <li :key="item.id">
            <NuxtLink :to="`news/${item.id}`">
              {{ formateDay(item.other.publishTime) }}
              <span class="blue">&nbsp;|&nbsp;</span>
              {{ item.title }}
            </NuxtLink>
          </li>
        </template>
      </ul>
      <div class="my-pagination">
        <el-pagination
        :total="total"
        :ager-count="5"
        :page-size="limit"
        :current-page="page"
        layout="prev, pager, next"
        @current-change="change"
      />
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.my-pagination{
  text-align: center;
  margin: 1rem 0;
}
.banner {
  min-height: 240px;
  background: url("/images/solution/banner.jpg") no-repeat;
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
  flex-direction: column;
}
.banner-bg h1 {
  color: #fff;
  font-size: 40px;
  padding-bottom: 25px;
}
.news-list {
  padding: 34px 15px;
}
.news-list li {
  padding: 34px 48px;
  border: 1px solid #fff;
  font-size: 24px;
}
.news-list li a {
  color: #000;
  text-decoration: none;
}
.news-list li:hover {
  border: 1px solid #f3cd1d;
}

.news-wrap {
  /* min-height: 50vh; */
}
</style>

<script>
import {gql} from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
  query Lists( $categoryId: Int, $identifier: String!,$limit:Int,$page:Int) {
    lists(
        categoryId: $categoryId
        identifier: $identifier,
        limit:$limit,
        page: $page
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

// import posts from '~/apollo/queries/posts'

export default {
  name: "Search",
  data() {
    return {
      identifier:"news",
      page:1,
      list:[],
      limit:10,
      categoryId:0,
      totalPage:1,
      total:1,
      posts: {
        posts: [],
        hasMore: false,
      },
    };
  },

  async asyncData({ app, params }) {
   
   const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        // categoryId: 56,
        categoryId: 0,
        identifier: "news",
        page: 1,
        limit:10
      }
    );
   
    if (status === 200&&data?.lists) {
      const {totalPage,total,lists} = data.lists
      return {
          list:lists,
          totalPage,total
      };
    }
  },
  methods: {
     async change(page){
        this.page = page
        const { data } = await getGraphqlClient().rawRequest(
        query,
        {
            categoryId: 0,
            identifier: "news",
            page: page,
            limit:this.limit
        }
        );
        if (data.lists) {
            this.list=data.lists.lists
       
        }
    },
    formateDay(day) {
      return this.$dayjs(day).format("YYYY/MM/DD");
    },
  },
};
</script>
