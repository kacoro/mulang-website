<template>
<div class="news-detail">
  <div class="banner">
      <div class="banner-bg">
        <h1>新闻中心</h1>
      </div>
    </div>
    <div class="news-detail-content">
  <div v-if="post" class="container">
    <h3>{{ post.title }}</h3>
    <h4>{{formateDay(post.createdAt)}}</h4>
    <div v-html="post.text"></div>
    
  </div>
  </div>
</div>
</template>
<style scoped>
  .news-detail-content{
    padding: 1rem 20px;
    min-height: 50vh;
  }
  h3{
    padding-bottom:20px ;
  }
  h4 {
    font-weight: normal;
    padding-bottom:20px ;
  }
  .banner {
  min-height: 240px;
  background: url("/images/solution/banner.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.banner-bg {
  min-height: 4.9rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.banner-bg h1 {
  color: #fff;
  font-size: 40px;
  padding-bottom: 25px;
}
</style>
<script>
// import post from '~/apollo/queries/post'
import { request, gql,GraphQLClient,rawRequest } from 'graphql-request'

const query = gql`
  query Post($id: Int!) {
    post(id: $id) {
        id
        text
        title
        creator{
        username
        }
    }
    }
`

export default {
    data(){
        return{
            post:null
        }
    },
    async asyncData({
			app,
			params,
		}) {
      let headers = {};
    if (app.context.req) {
      headers = {
        cookie: app.context.req ? app.context.req.headers.cookie : undefined,
      };
    }
    

    const graphQLClient = new GraphQLClient(
      process.env.GRAPHQL_URL || '/graphql',
      {
        credentials: "include",
        mode: "cors",
        headers,
      }
    );
        const {data,status} = await graphQLClient.rawRequest(query,{
            id:parseInt(params.id)
        })

        if (status === 200) {
            return {
                post:data.post
            }
        }
    },

  head () {
     return {
      title: (this.post ? `${this.post.title}` : 'Loading')
     }
  },

  methods: {
    formateDay(day){
      return  this.$dayjs(day).format('YYYY/MM/DD');
    },  
  }
}
</script>