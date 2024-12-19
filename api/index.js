const userRouter = require("./user.api");
const articleRouter = require("./article.api");
const UploadRouter = require("./upload.api");
const tagRouter = require("./tag.api");
const categoryRouter = require("./category.api");

const routerGroup = [userRouter, articleRouter, UploadRouter, tagRouter, categoryRouter];

module.exports = routerGroup;
