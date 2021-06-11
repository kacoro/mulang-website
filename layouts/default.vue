<template>
  <div id="__wrap">
    <div class="page-header">
      <div class="header-content">
        <nuxt-link to="/">
          <img src="/images/logo.png" class="logo" />
        </nuxt-link>
        <Menu  />
        
      </div>
    </div>
    
    <Nuxt />
    <message />
    <div class="page-footer">
      <div>
        <img src="/images/logo-footer.png" class="footer-logo" />
        <p>
          公司地址：{{contact.address}}<br /><span
            style="padding-left: 5.5em"
            >{{contact.adress2}}</span
          >
        </p>
        <p>官方热线：{{contact.tel}}</p>
        <p>官方邮箱：{{contact.email}}</p>
      </div>
      <div>
        <h4>商务合作</h4>
        <p>售前咨询： {{contact.saletel}}</p>
        <p>商务合作： {{contact.business}}</p>
        <p>媒体合作： {{contact.media}}</p>
        <p>供应商合作： {{contact.supplier}}</p>
      </div>
      <div class="links">
        <h4>相关链接</h4>
        <NuxtLink :to="`/about`">关于我们</NuxtLink>
        <NuxtLink :to="`/dajiang`">核心技术</NuxtLink>
        <NuxtLink :to="`/yunfan`">云帆创新技术平台</NuxtLink>
        <NuxtLink :to="`/product`">产品中心</NuxtLink>
        <NuxtLink :to="`/solution`">解决方案</NuxtLink>
      </div>
      <div>
        <h4><NuxtLink :to="`/news`">新闻媒体</NuxtLink></h4>
        <NuxtLink :to="`/joinus`">加入我们</NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>


import Message from '~/components/Message.vue';
import {  gql,  rawRequest } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
 query list($id: Int!, $projectIdentifier: String!) {
  list(id: $id, projectIdentifier: $projectIdentifier) {
    content
  }
}
`;
import { mapMutations } from 'vuex'
export default {
  computed:{
    contact(){
      return this.$store.state.contact
    }
  },
  components: { Message },
  // components: { nav },
  data() {
    return {
      drawer:false,
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