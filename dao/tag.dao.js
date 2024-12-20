const TagModel = require("../model/tag.model");
class TagDao {
  static async addTag(tag) {
    await TagModel.create(tag);
  }

  static async findTagByName(name) {
    return await TagModel.findOne({
      attributes: ["id", "name", "state"],
      where: {
        name,
      },
    });
  }

  static async findTagById(id) {
    return await TagModel.findOne({
      attributes: ["id", "name", "state"],
      where: {
        id,
      },
    });
  }

  static async findAllTag(queryObj) {
    return await TagModel.findAll({
      order: [["id", "DESC"]],
      attributes: ["id", "name", "state"],
      limit: queryObj.pageSize,
      offset: (queryObj.pageNo - 1) * queryObj.pageSize,
    });
  }

  static async updateTag(tag) {
    await TagModel.update(
      { name: tag.name, state: tag.state },
      {
        where: {
          id: tag.id,
        },
      }
    );
  }

  static async deleteTag(id) {
    await TagModel.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = TagDao;
