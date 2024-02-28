var fs = require('fs');

try {
    fs.unlinkSync('./lib/config.js');
    console.log('config.js removed');
}catch(err) {
    console.log(err);
}

fs.unlink('notes.txt', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('notes.txt removed');
    }
});