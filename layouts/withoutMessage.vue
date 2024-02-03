<template>
  <div id="__wrap">
    <div class="page-header">
      <div class="header-content">
        <nuxt-link to="/" class="logo-wrap">
          <img class="logo lazy-img" v-lazy="logo" fit="contain" />
        </nuxt-link>
        <Menu  />
        <!-- <NavRight/> -->
        
      </div>
    </div>
    
    <Nuxt />
  
    <foot />
  </div>
</template>
<style scoped>

</style>
<script>


import Message from '~/components/Message.vue';
import {  gql } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
import Foot from '~/components/Foot.vue';
const query = gql`
 query list($id: Int!, $projectIdentifier: String!) {
  list(id: $id, projectIdentifier: $projectIdentifier) {
    content
  }
}
`;

export default {
  computed:{
    contact(){
      return this.$store.state.contact
    }
  },
  components: { Message, Foot },
  // components: { nav },
  data() {
    return {
      drawer:false,
      logo:"",
      // contact:{}
    };
  },
  
  async fetch() {
    const { data, status } = await getGraphqlClient(this.$nuxt.context).rawRequest(
      query,
      {
        id: 1,projectIdentifier: "contact"
      }
    );
    // console.log(data)
    if (data.list) {
      this.$store.commit('setContact', data.list.content)
      //this.contact = data.list.content
     
    }
  },
  mounted: function () {
    // 此处的16跟上面的16对应，同样是倍数
    const baseSize = 100;
     this.logo= "metsen/images/logo.png";
    // 设置根节点的font-size大小函数
    function setRem() {
     
      // 375为设计稿页面宽度，如为750，把375改为750
      const scale = document.documentElement.clientWidth / 1920;
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