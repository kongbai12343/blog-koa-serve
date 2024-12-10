const Router = require("koa-router");

const ArticleController = require("../controller/article.controller");
const { verifyAuth } = require("../middleWare/auth");

const articleRouter = new Router({
  prefix: "/article",
});

/**
 * @description 获取文章列表
 * @api {get} /article 获取文章列表
 */
articleRouter.get("/", ArticleController.getArticleList);
/**
 * @description 根据文章名称查询文章
 * @api {get} /article/:title 根据文章名称查询文章
 */
articleRouter.get("/:title", ArticleController.getArticleByTitle);
/**
 * @description 新增文章
 * @api {post} /article/:id 新增文章
 */
articleRouter.post("/", verifyAuth, ArticleController.createArticle);
/**
 * @description 修改文章
 * @api {put} /article/:id 修改文章
 */
articleRouter.put("/:id", verifyAuth, ArticleController.updateArticle);
/**
 * @description 删除文章
 * @api {delete} /article/:id 删除文章
 */
articleRouter.delete("/:id", verifyAuth, ArticleController.deleteArticle);

module.exports = articleRouter;
