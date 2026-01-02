 
 const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");


dotenv.config()

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbname = 'PassOP';

const app = express();
app.use(cors());

const PORT = 3000;
app.use(bodyParser.json());

 client.connect();

app.get("/", async (req, res) => {
    const db = client.db(dbname);
    const Collection = db.collection('passwords');
    const FindResult = await Collection.find({}).toArray();
  res.json(FindResult);
});
app.post("/", async (req, res) => {
    const passwordData = req.body;
    const db = client.db(dbname);
    const Collection = db.collection('passwords');
    const FindResult = await Collection.insertOne(passwordData);
  res.json({ success: true ,result: FindResult});
});
app.delete("/", async (req, res) => {
    const passwordData = req.body;
    const db = client.db(dbname);
    const Collection = db.collection('passwords');
    const FindResult = await Collection.deleteOne(passwordData);
  res.json({ success: true ,result: FindResult});
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});
