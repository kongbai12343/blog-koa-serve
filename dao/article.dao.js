const ArticleModel = require('../model/article.model');

class ArticleDao {
  static async create(article) {
    return await ArticleModel.create(article);
  }

  /**
   * @description 获取文章列表
   * @param {Object} query 查询参数
   * @returns {Array} 文章列表
   */
  static async find(query) {
    return await ArticleModel.find(query);
  }
}

module.exports = ArticleDao;
