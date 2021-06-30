<template>

  <el-button
    class="delete-button"
    slot="reference"
    icon="el-icon-delete"
    type="text"
    size="mini"
    @click="handleClick"
  ></el-button>

</template>

<script>
// created at 2021-06-30
export default {
  name: 'DataDelete',

  props: {},

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async getData() {},

    handleClick() {
      console.log('handleClick');

      this.$confirm('永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.handleDelete();
        })
        .catch(() => {});
    },

    handleDelete() {
      this.$emit('success');
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
.delete-button {
  &.el-button--text {
    color: #f56c6c;
  }

  &.is-disabled {
    color: #c0c4cc;
  }
}
</style>
