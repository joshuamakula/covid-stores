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

//  Pay Balance route
router.get('/balance/:id', async (req, res) => {
    try {
        let items = await CustomerDetails.find({
            _id: req.params.id
        })
        res.render('payBalance', {
            payBalance: items
        })
    } catch (error) {
        console.log(error)
        res.status(400).send("Unable to get Pay Balance page")
    }
})

// Updating the Customer Balance
router.post('/update/:id', async (req, res) => {
    try {
        await CustomerDetails.updateOne({
            _id: req.params.id
        }, {
                $set:
                {
               /*  cName: req.body.cName,
                clocation: req.body.clocation,
                phone: req.body.phone,
                email: req.body.email,
                nationalID: req.body.nationalID,
                itemName: req.body.itemName,
                price: req.body.price, */
                initialPay: req.body.initialPay
                /* serialNumber: req.body.serialNumber,
                payDate: req.body.payDate,
                refNumber: req.body.refNumber,
                purchaseReceipt: req.body.purchaseReceipt */
                
            }
        }, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(req.body)
                    res.redirect("/details/customerlists")
                }
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Unable to update Customer Balance")
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