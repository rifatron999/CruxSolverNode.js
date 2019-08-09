var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();
var rv = require('./responseView');























router.get('*', function(req, res, next){

	if(req.session.un != ""){
		

user.getById(user.sqlForLogedUserByName,req.session.un,function(results){
		if(results != null){

			var gender=results[0].u_gender;
			req.session.lUserEmail=results[0].u_email;


			
//u_gender bug
			if(gender == 'male'){req.session.uRepu = "♂ 🏆 : "+results[0].u_reputation;}
			else{req.session.uRepu = "♀️ 🏆 : "+results[0].u_reputation;}
			
			


		}else{
			res.send('Error!.. try again from home.js get* ...');
		}
	});
		next();
		
	}
	else{
		res.redirect('/login');
	}
});


router.get('/', function (req, res) {



	if(req.session.un != "" ){

user.getAll(user.sqlForQuestionList,function(results){
		if(results != null){
			res.render('home/index', {questionList: results,uname: req.session.un,uRepu: req.session.uRepu});			
		}else{
			res.send('Error!.. try again...');
		}
	});



		//res.render('home/index', {uname: req.session.un});
	}

	else{
		res.redirect('/login');
	}


});





















//adcomment starts
router.get('/addcomment/:q_id', function (req, res) {
	if(req.session.un != "" ){


			rv.responseView(req.params.q_id,function(results,qresults)
			{
				res.render('home/addcomment', {answerListByid: results,questionDetailByid: qresults,uname: req.session.un,uRepu: req.session.uRepu,er1: req.session.er1});

			});





			


			}
			else{
		res.redirect('/login');	}
});

//post starts

//response post
router.post('/addcomment/:q_id', function(req, res){ //new post
	
	var data = {                
		response: req.body.ans,
		qr_id: req.params.q_id,
		uname: req.session.un,
		
	};

	req.session.rsqider2=req.params.q_id;

	if(req.body.ans != '')
	{

	req.session.er1="";

	user.createResponse(user.sqlForInsertResponse,data, function(status){ 
		if(status){
			console.log("SubmitedResponseInfo>>> "+data);

			//res.redirect('/home/addcomment/:q_id');
			//res.redirect('/home');

			//i have redirect here



rv.responseView(req.params.q_id,function(results,qresults)
			{
				res.render('home/addcomment', {answerListByid: results,questionDetailByid: qresults,uname: req.session.un,uRepu: req.session.uRepu,er1: req.session.er1});

			});




			//href
		}else{
			rreq.session.er1= "AN ERROR OCCURRED";
			rv.responseView(req.params.q_id,function(results,qresults)
			{
				res.render('home/addcomment', {answerListByid: results,questionDetailByid: qresults,uname: req.session.un,uRepu: req.session.uRepu,er1: req.session.er1});

			});
		}
	});

	
}

else {
	req.session.er1= "YOU MUST ENTER YOUR RESPONSE BEFORE PRESSING SUBMIT RESPONSE";
	
	rv.responseView(req.params.q_id,function(results,qresults)
			{
				res.render('home/addcomment', {answerListByid: results,questionDetailByid: qresults,uname: req.session.un,uRepu: req.session.uRepu,er1: req.session.er1});

			});


}



});



//adcomment ends




router.get('/ask', function (req, res) {
			
if(req.session.un != "" ){

console.log("hocon>askcon");

res.redirect('/ask');



		//res.render('home/index', {uname: req.session.un});
	}else{
		res.redirect('/login');	}

});



router.get('/siteMod', function (req, res) {
			
if(req.session.un != "" ){

//res.render('home/siteMod');
console.log("hocon>sitcon");
res.redirect('/siteMod');




		//res.render('home/index', {uname: req.session.un});
	}else{
		res.redirect('/login');	}

});




router.get('/admin', function (req, res) {
			
if(req.session.un != "" ){

console.log("hocon>adcon");
res.redirect('/admin');



		//res.render('home/index', {uname: req.session.un});
	}else{
		res.redirect('/login');	}

});

router.get('/helpCenter', function (req, res) {
			
if(req.session.un != "" ){

console.log("hocon>hlpcon");
res.redirect('/helpCenter');



		//res.render('home/index', {uname: req.session.un});
	}else{
		res.redirect('/login');	}

});


module.exports = router;