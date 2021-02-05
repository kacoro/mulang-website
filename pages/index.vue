<template>
  <div class="container">
    <div>
      <h1 class="title">nuxt</h1>
      <NuxtLink :to="`login`"> login </NuxtLink>
      <div>{{me.username}}</div>
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
</template>

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
  query{
    me{
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
      me:{
        username:""
      }
    };
  },
  async asyncData({app,params,context}) {
    // console.log(process.env.GRAPHQL_URL)
    console.log(app.context.req)
    let headers ={}
    if(app.context.req){ //typeof window === "undefined"
       headers = {
          cookie:app.context.req?app.context.req.headers.cookie:undefined
       }
    }

    const graphQLClient = new GraphQLClient(
      "http://192.168.179.97:4000/graphql",
      {
        credentials: "include",
        mode: "cors",
        headers
        // (typeof window === "undefined"
        //     ? ctx?.req?.headers.cookie
        //     : undefined) || "",
        }
    );
    const { data, status } = await graphQLClient.rawRequest(query, {
      limit: 5,
    });
    console.log(data);
    const {data:medata} = await graphQLClient.rawRequest(meQuery);
     console.log("medata",medata) 
    if (status === 200) {
      return {
        posts: data.posts,
        hasMore: data.hasMore,
        me:{
          username:medata?.me?.username
        }
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