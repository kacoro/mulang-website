<template>
  <div class="left-part">
    <div class="menu hidden-sm-and-down">
      <div class="menu-item menu-item-core">
        <nuxt-link to="/yunfan" class="menu-name">云帆创新应用平台</nuxt-link>
        <span class="nav-line"></span>
      </div>
      <div class="menu-item menu-item-core" >
        <nuxt-link to="/dajiang" class="menu-name">核心技术</nuxt-link>
        <span class="nav-line"></span>
        <div class="menu-popover">
          <div class="menu-popover-item">
            <ul>
              <li>
                <nuxt-link to="/dajiang" class="menu-name">大匠</nuxt-link>
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/yunqi" class="menu-name">云启</nuxt-link>
                <span class="nav-line"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="menu-item menu-item-core" v-for="menu,index in menus" :key="index">
        <nuxt-link :to="menu.link" class="menu-name">{{menu.name}}</nuxt-link>
        <span class="nav-line"></span>
        <div class="menu-popover">
          <div class="menu-popover-item">
            <ul>
              <h6>通用园区</h6>
              <li>
                <nuxt-link to="/solution/1" class="menu-name"
                  >园区管理</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/solution/2" class="menu-name"
                  >校园管理</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/solution/3" class="menu-name"
                  >医院管理</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/solution/4" class="menu-name"
                  >智慧社区</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/solution/5" class="menu-name">写字楼</nuxt-link>
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/solution/6" class="menu-name"
                  >政府机关</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
            </ul>
            <ul>
              <h6>城市治理</h6>
              <li>
                <nuxt-link to="/solution/7" class="menu-name"
                  >社会价值</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/solution/8" class="menu-name"
                  >方案能力</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/solution/9" class="menu-name"
                  >区域公共安全</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/solution/10" class="menu-name"
                  >机关事务管理</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/solution/11" class="menu-name"
                  >智慧食药监</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/solution/12" class="menu-name"
                  >疫情防控</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="menu-item menu-item-core">
        <nuxt-link to="/product" class="menu-name">产品中心</nuxt-link>
        <span class="nav-line"></span>
        <div class="menu-popover">
          <div class="menu-popover-item">
            <ul>
              <h6>IOT产品</h6>
              <li>
                <nuxt-link to="/product/1" class="menu-name"
                  >IPC摄像机系列</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/product/2" class="menu-name"
                  >人脸终端系列</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/product/3" class="menu-name"
                  >停车场出入管理系列</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/product/4" class="menu-name"
                  >速通门系列</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/product/5" class="menu-name"
                  >智能门锁系列</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/product/6" class="menu-name"
                  >门禁读卡器系列</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
            </ul>
            <ul>
              <h6>云端产品</h6>
              <li>
                <nuxt-link to="/product/7" class="menu-name"
                  >结构化服务器</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/product/8" class="menu-name"
                  >软件平台</nuxt-link
                >
                <span class="nav-line"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="menu-item menu-item-core">
        <nuxt-link to="/news" class="menu-name">新闻资讯</nuxt-link>
        <span class="nav-line"></span>
      </div>
      <div class="menu-item menu-item-core">
        <nuxt-link to="/about" class="menu-name">关于我们</nuxt-link>
        <span class="nav-line"></span>
        <div class="menu-popover">
          <div class="menu-popover-item">
            <ul>
              <li>
                <nuxt-link to="/about" class="menu-name">关于CST</nuxt-link>
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/contact" class="menu-name">联系我们</nuxt-link>
                <span class="nav-line"></span>
              </li>
              <li>
                <nuxt-link to="/joinus" class="menu-name">加入我们</nuxt-link>
                <span class="nav-line"></span>
              </li>
            </ul>
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
        <el-menu-item index="/yunfan">
          <template slot="title">
            <span>云帆创新应用平台</span>
          </template>
        </el-menu-item>
        <el-submenu index="/dajiang">
          <template slot="title">核心技术</template>
          <el-menu-item index="/dajiang">大匠</el-menu-item>
          <el-menu-item index="/yunqi">云启</el-menu-item>
        </el-submenu>
        <el-submenu index="/solution">
          <span slot="title">解决方案</span>
          <el-menu-item-group>
            <template slot="title">通用园区</template>
            <el-menu-item index="1-1">园区管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">城市治理</template>
            <el-menu-item index="1-1">结构化服务器</el-menu-item>
            <el-menu-item index="1-2">软件平台</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <span slot="title">产品中心</span>
          <el-menu-item-group>
            <template slot="title">IOT产品</template>
            <el-menu-item index="1-1">IPC摄像机系列</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">云</template>
            <el-menu-item index="1-1">结构化服务器</el-menu-item>
            <el-menu-item index="1-2">软件平台</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
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
  query Lists( $categoryId: Int, $identifier: String!,$limit:Int!) {
    lists(
        categoryId: $categoryId
        identifier: $identifier
    ) {
        lists {
        id
        title
        }
    }
    }
`;
export default {
  data() {
    return {
      menus: [
        { title: "云帆创新应用平台", link: "/yunfan" },
        { title: "核心技术", link: "/dajiang" },
        {
          title: "解决方案",
          link: "/solution",
          children: [
            {
              title: "通用园区",
              link: "/solution?categoryId=56",
              children: [],
            },
            {
              title: "城市治理",
              link: "/solution?categoryId=57",
              children: [],
            },
          ],
        },
        {
          title: "产品中心",
          link: "/product",
          children: [
            { title: "IOT产品", link: "/product/iot", children: [
                { title: "人脸识别终端", link: "/product/iot"}
            ] },
            { title: "云端产品", link: "/product/cloud", children: [] },
          ],
        },
        { title: "新闻资讯", link: "/yunfan" },
        {
          title: "关于我们",
          link: "/about",
          children: [
            { title: "关于CST", link: "/yunfan" },
            { title: "联系我们", link: "/contact" },
            { title: "加入我们", link: "/joinus" },
          ],
        },
      ],
      drawer: false,
    };
  },
   async asyncData({ app, params }) {
    // console.log(process.env.GRAPHQL_URL)

    const { data, status } = await getGraphqlClient(app.context).rawRequest(
      query,
      {
        categoryId: 56,
        identifier: "solution",
        limit:6,
        page: 1
      }
    );
    if (status === 200) {
       menus[3].children[0].children = lists.lists.map(item=>{
        return {title:item.title,link:`solution/${item.id}`}
      })
      return {
          ...menus
      };
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