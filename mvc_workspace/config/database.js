// 데이터베이스에 연결하기 위한 js파일 
const mysql = require("mysql");
const config = require("./settings");

const connection = mysql.createConnection(config.connect);
connection.connect(function(err){
    if(err){
        console.error('error occured : ' + err);
        return;
    }
    console.log("connected as id : " + connection.threadId );
});

module.exports = connection; 