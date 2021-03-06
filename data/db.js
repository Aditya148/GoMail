var mongoose = require('mongoose');
var dburl = "mongodb://localhost:27017/GoMail";

mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
    console.log("Mongoose connected to database: "+ dburl);
});

mongoose.connection.on('error', function(){
    console.log("Mongoose connection error to database: "+ dburl);
});

mongoose.connection.on('disconnected', function(){
    console.log("Mongoose disconnected to database: "+ dburl);
});

require('./model');