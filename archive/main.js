const { getWeather } = require('./weather'); 
 
const city = 'Tozeur'; 
getWeather(city) 
  .then(weatherData => { 
    console.log('Informations météorologiques pour', city, ':', weatherData); 
  });





/*const mathOperations=require('./mathOperations');

const resultAdd=mathOperations.add(3,5);
const resultMultiply = mathOperations.multiply(2,4);
const age=mathOperations.age(2000);


console.log('addition :', resultAdd);
console.log('multiplication :', resultMultiply);
console.log('cotre age est :',age);*/

/*const express =require("express");
const app =express();
const userController = require('./controllers/userController');


app.get("/user",(req,res)=>{
    const user = userController.getUser();
    res.json(user);
});

const port =3000;
app.listen(port,()=>{
    console.log("serveur demarre");
});*/