<template>
  <div class="app-container">

    <div class="markdown-body">
      <README />
    </div>

    <el-input
      v-model="text"
      placeholder="请输入文字"
      size="mini"
      clearable
      style="width:200px;"
    ></el-input>

    <el-button
      type="primary"
      size="mini"
      style="margin-left:20px;"
      @click="createImage"
    >截图</el-button>

    <div style="height:20px;"></div>

    <div
      ref="image"
      class="image"
    >
      {{text}}
    </div>

    <div style="height:20px;"></div>

    <img
      v-if="dataUrl"
      :src="dataUrl"
      alt=""
    >
  </div>
</template>

<script>
import { toPng } from 'html-to-image';
import README from './README.md';

// created at 2021-08-11
export default {
  name: 'index',

  props: {},

  components: {
    README,
  },

  data() {
    return {
      text: '默认的文字',
      dataUrl: null,
    };
  },

  computed: {},

  methods: {
    async createImage() {
      this.dataUrl = await toPng(this.$refs.image);
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
.image {
  width: 500px;
  height: 300px;
  line-height: 300px;
  text-align: center;
  background-color: #eeeeee;
}
</style>
