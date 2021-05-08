<template>
  <div class="container">
    <div>
      <form @submit.prevent="submitFrom">
        <label>user:</label
        ><input name="usernameOrEmail" v-model="usernameOrEmail" />
        <label>password:</label><input type="password" v-model="password" />
        <button type="submit">login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { request, gql, GraphQLClient, rawRequest } from "graphql-request";

const query = gql`
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

const query2 = gql`
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

export default {
  data() {
    return {
      password: "",
      usernameOrEmail: "",
    };
  },

  head: {
    title: "Cars with Apollo",
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
      const { data, status } = await graphQLClient.rawRequest(query, {
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
        //  alert("登陆成功")
        this.$router.push({
          path: `/`,
        });
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
</script>