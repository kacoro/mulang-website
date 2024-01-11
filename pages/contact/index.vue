<template>
  <div class="contact-detail">
    <div class="banner">
      <div class="banner-bg">
        <div class="border-title border-title2">
          <h2>CONTACT US</h2>
        </div>
        <p>CONTACT US TODAY TO STREAMLINE YOUR LOGISTICS OPERATIONS</p>
      </div>
    </div>
    <div class="contact-detail__container">
      <no-ssr>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="20px"
          size="medium"
          class="contact-ruleForm"
        >
        <div class="contact-container">
          <div class="contact-ruleForm__left">
            <el-form-item label="" prop="username" >
              <el-input class="my-input"
                v-model="ruleForm.username"
                :placeholder="rules.username[0].placeholder"
              ></el-input>
            </el-form-item>
           
            <el-form-item label="" prop="tel">
              <el-input
                v-model="ruleForm.tel"
                :placeholder="rules.tel[0].placeholder"
              ></el-input>
            </el-form-item>
           
            <el-form-item label="" prop="note" >
              <el-input
                type="textarea" :autosize="{minRows:4,maxRow:6}"
                v-model="ruleForm.note"
                :placeholder="rules.note[0].placeholder"
              ></el-input>
            </el-form-item>
          </div>
          <div class="contact-ruleForm__right">
            <el-form-item label="" prop="email">
              <el-input
                v-model="ruleForm.email"
                :placeholder="rules.email[0].placeholder"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="company">
              <el-input
                v-model="ruleForm.company"
                :placeholder="rules.company[0].placeholder"
              ></el-input>
            </el-form-item>
            <!-- <el-form-item label="" prop="address">
              <el-input
                v-model="ruleForm.address"
                :placeholder="rules.address[0].placeholder"
              ></el-input>
            </el-form-item> -->
            <div class="contact-ruleForm__right__content">
              <!-- <el-form-item>
                <p class="contact-ruleForm__right__content__tips" v-if="valid">
                  Success
                </p>
              </el-form-item> -->
             
            </div>
            
          </div>
          <el-form-item>
                <!-- <button type="submit" @click="submitForm('ruleForm')" class="button dark  mid">Send Message   <svg class="ms-icon button-anime" aria-hidden="true">
            <use xlink:href="#icon-arrow"></use>
          </svg></button> -->
                <el-button type="submit" style="width:280px;" class="button dark  mid " @click="submitForm('ruleForm')"
                  >Send Message<svg class="ms-icon button-anime" aria-hidden="true">
            <use xlink:href="#icon-arrow"></use>
          </svg></el-button>
              </el-form-item>
        </div>
        
        </el-form>
      </no-ssr>
    </div>
  </div>
</template>

<style scoped>
.contact-ruleForm{
  padding-right: 20px;box-sizing: border-box;
}
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
.border-title2 {
  margin-bottom: 1.5em;
}
.banner-bg p {
  color: #fff;
  font-size: 14px;
}
.container {
  margin: 1rem auto;
}
.el-input--medium .el-input__inner {
    height: 53px;
    line-height: 53px;
}

</style>
<script>
import "./index.scss";
import { gql } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const CreateListMutation = gql`
  mutation CreateList($json: JSON!, $projectIdentifier: String!) {
    createList(json: $json, projectIdentifier: $projectIdentifier)
  }
`;

export default {
  layout: "withoutMessage",
  computed: {
    contact() {
      return this.$store.state.contact;
    },site() {
      return this.$store.state.site;
    },
  },
 
    head() {
    if (this.site?.seo) {
      const { title, keywords, description } = this.site.seo;
      return {
        title: title+"|Contact",
        meta: [
          { hid: "description", name: "description", content: "description" },
          { hid: "keywords", name: "keywords", content: keywords },
        ],
      };
    } else
      return {
        title: "康索特官网|商务合作",
      };
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      drawer: false,
      valid: false,
      loading: false,
      ruleForm: {
        username: "",
        email: "",
        tel: "",
        address: "",
        company: "",
        note: "",
      },
      rules: {
        username: [
          { required: true, placeholder:"Full Name",message: "Full Name is a required field！", trigger: "blur" },
        ],
        tel: [
          { required: true, placeholder:"Phone", message: "Phone is a required field！", trigger: "change" },
        ],
        email: [
          { required: true, placeholder:"Email", message: "Email is a required field！", trigger: "change" },
          { type: 'email', message: 'Please input correct email address ', trigger: ['blur', 'change'] }
        ],
        note: [
          {
            required: true,
            message: "Message",
            trigger: "change",
            placeholder:"Message", message: "Message is a required field！",
          },
        ],
        company: [
          { required: false, placeholder:"Company",message: "Company is a required field！", trigger: "blur" },
        ],
        address: [
          { required: false, placeholder:"Address",message: "Address is a required field！", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        this.valid = valid;
        if (valid) {
          if (!this.loading) this.cunstomfetch();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async cunstomfetch(e) {
      this.loading = true;
      const { data } = await getGraphqlClient().rawRequest(CreateListMutation, {
        json: {
          title: this.ruleForm.username + "的申请",
          ...this.ruleForm,
        },
        projectIdentifier: "message",
      });
      this.loading = false;
      if (data.createList) {
        this.valid = true;
        this.resetForm("ruleForm");
        this.$message({
          message: "提交成功！",
          type: "success",
          duration: 1000,
        });
      } else {
        this.valid = false;
        this.$message({
          message: "提交失败！",
          type: "error",
          duration: 1000,
        });
      }
    },
  },
};
</script>