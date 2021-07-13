const wordRouter = require("./word");
const courseRouter = require("./course");

const route = (app) => {
  app.use("/words", wordRouter);
  app.use("/courses", courseRouter);
};

module.exports = route;
