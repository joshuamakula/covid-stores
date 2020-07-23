const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

var view = "./views/"

// defining the directory with static files
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({
    extended: true
}))


// route homepage using fat arrow 
app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: view
    });

})
// route to store manger dash board
app.get('/manager', (req, res) => {
    res.sendFile('/managerDash.html', {
        root: view
    })
})


// route to get information for the product
app.get('/addItem', (req, res) => {
    res.sendFile('/addItem.html', {
        root: view
    })
})

// route to add info from the form
app.post('/addItem', (req, res) => {
    console.log(req.body)
    res.redirect('/manager')
})

// route to register sales agent
app.get('/details', (req, res) => {
    res.sendFile('/purchaseDetails.html', {
        root: view
    })
})

// route to register sales agent
app.get('/register', (req, res) => {
    res.sendFile('/registerSalesAgent.html', {
        root: view
    })
})

// route to the login page
// Get the login form
app.get('/login', (req, res) => {
    res.sendFile('/login.html', {
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

// listening for request: the server
app.listen(4000, () => console.log('Example app listening on port 4000!'));