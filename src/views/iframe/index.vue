<template>
  <div class="iframe-container">
    <iframe
      :src="src"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
// created at 2021-07-13
export default {
  name: 'index',

  props: {
    src: {
      type: String,
    },
  },

  components: {},

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
.iframe-container {
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    min-height: calc(100vh - 50px);
  }
}
</style>
