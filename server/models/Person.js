const mongoose = require('mongoose')

var PersoneSchema = new mongoose.Schema({
    employee_id: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },

}, { timestamps: true }
);

const Person = mongoose.model('Person', PersoneSchema);

module.exports = Person