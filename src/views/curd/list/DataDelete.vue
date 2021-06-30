<template>
  <el-popconfirm
    title="确定删除吗？"
    @confirm="handleConfirm"
  >
    <el-button
      slot="reference"
      icon="el-icon-delete"
      type="text"
      size="mini"
    ></el-button>
  </el-popconfirm>
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

    handleConfirm() {
      console.log('handleConfirm');
      this.$emit('success');
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>
