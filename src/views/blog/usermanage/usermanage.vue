<!-- 用户管理 -->
<template name="component-name">
  <div class="userManage">
    <add-form :dialog="dialog"
              :data="childForm"></add-form>
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
                   @click="Add">新增</el-button>
      </div>
      <div class="item_btn2">
        <el-button type="danger"
                   @click="Delete"
                   icon="el-icon-delete">删除</el-button>
      </div>
    </div>
    <div class="table">
      <Table :Tabledata="tableData"
             :Tableheader="tbHeader"
             :dialog="dialog">
        <el-table-column fixed="right"
                         label="操作"
                         width="180">
          <template slot-scope="scope">
            <el-button v-for="bitem in Slotbuttons"
                       :key="bitem.id"
                       @click="Edit(scope.row, bitem.url)"
                       :type="bitem.type">{{bitem.text}}</el-button>
          </template>
        </el-table-column>
      </Table>
    </div>
  </div>
</template>
<script>
//Table component
import Table from '../../../components/table/index'
//Dialog component
import AddForm from './addForm'
export default {
  data () {
    return {
      childForm: {} /* data in dialog -->form  */,
      Slotbuttons: [
        {
          id: 1,
          type: 'text',
          url: '/getuserDetail',
          text: '编辑'
        },
        {
          id: 2,
          type: 'text',
          url: '/deleteuser',
          text: '删除'
        },
        {
          id: 3,
          type: 'text',
          url: '/deleteuser',
          text: '其他'
        }
      ] /* Table operator */,
      dialog: {
        type: 1,
        show: false,
        title: ''
      } /* dialog status */,
      search: '',
      tbHeader: [
        {
          id: 1,
          prop: 'name',
          label: '姓名',
          width: '180'
        },
        {
          id: 2,
          prop: 'birth',
          label: '出生日期',
          width: '180'
        },
        {
          id: 3,
          prop: 'age',
          label: '年龄',
          width: '120'
        },

        {
          id: 4,
          prop: 'sex',
          label: '性别',
          width: '120'
        },
        {
          id: 5,
          prop: 'address',
          label: '地址'
        }
      ] /* Table Header config */,
      tableData: [] /* table data */
    }
  },
  components: {
    Table,
    AddForm
  },
  mounted () {
    //初始化数据
    this.getUsers()
  },
  methods: {
    //get user list
    getUsers () {
      this.$post('/getusers', {}).then(res => {
        if (res.status) {
          this.tableData = res.result;
        }
      })
    },
    // add user
    Add () {
      this.dialog.show = true;
      this.dialog.title = "新增";
      this.dialog.type = 1;
      this.childForm = {
        name: '',
        age: null,
        sex: null,
        birth: '',
        address: ''
      }
    },
    //edit user
    Edit (id, url) {
      this.dialog.title = "编辑";
      this.dialog.show = true;
      this.dialog.type = 2;
      this.$post(url, { id: id.id }).then(res => {
        if (res.status) {
          this.childForm = res.result
        }
      })
    },
    //delete user
    Delete () {
      let ids = []
      this.$store.state.table.multipleSelection.forEach(element => {
        ids.push(element.id)
      })
    }
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