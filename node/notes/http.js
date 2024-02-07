const http = require('http');
const fs = require('fs');

const server  = http.createServer((req,res) => {
    const log= `${Date.now()}: ${req.url}: New request recieved\n`
    fs.appendFile('log.txt',log,(err,data) => {
        res.end("Heloo from server again");
    })
   
})

server.listen(3001,() => console.log("server is running on http://localhost:3001"))