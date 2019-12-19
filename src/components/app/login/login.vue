<template>
    <div class="login">
        <el-row :gutter="10" class="login_row">
            <el-col :span="4"><label for="">用户名</label></el-col>
            <el-col :span="20" class="login_input"><el-input v-model="name" placeholder="请输入用户名"></el-input></el-col>
            <el-col :span="4"><label for="">密码</label></el-col>
            <el-col :span="20" class="login_input"><el-input v-model="psword" placeholder="请输入密码" show-password></el-input></el-col>
            <el-button type="primary" @click="login()">登录</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '这是登录页',
      name:'',
      psword:''
    }
  },
  methods:{
      login(){
          if(this.name === '张三' && this.psword ==='123'){
              this.$router.push({path:'/home',params:{name: this.name}});
          } else {
              this.$message.error('用户名或密码失败，请重试！');
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    width: 400px;
    margin: auto;
    text-align: center;
    margin-top: 60px;
}
.login_row label{
    height: 40px;
    line-height: 40px;
}
.login_input{
    margin-bottom: 8px;
}
</style>
