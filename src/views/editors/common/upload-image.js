import mo from 'more-utils'

/**
 * 上传图片接口
 * @param {*} file
 * @param {*} type  上传目录
 *  人物 person
 *  项目 product
 *  机构 agency
 *  附件 annex
 */
async function uploadImage(file) {
  /**此处实现具体的上传逻辑 */
  //   console.log(res);
  return mo.getObjectURL(file);
}

export default uploadImage;
