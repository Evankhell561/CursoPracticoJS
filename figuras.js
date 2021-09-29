console.log("Hola mundo!");


//codigo del cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");
//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
function perimetroCuadrado(lado){
    return lado * 4
}


function areaCuadrado(lado){
    return lado * lado
}

console.groupEnd();


//codigo del triangulo

 console.group("Triangulo");
// const ladorTriangulo1 = 6;
// const ladorTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("los lados del triangulo miden: " + ladorTriangulo1 + "cm, " + ladorTriangulo2 + "cm y " + baseTriangulo + "cm");
// const alturaTriangulo = 5.5;
// console.log("la altura del triangulo es: " + alturaTriangulo + "cm");
// const perimetroTriangulo = ladorTriangulo1 + ladorTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    return (base * altura) / 2
}



 console.groupEnd();

//codigo del circulo
console.group("Circulo");
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// const perimetroCirculo = diametroCirculo * Math.PI;
// console.log("La circunferencia circulo es: " + perimetroCirculo + "cm");

// const areaCirculo = Math.PI * radioCirculo * radioCirculo;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

function perimetroCirculo(radio){
    return 2 * Math.PI * radio
}

function areaCirculo(radio){
    return Math.PI * radio * radio
}


console.groupEnd();