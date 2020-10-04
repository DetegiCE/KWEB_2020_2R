const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const curDate = new Date();
const dateString = curDate.toString();

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    res.end(dateString);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});