const express =require("express");
const app =express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true}));



// API REST simple
const books = [
    { id: 1, title: 'Node.js in Action' },
    { id: 2, title: 'Express.js Guide' },
    ];

    // Obtenir tous les livres
app.get('/api/books', (req, res) => {
    res.json(books);
    });

    // Obtenir un livre par ID
app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
    });



    app.listen(3000,()=>{
        console.log("serveur demarre");
    });