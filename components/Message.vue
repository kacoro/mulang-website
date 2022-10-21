<template>
    <div class="messages">
      <div class="messages-wrap">
        <h1 style="font-size: 0.41rem">
          如有业务合作，您可留下您的信息，我们取得您的信息后将会与您联系
        </h1>
        <div class="messages-content">
          <div class="messages-content-left">
            <p>深圳市康索特软件有限公司</p>
            <p>&nbsp;</p>
            <p style="font-size: 30px; font-weight: bold">{{ contact.tel }}</p>
            <p>&nbsp;</p>
            <p>commsoft@commsoft.com.cn</p>
            <p>&nbsp;</p>
            <p>{{ contact.address }}</p>
            <p>{{ contact.adress2 }}</p>
          </div>
          <form @submit.prevent="submitFrom" class="messages-form" autocomplete="off">
            <div class="messages-form-content">
              <div class="messages-form-input">
                <input
                  
                  name="username"
                  v-model="username"
                  placeholder="您的姓名"
                />
                <input type="email" autocomplete="email" v-model="email" placeholder="您的邮箱" />
              </div>
              <div class="messages-form-input">
                <input type="tel" v-model="tel" autocomplete="tel" placeholder="您的电话" />
                <input
                  type="company"
                  autocomplete='organization'
                  v-model="company"
                  placeholder="公司名称"
                />
              </div>
              <div class="messages-form-input">
                <textarea
                  name="note"
                  
                  v-model="note"
                  placeholder="交流事宜"
                ></textarea>
              </div>
            </div>
            <div class="text-align-right">
              <button type="submit" class="button radius mid">立即提交</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<style scoped>

  .messages-wrap{
    max-width: 1314px;
    margin: 0 auto;
    color: #fff;
  }
  .messages-wrap h1{
    font-size: 41px;
    padding: 0 15px;
    padding-bottom: 35px;
  }
  .messages{
    padding: 60px 0 45px;
    background: #19459a;
   
  }
.messages-content{
  display: flex;
   justify-content: space-between;
   flex-wrap: wrap;

}
.messages-content-left{
  flex: 1;
  padding:0 15px 15px;
}

.messages-form{
  display: flex;
  flex-direction: column;
  padding-left: 15px;
}
.messages-form-content{
  display: flex;
  max-width: 850px;
  flex-wrap: wrap;
}
 .messages-form .button{
   margin-right: 15px;
}
input,textarea{
  background: #e5e5e5;
  box-sizing: border-box;
  padding: 0 20px;
  border: 1px solid transparent;
  outline-style: none ;
  max-width: 100%!important;
}
input:focus,textarea:focus{
  border: 1px solid #f3cd1d;
  outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.0),0 0 1px rgba(243,205,29,1);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.0),0 0 1px rgba(243,205,29,1)
}
input{
  
  width: 267px;
  height: 70px;
  margin-bottom: 15px;
  margin-right: 15px;
}
.messages-form-input{
  display: flex;
  flex-direction: column;
}

textarea{
  width: 267px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding-top:15px;
  height: 154px;
}
@media screen and (max-width:600px) {
  input{
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    height: 32px;

  }
  .messages-form-input{
    width: 100%;
    padding-right: 15px;
  }
  textarea{
    width: 100%;
    font-size: 14px;
    height:100px ;
  }
  
}
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
  
    data() {
    return {
      drawer:false,
      username: "",
      email: "",
      tel: "",
      note: "",
      company: "",
    };
  },
  computed: {
    contact() {
      return this.$store.state.contact;
    }
   
  },
     methods: {
    async submitFrom(e) {
      if (this.username == "") {
        this.$message({
            message: '请填写您的姓名！',
            type: 'warning',
        });
        return false;
      }
      if (this.tel == "") {
         this.$message({
            message: '请填写您的电话！',
            type: 'warning',
        });
        return false;
      }
      if (this.email == "") {
        this.$message({
            message: '请填写您的邮箱！',
            type: 'warning',
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
            note: this.note,
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
            message: '提交成功！',
            type: 'success',
            duration: 1000
        });
      
      } else {
        this.$message({
            message: '提交失败！',
            type: 'error',
            duration: 1000
        });
      }
    },
     }
}
</script>