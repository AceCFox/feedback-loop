const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.get('/feedback', (req, res) => {
    console.log('Getting all feedback');
    const queryString = `SELECT * FROM "feedback" ORDER BY "id" ASC;`;
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error);
        res.sendStatus(500);  
    });//end query
})//end get

app.post('/feedback', (req,res)=>{
    console.log('posting new feedback', req.body);
    const queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    pool.query(queryString, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then((result) => {
        res.sendStatus(200);
        console.log('successful POST');
    }).catch((error) => {
        console.log('Error POST /feedback', error);
        res.sendStatus(500);  
    });//end query
})//end POST

app.put('/feedback/:id', (req,res)=>{
    console.log('flagging', req.params.id);
    const queryString = `UPDATE "feedback" SET "flagged"=TRUE WHERE "id" = $1;`;
    pool.query(queryString, [req.params.id]).then ((result) => {
        res.sendStatus(200);
        console.log('successful PUT')
    }).catch((error)=>{
        console.log('error on PUT /feedback', error);
        res.sendStatus(500)
    })//end query
})//endPUT


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});