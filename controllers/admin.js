var express = require('express');
//var user	= require.main.require('./models/user-model'); //old 
var admin	= require.main.require('./models/admin-model');
var router = express.Router();



//main
router.get('/', function (req, res) {
	   if(req.session.un != "" ){

			admin.getAll(admin.sqlForUserListByReport,function(results){
			if(results != null){

				
//2nd
				admin.getAll(admin.sqlForQuestionListByReport,function(qresults){
				if(results != null){

	//3rd

					admin.getAll(admin.sqlForAnswerListByReport,function(aresults){
					if(results != null){

							admin.getAll(admin.sqlForTagList,function(tresults){
							if(results != null){


										console.log('user '+results);
										console.log('ques '+qresults);
										console.log('ans '+aresults);


										res.render('admin/index', {uname: req.session.un,uRepu: req.session.uRepu,report:results,qreport:qresults,areport:aresults,tagList:tresults,er1: req.session.er1});


									}else{
										res.send('Error!.. try again...');
									}
									});

									
					}else{
						res.send('Error!.. try again...');
					}
					});
					

				}else{
					res.send('Error!.. try again...');
				}
				});

							
			}
			else{
				res.send('Error!.. try again...');
			}
		});
		}
		else{
			res.redirect('/login');
		}

		
	});




router.post('/', function (req, res){
	if(req.session.un != "" )
		 var data = {
		 tag: req.body.t_tag,
		 //id:req.params.id,
		 };
if(req.body.t_tag != '')
{
req.session.er1="";



		 admin.createTag(admin.sqlForInsertTag,data, function(status){

		 if(status){
			 res.redirect('/admin');	
			 console.log("TAG INSERTED ADMIN");		
		 }else{
			 res.redirect('/login');
		 }
	 });
		}
		else {
	req.session.er1= "PLEASE INSERT TAG";
	
	res.redirect('/admin');


}
	
	
 });




router.get('/user_list', function(req, res){

	admin.getAll(admin.sqlForUserList,function(results){
		if(results != null){
			res.render('admin/userList', {uname: req.session.un,uRepu: req.session.uRepu,report:results,userList: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});








// router.get('/', function (req, res) {
// 	   if(req.session.un != "" ){

	// admin.getAll(admin.sqlForQuestionListByReport,function(results){
	// 		if(results != null){
	// 			res.render('admin/index', {uname: req.session.un,uRepu: req.session.uRepu,qreport:results});			
	// 		}else{
	// 			res.send('Error!.. try again...');
	// 		}
	// 	});
	// 	}
	// 	else{
	// 		res.redirect('/login');
	// 	}
		
	// });



// router.get('/', function (req, res) {
// 	   if(req.session.un != "" ){

// 	admin.getAll(admin.sqlForAnswerListByReport,function(results){
// 			if(results != null){
// 				res.render('admin/index', {uname: req.session.un,uRepu: req.session.uRepu,areport:results});			
// 			}else{
// 				res.send('Error!.. try again...');
// 			}
// 		});
// 		}
// 		else{
// 			res.redirect('/login');
// 		}
		
// 	});




router.get('/userList/delete/:id', function(req, res){

	admin.delete(req.params.id, function(status){
		if(status){
			res.redirect("/admin");		
		}else{
			res.send('Error!.. try again...');
		}
	});
});







module.exports = router;