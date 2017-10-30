var mongoose = require('mongoose');
var Gomail = mongoose.model('GoMail');
require('../data/db');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:3000/GoMail";
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

module.exports.getAllData= function(req, res){
    Gomail
    .find({}, {id: false})
    .exec(function(error, GoMail){
        res
        .status(200)
        .json(GoMail);
    });
};

module.exports.getDataById = function(req, res){
    var uniqueId = req.params.uniqueId;

    Gomail
    .find({'_id': uniqueId})
    .exec(function(error, GoMail){
        res
        .status(200)
        .json(GoMail);
    });
};

module.exports.newDataInsert= function(req, res) {
    
    var uniqueId = req.body.uniqueId;
    var subject = req.body.subject;
    var content = req.body.content;
    var detail= {uniqueId: uniqueId, subject: subject, content: content};
    
    if(!subject || !content){
        res
        .status(404)
        .json({"Error": "Please insert subject and content"});
        return
    }
    
    Gomail
    .create(detail, function(err) {
        if (err) throw err;
        console.log("Inserted a document.");
        res
        .status(200)
        .json(detail);
        return;
    });
};

module.exports.dataUpdate= function(req, res){
    var updateId= req.params.uniqueId;
    var subject= req.query.subject;
    var content=req.query.content;
    if(!subject || !content){
         res
         .status(404)
         .json({"Error": "Please insert subject and content"});
         return
    }
    var select= {'uniqueId': updateId};
    var updatevalue= {'subject': subject, 'content': content};
    
    Gomail
    .update(select, updatevalue, {' multi': false, 'upsert': false}, function(err){
        console.log("One record updated");
        res
        .status(200)
        .json({"Success": "Data updated"});
        return;
    })
};

module.exports.dataDelete= function(req, res){
    var deleteid= req.params.uniqueId;
    var deleteData= {'uniqueId': deleteid};
    Gomail
    .deleteOne(deleteData, function(err){
        res
        .status(200)
        .json({'success': 'Data Deleted'});
        console.log("One record deleted");
        return
    })
};