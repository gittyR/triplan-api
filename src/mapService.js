var express = require('express');

var connection = require('./connection');

var router = express.Router();


router.get('/', async (req, res) => {
  try {
const client = await connection.open();
    await client.collection(process.env.DB_COLLECTION).find({})
    .toArray(function(err, result) {
      if (err) throw err;
      res.send({ data: result })
    });
  }
  catch (error) {
    res.status(500).json({ error })
  }
});

module.exports = router;