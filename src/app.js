const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./Routes/index.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

app.use("/api", routes);

module.exports = app;
