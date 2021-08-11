# html-to-image

- github: https://github.com/bubkoo/html-to-image
- npmjs: https://www.npmjs.com/package/html-to-image

```bash
npm i html-to-image -S
```

实现代码

```js
import { toPng } from "html-to-image";

var node = document.getElementById("my-node");

(async () => {
  const dataUrl = await toPng(node);

  // console.log(dataUrl);
  // data:image/png;base64,iVBORw0...
})();
```
