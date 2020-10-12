const axios = require('axios');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer(async (req, res) => {
    const data = await axios({
        method: 'get',
        url: 'https://api.github.com/repos/nodejs/node',
        responseType: 'json'
    });
    console.log(data);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});