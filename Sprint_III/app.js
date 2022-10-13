const express = require('express');
const app = express();
const PORT = 3000;

//VIEWS
app.set('view engine','ejs'); //Se fija ejs como el motor para las vistas
app.set('views' , __dirname + '/views'); //Se fija una ruta dinamica (con __dirname)

//STATIC FILES
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//ESCRITORIO
app.get('/' , (req,res)=>{
    //res.render('desktop_principal.ejs')
    res.send('estoy en Escritorio')
})

//DETAIL PRODUCT
app.get('/detail_product', (req,res)=>{
    //res.render('producto.ejs')
    res.send('estoy en Detail Product')
})

//CART
app.get('/cart', (req,res)=>{
    //res.render('cart.ejs')
    res.send('estoy en cart')
})

//INICIAR SESION
app.get('/iniciar_sesion', (req,res)=>{
    //res.render('iniciar_sesion.ejs')
    res.send('estoy en Iniciar Sesion')
})

//CREAR CUENTA
app.get('/crear_cuenta', (req,res)=>{
    //res.render('crear_cuenta.ejs')
    res.send('estoy en Crear Cuenta')
})

//Listen port
app.listen(PORT , ()=> console.log('listening on port',PORT));