const fs = require('fs');

// Lectura del archivo .json que contiene los productos
const productos = fs.readFileSync(__dirname + '/../database/products.json');
// Lectura del archivo .json correspondiente a la base de datos de usuarios
const user_database = fs.readFileSync(__dirname + '/../database/user_database.json')

//Lectura de productos desde el archivo JSON
function read_products(){
    let var_java = JSON.parse(productos)
    return var_java
}

//Lectura de los datos de usuarios desde el archivo JSON
function read_users(){
    let var_java = JSON.parse(user_database);
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

//Funcion de Escritura en formato JSON en base de datos de usuario
function writeJSON_user(arg){
    let in_json = JSON.stringify(arg,null,2);
    fs.writeFileSync(__dirname + '/../database/user_database.json')
}

//Agregar un usuario a la base de datos de un usuario
function add_user(nombre_user,apellido_user,correo_user,nacimiento_user,clave_user){
    const lista = read_users();
    lista.push({
        nombre:nombre_user,
        apellido:apellido_user,
        correo:correo_user,
        fecha_de_nacimiento:nacimiento_user,
        contrasenia:clave_user
    })
    writeJSON_user(lista)
}

module.exports = {read_products,read_one_product,read_users,writeJSON_user,add_user}