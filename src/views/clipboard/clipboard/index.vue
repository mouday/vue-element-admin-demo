<template>
  <div>
    <div class="markdown-body">
      <README />
    </div>

    <div style="margin-bottom:20px;width:300px;">
      <el-input
        type="text"
        id="copy-input"
        v-model="message"
      />
    </div>

    <el-button
      id="copy-btn"
      type="button"
      :data-clipboard-text="message"
      @click="doCopy"
    >方法复制</el-button>
  </div>
</template>

<script>
import Clipboard from 'clipboard';
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
      var clipboard = new Clipboard('#copy-btn');
      clipboard.on('success', (e) => {
        this.$message.success('复制成功, ctrl+v 粘贴');
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on('error', (e) => {
        // 不支持复制
        this.$message.warning('不支持复制');
        // 释放内存
        clipboard.destroy();
      });
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>
