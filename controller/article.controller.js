const ArticleService = require("../service/article.service");

class ArticleController {
  /**
   * @description 获取文章列表
   */
  static async getArticleList(ctx, next) {
    const { pageSize = 10, pageNum = 1 } = ctx.query;
    try {
      const articleList = await ArticleService.getArticleList(
        pageSize,
        pageNum
      );
      ctx.body = {
        code: 200,
        message: "获取文章列表成功",
        data: articleList,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        message: error.message,
        data: null,
      };
    }
  }

  /**
   * @description 根据文章标题获取文章
   */
  static async getArticleByTitle(ctx, next) {
    try {
      const { title } = ctx.params;
      const article = await ArticleService.getArticleByTitle(title);
      ctx.body = {
        code: 200,
        message: "获取文章成功",
        data: article,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        message: error.message,
        data: null,
      };
    }
  }

  static async createArticle(ctx, next) {
    try {
      const { title, content, user_id, article_category_id, status } =
        ctx.request.body;
      const article = {
        title,
        content,
        user_id,
        article_category_id,
        status,
      };
      await ArticleService.createArticle(article);
      ctx.body = {
        code: 200,
        message: "文章发布成功",
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
      };
    }
  }

  static async updateArticle(ctx, next) {
    try {
      const { id, title, content } = ctx.request.body;
      const article = {
        id,
        title,
        content,
      };
      await ArticleService.updateArticle(article);
      ctx.body = {
        code: 200,
        message: "更新文章成功",
        data: null,
      };
    } catch (error) {
      ctx.body = {};
    }
  }

  static async deleteArticle(ctx, next) {
    try {
      const { id } = ctx.request.body;
      await ArticleService.deleteArticle(id);
      ctx.body = {
        code: 200,
        message: "删除文章成功",
        data: null,
      };
    } catch (error) {
      ctx.body = {};
    }
  }
}

module.exports = ArticleController;
