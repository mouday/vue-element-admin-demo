<template>
  <el-input
    placeholder="搜索"
    v-bind="$attrs"
    v-on="$listeners"
    size="mini"
    @keypress.native.enter="$emit('search')"
  >
    <template slot="append">
      <el-button icon="el-icon-search" @click="$emit('search')"></el-button>
    </template>
  </el-input>
</template>

<script>
// created at 2021-06-30
export default {
  name: 'DataSearch',

  props: {},

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>
