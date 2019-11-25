<template>
  <div class="quilleditor">
    <div class="text">
      vue 富文本编辑器 <span class="link"
            @click="Link">vue-quill-editor</span>
    </div>
    <quill-editor v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>
  </div>
</template>
<script>
export default {
  name: 'quilleditor',
  data () {
    return {
      content: '<h2>I am Example</h2>',
      editorOption: {
        // some quill options
      }
    };
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted () {
    // console.log('this is current quill instance object', this.editor);
  },
  methods: {
    Link () {

    },
    onEditorBlur () {
      //   console.log('editor blur!', quill);
    },
    onEditorFocus () {
      //   console.log('editor focus!', quill);
    },
    onEditorReady () {
      //   console.log('editor ready!', quill);
    },
    onEditorChange () {
      // { quill, html, text }
      //   console.log('editor change!', quill, html, text);
      //   this.content = html;
    }
  }
};
</script>
<style lang="scss">
.quilleditor {
  .text {
    text-align: left;
    font-size: 16px;
    .link {
      color: #1e90ff;
    }
  }
  .quill-editor {
    margin-top: 20px;
    .ql-container {
      height: 350px;
    }
  }
}
</style>
