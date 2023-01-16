const express = require('express');
const router_web = express.Router();
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt')
const { check, validationResult} = require('express-validator');
const {create_user, user_session_validator, middleware_cookie,deleteOne} = require('../controllers/controllers') 

const urlencoded = bodyparser.urlencoded({extended:false})
router_web.use(bodyparser.json())//INDISPENSABLE PARA HACER POST EN JSON
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
//Validar formulario de creacion de cuenta
router_web.post('/register',urlencoded,[
    check('nombre','Debe introducir un nombre de usuario con minimo de 2 letras')
       .exists()
       .isLength({min:2}),
    check('apellido', 'Apellido debe contener 2 letras')   
       .exists()
       .isLength({min:2}),
    check('correo','Correo debe ser valido')
       .exists()
       .isEmail(),
    check('fecha_de_nacimiento','fecha de nacimiento debe ser valida')
       .exists()
       .isDate(),
    check('contrasenia','La clave debe tener almenos 5 caracteres')
       .exists()
       .isLength({min:5})
                



], (req,res,next)=>{
    const error = validationResult(req)
    const validaciones = error.array();//arreglo con errores
    const valores = req.body
    if(!error.isEmpty()){
        //return res.status(400).json({errors: error.array()});
        res.render('../views/crear_cuenta.ejs',{validaciones:validaciones,valores:valores})
    }else{
        res.json('verificado!')
        next()

        
    } 
    
}, create_user)

//Bsucar email Usuario
router_web.post('/login',urlencoded,user_session_validator)

//Cookies for logged user
router_web.get('loged_user',middleware_cookie)

//Borrar cuenta
router_web.delete('/usuarios/:id', deleteOne)
//await fetch('http://localhost:3000/register')

// async function buscar(){
//     const response = await fetch('http://localhost:3000/register')
//     const json = await response.json()
// }
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//Ruta para agregar el usuario 
//router_web.post('/register',create_user)

module.exports = router_web