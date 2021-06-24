const nunjucks = require("nunjucks");
import { pascal } from "naming-style";

export function toPascal(name) {
  console.log(pascal(name));

  return pascal(name);
}

// https://nunjucks.bootcss.com/api.html#constructor

const TEMPLATE_PATH = process.env.VUE_APP_PUBLIC_PATH + "templates";

export const render = new nunjucks.Environment(
  new nunjucks.WebLoader(TEMPLATE_PATH)
);

// export function render(template, config) {
//   return env.render(template, { config: config });
// }

// 默认的配置文件示例
const defaultConfig = {
  name: "article",
  props: [
    {
      prop: "title",
      type: "string",
      label: "标题"
    }
  ]
};

/**
 * 配置文件目录
 * @returns
 */
export function loadContents() {
  return JSON.parse(localStorage.getItem("schema2code.contents")) || [];
}

export function saveContents(data) {
  return localStorage.setItem("schema2code.contents", JSON.stringify(data));
}

export function addContents(name) {
  let data = loadContents();
  let list = data.map(item => {
    item.value;
  });

  let value = Math.max(list) + 1;

  data.push({ label: `${name}.json`, value: value });

  saveContents(data);

  let config = JSON.parse(JSON.stringify(defaultConfig));
  config.name = name;

  saveConfig(value, JSON.stringify(config));

  return value;
}

export function removeContents(val) {
  let data = loadContents();

  let index = data.findIndex(item => {
    return item.value == val;
  });

  if (index > -1) {
    data.splice(index, 1);
  }

  saveContents(data);
}

export function loadConfig(value) {
  let config = localStorage.getItem(`schema2code-${value}`) || "{}";
  return JSON.stringify(JSON.parse(config), null, 4);
}

export function saveConfig(value, data) {
  return localStorage.setItem(`schema2code-${value}`, data);
}
