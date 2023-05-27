import express from 'express';
import { create } from './models/User';
import { genSaltSync, hashSync } from 'bcryptjs';

const app = express();


// BcryptJs
const salt = genSaltSync(10);

// Register
app.post('/register', async (req,res) => {

    const {username,password} = req.body;
    try {
        const userDoc = await create({ 
            username, 
            password:hashSync(password,salt) })
        res.json(userDoc); 
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
});


// const express = require('express');
// const User = require('./models/User');
// const bcrypt = require('bcryptjs');
// const app = express();

// // BcryptJs
// const salt = bcrypt.genSaltSync(10);

// // Register
// app.post('/register', async (req,res) => {

//     const {username,password} = req.body;
//     try {
//         const userDoc = await User.create({ 
//             username, 
//             password:bcrypt.hashSync(password,salt) })
//         res.json(userDoc); 
//     } catch (e) {
//         console.log(e);
//         res.status(400).json(e);
//     }
// });
