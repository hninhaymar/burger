var connection = require("./connection.js");

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  });

var orm={
  selectALL : function(tableInput,cb) {
    var queryString = "SELECT * FROM ?? ";
    var query = connection.query(queryString,[tableInput], function(err,result){
      if(err) throw err;
      //console.log(result);
      cb(result);
    });
    //console.log(query.sql);
  },
  insertOne : function(tableInput, columns, values,cb) {
    var queryString = "INSERT INTO ?? ("+columns+") VALUES("+values+")";
    var query = connection.query(queryString,[tableInput], function(err,result){
      if(err) throw err;
      //console.log(result);
      cb(result);
    });
    //console.log(query.sql);

  },
  updateOne : function(tableInput,setCol,setColVal,whereCol,whereColVal,cb) {
    var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
    var query = connection.query(queryString,[tableInput,setCol,setColVal,whereCol,whereColVal],function(err,result){
      if(err) throw err;
      //console.log(result);
      cb(result);
    });
  //console.log(query.sql);
  }
};

module.exports = orm;