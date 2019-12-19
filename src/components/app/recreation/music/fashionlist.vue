<template>
  <div class="fashionlist">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>for循环</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <span>template循环</span>
      <el-row :gutter="20">
        <template v-for="(i,index) in 4">
          <el-col :span="6" :key="index">
            <div class="list">
              <img src="data:image/jpeg;base64,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" alt="">
              <a @click="toPath()">详情{{i}}</a>
              <div>
                <span>张三</span>
                <span>2019-2-2</span>
              </div>
            </div>
          </el-col>
        </template>
      </el-row>
      <br>
      <span>表格</span>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'FashionListComponent',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    };
  },
  methods: {
    toPath() {
      this.$router.push({ path: '/recreation/music/fashion/detail' });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: inline-block;
  width: 100%;
  border: 1px solid #ccc;
}
</style>
