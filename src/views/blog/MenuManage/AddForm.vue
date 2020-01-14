<!-- 增改dialog -->
<template>
  <el-dialog :title="dialog.title"
             destroy-on-close
             :close-on-click-modal="false"
             :visible.sync="dialog.show">
    <el-form :model="data"
             :rules="menu"
             ref="ruleForm"
             class="form lzc-flex">
      <template v-if="dialog.type === 2">
        <el-form-item label="菜单序号"
                      prop="name">
          <el-input v-model="data.name"
                    disabled></el-input>
        </el-form-item>
      </template>
      <template v-if="dialog.type === 1">
        <el-form-item label="菜单序号"
                      prop="index">
          <el-input v-model="data.index"></el-input>
        </el-form-item>
      </template>
      <el-form-item label="标签序号"
                    prop="label">
        <el-input v-model="data.label"></el-input>
      </el-form-item>
      <el-form-item label="标签名" prop="name">
        <el-input v-model="data.name"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer"
         class="dialog-footer">
      <el-button @click="dialog.show = false">取 消</el-button>
      <el-button type="primary"
                 @click="submitForm('ruleForm')">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { menu } from '../../../validate';
export default {
  data () {
    return {
      menu /* 校验规则 */
    };
  },
  props: {
    // dialog中form数据
    data: {
      type: Object
    },
    // dialog状态
    dialog: {
      type: Object
    }
  },
  methods: {
    // 信息提交
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let url = '';
          // 新增提交
          if (this.dialog.type === 1) {
            url = '/addLabel';
          }
          // 编辑提交
          if (this.dialog.type === 2) {
            url = '/updateLabel';
          }
          this.$post(url, this.data).then(res => {
            if (res.code) {
              this.$LZCMessage(res.message, 'success');
              this.dialog.show = false;
              /**
               * 使用this.$parent 调用父组件getUsers方法，实现父组件数据刷新
               * 缺点： 无法实现组件复用
               */
              this.$parent.getLabels();
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
