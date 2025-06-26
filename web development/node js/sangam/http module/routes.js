const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url)

    if (url == '/'){
        res.writeHead(200, 'Content-Type : text/plain');
        res.end('home page');
    }

    else if(url === '/projects'){
        res.writeHead(200, 'Content-Type : text/plain');
        res.end('projects page');
    }

    else{
        res.writeHead(404, 'Content-Type : text/plain');
        res.end('page not found');
    }
});

server.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})