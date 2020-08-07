const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Defining the data structure
const registrationSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    username: {
        type: String,
        trim: true,
        unique: true,
    },
    nationalID: {
        type: String,
        trim: true,
    },
    employeeID: {
        type: String,
        trim: true,
    },
    /* password: {
        type: String,
        trim: true,
    }, */
    /* empPasswordAgain: {
        type: String,
        trim: true,
    }, */

});

registrationSchema.plugin(passportLocalMongoose);
/* registrationSchema.plugin(passportLocalMongoose, {
    usernameField: 'lastName'
}) */

// Creating a model for  the schema
module.exports = mongoose.model('Registration', registrationSchema);

/* 
role: {
    type: String,
    default: "Agent",
    enum: ["Agent", "Admin"]
},

*/