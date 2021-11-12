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
    console.log('Connected to the Manager database.')
  );

  
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  });

  module.exports = db;