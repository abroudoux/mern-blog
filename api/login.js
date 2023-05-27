import express from 'express';
import { findOne } from './models/User';
import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcryptjs';

const app = express();


// BcryptJs
const secret = 'zefnzrjf5RDAZT';

// Login
app.post('/login', async (req,res) => {

    const {username, password} = req.body;
    const userDoc = await findOne({username});
    const passChecked = compareSync(password, userDoc.password);

    if (passChecked) {
        sign({username,id:userDoc.id}, secret, {}, (err,token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok');
        });
    } else {
        req.status(400).json('wrong credentials');
    }
});


// const express = require('express');
// const User = require('./models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const app = express();

// // BcryptJs
// const secret = 'zefnzrjf5RDAZT';

// // Login
// app.post('/login', async (req,res) => {

//     const {username, password} = req.body;
//     const userDoc = await User.findOne({username});
//     const passChecked = bcrypt.compareSync(password, userDoc.password);

//     if (passChecked) {
//         jwt.sign({username,id:userDoc.id}, secret, {}, (err,token) => {
//             if (err) throw err;
//             res.cookie('token', token).json('ok');
//         });
//     } else {
//         req.status(400).json('wrong credentials');
//     }
// });
