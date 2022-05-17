require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

class Connection {

    static async open() {
        if (this.db) return this.db
        await MongoClient.connect(this.url, (err,db)=>{
            this.db = db.db(process.env.DB_NAME);
            return this.db
        })
    }

}

Connection.db = null;
Connection.url = process.env.MONGO_URI;

module.exports = { Connection }