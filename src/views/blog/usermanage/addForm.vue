<!-- 增改dialog -->
<template>
  <el-dialog :title="dialog.title"
             destroy-on-close
             :close-on-click-modal="false"
             :visible.sync="dialog.show">
    <el-form :model="data"
             :rules="usr"
             ref="ruleForm"
             class="form lzc-flex">
      <template v-if="dialog.type === 2">
        <el-form-item label="姓名"
                      prop="name">
          <el-input v-model="data.name"
                    disabled></el-input>
        </el-form-item>
      </template>
      <template v-if="dialog.type === 1">
        <el-form-item label="姓名"
                      prop="name">
          <el-input v-model="data.name"></el-input>
        </el-form-item>
      </template>
      <el-form-item label="年龄"
                    prop="age">
        <el-input v-model="data.age"></el-input>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-input v-model="data.birth"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="data.sex"
                   placeholder="请选择性别">
          <el-option label="男"
                     value="1"></el-option>
          <el-option label="女"
                     value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="data.address"></el-input>
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
import { usr } from '../../../validate'
export default {
  name: 'Umform',
  data () {
    return {
      usr /* 校验规则 */
    }
  },
  props: {
    //dialog中form数据
    data: {
      type: Object
    },
    //dialog状态
    dialog: {
      type: Object
    }
  },
  methods: {
    //信息提交
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let url = ''
          //新增提交
          if (this.dialog.type === 1) {
            url = '/apiusersadd'
          }
          //编辑提交
          if (this.dialog.type === 2) {
            url = '/apiusersedit'
          }
          this.$post(url, this.data).then(res => {
            if (res.status) {
              this.$LZCMessage(res.message, 'success')
              this.dialog.show = false;
              /**
               * 使用this.$parent 调用父组件getUsers方法，实现父组件数据刷新
               * 缺点： 无法实现组件复用
               */
              this.$parent.getUsers()
            }
          })
        } else {
          return false;
        }
      });
    }
  }
}
</script>