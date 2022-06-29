var OCRAD = require('ocrad.js');
var Canvas = require('canvas');
var Image = Canvas.Image;
var fs = require('fs');


const text = OCRAD(canvas).toLowerCase();                      //mettre en minuscule le text


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
  //const text = OCRAD(canvas).replace(/ /g, "")
  //const text = OCRAD(canvas).toLowerCase();                      //mettre en minuscule le text

});