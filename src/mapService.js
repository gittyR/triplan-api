var express = require('express');

var { Connection } = require('./connection');

var router = express.Router();

// Server path
// const url = process.env.MONGO_URI;

// MongoClient.connect(url, (err,db)=>{
//    var dbo = db.db(process.env.DB_NAME);
//    dbo.collection(process.env.DB_COLLECTION).find({}).toArray(function(err, result) {
//      if (err) throw err;
//      res.send({ data: result })
//      db.close();
//    });
// })

Connection.open();

router.get('/', async (req, res) => {
  try {
    await Connection.db.collection(process.env.DB_COLLECTION).find({})
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