const http = require('http');
const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.end("Hello from Home page");
})
app.get('/about',(req,res) => {
    res.end("Hello from About page  "+ "hey you are " + req.query.myname +' '+ req.query.id);
})


app.listen(3001,() => console.log("server is running on http://localhost:3001"))