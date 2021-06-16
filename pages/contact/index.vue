<template>
    <div class="contact-detail">
       <div class="banner">
      <div class="banner-bg">
        <div class="border-title border-title2">
          <h2>商务合作</h2>
          

        </div>
        <p>业务合作类，如业务需求、落地场景、所需产品功能等描述</p>
      </div>
    </div>
  <div  class="container">
    
   
  </div>
</div>
</template>

<style scoped>
  .banner {
  min-height: 320px;
  height: 5rem;
  background: url("/images/contact/banner.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.banner-content {
  margin-top: 0.7rem;
}
.banner-bg {
  max-width: 1420px;
  box-sizing: border-box;
  padding: 15px;
  margin: 0 auto;
  position: relative;
  min-height: 5rem;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.border-title2{
  margin-bottom: 1.5em;
}
.banner-bg p {
  color: #fff;
  font-size: 14px;
}
.container{margin: 1rem auto;}

</style>

<script>
import {  gql, } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const CreateListMutation = gql`
  mutation CreateList($json: JSON!, $projectIdentifier: String!) {
    createList(json: $json, projectIdentifier: $projectIdentifier)
  }
`;

export default {
  layout:"withoutMessage",
  computed:{
    contact(){
      return this.$store.state.contact
    }
  },
   data() {
    return {
      drawer:false,
      username: "",
      email: "",
      tel: "",
      address: "",
      company: "",
    };
  },methods: {
    async submitFrom(e) {
      if (this.username == "") {
        this.$message({
          message: "请填写您的姓名！",
          type: "warning",
        });
        return false;
      }
      if (this.tel == "") {
        this.$message({
          message: "请填写您的电话！",
          type: "warning",
        });
        return false;
      }
      if (this.email == "") {
        this.$message({
          message: "请填写您的邮箱！",
          type: "warning",
        });
        return false;
      }

      const { data, status } = await getGraphqlClient().rawRequest(
        CreateListMutation,
        {
          json: {
            title: this.username + "的申请",
            username: this.username,
            email: this.email,
            tel: this.tel,
            address: this.address,
            company: this.company,
          },
          projectIdentifier: "message",
        }
      );
      e.preventDefault();

      if (data.createList) {
        (this.username = ""),
          (this.email = ""),
          (this.tel = ""),
          (this.address = ""),
          (this.company = "");
        this.$message({
          message: "提交成功！",
          type: "success",
          duration: 1000,
        });
      } else {
        this.$message({
          message: "提交失败！",
          type: "error",
          duration: 1000,
        });
      }
    },
  },
}
</script>