var express= require('express');
var routes= express.Router();
var path= require('path');
var ctrEmail= require('../controller/email.controller');

routes
.route('/GoMail')
.get(ctrEmail.getAllData)

routes
.route('/getAllData')
.get(ctrEmail.getAllData)

routes
.route('/GoMail/:uniqueId')
.get(ctrEmail.getDataById)

routes
.route('/newDataInsert')
.post(ctrEmail.newDataInsert)

routes
.route('/GoMail')
.post(ctrEmail.newDataInsert)


routes
.route('/GoMail/:uniqueId')
.put(ctrEmail.dataUpdate)

routes
.route('/GoMail/:uniqueId')
.delete(ctrEmail.dataDelete)

module.exports = routes;