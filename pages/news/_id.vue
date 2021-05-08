<template>
<div class="news-detail">
  <div v-if="post" class="container">
    <h3>{{ post.title }}</h3>
    <h4>{{formateDay(post.createdAt)}}</h4>
    <div v-html="post.text"></div>
    
  </div>
</div>
</template>
<style scoped>
  .news-detail{
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