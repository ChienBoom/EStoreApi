const express = require('express');
const app = express();

const server = app.listen(5001, () => {
    console.log('App os running pm the port 5001');
})