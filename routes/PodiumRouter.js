const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

const requestIp = require('request-ip');
const bcrypt = require('bcryptjs');

router.use(requestIp.mw());

router.get('/get/tokens', (req, res) => {
  const query = 'SELECT username, motto, tokens, look FROM users ORDER BY tokens DESC';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.get('/get/credits', (req, res) => {
  const query = 'SELECT username, motto, credits, look FROM users ORDER BY credits DESC';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;