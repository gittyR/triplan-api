require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

let db = null;
const url = process.env.MONGO_URI;
    module.exports.open = async () => {
        if (db) return db
        const client = await MongoClient.connect(url);
            db = client.db(process.env.DB_NAME);
            return db
    }


