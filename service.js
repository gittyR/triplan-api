var express = require('express');
require('dotenv').config();
var router = express.Router();

router.get('/', function(req, res, next) {
// Calling the required MongoDB module.
const MongoClient = require("mongodb").MongoClient;

// Server path
const url = process.env.MONGO_URI;

MongoClient.connect(url, (err,db)=>{
   var dbo = db.db(process.env.DB_NAME);
   dbo.collection(process.env.DB_COLLECTION).find({}).toArray(function(err, result) {
     if (err) throw err;
     res.send({ data: result })
     db.close();
   });
})
});

module.exports = router;