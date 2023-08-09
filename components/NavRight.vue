<template>
      <div class="nav-right hidden-sm-and-down ">
          <a  href="http://www.commsoft.com.cn/#/login"  class="login-text" target="_blank">
            登录
        </a>
        <a href="http://www.commsoft.com.cn/#/sign" class="sign-text" target="_blank">
            注册
        </a>
        </div>
</template>
<style scoped>
 .nav-right{
  display: flex;
}
.nav-right a{
    width: 95px;
    display: inline-block;
    height: 100%;
    text-align: center;
    background: #fff;
    color: #2a58fc;
}
 .nav-right a.login-text{
  background: #2a58fc;
    color: #fff;
}
@media only screen and (max-width: 992px) {
    .nav-right{
        margin-right: 100px;
}}
</style>