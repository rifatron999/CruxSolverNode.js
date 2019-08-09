var express = require('express');
var user	= require.main.require('./models/user-model'); //new 
var router = express.Router();


router.get('/', function (req, res) {
	res.render('register/index',{er1: req.session.er1});
});




router.post('/', function(req, res){ //new post
	
	var data = {                
		username: req.body.rusername,
		password: req.body.rpassword,
		dob: req.body.rdob,
		gender: req.body.gn,
		email: req.body.remail,
	};
	console.log(data);

if(req.body.rusername != '' && req.body.rpassword != '' && req.body.rdob != '' && req.body.gn != '' && req.body.remail != '')
{
req.session.er1="";

	user.createUser(user.sqlForInsertUser,data, function(status){ 
		if(status){
			//console.log("u sub done");
			
			res.redirect('/register');

		}else{
			req.session.er1="[ALREADY EXISTS] USERNAME OR EMAIL MUST ME UNIQUE";
			res.redirect('/register');
		}
	}); 
}else {
	req.session.er1= "PLEASE INSERT ALL YOUR INFORMATION";
	
	res.redirect('/register');


}




});

module.exports = router;