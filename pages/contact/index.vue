<template>
    <div class="contact-detail">
       <div class="banner">
      <div class="banner-bg">
        <div class="border-title border-title2">
          <h2>Contact Us</h2>
          <h2>联系我们</h2>
        </div>
      </div>
    </div>
  <div  class="container">
    <h3>联系我们</h3>
    
    <div class="editor" v-html="contact.content">
    </div>
  </div>
</div>
</template>
<style scoped>
  .banner {
  min-height: 320px;
  background: url("/images/about/banner.jpg") no-repeat;
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
  justify-content: center;
}
.container{margin: 1rem auto;}

</style>

<script>
export default {
  computed:{
    contact(){
      return this.$store.state.contact
    }
  },
}
</script>