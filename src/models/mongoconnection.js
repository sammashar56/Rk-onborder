
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://samRoko:samRok@cluster0.4tjdf.mongodb.net/onborder?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("onborder").collection("devices");
  // perform actions on the collection object
  
  client.close();
});
