const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/get/wordfilter', (req, res) => {
  const query = 'SELECT `key`, replacement, hide, report, mute FROM wordfilter';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
