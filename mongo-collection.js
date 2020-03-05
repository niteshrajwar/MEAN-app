const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
mongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,db) => {
 if(err) throw err;
 const dbo = db.db("mydb");
 dbo.createCollection("movies", (err, res) => {
   if(err) throw err;
   console.log("collection created");
   db.close();
 })
 console.log("DB created");
 db.close();
});