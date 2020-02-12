const express = require('express');
const router = express.Router();
const Books = require('../models/Books');
const mongoose = require('mongoose')

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'This is get method'
    });
});

router.post('/', (req, res, next)=>{
    const book = new Books({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price: req.body.price
    });
    book
    .save()
    .then(result => console.log(result))
    .catch(err=>Console.log(err));
    res.status(200).json({
        message: 'This is post method'
    });
});

router.delete('/', (req, res, next)=>{
    res.status(200).json({
        message: 'This is delete method'
    });
});
