<template>
  <div class="app-container">

    <el-tabs v-model="activeName">

      <el-tab-pane
        label="copy-to-clipboard"
        name="copy-to-clipboard"
      >
        <CopyToClipboard />
      </el-tab-pane>

      <el-tab-pane
        label="clipboard"
        name="clipboard"
      >
        <Clipboard />
      </el-tab-pane>

      <el-tab-pane
        label="vue-clipboard2"
        name="vue-clipboard2"
      >
        <VueClipboard2 />
      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script>
import VueClipboard2 from './vue-clipboard2/index.vue';
import CopyToClipboard from './copy-to-clipboard/index.vue';
import Clipboard from './clipboard/index.vue';

export default {
  name: '',

  props: [],

  components: {
    VueClipboard2,
    CopyToClipboard,
    Clipboard,
  },

  data() {
    return {
      activeName: 'copy-to-clipboard',
    };
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
