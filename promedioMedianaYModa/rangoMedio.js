lista1 = [100, 10, 15, 20, 25, 30, 35, 40, 45, 50];
lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calcularRangoMedio(lista) {
    lista.sort(function (a, b) {
        return a - b;
    });
    return (lista[lista.length - 1] - lista[0]) / 2;
}
