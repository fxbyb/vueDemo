<template>
  <div class="ancient">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>父子组件通信（另：路由跳转和axios）</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <el-checkbox v-model="checked">向子组件传值{{checked}}</el-checkbox>
      <ancient-button ref="childBtn" :checked="checked" @onedit="getEmit($event)" :getEmit="getEmit"></ancient-button>
      <br>
      <el-button @click="getChildThanks()">调用子组件属性和方法</el-button>
      <el-button @click="toPath()">跳转</el-button>
      <el-button @click="getList()">axios</el-button>
      <el-button @click="storeDemo()">vuex,{{storeNum}},{{isSame(num).name}}</el-button>
      <div v-for="(item,index) in list" :key="index">{{item.name}}</div>
    </el-card>
  </div>
</template>

<script>
import AncientButtonComponent from './ancient-button';
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'AncientComponent',
  data() {
    return {
      list: [],
      checked: false,
      num:0
    };
  },
  computed:{
    ...mapState({
      storeNum: state => state.ancient.count
    }),
    ...mapGetters('ancient', {
      isSame: 'getCount',
    })
  },
  components: {
    'ancient-button': AncientButtonComponent
  },
  methods: {
    getChildThanks() {
      console.log(this.$refs);
      this.$refs.childBtn.thanks('小明,我今年' + this.$refs.childBtn.age + '岁了');
    },
    getEmit($event) {
      console.log($event);
      this.$message($event.name);
    },
    toPath() {
      this.$router.push({ name: 'gogo', params: { name: 'zhangsan' } });
    },
    getList() {
      /* this.$axios({
        url: 'https://www.fastmock.site/mock/ce3fb5f286a8f5ff311ef70a38b4f7f0/vuecar/api/cmb/list',
        method: 'post',
        data: { patameter: { id: 123 }, type: 2 }
      }).then(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      ); */
      /* this.$apiService.postNoPage('https://www.fastmock.site/mock/ce3fb5f286a8f5ff311ef70a38b4f7f0/vuecar/api/cmb/list', { id: 123 }).then(
        res => {
          console.log(res);
          if (res.IsSuccess) {
            this.list = res.Data;
          }
        },
        error => {
          console.log(error);
        }
      ); */
      this.$axios.all([this.getOne(), this.getTwo()]).then(this.$axios.spread((res1, res2) => {}));
    },
    getOne() {
      return this.$apiService.postNoPage('api/cmd/list', { id: 123 });
    },
    getTwo() {
      return this.$apiService.postPage('api/cmb/list', { id: 123 }, { pageIndex: 1, pageSize: 10 });
    },
    storeDemo(){
/***********************       commit、dispatch、state、getters、mapGetters、mapState的使用 *******************************/
      // this.$store.commit('ancient/add',1)
      console.log(this.$store.state.ancient.count)
      this.$store.dispatch('ancient/add_ac',1)
      this.num = this.$store.state.ancient.count;
      // this.$store.dispatch('ancient/list',1)
      // console.log(this.$store.getters['ancient/getCount'](this.$store.state.ancient.count))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
