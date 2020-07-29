const mongoose = require('mongoose');

const addItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
    },
    itemMake: {
        type: String,
        trim: true,
    },
    entryDate: {
        type: Date,
    },
    category: {
        type: String,
    },
    serialNumber: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        trim: true,
    },
    itemColor: {
        type: String,
    },
    numStock: {
        type: Number,
        trim: true,
    },
    itemPhoto: {
        type: String,        
    },
});

module.exports = mongoose.model('AddItem', addItemSchema);