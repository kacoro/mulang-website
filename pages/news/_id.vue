<template>
<div class="news-detail">
  <div class="banner">
      <div class="banner-bg">
        <h1>新闻中心</h1>
      </div>
    </div>
    <div class="news-detail-content">
  <div v-if="content" class="container">
    <h3>{{ content.title }}</h3>
    <h4 style="display:inline-block">{{formateDay(content.publishTime)}} </h4> <i class="el-icon-view"></i>{{content.hits}}
    <div class="editor" v-html="content.content"></div>
   
    <div>
        <ul class="prev-next">
          <li v-if="prev"><nuxt-link :to="`${prev.id}`">上一篇：{{prev.title}}</nuxt-link></li>
          <li v-if="next"><nuxt-link :to="`${next.id}`">下一篇：{{next.title}}</nuxt-link></li>
        </ul>
    </div>
  </div>
  </div>
</div>
</template>
<style scoped>
.prev-next{
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  flex-wrap: wrap;
  
}
.prev-next li{
  padding: 15px;
  border:1px solid transparent
}
.prev-next li:hover {
  border: 1px solid #f3cd1d;
}
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
import {gql} from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";

const query = gql`
  query List($id: Int!, $projectIdentifier: String!,$isPrevNext:Boolean) {
    list(id: $id, projectIdentifier: $projectIdentifier,isPrevNext:$isPrevNext) {
    content
    seo {
      title
      keywords
      description
      __typename
    }
    prev{
      id
      title
    }
    next{
      id
      title
    }
    __typename
  }
  }
`

const updateListHits = gql`
  mutation updateListHits($id: Int!, $projectIdentifier: String!) {
    updateListHits(id: $id, projectIdentifier: $projectIdentifier)
  }
`
export default {
    data(){
        return{
            content:null,
            next:null,
            prev:null,
            id:null
        }
    },
    async mounted(){
        const {data} = await getGraphqlClient().rawRequest(updateListHits,{
            id:this.id,
            projectIdentifier:"news",
        })

    },
    async asyncData({
			app,
			params,
		}) {
      console.log(app,params)
        const {data,status} = await getGraphqlClient(app.context).rawRequest(query,{
            id:parseInt(params.id),
            projectIdentifier:"news",
            isPrevNext:true
        })

        if (status === 200) {
            return {
                content:data.list.content,
                next:data.list.next,
                prev:data.list.prev,
                id:parseInt(params.id),
                seo:data.list.seo
            }
        }
    },

  head () {
    if(this.seo){
      const {title,keywords,description} = this.seo
      return{
        title:title,
        meta:[
          {hid: 'description',
            name: 'description',
            content: description},
            {hid: 'keywords',
            name: 'keywords',
            content: keywords},
        ]
      }
    }else
     return {
        title: this.content ? `${this.content.title}` : 'Loading',
     }
  },

  methods: {
    formateDay(day){
      return  this.$dayjs(day).format('YYYY / MM / DD');
    },  
  }
}
</script>