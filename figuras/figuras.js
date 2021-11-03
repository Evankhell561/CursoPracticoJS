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

function formulaAlturaTriangulo(lado, base) {
    return Math.sqrt(lado * lado - (base * base/4));
}

function alturaTrianguloIsoceles(lado1, lado2, lado3) {
    altura = null;
    if((lado1 == lado2) && lado1 != lado3) {
        altura = formulaAlturaTriangulo(lado1, lado3);
    }
    else if(lado1 == lado3 && lado1 != lado2) {
        altura = formulaAlturaTriangulo(lado1, lado2);
    }
    else if(lado2 == lado3 && lado2 != lado1) {
        altura = formulaAlturaTriangulo(lado2, lado1);
    }
    else {
        alert("El triangulo debe ser isoceles");
    }
    return altura;
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

//aqui interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const lado = parseInt(input.value);
    const perimetro = perimetroCuadrado(lado);
    // alert(perimetro);
    alert("El perimetro del cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const lado = parseInt(input.value);
    const area = areaCuadrado(lado);
    // alert(area);
    alert("el area del cuadrado es: " + area + "cm^2");
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    // alert(perimetro);
    alert("El perimetro del triangulo es: " + perimetro + "cm");
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTriangulo3");
    const input2 = document.getElementById("inputAlturaTriangulo");
    const base = parseInt(input1.value);
    const altura = parseInt(input2.value);
    const area = areaTriangulo(base, altura);
    // alert(area);
    alert("el area del triangulo es: " + area + "cm^2");
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const radio = parseInt(input.value);
    const perimetro = perimetroCirculo(radio);
    // alert(perimetro);
    alert("El perimetro del circulo es: " + perimetro + "cm");
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const radio = parseInt(input.value);
    const area = areaCirculo(radio);
    // alert(area);
    alert("El area del circulo es: " + area + "cm^2");
}

function calcularAlturaTrianguloIsoceles() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const lado3 = parseInt(input3.value);
    const altura = alturaTrianguloIsoceles(lado1, lado2, lado3);
    // alert(altura);
    alert("La altura del triangulo es: " + altura + "cm");
}
