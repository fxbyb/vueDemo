<template>
    <div class="home">
        {{msg}}
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '这是首页',
      name:'',
      psword:''
    }
  },
  methods:{
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
