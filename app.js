// variables iniciales
let nContProductos = Number(prompt("Escribe la cantidad de productos a comprar, hasta 10 productos"))
let pregunta = NaN
let repetir = true

// while para verificar si se ingresó el valor correcto para continuar o cancelar la transacción
while (repetir) {
    pregunta = "no"
  //  repetir = true
    // si el valor es mas de 20 se alerta 
    if (nContProductos > 10) {
        alert("Solo puede facturar hasta 10 productos")
        nContProductos = Number(prompt("Escribe la cantidad de productos a comprar, hasta 10 productos"))
        repetir = true
    } else if ((nContProductos === 0) || (nContProductos == "")) {
        alert("No agregó una cantidad valida")
        pregunta = prompt("¿Desea Cancelar? si/no").toLowerCase()
        if (pregunta === "si") {
            repetir = false
        } else if (pregunta === "no") {
            repetir = true
            nContProductos = Number(prompt("Escribe la cantidad de productos a comprar, hasta 10 productos"))
        } else {
            alert("respuesta no valida")
            repetir = true
        }
    } else {
        repetir = false
    }
}

let i = 1;
let producto = NaN;
let monto = 0;
let total = 0;

// se abre un if si no se cancela la transacción 
if (pregunta === "no") {
    for (i; i <= nContProductos; i++) {
        producto = prompt("Escribe el nombre del producto: " + i)
        monto = Number(prompt("Escribe el costo del producto: " + producto))

        total = Number(total) + monto;
        console.log(i + ".- Producto: " + producto + " Costo: " + monto)
    }

    if ((total === 0) || (total ==  "") ) {
        alert("No ingreso Monto valido --- Transacción Cancelada, Hasta luego!!")
    }
    else{
        
        console.log("Total a pagar para " + nContProductos + " productos " + total)
    }
} else {
    alert("Transacción Cancelada, Hasta luego!!")
}