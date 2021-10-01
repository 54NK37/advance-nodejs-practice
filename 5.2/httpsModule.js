const fs = require('fs')
const https = require('https')

var options = {
    key = fs.readFileSync('key.pem'),
    cert = fs.readFileSync('cert.pem')
}
const server = https.createServer(options)

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello world\n');
  });

server.listen(443)

