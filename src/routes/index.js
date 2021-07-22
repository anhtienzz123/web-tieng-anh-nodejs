const wordRouter = require("./word");
const courseRouter = require("./course");
const examRouter = require("./exam");
const videoRouter = require("./video");

const route = (app) => {
  app.use("/words", wordRouter);
  app.use("/courses", courseRouter);
  app.use("/exams", examRouter);
  app.use("/videos", videoRouter);
};

module.exports = route;
