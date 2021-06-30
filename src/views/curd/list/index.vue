<template>
  <div class="app-container">
    <!-- 工具栏 -->
    <div style="display:flex;justify-content: space-between;">
      <DataSearch
        v-model="keywords"
        @change="handleSearch"
        @search="handleSearch"
        style="width:250px;"
      />

      <DataEdit @success="getData" />
    </div>

    <!-- 表格 -->
    <DataTable
      v-loading="loading"
      :data="list"
      style="margin-top:20px;"
      @success="getData"
    />

    <!-- 分页 -->
    <div style="text-align:center">
      <el-pagination
        style="margin-top:20px;"
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="size"
        :current-page.sync="page"
        @current-change="getData"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
// created at 2021-06-30
import DataTable from './DataTable.vue';
import DataEdit from './DataEdit.vue';
import DataSearch from './DataSearch.vue';

export default {
  name: 'index',

  props: {},

  components: {
    DataTable,
    DataEdit,
    DataSearch,
  },

  data() {
    return {
      loading: true,
      keywords: '',
      total: 1000,
      page: 1,
      size: 20,
      list: [],
    };
  },

  computed: {},

  methods: {
    async getData() {
      this.loading = true;
      console.log('getData');

      this.list = [
        {
          id: 1,
          name: 'Tom',
          age: 23,
        },
        { id: 2, name: 'Jack', age: 24 },
      ];

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    handleSearch() {
      console.log('handleSearch');
      this.page = 1;
      this.getData();
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>
