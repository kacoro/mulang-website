<template>
  <div class="wrap">
    <div class="banner">
      <div class="banner-bg">
        <div class="banner-left">
          <img
            src="/images/yunfan/banner-text-1.png"
            style="width: 2.36rem"
            alt=""
            class="pic"
            width="100%"
          />
          <img
            src="/images/yunfan/banner-text-2.png"
            alt=""
            style="width: 3.61rem"
            class="pic"
            width="100%"
          />
        </div>
        <div class="banner-right">
          <h3>善 用技术</h3>
          <p>
            未来的城市微单元、社会治理、政企业务流程都需要智能化，康索特掌握了能够高效率、高性价比帮助客户实现智能化转型升级的能力。
          </p>
          <p>
            康索特基于“大匠”、“云启”两大核心技术平台，以及对行业场景需求的深刻理解，进一步提升了人工智能算法及物联传感技术在解决方案中的高效性及场景适应性。
            通过云帆创新应用平台，实现业务场景数字化、智能化改造，帮助客户降本增效。通过挖掘大数据潜能，持续为客户创造价值。
          </p>
        </div>
      </div>
    </div>

    <div class="section-yunfan section-yunfan-1">
      <div class="section-yunfan-content">
      <img src="/images/yunfan/1.png" class="pic" /></div>
      <div class="section-yunfan-content">
         <h3  class="blue">全品类IoT数据连接</h3>
      <i class="icon add">+</i>
      <h3  class="blue">积木式软件服务</h3>
      <i class="icon add">+</i>
      <h3 class="blue" >应用场景需求方案整合</h3>
     <i class="icon add">=</i>
      <h3 class="blue">业务和运营场景智能化转型</h3>
      <p>(三者有机结合，为客户创造价值)</p>
      </div>
    </div>
    <div class="section-yunfan section-yunfan-2">
      <div class="section-yunfan-content">
      <h3 class="blue">支持私有云、公有云、</h3>
      <h3  class="blue">混合云部署，积木式软件服务，</h3>
      <h3>根据不同业务场景需求进行赋能，</h3>
      <h3>与作业系统高效耦合快速实现智能化</h3>
      </div>
      <div class="section-yunfan-content">
      <img src="/images/yunfan/2.png" class="pic" /></div>
    </div>
    <div class="section-solution">
      <div class="section-solution-header">
        <div class="item">
          <img class="pic" src="/images/index/1.jpg" />
          <h2>云启<span>（智能化）</span></h2>
          <p>
            超多品类和超高性能的算法连接能力，打造一套算法调度平台，实现业务流智能化升级
          </p>
          <NuxtLink :to="`yunqi`" class="button radius"> 了解更多 </NuxtLink>
        </div>
        <div class="item">
          <img class="pic" src="/images/index/2.jpg" />
          <h2>大匠<span>（数学化）</span></h2>
          <p>
            超大规模和超高效率的数据连接能力，构建一张智能感知网络，实现业务流数字化改造
          </p>
          <NuxtLink :to="`dajiang`" class="button radius"> 了解更多 </NuxtLink>
        </div>
        
      </div>
    </div>
    <div class="container">
      <div></div>
    </div>
  </div>
</template>
<style scoped>
.banner {
  min-height: 320px;
  background: url("/images/yunfan/banner.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.banner-bg {
  max-width: 1511px;
  margin: 0 auto;
  position: relative;
  min-height: 6.45rem;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: space-around;
  align-items: center;
}
.banner-left {
  display: flex;
  align-items: baseline;
  margin-top: -40px;
}
.banner-right {
  width: 520px;
  max-width: 50%;
  margin-top: -40px;
}
.banner-bg h3 {
  color: #fff;
  padding-bottom: 25px;
}
.banner-bg p {
  color: #fff;
  font-size: 0.16rem;
  max-width: 834px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.section-yunfan{
  display: flex;
  
}
.section-yunfan .section-yunfan-content{
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
}
.section-yunfan-2 .section-yunfan-content{
    align-items:flex-start;
  
}
.section-yunfan-2 h3{
    line-height: 53px;
}
.section-yunfan-content h3{
  white-space: nowrap;
  line-height: .9rem;
}
.section-yunfan-content p{
  font-size: 18px;
}
.section-yunfan-content i{
   font-size: .8rem;
   color: #19459a;
}
.section-yunfan .pic{
  max-width: 100%;
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
      limit: 3,
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