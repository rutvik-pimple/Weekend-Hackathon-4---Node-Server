var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const url = req.url
    if(url === '/welcome'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write('Welcome to Dominos!')
        return res.end()
    }else if(url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
            }))
        return res.end()
    }else{
        res.writeHead(404)
        return res.end()
    }
  
}

module.exports = httpServer;

httpServer.listen(8081)