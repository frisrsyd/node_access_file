var fs = require('fs');

fs.renameSync('./lib/project-config.js', './lib/config.js');

console.log('File project-config.js renamed to config.js');

fs.rename('./lib/notes.txt', './notes.txt', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('Notes.txt moved successfully');
    }
});