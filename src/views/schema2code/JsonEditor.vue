<template>

  <!-- <codemirror
    v-model="value_"
    :options="cmOptions"
  ></codemirror> -->

  <CodeEditor
    v-model="value_"
    height="auto"
    @on-change="handleChange"
  />

</template>

<script>

// 参考
// https://cloud.tencent.com/developer/article/1793757
// https://wangbin3162.gitee.io/bin-code-editor/#/jsonEditor

// vue-json-editor 输入中文时有问题
// https://github.com/dirkliu/vue-json-editor
// import vueJsonEditor from 'vue-json-editor';

// created at 2021-06-23
// import { env } from './utils.js';
// require component
// https://www.npmjs.com/package/vue-codemirror
// import { codemirror } from 'vue-codemirror';
// language js
// import 'codemirror/mode/JavaScript/JavaScript.js';
// require styles
// import 'codemirror/lib/codemirror.css';

import { CodeEditor } from 'bin-code-editor';
// import 'bin-code-editor/lib/style/index.css';

// theme css
// import 'codemirror/theme/base16-dark.css'

export default {
  name: '',

  props: {
    value: { type: String },
  },

  components: {
    CodeEditor,
  },

  data() {
    // https://www.npmjs.com/package/vue-codemirror
    return {
      code_: '',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'application/json',
        theme: 'default',
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      },
    };
  },

  // watch: {
  //   code(val) {
  //     this.code_ = render(this.code);
  //   },
  // },

  computed: {
    value_: {
      get() {
        return this.value;
      },
      set(val) {
        // console.log(val);
        this.$emit('input', val);
      },
    },
  },

  methods: {
    async getData() {},

    handleChange(val) {
      console.log(val);
    },
  },

  created() {
    // console.log(CodeEditor);
  },
};
</script>

<style lang="scss">
</style>
