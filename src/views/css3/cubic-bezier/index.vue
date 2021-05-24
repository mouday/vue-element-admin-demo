<template>
  <div>
    <h2>input获得焦点后下划线由中间向两端展开动画</h2>

    <div class="markdown-body">
      <README />
    </div>

    <div class="mu-text-field-content">
      <input
        type="text"
        class="mu-text-field-input"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      >
      <div class="mu-text-field-lines">
        <!-- 默认线 -->
        <hr class="mu-text-field-line">
        <!-- 焦点线 -->
        <hr
          class="mu-text-field-focus-line"
          :class="{'focus': isFocus}"
        >
      </div>
    </div>
  </div>
</template>

<script>
import README from './README.md';

export default {
  name: '',

  props: [],

  components: { README },

  data() {
    return {
      isFocus: false,
    };
  },

  computed: {},

  methods: {
    async getData() {},
    handleInputFocus() {
      this.isFocus = true;
    },
    handleInputBlur() {
      this.isFocus = false;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.mu-text-field-content {
  width: 300px;

  // 输入框样式
  .mu-text-field-input {
    appearance: none;
    outline: none;
    border: none;
    background: none;
    border-radius: 0 0 0 0;

    box-shadow: none;
    display: block;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 32px;
    font-style: inherit;
    font-variant: inherit;
    font-weight: inherit;
    font-stretch: inherit;
    font-size: inherit;
    color: rgba(0, 0, 0, 0.87);
    font-family: inherit;
  }

  // 线条处理
  .mu-text-field-lines {
    position: relative;

    hr {
      box-sizing: content-box;
      height: 0;
      margin: 0;
      overflow: visible;
    }

    // 未获得焦点
    .mu-text-field-line {
      width: 100%;
      height: 1px;
      border: none;
      background-color: rgba(0, 0, 0, 0.3);
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
    }
    // 获得焦点
    .mu-text-field-focus-line {
      width: 100%;
      height: 2px;
      border: none;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      background-color: #7e57c2;
      transform: scaleX(0);
      transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);

      &.focus {
        transform: scaleX(1);
      }
    }
  }
}
</style>
