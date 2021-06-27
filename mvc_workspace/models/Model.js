// 가장 기본이 되는 모델, SQL 실행을 위한 모델을 가지고 있음
const Model = function(){
    const connection = require("../config/database");

    return {
      // model.run으로 함수를 실행하면 아래의 함수를 실행해준다. 
        run : function(sql, obj, callback){
            //custom formatting
            connection.config.queryFormat = function (query, values) {
                if (!values) return query;
                return query.replace(/\:(\w+)/g, function (txt, key) {
                  if (values.hasOwnProperty(key)) {
                    return this.escape(values[key]);
                  }
                  return txt;
                }.bind(this));
              };
            // connection.query("SQL 구문", 객체, 콜백함수);
            connection.query(sql, obj, function(err, rows){
                if(err){
                    console.log(err);
                }
                callback(err, rows);
            });
        }
    }
};

module.exports = Model();