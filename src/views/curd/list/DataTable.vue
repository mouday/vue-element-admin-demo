<template>

  <el-table
    v-bind="$attrs"
    v-on="$listeners"
    border
    size="mini"
    stripe
    highlight-current-row
  >
    <el-table-column label="姓名">
      <template slot-scope="scope">
        {{scope.row.name}}
      </template>
    </el-table-column>

    <el-table-column label="年龄">
      <template slot-scope="scope">
        {{scope.row.age}}
      </template>
    </el-table-column>

    <el-table-column
      label="显示"
      width="70"
      align="center"
    >
      <template slot-scope="scope">
        <DataSwitch v-model="scope.row.is_show" />
      </template>
    </el-table-column>

    <el-table-column
      label="编辑"
      width="50"
      align="center"
    >
      <template slot-scope="scope">
        <DataEdit
          :id="scope.row.id"
          @success="$emit('success')"
        />
      </template>
    </el-table-column>

    <!-- <el-table-column
      label="删除"
      width="50"
      align="center"
    >
      <template slot-scope="scope">
        <DataDelete
          :id="scope.row.id"
          @success="$emit('success')"
        />
      </template>
    </el-table-column> -->

    <el-table-column
      label="删除"
      width="50"
      align="center"
    >
      <template slot-scope="scope">
        <DataDeleteDialog
          :id="scope.row.id"
          @success="$emit('success')"
        />
      </template>
    </el-table-column>

  </el-table>

</template>

<script>
import DataEdit from './DataEdit.vue';
import DataDelete from './DataDelete.vue';
import DataSwitch from './DataSwitch.vue';
import DataDeleteDialog from './DataDeleteDialog.vue';

// created at 2021-06-30
export default {
  name: 'DataTable',

  props: {},

  components: {
    DataEdit,
    DataDelete,
    DataSwitch,
    DataDeleteDialog,
  },

  data() {
    return {};
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
