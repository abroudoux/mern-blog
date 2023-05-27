// Mongoose
import { Schema, model as _model } from 'mongoose';


// Schema
const UserSchema = new Schema({
    username: {type: String, required: true, min: 4, unique:true},
    password: {type:String, required: true}
});

// Model 
const UserModel = new _model('User', UserSchema);

// Export Model
export default UserModel;


// // Mongoose
// const mongoose = require('mongoose');
// const { model } = require('mongoose');

// // Schema
// const UserSchema = new mongoose.Schema({
//     username: {type: String, required: true, min: 4, unique:true},
//     password: {type:String, required: true}
// });

// // Model 
// const UserModel = new mongoose.model('User', UserSchema);

// // Export Model
// module.exports = UserModel;
