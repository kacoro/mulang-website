<template>
  <div class="wrap">

    <div class="banner">
      <div class="banner-cover"></div>
      <img class="banner-cover-bg" width="1920" height="804" alt="Plane in the sky" src="/metsen/images/cover.jpg"
        data-object-fit="cover">
      <div class="banner-containner">
        <h1 class="h1">GUIDING YOU THROUGH THE CHINESE MARKET DIRECT TO THE DOORSTEP!</h1>
        <p>While others wait for overseas freight forwarders to contact them, we act in advance to complete your global
          supply chain with a full range of services, from picking up your freight at a warehouse to port or airport and
          in destination last-mile door delivery.</p>
        <NuxtLink :to="`about`" class="button dark">Get a quote

          <svg class="ms-icon button-anime" aria-hidden="true">
            <use xlink:href="#icon-arrow"></use>
          </svg>
        </NuxtLink>
      </div>

    </div>

    <!-- GLOBAL OCEAN FREIGHT ( FCL, LCL, OOG ) -->
    <div class="section is-style-xl">
      <div class="side-by-side">
        <div class="side-by-side__options image image-first">
          <div class="inner left">
            <h2 class="hidden-sm-and-up title inserted">GLOBAL OCEAN FREIGHT <br />( FCL, LCL, OOG )</h2>
            <div class="side-by-side__image image-cover">
              <img width="945" height="450" src="/metsen/images/p3.png" class="attachment-w_960_nc size-w_960_nc"
                alt="man-with-boxes" decoding="async" loading="lazy" title="man-with-boxes"
                sizes="(max-width: 945px) 100vw, 945px">
            </div>
            <div class="content">
              <h2 class="hidden-xs-only title ">GLOBAL OCEAN FREIGHT <br />( FCL, LCL, OOG )</h2>
              <p class="content-text">Ocean FCL (Full Container Load), LCL (Less than Container Load),
                and OOG (Out-of-Gauge) cargo services provide businesses with flexible and reliable options for
                transporting goods across the ocean and accessing global markets.
              </p>
              <NuxtLink :to="`about`" class="button">Get a quote
                <svg class="ms-icon button-anime" aria-hidden="true">
                  <use xlink:href="#icon-arrow"></use>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div aria-hidden="true" class="block-spacer md"></div>
        <div class="container ">
          <el-row :gutter="35" class="image-box">
            <el-col :lg="8" :md="8" :sm="12" :xs="24" class="image-box-item">
              <div class="grid-content bg-purple">
                <div class="image-cover">
                  <el-image class="image" src="/metsen/images/221.jpg" fit="cover" lazy></el-image>
                </div>
                <h3 class="wp-block-heading">FCL</h3>
                <p>Ship large quantities of goods across the ocean in a single, secure container with our Full
                  Container Load (FCL) service.</p>
              </div>
            </el-col>
            <el-col :lg="8" :md="8" :sm="12" :xs="24" class="image-box-item">
              <div class="grid-content bg-purple">
                <div class="image-cover">
                  <el-image class="image" src="/metsen/images/2222.jpg" fit="cover" lazy></el-image>
                </div>
                <h3 class="wp-block-heading">LCL</h3>
                <p>Consolidate your smaller volume freight into our containers with our Less than Container Load
                  (LCL) service and save on shipping costs. This budget-friendly option is a quick solution for your
                  cargo needs.</p>
              </div>
            </el-col>
            <el-col :lg="8" :md="8" :sm="24" :xs="24" class="image-box-item">
              <div class="grid-content bg-purple">
                <div class="image-cover ">
                  <el-image class="image image3" src="/metsen/images/2223.jpg" fit="cover" lazy></el-image>
                </div>
                <h3 class="wp-block-heading">OOG</h3>
                <p>Found your cargo too big to load on a dry container? Ship it quickly and safely on an open-top or
                  flat-rack container.</p>
              </div>
            </el-col>
          </el-row>
        </div>


      </div>
    </div>
    <div aria-hidden="true" class="block-spacer md"></div>


    <div class="slider ">

      <el-row>
        <el-col :lg="12" :md="12" :sm="24" :xs="24">
          <div class="grid-content bg-">
            <h2>Cases&nbsp;Solutions</h2>
            <el-row :gutter="10">
              <el-col :sm="12" :xs="24">
                <div class="button" @click="index = 1">OOG Shipment<svg class="ms-icon button-anime" aria-hidden="true">
                    <use xlink:href="#icon-arrow"></use>
                  </svg>
                </div>
              </el-col>
              <el-col :sm="12" :xs="24">
                <div class="button" @click="index = 2">TRANSPORTATION<svg class="ms-icon button-anime" aria-hidden="true">
                    <use xlink:href="#icon-arrow"></use>
                  </svg>
                </div>
              </el-col>
              <el-col :sm="12" :xs="24">
                <div class="button" @click="index = 3">Last-Mile Delivery<svg class="ms-icon button-anime" aria-hidden="true">
                    <use xlink:href="#icon-arrow"></use>
                  </svg>
                </div>
              </el-col>
              <el-col :sm="12" :xs="24">
                <div class="button" @click="index = 4">Small Truck Load (Sprinters/Box Trucks/Straight Trucks)<svg class="ms-icon button-anime" aria-hidden="true">
                    <use xlink:href="#icon-arrow"></use>
                  </svg>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :lg="12" :md="12" :sm="24" :xs="24">
          <div class="grid-content slider-main">
            <el-image class="image__placeholder" style="width:100%" src="/metsen/images/case1.png" fit="contain"
              lazy></el-image>
            <div class="slider-main-content ">
              <transition name="el-fade-in-linear">
                <div class="transition-box" v-show="index == 1">
                  <el-image class="image " src="/metsen/images/case1.png" fit="contain"></el-image>
                </div>
              </transition>
              <transition name="el-fade-in-linear">
                <div class="transition-box" v-show="index == 2">
                  <el-image class="image " src="/metsen/images/case2.png" fit="contain"></el-image>
                </div>
              </transition>
              <transition name="el-fade-in-linear">
                <div class="transition-box" v-show="index == 3">
                  <el-image class="image " src="/metsen/images/case3.png" fit="contain"></el-image>
                </div>
              </transition>
              <transition name="el-fade-in-linear">
                <div class="transition-box" v-show="index == 4">
                  <el-image class="image " src="/metsen/images/case4.png" fit="contain"></el-image>
                </div>
              </transition>
            </div>
          </div>
        </el-col>
      </el-row>

    </div>


    <div class="section-1">
      <div class="section-1-content">
        <div class="section-1-content-text">
          <div>
            <img class="pic" src="/images/index/about.png" alt="" />
          </div>
          <div>
            <h1>关于CST</h1>
            <p style="text-align: left;">
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
    <home-solution-tabs></home-solution-tabs>
    <div class="section-news">
      <h1 class="blue">新闻中心</h1>
      <div class="section-news-content">
        <div class="pic">
          <img src="/images/index/mediademo.png" alt="" />
        </div>
        <template v-if="list">
          <client-only>
            <div v-if="list.length > 0" class="section-news-first">
              <h4>
                <NuxtLink :to="`news/${list[0].id}`">{{ list[0].title }}</NuxtLink>
              </h4>

              <NuxtLink :to="`news/${list[0].id}`">
                <div v-html="list[0].textSnippet"></div>
              </NuxtLink>
              <NuxtLink :to="`news/${list[0].id}`" class="button radius mid">
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
import "assets/metsen/css/index.scss";
import { gql } from "graphql-request";
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
      // show: true,
      index: 0,
      list: []
    };
  },
  // mounted: function () {
  //   this.$nextTick(() => {
  //     this.timer = setTimeout(() => {
  //       this.show = false;
  //       //console.log("settimeout")
  //     }, 10 * 1000);
  //   });
  // },
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
        limit: 3
      }
    );

    if (status === 200 && data?.lists) {
      const { lists } = data.lists
      return {
        list: lists,
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