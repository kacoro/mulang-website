<template>
    <div class="messages">
      <div aria-hidden="true" class="block-spacer md"></div>
      <div class="messages-wrap">
        
        <h2 style="font-size: 0.41rem">
          CONTACT US TODAY TO STREAMLINE YOUR LOGISTICS OPERATIONS
        </h2>
        <div aria-hidden="true" class="block-spacer md"></div>
        <div class="messages-content" >
        
          <form @submit.prevent="submitFrom" class="messages-form" autocomplete="off">
            <div class="messages-form-content">
              <div class="messages-form-input">
                <input
                  
                  name="username"
                  v-model="username"
                  placeholder="Full Name"
                />
                <input type="email" autocomplete="email" v-model="email" placeholder="Email" />
              </div>
              <div class="messages-form-input">
                <input type="tel" v-model="tel" autocomplete="tel" placeholder="Phone" />
                <input
                  type="company"
                  autocomplete='organization'
                  v-model="company"
                  placeholder="company"
                />
              </div>
              <div class="messages-form-input messages-form-textarea">
                <textarea
                  name="note"
                  
                  v-model="note"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div class="text-align-right">
              <button type="submit" class="button dark  mid">Send Message   <svg class="ms-icon button-anime" aria-hidden="true">
            <use xlink:href="#icon-arrow"></use>
          </svg></button>
            </div>
          </form>
          
        </div>
        <div aria-hidden="true" class="block-spacer md"></div>
      </div>
    </div>
</template>
<style scoped>

  .messages-wrap{
    max-width: 1314px;
    margin: 0 auto;
    color: #f0f0f0;
  }
  .messages-wrap h1{
    font-size: 41px;
    padding: 0 15px;
    padding-bottom: 35px;
  }
  .messages{
    padding: 60px 0 45px;
    background: #f0f0f0;
   
  }
.messages-content{
  display: flex;
  justify-content: center;
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
  
  justify-content: center;
}
 .messages-form .button{
   margin-right: 15px;
}
input,textarea{
  background: transparent;
  box-sizing: border-box;
  padding: 0 20px;
  border: 1px solid transparent;
  outline-style: none ;
  max-width: 100%!important;
}
input:focus,textarea:focus{
  border: 2px  solid #0A0066;
  outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.0),0 0 1px rgba(243,205,29,1);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.0),0 0 1px rgba(243,205,29,1)
}
input{
  width: 100%;
  height: 70px;
  margin-bottom: 15px;
  border: 2px  solid #0A0066;
}
.messages-form-input{
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 15px;
  box-sizing: border-box;
  
}
.messages-form-textarea{
  width: 100%;
}
textarea{
  width:100%;
  margin-right: 15px;
  margin-bottom: 15px;
  padding-top:15px;
  height: 154px;
  border: 2px  solid #0A0066;
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
            message: 'Full Name is a required field！',
            type: 'warning',
        });
        return false;
      }
      if (this.tel == "") {
         this.$message({
            message: 'Phone is a required field!',
            type: 'warning',
        });
        return false;
      }
      if (this.email == "") {
        this.$message({
            message: 'Email is a required field!',
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
            message: 'success！',
            type: 'success',
            duration: 1000
        });
      
      } else {
        this.$message({
            message: 'error！',
            type: 'error',
            duration: 1000
        });
      }
    },
     }
}
</script>