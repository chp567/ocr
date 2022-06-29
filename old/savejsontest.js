var OCRAD = require('ocrad.js');
var Canvas = require('canvas');
var Image = Canvas.Image;
var fs = require('fs');
var bdd = require("./test.json");


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
  const text = (OCRAD(canvas).toLowerCase()).replace(/[\s]{2,}/g," ");                     //mettre en minuscule le texte et supprimer les espaces en double
  //console.log(text)

  let test = text.split(" ");


/*
// Vérifie si la valeur existe dans le tableau
if(test.indexOf("diagnoviebailleul") !== -1){
  console.log("La valeur existe!")
} else{
  console.log("La valeur n'existe pas!")
}
*/
/*
let identity =  JSON.stringify({Identity: [{
    Sexe: test[test.indexOf("le")+17], 
    Nom: test[test.indexOf("le")+18], 
    Prenom: test[test.indexOf("le")+19]}]}, null, '\t');

let hematology = JSON.stringify({Hematology: [{
    Hematies: test[test.indexOf("hematologie")+8], 
    Hémoglobine: test[test.indexOf("hémoglobine")+1], 
    Hématocrite: test[test.indexOf("hématocrite")+1],
    VolumeGlobulaireMoyen: test[test.indexOf("globulaire")+2],
    TCMH: test[test.indexOf("t.c.m.h")+1],
    CCMH: test[test.indexOf("c.c.m.h")+1],
    Leucocytes: test[test.indexOf("leucocytes")+1],
    Polynucléaires_neutrophiles: test[test.indexOf("neutrophiles")+1],
    Polynucléaires_éosinophiles: test[test.indexOf("éosinophiles")+1],
    Polynucléaires_basophiles: test[test.indexOf("basophiles")+1],
    Lymphocytes: test[test.indexOf("lymphocytes")+1],
    Monocytes: test[test.indexOf("monocytes")+1],
    Plaquettes: test[test.indexOf("plaquettes(1)")+1]}]}, null, '\t');


let hematology_unit = JSON.stringify({Hematology_unit: [{
    Hematies: test[test.indexOf("hematologie")+9], 
    Hémoglobine: test[test.indexOf("hémoglobine")+2], 
    Hématocrite: test[test.indexOf("hématocrite")+2],
    VolumeGlobulaireMoyen: test[test.indexOf("globulaire")+3],
    TCMH: test[test.indexOf("t.c.m.h")+2],
    CCMH: test[test.indexOf("c.c.m.h")+2],
    Leucocytes: test[test.indexOf("leucocytes")+2],
    Polynucléaires_neutrophiles: test[test.indexOf("neutrophiles")+2],
    Polynucléaires_éosinophiles: test[test.indexOf("éosinophiles")+2],
    Polynucléaires_basophiles: test[test.indexOf("basophiles")+2],
    Lymphocytes: test[test.indexOf("lymphocytes")+2],
    Monocytes: test[test.indexOf("monocytes")+2],
    Plaquettes: test[test.indexOf("plaquettes(1)")+2]}]}, null, '\t');
*/

let measure =  JSON.stringify({measure: [{ identity: [{
    Sexe: test[test.indexOf("le")+17], 
    Nom: test[test.indexOf("le")+18], 
    Prenom: test[test.indexOf("le")+19]
}]},{  hematology: [{
    Hematies: test[test.indexOf("hematologie")+8], 
    Hémoglobine: test[test.indexOf("hémoglobine")+1], 
    Hématocrite: test[test.indexOf("hématocrite")+1],
    VolumeGlobulaireMoyen: test[test.indexOf("globulaire")+2],
    TCMH: test[test.indexOf("t.c.m.h")+1],
    CCMH: test[test.indexOf("c.c.m.h")+1],
    Leucocytes: test[test.indexOf("leucocytes")+1],
    Polynucléaires_neutrophiles: test[test.indexOf("neutrophiles")+1],
    Polynucléaires_éosinophiles: test[test.indexOf("éosinophiles")+1],
    Polynucléaires_basophiles: test[test.indexOf("basophiles")+1],
    Lymphocytes: test[test.indexOf("lymphocytes")+1],
    Monocytes: test[test.indexOf("monocytes")+1],
    Plaquettes: test[test.indexOf("plaquettes(1)")+1]
}]},{ hematology_unit: [{
    Hematies: test[test.indexOf("hematologie")+9], 
    Hémoglobine: test[test.indexOf("hémoglobine")+2], 
    Hématocrite: test[test.indexOf("hématocrite")+2],
    VolumeGlobulaireMoyen: test[test.indexOf("globulaire")+3],
    TCMH: test[test.indexOf("t.c.m.h")+2],
    CCMH: test[test.indexOf("c.c.m.h")+2],
    Leucocytes: test[test.indexOf("leucocytes")+2],
    Polynucléaires_neutrophiles: test[test.indexOf("neutrophiles")+2],
    Polynucléaires_éosinophiles: test[test.indexOf("éosinophiles")+2],
    Polynucléaires_basophiles: test[test.indexOf("basophiles")+2],
    Lymphocytes: test[test.indexOf("lymphocytes")+2],
    Monocytes: test[test.indexOf("monocytes")+2],
    Plaquettes: test[test.indexOf("plaquettes(1)")+2]
}]}
]}, null, '\t');



/*
      for (let i = 1 ; i < test.length ; i++) { 

        console.log(test[i]) 

      }

*/




});