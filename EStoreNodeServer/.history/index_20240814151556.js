const express = require("express");
const productCategories = require("./routes/productCategories");
const app = express();
const PORT = 5001;

app.use('/productCategories', productCategories)

const server = app.listen(PORT, () => {
  console.log("App os running pm the port 5001");
});
