var fs = require('fs');

var data = { "jurusan": "Teknik Informatika", "nama": "Dwi", "tahun": 2024 };
fs.writeFile('data2.json', JSON.stringify(data), function(err) {
    console.log('berhasil menulis data'), err;
});