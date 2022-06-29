//-----------------------------------------------------------------------------------------------------librairie
//var OCRAD = require('tesseract.js');
// var Canvas = require('canvas');
// var Image = Canvas.Image;
var fs = require('fs');
//-----------------------------------------------------------------------------------------------------export
var ocrengine = require('./ocr');
var scanner = require('../ocr_project/scanner/scanner');
var model_diagnovie = require('../ocr_project/models/diagnovie');
var model_biotop = require('../ocr_project/models/biotop');
var data = require('./repository/bdd');
//-----------------------------------------------------------------------------------------------------link json file

let json_diagnovie = './results/diagnovie.json';
let json_biotop = './results/biotop.json';

//------------------------------------------------------------------------------------------------------DataBase connexion

let file_to_extract = __dirname + '/img/scan_0.jpg';

//-----------------------------------------------------------------------------------------------------Scanner

/*
if (fs.existsSync("../OCR_PROJECT/img/scan_0.jpg") === true) {
  
}
*/

// console.log('Scanner is running');
// scanner.scan();
// setTimeout(init, 27000);

init();


function init() {

  setTimeout(testora, 27000);

  //-----------------------------------------------------------------------------------------------------OCR engine
  
  ocrengine.ocr(file_to_extract);
  //variable test = le fichier finale après ocr et optimisation
  //console.log(test)
  

    //-----------------------------------------------------------------------------------------------------models informations
    
    
    function testora(){
    
    //informations for diagnovie
    let diagnovie = model_diagnovie.diagnovie(test);


    //informations for BIOTOP Laboratory

    let biotop = model_biotop.biotop(test);

    //-----------------------------------------------------------------------------------------------------final output

    //affichage des informations récupérées
    if (test.indexOf("bailleul") !== -1) { //-----------------------labo Diagnovie

      
      data.base(diagnovie, json_diagnovie);


      //savoir quel est le labo
      console.log('Ces informations ont été effectué par le laboratoire Diagnovie');




    } else if (test.indexOf("biotop") !== -1) { //----------------------------labo Diagnovie


      data.base(biotop, json_biotop);

      //savoir quel est le labo
      console.log('Ces informations ont été effectué par le laboratoire BIOTOP Laboratoire');



    } else {
      console.log("unknown laboratory");
    }


    //-----------------------------------------------------------------------------------------------------final bdd


    for (let i = 0; i < test.length; i++) {
      console.log(test[i]);
    }


  }





}