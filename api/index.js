const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

// BcryptJs
const salt = bcrypt.genSaltSync(10);
const secret = 'zefnzrjf5RDAZT';

app.use(cors());
app.use(express.json());

// MongoDB DataBase
mongoose.connect('mongodb+srv://blog:ekViwdgqQp7d2vyk@cluster0.hrxfist.mongodb.net/?retryWrites=true&w=majority');

// Register
app.post('/register', async (req,res) => {

    const {username,password} = req.body;
    try {
        const userDoc = await User.create({ 
            username, 
            password:bcrypt.hashSync(password,salt) })
        res.json(userDoc); 
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
});

// Login
app.post('/login', async (req,res) => {

    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passChecked = bcrypt.compareSync(password, userDoc.password);

    if (passChecked) {
        jwt.sign({username,id:userDoc.id}, secret, {}, (err,token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok');
        });
    } else {
        req.status(400).json('wrong credentials');
    }
});

app.listen(4000);
