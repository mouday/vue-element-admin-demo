<template>

  <!-- <codemirror
    v-model="value_"
    :options="cmOptions"
  ></codemirror> -->
  <div>
    <div>
      <AddFile @success="handleAddSuccess" />

      <el-button
        style="margin-left:20px;"
        size="mini"
        type="primary"
        @click="handleSaveClick"
      >
        <i class="el-icon-tickets"></i> 保 存
      </el-button>
    </div>

    <div
      class="code-tree-container"
      style="margin-top:20px;"
    >
      <ContentsTree
        class="code-tree"
        :data="data"
        :currentNodeKey.sync="currentNodeKey"
        @change="handleContentsChange"
        @delete="handleContentsDelete"
        showDelete
      />
      <CodeEditor
        class="code-content"
        v-model="config"
        height="auto"
        @on-change="handleChange"
      />
    </div>

  </div>

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
import AddFile from '@/views/schema2code/AddFile.vue';
import ContentsTree from '@/views/schema2code/contents-tree/index.vue';
import {
  loadContents,
  addContents,
  removeContents,
  loadConfig,
  saveConfig,
} from './utils';
// import 'bin-code-editor/lib/style/index.css';

// theme css
// import 'codemirror/theme/base16-dark.css'

export default {
  name: '',

  props: {
    // value: { type: String },
  },

  components: {
    CodeEditor,
    AddFile,
    ContentsTree,
  },

  data() {
    // https://www.npmjs.com/package/vue-codemirror
    return {
      data: [],

      config: null,

      currentNodeKey: null,

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
    // value_: {
    //   get() {
    //     return this.value;
    //   },
    //   set(val) {
    //     // console.log(val);
    //     this.$emit('input', val);
    //   },
    // },
  },

  methods: {
    async getData(value) {
      console.log('getData', value);

      this.currentNodeKey = value;
      this.config = loadConfig(value);
    },

    handleChange(val) {
      // console.log(val);
      this.$emit('change', val)
    },

    handleContentsChange(item) {
      this.getData(item.value);
    },

    handleSaveClick() {
      saveConfig(this.currentNodeKey, this.config);
      this.$message.success('已保存');
    },

    handleAddSuccess(val) {
      this.data = loadContents();
      this.getData(val);
    },

    handleContentsDelete(data) {
      console.log(data);
      removeContents(data.value);
      this.initData();
    },

    initData() {
      this.data = loadContents();

      if (this.data && this.data.length > 0) {
        this.getData(this.data[0].value);
      } else {
        this.getData();
      }
    },
  },

  created() {
    // console.log(CodeEditor);
    this.initData();
    // console.log(this.data);
  },
};
</script>

<style lang="scss" scoped>
.code-tree-container {
  display: flex;

  $width: 200px;
  .code-tree {
    width: $width;
  }
  .code-content {
    width: calc(100% - #{$width});
  }
}
</style>
