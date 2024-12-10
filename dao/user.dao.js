const UserModel = require("../model/user.model");

class UserDao {
  static async create(user) {
    return await UserModel.create(user);
  }

  /**
   * @description: 根据用户名查找用户
   * @param {string} username 用户名
   * @return { Promise<UserModel | null> } 返回值为：用户对象，未找到返回null
   */
  static async findByUsername(username) {
    return await UserModel.findOne({
      // attributes: ["id", "username"], // 返回部分字段
      where: {
        username,
      },
    });
  }
}

module.exports = UserDao;
