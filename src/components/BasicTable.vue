<!-- 封装table -->
<template name="component-name">
  <div class="table">
    <el-table :data="Tabledata.data"
              border
              size="small"
              stripe
              :max-height="maxh"
              @selection-change="handleSelectionChange"
              style="width: 100%">
      <el-table-column type="selection"
                       width="55">
      </el-table-column>
      <el-table-column v-for="item in Tableheader"
                       :key="item.id"
                       :prop="item.prop"
                       :label="item.label"
                       show-overflow-tooltip
                       :width="item.width">
      </el-table-column>
      <slot></slot>
    </el-table>
    <el-pagination :page-sizes="[10, 20, 50, 100]"
                   :page-size="pagination.psize"
                   hide-on-single-page
                   layout="total, sizes, prev, pager, next, jumper"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page.sync="pagination.currentPage"
                   :total="pagination.total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      maxh: null
    };
  },
  props: {
    Tabledata: {
      type: Object,
      required: true
    },
    Tableheader: {
      type: Array,
      required: true
    },
    pagination: {
      type: Object,
      required: true
    }
  },
  created () {
    this.calculate();
    this.getUsers();
  },
  methods: {
    // 选择框状态改变
    handleSelectionChange (val) {
      this.$store.commit('handlemultipleSelection', val);
    },
    // 计算max-height
    calculate () {
      let _height = window.screen.height;
      let _maxh = _height - 400;
      this.maxh = _maxh;
    },
    // 分页大小设置
    handleSizeChange (val) {
      this.pagination.psize = val;
    },
    // get user list
    getUsers () {
      let offset = (this.pagination.currentPage - 1) * this.pagination.psize;
      this.$post('/getusers', { offset: offset, limit: this.pagination.psize }).then(res => {
        if (res.status) {
          this.Tabledata.data = res.data.result;
          this.pagination.total = res.data.len;
        }
      });
    },
    // 当前页跳转
    handleCurrentChange (val) {
      this.pagination.currentPage = val;
      this.getUsers();
    }
  }
};
</script>
<style lang="scss" scoped>
.table {
  margin: 10px 0;
  .el-pagination {
    margin-top: 10px;
    text-align: right;
  }
}
</style>
