var fs = require('fs');

if(fs.existsSync('coba')) {
    console.log('direktori sudah ada');
}else{
    fs.mkdir('coba', function(err){
        if(err) {
            console.log(err);
        }    
        else {
            console.log('direktori berhasil dibuat');
        }
    });
}







