
//serveyr http 
const http =require('http');
//creation e serveur http
const server = http.createServer((req,res)=>{
    //gestion de la requete http
    res.writeHead(200,{'content-type' : 'text/plain'});
    res.end('Hello, world!\n');

});

const port =3000;
server.listen(port,()=>{
    console.log("serveur demarre");
});



///bch nstaamlou https nsobou open ssl sa3 bch yaatona certif wbaaad yaatik fichier de test (pem)  nestha9ou package fs