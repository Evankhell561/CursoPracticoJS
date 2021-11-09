lista1 = [
    1,
    2,
    1,
    3,
    1,
    4,
    2,
    1,
    2,
    1,
    5
]

function calcularModa(lista) {
    const listaCount = {};
    lista.map(
        function(item) {
            listaCount[item] = listaCount[item] ? listaCount[item] + 1 : 1;
        }
    )
    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    return listaArray[listaArray.length - 1][0];
}
