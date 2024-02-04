const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/get/catalog', (req, res) => {
  const query = 'SELECT id, parent_id, caption, page_layout, icon_color, min_rank, order_num, visible, enabled, club_only, vip_only, page_headline, page_teaser, page_special, page_text1, page_text2, page_text_details, page_text_teaser, room_id, includes FROM catalog_pages';
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
