const express = require("express");
const hbs = require("express-handlebars");
const cors = require("cors");
const parser = require("body-parser");

const gifs = require("./controllers/gifs");

const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.set("port", process.env.PORT || 3000);
app.set("view engine", "hbs");

app.engine(
  ".hbs",
  hbs({
    extname: ".hbs",
    partialsDir: "views/",
    layoutsDir: "views/",
    defaultLayout: "layout-main"
  })
);

app.use(cors());
app.use("/gifs", gifs);

app.listen(app.get("port"), () => {
  console.log("Hello world!");
});
