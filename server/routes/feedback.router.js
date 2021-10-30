const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET all feedback that has been put into Database 
router.get('/', (req, res) => {
    console.log('HELLO FROM CLIENT GET');

    const sqlText = 'SELECT * FROM "feedback";';
    //find all feedback and return
    pool.query(sqlText)
        .then((result) => {
            //check if GET works 
            console.log('GOT feedback', result);
            res.send(result.rows);
        }).catch((error) => {
            console.log('error on GET ', error);
            res.sendStatus(500);
        });
})

//POST new Feedback 
router.post('/', (req, res) => {
    //the data is sent from client in req.body
    console.log('get a POST request', req.body);


})

module.exports = router;
