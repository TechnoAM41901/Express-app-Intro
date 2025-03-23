//import the express
const express = require('express');
const path = require('path')
const port = 5000;

//initalize the express
const app = express();

//- // Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//routing in express
app.get('/', (req, res)=>{
    res.render('index');
})

//about page
app.get('/about', (req, res)=>{
    res.send(` 
                <h1>This is the about page!!!</h1>
                <ul>Modules:-
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>Mongo DB</li>
                </ul;>
        `)
})

//contact page
app.get('/contact', (req, res)=>{
    res.send("This is the contact page!!!")
})

//launch the server
app.listen(port, ()=>{
    console.log("Express app is running on http://localhost:"+port)
})

