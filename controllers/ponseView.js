//var express = require('express');
var siteMod = require.main.require('./models/siteMod-model');
//var router = express.Router();












//responseView starts
//var responseView : 
exports.ponseView = function (callback)
{




			
			
			siteMod.getAll(siteMod.sqlForReportesUser,function(rresults){
		if(rresults != null){
			
			siteMod.getAll(siteMod.sqlForLogedUser,function(uresults){
		if(uresults != null){

			
			
				
				console.log('report '+rresults);
				console.log('userlist '+uresults);
				
			
         callback(rresults,uresults);

			
		
		
		
		
		}
		else{
			res.send('Error!.. try again...');
		}
	});


}
else{
			res.send('Error!.. try again...');
		}
	});



		//res.render('home/index', {uname: req.session.un});
	



}