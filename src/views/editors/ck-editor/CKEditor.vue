<template>

  <div id="ck-editer">
    <ckeditor
      :editor="editor"
      @ready="onReady"
      v-model="editorData"
      :config="editorConfig"
    >
    </ckeditor>
  </div>

</template>

<script>
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn';
import MyUploadAdapter from './MyUploadAdapter.js';

export default {
  components: {
    ckeditor: CKEditor.component,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      //   editor: ClassicEditor,
      editor: DecoupledEditor,
      editorConfig: {
        // The configuration of the editor.
        language: 'zh-cn',
      },
    };
  },

  computed: {
    editorData: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },

  methods: {
    onReady(editor) {
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );

      // 自定义上传图片插件
      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new MyUploadAdapter(loader);
      };
    },
  },
};
</script>

<style lang="scss">
@import './index.scss';
</style>
