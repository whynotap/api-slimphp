const mysql = require('mysql');
const db = mysql.createConnection({
  host: '109.122.198.238', 
  user: 'api', 
  password: 'qwerty123456', 
  database: 'vicehabbo' 
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    process.exit(1);
  } else {
    console.log('Connecté à la base de données');
  }
});

module.exports = db;
