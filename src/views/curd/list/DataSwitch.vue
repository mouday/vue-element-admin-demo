<template>
  <el-switch
    v-bind="$attrs"
    v-on="$listeners"
    size="mini"
    @change="handleChange"
  >
  </el-switch>
</template>

<script>
// active-value
// inactive-value
// created at 2021-06-30
export default {
  name: 'DataSwitch',

  props: {},

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async getData() {},

    handleChange() {
      console.log('handleChange');
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>
