let producto = Number(prompt("Ingrese precio del producto:"));
const IVA = 0.23;
let resultado = producto * IVA;
let resultado1= resultado + producto;
console.log("El Valor con el IVA es: $"+resultado1);
/* Espacio */
let nac = Number(prompt("Ingrese su año de nacimiento: "));
const añoac = 2025;
let edad = añoac - nac;
console.log("Su edad es :"+edad);
/* Espacio*/
let opcion = Number(prompt("Ingrede numero de la opcion: \n1-Cuadrado\n 2-Triangulo\n3-Rectangulo\n4-Circulo"));
if(opcion==1){
    let lado =Number(prompt("Ingrese tamaño de un lado: "));
    let resultado = lado*lado;
    console.log("el area del cuadrado es: "+resultado);
}else if(opcion==2){
     let Base =Number(prompt("Ingrese tamaño de la base del triangulo: "));
      let Altura =Number(prompt("Ingrese tamaño de la altura del triangulo: "));
    let resultado = Base*Altura;
     console.log("el area del triangulo es: "+resultado);
}else if(opcion==3){
       let ancho =Number(prompt("Ingrese tamaño del ancho del rectangulo: "));
      let largo =Number(prompt("Ingrese tamaño del largo del rectangulo: "));
    let resultado = ancho*largo;
     console.log("el area del cuadrado es: "+resultado);
}else if(opcion==4){
    let radio =Number(prompt("Ingrese tamaño del radio del circulo: "));
      const PI=3.14;
    let resultado = PI*Math.pow(radio,2);
     console.log("el area del cuadrado es: "+ resultado);
}else{
    alert("Opcion no valida!")
}
/* Espacio*/
nota1= Number(prompt("Ingrese primer nota"));

nota2= Number(prompt("Ingrese segunda nota"));

nota3= Number(prompt("Ingrese tercer nota"));

let promedio= nota1+nota2+nota3;

let promedio1= promedio/3;

console.log ("El promedio de nota es : "+ promedio1)
/*Espacio*/
let opc = Number(prompt("Ingrese opcion:\n1-Potencia \n2-Raiz Cuadrada"));
if(opc==1){
base= Number(prompt("Ingrese base"));
expo= Number(prompt("Ingrese exponente"));
let calculo= Math.pow (base, expo);
console.log ("El resultado del calculo es : "+ calculo);
}else if(opc==2){
base8= Number(prompt("Ingrese numero"));
let calculo1= Math.sqrt(base8);
console.log ("El resultado del calculo es : "+ calculo1);
}else{
  alert("No ingresaste opcion correcta");
}




