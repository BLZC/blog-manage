<!-- 封装table -->
<template name="component-name">
  <div>
    <el-table :data="Tabledata"
              border
              size="small"
              stripe
              :header-cell-style="SETHEADER"
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
    <el-pagination :page-sizes="[100, 200, 300, 400]"
                   :page-size="100"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="400">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      maxh: null
      // multipleSelection: []
    }
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
  },
  created () {
    this.calculate()
  },
  methods: {
    //头部样式
    SETHEADER ({ rowIndex }) {
      if (rowIndex == 0) {
        return 'background:	#2F4F4F; color: #fff;'
      } else {
        return ''
      }
    },
    //选择框状态改变
    handleSelectionChange (val) {
      this.$store.commit('handlemultipleSelection', val)
    },
    //计算max-height
    calculate () {
      let hg = window.screen.height
      let mxh = hg - 400
      this.maxh = mxh
    }
  }
}
</script>
<style lang="scss">
.el-pagination {
  margin-top: 10px;
}
</style>