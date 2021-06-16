const mysql = require("mysql");
const config = require("./settings");

const connection = mysql.createConnection(config.connect);
connection.connect(function(err){
    if(err){
        connsole.error('error occured : ' + err);
        return;
    }
    console.log("connected as id : " + connection.threadId );
});

module.exports = connection; 