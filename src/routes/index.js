const wordRouter = require("./word");
const courseRouter = require("./course");
const examRouter = require("./exam");

const route = (app) => {
  app.use("/words", wordRouter);
  app.use("/courses", courseRouter);
  app.use("/exams", examRouter);
};

module.exports = route;
