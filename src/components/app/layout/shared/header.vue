<template>

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="home">首页</el-menu-item>
    <el-menu-item index="recreation">娱乐</el-menu-item>
    <el-submenu index="news">
      <template slot="title">新闻</template>
      <el-menu-item index="inland">国内新闻</el-menu-item>
      <el-menu-item index="foreign">国际新闻</el-menu-item>
    </el-submenu>
    <el-submenu index="life">
      <template slot="title">生活</template>
      <el-menu-item index="healthCare">养生频道</el-menu-item>
      <el-menu-item index="beauty">美容保养</el-menu-item>
    </el-submenu>
    <el-dropdown class="userMes">
      <span class="el-dropdown-link">
        {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item> <span @click="toPath('/system/user')">个人信息</span> </el-dropdown-item>
        <el-dropdown-item> <span @click="toPath('/system/user')">设置</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
export default {
  name: 'HeaderLayout',
  data() {
    return {
      activeIndex: 'home',
      userName: '张三'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (this.$router.history.current.path.indexOf(keyPath[keyPath.length - 1]) !== -1) {
        return;
      }
      this.activeIndex = key;
      this.$router.push({ path: '/' + keyPath.join('/') });
    },
    toPath(url) {
      if (this.$router.history.current.path.indexOf(url) !== -1) {
        return;
      }
      this.$router.push({ path: url });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userMes {
  float: right;
  color: #fff;
  line-height: 61px;
  cursor: pointer;
  margin-right: 20px;
}

.el-header > ul {
  padding-left: 234px;
}
</style>
