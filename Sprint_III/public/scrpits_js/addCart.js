let less = document.getElementById("button_minus") 
let mas = document.getElementById("button_plus") 
let box = document.getElementById("display_box") 


function incrementar(){
    box.stepUp()
    //box.innerHTML = numero+1
}

function disminuir(){
    box.stepDown()
}

mas.addEventListener("click",incrementar)
less.addEventListener("click",disminuir)