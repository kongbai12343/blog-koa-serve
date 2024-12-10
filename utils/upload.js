const path = require("path");
const multer = require("koa-multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../static/image"));
  },
  filename: function (req, file, cb) {
    try {
      file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");

      cb(null, new Date().valueOf() + path.extname(file.originalname));
    } catch (error) {
      cb(error);
    }
  },
});

const upload = multer({ storage });

module.exports = upload;
