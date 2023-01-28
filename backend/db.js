const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/mykeeper";

mongoose.set("strictQuery", false);

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to Mongo Success");
  });
};

module.exports = connectToMongo;
