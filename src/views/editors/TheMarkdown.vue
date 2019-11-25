<template>
  <div class="mymarkdown">
    <div class="head">
      mavonEditor：基于Vue的markdown编辑器。 访问地址：<span class="link"
            @click="Link">mavonEditor</span>
    </div>
    <div class="mavonEditor">
      <mavon-editor ref="editor"
                    v-model="doc"> </mavon-editor>
    </div>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
export default {
  name: 'themarkdown',
  data () {
    return {
      doc: ''
    };
  },
  components: { mavonEditor },
  methods: {
    Link () {
      window.open('https://github.com/hinesboy/mavonEditor');
    }
  }
};
</script>
<style lang="scss" scoped>
.mymarkdown {
  .head {
    text-align: left;
    font-size: 16px;
    .link {
      cursor: pointer;
      color: dodgerblue;
    }
  }
  .mavonEditor {
    margin-top: 20px;
    .markdown-body {
      height: 400px;
    }
  }
}
</style>
