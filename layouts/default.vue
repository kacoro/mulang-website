<template>
  <div id="__wrap">
    <div class="page-header">
      <div class="header-content">
        <nuxt-link to="/">
          <img src="/images/logo.png" class="logo" />
        </nuxt-link>
        <Menu />
        <NavRight/>
      </div>
    </div>

    <Nuxt />
    <message />
    <foot />
  </div>
</template>

<script>
import Message from "~/components/Message.vue";
import { gql } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
import Foot from '~/components/Foot.vue';
const query = gql`
  query list($id: Int!, $projectIdentifier: String!) {
    list(id: $id, projectIdentifier: $projectIdentifier) {
      content
    }
    site {
      id
      title
      note
      logo
      shortcut
      copyright
      isDefault
      seo {
        title
        keywords
        description
        __typename
      }
      __typename
    }
  }
`;

export default {
  computed: {
    contact() {
      return this.$store.state.contact;
    },
     site() {
      return this.$store.state.site;
    },
  },
  components: { Message, Foot },
  // components: { nav },
  data() {
    return {
      drawer: false,
      // contact:{}
    };
  },

  async fetch() {
    const { data, status } = await getGraphqlClient(
      this.$nuxt.context
    ).rawRequest(query, {
      id: 1,
      projectIdentifier: "contact",
    });
  
    // console.log(data)
    if (data.list) {
      this.$store.commit("setContact", data.list.content);
      //this.contact = data.list.content
    }
    if(data.site){
      this.$store.commit("setSite", data.site);
    }
  },
  mounted: function () {
    // 此处的16跟上面的16对应，同样是倍数
    const baseSize = 100;

    // 设置根节点的font-size大小函数
    function setRem() {
      // 375为设计稿页面宽度，如为750，把375改为750
     
      let clientWidth = Math.min(document.documentElement.clientWidth,1920)
      //  let clientWidth = window.screen.width
      const scale = clientWidth / 1920;
      // 设置页面根节点字体大小
      document.documentElement.style.fontSize =
        baseSize * Math.min(scale, 2) + "px";
    }
    // 初始化
    setRem();
    // 改变窗口大小时重新设置根节点的font-size大小
    window.onresize = function () {
      setRem();
    };
  },
  destroyed: function () {
    window.onresize = null;
  },
  methods: {
    handleClose(done) {
      done();
    },
  },
};
</script>