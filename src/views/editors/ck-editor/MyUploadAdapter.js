import uploadImage from "../common/upload-image.js";

/**
 * 自定义上传图片插件
 */
class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  async upload() {
    const imgUrl = await uploadImage(await this.loader.file);

    // 方法返回数据格式： {default: "url"}
    return {
      default: imgUrl
    };
  }
}

export default MyUploadAdapter;
