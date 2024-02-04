const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../database/db.js');

const router = express.Router();

router.post('/', (req, res) => {
    const { username, password } = req.body;
  
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, result) => {
      if (err) {
        res.send({ err: err });
      }
  
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            res.send(result);
          } else {
            res.send({ message: "Votre mot de passe est incorrect" });
          }
        });
      } else {
        res.send({ message: "Votre pseudonyme est incorrect" });
      }
    });
});

module.exports = router;