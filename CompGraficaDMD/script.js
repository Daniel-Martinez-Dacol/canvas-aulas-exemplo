"use strict"
var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var x=200,y=100,larg=300,alt=150;

function desenhar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgb(255, 128, 0)";
    requestAnimationFrame(desenhar);
    //CIRCULO:
    ctx.fillStyle="#7f0000";
    ctx.beginPath();
    ctx.arc(320,240,230,20,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    //risco:
    ctx.beginPath();
    ctx.moveTo(320,220);
    ctx.lineTo(300,300);
    ctx.lineTo(200,300);
    ctx.lineTo(400,-490);
    ctx.lineTo(300,190);
    ctx.stroke();

}

requestAnimationFrame(desenhar);

document.onkeydown = function (evt) {
    x += 5;
}