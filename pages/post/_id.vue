<template>
  <div v-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{post.text }}</p>

    <div v-html="post.text"></div>
    <p>
      <NuxtLink to="/">
        Home page
      </NuxtLink>
    </p>
  </div>
</template>

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
      const graphQLClient = new GraphQLClient('http://127.0.0.1:4002/graphql', {
          credentials: 'include',
          mode: 'cors',
        })
        const {data,status} = await graphQLClient.rawRequest(query,{
            id:parseInt(params.id)
        })

        if (status === 200) {
            return {
                post:data.post
            }
        }
    },
//   apollo: {
//     post: {
//       query: post,
//       prefetch: ({ route }) => ({ id: route.params.id }),
//       variables () {
//         return { id: 2 }
//       }
//     }
//   },
  head () {
      
     return {
      title: (this.post ? `${this.post.title}` : 'Loading')
     }
  },

  methods: {
    
  }
}
</script>