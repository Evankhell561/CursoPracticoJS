const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(function(salaryA,salaryB){
    return salaryA - salaryB;
});

function isPar(numero) {
    return numero % 2 === 0
}

function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2)
    lista.sort((a, b) => a - b)
    if (isPar(lista.length)) {
        return (lista[mitadLista] + lista[mitadLista - 1]) / 2
    }
    return lista[mitadLista]

}

console.log(calcularMediana(salariosColSorted));
