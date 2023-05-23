// Mongoose
const mongoose = require('mongoose');
const { model } = require('mongoose');

// Schema
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, min: 4, unique:true},
    password: {type:String, reuired: true}
});

// Model
const UserModel = new mongoose.model('User', UserSchema);

// Export Model
module.exports = UserModel;
