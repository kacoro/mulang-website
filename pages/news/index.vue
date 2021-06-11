<template>
  <div class="news-wrap">
    <div class="banner">
      <div class="banner-bg">
        <h1>新闻中心</h1>
      </div>
    </div>
    <div class="container">
      <ul class="news-list">
        <template v-for="(post, index) in posts.posts">
          <li v-if="index != 0" :key="post.id">
            <NuxtLink :to="`news/${post.id}`">
              {{ formateDay(post.createdAt) }}
              <span class="blue">&nbsp;|&nbsp;</span>
              {{ post.title }}
            </NuxtLink>
          </li>
        </template>
      </ul>
      <div class="my-pagination">
        <el-pagination
        :total="1000"
        pager-count="5"
        :page-size="10"
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
import {  gql,  rawRequest } from "graphql-request";
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
      page:1,
      posts: {
        posts: [],
        hasMore: false,
      },
    };
  },

  async asyncData({ app, params }) {
    // console.log(process.env.GRAPHQL_URL)

    const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        limit: 4,
      }
    );
    if (status === 200) {
      return {
        posts: data.posts,
        hasMore: data.hasMore,
      };
    }
  },
  methods: {
    change(){

    },
    formateDay(day) {
      return this.$dayjs(day).format("MM/DD");
    },
  },
};
</script>
