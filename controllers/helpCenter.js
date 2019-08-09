var express = require('express');
//var user	= require.main.require('./models/user-model'); //new 
var helpCenter	= require.main.require('./models/help-model');//irin
var router = express.Router();

router.get('*', function(req, res, next){

	if(req.session.un != null){
		next();
	}else{
		res.redirect('/login');
	}
});//irin
router.get('/', function (req, res) {
	   if(req.session.un != "" ){

helpCenter.getAll(helpCenter.sqlForHelpCenter,function(results){
		if(results != null){
			res.render('helpCenter/index', {uname: req.session.un,uRepu: req.session.uRepu,helpcenter:results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
	}
	else{
		res.redirect('/login');
	}
	
});

router.get('/update', function(req, res){

	helpCenter.getAll(function(results){
		if(results != null){
			res.render('helpCenter/update', {update: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/edit/:h_id', function(req, res){

	helpCenter.getById(req.params.h_id, function(result){
		if(result != null){
			res.render('helpCenter/edit', {h_ask: result[0]});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.post('/edit/:h_id', function(req, res){
	
	var data = {
		h_ask: req.body.title1,
		h_answer: req.body.title2,
		h_reputation: req.body.title3,
		h_id: req.params.h_id
	};

	helpCenter.update(data, function(status){

		if(status){
			res.redirect('/helpCenter/edit');			
		}else{
			res.redirect('/helpCenter/edit/'+req.params.h_id);
		}
	});

});

//router.get('/home/delete/:id', function(req, res){

	//user.delete(req.params.id, function(status){
		//if(status){
			//res.render('home/userList', {userList: results});			
		//}else{
			//res.send('Error!.. try again...');
		//}
	//});
//});





module.exports = router;
