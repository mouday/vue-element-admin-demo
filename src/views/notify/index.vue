<template>
  <div class="app-container">
    <h1>Notification</h1>

    <el-input
      v-model="value"
      style="width:300px;margin-right:20px;"
    />

    <el-button @click="handleClick">显示Notify</el-button>
  </div>
</template>

<script>
import createNotify from './notification.js';

export default {
  name: '',

  props: [],

  components: {},

  data() {
    return {
      value: '新的消息',
    };
  },

  computed: {},

  methods: {
    async handleClick() {
      // 创建一个消息提示
      const notification = await createNotify(this.value, {
        body: '你有一个奖品待领取',
        icon: '/favicon.ico',
        data: 'https://www.baidu.com/',
      });

      // 处理点击事件
      if (notification) {
        notification.onclick = function (event) {
          console.log(event);
        };
      }
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>