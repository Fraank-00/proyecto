document.getElementById("sumar").addEventListener("click", funcion)
{

 let numeroA = document.getElementById("numero1").value; 
    
console.log("el valor de A es: "+numeroA);

let numeroB = document.getElementById("numero2").value; 

console.log("el valor de B es: "+numeroB);

let resultado =sumar(parseInt(numeroA),parseInt(numeroB)); 

console.log("El resultado de la suma es:" +resultado); 

document.getElementById("Resultado").innerHTML = resultado;
document.getElementById("contenedoResultado").style.display="block"; 

function sumar(a,b){ return a + b; }}