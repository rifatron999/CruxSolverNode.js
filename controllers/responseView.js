//var express = require('express');
var user = require.main.require('./models/user-model');
//var router = express.Router();












//responseView starts
//var responseView : 
exports.responseView = function (q_id,callback)
{



user.getById(user.sqlForAnswerListById,q_id,function(results){
		if(results != null){




user.getById(user.sqlForQuestionDetailById,q_id,function(qresults){
		if(results != null){





console.log("QuestionDetailsForAddingResponse: "+qresults);
console.log("responseList: "+results);

           callback(results,qresults); //here


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
//responseView Ends