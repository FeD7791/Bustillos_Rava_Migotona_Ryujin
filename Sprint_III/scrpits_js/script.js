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
    let regex_clave = /\d/
    let bolean_regex = regex_clave.test(clave_user)
    

    if(nombre_user.length < 5){
        log_name.textContent = "El nombre de tener mas de 5 caracteres"

    }else{
        log_name.textContent = ""
        
    }
    
    if(clave_user.length < 8){
        log_contrasenia.textContent = "La clave debe tener mas de 8 caracteres"

    }else{
        log_contrasenia.textContent = ""
        
    }

    if(!bolean_regex){
        log_contrasenia2.textContent = "La clave debe tener digitos numericos"
    }else{
        log_contrasenia2.textContent = ""
    }

    

    
}

form.addEventListener("keydown",logSubmit)

function stopper(event){
    ///////////////////////////////////////////////
    const nombre_user = inputs_form["nombre"];
    const clave_user = inputs_form["contrasenia"];
    ///////////////////////////////////////////////
    let regex_clave = /\d/
    
    ///////////////////////////////////////////////
    let bolean_regex = regex_clave.test(clave_user)
    let bolean_user = false;
    let bolean_clave = false;
    ///////////////////////////////////////////////
    if(nombre_user.length > 5){bolean_user = true}
    if(clave_user.length >8){bolean_clave = true}
    ///////////////////////////////////////////////
    let final_bolean = bolean_user && bolean_clave && bolean_regex


    if(!final_bolean){
      
      event.preventDefault()
    }else{
      alert('formulario lleno')
      
    }
}

form.addEventListener("submit" , stopper)


