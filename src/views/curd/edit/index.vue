<template>
  <div class="app-container">
    <DataForm style="width:400px;"/>
  </div>
</template>

<script>
import DataForm from './DataForm.vue';

// created at 2021-06-30
export default {
  name: 'index',

  props: {},

  components: {
    DataForm,
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
