//const fs = require('fs')
import * as fs from 'fs'
///////////////////minus sign elements //////////////
let less = document.getElementById("button_minus") 
let less_1 = document.getElementById("button_minus_1") 
let less_2 = document.getElementById("button_minus_2") 
/////////////////////////////////////////////////////
let mas = document.getElementById("button_plus") 
let mas_1 = document.getElementById("button_plus_1") 
let mas_2 = document.getElementById("button_plus_2") 
/////////////////////////////////////////////////////
let box = document.getElementById("display_box") 
let box_1 = document.getElementById("display_box_1") 
let box_2 = document.getElementById("display_box_2") 
/////////////////////////////////////////////////////
////////////////// load database ////////////////////
//import fs from 'fs'


const productos =JSON.parse(fs.readFileSync(__dirname + '/../database/products.json')) ;
/////////////////////////////////////////////////////

function incrementar(box_element){
    let box_0 = box_element
    box_0.stepUp()
    //console.log(fs)
    //box.innerHTML = numero+1
}

function disminuir(box_element){
    let box_0 = box_element
    box_0.stepDown()
}



///////////////////////Event listener/////////////////////
mas.addEventListener("click",function(){
    incrementar(box)
})
less.addEventListener("click",function(){
    disminuir(box)
})
////////////////////////////////////////////
mas_1.addEventListener("click",function(){
    incrementar(box_1)
})
less_1.addEventListener("click",function(){
    disminuir(box_1)
})
/////////////////////////////////////////////
mas_2.addEventListener("click",function(){
    incrementar(box_2)
})
less_2.addEventListener("click",function(){
    disminuir(box_2)
})
/////////////////////////////////////////////