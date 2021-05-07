<template>
  <div class="product-wrap">
    <div class="banner">
        <div class="banner-bg" >
             <h1>人脸终端系列</h1>
        </div>
    </div>
    <div class="container">
      <div class="product-content">
        <ul class="product-list">
          <li class="product-list-item">
            <div>
              <h2>人脸识别门禁</h2>
              <ul>
                <li>识别准确率高达99%</li>
                <li>识别速度小于1S%</li>
                <li>支持1:1和1：N混合识别模式%</li>
                <li>支持IC卡读卡功能%</li>
                <li>双目人脸识别，支持红外活体检测%</li>
                <li>支持高达万人级别的人脸库%</li>
              </ul>
            </div>

            <img class="pic" src="/images/product/1.jpg" />
          </li>
          <li class="product-list-item">
            <div>
              <h2>桌面智能访客终端</h2>
              <ul>
                <li>集二代身份证阅读、指纹比对、人脸比对等核验功能于一体%</li>
                <li>支持二维码扫描、证件扫描、小票打印、电话拨号等功能%</li>
                <li>外观精美小巧，前端屏幕采用10.1英寸</li>
              </ul>
            </div>
            <img class="pic" src="/images/product/2.jpg" />
          </li>
          <li class="product-list-item">
            <div>
              <h2>人脸识别门禁</h2>
              <ul>
                <li>支持双目活体检测</li>
                <li>支持强逆光环境下人员运动人脸追踪曝光%</li>
                <li>独有的人脸识别算法，精准识别人脸，人脸识别时间小于.5s</li>
                <li>支持10000+的人脸比对库及6万条识别记录</li>
                <li>支持人脸智能曝光、人脸智能增强设置</li>
                <li>支持设置最长自动曝光时间</li>
              </ul>
            </div>
            <img class="pic" src="/images/product/3.jpg" />
          </li>
          <li class="product-list-item">
            <div>
              <h2>人脸识别半球机</h2>
              <ul>
                <li>支持前端人脸比对，支持对运动人脸进行检测、跟踪、抓拍、</li>
                <li>特征提取、识别，输出最优人脸比对结果。</li>
                <li>
                  支持多种人脸抓拍模式：快速、间隔、离开后等人脸抓拍模式，
                </li>
                <li>抓拍次数可设。</li>
                <li>支持最多万张人脸库,支持多个布防时间段设置。</li>
                <li>支持黑白名单比对，VIP 名单库比对，非人脸库人员识别，</li>
                <li>完成报警输出。</li>
                <li>支持人脸智能曝光模式，强逆光下人脸依然清晰可见。</li>
              </ul>
            </div>
            <img class="pic" src="/images/product/4.jpg" />
          </li>
          <li class="product-list-item">
            <div>
              <h2>人脸识别消费机</h2>
              <ul>
                <li>人脸识别消费机主要应用于食堂、餐厅、超市收银等场景，</li>
                <li>可用于改变刷卡收费、手机支付、现金支付等多种支付手段，</li>
                <li>操作简单方便，运行安全可靠</li>
                <li>消费终端Android 5.1操作系统</li>
                <li>三合一支付认证终端，IC卡、二维码、人脸</li>
              </ul>
            </div>
            <img class="pic" src="/images/product/5.jpg" />
          </li>
        </ul>
      </div>
      <div class="other-series">
        <h1>其他系列</h1>
        <ul class="other-series-list">
          <li>
            <img class="pic" src="/images/product/1.png" />
            <h2>IPC摄像头</h2>
          </li>
          <li>
            <img class="pic" src="/images/product/2.png" />
            <h2>停车场出入</h2>
          </li>
          <li>
            <img class="pic" src="/images/product/3.png" />
            <h2>速通门</h2>
          </li>
          <li>
            <img class="pic" src="/images/product/4.png" />
            <h2>智能门锁</h2>
          </li>
          <li>
            <img class="pic" src="/images/product/5.png" />
            <h2></h2>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.product-content {
  padding: 0 35px 35px;
}
.banner{
    min-height: 240px;
    background: url('/images/product/banner.jpg') no-repeat;
     background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
}
.banner-bg{
    min-height: 4.9rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.banner-bg h1{
    color: #fff;
}
/* 产品列表 */
.product-list-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 60px 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product-list-item ul {
  font-size: 24px;
}
.product-list-item ul li {
  line-height: 40px;
  position: relative;
}
.product-list-item h2 {
  color: #19459a;
  padding-bottom: 30px;
}
.product-list-item ul li::before {
  content: "●";
  color: #f3cd1d;
  font-size: 12px;
  position: absolute;
  left: -2em;
}
/* 其他系列 */
.other-series h1 {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: #19459a;
  padding: 40px 0 30px;
}
.other-series h2 {
  font-size: 0.4rem;
  text-align: center;
  color: #fff;
  bottom: 0.55rem;
  width: 100%;
  position: absolute;
  transition: color, bottom 0.3s ease;
}
.other-series-list li:hover h2 {
  bottom: 0.6rem;
  color: #f3cd1d;
}
.other-series-list {
  display: flex;
  margin-bottom: 54px;
  flex-wrap: wrap;
}
.other-series-list li {
    
  background: #080505;
  font-size: 0;
  overflow: hidden;
  width: 20%;
  position: relative;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .other-series-list li {
    width: 33.33%;
  }
}
.other-series-list .pic {
  width: 100%;
  vertical-align: bottom;
}
</style>