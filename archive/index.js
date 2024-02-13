const express =require("express");
const app =express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true}));

//const app = express("",()=>{});   route

app.get("/",(req,res)=>{
    res.send("bonjour");
});

app.get("/route1",(req,res)=>{
    res.send("sbah ennour");
});

app.get("/route2",(req,res)=>{
    const nom = req.body.nom;
    res.send("bonjour" +  nom);

});

app.get("/somme",(req,res)=>{
    const x = parseFloat(req.body.x);
    const y = parseFloat(req.body.y);
    const s =x+y;
    res.send("la somme est "+  s);

});


app.get("/somme1",(req,res)=>{
    const x = parseFloat(req.body.x);
    const y = parseFloat(req.body.y);
    if( !isNaN(x) && !isNaN(y)){
        const s =x+y;
        res.status(200).send("la somme est "+  s); //res.send(`la somme de ${x} et ${y} vaut ${s}`);
      }else {
        res.status(202).send("veuillez entrer un number");
      }
   
});





app.listen(3000,()=>{
    console.log("serveur demarre");
});