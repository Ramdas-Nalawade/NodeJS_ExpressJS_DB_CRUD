const mysql = require('mysql8')
var mysqlconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'newdb'
});
mysqlconnection.connect((err)=>
{
    if(err)
    {
        console.log("Error in DB connection");
    }
    else
    {
        console.log("DB connection successful");
    }
});

module.exports = mysqlconnection;