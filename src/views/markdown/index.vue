<template>
  <div class="app-container">
    引入md文件
    
    <div class="markdown-body">
      <README />
    </div>
  </div>
</template>

<script>
import README from './README.md';

export default {
  name: '',

  props: [],

  components: {
    README,
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