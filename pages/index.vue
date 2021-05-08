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
            <p>
              康索特成立于2006年10月，作为业内领先的AIoT产品和解决方案提供商，端云协同应用能力是康索特的核心优势，也是人工智能和物联网产生价值的关键。我们专注于通用园区和城市
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
            <p>善用技术，达人达己</p>
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
          <h2>大匠<span>（数学化）</span></h2>
          <p>
            超大规模和超高效率的数据连接能力，构建一张智能感知网络，实现业务流数字化改造
          </p>
          <NuxtLink :to="`dajiang`" class="button radius"> 了解更多 </NuxtLink>
        </div>
        <div class="item">
          <img class="pic" src="/images/index/3.jpg" />
          <h2>索特轻量云</h2>
          <p>致力于为中小企业客户<br>提供一站式轻应用云接入方案</p>
          <NuxtLink :to="`yunfan`" class="button radius"> 了解更多 </NuxtLink>
        </div>
      </div>
    </div>
    <div class="section-solution-content">
      <div class="solution-left">
        <h1>解决方案</h1>
        <ul class="solution-nav">
          <li class="active">
            <h2 class="blue">通用园区</h2>
            <p>为人们提供学习、工作和生活场景的极致体验</p>
          </li>
          <li>
            <h2 class="blue">智慧城市</h2>
            <p>打造“深度感知、数据驱动”智慧城市标杆</p>
          </li>
        </ul>
        <h2 class="more">MORE</h2>
      </div>

      <div class="solution-right">
        <ul>
          <li>
            <div class="bg">
              <img src="/images/index/s1.jpg" alt="" class="img-gray" />
            </div>
            <div class="solution-right-content">
              <h1>01</h1>
              <dl><span>通用园区</span> | <span>园区管理</span></dl>
              <h3>茅台集团</h3>
              <p>
                以人为中心构建全流程智慧通行平台，<br />实现园区内部闭环管理，打造标杆智慧总部园区
              </p>
              <NuxtLink :to="`solution`" class="button radius mid">
                了解更多
              </NuxtLink>
            </div>
          </li>
          <li>
            <div class="bg">
              <img src="/images/index/s2.jpg" alt="" class="" />
            </div>
            <div class="solution-right-content">
              <h1>02</h1>
              <dl><span>通用园区</span> | <span>智能楼宇</span></dl>
              <h3>茅台集团</h3>
              <p>
                软硬一体化组件式通行，通过率超99%
                <br />单人通行时间小于1秒，真正实现无感通行
              </p>
              <NuxtLink :to="`solution`" class="button radius mid">
                了解更多
              </NuxtLink>
            </div>
          </li>
          <li>
            <div class="bg">
              <img src="/images/index/s3.jpg" alt="" class="" />
            </div>
            <div class="solution-right-content">
              <h1>03</h1>
              <dl><span>通用园区</span> | <span>园区管理</span></dl>
              <h3>茅台集团</h3>
              <p>融合园区人、车、设备<br />依托AIoT实现园区智慧化互联互通</p>
              <NuxtLink :to="`solution`" class="button radius mid">
                了解更多
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="section-news">
      <h1 class="blue">新闻中心</h1>
      <div class="section-news-content">
        <div class="pic">
          <img src="/images/index/mediademo.png"  alt="" />
        </div>
      <template v-if="posts && posts.posts">
        <div v-if="posts.posts.length > 0" class="section-news-first">
          <NuxtLink :to="`news/${posts.posts[0].id}`">
            <h4>{{ posts.posts[0].title }}</h4>
          </NuxtLink>
          <NuxtLink :to="`news/${posts.posts[0].id}`">
            <div v-html="posts.posts[0].textSnippet"></div>
          </NuxtLink>
          <NuxtLink :to="`news/${posts.posts[0].id}`" class="button radius mid">
                了解更多
              </NuxtLink>
        </div>
        <ul class="section-news-list">
          <template v-for="(post, index) in posts.posts">
            <li v-if="index != 0" :key="post.id">
              <NuxtLink :to="`news/${post.id}`">
               {{formateDay(post.createdAt)}} <span class="blue">&nbsp;|&nbsp;</span>
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
import "assets/css/index.css";
import { request, gql, GraphQLClient, rawRequest } from "graphql-request";

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
      timer: null,
      show: true,
      posts: {
        posts: [],
        hasMore: false,
      },
     
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
    // console.log(process.env.GRAPHQL_URL)
    console.log(app.context.req);
    let headers = {};
    if (app.context.req) {
      //typeof window === "undefined"
      headers = {
        cookie: app.context.req ? app.context.req.headers.cookie : undefined,
      };
    }
    console.log("process",process.env.GRAPHQL_URL)
    const graphQLClient = new GraphQLClient(
      process.env.GRAPHQL_URL || '/graphql',
      // "http://192.168.56.1:4000/graphql",
      {
        credentials: "include",
        mode: "cors",
        headers,
        // (typeof window === "undefined"
        //     ? ctx?.req?.headers.cookie
        //     : undefined) || "",
      }
    );
    const { data, status } = await graphQLClient.rawRequest(query, {
      limit: 4,
    });
  
  
    if (status === 200) {
      return {
        posts: data.posts,
        hasMore: data.hasMore,
      
      };
    }
  },
  methods: {
    formateDay(day){
      return  this.$dayjs(Number(day)).format('MM/DD');
    },  
   
  },
};

</script>