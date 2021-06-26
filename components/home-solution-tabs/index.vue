<template>
  <div class="section-solution-content">
      <div class="solution-left">
        <h1>解决方案</h1>
        <ul class="solution-nav">
          <li  :class="{active:active==56}"  @click="change(56)">
            <h2 class="blue">通用园区</h2>
            <p>为人们提供学习、工作和生活场景的极致体验</p>
          </li>
          <li  :class="{active:active==57}" @click="change(57)">
            <h2 class="blue">城市治理</h2>
            <p>打造“深度感知、数据驱动”智慧城市标杆</p>
          </li>
        </ul>
        <h2 class="more"  @click="goto(`solution?categoryId=56`) ">MORE</h2>
      </div>

      <div class="solution-right">
        <ul>
          <li v-for="item,index in list" :key="index">
            <div class="bg " :style="{backgroundImage: `url(${item.other.thumb})`}"></div>
            <div class="solution-right-content">
              <h1>0{{index+1}}</h1>
              <!-- <dl><span @click="goto(`solution?categoryId=${item.categoryId}`) ">{{item.categoryId==56?`通用园区`:`智慧城市`}}</span> </dl> -->
              <h3 @click="goto(`solution/${item.id}`) ">{{item.title}}</h3>
              <p>
                {{item.textSnippet}}...
              </p>
              <NuxtLink :to="`solution/${item.id}`" class="button radius mid">
                了解更多
              </NuxtLink>
            </div>
             <img class="blank" src="/images/solution/blank.png" alt=""  />
          </li>
         
        </ul>
      </div>
    </div>
</template>

<script>
import './index.scss'
import { gql } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
  query Lists($categoryId: Int, $identifier: String!,$limit:Int) {
    
    lists(categoryId: $categoryId, identifier: $identifier,limit:$limit) {
      lists {
        id
        title
        projectId
        categoryId
        createdAt
        other
        textSnippet
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

export default {
  name: "solution",

  data() {
    return {
      active: false,
      list: [],
      
    };
  },
  mounted(){
      this.change(56)
  },
//   async fetch() {
//     this.change(56)
//   },

  methods: {
    async change(active) {
      if(active==this.active) return false
      const { data } = await getGraphqlClient().rawRequest(query, {
        categoryId: active,
        identifier: "solution",
        page: 1,
        limit:3
      });
      this.active = active;
      if (data.lists) {
        this.list = data.lists.lists;
      }
    },
    goto(url){
        this.$router.push(url)
    }
  },
};
</script>
