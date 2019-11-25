<template>
  <el-drawer :title="visable.title"
             :visible.sync="visable.show"
             direction="rtl">
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <el-input placeholder="请输入题目"
                  v-model="dataList.title"
                  clearable>
        </el-input>
      </div>
      <el-input type="textarea"
                placeholder="请输入内容"
                v-model="dataList.content"
                maxlength="200"
                rows="10"
                show-word-limit>
      </el-input>
    </el-card>
  </el-drawer>
</template>
<script>
export default {
  data () {
    return {
      dataList: {
        title: '',
        content: '',
        time: new Date().toLocaleString()
      }
    };
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
