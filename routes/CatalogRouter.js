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

router.get('/get/catalogitems', (req, res) => {
    const query = 'SELECT id, item_ids, page_id, catalog_name, cost_credits, cost_credits, cost_points, points_type, amount, limited_stack, limited_sells, order_number, offer_id, song_id, extradata, have_offer, club_only, badge, rate FROM catalog_items';
    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

  router.get('/get/items', (req, res) => {
    const query = 'SELECT id, sprite_id, public_name, item_name, type, width, length, stack_height, allow_stack, allow_sit, allow_lay, allow_walk, allow_gift, allow_trade, allow_recycle, allow_marketplace_sell, allow_inventory_stack, interaction_type, interaction_modes_count, vending_ids, multiheight, customparams, effect_id_male, effect_id_female, clothing_on_walk  FROM items_base';
    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
module.exports = router;
