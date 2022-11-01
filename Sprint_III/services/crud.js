const fs = require('fs');

// Lectura del archivo .json que contiene los productos
const productos = fs.readFileSync(__dirname + '/../database/products.json');

//Lectura de productos desde el archivo JSON
function read_products(){
    let var_java = JSON.parse(productos)
    return var_java
}

//Lectura de un solo producto utilizando su ID
function read_one_product(ident){
    const lista = read_products()

    function finder(arg){
        return arg.id === ident;
    }
    const my_product = lista.filter(finder);
    return my_product
}