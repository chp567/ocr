var OCRAD = require('ocrad.js');
var Canvas = require('canvas');
var Image = Canvas.Image;
var fs = require('fs');

//for (let i=80;i<150;i++){
fs.readFile(__dirname + '/scan.jpg', function(err, src) {    //importer les documents
  if (err) {
    throw err;
  }
  let img = new Image();
  img.src = src;
  let canvas = new Canvas.createCanvas(img.width, img.height);
  let ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, img.width, img.height);
  //console.log(OCRAD(canvas).replace(/\n|\r/g, ""));           //regex pour supprimer les espaces
  //const text = OCRAD(canvas).replace(/ /g, "")
  var text = OCRAD(canvas).toLowerCase()                      //mettre en minuscule le texte
  //console.log(text)

    //find word
    var test = text.split(" ")

    
    //pour vérifier si il appartient bien au texte
    //console.log(test[i])
    //console.log(test[i])
/*
    var x = 'hématocrite  '

    if (test.indexOf(x) === -1) {
        console.log("element doesn't exist");
       }
       else {
        console.log("element found");
        console.log(test.indexOf(x))
       }
*/


});
//}