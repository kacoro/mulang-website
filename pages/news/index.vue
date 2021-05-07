<template>
<div class="news-wrap">
    <div class="banner">
        <div class="banner-bg" >
             <h1>新闻中心</h1>
        </div>
         </div>
<div class="container">
        <ul class="news-list">
          <template v-for="(post, index) in posts.posts">
            <li v-if="index != 0" :key="post.id">
              <NuxtLink :to="`news/${post.id}`">
               {{formateDay(post.createdAt)}} <span class="blue">&nbsp;|&nbsp;</span>
                {{ post.title }}
              </NuxtLink>
            </li>
          </template>
        </ul>
        </div>
        </div>
</template>
<style scoped>
.banner{
    min-height: 240px;
    background: url('/images/solution/banner.jpg') no-repeat;
     background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
}
.banner-bg{
    min-height: 4.9rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.banner-bg h1{
    color: #fff;
    font-size: 40px;
    padding-bottom: 25px;
}
.news-list{
  padding: 34px 0;
}
.news-list li{
  padding: 34px 48px;
  border:1px solid #fff;
  font-size: 24px;
}
.news-list li a{
  color: #000;
  text-decoration: none;
}
.news-list li:hover{
  border:1px solid #f3cd1d;
}

.news-wrap{
    /* min-height: 50vh; */
}

</style>

<script>

import { request, gql, GraphQLClient, rawRequest } from "graphql-request";
const postQuery = gql`
  mutation Login($password: String!, $usernameOrEmail: String!) {
    login(password: $password, usernameOrEmail: $usernameOrEmail) {
      errors {
        field
        message
      }
      user {
        id
        email
      }
    }
  }
`;
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
      timer: null,
      show: true,
      posts: {
        posts: [],
        hasMore: false,
      },
      me: {
        username: "",
      },
      password: "",
      usernameOrEmail: "",
    };
  },
  mounted: function () {
    this.$nextTick(() => {
      this.timer = setTimeout(() => {
        this.show = false;
        //console.log("settimeout")
      }, 10 * 1000);
    });
  },
  destroyed: function () {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    console.log("destroy");
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
      limit: 4,
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
  methods: {
    formateDay(day){
      return  this.$dayjs(day).format('MM/DD');
    },  
    async submitFrom(e) {
      console.log("test2");

      const graphQLClient = new GraphQLClient(
        "http://192.168.56.1:4000/graphql",
        {
          credentials: "include",
          mode: "cors",
        }
      );
      const { data, status } = await graphQLClient.rawRequest(postQuery, {
        password: this.password,
        usernameOrEmail: this.usernameOrEmail,
      });
      e.preventDefault();
      // const graphQLClient = new GraphQLClient('http://192.168.179.97:4000/graphql', {
      //     credentials: 'include',
      //     mode: 'cors',
      //   })

      // const {data,status} =  graphQLClient.rawRequest(query,{
      //     limit:5
      //   })
      // .then(json=>{
      // console.log('success')

      // }).then(function (response) {
      //   console.log("123")
      // }).catch(function (err) {
      //   console.log(err);
      // })
      console.log(data, status);

      if (status === 200) {
        alert("登陆成功");
        // this.$router.push({
        //   path: `/`,
        // });
      }
    },
    //     try {
    //       const res = await this.$apollo.mutate({
    //           mutation: login,
    //           variables: {
    //               password:this.password,
    //               usernameOrEmail:this.usernameOrEmail
    //           }
    //       })
    //       console.log(res.data.login)
    //       const {errors} = res.data.login
    //       if(!errors){
    //           alert("登陆成功")
    //           this.$router.push({
    //                 path: `/`
    //             })
    //       }

    //   } catch (e) {
    //       console.error(e)
    //   }
    //},
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
