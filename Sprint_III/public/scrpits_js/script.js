const form = document.getElementById("form_crear_ceunta")
const inputs_form = form.elements;

/////////////////////// <p> tags ///////////////////////////////
const log_name = document.getElementById("log_name")
const log_apellido = document.getElementById("log_apellido")
const log_correo = document.getElementById("log_correo")
const log_f_nacimiento = document.getElementById("log_f_nacimiento")
const log_contrasenia = document.getElementById("log_contrasenia")
const log_contrasenia2 = document.getElementById("log_contrasenia2")
 
/////////////////////////////////////////////////////////////////


function logSubmit() {
    ////////////////////////////////////////////////////////////
    const nombre_user = inputs_form["nombre"];
    //const appellido_user = inputs_form["apellido"];
    //const correo_user = inputs_form["correo"];
    //const f_nacimiento_user = inputs_form["fecha_de_nacimiento"];
    const clave_user = inputs_form["contrasenia"];
    /////////////////////////////////////////////////////////////
    let regex_clave = /[0-9]/g
    let bolean_regex = clave_user.value.match(regex_clave)
    console.log(bolean_regex)
    console.log(clave_user.value.length)
    

    if( 1 <nombre_user.value.length < 5 ){
        log_name.textContent = "El nombre debe tener mas de 5 caracteres"

    }else{
        log_name.textContent = ""
        
    }
    
    if(clave_user.value.length < 8){
        log_contrasenia.textContent = "La clave debe tener mas de 8 caracteres"

    }else{
        log_contrasenia.textContent = ""
        
    }

    if(bolean_regex === null ){
        log_contrasenia2.textContent = "La clave debe tener digitos numericos"
    }else{
        log_contrasenia2.textContent = ""
    }

    

    
}

//inputs_form["contrasenia"].addEventListener("keydown",logSubmit)


let pwd = document.getElementById("pwd")



function stopper(event){
    ///////////////////////////////////////////////
    const nombre_user = inputs_form["nombre"];
    const clave_user = inputs_form["contrasenia"];
    ///////////////////////////////////////////////
    let regex_clave = /\d/
    let regex_user = /[a-zA-Z]{5,}/
    
    ///////////////////boolean for password////////////////////////////
    let value_regex = clave_user.value.search(regex_clave)
    let bolean_regex
    if(value_regex === -1 || clave_user.value.length < 8 ){
        bolean_regex = false
        //log_contrasenia.textContent = "La clave debe tener mas de 8 caracteres y digitos numericos"
    }else{
        bolean_regex = true
        //log_contrasenia.textContent = ""
    }
    
    ///////////////////boolean for user////////////////////////////
    let value_regex_user = nombre_user.value.search(regex_user)
    let bolean_user
    if(value_regex_user === -1){
        bolean_user = false
        //log_name.textContent = "El nombre debe tener mas de 5 caracteres"
    }else{
        bolean_user = true
        //log_name.textContent = ""
    }
    
    ///////////////////////////////////////////////
    console.log(bolean_regex)
    console.log(bolean_user)
    console.log(clave_user.value)

    
    let final_bolean = bolean_user && bolean_regex

    if(!final_bolean){
      
      event.preventDefault()
    }else{
      alert('formulario lleno')
      
    }
}

form.addEventListener("submit" , stopper)


