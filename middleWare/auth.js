const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../app/private.key"),
  "utf8"
);

const verifyAuth = async (ctx, next) => {
  const authorization = ctx.headers?.authorization;
  if (!authorization) {
    ctx.body = {
      code: 401,
      message: "请先登录再操作",
      data: null,
    };
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = jwt.verify(token, privateKey);
    console.log(payload);
    await next();
  } catch (error) {
    ctx.body = {
      code: 401,
      message: "token无效，请重新登录",
      data: null,
    };
  }
};

module.exports = {
  verifyAuth,
};
