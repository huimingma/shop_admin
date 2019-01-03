<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header class="home-header">
      <el-row type="flex"
              align="middle">
        <el-col :span="6">
          <img src="@/assets/img/logo.png"
               alt="">
        </el-col>
        <el-col>
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col :span="6">
          <div>
            欢迎上海31期星耀会员
            <a href="javaScript:;"
               class="logout">退出</a>
          </div>
        </el-col>
      </el-row>

    </el-header>

    <!-- 头部下方内容 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px"
                class="home-aside">
        <!-- //启动vue的路由模式，启用后，会用index值作为路由的默认值
                 :router="true" -->
        <el-menu default-active="4"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 :router="true">

          <el-submenu index="1">

            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>

            <el-menu-item index="users">
              <!-- 二级菜单的图标和名称： -->
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>

          </el-submenu>

        </el-menu>
      </el-aside>
      <!-- 主体内容 -->
      <el-main>
        <!-- 子路由出口 -->
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>
</template>
<script>
export default {

}
</script>
<style>
.home-container {
  background-color: #eaeef1;
  height: 100%;
}

/* 头部 */
.home-header {
  background-color: #b3c1cd;
}

.home-header img {
  width: 200px;
}

.home-header h1 {
  margin: 0;
  color: #fff;
  font-size: 28px;
  font-weight: bolder;
  text-align: center;
}

.home-header div {
  min-width: 235px;
  font-weight: bold;
}

.home-header .logout {
  color: #daa520;
}

/* 侧边栏 */
.home-aside {
  background-color: #545c64;
}

.el-header {
  padding-left: 0px;
}
</style>
