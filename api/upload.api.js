const Router = require("koa-router");

const upload = require("../utils/upload");

const uploadFile = upload.single("file");

const UploadRouter = new Router({
  prefix: "/upload",
});

UploadRouter.post("/", uploadFile, async (ctx) => {
  ctx.body = {
    code: 200,
    message: "上传成功",
    data: ctx.req.file.filename,
  };
});

module.exports = UploadRouter;
