var fs = require('fs');

var dataJurusan = require('./data.json');
// console.log(dataJurusan.jurusan);
// console.log(dataJurusan.nama);
// console.log(dataJurusan.tahun);

fs.readFile('data.json', 'utf8', function(err, data) {
    var str = JSON.parse(data);
    console.log(str);
    console.log(str.jurusan);
    console.log(str.nama);
    console.log(str.tahun);
});