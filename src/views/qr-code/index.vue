<template>
  <div class="app-container">
    <div class="markdown-body">
      <README />
    </div>

    <div>
      <el-input
        v-model="value"
        style="width:300px;margin-right:20px;"
      ></el-input>
      <el-button @click="createQRCode">生成</el-button>
    </div>

    <img
      style="margin-top:20px;"
      :src="url"
      alt=""
    >
  </div>
</template>

<script>
import QRCode from 'qrcode';
import README from './README.md';

export default {
  name: '',

  props: [],

  components: { README },

  data() {
    return {
      value: 'hello, world',
      url: null,
    };
  },

  computed: {},

  methods: {
    async createQRCode() {
      this.url = await QRCode.toDataURL(this.value, {
        margin: 0,
      });
    },
  },

  created() {
    this.createQRCode();
  },
};
</script>

<style lang="scss" scoped>
</style>