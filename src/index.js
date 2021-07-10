const express = require("express");
const app = express();
const port = 3001;
require("dotenv").config();

const db = require("./config/db");
const routes = require("./routes");

app.use(express.json());
db.connect();
routes(app);

app.listen(port, function () {
  console.log("App listening at http://localhost:" + port);
});
