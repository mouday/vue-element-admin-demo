const nunjucks = require("nunjucks");

// https://nunjucks.bootcss.com/api.html#constructor
export const env = new nunjucks.Environment(new nunjucks.WebLoader("/templates"));

// export function render(template, config) {
//   return env.render(template, { config: config });
// }
