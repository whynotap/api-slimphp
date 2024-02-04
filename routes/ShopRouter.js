const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/get/badges', (req, res) => {
  const query = 'SELECT * FROM sple_shop_badges';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.get('/get/bannieres', (req, res) => {
  const query = 'SELECT * FROM sple_shop_bannieres';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.get('/get/coins', (req, res) => {
  const query = 'SELECT * FROM sple_shop_coins';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;