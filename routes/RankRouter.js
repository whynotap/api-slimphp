const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/get/ranks', (req, res) => {
  const query = 'SELECT * FROM permissions';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


router.get('/get/rank', (req, res) => {
  const { rank_id } = req.body;

    if (!rank_id) {
        return res.status(400).json({ message: "Les données de la requête sont invalides" });
    }else{

        const checkNewsQuery = 'SELECT * FROM permissions WHERE id = ?';
        db.query(checkNewsQuery, [rank_id], (err, result) => {
            if (result.length == 0) {
                return res.status(400).json({ message: "Aucun rank trouvé" });
            }else{
                 const query = 'SELECT * FROM permissions WHERE id = ' + rank_id;
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