const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/gaphy", { useMongoClient: true });

mongoose.Promise = Promise;

module.exports = mongoose;
