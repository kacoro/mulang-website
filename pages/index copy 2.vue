<template>
  <div class="wrap">
    
    <div class="temp-banner" v-show="show">
      <img src="/images/index/banner-1.jpg" alt="" class="pic" width="100%" />
    </div>
    <div class="banner">
      <img src="/images/index/banner.jpg" alt="" class="pic" width="100%" />
    </div>
    <div class="section-1">
      <div class="section-1-content">
        <div class="section-1-content-text">
          <div>
          <img class="pic" src="/images/index/about.png" alt="">
          </div>
          <div>
            <h1>关于CST</h1>
            <p>
              康索特成立于2006年10月，作为业内领先的AIoT产品和解决方案提供商，端云协同应用能力是康索特的核心优势，也是人工智能和物联网产生价值的关键。我们专注于通用园区和城市
              治理领域，连接数据、算法及应用，为客户提供领先的AIoT软硬件产品和智能化应用解决方案。
            </p>
             <NuxtLink :to="`about`" class="button radius">了解更多 </NuxtLink>
          </div>
        </div>
        
        <div class="about-detail">
          <div class="item item-1">
            <h1>使命</h1>
            <p>普惠AI应用，让美好生活触手可及</p>
          </div>
          <div class="item  item-2" style="flex: 1; min-width: 33%">
            <h1>愿景</h1>
            <p>成为全球领先的AIoT产品和解决方案提供商</p>
          </div>
          <div class="item  item-3">
            <h1>价值观</h1>
            <p>善用技术，达人达己</p>
          </div>
        </div>
        
      </div>
    </div>
    <div class="section-yunfan">
      <div class="section-left">
        <img src="/images/index/source-1.png" class="pic" />
      </div>

      <div class="yunfan-content">
        <h1 class="blue">云帆创新应用平台</h1>
        <h2 class="blue">—— 善用技术</h2>
        <p>
          未来的城市微单元、社会治理、政企业务流程都需要智能化，康索特掌握了能够高效率、高性价比帮助客户实现智能化转型升级的能力。康索特基于“大匠”、“云启”两大核心技术平台，以及对行业场景需求的深刻理解，进一步提升了人工智能算法及物联传感技术在解决方案中的高效性及场景适应性。
          通过云帆创新应用平台，实现业务场景数字化、智能化改造，帮助客户降本增效。通过挖掘大数据潜能，持续为客户创造价值。
        </p>
        <NuxtLink :to="`yunfan`" class="button  radius"> 了解更多 </NuxtLink>
      </div>
    </div>
    <div class="section-solution">
      <div class="section-solution-header">
        <div class="item">
          <img class="pic" src="/images/index/yunqi.jpg" />
          <h2>云启<span>智能化</span></h2>
           <p>超多品类和超高性能的算法连接能力，打造一套算法调度平台，实现业务流智能化升级</p>
           <NuxtLink :to="`yunfan`" class="button  radius"> 了解更多 </NuxtLink>
        </div>
        <div class="item">
          <img class="pic" src="/images/index/dajiang.jpg" />
           <h2>大匠<span>数学化</span></h2>
           <p>超大规模和超高效率的数据连接能力，构建一张智能感知网络，实现业务流数字化改造</p>
          <NuxtLink :to="`yunfan`" class="button  radius"> 了解更多 </NuxtLink>
        </div>
        <div class="item">
          <img class="pic" src="/images/index/suoteyun.jpg" />
          <h2>索特轻量云</h2>
           <p>致力于为中小企业客户提供一站式轻应用云接入方案</p>
          <NuxtLink :to="`yunfan`" class="button  radius"> 了解更多 </NuxtLink>
        </div>
      </div>
      <div class="section-solution-content">
        <div class="solution-left">
          <h1>解决方案</h1>
          <ul class="solution-nav">
            <li class="active">
              <h2 class="blue">通用园区</h2>
              <p>为人们提供学习、工作和生活场景的极致体验</p>
            </li>
            <li>
              <h2 class="blue">智慧城市</h2>
              <p>打造“深度感知、数据驱动”智慧城市标杆</p>
            </li>
          </ul>
          <div class="more">MORE</div>
        </div>

        <div class="solution-right">
          <ul>
            <li>
              <h2 class="blue">园区管理</h2>
              <h3>茅台集团</h3>
              <p>
                以人为中心构建全流程智慧通行平台，实现园区内部闭环管理，打造标杆智慧总部园区
              </p>
              <img src="/images/index/demo.png" alt="" />
            </li>
            <li>
              <h2 class="blue">园区管理</h2>
              <h3>茅台集团</h3>
              <p>
                以人为中心构建全流程智慧通行平台，实现园区内部闭环管理，打造标杆智慧总部园区
              </p>
              <img src="/images/index/demo.png" alt="" />
            </li>
            <li>
              <h2 class="blue">园区管理</h2>
              <h3>茅台集团</h3>
              <p>
                以人为中心构建全流程智慧通行平台，实现园区内部闭环管理，打造标杆智慧总部园区
              </p>
              <img src="/images/index/demo.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section-solution-header section-solution-header-2">
      <div class="item">
        <div class="text">
          <h1>大匠</h1>
          <p>全品类AIoT设备数据接入引擎</p>
        </div>
        <img class="pic" src="/images/index/dajiang.png" />
      </div>
      <div class="item">
        <div class="text">
          <h1>云启</h1>
          <p>基于场景适配的AI算法智能调度引擎</p>
        </div>
        <img class="pic" src="/images/index/yunqi.png" />
      </div>
      <div class="item">
        <div class="text">
          <h1>云帆</h1>
          <p>基于场景适配的AIoT融合创新应用开放平台</p>
        </div>
        <img class="pic" src="/images/index/yunfan.png" />
      </div>
    </div>
    <div class="seciton-case">
      <div class="section-content">
        <div class="section-content-left">
          <h1 class="blue">经典案例</h1>
          <h4>智慧园区</h4>
          <p>
            康索特智慧园区建设强调通过信息技术和各类资源的整合，
            将“智慧”渗透到园区建设与运营的每个细节中，提升园区运营、服务和管理能力，创新园区组织架构，在日趋激烈的竞争中，维持园区的可持续性发展，为园区铸就一套超强的软实力。
          </p>
          <a class="button primary"> 查看更多 </a>
        </div>
        <div class="case-slider">
          <ul>
            <li>
              <div class="img-box">
                <img class="pic" src="/images/index/demo1.png" alt="" />
              </div>
              <h4>南宁华润大厦</h4>
              <p>·南宁最高地标建筑，广西第一高楼</p>
              <p>·总高482米，可同时容纳1.2万人办公</p>
              <p>·软硬一体化组件式通行，通过率超99%</p>
              <p>·单人通行时间小于1秒，真正实现无感通行</p>
            </li>
            <li>
              <div class="img-box">
                <img class="pic" src="/images/index/demo2.png" alt="" />
              </div>
              <h4>深圳市龙华区</h4>
              <p>·“深度感知、数据驱动”智慧城市标杆城区</p>
              <p>·构建基础设施集约智能、信息资源共享开放等</p>
              <p>·智能保安、智能食堂、智能事务、智能分析</p>
              <p>·集约化构建高效机关事务整合管理</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="seciton-news">
      <h1 class="blue">新闻中心</h1>
      <img src="/images/index/mediademo.png" alt="" />
      <template v-if="posts && posts.posts">
        <div v-if="posts.posts.lenght > 0">
          <NuxtLink :to="`news/${posts.posts[0].id}`">
            {{ posts.posts[0].title }}
            <div v-html="posts.posts[0].textSnippet"></div>
          </NuxtLink>
        </div>
        <ul>
          <template v-for="(post, index) in posts.posts">
            <li v-if="index != 0" :key="post.id">
              <NuxtLink :to="`news/${post.id}`">
                {{ new Date(Number(post.createdAt)) }}
                {{ post.title }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </template>
      <a class="button default"> 查看更多 </a>
    </div>
    <div class="container">
      <div></div>
    </div>
   
  </div>
</template>

<script>
import "assets/css/index.css";
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
      timer:null,
      show:true,
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
  mounted:function(){
     this.$nextTick(() => {
			 
			   this.timer = setTimeout(() => {
           this.show = false
           //console.log("settimeout")
         }, 10*1000)
		  })
  },
  destroyed:function(){
    if(this.timer){
        clearTimeout(this.timer)  
    }
    console.log("destroy")
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