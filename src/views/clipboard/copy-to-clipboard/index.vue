<template>
  <div>
    <div class="markdown-body">
      <README />
    </div>

    <div style="margin-bottom:20px;width:300px;">
      <el-input
        type="text"
        v-model="message"
      />
    </div>

    <el-button
      type="button"
      @click="doCopy"
    >方法复制</el-button>
  </div>
</template>

<script>
import copy from 'copy-to-clipboard';
import README from './README.md';

export default {
  name: '',

  props: [],

  components: {
    README,
  },

  data() {
    return {
      message: 'Copy These Text',
    };
  },

  computed: {},

  methods: {
    doCopy() {
      copy(this.message);
      this.$message.success('已复制');
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>
