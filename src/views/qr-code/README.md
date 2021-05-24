# qrcode

- github: https://github.com/soldair/node-qrcode
- npmjs: https://www.npmjs.com/package/qrcode

```bash
npm i qrcode -S
```

实现代码

```js
import QRCode from "qrcode";

async function createQRCode() {
  this.url = await QRCode.toDataURL(this.value, {
    margin: 0
  });
}
```
