const nunjucks = require("nunjucks");

// https://nunjucks.bootcss.com/api.html#constructor

const TEMPLATE_PATH = process.env.VUE_APP_PUBLIC_PATH + 'templates'

export const render = new nunjucks.Environment(new nunjucks.WebLoader(TEMPLATE_PATH));

// export function render(template, config) {
//   return env.render(template, { config: config });
// }
