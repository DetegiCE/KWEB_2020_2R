const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.get('/board/:page', (req, res) => {
    const { page } = req.params;
    res.send(`Board Page #${page}`);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});