const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET all feedback that has been put into Database 
router.get('/', (req, res) => {
    //find all feedback and return
    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error on GET ', error);
        res.sendStatus(500); 
    });
})

//POST new Feedback 

