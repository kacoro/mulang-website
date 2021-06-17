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
    <div class="contact-detail__container">
      <no-ssr>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="85px"
          class="contact-ruleForm"
        >
          <div class="contact-ruleForm__left">
            <el-form-item label="联系人" prop="username">
              <el-input
                v-model="ruleForm.username"
                :placeholder="rules.username[0].message"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="tel">
              <el-input
                v-model="ruleForm.tel"
                :placeholder="rules.tel[0].message"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系邮箱" prop="email">
              <el-input
                v-model="ruleForm.email"
                :placeholder="rules.email[0].message"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系问题" prop="note" >
              <el-input
                type="textarea" :autosize="{minRows:4,maxRow:6}"
                v-model="ruleForm.note"
                :placeholder="rules.note[0].message"
              ></el-input>
            </el-form-item>
          </div>
          <div class="contact-ruleForm__right">
            <el-form-item label="公司名称" prop="company">
              <el-input
                v-model="ruleForm.company"
                :placeholder="rules.company[0].message"
              ></el-input>
            </el-form-item>
            <el-form-item label="所在地址" prop="address">
              <el-input
                v-model="ruleForm.address"
                :placeholder="rules.address[0].message"
              ></el-input>
            </el-form-item>
            <div class="contact-ruleForm__right__content">
              <el-form-item>
                <p class="contact-ruleForm__right__content__tips" v-if="valid">
                  已提交，工作人员审核问题通过后将您联系
                </p>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >立即创建</el-button
                >
              </el-form-item>
            </div>
          </div>
        </el-form>
      </no-ssr>
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
        title: title+"|商务合作",
        meta: [
          { hid: "description", name: "description", content: "业务合作类，如业务需求、落地场景、所需产品功能等描述" },
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
          { required: true, message: "请输入联系人姓名", trigger: "blur" },
        ],
        tel: [
          { required: true, message: "请输入联系人电话", trigger: "change" },
        ],
        email: [
          { required: true, message: "请输入联系人邮箱", trigger: "change" },
        ],
        note: [
          {
            required: true,
            message: "请描述您的应用场景和技术要求",
            trigger: "change",
          },
        ],
        company: [
          { required: false, message: "请输入公司名称", trigger: "blur" },
        ],
        address: [
          { required: false, message: "请输入所在地址", trigger: "blur" },
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