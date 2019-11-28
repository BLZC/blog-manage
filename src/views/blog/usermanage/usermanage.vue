<!-- 用户管理 -->
<template name="component-name">
  <div class="userManage">
    <add-form :dialog="dialog"
              :data="childForm"></add-form>
    <top-btn>
      <div class="item_ipt">
        <el-input placeholder="请输入查询条件，点击回车确认"
                  suffix-icon="el-icon-search"
                  clearable
                  v-model="search"
                  size="small"></el-input>
      </div>
      <div class="item_btn">
        <el-button type="primary"
                   icon="el-icon-plus"
                   @click="Add">新增</el-button>
      </div>
      <div class="item_btn">
        <el-button type="danger"
                   @click="Deleteall"
                   icon="el-icon-delete">删除</el-button>
      </div>
    </top-btn>
    <div class="table">
      <Table :Tabledata="tableData"
             :Tableheader="tbHeader"
             :pagination="pagination"
             :dialog="dialog">
        <el-table-column fixed="right"
                         label="操作"
                         width="180">
          <template slot-scope="scope">
            <el-button v-for="bitem in Slotbuttons"
                       :key="bitem.id"
                       @click="Handle(scope.row, bitem.id, bitem.url)"
                       :type="bitem.type">{{bitem.text}}</el-button>
          </template>
        </el-table-column>
      </Table>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
// topbtns component
import TopBtn from '../../../components/topbtns';
// Table component
import Table from '../../../components/table/index';
// Dialog component
import AddForm from './AddForm';
export default {
  data () {
    return {
      childForm: {} /* data in dialog -->form  */,
      pagination: {
        psize: 10,
        total: null
      } /* 分页设置 */,
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
          url: '/apiusersdelete',
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
          prop: 'username',
          label: '姓名',
          width: '180'
        },
        {
          id: 2,
          prop: 'account',
          label: '账号',
          width: '180'
        },
        {
          id: 3,
          prop: 'password',
          label: '密码',
          width: '120'
        },

        {
          id: 4,
          prop: 'touxiang',
          label: '头像'
        }
      ] /* Table Header config */,
      tableData: [] /* table data */
    };
  },
  components: {
    Table,
    AddForm,
    TopBtn
  },
  mounted () {
    // 初始化数据
    this.getUsers();
  },
  methods: {
    // get user list
    getUsers () {
      this.$get('/users').then(res => {
        if (res.code) {
          this.tableData = res.data;
          this.pagination.total = res.data.length;
        }
      });
    },
    // add user
    Add () {
      this.dialog.show = true;
      this.dialog.title = '新增';
      this.dialog.type = 1;
      this.childForm = {
        name: '',
        age: null,
        sex: null,
        birth: '',
        address: ''
      };
    },
    // edit user
    Edit (id, url) {
      this.dialog.title = '编辑';
      this.dialog.show = true;
      this.dialog.type = 2;
      this.$post(url, { id: id.id }).then(res => {
        if (res.status) {
          this.childForm = res.result;
        }
      });
    },
    // handle Function
    Handle (id, type, url) {
      switch (type) {
        case 1:
          this.Edit(id, url);
          break;
        case 2:
          this.Deleteone(id, url);
          break;
      }
    },
    // delete one user
    Deleteone (id, url) {
      this.$confirm('是否确认删除该用户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$post(url, { ids: id.id }).then(res => {
          if (res.status) {
            this.$notify({
              type: 'success',
              message: '删除成功！'
            });
            this.getUsers();
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // delete all user
    Deleteall () {
      let ids = [];
      this.$store.state.table.multipleSelection.forEach(element => {
        ids.push(element.id);
      });
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$post('/apiusersdelete', { ids: ids }).then(res => {
          if (res.status) {
            this.$LZCMessage(res.message, 'success');
            this.getUsers();
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
};
</script>
