<template>
  <div class="news-detail">
    <div class="news-detail-content">
      <div v-if="content" class="container">
        <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/news' }"
            >新闻动态</el-breadcrumb-item
          >
          <el-breadcrumb-item>公司动态</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="news-detail__header">
          <h3 class="blue">{{ content.title }}</h3>
          <h4 style="display: inline-block">
            发布时间：{{ formateDay(content.publishTime) }}
            <i class="el-icon-view"></i>{{ content.hits }}
          </h4>
        </div>

        <div class="editor news-detail__editor" v-html="content.content"></div>

        <div>
          <ul class="prev-next">
            <li v-if="prev">
              <span class="text">上一篇：</span>
              <div>
                <nuxt-link :to="`${prev.id}`">{{ prev.title }}</nuxt-link>
                <p class="prev-next__time" v-if="next&&next.publishTime">
                  {{ formateDay2(next.publishTime) }}
                </p>
              </div>
            </li>
            <li class="prev-next__back">
              <nuxt-link class="button primary mid" to="/news"
                >返回新闻动态</nuxt-link
              >
            </li>
            <li v-if="next">
              <span class="text">下一篇：</span>
              <div>
                <nuxt-link :to="`${next.id}`">{{ next.title }}</nuxt-link>
                <p class="prev-next__time" v-if="next&&next.publishTime">
                  {{ formateDay2(next.publishTime) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.news-detail {
  .el-icon-view {
    font-size: 1em;
    margin-left: 20px;
    margin-right: 10px;
  }
  .breadcrumb {
    padding: 0 30px;
    padding-bottom: 25px;

    font-size: 18px;
    .el-breadcrumb__inner,
    .el-breadcrumb__inner a,
    .el-breadcrumb__inner.is-link {
      font-size: 18px;
      font-weight: normal;
    }
  }

  &__header {
    border-bottom: 1px solid #19459a;
    padding: 0 30px;
    margin-bottom: 30px;
  }
  &__editor {
    padding: 0 30px;
  }
  @media screen and (max-width: 768px) {
       &__header, .breadcrumb,&__editor  {
          padding: 0 15px;
        }
         .breadcrumb{
           padding-bottom: 15px;
           .el-breadcrumb__inner,
    .el-breadcrumb__inner a,
    .el-breadcrumb__inner.is-link {
      font-size: 13px;
  
    }
         }
    }
  .prev-next {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    padding: 30px 15px;

    border-top: 1px solid #19459a;
    &__back {
      flex: 1;
      white-space: nowrap;
      color: #fff;
      display: block !important;
    }
    &__time {
      font-weight: normal;
      padding-top: 0.5em;
    }
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  .prev-next li {
    padding: 15px;
    font-weight: bold;
    display: flex;
    .text {
      flex: 1;
      white-space: nowrap;
    }
    a:hover {
      color: #19459a;
    }
    .button:hover {
      color: #fff;
    }
  }
  .news-detail-content {
    padding: 1rem 0px;
    min-height: 50vh;
    box-sizing: border-box;
    max-width: 1089px;
    margin: 0 auto;
  }
  h3 {
    padding-bottom: 20px;
  }
  h4 {
    font-weight: normal;
    padding-bottom: 20px;
  }
}
</style>
<script>
import { gql } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";

const query = gql`
  query List($id: Int!, $projectIdentifier: String!, $isPrevNext: Boolean) {
    list(
      id: $id
      projectIdentifier: $projectIdentifier
      isPrevNext: $isPrevNext
    ) {
      content
      seo {
        title
        keywords
        description
        __typename
      }
      prev {
        id
        title
        publishTime
      }
      next {
        id
        title
        publishTime
      }
      __typename
    }
  }
`;

const updateListHits = gql`
  mutation updateListHits($id: Int!, $projectIdentifier: String!) {
    updateListHits(id: $id, projectIdentifier: $projectIdentifier)
  }
`;
export default {
  data() {
    return {
      content: null,
      next: null,
      prev: null,
      id: null,
    };
  },
  async mounted() {
    const { data } = await getGraphqlClient().rawRequest(updateListHits, {
      id: this.id,
      projectIdentifier: "news",
    });
  },
  async asyncData({ app, params }) {
    const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        id: parseInt(params.id),
        projectIdentifier: "news",
        isPrevNext: true,
      }
    );

    if (status === 200) {
      return {
        content: data.list.content,
        next: data.list.next,
        prev: data.list.prev,
        id: parseInt(params.id),
        seo: data.list.seo,
      };
    }
  },

  head() {
    console.log(this.seo)
    if (this.seo) {
      const { title, keywords, description } = this.seo;
      return {
        title: title,
        meta: [
          { hid: "description", name: "description", content: description },
          { hid: "keywords", name: "keywords", content: keywords },
        ],
      };
    } else
      return {
        title: this.content ? `${this.content.title}` : "Loading",
      };
  },

  methods: {
    formateDay(day) {
      return this.$dayjs(day).format("YYYY / MM / DD");
    },
    formateDay2(day) {
      return this.$dayjs(parseInt(day)).format("YYYY / MM / DD");
    },
  },
};
</script>