<!-- 文章管理 -->
<template>
  <div class="articleManage">
    <top-btns>
      <div class="item_ipt">
        <el-input placeholder="请输入查询条件，点击回车确认"
                  suffix-icon="el-icon-search"
                  clearable
                  v-model="searchCondition"
                  @keyup.enter.native="Search"
                  size="small"></el-input>
      </div>
      <div class="item_btn">
        <el-button icon="el-icon-search"
                   @click="Search">查询</el-button>
      </div>
      <div class="item_btn">
        <el-button type="primary"
                   icon="el-icon-plus"
                   @click="Add">新增</el-button>
      </div>
      <div class="item_btn">
        <el-button type="danger"
                   @click="deleteAll"
                   icon="el-icon-delete">删除</el-button>
      </div>
    </top-btns>
    <Table :Tabledata="tableData"
           :Tableheader="tbHeader"
           :pagination="pagination"
           :dataStatus="dataStatus"
           :handleChangeChildren="handleChangeChildren"
           :dialog="dialog">
      <template v-slot:title>
        <el-table-column label="题目"
                        show-overflow-tooltip
                        align="left">
          <template slot-scope="scope">
            <el-link :underline="false" class="linkTitle" @click="getContent(scope.row.id)">{{scope.row.title}}</el-link>
          </template>
        </el-table-column>
      </template>
      <template v-slot:operate>
        <el-table-column label="操作"
                        width="180">
          <template slot-scope="scope">
            <el-button v-for="bitem in Slotbuttons"
                        :icon="bitem.icon"
                      :key="bitem.id"
                      @click="Handle(scope.row, bitem.id, bitem.url)"
                      :type="bitem.type">{{bitem.text}}</el-button>
          </template>
        </el-table-column>
      </template>
    </Table>
    <article-edit v-if="articleEditStatus" :Close="Close" :getArticleList="getArticles"></article-edit>
    <article-content v-if="articleContentStatus" :Close="Close" :contentId="contentId"></article-content>
  </div>
</template>
<script>
import TopBtns from 'components/topbtns'
import Table from 'components/table'
import ArticleEdit from './Edit'
import ArticleContent from './Content'
export default {
  components: {
    Table,
    TopBtns,
    ArticleEdit,
    ArticleContent
  },
  data () {
    return {
      childForm: {} /* data in dialog -->form  */,
      pagination: {
        psize: 10,
        total: null
      },
      limit: 10,
      offset: 0,
      dataStatus: 1, // 数据加载状态
      articleEditStatus: false, // 文章编辑组件是否显示
      articleContentStatus: false, // 文章内容展示
      contentId: null, // 需要查看内容的文章id
      Slotbuttons: [
        {
          id: 1,
          icon: 'el-icon-edit',
          type: 'text',
          url: '/getArticleById',
          text: '编辑'
        },
        {
          id: 2,
          icon: 'el-icon-delete',
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
      searchCondition: '',
      tbHeader: [
        {
          id: 2,
          prop: 'author',
          label: '作者',
          width: '100'
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
          label: '内容',
          align: 'left'
        }
      ] /* Table Header config */,
      tableData: [] /* table data */
    }
  },
  mounted () {
    // 初始化数据
    this.getArticles();
  },
  methods: {
    // get article list
    getArticles () {
      let _limit = this.limit, _offset = this.offset
      this.$get(`/articles/${_limit}/${_offset}`).then(res => {
        if (res.code) {
          this.tableData = res.data;
          this.pagination.total = res.length;
          // 0 --> 暂无数据 1--> 数据加载中  2-->数据加载成功
          if (res.length <= 0) {
            this.dataStatus = 0
          } else {
            this.dataStatus = 2
          }
        }
      });
    },
    // search article by name
    Search () {
      let _limit = this.limit,
        _offset = this.offset,
        _searchCondition = this.searchCondition
      this.$get(`/getArticleBlurry/${_limit}/${_offset}/${_searchCondition}`).then(res => {
        if (res.code) {
          this.tableData = res.data;
          this.pagination.total = res.data.length;
        }
      })
    },
    // add user
    Add () {
      this.$cookies.remove('isedit');
      this.articleEditStatus = true
    },
    // edit user
    Edit (id, url) {
      this.$cookies.set('isedit', id);
      this.articleEditStatus = true
      // this.$router.push('/edit');
    },
    getContent (id) {
      this.contentId = id
      this.articleContentStatus = true
    },
    Close () {
      this.articleEditStatus = false
      this.articleContentStatus = false
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
            this.getArticles();
          }
        });
      }).catch(() => {});
    },
    // delete all user
    deleteAll () {
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
            this.getArticles();
          }
        });
      }).catch(() => {});
    },
    handleChangeChildren (offset, limit) {
      this.limit = limit
      this.offset = offset
      this.getArticles()
    }
  }
};
</script>
<style lang="scss">
  .linkTitle {
    font-size: 13px !important;
  }
</style>
