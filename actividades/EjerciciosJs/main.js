

/* Ejercicio 15 */
document.write('<h3> Ejercicio 15: función con dos parametros')
var precio=parseFloat(prompt('Calculo de precio con IVA, por favor ingrese el precio:'));
var iva=parseFloat(prompt('Por favor ingrese el iva'));
document.write('<h4> Precio:💲 ' + precio + ' IVA: ' + iva + ' ✔ Precio con IVA: 💲' + precioConIva(precio,iva) + '</h4>')


function precioConIva(precio,iva) {
    return precio * (iva/100) + precio
}




