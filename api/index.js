const userRouter = require("./user.api");
const articleRouter = require("./article.api");
const UploadRouter = require("./upload.api");

const routerGroup = [userRouter, articleRouter, UploadRouter];

module.exports = routerGroup;
