const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB DataBase
mongoose.connect('mongodb+srv://blog:ekViwdgqQp7d2vyk@cluster0.hrxfist.mongodb.net/?retryWrites=true&w=majority');

// app.post('/register', async (req,res) => {
//     const {username,password} = req.body;
//     const userDoc = await User.create({ username, password })
//     res.json(userDoc); 
// });

app.post('/register', async (req,res) => {
    const {username,password} = req.body;
    try {
        const userDoc = await User.create({ username, password })
        res.json(userDoc); 
    } catch (e) {
        res.status(400).json(e);
    }
});

// app.get('/test', (req,res) => {
//     res.json('test ok');
// });


app.listen(4000);
