<template>
  <div class="page-footer">
    <div>
      <img src="/images/logo-footer.png" class="footer-logo" />
      <p>
        公司地址：{{ contact.address }}<br /><span
          style="padding-left: 5.5em"
          >{{ contact.adress2 }}</span
        >
      </p>
      <p>官方热线：{{ contact.tel }}</p>
      <p>官方邮箱：{{ contact.email }}</p>
      <!-- <p>
        <a href="https://beian.miit.gov.cn" target="_blank"
          >粤ICP备12017977号</a
        >
      </p> -->
      <div v-html="site.copyright"></div>
    </div>
    <div>
      <h4>商务合作</h4>
      <p>售前咨询： {{ contact.saletel }}</p>
      <p>商务合作： {{ contact.business }}</p>
      <p>供应商合作： {{ contact.supplier }}</p>
    </div>
    <div class="links">
      <h4>相关链接</h4>

      <NuxtLink :to="`${item.link}`" v-for="(item,index) in bottomMenu" :key="index">{{item.title}}</NuxtLink>
      <!-- <NuxtLink :to="`/dajiang`">核心技术</NuxtLink>
      <NuxtLink :to="`/yunfan`">云帆创新技术平台</NuxtLink>
      <NuxtLink :to="`/product`">产品中心</NuxtLink>
      <NuxtLink :to="`/solution`">解决方案</NuxtLink> -->
    </div>
    <!-- <div>
        <h4><NuxtLink :to="`/news`">新闻媒体</NuxtLink></h4>
        <NuxtLink :to="`/joinus`">加入我们</NuxtLink>
      </div> -->
  </div>
</template>
<script>
import {  gql   } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
 query{
  menuTree(identifier:"bottom"){
    title
  	link
    target
    id
    children{
      id
      title
      link
      target
      children
      	{
          id
          target
          title
          link
          children{
            id
            target
            title
            link
          }
        }
    }
  }
}
`;
export default {
  name: "foot",
  computed: {
    contact() {
      return this.$store.state.contact;
    },
    site() {
      return this.$store.state.site;
    },
    bottomMenu(){
      return this.$store.state.bottomMenu
    }
  },
  async fetch() {
    const { data, status } = await getGraphqlClient(this.$nuxt.context).rawRequest(
      query);
    // console.log(data)
    if (data.menuTree) {
      this.$store.commit('setBottomMenu', data.menuTree)
    }
  },
};
</script>