

const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); 


const booksRouter = require('./api/routes/Books'); 

mongoose.connect('mongodb://localhost:27017/CrudOps',{
        useNewUrlParser: true,
        useUnifiedTopology: true
});


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next)=>{

    res.status(200).json({
        message: 'Server is running'
    });
});

module.exports = app; 


app.use((req, res, next)=>{
        res.status(200).json({
            message: 'Server is running'
        });
});
module.exports = app;
