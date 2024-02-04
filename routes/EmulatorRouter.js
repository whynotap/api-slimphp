const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/get/settings', (req, res) => {
  const query = 'SELECT `key`, value FROM emulator_settings';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
