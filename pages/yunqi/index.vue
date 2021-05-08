<template>
  <div class="wrap">
    <div class="banner">
      <div class="banner-bg">
        <div class="banner-border">
          <img
            src="/images/yunqi/banner-text-1.png"
            style="width: 2.36rem"
            alt=""
            class="pic"
            width="100%"
          />
          <img
            src="/images/yunqi/banner-text-2.png"
            alt=""
            style="width: 3.61rem"
            class="pic pic2"
            width="100%"
          />
          <p>
康索特“云启”AI算法智能调度引擎，支持商汤、旷视、云天励飞、极视角等主流第三方厂商的算法接入，拥有自适应场景适配能力，多算法管理调度能力，包括计算机视觉、自然语言处理、文字识别等算法，实现AI算法与业务场景需求的深度结合，推动AI算法价值变现，赋能泛园区、社会治理、智慧环卫等多个应用领域智能化升级。          </p>
        </div>
      </div>
    </div>
    <div class="section-type">
      <img class="pic" src="/images/yunqi/1.jpg" />
      <div class="text">算法平台特点</div>
    </div>
    <div class="section-parner">
      <h1>主流合作厂家算法种类全</h1>
      <ul>
        <li><img class="pic" src="/images/yunqi/p1.png" /></li>
        <li><img class="pic" src="/images/yunqi/p2.png" /></li>
        <li><img class="pic" src="/images/yunqi/p3.png" /></li>
        <li><img class="pic" src="/images/yunqi/p4.png" /></li>
      </ul>
    </div>
    <div class="section-logic">
      <ul>
        <li>
          <div class="logic-list-wrap">
            <img class="pic" src="/images/yunqi/s1.png" />
            <div class="logic-list-content">
              <h1>算法种类全</h1>
              <h4>跨CV，NLP、OCR领域，超过百余类算法覆盖全场景应用</h4>
            </div>
          </div>
        </li>
        <li>
          <div class="logic-list-wrap">
            <img class="pic" src="/images/yunqi/s2.png" />
            <div class="logic-list-content">
              <h1>精准度高</h1>
              <h4>
                对端边侧回传的数据，自适应匹配契合业务场景需求的算法，灵活调度，多维融合
              </h4>
            </div>
          </div>
        </li>
        <li>
          <div class="logic-list-wrap">
            <img class="pic" src="/images/yunqi/s3.png" />
            <div class="logic-list-content">
              <h1>支付级别安全</h1>
              <h4>
                获银联安全认证，服务交易额100亿元+。红外人脸识别设备的真人通过率<br />
                可达99%以上，假体攻击防御率在99.9%以上
              </h4>
            </div>
          </div>
        </li>
        <li>
          <div class="logic-list-wrap">
            <img class="pic" src="/images/yunqi/s4.png" />
            <div class="logic-list-content">
              <h1>高可用性</h1>
              <h4>标准化算法集成流程，保证算法能力经过严格验证后输出使用</h4>
            </div>
          </div>
        </li>
        <li>
          <div class="logic-list-wrap">
            <img class="pic" src="/images/yunqi/s5.png" />
            <div class="logic-list-content">
              <h1>多平台适配</h1>
              <h4>支持X86、Cuda、海思、atlas等多平台模型的运行</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>


    <div class="section-solution">
      <div class="section-solution-header">
        <div class="item">
          <img class="pic" src="/images/index/3.jpg" />
          <h2>索特轻量云</h2>
          <p>致力于为中小企业客户<br>提供一站式轻应用云接入方案</p>
          <NuxtLink :to="`yunfan`" class="button radius"> 了解更多 </NuxtLink>
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
  background: url("/images/yunqi/banner.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.banner-bg {
  max-width: 1420px;
  box-sizing: border-box;
  padding: 15px;
  margin: 0 auto;
  position: relative;
  min-height: 7rem;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner-border {
  border-left: 10px solid #f3cd1d;
  padding-left: 35px;
}
.banner-bg img {
  padding-bottom: 25px;
}
.banner-bg .pic {
  min-width: 100px;
}
.banner-bg .pic2 {
  min-width: 230px;
}
.banner-bg h3 {
  color: #fff;
  padding-bottom: 25px;
}
.banner-bg p {
  color: #fff;
  font-size: 0.18rem;
  max-width: 1342px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.section-type {
  max-width: 1013px;
  box-sizing: border-box;
  margin: 0.8rem auto;
}
.section-type .pic {
  max-width: 100%;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 0.8rem;
}
.section-type .text {
  text-align: center;
  font-size: 54px;
  font-weight: bold;
}

.section-parner {
  text-align: center;
}

.section-parner ul {
  display: flex;
  justify-content: space-between;
  max-width: 1150px;
  margin: 0 auto;
  padding: 45px;
}
.section-parner ul li {
  padding: 15px;
 
}
.section-parner ul .pic {
  max-width: 100%;
}
.section-logic ul li{ 
        background: #f2f2f2; 
        padding: 50px 0;
        text-align: right;
    } 
.section-logic ul li:nth-child(2n){ 
        background: #fff; 
        text-align: left;

    } 
    
.section-logic ul .pic {
  max-width: 100%;
  padding-left:.8rem
}
.logic-list-wrap {
  max-width: 1065px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section-logic ul li:nth-child(2n) .logic-list-wrap {
       flex-direction: row-reverse;
    }
    .logic-list-content{

    }
    .logic-list-content h1{
      color: #19459a;
      padding-bottom: 30px;
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