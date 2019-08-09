var db = require('./db');

module.exports = {

		
		sqlForUserListByReport: "select * from t_user where u_report=1", // SIFAT
		sqlForQuestionListByReport: "select * from t_question where q_report=1", // SIFAT
		sqlForAnswerListByReport: "select * from t_answer where a_report=1", // SIFAT
		sqlForTagList: "select * from t_tag", // SIFAT
		sqlForUserList: "select * from t_user", // SIFAT
		sqlForInsertTag:"insert into t_tag (t_id,t_name) values (?,?)",



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


	 createTag: function(sql,user, callback){
	 	
	 	db.execute(sql,['',user.tag], function(status){
			console.log(">admin-model");
	 		callback(status);
	 	});
	},

	
	// update: function(user, callback){
	// 	var sql = "update user set username=?, password=? where id=?";
	// 	db.execute(sql, [user.username, user.password, user.id], function(status){
	// 		callback(status);
	// 	});
	// },

	
	delete: function(id, callback){
		var sql = "delete from t_user where u_id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}
}