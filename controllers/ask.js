var express = require('express');
var user	= require.main.require('./models/user-model'); //new 
var router = express.Router();


router.get('/', function (req, res) {
	console.log("askcon");
	if(req.session.un != "" ){

user.getAll(user.sqlForFetchAllTag,function(results){
		if(results != null){

	res.render('ask/index',{uname: req.session.un,uRepu: req.session.uRepu,tagList: results,er1: req.session.er1});
}
else{
			res.send('Error!.. try again...');
		}
	});



		//res.render('home/index', {uname: req.session.un});
	}else{
		res.redirect('/login');
	}


});


//question post
router.post('/', function(req, res){ //new post
	
	var data = {                
		qTitle: req.body.qTitle,
		qDescription: req.body.qDescription,
		picUpload: req.body.picUpload,
		qTag: req.body.qTag,
		uname: req.session.un,
		uemail: req.session.lUserEmail,
	};
	console.log(data);

	if(req.body.qTitle != '' && req.body.qDescription != '' && req.body.qTag != '')
{
	req.session.er1="";

	user.createQuestion(user.sqlForInsertQuestion,data, function(status){ 
		if(status){
			req.session.qsub = "q sub done";
			res.redirect('/ask');
		}else{
			//res.send('q sub error');
			req.session.er1= "AN ERROR OCCURRED";
			res.redirect('/ask');
		}
	});

}
else {
	req.session.er1= "YOU MUST ENTER QUESTION TITLE,QUESTION DESCRIPTION AND SELECT TAG TO SUBMIT YOUR QUESTION";
	
	res.redirect('/ask');


}

	//res.send('q sub');




});








module.exports = router;