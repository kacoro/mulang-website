<template>
    <div class="solution-content-wrap ">
        <div class="banner header" :class="{banner2:content.categoryId==57,banner3:content.categoryId==58}">
        <div class="banner-bg" >
             <h1>{{content.title}}</h1>
             <p>{{content.note}}</p>
        </div>
    </div>
    <div class="auto_fixed solution-tabs" :class="auto_fixed">
         <ul>
             <li v-scroll-to="{el: '#summary',offset: -100}"  :class="{active:active==0}" @click="change(0)">
                 方案概述
             </li>
             <li  v-scroll-to="{el: '#ability',offset: -170}" :class="{active:active==1}" @click="change(1)">
                 落地能力
             </li>
            
             <li  v-scroll-to="{el: '#highlights',offset: -170}" :class="{active:active==2}" @click="change(2)">
                 方案亮点
             </li>
             <li  v-scroll-to="{el: '#classicCase',offset: -170}"  :class="{active:active==3}" @click="change(3)">
                 经典案例
             </li>
         </ul>
    </div>
     <div >
        
         <div  id="summary" class="solution-text">
           <h1>方案概述</h1>
           <div v-html="content.summary" class="solution-content"></div>
         </div>
         <div class="solution-text-2">
         <div  id="ability" class="solution-text ">
           <h1>落地能力</h1>
           <div v-html="content.ability" class="solution-content"></div>
         </div>
         </div>
         <div  id="highlights" class="solution-text">
           <h1>方案亮点</h1>
           <div v-html="content.highlights" class="solution-content"></div>
         </div>
         <div id="classicCase" class="solution-text">
           <h1>经典案例</h1>
            <div class="solution-list" v-if="list.length>0">
           <div class="img">
              <img :src="list[0].other.thumb" v-if="list[0].other.thumb" />
            <img v-else src="/images/solution/TnB6b0a0Gc1p.png"/>
           </div>
          
            <ul>
                <li :key="item.id" v-for="item,index in list" :class="{active:caseActive==index}" @click="changeCase(index)">
                    <div>
                        <div class="list-head">
                          <span class="title" >{{item.title}}</span>
                          <span class="subTitle" >{{item.other.subTitle}}</span>
                        </div>
                       
                        <p>{{item.other.note}}</p>
                    </div>
                </li>
            </ul>
         </div>
         </div>
     </div>
    </div>
</template>

<style lang="scss">
.solution-content-wrap{
  .solution-content{
  font-size: 14px;
  padding: 38px 20px;
  line-height: 24px;
}
.solution-text-2{
  background: #f2f2f2;
}
.solution-content ul{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.solution-content ul li{
  
  text-align: center;
}
.fixed{
    position: fixed;
    top: 100px;
    width: 100%;
  }
.banner{
    min-height: 240px;
    background: url('/images/solution/banner.jpg') no-repeat;
     background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
}
.banner2 {
  background: url("/images/solution/banner2.jpg") no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.banner3 {
  background: url("/images/solution/banner3.jpg") no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
    background: #19459a;
}
.solution-tabs ul{
  max-width: 1458px;
  margin: 0 auto;

    display: flex;

}
.solution-tabs ul li{
   color:#fff;
   font-weight: bold;
   height: 70px;
   line-height: 70px;
   margin:0 .6rem;
   position: relative;
   cursor: pointer;
   &:after{
      display: none;
      width: 100%;
      content: "";
      height: 3px;
      background: #e9c62c;
      position: absolute;
      bottom: 0px;
    }
}


.solution-tabs ul li.active,.solution-tabs ul li:hover{
   
    &:after{
      display: block;
    }
}

.solution-text{
    max-width: 1280px;
    box-sizing: border-box;
    text-align: center;
    margin: 0 auto;
    padding:80px 30px;
}

.solution-list{
  max-width: 991px;
  margin: 38px auto;
  display: flex;
  text-align: left;
}
.solution-list .img{
  box-sizing: border-box;
  margin-right: 8px;
  margin-bottom: 8px;
  overflow: hidden;
  width: 100%;
  img{
    height: 100%;
  }
}
.solution-list ul {
    flex: 1;
    min-width: 50%;
}
@media screen and (max-width :768px) {
  .solution-tabs ul li{
    font-size: 13px;
  }
  .solution-list {
    flex-wrap: wrap;
  }
  .solution-list .img{margin-right: 0;height: 220px; width: 100%;
  img{
    width: 100%;
  }}
  .subTitle{
      margin-top: 15px;
    }
   
}
.solution-list ul li{
    height: 62px;
    overflow: hidden;
    background: #e9c62c;
    padding:0 .48rem;
    color: #19459a;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all .3s linear;
    .list-head{
      margin-top: 15px;
    }
    .title{
      height: 32px;
      line-height: 32px;
      display: inline-block;
      font-size: 24px;
    }
    .subTitle{
      margin-top: 7px;
      display: inline-block;
    }
    &.active{
      color: #e9c62c;
        background: #19459a;
        height:185px ;
    }
}


.solution-list ul li p{
  margin-top: 24px;
  color: #fff;
    margin-bottom: 50px;
    font-size: 14px;
    overflow: hidden;text-overflow: ellipsis; display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;
}
}


</style>


<script>
import {  gql   } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
  query ListEditPrevInfo($id: Int!, $projectIdentifier: String!) {
  list(id: $id, projectIdentifier: $projectIdentifier) {
    content
    
    seo {
      title
      keywords
      description
    }
  }
}

`;

const listsByIds = gql`
query ListsByIds($ids: String!, $projectIdentifier: String!) {
  listsByIds(ids: $ids, projectIdentifier: $projectIdentifier) {
    id
    title
    projectId
    categoryId
    createdAt
    other
    __typename
  }
}

`

export default {
  name: "solution",
    head() {
    if (this.seo) {
      const { title, keywords, description } = this.seo;
      return {
        title: title,
        meta: [
          { hid: "description", name: "description", content: description },
          { hid: "keywords", name: "keywords", content: keywords },
        ],
      };
    } else
      return {
        title: this.content ? `${this.content.title}` : "Loading",
      };
  },
  data() {
    return {
      active:0,
      caseActive:0,
      content:null,
      list:[],
      auto_fixed: {
        fixed: false
      },
      offset:-170
    };
  },

  async asyncData({ app, params }) {
    let content = null
    let list = []
    const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        id: parseInt(params.id),
        projectIdentifier: "solution",
      }
    );
    if (status === 200) {
      content = data.list.content
      
    }
    if(content.classicCase){
      const {data:data2,status:status2} = await getGraphqlClient(app.context).rawRequest(
        listsByIds,{
          ids:content.classicCase,
          projectIdentifier: "classicCase",
        }
      )
    
      if(status2 ==200&&data2.listsByIds){
        list = data2.listsByIds
      }
    }
    console.log(content,list)
      return {
          content,
          list
      };
  },
   mounted(){
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  destroyed(){
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(){
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      let header_height = null
      if(document.getElementsByClassName('header')[0]){
        header_height = document.getElementsByClassName('header')[0].offsetHeight
      }
      // console.log('滚动的距离:'+scrolled,'头部的高度:'+ header_height)
      this.auto_fixed = {
        auto_fixed: true,
        fixed: scrolled >= header_height
      }
    },
    async change(active){
        this.active = active
    },
    changeCase(caseActive){
      this.caseActive = caseActive
    }
    
  },
};
</script>

