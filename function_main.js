let motor = new Audio('./assets/motor.wav')
let batida = new Audio('./assets/batida.mp3')
motor.volume = 0.8
motor.loop = true
batida.volume = 0.8

let jogar = true

let des = document.getElementById('des').getContext('2d')
function desenha(){
    
}
function game_over(){
    if(plane.vida <=0){
        jogar = false
        // música com o jogo parado
    }
}
function vida(){
    
}
function colid(){
    
}
function objeto(){
    
}
// function moeda(){
//     if(plane.moeda(p2)){
//         plane.md +=1
//     }else if(plane.moeda(p3)){
//         plane.md += 1
//     }
// }

function point(){
    if(plane.point(p2)){
        plane.pts +=10
    }else if(plane.point(p3)){
        plane.pts += 10
    }
}
function atualiza(){

}

//obstáculos

function avioes(){
    
}

function nuvem(){
    
}

function passaro(){
    
}