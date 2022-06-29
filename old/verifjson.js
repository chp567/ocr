var OCRAD = require('ocrad.js');
var Canvas = require('canvas');
var Image = Canvas.Image;
var fs = require('fs');


fs.readFile(__dirname + '/scan.png', function(err, src) {    //importer les documents
  if (err) {
    throw err;
  }
  let img = new Image();
  img.src = src;
  let canvas = new Canvas.createCanvas(img.width, img.height);
  let ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, img.width, img.height);
  //console.log(OCRAD(canvas).replace(/\n|\r/g, ""));           //regex pour supprimer les espaces
  const text = OCRAD(canvas).replace(/ /g, "")
  console.log(text)

console.log(JSON.stringify({Hématologie: [{
    Hematies: text.substr(text.search('HEMATIES')+8, 7), 
    Hémoglobine: text.substr(text.search('Hémoglobine')+11, 4), 
    Hématocrite: text.substr(text.search('Hématocrite')+11, 4),
    VolumeGlobulaireMoyen: text.substr(text.search('VolumeGlobulaireMoyen')+21, 2),
    TCMH: text.substr(text.search('T.C.M.H')+8, 4),
    CCMH: text.substr(text.search('C.C.M.H')+8, 4),
    Leucocytes: text.substr(text.search('LEUCOCYTES')+10, 4),
    Polynucléaires_neutrophiles: text.substr(text.search('Polynucléairesneutrophiles')+35, 4),
    Polynucléaires_éosinophiles: text.substr(text.search('Polynucléaireséosinophiles')+34, 3),
    Polynucléaires_basophiles: text.substr(text.search('Polynucléairesbasophiles')+32, 2),
    Lymphocytes: text.substr(text.search('Lymphocytes')+20, 4),
    Monocytes: text.substr(text.search('Monocytes')+18, 3),
    Plaquettes: text.substr(text.search('PLAQUETTES')+13, 6)}]}, null, '\t'))

});