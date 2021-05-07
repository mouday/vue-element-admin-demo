<template>
  <div class="app-container">

    <div class="markdown-body">
      <README />
    </div>

    <Editor
      v-model="value"
      :height="300"
    />
  </div>
</template>

<script>
import Editor from './WangEditor.vue';
import README from './README.md';

export default {
  name: '',

  props: [],

  components: {
    Editor,
    README,
  },

  data() {
    return {
      value: '',
    };
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