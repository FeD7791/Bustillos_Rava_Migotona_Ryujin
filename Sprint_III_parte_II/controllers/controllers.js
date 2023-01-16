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

const getone = (req,res)=>{
    const{id}=req.params;
    id_p=parseInt(id)
    const product = read_one_product(id_p)
    return res.status(200).json(product)
}

module.exports = {getall,getone}