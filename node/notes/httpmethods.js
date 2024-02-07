const http = require('http');
const fs = require('fs');
const url = require("url");

const server  = http.createServer((req,res) => {
    if(req.url === "/favicon.ico"){
        return res.end()
    }
    const log= `${Date.now()}: ${req.method} ${req.url} New request received\n`
    const myurl = url.parse(req.url, true);

    fs.appendFile('log.txt',log,(err,data) => {    
        switch(myurl.pathname){
            case "/":
                if(req.method === 'GET'){
                    res.end("HomePage");
                }              
                break;
            case "/about":
                const username = myurl.query.myname;
                res.end(`Hi my name is ${username}`);
                break;
            case '/signup':
                if(req.method === 'GET'){
                    res.end("Hello from signup form");
                } else  if(req.method === 'POST'){
                    res.end("Success");
                }     
                break;  
            default:
                res.end("404 Not Found");       
        }})
   
})

server.listen(3001,() => console.log("server is running on http://localhost:3001"))