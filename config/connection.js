/*var Sequelize = require("sequelize");
var sequelize;

if (process.env.JAWSDB_URL) {
  //sequelize = mysql.createConnection(process.env.JAWSDB_URL);
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect:  'mysql',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging:  true //false
  })
}
else {
  sequelize = new Sequelize("burgers_db", "root", "haymarMySql2018", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}*/

// Exports the connection for other files to use
//module.exports = sequelize;
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "haymarMySql2018",
    database: "burgers_db"
  });
}

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});


  module.exports = connection;