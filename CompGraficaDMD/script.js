"use strict"
var canvas = document.getElementById("tela");
var gl = canvas.getContext("webgl");

function main(){
if(!gl){
    console.error("Navegador não suporta WebGL");
    return;
}
gl.clearColor(0,0,0,1);
gl.clear(gl.COLOR_BUFFER_BIT);
}

var render = new Render("tela");

function desenhar(){
    render.draw();
    requestAnimationFrame(desenhar);
}

requestAnimationFrame(desenhar);
main();
