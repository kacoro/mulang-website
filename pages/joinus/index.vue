<template>
  <div class="joinus">
    <div class="block_width">
      <div class="block_width_padding">
        <div class="content_padding">
          <h2 >JOIN US</h2>
          <h1 style="padding-bottom:50px" >加入我们</h1>
          <div class="col_list job_list">
            <div  v-for="(list,i) in lists.lists" :key="list.id" class="row row_hoverable row_openable " v-bind:class="{ row_open: index == i }" v-on:click="toggle(i)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">{{list.title}}</span>
                </div>
                <div class="col col_area"><span class="text">{{list.other.area}}</span></div>
                <div class="col col_date">发布时间 {{formateDay(list.createdAt)}}</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-10-10</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                   <div v-html="list.other.duty"></div>
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                       <div v-html="list.other.qualifications"></div>
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.joinus{
   overflow: hidden;
}
.block_width {
  
    margin:0 auto;
    max-width: 1066px;
}
.block_width_padding {
    margin: 0 42px;
}
.content_padding {
    padding-top: 130px;
    padding-bottom: 135px;
}
.section_sub_page_top h3.content_block_title, .section_sub_page h4.section_title {
    text-align: left;
    font-size: 42px;
    margin-top: 42px;
}

.col_list {
    border-top: 1px solid #c9c9c9;
}
.col_list .row {
    border-bottom: 1px solid #c9c9c9;
    position: relative;
}
.col_list .row_openable {
    cursor: pointer;
}
.col_list .col_bg {
    background-color: #19459a;
    position: absolute;
    left: -100%;
    right: -100%;
    top: -1px;
    bottom: -1px;
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
    visibility: hidden;
}
.col_list .col_wrap {
    position: relative;
}
.col_list .col_name {
    width: 33%;
    font-weight: 500;
}
.col_list .col_area {
    width: 34%;
}
.col_list .col {
    display: inline-block;
    padding: 1.8em 0;
    vertical-align: top;
    position: relative;
}
.col_list .col .text {
    display: inline-block;
    padding-right: 1em;
}
.icon_plus {
    position: absolute;
    right: 14px;
    top: 50%;
    width: 21px;
    height: 21px;
    margin-top: -10px;
    -webkit-transition: transform .3s ease-out;
    transition: transform .3s ease-out;
}
.row_open{
  color: #fff;
}

.icon_plus:before, .icon_plus:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    top: 10px;
    background: #f3cd1d;
    position: absolute;
}
.icon_plus:after {
    width: 1px;
    height: 100%;
    top: 0;
    left: 10px;
}
.row_open .icon_plus {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
}
.row_open .col_bg, .row_hoverable.active .col_bg, .web .row_hoverable:hover .col_bg {
    opacity: 1;
    visibility: visible;
}
.row_detail {
    display: none;
    border-top: 1px solid #fff;
    padding: 2em 0 4.7em;
    position: relative;
}
.row_open .row_detail {
    display: block;
}
.row_detail .col_date {
    display: none;
}
.row_detail .col_left {
    
}

.section_sub_page.section_auto_height .content_text, .section_sub_page .feature {
    opacity: 1;
    visibility: visible;
    -webkit-transform: none;
    transform: none;
    pointer-events: all;
}
.row_detail .col_left .content_text {
    margin-right: 3.5em;
}
.content_text {
    line-height: 1.625;
}
.section_sub_page .item_title {
    font-size: 1.5em;
    padding-bottom: .6em;
}
</style>
<script>
import { request, gql, GraphQLClient, rawRequest } from "graphql-request";
import getGraphqlClient from '~/utils/getGraphqlClient.js'
const query = gql`
  query Lists($limit:Int!,$page:Int,$categoryId:Int,$identifier:String!){
  lists(limit:$limit,page:$page,categoryId:$categoryId,identifier:$identifier){
    lists{
      id,title,projectId,categoryId,createdAt,
      other
    }
    total
    limit
    page
    totalPage
    hasMore
    __typename
  }
}
`;

export default {
   data() {
    return {
      index:null,
      lists:{
        lists:[],
        
      }
    };
    
  },
  async asyncData({ app, params }) {
    const { data, status } = await getGraphqlClient(app.context).rawRequest(query, {
      limit: 100,
      identifier:"joinus"
    });
    if (status === 200) {
      return {
        lists: data.lists
      };
    }
  },
  methods: {
     formateDay(day){
      return  this.$dayjs(parseInt(day)).format('YYYY-MM-DD');
    },  
    toggle: function (index) {
      // `this` 在方法里指向当前 Vue 实例
    
      // `event` 是原生 DOM 事件
      if (this.index==index) {
        this.index = null
      }else{
        this.index=index
      }
    }
  }
}
</script>