const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../app/private.key"),
  "utf8"
);

const createToken = async (userInfo) => {
  let token;
  try {
    token = jwt.sign(userInfo, privateKey, {
      algorithm: "HS256",
      expiresIn: 30 * 24 * 60 * 60 * 1000,
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createToken,
};
