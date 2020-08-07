const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('../models/purchasedetailsModel')

const CustomerDetails = mongoose.model('CustomerDetails');

var view = "./views/"

// route to register sales agent
router.get('/', async (req, res) => {
    if (req.session.user) {

        try {
            let items = await CustomerDetails.find()
            if (req.query.firstName) {
                items = await CustomerDetails.find({
                    firstName: req.query.firstName
                })
            }
            res.sendFile('purchaseDetails.html', {
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


// Customer details route
router.post('/', async (req, res) => {
    const customerDetails = new CustomerDetails(req.body);
    try {
        await customerDetails.save()
        console.log(req.body);
        res.redirect('/details/customerlists')
    } catch (err) {
        res.send('Sorry! Something went wrong.')
        console.log(err)
    }
})

// Routing customer details in a table
router.get('/customerlists', async (req, res) => {
    if (req.session.user) {
        try {
            const items = await CustomerDetails.find();
            if (req.query.firstName) {
                items = await CustomerDetails.find({
                    firstName: req.query.firstName
                })
            }
            res.render('customerlists', {
                customerlists: items,
                currentUser: req.session.user
            })
        } catch (err) {
            res.status(400).send('No customer register yet.')
        }
    } else {
        console.log("cant find session")
        res.redirect('/login')
    }
})


// Delete customer route
router.post('/delete', async (req, res) => {
    try {
        await CustomerDetails.deleteOne({
            _id: req.body.id
        })
        res.redirect('back');
    } catch (err) {
        res.status(400).send('Unable to delete user')
    }
})


// exporting module
module.exports = router;