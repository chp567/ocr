module.exports = {scan};

function scan(){
    var spawn = require("child_process").spawn,
            child;
        child = spawn("powershell.exe", ["C:/Users/cperr/Desktop/bio_newcard/ocr_project/scanner/script.ps1"]);
        child.stdout.on("data", function (data) {
            console.log("Powershell Data: " + data);
        });
        child.stderr.on("data", function (data) {
            console.log("Powershell Errors: " + data);
        });
        child.on("exit", function () {
            console.log("Scanner Successfull finished");
        });
        child.stdin.end(); //end input
}
