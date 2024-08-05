const client = require('./dbconnection.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 3100;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

client.connect();

app.get('/', function(req, res) {
    res.end("Hello world");
})

app.get('/get', function(req, res) {
    client.query(`select * from users u where id = 12869`, (err, result)=>{
        if(!err){
            //res.end(`Data: ${res.rows}`);
            res.send(result.rows);
            //console.log(res.rows);
        }
        else {
            console.log(err.message);
        }
    })
    client.end;
})

app.get('/get/:id', function(req, res) {
    client.query(`select * from users u where id = ${req.params.id}`, (err, result)=>{
        if(!err){
            //res.end(`Data: ${res.rows}`);
            res.send(result.rows);
            //console.log(res.rows);
        }
        else {
            console.log(err.message);
        }
    })
    client.end;
})

