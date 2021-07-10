const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      process.env.LOCAL_DATABASE_URL || DELOY_DATABASE_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );

    console.log("Connect success");
  } catch (error) {
    console.log("Connect failed");
  }
}

module.exports = { connect };
