<template>
  <div
    class=""
    style="display:inline-block"
  >
    <el-button
      size="mini"
      type="primary"
      @click="visible=true"
    > <i class="el-icon-plus"></i> 新 建</el-button>

    <el-dialog
      title="新建配置"
      :visible.sync="visible"
      width="300px"
      center
      @close="handleClose"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        size="mini"
      >
        <el-form-item label="文件名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          size="mini"
          @click="visible = false"
        >取 消</el-button>

        <el-button
          size="mini"
          type="primary"
          @click="handleAdd"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// created at 2021-06-24
import { addContents } from '@/views/schema2code/utils.js';

export default {
  name: 'AddFile',

  props: [],

  components: {},

  data() {
    return {
      visible: false,
      form: {
        name: '',
      },
    };
  },

  computed: {},

  methods: {
    async getData() {},

    handleClose() {
      this.$refs.form.resetFields();
    },

    handleAdd() {
      let ret = addContents(this.form.name);
      this.visible = false;

      this.$emit('success', ret);
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>
