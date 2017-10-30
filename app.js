require('./data/db');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.get('/getAllData', routes);
app.get('/getDataById', routes);
app.post('/newDataInsert', routes);
app.get('/GoMail', routes);
app.put('/GoMail/:uniqueId', routes);
app.delete('/GoMail/:uniqueId', routes);
app.get('/GoMail/:uniqueId', routes);

app.listen(3000, function(){
    console.log('Listening at port: 3000');
});