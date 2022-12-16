const mongoose = require('mongoose');

const loadSchema = new mongoose.Schema({
  pickupLocation: {
    type: String,
    // required: true
  },
  deliveryLocation: {
    type: String,
    // required: true
  },
  pickupDate: {
    type: Date,
    // required: true
  },
  deliveryDate: {
    type: Date,
    // required: true
  },
  cargoType: {
    type: String,
    // required: true
  },
  weight: {
    type: Number,
    // required: true
  },
  rate: {
    type: Number,
    // required: true
  },
  available: {
    type: Boolean,
    // required: true
  },
  assignedTruck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Truck'
  }
});

const Load = mongoose.model('Load', loadSchema);

module.exports = Load;
    

