const express = require("express");
const productCategories = require("./routes/productCategories");
const cors = require('cors')
const app = express();
const PORT = 5001;

app.use(cors())
app.use('/productCategories', productCategories)

const server = app.listen(PORT, () => {
  console.log("App os running pm the port 5001");
});
