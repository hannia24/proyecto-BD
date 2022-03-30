const express = require('express');
const path = require('path');

//inicializaciones
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join( __dirname, 'views'));

//middlewares
app.use(express.urlencoded({extended: false}));

//global 

//routes
app.get('/', (req, res) => {
    res.send('hell');
});
//static files
app.use(express.static(path.join( __dirname, 'public')));

module.exports = app;

