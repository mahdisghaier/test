const fs=require('fs');

//lecture d'un fichier

fs.readFile('example.txt','utf8',(err,data) => {
    if (err){
        console.error(err);
        return;
    }
    console.log(data);
});