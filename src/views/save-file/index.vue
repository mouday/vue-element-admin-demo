<template>
  <div class="app-container">
    <div class="markdown-body">
      <README />
    </div>

    <el-input
      type="textarea"
      v-model="value"
      style="width:300px;margin-right:20px;"
    ></el-input>

    <el-button @click="saveFile">保存文件</el-button>
  </div>
</template>

<script>
import FileSaver from 'file-saver';
import README from './README.md';

export default {
  name: '',

  props: [],

  components: { README },

  data() {
    return {
      value: '一段文字',
    };
  },

  computed: {},

  methods: {
    saveFile() {
      var blob = new Blob([this.value], {
        type: 'text/plain;charset=utf-8',
      });
      FileSaver.saveAs(blob, '自定义文件名.txt');
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>