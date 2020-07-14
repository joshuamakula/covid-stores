const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

// defining the directory with static files
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({
    extended: true
}))

// route homepage using fat arrow 
app.get('/', (req, res) => { // new
    res.sendFile(__dirname + '/index.html')
    // res.send('Homepage! Hello world.');
})

// route to the login page
// Get the login form
app.get('/login', (req, res) => { // new
    res.sendFile(__dirname + '/login.html')
})

// Listening request from server
// Post the login form
app.post('/login', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

// route add new item
app.get('/add', (req, res) => {
    res.sendFile(__dirname + '/add_item.html');
})

// path parameters
app.get('/pathparams/:name', (req, res) => {
    res.send('My path param is ' + req.params.name);
});

// Query Parameter
app.get('/queryparams', (req, res) => {
    res.send('My query param is ' + req.query.name + ' and ' + req.query.village);
});

// listening for request: the server
app.listen(4000, () => console.log('Example app listening on port 4000!'));