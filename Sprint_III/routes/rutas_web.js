const express = require('express');
const router = express.Router();


//ESCRITORIO
router.get('/' , (req,res)=>{
    res.render('desktop_principal.ejs')
    
})

//DETAIL PRODUCT
router.get('/detail_product', (req,res)=>{
    res.render('producto.ejs')
    
})

//CART
router.get('/cart', (req,res)=>{
    res.render('cart.ejs')
    
})

//INICIAR SESION
router.get('/iniciar_sesion', (req,res)=>{
    res.render('iniciar_sesion.ejs')
    
})

//CREAR CUENTA
router.get('/crear_cuenta', (req,res)=>{
    res.render('crear_cuenta.ejs')
    
})