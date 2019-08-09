var express = require('express');
var user	= require.main.require('./models/user-model'); //new 
var router = express.Router();


router.get('/', function (req, res) {
	res.render('login/index',{er1: req.session.er1});
});

router.get('/register', function (req, res) {
	res.redirect('/register');

});


router.post('/', function(req, res){ //new post
	
	var data = {                
		username: req.body.username,
		password: req.body.password,
	};


if(req.body.username != '' || req.body.password != '')
{
	req.session.er1="";
	user.validate(data, function(status){ 
		if(status){
			req.session.un = req.body.username;
			res.redirect('/home');
		}else{
			req.session.er1="INVALID USERNAME OR PASSWORD";
			res.redirect('/login');
			//res.send('invalid username/password...login');
		}
	});
}

else {
	req.session.er1= "PLEASE INSERT USERNAME OR PASSWORD";
	
	res.redirect('/login');


}




	




});

module.exports = router;