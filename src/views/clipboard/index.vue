<template>
  <div class="app-container">
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
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    >指令复制</el-button>

    <el-button
      type="button"
      @click="doCopy"
    >方法复制</el-button>
  </div>
</template>

<script>
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
    onCopy(e) {
      this.$message.success('You just copied: ' + e.text);
    },

    onError(e) {
      this.$message.error('Failed to copy texts');
    },

    doCopy() {
      this.$copyText(this.message).then(
        (res) => {
          this.$message.success('You just copied: ' + res.text);
        },
        (err) => {
          this.$message.error('Failed to copy texts');
        }
      );
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>