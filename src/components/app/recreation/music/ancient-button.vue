<template>
  <div class="ancient-button">
    <el-button type="primary" :loading="checked">子组件按钮</el-button>
    <el-button type="primary" @click="toEmit()">向父组件emit</el-button>
    <el-button type="primary" @click="getParent()">调用父组件方法</el-button>
  </div>
</template>

<script>
export default {
  name: 'AncientButtonComponent',
  data() {
    return {
      age: 12
    };
  },
  props: {
    checked: { type: Boolean, default: false },
    getEmit: { type: Function, default: null }
  },
  methods: {
    thanks(user) {
      this.$message('谢谢,' + user);
    },
    toEmit() {
      this.$emit('onedit', { name: '我在向父组件emit' });
    },
    getParent() {
      console.log(this.$parent);
      if (this.getEmit) {
        this.getEmit({ name: '获取父组件方法' });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
