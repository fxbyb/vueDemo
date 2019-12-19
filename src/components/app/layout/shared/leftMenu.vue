<template>
  <el-menu default-active="2" class="el-menu-vertical-demo allHeight" :unique-opened="true" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-submenu index="recreation/music">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>音乐</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="fashion" @click="toPath('recreation/music/fashion')">for循环</el-menu-item>
        <el-menu-item index="ancient" @click="toPath('recreation/music/ancient')">组件通信</el-menu-item>
        <el-menu-item index="rock" @click="toPath('recreation/music/rock')">动态渲染</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="recreation/video">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>影视</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="tvplay" @click="toPath('recreation/video/tvplay')">电视剧</el-menu-item>
        <el-menu-item index="movie" @click="toPath('recreation/video/movie')">电影</el-menu-item>
        <el-menu-item index="variety" @click="toPath('recreation/video/variety')">综艺</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="recreation/netbook">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>小说</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="fantasy" @click="toPath('recreation/netbook/fantasy')">玄幻</el-menu-item>
        <el-menu-item index="gongfu" @click="toPath('recreation/netbook/gongfu')">武侠</el-menu-item>
        <el-menu-item index="emotion" @click="toPath('recreation/netbook/emotion')">言情</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'leftMenuLayout',
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toPath(path) {
      if (this.$router.history.current.path.indexOf(path) !== -1) {
        return;
      }
      console.log(path);
      this.$router.push({ path: '/' + path });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
