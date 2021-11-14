const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'J3nnif3rCal3ndar',
      database: 'business'
    },
   console.log(`
   -----------------------------
   Welcome To Deep Space Manager
   -----------------------------
   
   
   
  `));

  
db.connect(err => {
  if (err) throw err;
  console.log("An error occurred");
  });

  module.exports = db;