<template>
  <div class="menu-layout allHeight">
    <el-container class="allHeight">
      <el-header>
        <HeaderLayout></HeaderLayout>
      </el-header>
      <el-main class="allHeight">
        <el-row class="clearfix allHeight">
          <!-- <el-col :span="3"> -->

          <!-- </el-col> -->
          <div style="width:200px;float:left" class="allHeight">
            <leftMenuLayout></leftMenuLayout>
          </div>
          <div style="width:calc(100% - 220px);float:left;padding-left:20px" class="allHeight">
            <router-view />
          </div>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'MenuLayout',
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
