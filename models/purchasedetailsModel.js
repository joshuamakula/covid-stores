const mongoose = require('mongoose');

const customerDetailsSchema = new mongoose.Schema({
    cName: {
        type: String,
        trim: false,
    },
    clocation: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    nationalID: {
        type: String,
        trim: true,
    },
    itemName: {
        type: String,
        trim: true,
    },
    initialPay: {
        type: Number,
        trim: true,
    },
    serialNumber: {
        type: String
    },
    payDate: {
        type: String
    },
    refNumber: {
        type: String,
        trim: true,
    },
    purchaseReceipt: {
        type: String,
        trim: true,
    },
})

module.exports = mongoose.model('CustomerDetails', customerDetailsSchema)