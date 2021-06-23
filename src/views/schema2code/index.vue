<template>
  <div class="app-container">

    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="config"
        name="config"
      >
        <JsonEditor v-model="config" />
      </el-tab-pane>

      <el-tab-pane
        label="list.vue"
        name="list"
      >
        <Schema2Code
          v-if="activeName=='list'"
          :config="config"
          template="list.njk"
        />
      </el-tab-pane>

      <el-tab-pane
        label="edit.vue"
        name="edit"
      >
        <Schema2Code
          v-if="activeName=='edit'"
          :config="config"
          template="edit.njk"
        />
      </el-tab-pane>

      <el-tab-pane
        label="定时任务补偿"
        name="fourth"
      >定时任务补偿</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
// created at 2021-06-23

const defaultConfig = {
  name: 'article',
  props: [
    {
      prop: 'title',
      type: 'string',
      label: '标题',
    },
  ],
};

import JsonEditor from './JsonEditor.vue';
import Schema2Code from './Schema2Code.vue';

export default {
  name: 'index',

  props: [],

  components: {
    JsonEditor,
    Schema2Code,
  },

  data() {
    return {
      activeName: 'config',
      code: '',
      config: JSON.stringify(defaultConfig, null, 2),
    };
  },

  computed: {},

  methods: {
    async getData() {},

    handleChange(val) {
      this.code = val;
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
