var OCRAD = require('ocrad.js');
var Canvas = require('canvas');
var Image = Canvas.Image;
var fs = require('fs');

fs.readFile("C:/Users/cperr/Desktop/bio_newcard/ocr_project/img/A210315139_pages-to-jpg-0003.jpg", function(err, src) {    //importer les documents
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
  const text = (OCRAD(canvas).toLowerCase()).replace(/[\s]{2,}/g," ");                     //mettre en minuscule le texte
  //console.log(text)

console.log(OCRAD(canvas));

/*
  let test = text.split(" ");

  for (let i = 0; i < test.length; i++) {
    console.log(test[i])
  }
*/
});