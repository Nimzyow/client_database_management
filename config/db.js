const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB connected");
  } catch (err) {
    err => {
      console.error(err.message);
      //the next line allows to exit with error
      process.exit(1);
    };
  }
};

module.exports = connectDB;
