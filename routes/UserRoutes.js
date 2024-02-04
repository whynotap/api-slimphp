const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;