<template>
  <div class="code-tree-container">
    <ContentsTree
      class="code-tree"
      :data="data"
      :currentNodeKey.sync="currentNodeKey"
      @change="handleContentsChange"
    />

    <div class="code-content">
      <Schema2Code
        :value="code"
        :mode="mode"
      />
    </div>

  </div>
</template>

<script>
// created at 2021-06-24
import Schema2Code from '@/views/schema2code/Schema2Code.vue';
import { render, toPascal } from '@/views/schema2code/utils.js';
import ContentsTree from '@/views/schema2code/contents-tree/index.vue';

export default {
  name: 'index',

  props: {
    config: { type: String },
    data: { type: Array },
    mode: { type: String, default: 'text/x-vue' },
  },

  components: { Schema2Code, ContentsTree },

  data() {
    return {
      code: '',

      checkedKeys: [],

      currentNodeKey: '',

      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },

  computed: {},

  methods: {
    async getData() {},

    handleContentsChange(data) {
      // console.log(data);
      console.log(this.config);

      let template = null;

      if (data.value) {
        template = data.value;
      } else {
        template = data.children[0].value;
      }

      let config = JSON.parse(this.config);

      // this.currentNodeKey = template;
      this.code = render.render(template, {
        config: {
          ...config,
          pascalName: toPascal(config.name),
        },
      });
    },

    // handleContentsChange(data) {
    //   console.log(data);
    // },
  },

  created() {
    // this.getData();
    // this.handleNodeClick(this.data[0]);
    // if(){
    //   this.currentNodeKey
    // }
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
