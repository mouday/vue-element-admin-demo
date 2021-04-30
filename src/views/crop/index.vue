<template>
  <div class="app-container">
    <div style="margin-bottom:20px;">
      使用 <a
        href="https://github.com/xyxiao001/vue-cropper"
        target="_blank"
        class="link"
      >vue-cropper</a> 进行图片裁剪
    </div>

    <div class="image-list">
      <div class="source-image">
        <vueCropper
          ref="cropper"
          :img="sourceImage"
          :canScale="true"
          :autoCrop="true"
          :fixed="true"
          :centerBox="true"
        ></vueCropper>
      </div>

      <div class="target-image">
        <img
          :src="targetUrl"
          alt=""
        >
      </div>
    </div>

    <div>
      <el-button @click.prevent="startCrop">截图</el-button>
    </div>
  </div>
</template>

<script>
// doc: https://github.com/xyxiao001/vue-cropper
import { VueCropper } from 'vue-cropper';
import mo from 'more-utils';

export default {
  name: '',

  props: [],

  components: {
    VueCropper,
  },

  data() {
    return {
      sourceImage:
        'https://fengyuanchen.github.io/cropperjs/images/picture.jpg',
      targetUrl: null,
    };
  },

  computed: {},

  methods: {
    startCrop() {
      // 获取截图的blob数据
      this.$refs.cropper.getCropBlob((data) => {
        // do something
        console.log(data);

        this.targetUrl = mo.getObjectURL(data);
      });
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
.image-list {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 630px;
}

.source-image {
  width: 300px;
  height: 300px;
}

.target-image {
  width: 300px;
  height: 300px;
}

.target-image img {
  width: 100%;
  height: 100%;
}
</style>