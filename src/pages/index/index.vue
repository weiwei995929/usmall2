<template>
  <div>
    <el-container>
      <el-aside width="180px">
        <el-menu
          default-active="/index/home"
          router
          class="el-menu-vertical-demo"
          background-color="#20222a"
          text-color="#fff"
          active-text-color="#ffd04b"
          ><!-- 首页 -->
          <el-menu-item index="/index/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <div v-for="item in list.menus" :key="item.id">
            <!-- 系统设置 -->
            <el-submenu :index="item.url" v-if="item.children">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="'/index'+i.url" v-for="i in item.children" :key="i.id">{{i.title}}</el-menu-item>
               <!--  <el-menu-item index="/index/role">角色管理</el-menu-item>
                <el-menu-item index="/index/manger">管理员管理</el-menu-item > -->
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.url" v-else>{{item.title}}</el-menu-item>
          </div>
          <!-- 商城管理 -->
          <!-- <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商城管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/classify">商品分类</el-menu-item>
              <el-menu-item index="/index/spec">商品规格</el-menu-item>
              <el-menu-item index="/index/goods">商品管理</el-menu-item>
              <el-menu-item index="/index/vip">会员管理</el-menu-item>
              <el-menu-item index="/index/banner">轮播图管理</el-menu-item>
              <el-menu-item index="/index/seckill">秒杀管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <div class="head">
            <div class="headerTop">{{ list.username }}</div>
            <div class="headerTop">
              <el-button type="danger" @click="quit()">退出</el-button>
            </div> 
          </div>
        </el-header>
        <el-main>
          <!-- 面包屑导航 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 二级路由出口 -->
          <div class="mgt"><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      list: "user/list",
    }),
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      requestuserList: "user/requestuserList",
    }),
    quit() {
      this.requestuserList({});
      this.$router.push("/login");
    },
  },
  mounted() {
    //this.requestuserList()
  },
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #20222a;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.mgt {
  margin-top: 20px;
}
.head {
  float: right;
}
.headerTop {
  float: left;
  margin: 0 5px;
}
</style>