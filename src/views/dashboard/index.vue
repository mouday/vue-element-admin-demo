<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <!-- <div v-html="readme"></div> -->
    <div class="markdown-body">
      <README />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import README from '../../../README.md'; // 引入md文件

export default {
  name: 'Dashboard',

  components: {
    README,
  },
  data() {
    return {
      // readme: require('./readme.md')
    };
  },

  computed: {
    ...mapGetters(['name']),
  },

  created() {
    // console.log(this.readme);
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
