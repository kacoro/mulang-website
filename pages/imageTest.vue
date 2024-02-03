<template>
  <div class="wrap">

    <div class="banner">
      <div class="banner-cover"></div>
      <el-image class="image banner-cover-bg" src="/metsen/images/cover.jpg" fit="cover" lazy>
         <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
      </el-image>
      <!-- <img class="banner-cover-bg"  alt="Plane in the sky" src="/metsen/images/cover.jpg" -->
      <div class="banner-containner">
        <h1 class="h1">METSEN GUIDING YOU THROUGH THE CHINESE MARKET DIRECT TO THE DOORSTEP!</h1>
        <p>While others wait for overseas freight forwarders to contact them, we act in advance to complete your global
          supply chain with a full range of services, from picking up your freight at a warehouse to port or airport and
          in destination last-mile door delivery.</p>
        <NuxtLink :to="`contact`" class="button dark">Get a quote

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
            <el-image class="side-by-side__image image-cover" src="/metsen/images/p3.jpg" fit="cover" lazy>
            <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
          </el-image>
            <!-- <div class="side-by-side__image image-cover">
              <img width="945" height="450" src="/metsen/images/p3.jpg" class="attachment-w_960_nc size-w_960_nc"
                alt="man-with-boxes" decoding="async" loading="lazy" title="man-with-boxes"
                sizes="(max-width: 945px) 100vw, 945px">
            </div> -->
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
                  <el-image class="image" src="/metsen/images/221.jpg" fit="cover" lazy>
                    <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
                  </el-image>
                </div>
                <h3 class="wp-block-heading">FCL</h3>
                <p>Ship large quantities of goods across the ocean in a single, secure container with our Full
                  Container Load (FCL) service.</p>
              </div>
            </el-col>
            <el-col :lg="8" :md="8" :sm="12" :xs="24" class="image-box-item">
              <div class="grid-content bg-purple">
                <div class="image-cover">
                  <el-image class="image" src="/metsen/images/2222.jpg" fit="cover" lazy>
                    <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
                  </el-image>
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
                  <el-image class="image image3" src="/metsen/images/2223.jpg" fit="cover" lazy>
                    <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
                  </el-image>
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


    <div class="silder index-silder">

      <el-row>
        <el-col :lg="12" :md="12" :sm="24" :xs="24">
          <div class="grid-content ">

            <h2>Cases Processing <br>Solutions</h2>


            <el-row :gutter="10" class="index-slilde-left">

              <el-col :sm="12" :xs="24">
                <div class="button big odd" :class="{ active: index == 1 }" @click="index = 1">OOG Shipment
                  <svg class="ms-icon button-anime" aria-hidden="true">
                    <use xlink:href="#icon-arrow"></use>
                  </svg>
                </div>
              </el-col>
              <el-col :sm="12" :xs="24">
                <div class="button big " :class="{ active: index == 2 }" @click="index = 2">TRANSPORTATION<svg
                    class="ms-icon button-anime" aria-hidden="true">
                    <use xlink:href="#icon-arrow"></use>
                  </svg>
                </div>
              </el-col>
              <el-col :sm="12" :xs="24">
                <div class="button big odd" :class="{ active: index == 3 }" @click="index = 3">Last-Mile Delivery<svg
                    class="ms-icon button-anime" aria-hidden="true">
                    <use xlink:href="#icon-arrow"></use>
                  </svg>
                </div>
              </el-col>
              <el-col :sm="12" :xs="24">
                <div class="button big" :class="{ active: index == 4 }" @click="index = 4">
                  <span class="hidden-xs-only ">Small Truck Load (Sprinters/Box Trucks/Straight Trucks)</span>
                  <span class="hidden-sm-and-up "> Small Truck Load</span>
                  <svg class="ms-icon button-anime" aria-hidden="true">
                    <use xlink:href="#icon-arrow"></use>
                  </svg>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :lg="12" :md="12" :sm="24" :xs="24">
          <div class="grid-content slider-main">
            <el-image class="image__placeholder" style="width:100%" src="/metsen/images/case1.jpg" fit="contain"
              lazy>
              <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">

            </el-image>

            <div class="slider-main-content ">
              <transition name="el-fade-in">
                <div class="transition-box" v-show="index == 1">
                  <div class="slide-content">
                    <h6 class="slide-title h6-title">OOG Shipment</h6>
                    <div class="slide-text">Metsen provide Dismantling/ Relocation/ Set-up / Professional Packing of heavy
                      objects and Precision equipment. Relocation of factory and office. International and Domestic
                      transportation, Nationwide work is possible. .</div>
                  </div>
                  <el-image class="image " src="/metsen/images/case1.jpg" fit="cover">
                    <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
                  </el-image>
                </div>
              </transition>
              <transition name="el-fade-in">
                <div class="transition-box" v-show="index == 2">
                  <div class="slide-content">
                    <h6 class="slide-title h6-title">TRANSPORTATION</h6>
                    <div class="slide-text">
                      Metsen provide Full Truckload, is a type of transportation in which a truck carries only one
                      dedicated shipment, saving the journey for that shipment alone. STL is the perfect alternative to
                      LTL, which allows for fast inland transporting of compact cargo. The service utilizes smaller
                      vehicles like sprinters, box trucks, or straight trucks. </div>
                  </div>
                  <el-image class="image " src="/metsen/images/case2.jpg" fit="cover">
                    <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
                  </el-image>
                </div>
              </transition>
              <transition name="el-fade-in">
                <div class="transition-box" v-show="index == 3">
                  <div class="slide-content">
                    <h6 class="slide-title h6-title">Last-Mile Delivery
                    </h6>
                    <div class="slide-text">
                      Last-mile delivery is the last but not least link in your global supply chain. It is the final
                      journey your shipment does, moving from the pickup location or warehouse to the customer’s doorstep.
                    </div>
                  </div>
                  <el-image class="image " src="/metsen/images/case3.jpg" fit="cover">
                    <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
                  </el-image>
                </div>
              </transition>
              <transition name="el-fade-in">
                <div class="transition-box" v-show="index == 4">
                  <div class="slide-content">
                    <h6 class="slide-title h6-title">Small Truck Load (Sprinters/Box Trucks/Straight Trucks)</h6>
                    <div class="slide-text">
                      STL is the perfect alternative to LTL, which allows for fast inland transporting of compact cargo.
                      The service utilizes smaller vehicles like sprinters, box trucks, or straight trucks.
                    </div>
                  </div>
                  <el-image class="image " src="/metsen/images/case4.jpg" fit="cover">
                    <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
                  </el-image>
                </div>
              </transition>
            </div>
          </div>
        </el-col>
      </el-row>

    </div>
    <div aria-hidden="true" class="block-spacer md"></div>
    <div class="section right">
      <el-image class="image-cover" src="/metsen/images/3.jpg" fit="cover" lazy>
        <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
      </el-image>
      <div class="section-content">
        <h2 class="section-content-title">Global Air Freight</h2>
        <p class="side-by-side__content-text">
          When time matters, we stay up-to-date and have the
          expertise to handle all your air shipments, providing the confidence and flexibility
          to transport your cargo anywhere in the world. We manage all administrative and
          documentation procedures, including customs clearance, license requirements,
          security, and compliance with local regulations</p>
      </div>
    </div>
    <div class="section  left">
      <el-image class="image-cover" src="/metsen/images/4.jpg" fit="cover" lazy>
        <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
      </el-image>
      <div class="section-content">
        <h2 class="section-content-title">THIRD-PARTY LOGISTICS</h2>
        <p class="side-by-side__content-text">
          Fill the final gap in your supply chain and increase efficiency while minimizing risks with US InBound’s network
          of logistics partners. Our best-in-class third-party logistics solutions handle virtually any cargo with
          scheduled delivery, all without straining your budget or leaving you vulnerable to market volatility risks.</p>
      </div>
    </div>
    <!--  -->
    <div aria-hidden="true" class="block-spacer md"></div>
    <div class="bg-gray">
      <div aria-hidden="true" class="block-spacer md"></div>
      <div class="container ">
        <h2 class="side-by-side__title">Multimodal Transportation</h2>
      </div>
      <div class="section right center ">
        <el-image class="image-cover" src="/metsen/images/222.jpg" fit="cover" lazy>
          <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
        </el-image>
        <div class="section-content">
          <h3 class="section-content-title">Container Drayage</h3>
          <p class="side-by-side__content-text">
            Metsen provides comprehensive container trucking and delivery services for any specialized shipments. We can
            pick up your cargo from any port or rail yard and transport it to your desired destination quickly and safely.
          </p>
        </div>
      </div>
      <div class="section left center ">
        <el-image class="image-cover" src="/metsen/images/7772.jpg" fit="cover" lazy>
          <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
        </el-image>
        <div class="section-content">
          <h3 class="section-content-title">Temperature Sensitive + Flatbeds</h3>
          <p class="side-by-side__content-text">
            Committed to providing first-class integrated container trucking and delivery services, our team of experts
            will select the appropriate vehicle among our modern and specialized fleet to transport any type of freight,
            including temperature-sensitive, time-sensitive, high-security, oversized, flatbed, and hazardous materials,
            with utmost care and excellence.
          </p>
        </div>
      </div>
      <div aria-hidden="true" class="block-spacer md"></div>
    </div>
    <!--  -->
    <div aria-hidden="true" class="block-spacer md"></div>
    <div class="section right">
      <el-image class="image-cover" src="/metsen/images/go.jpg" fit="cover" lazy>
        <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
      </el-image>
      <div class="section-content">
        <h2 class="section-content-title">GOING THE EXTRA MILE</h2>
        <p class="content-text">
          Driven by just-in-time delivery philosophy, we carefully strategize the most optimal routes and transportation
          modes to ensure a successful delivery from pickup to drop-off. We integrate our frequent shipping services with
          our land-based operations to provide secure, dependable, and cost-efficient solutions for individuals and
          businesses of all scopes and sizes.</p>
      </div>
    </div>
    <!--  -->
    <div class="section left">
      <el-image class="image-cover" src="/metsen/images/warehouse.jpg" fit="cover" lazy>
        <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
      </el-image>
      <div class="section-content">
        <h2 class="section-content-title">WAREHOUSING</h2>
        <p class="content-text">
          By combining a full range of logistics services with regular and bonded warehousing solutions, we can handle
          virtually any supply chain, gaining your delivery speed and customer service to a new level. We provide
          cost-effective storage, cross-docking, and palletizing services to maximize your supply chain’s efficiency and
          reduce business expenses.</p>
      </div>
    </div>
    <div class="container ">
      <h2 class="side-by-side__title">CUSTOMS & COMPLIANCE</h2>
    </div>
    <div class="section right center ">
      <el-image class="image-cover" src="/metsen/images/1.jpg" fit="cover" lazy>
        <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
      </el-image>
      <div class="section-content">
        <h3 class="section-content-title">Export Filing Services</h3>
        <p class="content-text">
          Forget about costly fines and penalties. Our experts will help you prevent them through accurate and consistent
          processing of your filings and auditing your exports, and filing export transactions.
        </p>
      </div>
    </div>

    <!-- <div class="image-cover">&nbsp;</div> -->
    <div class="container">
      <div class="section-content">
        <h3 class="section-content-title">Import Compliance Consulting</h3>
        <p class="content-text">
          Rely on us to minimize the risk of duty exposure and to avoid unnecessary costs, potential fines, or penalties
          associated with importing. We provide complete import handling under the DDP, DAP, and DDU terms and will
          analyze your import compliance program to determine if any duty drawbacks can lead to duty recovery.
        </p>
      </div>
    </div>

    <div aria-hidden="true" class="block-spacer md"></div>
    <div class="container">
      <h2 class="section-content-title">SHIPPING FROM CHINA TO SOUTH AMERICA, NORTH AMERICA, MIDDLE EAST, EUROPE</h2>
      <!-- <el-image class="image-cover" src="/metsen/images/1222.jpg" fit="cover" lazy>
        <img slot="placeholder" width="100%" src="/metsen/images/cover_holder.png" alt="加载中">
      </el-image> -->
      <img v-lazy="imgObj.src"/>
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
      index: 1,
      list: [],
      imgObj: {
        src: '/metsen/images/1222.jpg',
        // error: 'http://xx.com/error.png',
        // loading: 'http://xx.com/loading-spin.svg'
      },
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