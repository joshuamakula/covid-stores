const express = require('express');
const bodyParser = require('body-parser')
const multer = require('multer');
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

const AddItem = mongoose.model('AddItem');
const Registration = mongoose.model('Registration')

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
    useFindAndModify: false,
    useCreateIndex: true,
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
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


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

//logout route
app.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                // failed to destroy session
            } else {
                return res.redirect('/')
            }
        })
    }
})


// Display items on product page
app.get('/', async (req, res) => {
    try {
        const items = await AddItem.find()
        res.render('index', {
            productlists: items
        })
    } catch (err) {
        res.status(400).send('Product list is empty. Add some products')
    }
})

// route to store manger dash board
app.get('/manager', async(req, res) => {
            if (req.session.user) {

                try {
                    
                    if (req.query.firstName) {
                        items = await Registration.find({
                            firstName: req.query.firstName
                        })
                    }

                    res.sendFile('/managerDash.html', {
                        root: view
                    })
                    } catch (err) {
                        res.status(400).send("unreachable dashboard");
                    }

                    } else {
                        console.log("cant find session")
                        res.redirect('/login')
                    }
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