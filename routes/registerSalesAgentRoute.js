const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('../models/SalesAgentRegistration')

const Registration = mongoose.model('Registration')



var view = "./views/"


// Register sales agent route
router.get('/', async (req, res) => {
    if (req.session.user) {

        try {
            let items = await Registration.find()
            if (req.query.firstName) {
                items = await Registration.find({
                    firstName: req.query.firstName
                })
            }
            res.sendFile('/registerSalesAgent.html', {
                root: view
            })
        } catch (err) {
            res.status(400).send("Unauthorized Access");
        }

    } else {
        console.log("cant find session")
        res.redirect('/login')
    }
})

// Sales Agents list route
router.get('/agents', async (req, res) => {
    if (req.session.user) {

        try {
            let items = await Registration.find()
            if (req.query.firstName) {
                items = await Registration.find({
                    firstName: req.query.firstName
                })
            }
            res.render('agents', {
                agents: items,
                currentUser: req.session.user
            })
        } catch (err) {
            res.status(400).send("unable to find items in the database");
        }

    } else {
        console.log("cant find session")
        res.redirect('/login')
    }
})

// Sales agents route
router.post("/agents", async (req, res) => {
    try {
        const items = new Registration(req.body);
        await Registration.register(items, req.body.password, (err) => {
            if (err) {
                throw err
            }
            res.redirect('/login')
        })
    } catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})

//  Delete  Agent route
router.post("/delete", async (req, res) => {
    try {
        await Registration.deleteOne({
            _id: req.body.id
        });
        res.redirect("back");
    } catch (error) {
        res.status(400).send("Unable to delete to database");
    }
});




// export module
module.exports = router;