//DEC
var express = require('express');

var ejs = require('ejs');

var bodyParser = require('body-parser');
var expressSession = require('express-session'); 
//var expressValidator = require('express-validator'); 


var home = require('./controllers/home');
var login = require('./controllers/login');
var siteMod = require('./controllers/siteMod');
var admin = require('./controllers/admin');
var helpCenter = require('./controllers/helpCenter');
var ask = require('./controllers/ask');
var logout = require('./controllers/logout');
var register = require('./controllers/register');

var csapp = express();









//CONFIG
csapp.set('view engine','ejs');

//Middleware
csapp.use(bodyParser.urlencoded({'extended':false}));
//console.use(expressValidator());
csapp.use(expressSession({secret:'my top secret password', saveUninitialized: true, resave: false}));

csapp.use('/home', home);
csapp.use('/login', login);
csapp.use('/siteMod', siteMod);
csapp.use('/admin', admin);
csapp.use('/helpCenter', helpCenter);
csapp.use('/ask', ask);
csapp.use('/logout', logout);
csapp.use('/register', register);

console.log('at csapp.js');

//Routing
csapp.get('/', function(req, res){
	//res.send('CS Landing page');
	res.redirect('/login');
});




//server startup
csapp.listen(3001, function(){
	console.log('server started at 3001...');
})



