var express = require('express');
//var user	= require.main.require('./models/user-model'); //new 
var router = express.Router();
var siteMod	= require.main.require('./models/siteMod-model');
var cv = require('./ponseView');



//adcomment starts



router.get('/', function (req, res) {
	   if(req.session.un != "" ){

       
				
          cv.ponseView (function(rresults,uresults){
			res.render('siteMod/index',{report:rresults,userlist:uresults, uname: req.session.un,uRepu: req.session.uRepu,er1: req.session.er1});


			});

			
		}
		
		else{
		res.redirect('/login');	
		}
		
});


router.get('/taglist', function (req, res) {
	   if(req.session.un != "" ){

siteMod.getAll(siteMod.sqlForFetchAllTag,function(results){
		if(results != null){
			res.render('siteMod/taglist', {uname: req.session.un,uRepu: req.session.uRepu,tagList:results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
	}
	else{
		res.redirect('/login');
	}
	
});


 router.post('/taglist', function (req, res){
	if(req.session.un != "" )
		 var data = {
		 tag: req.body.t_tag,
		 id:req.params.id,
		 };



		 if(req.body.t_tag != '')
{
req.session.er1="";



		 siteMod.createTag(siteMod.sqlForInsertTag,data, function(status){

		 if(status){
			 res.redirect('/siteMod');	
			 console.log("TAG INSERTED ADMIN");		
		 }else{
			 res.redirect('/siteMod');
		 }
	 });
		}
		else {
	req.session.er1= "PLEASE INSERT TAG";
	
	res.redirect('/siteMod');


}
	
	
 });
	
	
router.get('/index/:u_id', function (req, res){
	if(req.session.un != "" )
		var data = {
		//report: req.body.u_name,
		id:req.params.u_id,
		};
		siteMod.createreport(siteMod.sqlForDotheRport,data, function(status){

		if(status){
			res.redirect('/siteMod');			
		}else{
			res.redirect('/login');
		}
	});
	
	console.log("sitecon>post");
	
	
});

	
	
	







module.exports = router;




