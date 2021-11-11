//helpers

function isPar(numero) {
    return numero % 2 === 0
}

//Calculadora mediana

//Mediana general
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(function(salaryA,salaryB){
    return salaryA - salaryB;
});


function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2)
    lista.sort((a, b) => a - b)
    if (isPar(lista.length)) {
        return (lista[mitadLista] + lista[mitadLista - 1]) / 2
    }
    return lista[mitadLista]

}

medianaRealCol = calcularMediana(salariosColSorted);

//mediana top 10%

const spliceStart = parseInt(salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColtop10 = salariosColSorted.splice(spliceStart, spliceCount);

console.log(salariosColtop10);

mediantaTop10Col = calcularMediana(salariosColtop10);

console.log(medianaRealCol,
    "Es la mediana real de los salarios de Colombia",
    mediantaTop10Col,
    "Es la mediana de los top 10 salarios de Colombia",
    );
