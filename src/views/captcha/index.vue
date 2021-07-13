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
import svgCaptcha from 'svg-captcha';
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
      var captcha = svgCaptcha.create();
      console.log(captcha);
      // {data: '<svg.../svg>', text: 'abcd'}
    },
  },

  created() {
    this.createQRCode();
  },
};
</script>

<style lang="scss" scoped>
</style>
