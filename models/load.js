const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoadSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    origin: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    },
    destination: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    },
    truck: {
        type: Schema.Types.ObjectId,
        ref: 'Truck',
        required: true
    },
    status: {
        type: String,
        required: true
    },
    pickupDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    }
});

module.exports =  mongoose.model('Load', LoadSchema)
    

