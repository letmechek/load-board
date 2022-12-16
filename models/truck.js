const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const TruckSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    maxCapacity: {
        type: Number,
        required: true
    },
    availableCapacity: {
        type: Number,
        required: true
    }
});



module.exports = mongoose.model('Truck', TruckSchema)

