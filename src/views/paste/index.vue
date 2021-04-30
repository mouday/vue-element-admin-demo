<template>
  <div class="app-container">

    <div style="margin-bottom:20px;">
      使用paste事件监听，从剪切板粘贴图片
      <a
        href="https://github.com/mouday/more-utils.js"
        target="_blank"
        class="link"
      >more-utils</a>
    </div>

    <el-input
      id="text-input"
      placeholder="从剪切板粘贴图片"
      style="width:200px;margin-bottom:20px;"
    />
    <div class="target-image">
      <img
        :src="imageUrl"
        alt=""
      >
    </div>

  </div>
</template>

<script>
import mo from 'more-utils';

export default {
  name: '',

  props: [],

  components: {},

  data() {
    return {
      imageUrl: '',
    };
  },

  computed: {},

  methods: {
    handleImageChange(file) {
      console.log(file);
      this.imageUrl = mo.getObjectURL(file);
    },
  },

  created() {},
  mounted() {
    // 监听
    mo.pasteImageFromClipboard(
      document.getElementById('text-input'),
      this.handleImageChange
    );
  },
};
</script>

<style lang="scss" scoped>
</style>