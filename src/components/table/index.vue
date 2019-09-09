<!-- 封装table -->
<template name="component-name">
  <div>
    <el-table :data="Tabledata"
              border
              size="small"
              stripe
              :header-cell-style="SETHEADER"
              max-height="330"
              style="width: 100%">
      <el-table-column v-for="item in Tableheader"
                       :key="item.id"
                       :prop="item.prop"
                       :label="item.label"
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
  methods: {
    //头部样式
    SETHEADER ({ rowIndex }) {
      if (rowIndex == 0) {
        return 'background:	#2F4F4F; color: #fff;'
      } else {
        return ''
      }
    },
  }
}
</script>