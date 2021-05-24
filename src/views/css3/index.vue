<template>
  <div class="app-container">
    <CubicBezier />
  </div>
</template>

<script>
import CubicBezier from './cubic-bezier/index.vue';

export default {
  name: '',

  props: [],

  components: {
    CubicBezier,
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
