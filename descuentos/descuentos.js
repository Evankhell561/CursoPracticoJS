// const precioOriginal = 100;
// const descuento = 15;

// const porcentajePrecioDescuento = 100 - descuento;
// const precioDescuento = precioOriginal * porcentajePrecioDescuento / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioDescuento
// });

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioDescuento = precio * porcentajePrecioDescuento / 100;

    return precioDescuento;
}

function calcularDescuento() {
    const input1 = document.getElementById("inputPrecio");
    const input2 = document.getElementById("inputDescuento");
    const precio = parseInt(input1.value);
    const descuento = parseInt(input2.value);
    const resultP = document.getElementById("resultP");
    resultP.innerText = "el monto a pagar es: $" + calcularPrecioConDescuento(precio, descuento);
}
