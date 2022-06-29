let Tesseract = require('tesseract.js')
// const Canvas = require('canvas');
// const Image = Canvas.Image;
// const fs = require('fs');

module.exports = {ocr};

function ocr(file) {
  
  Tesseract.recognize(file)
  .progress(function  (p) { console.log('progress', p)  })
  .catch(err => console.error(err))
  .then(function (result) {
console.log(result.text)
    return test = ((result.text).toLowerCase()).split(" ");
})





  /*
  const src = fs.readFileSync(file); //import documents(scan)
  
  const img = new Image();
  img.src = src;
  const canvas = new Canvas.createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, img.width, img.height);

  const text = ((OCRAD(canvas).toLowerCase()).replace(/[\s]{2,}/g, " ")).replace(/\n|\r/g,''); //first management of OCR output
  test = text.split(" "); //create array for manage
  */
  console.log('fs test et function init');

}
  //--------------------------------------
/*
// Vérifie si la valeur existe dans le tableau
if(test.indexOf("diagnoviebailleul") !== -1){
  console.log("La valeur existe!")
} else{
  console.log("La valeur n'existe pas!")
}
*/




  //console.log(test);

  //./img/scan_0.jpg