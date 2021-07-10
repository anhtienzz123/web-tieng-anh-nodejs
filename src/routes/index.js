const wordRouter = require("./word");

const route = (app) => {
  app.use("/words", wordRouter);
};

module.exports = route;
