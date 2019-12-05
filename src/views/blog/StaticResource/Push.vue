<!-- 文章管理 -->
<template>
  <div class="Push">
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
                   icon="el-icon-delete">批量删除</el-button>
      </div>
    </top-btn>
    <Table :Tabledata="tableData"
           :Tableheader="tbHeader"
           :pagination="pagination"
           :dialog="dialog">
      <el-table-column fixed="right"
                       label="操作"
                       width="200">
        <template slot-scope="scope">
          <template v-for="bitem in Slotbuttons">
            <span :key="bitem.id">
              <el-button v-if="bitem.iscopy"
                        :type="bitem.type"
                        v-clipboard:copy="path+scope.row.title"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError">{{bitem.text}}</el-button>
              <el-button v-else
                        @click="Handle(scope.row, bitem.id, bitem.url)"
                        :type="bitem.type">{{bitem.text}}</el-button>
            </span>
            &nbsp; &nbsp;
          </template>
        </template>
      </el-table-column>
    </Table>
  </div>
</template>
<script>
// topbtns component
import TopBtn from '../../../components/topbtns';
// Table component
import Table from '../../../components/table';
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
      httplist: '',
      path: 'http://49.235.8.149:9001/upload/',
      Slotbuttons: [
        {
          id: 1,
          iscopy: true,
          type: 'text',
          url: '/getAddress',
          text: '复制链接'
        },
        {
          id: 2,
          type: 'text',
          url: '/deleteResource',
          text: '删除'
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
          prop: 'title',
          label: '题目',
          width: '180'
        },
        {
          id: 2,
          prop: 'size',
          label: '大小',
          width: '120'
        },
        {
          id: 3,
          prop: 'time',
          label: '上传时间',
          width: '120'
        },

        {
          id: 4,
          prop: 'author',
          label: '上传者',
          width: '120'
        },
        {
          id: 5,
          prop: 'type',
          label: '类型'
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
    this.getAllResources();
  },
  methods: {
    onCopy: function (e) {
      this.$LZCMessage('复制成功', 'success');
    },
    onError: function (e) {
      this.$LZCMessage('error', 'success');
    },
    // get user list
    getAllResources () {
      this.$get('/getAllResources').then(res => {
        if (res.code) {
          this.tableData = res.data;
          this.pagination.total = res.data.length;
        }
      });
    },
    // add user
    Add () {
      this.dialog.show = true;
      this.dialog.title = '文件上传';
    },
    // handle Function
    Handle (row, type, url) {
      switch (type) {
        case 1:
          this.getAddress(row.id, url);
          break;
        case 2:
          this.Deleteone(row.id, url);
          break;
      }
    },
    // delete one user
    Deleteone (id, url) {
      this.$confirm('是否确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$delete(url + '/' + id).then(res => {
          if (res.code) {
            this.$LZCMessage('删除成功！', 'success');
            this.getAllResources();
          }
        });
      }).catch(() => {});
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
      }).catch(() => {});
    }
  }
};
</script>
