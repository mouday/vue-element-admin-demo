<template>
  <div class="">
    <!-- 编辑 -->
    <el-button
      v-if="id"
      type="text"
      size="mini"
      icon="el-icon-edit"
      @click="handleOpen"
    ></el-button>

    <!-- 添加 -->
    <el-button
      v-else
      type="primary"
      size="mini"
      icon="el-icon-plus"
      @click="handleOpen"
    >添加</el-button>

    <el-dialog
      title="编辑"
      :visible.sync="visible"
      width="30%"
      center
    >
      <!-- 使用if 替代 destroy-on-close -->
      <DataForm
        v-if="visible"
        :id="id"
        @cancel="handleCancel"
        @submit="handleSubmit"
      />

    </el-dialog>
  </div>
</template>

<script>
import DataForm from '../edit/DataForm.vue';

// created at 2021-06-30
export default {
  name: 'DataEdit',

  props: {
    id: { type: Number },
  },

  components: {
    DataForm,
  },

  data() {
    return {
      visible: false,
    };
  },

  computed: {},

  methods: {
    async getData() {},

    handleOpen() {
      this.visible = true;
    },

    handleSubmit() {
      this.visible = false;
      this.$emit('success')
    },

    handleCancel() {
      this.visible = false;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>
