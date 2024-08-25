const express = require('express');
const products = express.Router();
const pool = require('../shared/pool');

products.get('/', (req, res) => {
    pool.query('select * from products', (error, products) => {
        if(error){
            res.status(500),send(error);
        }else{
            res.status(200).send(products)
        }
    })
})

module.exports = products