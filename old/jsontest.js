const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var fs = require('fs');


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'bio';
const client = new MongoClient(url, { useUnifiedTopology:true });


//

//import value from OCR
let test = [
  {
          "Sexe": "m",
          "Nom": "robitaille",
          "Prenom": "jacques"
  },
  {
          "Hematies": "4540000",
          "Hémoglobine": "140",
          "Hématocrite": "42.7",
          "VolumeGlobulaireMoyen": "94",
          "TCMH": "30.8",
          "CCMH": "32.8",
          "Leucocytes": "5300",
          "Polynucléaires_neutrophiles": "54.3",
          "Polynucléaires_éosinophiles": "3.4",
          "Polynucléaires_basophiles": "0.8",
          "Lymphocytes": "30.4",
          "Monocytes": "11.1",
          "Plaquettes": "163000"
  },
  {
          "Hematies": "/mm3",
          "Hémoglobine": "g,d",
          "Hématocrite": "%",
          "VolumeGlobulaireMoyen": "fl",
          "TCMH": "pg",
          "CCMH": "g/dl",
          "Leucocytes": "/mm3",
          "Polynucléaires_neutrophiles": "%",
          "Polynucléaires_éosinophiles": "%",
          "Polynucléaires_basophiles": "%",
          "Lymphocytes": "%",
          "Monocytes": "%"
  }
];

//


// Use connect method to connect to the server ---------principal function
client.connect(function(err) {
  //assert.equal(null, err);
  console.log('Connected successfully to database');
  const db = client.db(dbName);

  insertDocuments(db, function() {
    findDocuments(db, function() {});
  });

  getDocuments(db, function(docs) {
    
    console.log('Closing connection.');
    client.close();
    
    // Write to file
    try {
        fs.writeFileSync('diagnovie.json', JSON.stringify(docs));
        console.log('Done writing to file.');
    }
    catch(err) {
        console.log('Error writing to file', err)
    }
  });



}); //--------------------------------------------------------------------------------principal exécution


//insère les documents dans la bdd
const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany(test, function(err, result) {
    assert.equal(err, null);
    //assert.equal(3, result.result.n);
    //assert.equal(3, result.ops.length);
    console.log('Inserted documents into the collection');
    callback(result);
  });
};

//afficher les documents ajouté dans la bdd
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');

  var query = {};
  var sort = [ ["_id", -1] ];
  var limit = 28;
  
  var cursor = collection.find(query).sort(sort).limit(limit);
  
  cursor.forEach(
      function(doc) {
          console.log(doc);
      }, 
      function(err) {
          client.close();
      }
  );
};


//export bdd en json
const getDocuments = function(db, callback) {
  const query = { };  // this is your query (if you want more details)
  db.collection("documents")
    .find(query)
    .toArray(function(err, result) { 
        if (err) throw err; 
        callback(result); 
  }); 
};














/*
//import JSON data direct in to collection
const data = fs.readFileSync('diagnovie.json');
const docs = JSON.parse(data.toString());

  db.collection('documents')
    .insertMany(docs, function(err, result) {
        if (err) throw err;
        console.log('Inserted docs:', result.insertedCount);
        console.log('Importation réussie');
    });
*/

/*
  // Find all some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
*/