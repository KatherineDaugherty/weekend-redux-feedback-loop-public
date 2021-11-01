const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./modules/pool');

const app = express();
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const feedbackRouter = require('./routes/feedback.router.js');
app.use('/api/feedback', feedbackRouter);
//set up ROUTER 

/** ---------- START SERVER ---------- **/
const PORT = process.env.PORT || 5000;


// app.get('/', (req, res) => {
//     console.log('HELLO GET');
    
//     const sqlText = 'SELECT * FROM "feedback";';
//     //find all feedback and return
//     pool.query(sqlText)
//     .then((result) => {
//         //check if GET works 
//         console.log('GOT feedback', result);
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('error on GET ', error);
//         res.sendStatus(500); 
//     });
// })

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});