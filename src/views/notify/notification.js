const PERMISSON_GRANTED = "granted";
const PERMISSON_DENIED = "denied";
const PERMISSON_DEFAULT = "default";

/**
 * 浏览器消息提示
 * @param {*} title
 * @param {*} options
 *
 * return Notification: {onshow, onclose, onclick}
 */
export default async function createNotify(title, options) {
  // 如果用户已经允许，直接显示消息，如果不允许则提示用户授权
  if (Notification.permission != PERMISSON_GRANTED) {
    const res = await Notification.requestPermission();
  }

  if (Notification.permission == PERMISSON_GRANTED) {
    return new Notification(title, options);
  } else {
    return null;
  }
}

/**
  createNotify("新的消息", {
    body: "你有一个奖品待领取",
    icon: "favicon.ico",
    data: "https://www.baidu.com/"
  });
*/
