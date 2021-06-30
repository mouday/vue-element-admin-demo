<template>
  <el-form
    ref="form"
    :rules="rules"
    :model="form"
    label-width="80px"
    size="mini"
  >
    <el-form-item
      label="姓名"
      prop="name"
    >
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item
      label="年龄"
      prop="age"
    >
      <el-input
        v-model.number="form.age"
        min="0"
        max="200"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="显示"
      prop="is_show"
    >
      <el-switch v-model.number="form.is_show"></el-switch>
    </el-form-item>

    <el-form-item>

      <el-button @click="handleCancel">取 消</el-button>

      <el-button
        type="primary"
        @click="handleSubmit"
      >确 定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// created at 2021-06-30
export default {
  name: 'DataForm',

  props: {
    // 接收主键
    id: { type: Number },
  },

  components: {},

  data() {
    return {
      form: {
        name: '',
        age: null,
        is_show: true,
      },

      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        age: [
          {
            required: true,
            message: '请输入年龄',
            trigger: 'blur',
          },
          { type: 'number', message: '只能为数字', trigger: 'blur' },
        ],
      },
    };
  },

  computed: {},

  methods: {
    async getData() {},

    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.submit();
        }
      });
    },

    submit() {
      console.log(this.form);

      this.$emit('submit');
    },

    handleCancel() {
      this.$emit('cancel');
    },
  },

  created() {
    console.log('DataForm created');
    if (this.id) {
      this.getData();
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
