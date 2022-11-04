const {read_products,read_one_product} = require('../services/crud');

//Obtenemos todos los productos
const getall = (req,res)=>{
    const all_products = read_products();
    if(all_products.length <= 0){
        return res.status(404).json({
            status: 'hubo un error',
            message: 'no se encontraron productos'
        })
    }else{
        return res.status(200).json(all_products)
    }
}
//Obtenemos un solo producto
const getone = (req,res)=>{
    const{id}=req.params;
    id_p=parseInt(id)
    const product = read_one_product(id_p)
    return res.status(200).json(product)
}

//Creamos un nuevo usuario en la base de datos
const create_user = (req,res)=>{
    const {nombre,apellido,email,birth,clave} = req.body
}

module.exports = {getall,getone,create_user}