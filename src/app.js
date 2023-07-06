const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

app.use("/api/v1", routes);

module.exports = app;
