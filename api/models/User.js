// Mongoose
const mongoose = require('mongoose');

// Schema
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, min: 4, unique:true},
    password: {type:String, reuired: true}
});

// Model
const UserModel = model('User', UserSchema);

// Export Model
model.exports = UserModel;
