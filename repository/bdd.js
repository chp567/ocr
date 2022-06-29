const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var fs = require('fs');

module.exports = {base};


const url = 'mongodb://localhost:27017'; // Connection URL

const dbName = 'bio'; // Database Name
const client = new MongoClient(url, {
  useUnifiedTopology: true
});


function base(labo, jsontest) {

client.connect(function (err) {
  //assert.equal(null, err);
  const db = client.db(dbName);
  console.log('Connected successfully to database');
  

  insertDocuments(db, labo, function () {
    findDocuments(db, function () {}); //only for debugging
  });

  //testora(jsost);

  //function testora(jsost) {
    getDocuments(db, function (docs) {
    
      console.log('Closing connection.');
      client.close();
    
      // Write to file
      try {
        fs.writeFileSync(jsontest, JSON.stringify(docs));
        console.log('Done writing to file.');
      } catch (err) {
        console.log('Error writing to file', err)
      }
    });
    //}

}); //--------------------------------------------principal exécution

}





//insère les documents dans la bdd
const insertDocuments = function (db, laboratory, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany(laboratory, function (err, result) {
    assert.equal(err, null);
    //assert.equal(3, result.result.n);
    //assert.equal(3, result.ops.length);
    console.log('Inserted documents into the collection');
    callback(result);
  });
};


//afficher les documents ajouté dans la bdd
const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');

  var query = {};
  var sort = [
    ["_id", -1]
  ];
  var limit = 1;

  var cursor = collection.find(query).sort(sort).limit(limit);

  cursor.forEach(
    function (doc) {
      console.log(doc);
    },
    function (err) {
      client.close();
    }
  );
};


//export bdd en json
const getDocuments = function (db, callback) {
  const query = {}; // this is your query (if you want more details)
  db.collection("documents")
    .find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      callback(result);
    });
};

