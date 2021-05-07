<template>
  <div class="wrap">
    <div class="page-header">
      <div class="header-content">
        <img src="/images/logo.png" class="logo" />
      <div class="left-part">
        <div class="menu-item menu-item-core">
          <a class="menu-name">核心技术</a> <span class="nav-line"></span>
          <div class="menu-popover" style="opacity: 0; top: 64px">
            <div class="menu-popover-item">
              <ul>
                <a
                  data-beacon="https://brainpp.megvii.com"
                  href="https://brainpp.megvii.com/"
                  target="_blank"
                >
                  <li>
                    <span class="menu-popover-name">Brain<sup>++</sup></span
                    ><span class="menu-popover-name">新一代AI生产力平台</span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
         <div class="menu-item menu-item-core">
          <a class="menu-name">产品中心</a> <span class="nav-line"></span>
        </div>
        <div class="menu-item menu-item-core">
          <a class="menu-name">解决方案</a> <span class="nav-line"></span>
        </div>
        <div class="menu-item menu-item-core">
          <a class="menu-name">关于CST</a> <span class="nav-line"></span>
        </div>
        <div class="menu-item menu-item-core">
          <a class="menu-name">媒体中心</a> <span class="nav-line"></span>
        </div>
      </div>
    </div>
    </div>
    <div class="temp-banner">
       <img src="/images/index/banner-1.jpg" alt="" class="pic" width="100%">
    </div>
    <div class="banner">
      <img src="/images/index/banner.jpg" alt="" class="pic" width="100%">
    </div>
    <div class="container">
      <div>
     
        <NuxtLink :to="`login`"> login </NuxtLink>
        <div>{{ me.username }}</div>
        <ul v-if="posts">
          {{
            posts.hasMore
          }}
          <li v-for="post in posts.posts" :key="post.id">
            <NuxtLink :to="`post/${post.id}`">
              {{ post.title }} {{ post.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="page-footer">
      <div>
        <img src="/images/logo-footer.png"  class="footer-logo" />
        <p>公司地址：深圳市南山区高新南九道10号深圳湾科技生态园10栋Ａ座27F</p>
        <p>官方热线：400-0755-972</p>
        <p>官方邮箱：commsoft@commsoft.com.cn</p>
      </div>
      <div>

      </div>
     
    </div>
  </div>
</template>
<style scoped>
  
  
</style>
<script>
import { request, gql, GraphQLClient, rawRequest } from "graphql-request";

const query = gql`
  query Posts($limit: Int!) {
    posts(limit: $limit) {
      posts {
        id
        text
        title
      }
      hasMore
    }
  }
`;

const meQuery = gql`
  query {
    me {
      username
    }
  }
`;

// import posts from '~/apollo/queries/posts'

export default {
  name: "Search",
  data() {
    return {
      posts: {
        posts: [],
        hasMore: false,
      },
      me: {
        username: "",
      },
    };
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

    const graphQLClient = new GraphQLClient(
      "http://192.168.56.1:4000/graphql",
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
      limit: 5,
    });
    console.log(data);
    const { data: medata } = await graphQLClient.rawRequest(meQuery);
    console.log("medata", medata);
    if (status === 200) {
      return {
        posts: data.posts,
        hasMore: data.hasMore,
        me: {
          username: medata?.me?.username,
        },
      };
    }
  },
};

// export default {
//   // apollo: {
//   //   posts: {
//   //     // prefetch: true,
//   //     query: posts,
//   //     variables () {
//   //       return { limit: 3 }
//   //     }
//   //   }
//   // },
//   head: {
//     title: 'Cars with Apollo'
//   }
// }
</script>