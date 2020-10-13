const axios = require('axios');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const getData = async () => {
    try {
        return await axios.get('https://api.github.com/repos/nodejs/node');
    } catch (e) {
        console.log(e);
    }
}

const server = http.createServer(async (req, res) => {
    try {
        const nodeData = await getData();
        if(nodeData.data.message) {
            console.log('data ok');
        }
    } catch (e) {
        res.statusCode = 500;
        console.log('Internal error issued.');
    }
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});