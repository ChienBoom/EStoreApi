const express = require('express')
const pool = require('../shared/pool')
const bcryptjs = require('bcryptjs')
const users = express.Router();

users.post('/signup', (req, res) => {
    try{
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let address = req.body.address;
        let city = req.body.city;
        let state = req.body.state;
        let pin = req.body.pin;
        let email = req.body.email;
        let password = req.body.password;

        pool.query(`select count(*) as count form users where email like '${email}'`),
        (error, resultCount) => {
            if(error){
                res.status(500).send(error)
            }else{
                if(resultCount[0].count > 0){
                    res.status(200).send('Email already exists');
                }else{
                    bcryptjs.hash(password, 10).then((hashedPassword) => {
                        const query = `Insert into users(email, firstName, lastName, address, city, state, pin, password) 
                        values ('${email}', '${firstName}', '${lastName}', '${address}', '${city}', '${state}', '${pin}', '${hashedPassword}')`
                        pool.query(query, (error, result) => {
                            if(error){
                                res.status(401).send(error)
                            }else{
                                res.status(201).send('Success')
                            }
                        })
                    })
                }
            }
        }
    }
})