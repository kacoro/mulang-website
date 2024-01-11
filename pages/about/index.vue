<template>
  <div class="news-detail">
    <div class="banner">
      <div class="banner-bg">
        <div class="border-title border-title2">
          <h2>Company Introduction</h2>
          <h2>企业介绍</h2>
        </div>
        
      </div>
    </div>
    <div aria-hidden="true" class="block-spacer md"></div>
    <div class="container">
      <h2 class="section-content-title"> Our company is One stop logistics transportation solution provider:</h2>
      
</div>

<div class="section  left">
      <el-image class="image-cover" src="/metsen/images/us.jpg" fit="cover" lazy></el-image>
      <div class="section-content">
        
        <p class="side-by-side__content-text">
We provides client centered international logistics service with experience. We carry everything (from normal container cargo, bulk cargo, to the precision machinery cargo‘LCD, Semi- conductor facilities, project cargo, ultra heavy weight cargo) which needs special care and professional technics) with our customers' request from the site to the destination with all our special logistics services. I would like share with you our high quality services with competitive advantages in future. And We are always ready to support and provide our services to you whenever you need that means our 24/7 time frame is available for you. 
</p>
      </div>
    </div>
    <div class="section  right">
      <el-image class="image-cover" src="/metsen/images/stock_ocean.800x500.jpg" fit="cover" lazy></el-image>
      <div class="section-content">
        
        <p class="side-by-side__content-text">

By the way,  We are Strategically Located in Shenzhen,China,and we have competitive rates for routing from China to Middle East, Middle& South-America and the Mediterranean. I would like to share with any enquires from your goods company. Our Main Service as Below: -  Ocean Freight ( Full container & Bulk-cargo ) -  Air Freight -  Door to Door Service (including duty&tax and customs clearance) -  E Commerce Small Parcel (special rates globally)  - Project Logistics Solution (OOG  Shipment):  Flat Rack Container / Open Top Container 
</p>
      </div>
    </div>
    <div aria-hidden="true" class="block-spacer md"></div>
    <div class="container">
      <h2 class="section-content-title">SHIPPING FROM CHINA TO SOUTH AMERICA, NORTH AMERICA, MIDDLE EAST, EUROPE</h2>
      <el-image class="image-cover" src="/metsen/images/1222.png" fit="cover" lazy></el-image>

    </div>
  </div>
</template>
<style scoped>

.banner {
  min-height: 320px;
  background: url("/images/about/banner.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.banner-content {
  margin-top: 0.7rem;
}
.banner-content p {
  padding-bottom: 20px;
}

.about-section-parner {
  position: relative;
  text-align: center;
}
.about-section-parner .img {
  box-sizing: border-box;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
}
.about-section-parner img {
  max-width: 100%;
}
.about-section-parner .border-title {
  position: absolute;
  right: 0;
}
.banner-bg {
  max-width: 1420px;
  box-sizing: border-box;
  padding:  60px 15px;
  margin: 0 auto;
  position: relative;
  min-height: 5rem;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
}



.banner-bg p {
  color: #fff;
  font-size: 0.18rem;
  max-width: 1342px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
@media screen and (max-width: 1280px) {
  .banner-bg p {
    font-size: 14px;
  }
}
@media screen and (max-width: 768px) {
  .banner-bg p {
    font-size: 12px;
  }
}

</style>

<script>
import { gql, rawRequest } from "graphql-request";
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
   
    };
  },

  async asyncData({ app, params }) {
    // console.log(process.env.GRAPHQL_URL)
    // const { data, status } = await getGraphqlClient(app.context).rawRequest(
    //   query,
    //   {
    //     limit: 4,
    //   }
    // );
    // if (status === 200) {
    //   return {
    //     posts: data.posts,
    //     hasMore: data.hasMore,
    //   };
    // }
  },
  methods: {
    change() {},
    formateDay(day) {
      return this.$dayjs(day).format("MM/DD");
    },
  },
  computed: {
    site() {
      return this.$store.state.site;
    },
  },
  head() {
    if (this.site?.seo) {
      const { title, keywords, description } = this.site.seo;
      return {
        title: title + "|About Metsen",
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

