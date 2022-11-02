const express = require('express');
const router_products = express.Router();
//Se importan las constantes de controller
const {getall,getone} = require('../controllers/controllers');

//Rutas
router_products.get('/', getall);
router_products.get('/:id',getone);

module.exports = router_products


