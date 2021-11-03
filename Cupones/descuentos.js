const coupons = {
    "cUpon1" : 10,
    "cUpOn2" : 20,
    "CuPoN3" : 30,
    "cuPon4" : 100
};

function calcularPrecioConDescuento(precio, cupon) {
    const descuento = coupons[cupon];
    if(typeof descuento === "undefined") {
        return precio;
    }
    const porcentajePrecioDescuento = 100 - descuento;
    const precioDescuento = precio * porcentajePrecioDescuento / 100;
    return precioDescuento;
}

function calcularDescuento() {
    const input1 = document.getElementById("inputPrecio");
    const precio = parseInt(input1.value);

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const resultP = document.getElementById("resultP");
    resultP.innerText = "el monto a pagar es: $" + calcularPrecioConDescuento(precio, couponValue);
}
