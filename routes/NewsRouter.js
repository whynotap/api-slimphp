const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/get/news', (req, res) => {
  const query = 'SELECT * FROM sple_news';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post('/get/comments', async (req, res) => {
    const { news_id } = req.body;

    if (!news_id) {
        return res.status(400).json({ message: "Les données de la requête sont invalides" });
    }else{

        const checkNewsQuery = 'SELECT * FROM sple_news WHERE id = ?';
        db.query(checkNewsQuery, [news_id], (err, result) => {
            console.log(result);
            if (result.length == 0) {
                return res.status(400).json({ message: "Aucun article disponible" });
            }else{
                 const query = 'SELECT * FROM sple_comments WHERE news_id = ' + news_id;
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

router.get('/get/new', (req, res) => {
  const { news_id } = req.body;

    if (!news_id) {
        return res.status(400).json({ message: "Les données de la requête sont invalides" });
    }else{

        const checkNewsQuery = 'SELECT * FROM sple_news WHERE id = ?';
        db.query(checkNewsQuery, [news_id], (err, result) => {
            console.log(result);
            if (result.length == 0) {
                return res.status(400).json({ message: "Aucun article disponible" });
            }else{
                 const query = 'SELECT * FROM sple_news WHERE id = ' + news_id;
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