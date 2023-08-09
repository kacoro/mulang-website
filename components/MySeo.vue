<template><div>1</div></template>

<script>
// #根据路由获取seo信息
/*
 1、接收参数，判断是列表页，还是单页，或者是首页、3种情况查询的方式各有不同。详情页自带很容易查出，所以不需要在这里处理，可以少一次请求。
*/

import { gql } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
  query ($categoryId: Int, $identity: String) {
    category(id: $categoryId, identity: $identity) {
      name
      seo {
        title
        keywords
        description
      }
    }
  }
`;
export default {
  name: "MySeo",
  beforeRouteUpdate(to, from, next) {
    console.log(to.query);
    let categoryId = to.query.categoryId || 56;
    categoryId =
      typeof categoryId == "string" ? parseInt(categoryId) : categoryId;
    this.change(categoryId);
    next();
  },
  async asyncData({ app, params, query: q }) {
    console.log(params, q);
    let categoryId = q?.categoryId || 56;
    let seo = null;
    categoryId =
      typeof categoryId == "string" ? parseInt(categoryId) : categoryId;

    console.log(categoryId);

    const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        categoryId: categoryId,
      }
    );
    if (status === 200) {
      console.log(data);
      return {
        category: data.category,
        seo: data.category.seo || null,
      };
    }
  },
  methods: {
    async change(categoryId) {
        console.log(categoryId)
    },
  },
};
</script>