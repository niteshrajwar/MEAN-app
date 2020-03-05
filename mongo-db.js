const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
mongoClient.connect(url,
     { useNewUrlParser: true, useUnifiedTopology: true },
      (err,db) => {
 if(err) throw err;
 console.log("DB created");
 db.close();
});

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nitesh:<password>@cluster0-d5zix.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});