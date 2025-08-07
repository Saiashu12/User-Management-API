const mongoose = require('mongoose');

const geoSchema = new mongoose.Schema({
  lat: String,
  lng: String,
});

const addressSchema = new mongoose.Schema({
  city: String,
  zipcode: String,
  geo: geoSchema,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  company: String,
  address: addressSchema,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
