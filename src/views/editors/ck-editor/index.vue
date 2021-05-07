<template>
  <div class="app-container">
    <div class="markdown-body">
      <README />
    </div>

    <CKEditor v-model="value" />

  </div>

</template>

<script>
import CKEditor from './CKEditor.vue';
import README from './README.md';

export default {
  components: {
    CKEditor,
    README,
  },

  data() {
    return {
      value: '',
    };
  },

  computed: {},

  methods: {},
};
</script>

<style lang="scss">
</style>
