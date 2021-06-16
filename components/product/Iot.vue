<template>
  <div class="left-part">
    <div class="menu hidden-sm-and-down">
      <div class="menu-item menu-item-core" v-for="menu,index in menus" :key="index">
        <nuxt-link :to="menu.link" class="menu-name">{{menu.title}}</nuxt-link>
        <span class="nav-line"></span>
        <div class="menu-popover" v-if="menu.children">
          <div class="menu-popover-item" >
            <template v-if="menu.children[0]&&menu.children[0].children&&menu.children[0].children.length>0"> 
               <ul v-for="child,j in menu.children" :key="j">
                  <h6><nuxt-link exact :to="child.link" class="menu-name">{{child.title}}</nuxt-link></h6>
                  <li v-for="item,k in child.children" :key="k">
                    <nuxt-link :to="item.link" class="menu-name"
                      >{{item.title}}</nuxt-link
                    >
                    <span class="nav-line"></span>
                  </li>
                </ul>

            </template>
            <template v-else>
               <ul >
                  <li v-for="child,j in menu.children" :key="j">
                    <nuxt-link :to="child.link" class="menu-name"
                      >{{child.title}}</nuxt-link
                    >
                   
                  </li>
                </ul>
            </template>
         
            
          </div>
        </div>
      </div>
    </div>
    <el-drawer
      :append-to-body="true"
      :visible.sync="drawer"
      direction="rtl"
      size="300px"
      title="导航"
      :withHeader="false"
      :before-close="handleDrawClose"
      custom-class="drwaer-menu"
    >
      <div class="drawer-header">
        <div @click="drawer = !drawer" class="toggle-btn">
          <span v-bind:class="{ 'first-rotate': drawer }"></span>
          <span v-bind:class="{ 'mid-width': drawer }"></span>
          <span v-bind:class="{ 'last-rotate': drawer }"></span>
        </div>
      </div>
      <el-menu
        :default-active="$route.path"
        router
        text-color="#fff"
        active-text-color="#f3cd1d"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#19459a"
      >
        <template v-for="menu,index in menus" >
             <template v-if="menu.children&&menu.children.length>0">
                <el-submenu :index="menu.link" :key="index">
                  <template slot="title">{{menu.title}}</template>
                   <template v-for="child,j in menu.children"  >
                      <template v-if="child.children&&child.children.length>0">
                        <el-submenu :index="child.link" :key="j">
                          <template slot="title">{{menu.title}}</template>
                          <template v-for="item,k in menu.children"  >
                               <el-menu-item :index="item.link"  :key="k">
                                <template slot="title">
                                  <span>{{item.title}}</span>
                                </template>
                                 </el-menu-item>
                          </template>
                        </el-submenu>
                    </template>
                    <el-menu-item :index="child.link" v-else  :key="j">
                        <template slot="title">
                          <span>{{child.title}}</span>
                        </template>
                      </el-menu-item>
                   </template>
                </el-submenu>
             </template>
             <el-menu-item :index="menu.link" v-else  :key="index">
                <template slot="title">
                  <span>{{menu.title}}</span>
                </template>
              </el-menu-item>
        </template>
        
      </el-menu>
    </el-drawer>
    <div @click="drawer = !drawer" class="hidden-md-and-up toggle-btn">
      <span v-bind:class="{ 'first-rotate': drawer }"></span>
      <span v-bind:class="{ 'mid-width': drawer }"></span>
      <span v-bind:class="{ 'last-rotate': drawer }"></span>
    </div>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
}
.left-part {
  align-items: center;
  display: inline-block;
  vertical-align: top;
  margin-left: 120px;
  margin-right: 50px;
  width: 1135px;
  max-width: 1135px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.left-part .menu-item .menu-name {
  font-size: 16px;
  text-decoration: none;
  color: #fff;
}
@media only screen and (max-width: 1200px) {
  .left-part {
    margin-left: 40px !important;
  }
  .left-part .menu-item .menu-name {
    font-size: 14px;
  }
  .logo {
    margin-left: 20px;
  }
}

@media only screen and (max-width: 992px) {
  .left-part {
    margin-left: 40px !important;
  }
  .left-part .menu-item .menu-name {
    font-size: 14px;
  }
  .logo {
    margin-left: 20px;
  }
}

.left-part .menu-item .menu-name:hover {
  color: #f3cd1d;
}
.left-part .menu-item .menu-name:active {
  color: #fff;
}

.left-part .menu-item .menu-name.nuxt-link-active {
  color: #f3cd1d;
}

.left-part {
  align-items: center;
  display: inline-block;
  vertical-align: top;
  margin-left: 120px;
  margin-right: 50px;
  width: 1135px;
  max-width: 1135px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.left-part .menu-item {
  position: relative;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  padding: 0 10px;
  margin: 0 5px;
  overflow: hidden;
}
.left-part .menu-item:hover {
  overflow: unset;
}

.left-part .menu-item .menu-popover {
  opacity: 1;
  position: absolute;
  cursor: default;
  top: 110px;
  left: -50px;
  z-index: 1;
  padding: 18px 25px 24px;
  border-radius: 0 0 1px 1px;
  color: #fff;
  background: #19459a;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  line-height: 24px;
  text-align: center;
  transition: all 0.5s ease;
}
.left-part .menu-item:hover .menu-popover {
  opacity: 1;
  top: 100px;
  display: block;
}
.left-part .menu-item .menu-popover ul {
  padding: 0 25px;
}
.left-part .menu-item .menu-popover li,
.left-part .menu-item .menu-popover h6 {
  width: 94px;
  line-height: 50px;
  min-width: 94px;
  white-space: nowrap;
}
.left-part .menu-item .menu-popover h6 {
  font-size: 16px;
  border-bottom: #f3cd1d solid 1px;
  color: #f3cd1d;
}
.left-part .menu-item .menu-popover a {
  color: #fff;
}
.menu-popover-item {
  display: flex;
}
</style>

<script>
import {  gql   } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
 query{
  menuTree(identifier:"top"){
    title
  	link
    target
    id
    children{
      id
      title
      link
      target
      children
      	{
          id
          target
          title
          link
          children{
            id
            target
            title
            link
          }
        }
    }
  }
}
`;
export default {
  computed:{
    menus(){
      return this.$store.state.menus
    }
  },
  data() {
    return {
      /*
      menus: [
        { title: "云帆创新应用平台", link: "/yunfan" },
        { title: "核心技术", link: "/dajiang" ,children:[
             {
          title: "大匠",
          link: "/dajiang"
          },
           {
          title: "云启",
          link: "/yunqi"
          }
        ]},
        {
          title: "解决方案",
          link: "/solution",
          children: [
            {
              title: "通用园区",
              link: "/solution/56",
             
            },
            {
              title: "城市治理",
              link: "/solution/57",
              children: [],
            },
          ],
        },
        {
          title: "产品中心",
          link: "/product",
          children: [
            { title: "IOT产品", link: "/product/IOT"},
            { title: "云端产品", link: "/product/cloud", children: [] },
          ],
        },
        { title: "新闻资讯", link: "/news" },
        {
          title: "关于我们",
          link: "/about",
          children: [
            { title: "关于CST", link: "/about" },
            { title: "联系我们", link: "/contact" },
            { title: "加入我们", link: "/joinus" },
          ],
        },
      ],
      */
      drawer: false,
    };
  },
  async fetch() {
    const { data, status } = await getGraphqlClient(this.$nuxt.context).rawRequest(
      query);
    // console.log(data)
    if (data.menuTree) {
      this.$store.commit('setMenu', data.menuTree)
      //this.contact = data.list.content
     
    }
  },
  
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleDrawClose(done) {
      done();
    },
  },
};
</script>