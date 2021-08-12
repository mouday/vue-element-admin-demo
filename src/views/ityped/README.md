# ityped

- github: https://github.com/luisvinicius167/ityped
- npmjs: https://www.npmjs.com/package/ityped

```bash
npm i ityped -S
```

实现代码

```js
import { init } from "ityped";

const oneElement = document.querySelector("#one");

init(oneElement, {
  showCursor: false,
  loop: false,
  strings: ['Hello World'],
});
```
