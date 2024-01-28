import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/foo', (req, res, next) => {
    const random = Math.random();

    if (random < 0.5) {
        res.type('text/plain');
        res.send("sometimes this");
    } else {
        next();
    }
});

app.get('/foo', (req, res) => {
    res.type('text/plain');
    res.send("and sometimes that");
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404 - Not Found");
});

app.listen(app.get('port'), () => {
    console.log("WELCOME TO THE INTERNET.");
});