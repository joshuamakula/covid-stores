const express = require('express');
const bodyParser = require('body-parser')
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});
const passport = require('passport');
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const registerRoute = require("./routes/registerSalesAgentRoute");
const Register = require('./models/SalesAgentRegistration')

const addItemRoute = require('./routes/addItemRoute');
require('./models/addItemModel');

const customerDetailsRoute = require('./routes/purchaseDetailsRoute');
require('./models/purchasedetailsModel');

const loginRoute = require('./routes/loginroute');

// instantiating express
const app = express();

//  Body passer middleware
app.use(bodyParser.urlencoded({
    extended: true
}))

// Express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// Passport configs
passport.use(Register.createStrategy());
passport.serializeUser(Register.serializeUser());
passport.deserializeUser(Register.deserializeUser());

// Database connection
mongoose.connect('mongodb://localhost:27017/covidStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, function (err) {
    if (err) throw err;
    else
        console.log('You are live');
})

app.set('view engine', 'pug')
app.set('views', './views');


// routes
app.use('/register', registerRoute)
app.use('/addItem', addItemRoute)
app.use('/details', customerDetailsRoute)
app.use('/login', loginRoute)

var view = "./views/"

// defining the directory with static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/addItem/uploads', express.static(path.join(__dirname, 'uploads')));


// agents list route 
app.get('/agents', (req, res) => {
    res.sendFile('agents.pug', {
        root: view
    });
})

// Product list route
app.get('/productlists', (req, res) => {
    res.sendFile('productlists.pug', {
        root: view
    })
})

// Customer list route
app.get('/customerlists', (req, res) => {
    res.sendFile('/customerlists.pug', {
        root: view
    })
})





// route homepage using fat arrow 
app.get('/', (req, res) => {
    res.render('index.pug');

})
// route to store manger dash board
app.get('/manager', (req, res) => {
    res.sendFile('/managerDash.html', {
        root: view
    })
})



app.post('/managerDash', (req, res) => {
    console.log(req.body)
    res.sendFile('/managerDash.html', {
        root: view
    })

})

// Listening request from server
// Post the login form
app.post('/manager', (req, res) => {
    console.log(req.body)
    res.sendFile('/managerDash.html', {
        root: view
    })

})

// Get the login form
app.get('/sales', (req, res) => {
    res.sendFile('/salesAgentDash.html', {
        root: view
    })
})


// path parameters
app.get('/pathparams/:name', (req, res) => {
    res.send('My path param is ' + req.params.name);
});

// Query Parameter
app.get('/queryparams', (req, res) => {
    res.send('My query param is ' + req.query.name + ' and ' + req.query.village);
});

// No page found error
app.get('*', (req, res) => {
    res.send('Ooops! No page found');
});

// creating the server
app.listen(4000, () => console.log('Covid Stores listening on port 4000!'));