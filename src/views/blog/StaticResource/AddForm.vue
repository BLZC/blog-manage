<!-- 增改dialog -->
<template>
  <el-dialog :title="dialog.title"
             destroy-on-close
             :close-on-click-modal="false"
             :visible.sync="dialog.show">
    <el-upload
      ref="upload"
      action="/api/upload"
      :data="user"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </el-dialog>
</template>
<script>
export default {
  data () {
    return {
      user: {
        user: localStorage.getItem('user')
      }
    };
  },
  props: {
    // dialog状态
    dialog: {
      type: Object
    }
  },
  methods: {
    // 信息提交
    submitUpload () {
      this.$refs.upload.submit();
    }
  }
};
</script>
