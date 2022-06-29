
module.exports = {biotop};

function biotop (test){
    
      return [{
        Laboratory: 'biotop',
  
        Sexe: test[test.indexOf("sexe:") + 1],
        Nom: test[test.indexOf("njf:") - 4],
        Prenom: test[test.indexOf("njf:") - 3],
  
        Hematies: test[test.indexOf("hematologie") + 8],
        Hémoglobine: test[test.indexOf("hémoglobine") + 1],
        Hématocrite: test[test.indexOf("hématocrite") + 1],
        VolumeGlobulaireMoyen: test[test.indexOf("globulaire") + 2],
        TCMH: test[test.indexOf("t.c.m.h") + 1],
        CCMH: test[test.indexOf("c.c.m.h") + 1],
        Leucocytes: test[test.indexOf("leucocytes") + 1],
        Polynucléaires_neutrophiles: test[test.indexOf("neutrophiles") + 1],
        Polynucléaires_éosinophiles: test[test.indexOf("éosinophiles") + 1],
        Polynucléaires_basophiles: test[test.indexOf("basophiles") + 1],
        Lymphocytes: test[test.indexOf("lymphocytes") + 1],
        Monocytes: test[test.indexOf("monocytes") + 1],
        Plaquettes: test[test.indexOf("plaquettes(1)") + 1],
  
        Hematiesunit: test[test.indexOf("hematologie") + 9],
        Hémoglobineunit: test[test.indexOf("hémoglobine") + 2],
        Hématocriteunit: test[test.indexOf("hématocrite") + 2],
        VolumeGlobulaireMoyenunit: test[test.indexOf("globulaire") + 3],
        TCMHunit: test[test.indexOf("t.c.m.h") + 2],
        CCMHunit: test[test.indexOf("c.c.m.h") + 2],
        Leucocytesunit: test[test.indexOf("leucocytes") + 2],
        Polynucléaires_neutrophilesunit: test[test.indexOf("neutrophiles") + 2],
        Polynucléaires_éosinophilesunit: test[test.indexOf("éosinophiles") + 2],
        Polynucléaires_basophilesunit: test[test.indexOf("basophiles") + 2],
        Lymphocytesunit: test[test.indexOf("lymphocytes") + 2],
        Monocytesunit: test[test.indexOf("monocytes") + 2],
        Plaquettesunit: test[test.indexOf("plaquettes(1)") + 2]
      }];
}
