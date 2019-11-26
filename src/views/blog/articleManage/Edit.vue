<template>
  <div class="markdown-edit">
    <el-page-header @back="goBack" :content="headerContent">
    </el-page-header>
    <el-row class="mark-header">
      <el-col :span="10">
        <el-input size="medium"
                  placeholder="请输入标题。。。"
                  v-model="title"></el-input>
      </el-col>
      <el-col :span="4"
              :offset="1">
        <el-select v-model="belong"
                  clearable
                  placeholder="请选择分类">
          <el-option v-for="item in classification"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4"
              :offset="2">
        <el-button type="success"
                  icon="el-icon-s-promotion"
                  @click="Release"
                  size="small">发布</el-button>
        <el-button type="info"
                  icon="el-icon-printer"
                  :loading="doenLoading"
                  @click="Down"
                  size="small">导出为pdf</el-button>
      </el-col>
    </el-row>
    <mavon-editor ref="editor"
                  v-model="doc"> </mavon-editor>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import { setTimeout } from 'timers';
export default {
  data () {
    return {
      articleId: null /* 文章id */,
      title: '' /* 文章标题 */,
      belong: '' /* 文章分类 */,
      doc: '' /* 文章内容 */,
      classification: [] /* 所有分类 */,
      isEdit: false /* 是否编辑 */,
      headerContent: '发表文章',
      doenLoading: false
    };
  },
  components: { mavonEditor },
  created () {
    this.judgeEdit();
    this.getclassification();
  },
  methods: {
    // 返回文章管理页
    goBack () {
      this.$router.push('/articleManage');
    },

    // 判断是否是编辑页面
    judgeEdit () {
      let _id = null, _type = null;
      if (this.$cookies.get('isedit')) {
        _id = this.$cookies.get('isedit');
        this.isEdit = true;
        this.headerContent = '编辑文章';
        this.articleId = _id;
        this.$get('/article/' + _id).then(res => {
          this.title = res.data.title;
          this.belong = res.data.belong;
          this.doc = res.data.content;
        });
      }
    },
    // 获取文章分类
    getclassification () {
      this.$get('/categories').then(res => {
        this.classification = res.data;
      });
    },
    // 发布
    Release () {
      if (this.title && this.belong) {
        let data = {
          title: this.title,
          author: this.$getls('user'),
          time: new Date().toLocaleDateString(),
          belong: this.belong,
          content: this.doc
        };
        if (this.isEdit) {
          data.id = this.articleId;
        }
        let _url = this.isEdit ? '/updateArticle' : 'addArticle';
        let requestHeader = this.isEdit ? this.$put : this.$post;
        requestHeader(_url, data).then(res => {
          if (res.code) {
            this.$LZCMessage('发表成功', 'success');
          }
        });
      } else {
        this.$LZCMessage('题目和分类不能为空', 'error');
      }
    },
    // 导出为pdf
    Down () {
      this.doenLoading = true;
      let _markdownMd = this.doc;
      let _articleName = this.title;
      this.$post('/transformPdf', { markdownMd: _markdownMd, articleName: _articleName }).then(res => {
        this.$notify.info({ message: '正在转换为pdf......' });
        if (res.code) {
          setTimeout(() => {
            this.doenLoading = false;
            this.$LZCMessage('转化成功！正在下载......', 'success');
            window.location.href = '/api/downpdf/' + res.articleName + '.pdf';
          }, 8000);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.markdown-edit {
  padding: 0 10px;
  .mark-header {
    height: 65px;
    line-height: 65px;
  }
  .markdown-body {
    width: 100%;
  }
}
</style>
