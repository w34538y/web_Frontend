const Model = function(){
    const connection = require("../config/database");

    return {
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