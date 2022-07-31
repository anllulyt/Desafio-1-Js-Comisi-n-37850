 class productos {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
    mostrarProducto(){
        return this.nombre
    }
}
const producto1 = new productos("Cesta Decorativa", 1200)
const producto2 = new productos("Espejo Redondo", 5000)
const producto3 = new productos("Porta Cubiertos", 2000)
const producto4 = new productos("Marco de madera", 4500)
const producto5 = new productos("Lampara", 9000)
const producto6 = new productos("Mesa de noche", 10000)
const producto7 = new productos("taza de te", 1500)
const producto8 = new productos("florero", 2000)
const producto9 = new productos("PortaVasos", 1900)
const producto10 = new productos("Mantel", 5000)

class detallePedido {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    calcSubtotal() {
        let subtotal = this.producto.precio * this.cantidad;
        return subtotal
    }
    mostrarDetalle() {
        return (`Cantidad: ${this.cantidad}  Producto: ${this.producto.mostrarProducto()}   ( $ ${this.calcSubtotal()} )`)
    }
}
const detallePedido1 = new detallePedido(producto1, 2);
const detallePedido2 = new detallePedido(producto2, 1);
const detallePedido3 = new detallePedido(producto3, 2);
const detallePedido4 = new detallePedido(producto4, 4);
const detallePedido5 = new detallePedido(producto5, 1);
const detallePedido6 = new detallePedido(producto1, 1);
const detallePedido7 = new detallePedido(producto2, 1);
const detallePedido8 = new detallePedido(producto3, 2);
const detallePedido9 = new detallePedido(producto4, 1);
const detallePedido10 = new detallePedido(producto5, 1);

class pedido {
    constructor(fecha, detalles) {
        this.fecha = fecha;
        this. detalles = detalles;
    }
    calcTotal() {
        let total= 0;
        for(const dt of this.detalles) {
            total = total + dt.calcSubtotal();
        }
        return total;
    }
    mostrarPedido() {
        let txt = `Pedidos a la fecha:  ${this.fecha.toLocaleString()} \n`;
        for(const dt of this.detalles) {
            txt = `${txt} - ${dt.mostrarDetalle()} \n`
        }
        txt = `${txt} \n ************** Total a pagar: $ + Intl.NumberFormat().format(${this.calcTotal()}`
        return txt
    }
}
const arrayPedidos = [];
arrayPedidos.push(detallePedido1)
arrayPedidos.push(detallePedido2)
arrayPedidos.push(detallePedido3)
arrayPedidos.push(detallePedido4)
arrayPedidos.push(detallePedido5)
arrayPedidos.push(detallePedido6)
arrayPedidos.push(detallePedido7)
arrayPedidos.push(detallePedido8)
arrayPedidos.push(detallePedido9)
arrayPedidos.push(detallePedido10)

const pedido1 = new pedido(new Date(), arrayPedidos);

const iniciarPedido = () => {
    console.log(pedido1.mostrarPedido())
}

iniciarPedido();
