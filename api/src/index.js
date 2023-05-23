// Express
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const User = require('../models/User');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog:ekViwdgqQp7d2vyk@cluster0.hrxfist.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.create({ username, password })
    res.json(userDoc); 
});


app.listen(4000);
