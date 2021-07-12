const express = require("express");
const app = express();
const port = 3001;
require("dotenv").config();

const cors = require("cors");

var whitelist = ["http://localhost:3000", "http://localhost:8080"]; //white list consumers
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "device-remember-token",
    "Access-Control-Allow-Origin",
    "Origin",
    "Accept",
  ],
};

app.use(cors(corsOptions));

const db = require("./config/db");
const routes = require("./routes");

app.use(express.json());
db.connect();
routes(app);

app.listen(port, function () {
  console.log("App listening at http://localhost:" + port);
});
