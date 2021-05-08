<template>
  <div class="dajiang-wrap">
    <div class="banner">
      <div class="banner-bg">
        <div class="banner-border">
          <img
            src="/images/dajiang/banner-text-1.png"
            style="width: 2.37rem"
            alt=""
            class="pic"
            width="100%"
          />
          <img
            src="/images/dajiang/banner-text-2.png"
            alt=""
            style="width: 8.5rem"
            class="pic pic2"
            width="100%"
          />
          <p>
            康索特“云启”AI算法智能调度引擎，支持商汤、旷视、云天励飞、极视角等主流第三方厂商的算法接入，拥有自适应场景适配能力，多算法管理调度能力，包括计算机视觉、自然语言处理、文字识别等算法，实现AI算法与业务场景需求的深度结合，推动AI算法价值变现，赋能泛园区、社会治理、智慧环卫等多个应用领域智能化升级。
          </p>
        </div>
      </div>
    </div>

    <div class="section-parner">
      <h1>主流合作厂家</h1>
      <ul>
        <li><img class="pic" src="/images/dajiang/p1.png" /></li>
        <li><img class="pic" src="/images/dajiang/p2.png" /></li>
        <li><img class="pic" src="/images/dajiang/p3.png" /></li>
        <li><img class="pic" src="/images/dajiang/p4.png" /></li>
      </ul>
    </div>

    <div class="section-input">
      <h1>全品类接入能力</h1>
      <h4>支持超大规模数据连接</h4>
      <ul>
        <li>
          <h1>XX</h1>
          <h4>大类</h4>
        </li>
        <li>
          <h1>XX</h1>
          <h4>小类</h4>
        </li>
      </ul>
    </div>
    <div class="section-input-list">
      <div class="img">
        <img class="pic" src="/images/dajiang/1.png" />
      </div>
      <ul>
        <li>
          <h1>多协议兼容</h1>
          <h4>兼容行业主流和特殊定制设备的接入协议</h4>
        </li>
        <li>
          <h1>高可靠性</h1>
          <h4>支持故障自检，保障设备在线率99%以上</h4>
        </li>
        <li>
          <h1>低时延性</h1>
          <h4>创新应用5G技术，构建高性能传感网络，平均响应时间0.01S</h4>
        </li>
      </ul>
    </div>
    <div class="section-iot">
      <h1>IoT设计开发能力</h1>
      <h4>
        基于对行业场景数字化需求的深刻理解，客制化设计开发IoT设备，可以高效运行第三方AI算法，提升人工智能算法技术及物联传感技术在行业解决方案中的高效性及场景适应性。
      </h4>
      <h4 class="blue">已独立实现批量供货</h4>
      <img class="pic" src="/images/dajiang/2.png" />
    </div>

    <div class="section-solution">
      <div class="section-solution-header">
        <div class="item">
          <img class="pic" src="/images/index/1.jpg" />
          <h2>云启<span>（智能化）</span></h2>
          <p>
            超多品类和超高性能的算法连接能力，打造一套算法调度平台，实现业务流智能化升级
          </p>
          <NuxtLink :to="`yunqi`" class="button radius"> 了解更多 </NuxtLink>
        </div>
        <div class="item">
          <img class="pic" src="/images/index/3.jpg" />
          <h2>索特轻量云</h2>
          <p>致力于为中小企业客户<br>提供一站式轻应用云接入方案</p>
          <NuxtLink :to="`yunfan`" class="button radius"> 了解更多 </NuxtLink>
        </div>
      </div>
    </div>
    <div class="container">
      <div></div>
    </div>
  </div>
</template>
<style scoped>
.dajiang-wrap h1{
   padding-bottom:20px ;
}
.banner {
  min-height: 320px;
  background: url("/images/yunqi/banner.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.banner-bg {
  max-width: 1420px;
  box-sizing: border-box;
  padding: 15px;
  margin: 0 auto;
  position: relative;
  min-height: 7rem;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner-border {
  border-left: 10px solid #f3cd1d;
  padding-left: 35px;
}
.banner-bg img {
  padding-bottom: 25px;
}
.banner-bg .pic {
  min-width: 100px;
}
.banner-bg .pic2 {
  min-width: 230px;
}
.banner-bg h3 {
  color: #fff;
  padding-bottom: 25px;
}
.banner-bg p {
  color: #fff;
  font-size: 0.18rem;
  max-width: 1342px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.section-parner {
  padding-top: 0.8rem;
  text-align: center;
}

.section-parner ul {
  display: flex;
  justify-content: space-between;
  max-width: 1150px;
  margin: 0 auto;
  padding: 45px;
}
.section-parner ul li {
  padding: 15px;
}
.section-parner ul .pic {
  max-width: 100%;
}

.section-input{
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
}

.section-input ul{
  display: flex; 
  margin: .8rem 0;
}
.section-input ul li{
  width: 50%;
  background: #19459a;
  padding:.8rem;
  color:#fff;
}
.section-input ul li h1{
  color: #f3cd1d;
}

.section-input-list{
   display: flex;
   max-width: 1740px;
   box-sizing: border-box;
   padding:15px;
   margin: 0 auto;
   justify-content: center;
   align-items: center;
}
.img{
  width: 50%;
  box-sizing: border-box;
  padding-right: .5rem;
}
.pic{
  max-width: 100%;
}
.section-input-list ul li{
    padding: 37px 30px;
  border:1px solid #fff;
  font-size: 24px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.section-input-list ul li:hover{
  border:1px solid #f3cd1d;
}

.section-iot{
  max-width: 1000px;
  margin: 0.8rem auto;
  text-align: center;
}
.section-iot h1{
  padding-bottom: 40px;
}
.section-iot h4{
  line-height: 2;
}
.section-iot .pic{
  margin-top: .8rem;
  max-width: 100%;
}
</style>
<script>