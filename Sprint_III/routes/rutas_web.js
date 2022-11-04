const express = require('express');
const router_web = express.Router();
const bodyparser = require('body-parser');
const { body, validationResult, check } = require('express-validator');


//ESCRITORIO
router_web.get('/' , (req,res)=>{
    res.render('desktop_principal.ejs')
    
})

//DETAIL PRODUCT
router_web.get('/detail_product', (req,res)=>{
    res.render('producto.ejs')
    
})

//CART
router_web.get('/cart', (req,res)=>{
    res.render('cart.ejs')
    
})

//INICIAR SESION
router_web.get('/iniciar_sesion', (req,res)=>{
    res.render('iniciar_sesion.ejs')
    
})

//CREAR CUENTA
router_web.get('/crear_cuenta', (req,res)=>{
    res.render('crear_cuenta.ejs')
    
})

module.exports = router_web