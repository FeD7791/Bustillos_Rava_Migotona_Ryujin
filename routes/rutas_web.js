const express = require('express');
const router_web = express.Router();
const bodyparser = require('body-parser');
const {create_user, delete_user, get_user, getall, validate_token} = require('../controllers/controllers')
const cors = require('cors')

const urlencoded = bodyparser.urlencoded({extended:false})
router_web.use(bodyparser.json())//INDISPENSABLE PARA HACER POST EN JSON
router_web.use(cors())


//Crear usuario
router_web.post('/register',urlencoded, create_user)

//Borrar usuario
router_web.delete('/usuarios/:id', delete_user)

//Obtener todos los usuarios
router_web.get('/usuarios/',getall)

//Obtener usuario
router_web.get('/usuarios/:email/:key',get_user)

//Validacion token
router_web.post('/validate',validate_token)

module.exports = router_web