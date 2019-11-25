<!-- 文章管理 -->
<template>
  <div class="articleManage">
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
      Slotbuttons: [
        {
          id: 1,
          type: 'text',
          url: '/getArticleById',
          text: '编辑'
        },
        {
          id: 2,
          type: 'text',
          url: '/deleteArticle',
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
          prop: 'author',
          label: '作者',
          width: '180'
        },
        {
          id: 3,
          prop: 'time',
          label: '发表时间',
          width: '120'
        },

        {
          id: 4,
          prop: 'belong',
          label: '分类',
          width: '120'
        },
        {
          id: 5,
          prop: 'content',
          label: '内容'
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
      this.$get('/articles').then(res => {
        if (res.code) {
          this.tableData = res.data;
          this.pagination.total = res.data.length;
        }
      });
    },
    // add user
    Add () {
      this.$router.push({
        path: '/edit'
      });
    },
    // edit user
    Edit (id, url) {
      this.$router.push({
        path: '/edit',
        query: {
          type: 'edit',
          id: id
        }
      });
    },
    // handle Function
    Handle (row, type, url) {
      switch (type) {
        case 1:
          this.Edit(row.id, url);
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
            this.getUsers();
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
