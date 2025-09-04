const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end("Hello World");
    };
    if(req.url == "/about"){
        res.end("This is About page")
    }
    if(req.url == "/profile"){
        res.end("This is Profile page")
    }
    if(req.url == "/home"){
        res.end("This is Home page")
    }
})
server.listen(3000);