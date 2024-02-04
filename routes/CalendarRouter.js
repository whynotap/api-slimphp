const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/get/calendars', (req, res) => {
  const query = 'SELECT title, event_day, staff_id FROM sple_calendar';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
