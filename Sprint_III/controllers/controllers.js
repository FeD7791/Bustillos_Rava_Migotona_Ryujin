const {read_products,read_one_product,add_user,read_users,writeJSON_user} = require('../services/crud');
const bcrypt = require('bcrypt')
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
    const {nombre,apellido,correo,fecha_de_nacimiento,contrasenia} = req.body
    //Encriptado de clave///////////////////////////////////////////////////
    const clave_hash = bcrypt.hashSync(contrasenia,8)
    console.log(clave_hash)
    ////////////////////////////////////////////////////////////////////////
    add_user(nombre,apellido,correo,fecha_de_nacimiento,clave_hash)
    //Creacion exitosa
    return res.status(201).json({
        status: 'exito',
        message: 'Usuario Agregado'
    })
}

module.exports = {getall,getone,create_user}