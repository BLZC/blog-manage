<template>
  <el-drawer :title="visable.title"
             :visible.sync="visable.show"
             direction="rtl">
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <span>{{data.time}}</span>
      </div>
      {{data.content}}
    </el-card>
  </el-drawer>
</template>
<script>
export default {
  data () {
    return {};
  },
  props: {
    visable: {
      type: Object,
      require: true
    },
    data: {
      type: Object,
      require: true
    }
  }
};
</script>
<style lang="scss" scoped>
.box-card {
  line-height: 30px;
  font-size: 14px;
}
</style>
