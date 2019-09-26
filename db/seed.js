const Gif = require("./schema");
const seedData = require("./seeds.json");

Gif.remove({})
  .then(() => {
    return Gif.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
