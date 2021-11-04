const lista1 = [100,
    200,
    40000000000,
    500,
    1000]

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
