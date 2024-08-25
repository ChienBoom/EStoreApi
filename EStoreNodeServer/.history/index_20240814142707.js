const express = require('express');
const app = express();
const PORT = 5001

app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
})

const server = app.listen(PORT, () => {
    console.log('App os running pm the port 5001');
})