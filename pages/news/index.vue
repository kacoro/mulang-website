<template>
  <div class="news-list">
    <div class="news-list__banner">
      <div class="news-list__banner__bg">
        <h1>新闻中心</h1>
      </div>
    </div>
    <div class="container">
      <ul class="news-list__list">
        <template v-for="item in list">
          <li :key="item.id">
            <NuxtLink :to="`news/${item.id}`" class="news-list__list__link">
              <div class="news-list__list__img">
                <img
                  :src="
                    item.other.thumb
                      ? item.other.thumb
                      : item.imgSnippet||`/images/news/default.jpg`
                  "
                />
              </div>
              <p class="news-list__list__link__date">{{ formateDay(item.other.publishTime) }}</p>
              <p class="news-list__list__link__title">{{ item.title }}</p>
              <p class="news-list__list__link__note">{{item.textSnippet }}...</p>
              <p class="news-list__list__link__note">
                  <NuxtLink
              :to="`news/${list[0].id}`"
              class="button radius mid"
            >
              了解更多
            </NuxtLink>
              </p>
            </NuxtLink>
          </li>
        </template>
      </ul>
      
    </div>
    <div class="my-pagination">
        <el-pagination
          background
          :total="total"
          :pager-count="4"
          :page-size="limit"
          :current-page="page"
          layout="prev, pager, next"
          @current-change="change"
        />
      </div>
  </div>
</template>
<style lang="scss">
.news-list {
  &__banner {
    min-height: 240px;
    background: url("/images/news/banner.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    &__bg {
      min-height: 5rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h1 {
        color: #fff;
        font-size: 36px;
        padding-left: 0.6em;
        line-height: 1;
        border-left: solid 5px #f3cd1d;
      }
    }
  }
  &__list {
    padding: 34px 0px;
    display: flex;
    flex-wrap: wrap;
    & li {
      width: 50%;
      box-sizing: border-box;
      font-size: 24px;
      margin:.4rem 0;
    }
    &__link {
      padding: 20px;
      border: 1px solid #fff;
      display: block;
      text-decoration: none;
      transition:  all .2s ease-in;
      &:hover {
        transform: translateY(-3%);
        // border: 1px solid #f3cd1d;
      }
      & p{
        padding-top: 1em;
        color: #19459a;
      }
      &__date{
          font-size: 24px;
      }
      &__title{
          font-size: 24px;
          font-weight: bold;
      }
      &__note{
          font-size: 18px;
      }
      @media screen and (max-width: 1024px){
        padding:15px;
         &__date{
          font-size: 18px;
      }
      &__title{
          font-size: 18px;
          font-weight: bold;
      }
      &__note{
          font-size: 14px;
      }
    }
    @media screen and (max-width: 768px){
      padding:10px;
         &__date{
          font-size: 14px;
        }
        &__title{
            font-size: 14px;
            font-weight: bold;
        }
        &__note{
            font-size: 12px;
        }
    }
    }
    &__img {
      width: 100%;
      overflow: hidden;
      display: block;
      & img {
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}



</style>

<script>
import { gql } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
  query Lists($categoryId: Int, $identifier: String!, $limit: Int, $page: Int) {
    lists(
      categoryId: $categoryId
      identifier: $identifier
      limit: $limit
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
        textSnippet
        imgSnippet
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
      identifier: "news",
      page: 1,
      list: [],
      limit: 4,
      categoryId: 0,
      totalPage: 1,
      total: 1,
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
        limit: 4,
      }
    );

    if (status === 200 && data?.lists) {
      const { totalPage, total, lists } = data.lists;
      return {
        list: lists,
        totalPage,
        total,
      };
    }
  },
  methods: {
    async change(page) {
      this.page = page;
      const { data } = await getGraphqlClient().rawRequest(query, {
        categoryId: 0,
        identifier: "news",
        page: page,
        limit: this.limit,
      });
      if (data.lists) {
        this.list = data.lists.lists;
      }
    },
    formateDay(day) {
      return this.$dayjs(day).format("YYYY-MM-DD");
    },
  },
};
</script>
