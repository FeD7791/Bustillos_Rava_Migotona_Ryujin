const express = require('express');
const app = express();
const PORT = 3000;

//VIEWS
app.set('view engine','ejs'); //Se fija ejs como el motor para las vistas
app.set('views' , __dirname + '/views'); //Se fija una ruta dinamica (con __dirname)

//STATIC FILES
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))



//Listen port
app.listen(PORT , ()=> console.log('listening on port',PORT));