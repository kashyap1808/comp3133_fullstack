let fs = require("fs");
let logs = process.cwd() + "/Logs";

if (fs.existsSync(logs)) {
    process.chdir('Logs');
    for (var i = 1; i <= 10; i++) {
        console.log(('delete files...log' + [i] + ".txt"));
        fs.unlinkSync('log' + [i] + ".txt");
    }
    process.chdir('../');
    fs.rmdirSync('Logs');
} else {
    fs.mkdirSync("Logs");
    process.chdir('Logs');
    for (var i = 1; i <= 10; i++) {
        console.log(('log' + [i] + ".txt"));
        fs.writeFileSync('log' + [i] + ".txt");
    }
}