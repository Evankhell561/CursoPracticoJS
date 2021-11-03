const lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;

for(let i = 0; i < lista1.length; i++) {
    sumaLista1 += lista1[i];
}

console.log(sumaLista1);

const promedioLista1 = sumaLista1 / lista1.length;
console.log(promedioLista1);

function calcularMediaAritmetica(lista) {
    // let suma = 0;
    // for(let i = 0; i < lista.length; i++) {
    //     suma += lista[i];
    // }
    const sumalista = lista.reduce(function (acumulador, valorActual) {
        return acumulador + valorActual;
    });
    return sumalista / lista.length;
}
