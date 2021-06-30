<template>
  <div class="wrap">
    <div class="temp-banner" v-show="show">
      <img src="/images/index/banner-1.jpg" alt="" class="pic" width="100%" />
    </div>
    <div class="banner">
      <img src="/images/index/banner.jpg" alt="" class="pic" width="100%" />
    </div>
    <div class="section-1">
      <div class="section-1-content">
        <div class="section-1-content-text">
          <div>
            <img class="pic" src="/images/index/about.png" alt="" />
          </div>
          <div>
            <h1>关于CST</h1>
            <p style="text-align: left;">康索特成立于2006年10月，作为业内领先的AIoT产品和解决方案提供商，端云协同应用能力是康索特的核心优势，也是人工智能和物联网产生价值的关键。我们专注于通用园区和城市
              治理领域，连接数据、算法及应用，为客户提供领先的AIoT软硬件产品和智能化应用解决方案。
            </p>
            <NuxtLink :to="`about`" class="button radius">了解更多 </NuxtLink>
          </div>
        </div>

        <div class="about-detail">
          <div class="item item-1">
            <h1>使命</h1>
            <p>普惠AI应用，让美好生活触手可及</p>
          </div>
          <div class="item item-2" style="flex: 1; min-width: 33%">
            <h1>愿景</h1>
            <p>成为全球领先的AIoT产品和解决方案提供商</p>
          </div>
          <div class="item item-3">
            <h1>价值观</h1>
            <p>专业致胜 阳光平等 以客户为中心</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-yunfan">
      <div class="section-left">
        <img src="/images/index/source-1.png" class="pic" />
      </div>

      <div class="yunfan-content">
        <h1 class="blue">云帆创新应用平台</h1>
        <h2 class="blue">—— 善用技术</h2>
        <p>
          未来的城市微单元、社会治理、政企业务流程都需要智能化，康索特掌握了能够高效率、高性价比帮助客户实现智能化转型升级的能力。康索特基于“大匠”、“云启”两大核心技术平台，以及对行业场景需求的深刻理解，进一步提升了人工智能算法及物联传感技术在解决方案中的高效性及场景适应性。
          通过云帆创新应用平台，实现业务场景数字化、智能化改造，帮助客户降本增效。通过挖掘大数据潜能，持续为客户创造价值。
        </p>
        <NuxtLink :to="`yunfan`" class="button radius"> 了解更多 </NuxtLink>
      </div>
    </div>
    <div class="section-solution">
      <div class="section-solution-header">
        <div class="item">
          <img class="pic" src="/images/index/1.jpg" />
          <h2>云启<span>（智能化）</span></h2>
          <p>
            超多品类和超高性能的算法连接能力，打造一套算法调度平台，实现业务流智能化升级
          </p>
          <NuxtLink :to="`yunqi`" class="button radius"> 了解更多 </NuxtLink>
        </div>
        <div class="item">
          <img class="pic" src="/images/index/2.jpg" />
          <h2>大匠<span>（数字化）</span></h2>
          <p>
            超大规模和超高效率的数据连接能力，构建一张智能感知网络，实现业务流数字化改造
          </p>
          <NuxtLink :to="`dajiang`" class="button radius"> 了解更多 </NuxtLink>
        </div>
        <div class="item">
          <img class="pic" src="/images/index/3.jpg" />
          <h2>云帆<span>（平台化）</span></h2>
          <p>致力于为中小企业客户<br />提供一站式轻应用云接入方案</p>
          <NuxtLink :to="`yunfan`" class="button radius"> 了解更多 </NuxtLink>
        </div>
      </div>
    </div>
    <home-solution-tabs ></home-solution-tabs>
    <div class="section-news">
      <h1 class="blue">新闻中心</h1>
      <div class="section-news-content">
        <div class="pic">
          <img src="/images/index/mediademo.png" alt="" />
        </div>
        <template v-if="list">
          <client-only>
          <div v-if="list.length > 0" class="section-news-first">
              <h4><NuxtLink :to="`news/${list[0].id}`">{{ list[0].title }}</NuxtLink></h4>
            
            <NuxtLink :to="`news/${list[0].id}`">
              <div v-html="list[0].textSnippet"></div>
            </NuxtLink>
            <NuxtLink
              :to="`news/${list[0].id}`"
              class="button radius mid"
            >
              了解更多
            </NuxtLink>
          </div>
          </client-only>
          <ul class="section-news-list">
            <template v-for="(post, index) in list">
              <li v-if="index != 0" :key="post.id">
                <NuxtLink :to="`news/${post.id}`">
                  {{ formateDay(post.publishTime) }}
                  <span class="blue">&nbsp;|&nbsp;</span>
                  {{ post.title }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </template>
      </div>
    </div>
    <div class="container">
      <div></div>
    </div>
  </div>
</template>

<script>
import "assets/css/index.scss";
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
  computed: {
    site() {
      return this.$store.state.site;
    },
  },
  name: "Search",
  data() {
    return {
      timer: null,
      show: true,
      list:[]
    };
  },
  mounted: function () {
    this.$nextTick(() => {
      this.timer = setTimeout(() => {
        this.show = false;
        //console.log("settimeout")
      }, 10 * 1000);
    });
  },
  destroyed: function () {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    console.log("destroy");
  },
  async asyncData({ app, params, context }) {
    const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        // categoryId: 56,
        categoryId: 0,
        identifier: "news",
        page: 1,
        limit:3
      }
    );
   
    if (status === 200&&data?.lists) {
      const {lists} = data.lists
      return {
          list:lists,
      };
    }
  },
  methods: {
    formateDay(day) {
      return this.$dayjs(day).format("MM/DD");
    },
  },
  head() {
    if (this.site?.seo) {
      const { title, keywords, description } = this.site.seo;
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
};
</script>