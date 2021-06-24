<template>
  <div class="code-tree-container">
    <el-tree
      class="code-tree"
      :data="data"
      default-expand-all
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>

    <div class="code-content">
      <Schema2Code :value="code" />
    </div>

  </div>
</template>

<script>
// created at 2021-06-24
import Schema2Code from '@/views/schema2code/Schema2Code.vue';
import { render } from '@/views/schema2code/utils.js';

export default {
  name: 'index',

  props: {
    config: { type: String },
  },

  components: { Schema2Code },

  data() {
    return {
      // template: '',
      code: '',
      data: [
        {
          label: 'list.vue',
          children: [
            {
              label: 'index.vue',
              value: 'list.njk',
            },
            {
              label: 'DataTable.vue',
              value: 'DataTable.njk',
            },
          ],
        },
        {
          label: 'edit.vue',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1',
                },
              ],
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1',
                },
              ],
            },
          ],
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1',
                },
              ],
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },

  computed: {},

  methods: {
    async getData() {},

    handleNodeClick(data) {
      console.log(data);
      let template = null;

      if (data.value) {
        template = data.value;
      } else {
        template = data.children[0].value;
      }

      this.code = render.render(template, { config: JSON.parse(this.config) });
    },
  },

  created() {
    this.getData();
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
