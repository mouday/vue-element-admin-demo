<template>
  <div class="app-container">

    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="配置文件"
        name="config"
      >
        <JsonEditor @change="handleConfigChange" />
      </el-tab-pane>

      <el-tab-pane
        label="前端代码"
        name="front-end"
        lazy
      >
        <!-- <Schema2Code
          v-if="activeName=='list'"
          :config="config"
          template="list.njk"
        /> -->

        <CodeTree
          :data="frontEndConfig"
          :config="config"
          mode="text/x-vue"
        />
      </el-tab-pane>

      <el-tab-pane
        label="后端代码"
        name="back-end"
        lazy
      >
        <CodeTree
          :data="backEndConfig"
          :config="config"
          mode="text/x-php"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// created at 2021-06-23

import JsonEditor from './JsonEditor.vue';
import Schema2Code from './Schema2Code.vue';
import CodeTree from './code-tree/index.vue';
import { frontEndConfig, backEndConfig } from './config';

export default {
  name: 'index',

  props: [],

  components: {
    JsonEditor,
    Schema2Code,
    CodeTree,
  },

  data() {
    return {
      frontEndConfig,
      backEndConfig,
      activeName: 'config',
      code: '',
      config: '',
      // config: JSON.stringify(defaultConfig, null, 2),
    };
  },

  computed: {},

  methods: {
    async getData() {},

    handleChange(val) {
      this.code = val;
    },

    handleConfigChange(val) {
      this.config = val;
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>
