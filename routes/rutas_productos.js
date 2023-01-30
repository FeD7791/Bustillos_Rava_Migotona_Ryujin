const express = require('express');
const router_web = express.Router();
const bodyparser = require('body-parser');
const cors = require('cors');
const { add_product, fetch_all, fetch_one, delete_product, update_product } = require('../controllers/controllers_products');

const urlencoded = bodyparser.urlencoded({extended:false})
router_web.use(bodyparser.json())//INDISPENSABLE PARA HACER POST EN JSON
router_web.use(cors())

//STATIC FILES
router_web.use(express.static('public'))
router_web.use('/products_pics', express.static(__dirname + 'public/products_pics'))
//http://localhost:3000/productos/products_pics/Colonos_de_Catan/Screenshot_1.png

//Rutas Productos

//Crear Producto
router_web.post('/create', add_product)

//Obtener todos los productos
router_web.get('/', fetch_all)

//Obtener un solo producto
router_web.get('/:id', fetch_one)

//Borrar un proucto
router_web.delete('/:id', delete_product)

//Actualizar producto
router_web.post('/update', update_product)

module.exports = router_web