const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/get/feeds', (req, res) => {
  const query = 'SELECT * FROM sple_users_feeds';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.get('/get/feed', (req, res) => {
  const { feed_id } = req.body;

    if (!feed_id) {
        return res.status(400).json({ message: "Les données de la requête sont invalides" });
    }else{

        const checkNewsQuery = 'SELECT * FROM sple_users_feeds WHERE id = ?';
        db.query(checkNewsQuery, [feed_id], (err, result) => {
            if (result.length == 0) {
                return res.status(400).json({ message: "Aucun feed disponible" });
            }else{
                 const query = 'SELECT * FROM sple_users_feeds WHERE id = ' + feed_id;
                  db.query(query, (err, result) => {
                    if (err) {
                      res.send(err);
                    } else {
                      res.send(result);
                    }
                  });
            }

        });

    }
});

router.post('/get/likes', async (req, res) => {
    const { feed_id } = req.body;

    if (!feed_id) {
        return res.status(400).json({ message: "Les données de la requête sont invalides" });
    }else{

        const checkFeedQuery = 'SELECT * FROM sple_users_feeds WHERE id = ?';
        db.query(checkFeedQuery, [feed_id], (err, result) => {
            if (result.length == 0) {
                return res.status(400).json({ message: "Aucun feed disponible" });
            }else{
                 const query = 'SELECT * FROM sple_likes_feeds WHERE feed_id = ' + feed_id;
                  db.query(query, (err, result) => {
                    if (err) {
                      res.send(err);
                    } else {
                      res.send(result);
                    }
                  });
            }

        });

    }
});

module.exports = router;