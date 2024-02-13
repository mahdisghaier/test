const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const port = 3000;

app.set('view engine', 'ejs');
app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: true }));



//const app = express("",()=>{});   route

app.get("/ejs",(req,res)=>{
    res.render('index',{message:'hello from ejs!'});
});


app.get("/form",(req,res)=>{
    res.render('form');
});


// Traitement du formulaire
app.post('/submit', (req, res) => {
    const username = req.body.username;
    const avatar = req.files.avatar; 
    // Logique de traitement
    res.send(`Username: ${username}, Avatar: ${avatar.name}`);
    });



app.listen(3000,()=>{
    console.log("serveur demarre");
});








