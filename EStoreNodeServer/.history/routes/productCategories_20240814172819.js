const express = require("express");
const productCategories = express.Router();
const pool = require('../shared/pool')

productCategories.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).send(err);
    } else {
      pool.query("select * from categories", (error, categories) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send(categories);
        }
      });
    }
  });
});

module.exports = productCategories