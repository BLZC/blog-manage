<template>
  <div class="contentComponent">
    <el-page-header @back="goBack">
    </el-page-header>
    <div class="title">{{title}}</div>
    <div class="hd4">{{time}}</div>
    <div class="markdown_content"
         id="markdown_content"
         v-html="compiledMarkdown">
    </div>
  </div>
</template>
<script>
import marked from 'marked'
var rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})
export default {
  props: {
    Close: {
      type: Function,
      required: true
    },
    contentId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      title: '',
      time: '',
      content: ''
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.content)
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    goBack () {
      this.Close()
    },
    getContent () {
      this.$get('/article/' + this.contentId).then(res => {
        this.title = res.data.title
        this.time = res.data.time
        this.content = res.data.content;
      });
    }
  }
}
</script>
<style lang="scss" >
  .contentComponent {
    z-index:99;
    background: #fff;
    position: absolute;
    height: 100%;
    width:100%;
    top:0;
    left:0;
    overflow-y: scroll;
    text-align: left;
    padding: 20px 20px 60px 20px;
    line-height: 40px;
    .el-page-header {
      color: #007fff;
      .el-page-header__left::after {
          width: 0px !important;
      }
    }
    .title {
      font-size: 22px;
      font-weight: 550;
      margin-top: 20px;
    }
    .hd4 {
      font-size: 14px;
      color: #999;
    }
    .markdown_content {
      margin-bottom:20px;
      h1 {
        font-size: 20px;
        font-weight: 550;
      }
      h2 {
        font-size: 18px;
        font-weight: 550;
      }
      h3 {
        font-size: 16px;
        font-weight: 550;
      }
      ol {
        padding-left: 20px;
      }
      li {
        font-size: 13px;
      }
      pre {
        background-color: #fafafa;
        padding: 10px;
        line-height: 20px;
      }
    }
  }
</style>
