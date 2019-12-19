<template>
  <div class="default-layout allHeight">
    <el-container class="allHeight">
      <el-header>
        <HeaderLayout></HeaderLayout>
      </el-header>
      <el-main class="allHeight">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  padding: 0 !important;
}
</style>
