var db = require('./db');

module.exports = {

		sqlForQuestionList: "Select * from t_question  order by q_rating DESC",
		sqlForAnswerListById: "select * from t_answer where q_id=?",
		sqlForLogedUserByName: "select * from t_user where u_name=?",
		sqlForFetchAllTag: "select * from t_tag",
	    sqlForHelpCenter:"select * from t_help",// irin



	getById: function(sql,h_id, callback){
		var sql = "select * from t_help where h_id=?";
		db.getResult(sql, [h_id], function(result){
			callback(result);
		});
	},
	getAll: function(sql,callback){
		var sql = "select * from t_help";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	},
	//validate: function(t_help, callback){
		//var sql = "select * from t_help where h_ask=? and h_answer=? and h_reputation=?";
		//db.getResult(sql,[t_help.h_ask, t_help.h_answer, t_help.h_reputation], function(results){
			//console.log(results.h_ask);

			//if(results.length > 0){
				//callback(true);
			//}else{
				//callback(false);
			//}
		//});
	 //},
	 create: function(t_help, callback){
	 	var sql = "insert into t_help (?,?,?.?)";
	 	db.execute(sql,['',t_help.h_ask, t_help.h_answer, t_help.h_reputation], function(status){
			callback(status);
		});
	 },
	 update: function(t_help, callback){
	 	var sql = "update t_help set h_ask=?, h_answer=?, h_reputation=? where h_id=?";
	 	db.execute(sql, [t_help.h_ask, t_help.h_answer, t_help.h_reputation, t_help.h_id], function(status){
	 		callback(status);
	 	});
	 },
	// delete: function(id, callback){
	// 	var sql = "delete from user where id=?";
	// 	db.execute(sql, [id], function(status){
	// 		callback(status);
	// 	});
	// }
}