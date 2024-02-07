const http = require('http');
const fs = require('fs');
const url = require("url");

const server  = http.createServer((req,res) => {
    const log= `${Date.now()}: ${req.url} New request received\n`
    const myurl = url.parse(req.url, true);

    fs.appendFile('log.txt',log,(err,data) => {
        switch(myurl.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username = myurl.query.myname;
                res.end(`Hi my name is ${username}`);
                break;
            default:
                res.end("404 Not Found");       
        }})
   
})

server.listen(3001,() => console.log("server is running on http://localhost:3001"))