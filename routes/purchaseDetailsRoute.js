const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('../models/purchasedetailsModel')

const CustomerDetails = mongoose.model('CustomerDetails');

var view = "./views/"

// route to register sales agent
router.get('/', (req, res) => {
    res.sendFile('/purchaseDetails.html', {
        root: view
    })
})

// Saving Customer details to the database
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
    try {
        const items = await CustomerDetails.find();
        res.render('customerlists', {
            customerlists: items
        })
    } catch (err) {
        res.status(400).send('No customer register yet.')
    }
})


// Delete customer route
router.post('/delete', async (req, res) => {
    try {
        await CustomerDetails.deleteOne({ _id: req.body.id })
        res.redirect('back');
    } catch (err) {
        res.status(400).send('Unable to delete user')
    }
})


// exporting module
module.exports = router;