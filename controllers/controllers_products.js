const productos = require('../models').productos

//Create product
//[object,boolean] = productos.findOrCreate(where: {element} ,defaults: {input})
//object = objeto creado/ objeto encontrado
//boolean = true (objeto creado) / false (objeto ya existente encontrado)
//{element} = objeto para buscar coincidencias
//{input} = objeto introducido en los campos al crear nuevo objeto

const add_product = async(req,res) => {
    const {nombre,descripcion,precio} = req.body
    return await productos.findOrCreate({
        where:{nombre:nombre} , 
        defaults:{nombre,descripcion,precio}
    }).then(productos => res.status(200).send(productos)).catch(error => res.send(500))
    
   


    

}

//Fetch all
const fetch_all = async (req,res) => {
    return await productos.findAll()
    .then(productos => res.status(200).send(productos))
    .catch(error => res.status(404).send(error))
}    

//Fetch one
const fetch_one = async (req,res) => {
    const { nombre } = req.params
    const parsed_nombre = nombre.replace(/_/g,' ')
    return await productos.findOne({where: {nombre:parsed_nombre}})
    .then(productos => res.status(200).send(productos))
    .catch(error => res.status(404).send(error))
   
}

//Delete product
const delete_product = async (req,res) => {
    const {nombre} = req.params
    const parsed_nombre = nombre.replace(/_/g,' ')
    
    return await productos.destroy({where: {nombre:parsed_nombre}})
    .then(productos => res.status(200).send('borrado: '+parsed_nombre))
    .catch(error => res.status(500).send(error))
}

//Update product
//nombre: Nombre del producto a actualizar (fila)
//field: nombre de la columna a actualizar
//new_field_input: nuevo input en field
//Actualiza: descripcion/precio/iagen1
const update_product = async (req,res) => {
    const {nombre, field, new_field_input } = req.body
    console.log(nombre)
    console.log(field)
    console.log(new_field_input)
    const parsed_nombre = nombre.replace(/_/g,' ')
    console.log(parsed_nombre)
    switch(field){
        case 'descripcion':
            await productos.update(
                {
                    descripcion:new_field_input
                },
                {
                    where: {nombre:parsed_nombre}
                }
            ).then(productos => res.status(200).send(productos)).catch(error => res.status(500).send(error))
        break;
        case 'precio':
            await productos.update(
                { 
                    precio:new_field_input
                },
                {
                    where: {nombre:parsed_nombre}
                }
            ).then(productos => res.status(200).send(productos)).catch(error => res.status(500).send(error))
        break;
        case 'imagen1':
            await productos.update(
                { 
                    imagen1:new_field_input
                },
                {
                    where: {nombre:parsed_nombre}
                }
            ).then(productos => res.status(200).send(productos)).catch(error => res.status(500).send(error))
        break;
        
    }
    
}

module.exports = {add_product,fetch_all,fetch_one,delete_product,update_product}