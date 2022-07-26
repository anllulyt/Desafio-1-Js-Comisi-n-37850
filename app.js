// variables iniciales
let nContProductos = 0
let repetir = true
//funcion para que salga del while si el usuario cancela la transacción 
function continuar(pregunta) {
    if (pregunta === true) {
        repetir = false
        nContProductos = 0
    }
}

function validanumero (numero){
    if ((numero <= 0) || (numero == "") || (isNaN(numero))) {
        return true    
    }
    else{
        return false
    }
}

//funcion para validar que los datos sean correctos  
function validar(ncantidad) {
    let validanum = validanumero ( ncantidad )
    if (ncantidad > 10) {
        alert("Solo puede facturar hasta 10 productos")
        continuar(confirm("¿Desea Cancelar?"))
    } else if (validanum === true) {
        alert(`No agregó un numero valido:   ${ncantidad}`)
        continuar(confirm("¿Desea Cancelar?"))
    } else {
        repetir = false
    }
}

// while para iniciar / ingrsar /validar el dato 
while (repetir) {
    nContProductos = prompt("Escribe la cantidad de productos a comprar, hasta 10 productos")
    validar(nContProductos)
}

// se abre un if para realizar los calculos 
if (nContProductos > 0) {
    // declaro varibles 
    let i = 1
    let producto
    let monto 
    let total = 0
    // creo funciones de flecha para las operaciones 
    const suma = (num1, num2) => num1 + num2
    const iva = num3 => num3 * 0.21
    const descuento = num4 => num4 * 0.15
    const subtotal = (num5, num6) => num5 - num6

    // abro un for para que se vaya ingresando y calculando los productos 
    for (i; i <= nContProductos; i++) {
        //recibo los datos 
        producto = prompt(`Escribe el nombre del producto:  ${i}`)
        // validar que el monto ingresado
        let esnumero = true
        while (esnumero) {
            monto = Number(prompt(`Escribe el costo del producto:  ${producto}`))
            esnumero = validanumero ( monto )
            if (esnumero === true) {
                alert(`No agregó un numero valido:   ${monto}`)
            }
        }
        // se va sumando el total de los productos ingresados
        total = suma(total, monto)
        // se va mostrando los productos ingresados para ir armando una lista
        console.log(`${i} .- Producto:  ${producto} Costo: ${monto}`)
    }

    let nMontoDesc = 0
    if (total > 1000) {
        nMontoDesc = descuento(total)
    }
    let nMontoSubtotal = subtotal(total, nMontoDesc)
    let nMontoIva = iva(nMontoSubtotal)
    let nMontoTotal = suma(nMontoSubtotal, nMontoIva)

    console.log(`Cantidad de Productos:  ${nContProductos}`)
    console.log(`Subtotal:  ${total}`)
    console.log(`Descuento:  ${nMontoDesc} `)
    console.log(`Iva ${nMontoIva}`)
    console.log(`Total a pagar: ${nMontoTotal}`)
} else {
    alert("Transacción Cancelada, Hasta luego!!")
}