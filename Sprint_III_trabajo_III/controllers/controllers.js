const {read_products,read_one_product,add_user,user_filter} = require('../services/crud');
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
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
    if(product.length > 0){
        return res.status(200).json(product)

    }else{
        return res.status(404).json('El producto no existe')
    }
    
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

//Buscador de usuario por email
const user_session_validator = (req,res)=>{
    const datos = req.body;
    const email = datos.email;
    const clave = datos.pwd

    const [boleano,key] = user_filter(email);
    //console.log(boleano)


//Verificacion contrasenia utilizando bcrypt

//console.log(key)
//console.log(clave)
let boleano2 = bcrypt.compareSync( clave ,key)

const boleano3 = boleano && boleano2
/////////////////////////////////////////////



    if(boleano3){
        //res.json('ecnontrado')
        res.cookie('email_user',email,{
            maxage: 15*60*1000
        })
        res.cookie('clave',key,{
            maxage: 1*60*1000
        })
        //res.status(200).json({msg:'Usuario logueado'})
        res.render('../views/desktop_principal.ejs')
        

    }else{
        res.json('no encontrado')
    }
}

const middleware_cookie = (req,res)=>{
    const datos = req.body;
    const email = datos.email;
    const clave = datos.pwd
    res.cookie('email_user',email,{
        maxage: 15*60*1000
    })
}
module.exports = {getall,getone,create_user,user_session_validator,middleware_cookie}