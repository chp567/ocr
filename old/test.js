var OCRAD = require('ocrad.js');
var Canvas = require('canvas');
var Image = Canvas.Image;
var fs = require('fs');
//var myjson = require('test.json');


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
  const text = (OCRAD(canvas).toLowerCase()).replace(/[\s]{2,}/g," ");                     //mettre en minuscule le texte
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





    

  if(test.indexOf("diagnoviebailleul") !== -1) {
    
    console.log(JSON.stringify({Identity: [{
      Sexe: test[test.indexOf("le")+17], 
      Nom: test[test.indexOf("le")+18], 
      Prenom: test[test.indexOf("le")+19]}]}, null, '\t'));

    console.log(JSON.stringify({Hematology: [{
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
      Plaquettes: test[test.indexOf("plaquettes(1)")+1]}]}, null, '\t'));

    console.log(JSON.stringify({Hematology_unit: [{
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
      Plaquettes: test[test.indexOf("plaquettes(1)")+2]}]}, null, '\t'));
  
  }
  else {
    
    console.log("unknown laboratory");

  }
 



    //find word
    //var re = /\w+\s/g;
    
    //let textet = test.trim();
    //let test = teste.trim()

/*

console.log(test[test.indexOf("hematologie")+8], test[test.indexOf("hematologie")+9])
console.log(test[test.indexOf("hémoglobine")+1], test[test.indexOf("hémoglobine")+2])
console.log(test[test.indexOf("hématocrite")+1], test[test.indexOf("hématocrite")+2])
console.log(test[test.indexOf("globulaire")+2], test[test.indexOf("globulaire")+3])
console.log(test[test.indexOf("t.c.m.h")+1], test[test.indexOf("t.c.m.h")+2])
console.log(test[test.indexOf("c.c.m.h")+1], test[test.indexOf("c.c.m.h")+2])
console.log(test[test.indexOf("leucocytes")+1], test[test.indexOf("leucocytes")+2])
console.log(test[test.indexOf("neutrophiles")+1], test[test.indexOf("neutrophiles")+2])
console.log(test[test.indexOf("éosinophiles")+1], test[test.indexOf("éosinophiles")+2])
console.log(test[test.indexOf("basophiles")+1], test[test.indexOf("basophiles")+2])
console.log(test[test.indexOf("lymphocytes")+1], test[test.indexOf("lymphocytes")+2])
console.log(test[test.indexOf("monocytes")+1], test[test.indexOf("monocytes")+2])
console.log(test[test.indexOf("plaquettes(1)")+1], test[test.indexOf("plaquettes(1)")+2])
console.log(test[test.indexOf("glycemie")+3], test[test.indexOf("glycemie")+4])
console.log(test[test.indexOf("cholesterol")+2], test[test.indexOf("cholesterol")+3])
console.log(test[test.indexOf("éosinophiles")+1], test[test.indexOf("éosinophiles")+2])
console.log(test[test.indexOf("éosinophiles")+1], test[test.indexOf("éosinophiles")+2])
console.log(test[test.indexOf("éosinophiles")+1], test[test.indexOf("éosinophiles")+2])
*/


/*
    console.log(test[test.indexOf('hematies')+1], test[test.indexOf('hematies')+2])

    console.log(test[test.indexOf('hémoglobine ')+1], test[test.indexOf('hémoglobine ')+2])

    console.log(test[test.indexOf('hématocrite')+1], test[test.indexOf('hématocrite')+2])
    console.log("volume globulaire moyen", test[test.indexOf('globulaire')+2], test[test.indexOf('globulaire')+3])
    console.log(test[test.indexOf('hematies ')+1], test[test.indexOf('hematies ')+2])
    console.log(test[test.indexOf('hematies ')+1], test[test.indexOf('hematies ')+2])
    console.log(test[test.indexOf('hematies ')+1], test[test.indexOf('hematies ')+2])
    console.log(test[test.indexOf('hematies ')+1], test[test.indexOf('hematies ')+2])
    


    console.log(test[test.indexOf('leucocytes ')+1], test[test.indexOf('leucocytes ')+2])

*/

    //pour vérifier si il appartient bien au texte
    /*
    if (test.indexOf('diagnovie') === "-1") {
        console.log("element doesn't exist");
       }
       else {
        console.log("element found");
        //console.log(test.indexOf('antériorités\n'))
       }
*/
      //console.log(test)
      










/*
      for (let i = 1 ; i < test.length ; i++) { 

        console.log(test[i]) 

      }

*/













/*
    

*/


//console.log(test[test.indexOf("hematologie")+8]);











//console.log(myjson);


/*
var fs = require('fs');
var monJson = fs.readFileSync('test.json', 'utf8');
console.log(measure.monJson);
*/


//console.log(test[test.indexOf('hematies')+1], test[test.indexOf('hematies')+5])


});