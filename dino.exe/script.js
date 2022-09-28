//loop del juego
let time = new Date()
let deltaTime = 0;

if(document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(init, 1)
}else{
    document.addEventListener("DOMContentLoaded", init)
}

function init(){
    time= new Date()
    start ()
    loop ()
}

function loop () {
    deltaTime = (new Date() - time) / 1000
    time = new Date
    update ()
    requestAnimationFrame (loop)
}
 
//logica del juego
let sueloY = 22
let velY = 0
let impulso = 900
let gravedad = 2500

let dinoPosX = 42
let dinoPosY = sueloY

let sueloX = 0
let velEscenario = 1288/3
let gameVel = 1
let puntaje = 0

let parado = false
let saltando = false