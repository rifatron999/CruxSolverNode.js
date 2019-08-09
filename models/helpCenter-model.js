var db = require('./db');

module.exports = {

		sqlForQuestionList: "Select * from t_question  order by q_rating DESC",
		sqlForAnswerListById: "select * from t_answer where q_id=?",
		sqlForLogedUserByName: "select * from t_user where u_name=?",
		sqlForFetchAllTag: "select * from t_tag",
		sqlForInsertQuestion:  "insert into t_question (?,?,?,?,?,?,?)",
	    



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
	create: function(user, callback){
		//var sql = "insert into user (?,?,?)";
		db.execute(sql,['',user.username, user.password], function(status){
			callback(status);
		});
	},



	createQuetion: function(user, callback){
		//var sql = "insert into user (?,?,?)";
		db.execute(sql,['',user.username, user.password], function(status){
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