var db = require('./db');

module.exports = {

		sqlForQuestionList: "Select * from t_question  order by q_id DESC",
		sqlForAnswerListById: "select * from t_answer where q_id=? order by a_id DESC",
		sqlForQuestionDetailById: "select * from t_question where q_id=?",
		sqlForLogedUserByName: "select * from t_user where u_name=?",
		sqlForFetchAllTag: "select * from t_tag",
		sqlForInsertQuestion:  "insert into t_question (q_id,q_title,q_question,q_picture,q_rating,u_name,q_report,u_email) VALUES (?,?,?,?,?,?,?,?)",
		sqlForInsertResponse:  "insert into t_answer (a_id,a_answer,u_name,q_id,a_rating,a_report) VALUES (?,?,?,?,?,?)",
		sqlForInsertUser:  "INSERT INTO t_user (u_id, u_name, u_password,u_dob,u_gender, u_email, purl, u_reputation, u_report) VALUES (?,?,?,?,?,?,?,?,?)",
	    



	getById: function(sql,id, callback){
		//var sql = "select * from user where id=?";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	},
	getAll: function(sql,callback){
		//var sql = "select * from user";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	},
	validate: function(user, callback){
		var sql = "select * from t_user where u_name=? and u_password=?";
		db.getResult(sql,[user.username, user.password], function(results){
			console.log(results.u_name);

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	 },
	// create: function(user, callback){
	// 	//var sql = "insert into user (?,?,?)";
	// 	db.execute(sql,['',user.username, user.password], function(status){
	// 		callback(status);
	// 	});
	// },



	createQuestion: function(sql,Question, callback){
		
		db.execute(sql,['',Question.qTitle, Question.qDescription, Question.picUpload,'', Question.uname,'',Question.uemail], function(status){
		
			callback(status);
		});
	},


createResponse: function(sql,Response, callback){
		
		db.execute(sql,['',Response.response, Response.uname, Response.qr_id,'',''], function(status){
					callback(status);
		});
	},

	createUser: function(sql,User, callback){
		
		db.execute(sql,['',User.username, User.password, User.dob, User.gender,User.email,'','',''], function(status){
		
			callback(status);
		});
	},





	// update: function(user, callback){
	// 	var sql = "update user set username=?, password=? where id=?";
	// 	db.execute(sql, [user.username, user.password, user.id], function(status){
	// 		callback(status);
	// 	});
	// },
	// delete: function(id, callback){
	// 	var sql = "delete from user where id=?";
	// 	db.execute(sql, [id], function(status){
	// 		callback(status);
	// 	});
	// }
}