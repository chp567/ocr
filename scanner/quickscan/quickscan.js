//quickscan script (deuxième solution pour scan)
var exec = require('child_process').execFile;
var path = 'quickscan/quickscan.exe';
var fun = function() {
   exec(path, function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });  
}
fun();