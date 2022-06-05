const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDb = () => {
  mongoose.connect(
    URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log(err);
      else console.log("Connected to mongodb");
    }
  );
};

module.exports = connectDb;
