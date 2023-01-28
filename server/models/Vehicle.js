const mongoose = require('mongoose');
const id_validator = require ('mongoose-id-validator');
const Schema = mongoose.Schema;

var VehicleSchema = new Schema({
    car_id: {
        type: String,
        required: true,
        trim: true,
    },
    name_car: {
        type: String,
        required: true,
        trim: true
    },
    year_car: {
        type: Number,
        required: true,
        trim: true
    },
    type_car: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: String,
        required: true,
    },
    receive_date: {
        type: Date,
        required: true,
        trim: true,
    },
    next_check_date: {
        type: Date,
        required: true,
        trim: true,
    },
    next_test_date: {
        type: Date,
        required: true,
        trim: true,
    },
    people: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person'}],
}, { timestamps: true });
VehicleSchema.plugin(id_validator);
VehicleSchema.index("completed");


const Vehicle = mongoose.model('Vehicle', VehicleSchema );

module.exports = Vehicle