<template>
  <div class="app-container">
    <div class="markdown-body">
      <README />
    </div>

    <div ref="node"></div>
  </div>
</template>

<script>
import { init } from 'ityped';
import README from './README.md';
// created at 2021-08-12
export default {
  name: 'index',

  props: {},

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

  mounted() {
    init(this.$refs.node, {
      showCursor: false,
      loop: false,
      strings: ['Hello World'],
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
