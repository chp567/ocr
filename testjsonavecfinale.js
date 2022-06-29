var OCRAD = require('ocrad.js');
var Canvas = require('canvas');
var Image = Canvas.Image;
var fs = require('fs');

var bdd = require('./results/diagnovie.json');
var bdd1 = require('./results/biotop.json');




fs.readFile(__dirname + "/img/scan.jpg", function(err, src) {    //importer les documents
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

//----------------------------------------------------------------------------------------partie modèles pour récupérations informations

//informations pour diagnovie
let diagnovie =  JSON.stringify({measure: [{ identity: [{
    Sexe: test[test.indexOf("sexe")+2], 
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
}]}
]}, null, '\t');



//informations pour BIOTOP Laboratory
let biotop =  JSON.stringify({measure: [{ identity: [{
    Sexe: test[test.indexOf("sexe:")+1], 
    Nom: test[test.indexOf("njf:")-4], 
    Prenom: test[test.indexOf("njf:")-3]
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

//------------------------------------------------------------------------------------------partie affichage et enregistrement

//affichage des informations récupérées
  if(test.indexOf("diagnoviebailleul") !== -1) {        //-----------------------labo Diagnovie

    console.log(diagnovie);
    
    //savoir quel est le labo
    console.log('Ces informations ont été effectué par le laboratoire Diagnovie');



//bdd.push(diagnovie);


console.log(bdd)


    //créer et écrire dans un json (en écrasant)
    fs.writeFile ("./results/diagnovie.json", diagnovie, function(err) { 
    if (err) throw err; 
    console.log('complete json output'); 
        } 
    );













    

  }
  else if (test.indexOf("biotop") !== -1) {        //----------------------------labo Diagnovie

    console.log(biotop);

    //savoir quel est le labo
    console.log('Ces informations ont été effectué par le laboratoire BIOTOP Laboratoire');

        //créer et écrire dans un json (en écrasant)
        fs.writeFile ("./results/biotop.json", biotop, function(err) { 
            if (err) throw err; console.log('complete json output'); 
                } 
            );
        

  }


  else {
    console.log("unknown laboratory");
  }
 











});