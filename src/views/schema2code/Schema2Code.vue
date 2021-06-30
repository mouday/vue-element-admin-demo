<template>

  <codemirror
    :value="value_"
    :options="cmOptions"
  ></codemirror>

</template>

<script>
// created at 2021-06-23
import { env } from './utils.js';
// require component
import { codemirror } from 'vue-codemirror';
// language js
import 'codemirror/mode/vue/vue.js';
import 'codemirror/mode/php/php.js';
// require styles
import 'codemirror/lib/codemirror.css';

// theme css
// import 'codemirror/theme/base16-dark.css'

export default {
  name: 'Schema2Code',

  props: {
    value: { type: String },
    mode: { type: String, default: 'text/x-vue' },
    // template: { type: String },
  },

  components: {
    codemirror,
  },

  data() {
    // https://www.npmjs.com/package/vue-codemirror
    // https://codemirror.net/
    return {
      // code_: '',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: this.mode,
        theme: 'default',
        lineNumbers: true,
        line: true,
        lineWrapping: true,
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
      set(value) {
          this.$emit('update:value', value);
      }
    }
  },

  methods: {
    async getData() {},

    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },
  },

  created() {
    // this.getData();
    // console.log(this.config);

    // this.code_ = env.render(this.template, { config: JSON.parse(this.config)});
  },
};
</script>

<style lang="scss">
.CodeMirror {
  font-size: 16px;
  height: 500px;
}
</style>
