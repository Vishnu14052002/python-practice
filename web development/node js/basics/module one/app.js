const http = require('http');
const fs = require('fs');

function rqListener(req,res){

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('content-type','text/html');
        res.write('<html>')
        res.write('<head><title>Node JS learning</title></head>')
        res.write('<body><h1>hello from node js server one</h1></body>')
        res.write('<form action = "/message" method = "post"><input type="text"> <input type = "submit" value = "send"></form>')
        res.write('</html>')

        return res.end()
    }

    if(url === '/message' && method == 'POST'){
        fs.writeFileSync('hello.txt','dummy')
        res.setHeader('Location','/')
        res.statusCode = 302;
        return res.end()
    }

    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>Node JS learning</title></head>')
    res.write('<body><h1>hello from node js server</h1></body>')
    res.write('</html>')
    res.end()
}

const server = http.createServer(rqListener);

server.listen(3000);