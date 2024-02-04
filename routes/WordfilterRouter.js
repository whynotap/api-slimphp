const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/get/wordfilter', (req, res) => {
  const query = 'SELECT `key`, replacement, hide, report, mute FROM wordfilter';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      if (result.length === 0) {
        res.status(400).json({ message: "Cette table est vide" });
      } else {
        res.send(result);
      }
    }
  });
});

module.exports = router;
