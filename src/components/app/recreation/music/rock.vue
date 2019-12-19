<template>
  <div class="rock">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>动态渲染</span>
      </div>
      <el-button @click="goBack()">后退</el-button>
      <br>
      <el-radio-group v-model="radio">
        <el-radio :label="1">red</el-radio>
        <el-radio :label="2">green</el-radio>
        <!-- <el-radio :label="3">all</el-radio> -->
      </el-radio-group>
      <br>
      <div :style="{color:radio==1?'red':'green',display:'inline-block'}">动态样式</div>
      <div :class="[radio==1? 'red': 'green','good']">动态class</div>
      <br>
      <el-checkbox v-model="checked">if-else的渲染</el-checkbox>
      <span v-if="checked">if文字渲染</span>
      <span v-else>else文字渲染</span>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'RockComponent',
  data() {
    return {
      radio: 1,
      checked: true
    };
  },
  props: ['name', 'age'],
  methods: {
    goBack() {
      this.$router.back();
    }
  },
  created() {
    console.log(this.$router);
    console.log(this.$props);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.good {
  display: inline-block;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
