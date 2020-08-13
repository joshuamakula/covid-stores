const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');
require('../models/addItemModel')

const AddItem = mongoose.model('AddItem');
const Registration = mongoose.model('Registration')

// uploading image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage
})


var view = "./views/"
// route to add product
router.get('/', async (req, res) => {
    if (req.session.user) {

        try {
            let items = await Registration.find()
            if (req.query.firstName) {
                items = await Registration.find({
                    firstName: req.query.firstName
                })
            }
            res.render('addItem')
        } catch (err) {
            res.status(400).send("unable to find items in the database");
        }

    } else {
        console.log("cant find session")
        res.redirect('/login')
    }
})

// Saving to the database
router.post('/', upload.single('itemPhoto'), async (req, res) => {
    console.log(req.file);
    const addItem = new AddItem({
        itemName: req.body.itemName,
        itemMake: req.body.itemMake,
        entryDate: req.body.entryDate,
        category: req.body.category,
        serialNumber: req.body.serialNumber,
        price: req.body.price,
        itemColor: req.body.itemColor,
        itemDesc: req.body.itemDesc,
        numStock: req.body.numStock,
        itemPhoto: req.file.path
    });
    try {
        await addItem.save();
        console.log(req.body);
        res.redirect('/addItem/productlists')
    } catch (err) {
        res.send('Sorry! Something went wrong.')
        console.log(err)
    }
})

// Getting the product list
router.get('/productlists', async (req, res) => {
    try {
        const items = await AddItem.find()
        res.render('productlists', {
            productlists: items
        })
    } catch (err) {
        res.status(400).send('Product list is empty. Add some products')
    }
})

// Search route that searches throught the product list using the item name
router.get('/itemSearch', async (req, res) => {
    try {
        let items = await AddItem.find()
        if (req.query.itemName) {
            items = await AddItem.find({
                itemName: req.query.itemName
            })
        }
        res.render('productlists', {
            productlists: items
        })
    } catch (err) {
        res.status(400).send("unable to find items in the database");
    }
})

// deleting from the Product list
router.post('/delete', async (req, res) => {
    try {
        await AddItem.deleteOne({
            _id: req.body.id
        })
        res.redirect("back")
    } catch (error) {
        res.status(400).send("Unable to delete selected item")
    }
})

//  Product update route which takes you from the update button to updateProductlist.pug page 
// which allows the user to update the product details
router.get('/productUpdate/:id', async (req, res) => {
    try {
        let items = await AddItem.find({
            _id: req.params.id
        })
        res.render('updateproductlist', {
            productlists: items
        })
    } catch (error) {
        console.log(error)
        res.status(400).send("Unable to update")
    }
})


// Updating a single product including the product photo
router.post('/update/:id', upload.single('itemPhoto'), async (req, res) => {
    
    try {
        await AddItem.updateOne({
            _id: req.params.id
        }, {
                $set: 
                {
                itemName: req.body.itemName,
                itemMake: req.body.itemMake,
                entryDate: req.body.entryDate,
                category: req.body.category,
                serialNumber: req.body.serialNumber,
                price: req.body.price,
                itemColor: req.body.itemColor,
                itemDesc: req.body.itemDesc,
                numStock: req.body.numStock,
                itemPhoto: req.file.path
            }
        })
        console.log(req.body)
        res.redirect("/addItem/productlists")
    } catch (error) {
        console.log(error)
        res.status(400).send("Unable to update")
    }
})

/* 
    Route thate takes you from the sales button to sale.pug file
*/
router.get('/sale/:id', async (req, res) => {
    try {
        let items = await AddItem.find({
            _id: req.params.id
        })
        res.render('sale', {
            productlists: items
        })
    } catch (error) {
        console.log(error)
        res.status(400).send("Unable to get sale page")
    }
})



// export module
module.exports = router;