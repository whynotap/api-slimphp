const express = require('express');
const db = require('../database/db.js');
const router = express.Router();

router.post('/', async (req, res) => {
    const { news_id } = req.body;

    if (!news_id) {
        return res.status(400).json({ message: "Les données de la requête sont invalides" });
    }else{

       const query = 'SELECT * FROM sple_comments WHERE news_id = ' + mysql.escape(news_id);
          db.query(query, (err, result) => {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
          });
    }

    
});

module.exports = router;

