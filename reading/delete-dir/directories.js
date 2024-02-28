var fs = require('fs');

fs.renameSync('./assets/logs', './logs');
console.log('Directory logs moved');

fs.rmdir('./assets', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('Assets directory removed');
    }
});

fs.readdirSync('./logs').forEach(function(fileName) {
    fs.unlinkSync('./logs/' + fileName);
});

fs.rmdir('./logs', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('Logs directory removed');
    }
});