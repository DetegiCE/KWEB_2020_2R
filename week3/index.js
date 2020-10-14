const express = require('express');

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('login.pug');
});

app.get('/page/:page', (req, res) => {
    const { page } = req.params;
    res.render('board.pug', { page });
});

app.get('/posts/:until', (req, res) => {
    const { until } = req.params;
    const untilParsed = parseInt(until);

    const posts = [];
    if(!isNaN(untilParsed)) {
        for (let i = 0 ; i < untilParsed ; i++) {
            posts.push(`Post ${i+1}`);
        }
    }
    res.render('posts.pug', { posts });
});

app.post('/login', (req, res) => {
    const { username, password, introduction } = req.body;
    res.send(`
    POST /login<br>
    Username: ${username}, Password: ${password}<br>
    Introduction: ${introduction}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));