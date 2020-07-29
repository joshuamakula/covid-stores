const express = require('express');
const router = express.Router();
const passport = require('passport');


var view = "./views/"

// route to the login page
// Get the login form
router.get('/', (req, res) => {
    res.sendFile('/login.html', {
        root: view
    })
})


// Process user and password
router.post('/', passport.authenticate('local'), (req, res) => {
    req.session.user = req.user;
    res.redirect('/manager');
})

module.exports = router;