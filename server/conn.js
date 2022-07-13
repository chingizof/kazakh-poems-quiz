import { MongoClient as mongo } from "mongodb"

const url = "mongodb+srv://cheenv:Net987654321$@salem.wrbh3.mongodb.net/?retryWrites=true&w=majority"
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