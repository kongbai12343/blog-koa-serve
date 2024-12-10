const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");
const Router = require("koa-router");
const static = require("koa-static");
const path = require("path");

const routerGroup = require("../api");

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(static(path.join(process.cwd(), "./static")));
// 批量注册路由
routerGroup.forEach((router) => {
  if (router instanceof Router) {
    app.use(router.routes()).use(router.allowedMethods());
  }
});

module.exports = app;
