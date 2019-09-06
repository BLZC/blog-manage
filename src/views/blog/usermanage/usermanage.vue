<template name="component-name">
  <div class="userManage">
    <div class="topbtn lzc-flex">
      <div class="item_ipt">
        <el-input placeholder="请输入查询条件，点击回车确认"
                  suffix-icon="el-icon-search"
                  clearable
                  v-model="search"
                  size="small"></el-input>
      </div>
      <div class="item_btn1">
        <el-button type="primary"
                   icon="el-icon-plus"
                   size="small">新增</el-button>
      </div>
      <div class="item_btn2">
        <el-button type="danger"
                   icon="el-icon-delete"
                   size="small">删除</el-button>
      </div>
    </div>
    <div class="table">
      <Table :Tabledata="tableData"
             :Tableheader="tbHeader"></Table>
    </div>
  </div>
</template>
<script>
import Table from '../../../components/table/index'
export default {
  data () {
    return {
      search: '',
      tbHeader: [
        {
          id: 1,
          prop: 'date',
          label: '日期',
          width: '180'
        },
        {
          id: 2,
          prop: 'name',
          label: '姓名',
          width: '180'
        },
        {
          id: 3,
          prop: 'address',
          label: '地址'
        }
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {
    Table
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.userManage {
  .topbtn {
    .item_ipt {
      width: 250px;
    }
    .item_btn1,
    .item_btn2 {
      margin: 0 0 0 10px;
    }
  }
  .table {
    margin: 10px 0;
  }
}
</style>