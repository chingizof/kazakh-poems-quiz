import { MongoClient as mongo } from "mongodb"
import 'dotenv/config';

const url = process.env['MONGODB_URI']
let db;

const connect = () => {
    mongo.connect(
        url,
        {
            usenewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err, client) => {
            if (err) {
                console.error(err)
                return
            }
            db = client.db("nfactorial")
            console.log('connected')
        }
    )
}

const getDB = () => db

export { connect, getDB }