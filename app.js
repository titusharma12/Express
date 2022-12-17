const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.get("/",(req, res) => {
    con = "this is the best content";
    const params = {
        'title': "pubg is best game",
        "content": con
    }
    res.status(200).render('index.pug', params);
});

app.post("/",(req, res) => {
    names = req.body.name;
    email = req.body.email;
    age = req.body.age;
    contact = req.body.contact;
    message = req.body.message;
    let output = `the name of the client is ${names},${email},${age},${contact},${message}`;

    fs.writeFileSync('output.txt', output)
    const params = { 'message': "Your form has been submitted successfully " }
    res.status(200).render('index.pug', params);
});
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});