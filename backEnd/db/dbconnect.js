const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root123",
  database: "test",
  port: 3306,
});

mysqlconnection.connect((err) => {
  if (err) {
    console.error("Connection error: " + JSON.stringify(err));
    process.exit(1); // Terminate the Node.js process if connection fails
  } else {
    console.log("Connected successfully!");
  }
});

module.exports = mysqlconnection;
