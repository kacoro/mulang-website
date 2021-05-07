<template>
    <div class="solution-wrap">
        <div class="banner">
        <div class="banner-bg" >
             <h1>通用园区</h1>
             <p>康索特善用技术，从AIoT基建到智能化应用，覆盖校园、园区、小区、楼宇等社会微单元场景，提供包括人车通行、能源管理、支付服务等解决方案，全方位、全天候保障客户生产和运营活动，为人们次提供学习、工作和生活场景的极致体验</p>
        </div>
    </div>
    <div class="solution-tabs">
         <ul>
             <li class="active">
                 <img src="/images/solution/yuanqu.png" alt="">
                 <h2>通用园区</h2>
             </li>
             <li>
                 <img src="/images/solution/chengshi.png" alt="">
                 <h2>城市治理</h2>
             </li>
         </ul>
    </div>
     <div class="container">
          <div class="solution-text">
              <h1 class="blue">广泛赋能</h1>
                 <p>提供从AIoT基建到智能化应用整体解决方案轻量云部署，灵活高效的组件式软硬件产品和解决方案交付能力支持特殊场景、小众需求产品和解决方案定制开发构建全方位、全天候、全流程智能化服务提升客户生产和运营效率，节约30%管理成本</p>
         </div>
         <div class="solution-list">
              <h1 class="blue">应用场景</h1>
            <ul>
                <li>
                    <img src="/images/solution/1.jpg" />
                    <div>
                        <h1>园区管理</h1>
                        <p>为工业园区和综合性办公园区，提供行政管理系统、安防管理系统、信息宣发系统和刷脸消费系统等智慧化管理服务，包括通行管理、考勤管理、会议管理、人车搜索、刷脸消费、信息精准推送等。</p>
                        <nuxt-link to="/" class="button radius">了解更多</nuxt-link>
                        
                    </div>
                </li>
                <li>
                    <img src="/images/solution/2.jpg" />
                    <div>
                        <h1>校园管理</h1>
                        <p>为小学、初高中、高职、大学等学校提供专业的提供AIoT产品和解决方案应用服务，包含通行管理、归寝管理、人车检索等安全与后勤管理服务，食堂消费、水电控制等计费管理，电子黑板、电子班牌等智慧教务系统等。</p>
                        <nuxt-link to="/" class="button radius">了解更多</nuxt-link>
                    </div>
                </li>
                <li>
                    <img src="/images/solution/3.jpg" />
                    <div>
                        <h1>医院管理</h1>
                        <p>实现“刷脸“全自助就诊服务，如挂号、取号、缴费、取报告等。同时搭载动态人像识别系统、车牌车型识别系统等应用系统，用于医院的人员出入管理、公共区域安全防护、打击“号贩子”和“医闹”等。</p>
                        <nuxt-link to="/" class="button radius">了解更多</nuxt-link>
                    </div>
                </li>
            </ul>
         </div>
         
     </div>
    </div>
</template>

<style scoped>
.banner{
    min-height: 240px;
    background: url('/images/solution/banner.jpg') no-repeat;
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
    flex-direction: column;
}
.banner-bg h1{
    color: #fff;
    font-size: 40px;
    padding-bottom: 25px;
}
.banner-bg p{
    color: #fff;
    font-size: .18rem;
    text-align: center;
    max-width: 834px;
    line-height: 24px;
    
}
@media screen and (max-width :1024px) {
    .banner-bg p{
        max-width: 100%;
        padding:0 15px;
        box-sizing: border-box;
    }
}
.solution-tabs{
    max-width: 970px;
    margin: 0 auto;
    padding-top: 52px;
}
.solution-tabs ul{
    display: flex;
}
.solution-tabs ul li{
    background: #e8ecf5;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%;
    opacity: .5;
    padding-bottom: 30px;
    cursor: pointer;
    transition:all .5s ease;
}
.solution-tabs ul li img{
    margin-top: -17%;
    max-width: 100%;
}
.solution-tabs ul li h2{
    
}
.solution-tabs ul li.active,.solution-tabs ul li:hover{
    background: #d1daeb;
    color: #19459a;
    opacity:1
}
.solution-tabs ul li.active img{
    
}
.solution-text{
    max-width: 900px;
    box-sizing: border-box;
    text-align: center;
    margin: 0 auto;
    padding: 30px;
    padding-bottom: .8rem;
}
.solution-text p{
    padding-top: 20px;
    font-size: 18px;
}
.solution-list{

}
.solution-list h1{
    text-align: center;
    padding-bottom: 46px;
}
.solution-list ul li{
    padding:40px;
    background: #19459a;
    margin-bottom: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.solution-list ul li h1{
    text-align: left;
}
.solution-list ul li div{
    width: 50%;
}
.solution-list ul li p{
    
    margin-bottom: 50px;
    overflow: hidden;text-overflow: ellipsis; display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;
}
.solution-list ul li img{
    width: 50%;
    padding-right:40px
}
</style>