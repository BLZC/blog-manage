<!-- 封装table -->
<template name="component-name">
  <div class="table">
    <el-table :data="Tabledata"
              border
              size="small"
              stripe
              :header-cell-style="SETHEADER"
              :max-height="maxh"
              @selection-change="handleSelectionChange"
              style="width: 100%">
      <template slot="empty">
        <template v-if="dataStatus === 1">
          <span>数据加载中<div class="dot">...</div></span>
        </template>
        <template v-if="dataStatus === 0">
        <span>暂无数据</span>
        <br />
        <i class="icon_no iconfont iconkong"></i>
        </template>
      </template>
      <el-table-column type="selection"
                       width="55">
      </el-table-column>
      <slot name="title"></slot>
      <el-table-column v-for="item in Tableheader"
                       :key="item.id"
                       :prop="item.prop"
                       :label="item.label"
                       show-overflow-tooltip
                       :align="item.align || 'center'"
                       :width="item.width || null">
      </el-table-column>
      <slot name="operate"></slot>
    </el-table>
    <el-pagination v-if="pagination"
                   :page-sizes="[10, 20, 50, 100]"
                   :page-size="pagination.psize"
                   layout="total, sizes, prev, pager, next, jumper"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage"
                   :total="pagination.total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      maxh: null,
      currentPage: 1
    };
  },
  props: {
    Tabledata: {
      type: Array,
      required: true
    },
    Tableheader: {
      type: Array,
      required: true
    },
    pagination: {
      type: Object
    },
    dataStatus: {
      type: Number,
      required: true
    },
    handleChangeChildren: {
      type: Function,
      required: true
    }
  },
  created () {
    this.calculate();
  },
  methods: {
    // 头部样式
    SETHEADER ({ rowIndex }) {
      if (rowIndex == 0) {
        return 'background:#2F4F4F; color: #fff;';
      } else {
        return '';
      }
    },
    // 选择框状态改变
    handleSelectionChange (val) {
      this.$store.commit('handlemultipleSelection', val);
    },
    // 计算max-height
    calculate () {
      let hg = window.screen.height;
      let mxh = hg - 260;
      this.maxh = mxh;
    },
    // 分页大小设置
    handleSizeChange (val) {
      this.pagination.psize = val;
      let offset, limit
      offset = (this.currentPage - 1) * this.pagination.psize
      limit = this.pagination.psize
      this.handleChangeChildren(offset, limit)
    },
    // 当前页跳转
    handleCurrentChange (val) {
      this.currentPage = val;
      let offset, limit
      offset = (this.currentPage - 1) * this.pagination.psize
      limit = this.pagination.psize
      this.handleChangeChildren(offset, limit)
    }
  }
};
</script>
<style lang="scss" scoped>
.table {
  margin: 10px 0;
  .icon_no {
    font-size: 40px;
  }
  .dot {
    display: inline-block;
    height: 1em;
    font-size: 24px;
    line-height: 1;
    text-align: left;
    vertical-align: -.25em;
    overflow: hidden;
  }
  .dot::before {
    display: block;
    content: '...\A..\A.';
    white-space: pre-wrap;
    animation: dot 3s infinite step-start both;
  }
  @keyframes dot {
    33% {
        transform: translateY(-2em);
    }
    66% {
        transform: translateY(-1em);
    }
  }
  .el-pagination {
    margin-top: 10px;
  }
}
</style>
