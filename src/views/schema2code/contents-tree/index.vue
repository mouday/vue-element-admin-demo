<template>
  <el-tree
    :data="data"
    node-key="value"
    highlight-current
    default-expand-all
    :expand-on-click-node="false"
    :props="defaultProps"
    :current-node-key="currentNodeKey_"
    @node-click="handleNodeClick"
  >
    <span
      class="custom-tree-node"
      slot-scope="{ node, data }"
    >
      <span>{{ node.label }}</span>
      <span v-if="showDelete">
        <el-popconfirm
          title="确定删除吗？"
          @confirm="$emit('delete', data)"
        >
          <el-button
            slot="reference"
            type="text"
            size="mini"
          ><i class="el-icon-delete"></i></el-button>
        </el-popconfirm>
      </span>
    </span>
  </el-tree>

</template>

<script>
// created at 2021-06-24

export default {
  name: 'index',

  props: {
    data: { type: Array },
    currentNodeKey: { type: String | Number },
    showDelete: { type: Boolean },
  },

  components: {},

  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },

  computed: {
    currentNodeKey_: {
      get() {
        return this.currentNodeKey;
      },
      set(val) {
        this.$emit('update:currentNodeKey', val);
      },
    },
  },

  methods: {
    async getData() {},

    handleNodeClick(data) {
      let current = null;

      console.log('handleNodeClick', data);

      if (data.value) {
        current = data;
      } else {
        current = data.children[0];
      }

      this.currentNodeKey_ = current.value;

      this.$emit('change', current);
    },

    // handleCurrentNodeKey(data) {
    //   if (data.value) {
    //     this.currentNodeKey_ = data.value;
    //   } else {
    //     this.currentNodeKey_ = data.children[0].value;
    //   }

    //   this.$emit('change', this.currentNodeKey_);
    // },
  },

  created() {
    // this.getData();
    if (this.data && this.data.length > 0) {
      this.handleNodeClick(this.data[0]);
      // this.handleCurrentNodeKey(this.data[0]);
    }
  },
};
</script>

<style lang="scss" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
}
</style>
